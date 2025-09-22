// /pages/api/contact.js
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Method not allowed' });
  try {
    const { name, email, message, page_path, utm } = req.body || {};
    // Placeholder: log to function output (visible in Vercel logs)
    console.log('Contact message:', { name, email, message, page_path, utm, at: new Date().toISOString() });
    // TODO: Forward to email/service (Resend, SendGrid, Mailgun, etc.)
    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(500).json({ ok: false });
  }
}
