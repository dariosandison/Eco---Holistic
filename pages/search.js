// pages/search.js
import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import Link from 'next/link';

function parseFrontmatter(raw) {
  const meta = {};
  if (!raw.startsWith('---')) return meta;
  const end = raw.indexOf('\n---', 3);
  if (end === -1) return meta;
  const fm = raw.slice(3, end).trim();
  fm.split(/\r?\\n/).forEach(line => {
    const m = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!m) return;
    const key = m[1];
    let val = m[2].trim().replace(/^"(.*)"$/, '$1').replace(/^'(.*)'$/, '$1');
    meta[key] = val;
  });
  return meta;
}

function readSection(dirPath, basePath) {
  const files = fs.existsSync(dirPath) ? fs.readdirSync(dirPath).filter(f => f.endsWith('.md') || f.endsWith('.mdx')) : [];
  return files.map(filename => {
    const slug = filename.replace(/\.(md|mdx)$/, '');
    const raw = fs.readFileSync(path.join(dirPath, filename), 'utf8');
    const meta = parseFrontmatter(raw);
    const body = raw.replace(/^---[\s\S]*?\n---\n?/, '').trim();
    return {
      slug,
      title: meta.title || slug.replace(/-/g,' '),
      description: meta.description || '',
      date: meta.date || '',
      body,
      url: `${basePath}/${slug}`
    };
  });
}

export async function getServerSideProps({ query }) {
  const q = (query.q || '').toString().trim();
  const guides  = readSection(path.join(process.cwd(), 'content/guides'),  '/guides');
  const reviews = readSection(path.join(process.cwd(), 'content/reviews'), '/reviews');
  const blog    = readSection(path.join(process.cwd(), 'content/blog'),    '/blog');
  const haystack = [...guides, ...reviews, ...blog];

  const results = q
    ? haystack.filter(item => {
        const hay = (item.title + ' ' + item.description + ' ' + item.body).toLowerCase();
        return hay.includes(q.toLowerCase());
      })
    : [];

  return { props: { q, results } };
}

export default function SearchPage({ q, results }) {
  return (
    <>
      <Head>
        <title>Search — Wild &amp; Well</title>
        <meta name="robots" content="noindex,follow" />
      </Head>

      <div className="container" style={{ marginTop: 22 }}>
        <section className="hero">
          <div className="hero-inner">
            <h1 className="post-title" style={{ marginBottom: 8 }}>Search</h1>
            <form action="/search" role="search" className="search" style={{ width: '100%', maxWidth: 560 }}>
              <input type="search" name="q" defaultValue={q} placeholder="Search guides, reviews, and blog…" aria-label="Search" />
            </form>
          </div>
        </section>

        <h2 className="section-title">{q ? `Results for “${q}”` : 'Type to search'}</h2>

        <div className="grid">
          {results.map((r, i) => (
            <article className="card" key={i}>
              <h3><Link href={r.url}>{r.title}</Link></h3>
              {r.description ? <p style={{ margin: 0 }}>{r.description}</p> : null}
            </article>
          ))}
          {q && results.length === 0 ? (
            <article className="card"><p>No results. Try “sleep”, “filters”, “magnesium”, or “blue light”.</p></article>
          ) : null}
        </div>
      </div>
    </>
  );
}
