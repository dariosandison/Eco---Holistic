// pages/reviews/index.js
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import SEO from '../../components/SEO';

function parseFrontmatter(raw) {
  if (!raw.startsWith('---')) return {};
  const end = raw.indexOf('\n---', 3);
  if (end === -1) return {};
  const fm = raw.slice(3, end).trim();
  const meta = {};
  fm.split(/\r?\n/).forEach(line => {
    const m = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!m) return;
    const key = m[1];
    let val = m[2].trim().replace(/^"(.*)"$/, '$1').replace(/^'(.*)'$/, '$1');
    meta[key] = val;
  });
  return meta;
}

export async function getStaticProps() {
  const dir = path.join(process.cwd(), 'content/reviews');
  const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter(f => f.endsWith('.md') || f.endsWith('.mdx')) : [];
  const reviews = files.map(filename => {
    const slug = filename.replace(/\.(md|mdx)$/, '');
    const raw = fs.readFileSync(path.join(dir, filename), 'utf8');
    const meta = parseFrontmatter(raw);
    return {
      slug,
      title: meta.title || slug.replace(/-/g,' '),
      description: meta.description || '',
      date: meta.date || ''
    };
  }).sort((a,b)=> (b.date||'').localeCompare(a.date||''));
  return { props: { reviews }, revalidate: 60 * 60 * 12 };
}

export default function ReviewsIndex({ reviews }) {
  const seo = {
    title: 'Reviews — Wild & Well',
    description: 'Hands-on, evidence-informed product reviews.',
    url: 'https://www.wild-and-well.store/reviews',
    type: 'website',
    breadcrumbs: [
      { name: 'Home', item: 'https://www.wild-and-well.store/' },
      { name: 'Reviews', item: 'https://www.wild-and-well.store/reviews' }
    ]
  };
  return (
    <>
      <SEO {...seo} />
      <div className="container" style={{ marginTop: 22 }}>
        <section className="hero">
          <div className="hero-inner">
            <h1 className="post-title">Reviews</h1>
            <p className="hero-slogan">Hands-on tests, clear results.</p>
          </div>
        </section>

        <h2 className="section-title">Latest reviews</h2>
        <div className="grid">
          {reviews.map(r => (
            <article className="card" key={r.slug}>
              <h3><Link href={`/reviews/${r.slug}`}>{r.title}</Link></h3>
              {r.description ? <p style={{ margin: 0 }}>{r.description}</p> : null}
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
