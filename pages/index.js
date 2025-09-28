// pages/index.js
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Image from 'next/image';
import SEO from '../components/SEO';

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
  const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter(f => f.endsWith('.md') || f.endsWith('.mdx')) : [];
  const guides = files.map(filename => {
    const slug = filename.replace(/\.(md|mdx)$/, '');
    const raw = fs.readFileSync(path.join(dir, filename), 'utf8');
    const meta = parseFrontmatter(raw);
    return {
      slug,
      title: meta.title || slug.replace(/-/g, ' '),
      date: meta.date || null,
      description: meta.description || ''
    };
  });
  guides.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  return guides.slice(0, 9);
}

export async function getStaticProps() {
  const guidesDir = path.join(process.cwd(), 'content/guides');
  const guides = readGuides(guidesDir);
  return {
    props: { guides },
    revalidate: 60 * 60 * 6
  };
}

export default function Home({ guides }) {
  const seo = {
    title: 'Wild & Well — Holistic Health & Eco Friendly Living',
    description: 'Your guide to holistic health, eco friendly living and natural wellness.',
    url: 'https://www.wild-and-well.store/',
    type: 'website',
    breadcrumbs: [{ name: 'Home', item: 'https://www.wild-and-well.store/' }]
  };

  return (
    <>
      <SEO {...seo} />

      <div className="hero-wrap">
        <div className="container">
          <section className="hero">
            <div className="hero-inner">
              <Image
                src="/logo.svg"
                alt="Wild & Well"
                width={520}
                height={140}
                className="hero-logo hero-logo--svg"
                priority
                fetchPriority="high"
              />
              <p className="hero-slogan">
                Your guide to holistic health, eco friendly living and natural wellness
              </p>
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
              {g.description ? <p style={{ margin: 0 }}>{g.description}</p> : null}
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
