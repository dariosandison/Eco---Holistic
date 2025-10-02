// pages/api/track.js
export default async function handler(req, res) {
  // This endpoint exists to let sendBeacon() succeed without CORS issues.
  // You can wire this to a DB or webhook later. For now we just 204.
  res.setHeader('Cache-Control', 'no-store');
  if (req.method === 'POST') return res.status(204).end();
  return res.status(405).json({ ok: false, error: 'Method Not Allowed' });
}
