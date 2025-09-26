// pages/api/search.js
import MiniSearch from 'minisearch';
import { getAllDocs } from '@/lib/content';

let indexPromise;

async function buildIndex() {
  const [guides, blog = []] = await Promise.all([
    getAllDocs('guides'),
    getAllDocs('blog').catch(() => []),
  ]);

  const docs = [...guides, ...blog].map((d) => ({
    id: `${d.kind}:${d.slug}`,
    kind: d.kind,
    slug: d.slug,
    title: d.frontmatter.title,
    description: d.frontmatter.description || '',
    body: d.html.replace(/<[^>]+>/g, ' '),
  }));

  const mini = new MiniSearch({
    fields: ['title', 'description', 'body'],
    storeFields: ['title', 'description', 'kind', 'slug'],
  });

  mini.addAll(docs);
  return mini;
}

export default async function handler(req, res) {
  const q = (req.query.q || '').toString().trim();
  if (!indexPromise) indexPromise = buildIndex();
  const index = await indexPromise;

  if (!q) return res.status(200).json({ results: [] });

  const hits = index.search(q, { prefix: true, fuzzy: 0.2, boost: { title: 3, description: 2 } });
  const results = hits.slice(0, 20).map((h) => ({
    title: h.title,
    snippet: h.description || '',
    url: `/${h.kind}/${h.slug}`,
  }));

  res.status(200).json({ results });
}
