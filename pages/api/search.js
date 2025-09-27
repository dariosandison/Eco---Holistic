// pages/api/search.js
import { getAllDocs } from '../../lib/content';

export default function handler(req, res) {
  try {
    const q = String(req.query.q || '').toLowerCase();
    const guides = getAllDocs({
      dir: 'content/guides',
      fields: ['slug','title','excerpt','date','image']
    });
    const blog = getAllDocs({
      dir: 'content/blog',
      fields: ['slug','title','excerpt','date','image']
    });

    const hay = (t='') => t.toLowerCase();
    const results = [...guides.map(x=>({ ...x, type:'guide' })), ...blog.map(x=>({ ...x, type:'blog' }))]
      .filter(x => !q || hay(x.title).includes(q) || hay(x.excerpt).includes(q))
      .slice(0, 20);

    res.status(200).json({ ok:true, results });
  } catch (e) {
    res.status(200).json({ ok:true, results:[] }); // never break the page
  }
}
