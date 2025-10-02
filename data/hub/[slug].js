// pages/hubs/[slug].js
import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import Link from 'next/link';
import hubs from '../../data/hubs';

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

function readGuides() {
  const dir = path.join(process.cwd(), 'content/guides');
  const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter(f => f.endsWith('.md')) : [];
  const list = files.map(filename => {
    const slug = filename.replace(/\.md$/, '');
    const raw = fs.readFileSync(path.join(dir, filename), 'utf8');
    const meta = parseFrontmatter(raw);
    return {
      slug,
      title: meta.title || slug.replace(/-/g,' '),
      description: meta.description || '',
      date: meta.date || ''
    };
  });
  list.sort((a,b) => (b.date || '').localeCompare(a.date || ''));
  return list;
}

export async function getStaticPaths() {
  return { paths: hubs.map(h => ({ params: { slug: h.slug } })), fallback: false };
}

export async function getStaticProps({ params }) {
  const hub = hubs.find(h => h.slug === params.slug);
  const guides = readGuides().filter(g => hub.includeSlugs.includes(g.slug));
  const breadcrumbsJsonLd = {
    "@context":"https://schema.org",
    "@type":"BreadcrumbList",
    "itemListElement":[
      { "@type":"ListItem", position:1, name:"Home", item:"https://www.wild-and-well.store/" },
      { "@type":"ListItem", position:2, name: hub.title, item: `https://www.wild-and-well.store/hubs/${hub.slug}` }
    ]
  };
  return { props: { hub, guides, breadcrumbsJsonLd } };
}

export default function HubPage({ hub, guides, breadcrumbsJsonLd }) {
  return (
    <>
      <Head>
        <title>{hub.title} — Wild &amp; Well</title>
        <meta name="description" content={hub.description} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }} />
      </Head>

      <div className="container" style={{ marginTop: 22 }}>
        <section className="hero">
          <div className="hero-inner">
            <h1 className="post-title" style={{ marginBottom: 6 }}>{hub.title}</h1>
            <p className="hero-slogan" style={{ marginTop: 6 }}>{hub.description}</p>
            <div className="cta-row" style={{ marginTop: 10 }}>
              <Link href="/guides" className="btn btn-outline">Browse all guides</Link>
            </div>
          </div>
        </section>

        <h2 className="section-title">Featured in {hub.title}</h2>
        <div className="grid">
          {guides.map(g => (
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
