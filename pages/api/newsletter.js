// /pages/api/newsletter.js
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Method not allowed' });
  try {
    const { email, page_path, utm, source } = req.body || {};
    // Placeholder: log to function output (visible in Vercel logs)
    console.log('Newsletter signup:', { email, page_path, utm, source, at: new Date().toISOString() });
    // TODO: Wire to provider (Mailchimp/ConvertKit/etc.)
    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(500).json({ ok: false });
  }
}
