// pages/guides/index.js
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import SEO from '../../components/SEO';

function parseFrontmatter(raw) {
  const meta = {};
  if (!raw.startsWith('---')) return meta;
  const end = raw.indexOf('\n---', 3);
  if (end === -1) return meta;
  const fm = raw.slice(3, end).trim();
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
  const dir = path.join(process.cwd(), 'content/guides');
  const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter(f => f.endsWith('.md') || f.endsWith('.mdx')) : [];
  const guides = files.map(filename => {
    const slug = filename.replace(/\.(md|mdx)$/, '');
    const raw = fs.readFileSync(path.join(dir, filename), 'utf8');
    const meta = parseFrontmatter(raw);
    return {
      slug,
      title: meta.title || slug.replace(/-/g,' '),
      description: meta.description || '',
      date: meta.date || ''
    };
  }).sort((a,b) => (b.date || '').localeCompare(a.date || ''));
  return {
    props: { guides },
    revalidate: 60 * 60 * 6
  };
}

export default function GuidesIndex({ guides }) {
  const seo = {
    title: 'All Guides — Wild & Well',
    description: 'Browse all Wild & Well guides across sleep, stress, movement, and clean living.',
    url: 'https://www.wild-and-well.store/guides',
    type: 'website',
    breadcrumbs: [
      { name: 'Home', item: 'https://www.wild-and-well.store/' },
      { name: 'Guides', item: 'https://www.wild-and-well.store/guides' }
    ]
  };

  return (
    <>
      <SEO {...seo} />
      <div className="container" style={{ marginTop: 22 }}>
        <section className="hero">
          <div className="hero-inner">
            <h1 className="post-title">All Guides</h1>
            <p className="hero-slogan">Everything in one place.</p>
          </div>
        </section>

        <h2 className="section-title">Latest</h2>
        <div className="grid">
          {guides.map(g => (
            <article className="card" key={g.slug}>
              <h3><a href={`/guides/${g.slug}`}>{g.title}</a></h3>
              {g.description ? <p style={{ margin: 0 }}>{g.description}</p> : null}
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
