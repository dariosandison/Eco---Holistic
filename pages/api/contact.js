// Enhanced contact API with Resend + honeypot + simple rate limit
import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;
const toEmail = process.env.CONTACT_TO_EMAIL || process.env.TO_EMAIL;
const fromEmail = process.env.CONTACT_FROM_EMAIL || 'no-reply@wildandwell.example';

// naive in-memory rate limiting (per instance)
const RATE_LIMIT = { windowMs: 15 * 60 * 1000, max: 10 };
const hits = new Map();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method Not Allowed' });
  }

  const ip = (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '').toString().split(',')[0].trim();
  const now = Date.now();
  const key = ip || 'anon';
  const entry = hits.get(key) || { count: 0, ts: now };
  if (now - entry.ts > RATE_LIMIT.windowMs) {
    entry.count = 0;
    entry.ts = now;
  }
  entry.count += 1;
  hits.set(key, entry);
  if (entry.count > RATE_LIMIT.max) {
    return res.status(429).json({ ok: false, error: 'Too many requests' });
  }

  const { name, email, message, website = '', t } = req.body || {};

  // Honeypot: 'website' must be empty
  if (website) {
    return res.status(200).json({ ok: true });
  }
  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: 'Missing fields' });
  }
  // Minimal time-on-page check (3s)
  const submittedAt = parseInt(t || '0', 10);
  if (submittedAt && (Date.now() - submittedAt) < 3000) {
    return res.status(400).json({ ok: false, error: 'Form submitted too quickly' });
  }

  try {
    if (resendApiKey && toEmail) {
      const resend = new Resend(resendApiKey);
      await resend.emails.send({
        from: fromEmail,
        to: toEmail,
        reply_to: email,
        subject: `Wild & Well contact from ${name}`,
        text: message
      });
    } else {
      console.log('Contact message (no email provider configured):', { name, email, message });
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, error: 'Failed to send' });
  }
}
