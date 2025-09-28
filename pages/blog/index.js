// pages/blog/index.js
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
  const dir = path.join(process.cwd(), 'content/blog');
  const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter(f => f.endsWith('.md') || f.endsWith('.mdx')) : [];
  const posts = files.map(filename => {
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
  return { props: { posts }, revalidate: 60 * 60 * 6 };
}

export default function BlogIndex({ posts }) {
  const seo = {
    title: 'Blog — Wild & Well',
    description: 'Notes, experiments, and ideas from the Wild & Well team.',
    url: 'https://www.wild-and-well.store/blog',
    type: 'website',
    breadcrumbs: [
      { name: 'Home', item: 'https://www.wild-and-well.store/' },
      { name: 'Blog', item: 'https://www.wild-and-well.store/blog' }
    ]
  };

  return (
    <>
      <SEO {...seo} />
      <div className="container" style={{ marginTop: 22 }}>
        <section className="hero">
          <div className="hero-inner">
            <h1 className="post-title">Blog</h1>
            <p className="hero-slogan">Notes, experiments, and ideas from the Wild &amp; Well team.</p>
          </div>
        </section>

        <h2 className="section-title">Latest posts</h2>
        <div className="grid">
          {posts.map(p => (
            <article className="card" key={p.slug}>
              <h3><Link href={`/blog/${p.slug}`}>{p.title}</Link></h3>
              {p.description ? <p style={{ margin: 0 }}>{p.description}</p> : null}
            </article>
          ))}
          {posts.length === 0 ? <article className="card"><p>No posts yet.</p></article> : null}
        </div>
      </div>
    </>
  );
}
