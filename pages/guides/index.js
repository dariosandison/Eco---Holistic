// pages/guides/index.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import SEO from '../../components/SEO';
import hubsData from '../../data/hubs';

function normHubs() {
  if (Array.isArray(hubsData)) return hubsData;
  if (hubsData && typeof hubsData === 'object') {
    if (Array.isArray(hubsData.hubs)) return hubsData.hubs;
    return Object.entries(hubsData).map(([slug, v]) => ({ slug, ...(v || {}) }));
  }
  return [];
}
const hubs = normHubs();

function toArr(v) {
  if (!v) return [];
  if (Array.isArray(v)) return v;
  if (typeof v === 'string') return v.split('|').join(',').split(',').map(s => s.trim()).filter(Boolean);
  return [];
}

function listGuides() {
  const dir = path.join(process.cwd(), 'content', 'guides');
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.md') || f.endsWith('.mdx'))
    .map(f => {
      const slug = f.replace(/\.(md|mdx)$/,'');
      const raw = fs.readFileSync(path.join(dir, f), 'utf8');
      const { data } = matter(raw);
      const updated = data?.updated || data?.date || null;
      const tags = toArr(data?.tags).map(t => t.toLowerCase());
      const isBest = /^(best|top)\b/i.test(data?.title || '');
      return {
        slug,
        title: data?.title || slug.replace(/-/g,' '),
        description: data?.description || '',
        date: updated ? new Date(updated).toISOString() : null,
        tags,
        isBest
      };
    })
    .sort((a,b) => (b.date || '').localeCompare(a.date || ''));
}

function groupByHub(items) {
  const out = [];
  for (const h of hubs) {
    const key = (h.slug || '').toLowerCase();
    const aliases = toArr(h.aliases).map(a => a.toLowerCase());
    const bucket = items.filter(it => it.tags.some(t => t === key || aliases.includes(t)));
    if (bucket.length) out.push({ hub: h, items: bucket });
  }
  return out;
}

export async function getStaticProps() {
  const items = listGuides();
  const best = items.filter(x => x.isBest).slice(0, 12);
  const grouped = groupByHub(items);

  const seo = {
    title: 'Guides — Wild & Well',
    description: 'Actionable guides for sleep, stress, movement, clean living, and more.',
    url: 'https://www.wild-and-well.store/guides',
    breadcrumbs: [
      { name: 'Home', item: 'https://www.wild-and-well.store/' },
      { name: 'Guides', item: 'https://www.wild-and-well.store/guides' }
    ]
  };
  return { props: { best, grouped, seo }, revalidate: 60 * 60 * 6 };
}

export default function GuidesIndex({ best, grouped, seo }) {
  return (
    <>
      <SEO {...seo} />
      <div className="container">
        <article className="post">
          <h1 className="post-title">Guides</h1>

          {best.length ? (
            <>
              <h2>Best Picks & Roundups</h2>
              <ul>
                {best.map(x => (
                  <li key={x.slug}>
                    <Link href={`/guides/${x.slug}`}>{x.title}</Link>
                    {x.description ? <> — {x.description}</> : null}
                  </li>
                ))}
              </ul>
            </>
          ) : null}

          {grouped.map(group => (
            <div key={group.hub.slug} style={{marginTop: 16}}>
              <h2>{group.hub.title || group.hub.slug.replace(/-/g,' ')}</h2>
              <ul>
                {group.items.slice(0, 12).map(x => (
                  <li key={x.slug}>
                    <Link href={`/guides/${x.slug}`}>{x.title}</Link>
                    {x.description ? <> — {x.description}</> : null}
                  </li>
                ))}
              </ul>
              <p className="post-meta">
                See the <Link href={`/hubs/${group.hub.slug}`}>{group.hub.title ||
