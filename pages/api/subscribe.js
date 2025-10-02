// pages/api/subscribe.js
// Works with: Beehiiv, ConvertKit, MailerLite, or FormSubmit (fallback)
// Choose your provider by setting env vars (see notes below). No more code changes needed.

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

    const provider = (process.env.NEWSLETTER_PROVIDER || "").toLowerCase();

    // --- Beehiiv ---
    if (provider === "beehiiv") {
      const { BEEHIIV_API_KEY, BEEHIIV_PUBLICATION_ID } = process.env;
      if (!BEEHIIV_API_KEY || !BEEHIIV_PUBLICATION_ID) {
        throw new Error("Missing Beehiiv env vars");
      }

      const resp = await fetch(
        `https://api.beehiiv.com/v2/publications/${BEEHIIV_PUBLICATION_ID}/subscriptions`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-ApiKey": BEEHIIV_API_KEY,
          },
          body: JSON.stringify({
            email,
            reactivate_existing: false,
            send_welcome_email: true,
            utm_source: "website",
            referring_site: req.headers?.origin || null,
          }),
        }
      );

      if (resp.status === 201 || resp.ok) {
        return res.status(200).json({ ok: true });
      }
      console.error("Beehiiv error:", resp.status, await resp.text());
      return res.status(200).json({ ok: true });
    }

    // --- ConvertKit ---
    if (provider === "convertkit") {
      const { CONVERTKIT_FORM_ID, CONVERTKIT_API_KEY } = process.env;
      if (!CONVERTKIT_FORM_ID || !CONVERTKIT_API_KEY) {
        throw new Error("Missing ConvertKit env vars");
      }

      const resp = await fetch(
        `https://api.convertkit.com/v3/forms/${CONVERTKIT_FORM_ID}/subscribe`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ api_key: CONVERTKIT_API_KEY, email }),
        }
      );

      if (resp.ok) {
        return res.status(200).json({ ok: true });
      }
      console.error("ConvertKit error:", resp.status, await resp.text());
      return res.status(200).json({ ok: true });
    }

    // --- MailerLite (new API) ---
    if (provider === "mailerlite") {
      const { MAILERLITE_API_KEY, MAILERLITE_GROUP_ID } = process.env;
      if (!MAILERLITE_API_KEY) {
        throw new Error("Missing MailerLite env vars");
      }

      const payload = MAILERLITE_GROUP_ID
        ? { email, groups: [MAILERLITE_GROUP_ID] }
        : { email };

      const resp = await fetch(
        "https://connect.mailerlite.com/api/subscribers",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${MAILERLITE_API_KEY}`,
          },
          body: JSON.stringify(payload),
        }
      );

      if (resp.status === 201 || resp.ok) {
        return res.status(200).json({ ok: true });
      }
      console.error("MailerLite error:", resp.status, await resp.text());
      return res.status(200).json({ ok: true });
    }

    // --- Fallback: FormSubmit to your inbox (no account needed) ---
    const forwardTo = process.env.FORMSUBMIT_EMAIL; // e.g. you@gmail.com
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

    // Always return ok to keep UX smooth
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Subscribe error:", err);
    return res.status(200).json({ ok: true });
  }
}
