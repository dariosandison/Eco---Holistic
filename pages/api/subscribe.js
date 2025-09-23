// pages/api/subscribe.js

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, message: "Method not allowed" });
  }

  try {
    const { email } = req.body || {};
    const isValid =
      typeof email === "string" &&
      email.length <= 254 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValid) {
      return res.status(400).json({ ok: false, message: "Invalid email" });
    }

    // --- Optional: forward to an inbox via FormSubmit without any API key ---
    // If you set FORMSUBMIT_EMAIL in Vercel env (e.g. your Gmail),
    // we'll forward the submission there instantly with a server-to-server POST.
    // (One-time confirmation from FormSubmit will be sent to that inbox.)
    const forwardTo = process.env.FORMSUBMIT_EMAIL; // e.g. hello@yourdomain.com
    if (forwardTo) {
      const action = `https://formsubmit.co/${encodeURIComponent(forwardTo)}`;
      const formData = new URLSearchParams();
      formData.append("email", email);
      formData.append("_subject", "New newsletter subscriber");
      formData.append("_captcha", "false");

      await fetch(action, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      }).catch(() => {});
    }

    // Always respond success (we can wire to a provider later without touching the UI)
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Subscribe error:", err);
    return res.status(200).json({ ok: true }); // fail-closed to not block UX
  }
}
