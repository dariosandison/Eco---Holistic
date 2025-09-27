// pages/api/search.js
import { getAllDocs } from '../../lib/content';

export default function handler(req, res) {
  try {
    const url = new URL(req.url, 'http://x');
    const q = (url.searchParams.get('q') || '').toLowerCase().trim();
    if (!q) return res.status(200).json({ results: [] });

    // Read from filesystem on the server (safe)
    const all = getAllDocs({
      dir: 'content/guides',
      fields: ['slug','title','excerpt','category']
    }) || [];

    const results = all.filter(p =>
      (p.title || '').toLowerCase().includes(q) ||
      (p.excerpt || '').toLowerCase().includes(q) ||
      (p.category || '').toLowerCase().includes(q)
    ).slice(0, 10);

    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');
    res.status(200).json({ results });
  } catch (e) {
    res.status(200).json({ results: [] });
  }
}
