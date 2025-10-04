// pages/api/contact.js
// Sends contact emails via Resend HTTP API (no npm package needed)

const hits = new Map(); // naive in-memory rate-limit: per instance

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method Not Allowed" });
  }

  const {
    name = "",
    email = "",
    message = "",
    website = "", // honeypot: must be empty
    t,            // client time when form rendered (ms since epoch)
  } = (req.body || {});

  // Honeypot
  if (website) return res.status(200).json({ ok: true });

  // Basic validation
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!name.trim() || !validEmail || !message.trim()) {
    return res.status(400).json({ ok: false, error: "Missing or invalid fields" });
  }

  // Minimal time-on-page (3s) to deter bots
  const submittedAt = parseInt(t || "0", 10);
  if (submittedAt && Date.now() - submittedAt < 3000) {
    return res.status(400).json({ ok: false, error: "Form submitted too quickly" });
  }

  // Simple per-IP rate limit: 10 requests / 15 minutes
  const RATE = { windowMs: 15 * 60 * 1000, max: 10 };
  const ip =
    (req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "")
      .toString()
      .split(",")[0]
      .trim() || "anon";

  const now = Date.now();
  const entry = hits.get(ip) || { count: 0, ts: now };
  if (now - entry.ts > RATE.windowMs) {
    entry.count = 0;
    entry.ts = now;
  }
  entry.count += 1;
  hits.set(ip, entry);
  if (entry.count > RATE.max) {
    return res.status(429).json({ ok: false, error: "Too many requests" });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const TO = process.env.CONTACT_TO_EMAIL;
  const FROM =
    process.env.CONTACT_FROM_EMAIL || "no-reply@updates.wild-and-well.store";

  if (!RESEND_API_KEY || !TO || !FROM) {
    // Graceful fallback: don't break the UI if not configured
    console.log("Contact (not configured):", { name, email, message });
    return res
      .status(200)
      .json({ ok: true, note: "Email provider not configured" });
  }

  try {
    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: TO,
        reply_to: email,
        subject: `Wild & Well contact from ${name}`,
        text: `${message}\n\nReply to: ${email}`,
      }),
    });

    if (resp.ok) {
      return res.status(200).json({ ok: true });
    }
    const data = await resp.json().catch(() => ({}));
    return res
      .status(resp.status)
      .json({ ok: false, error: data?.message || "Failed to send" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, error: "Server error" });
  }
}
