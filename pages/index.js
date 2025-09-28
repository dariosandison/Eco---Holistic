// pages/index.js
import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import Link from 'next/link';

function parseFrontmatter(raw) {
  let meta = {};
  if (raw.startsWith('---')) {
    const end = raw.indexOf('\n---', 3);
    if (end !== -1) {
      const fm = raw.slice(3, end).trim();
      fm.split(/\r?\n/).forEach(line => {
        const m = line.match(/^(\w+):\s*(.*)$/);
        if (m) {
          const key = m[1];
          let val = m[2].trim();
          val = val.replace(/^"(.+)"$/, '$1').replace(/^'(.+)'$/, '$1');
          meta[key] = val;
        }
      });
    }
  }
  return meta;
}

function readGuides(dir) {
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));
  const guides = files.map(filename => {
    const slug = filename.replace(/\.md$/, '');
    const raw = fs.readFileSync(path.join(dir, filename), 'utf8');
    const meta = parseFrontmatter(raw);
    return {
      slug,
      title: meta.title || slug.replace(/-/g, ' '),
      date: meta.date || null,
    };
  });
  guides.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  return guides.slice(0, 9);
}

export async function getStaticProps() {
  const guidesDir = path.join(process.cwd(), 'content/guides');
  const guides = readGuides(guidesDir);
  return { props: { guides } };
}

export default function Home({ guides }) {
  return (
    <>
      <Head>
        <title>Wild &amp; Well — Actionable guides + clean product picks</title>
        <meta
          name="description"
          content="Actionable guides and clean product picks to help you sleep better, stress less, and move more."
        />
      </Head>

      <div className="hero-wrap">
        <div className="container">
          <section className="hero">
            <div className="hero-inner">
              <img src="/cover.png" alt="Wild & Well" className="hero-logo" />
              <p className="hero-slogan">Actionable guides and clean product picks to help you sleep better, stress less, and move more.</p>
              <div className="cta-row">
                <Link className="btn btn-primary" href="/guides">Explore Guides</Link>
                <Link className="btn btn-outline" href="/deals">Today&apos;s Deals</Link>
              </div>
              <p className="meta">
                <span>Independent</span><span>•</span>
                <span>Reader-supported</span><span>•</span>
                <span>Evidence-informed picks</span><span>•</span>
                <span>No sponsored posts</span>
              </p>
            </div>
          </section>
        </div>
      </div>

      <div className="container">
        <h2 className="section-title">Latest Guides</h2>
        <div className="grid">
          {guides.map((g) => (
            <article className="card" key={g.slug}>
              <h3><Link href={`/guides/${g.slug}`}>{g.title}</Link></h3>
              {g.date ? <p className="date">{new Date(g.date).toLocaleDateString()}</p> : null}
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
