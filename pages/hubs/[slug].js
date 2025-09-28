// pages/hubs/[slug].js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote';
import { serializeMdx } from '../../lib/mdx';
import SEO from '../../components/SEO';
import hubs from '../../data/hubs';
import { mdxComponents } from '../../components/MDXComponents';

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
  const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter(f => f.endsWith('.md') || f.endsWith('.mdx')) : [];
  const list = files.map(filename => {
    const slug = filename.replace(/\.(md|mdx)$/, '');
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

async function readHubMdx(slug) {
  const file = path.join(process.cwd(), 'content/hubs', `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, 'utf8');
  const { content } = matter(raw); // ignore hub-level front-matter (use data/hubs.js)
  const mdxSource = await serializeMdx(content);
  return mdxSource;
}

export async function getStaticPaths() {
  return { paths: hubs.map(h => ({ params: { slug: h.slug } })), fallback: false };
}

export async function getStaticProps({ params }) {
  const hub = hubs.find(h => h.slug === params.slug);
  const guides = readGuides().filter(g => hub.includeSlugs.includes(g.slug));
  const mdxSource = await readHubMdx(params.slug);

  const url = `https://www.wild-and-well.store/hubs/${hub.slug}`;
  const breadcrumbs = [
    { name: 'Home', item: 'https://www.wild-and-well.store/' },
    { name: hub.title, item: url }
  ];

  return {
    props: {
      hub,
      guides,
      mdxSource,
      seo: {
        title: `${hub.title} — Wild & Well`,
        description: hub.description,
        url,
        type: 'website',
        breadcrumbs
      }
    },
    revalidate: 60 * 60 * 6
  };
}

export default function HubPage({ hub, guides, mdxSource, seo }) {
  return (
    <>
      <SEO {...seo} />
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

        {mdxSource ? (
          <>
            <h2 className="section-title">Editor’s notes & tools</h2>
            <article className="post">
              <MDXRemote {...mdxSource} components={mdxComponents} />
            </article>
          </>
        ) : null}

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
