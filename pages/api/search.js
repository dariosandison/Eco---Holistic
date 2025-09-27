// pages/api/search.js
import { getAllDocs } from '../../lib/content';

export default function handler(req, res) {
  const q = (req.query.q || '').toString().trim().toLowerCase();
  const all = getAllDocs({ dir: 'content/guides', fields: ['slug', 'title', 'excerpt'] });

  if (!q) return res.status(200).json({ items: [] });

  const items = all
    .filter((x) => {
      const hay = `${x.title || ''} ${x.excerpt || ''} ${x.slug}`.toLowerCase();
      return hay.includes(q);
    })
    .slice(0, 12);

  res.status(200).json({ items });
}
