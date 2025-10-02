// pages/hubs/[slug].js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Head from 'next/head';
import SEO from '../../components/SEO';
import hubsData from '../../data/hubs';

function normHubs() {
  // Accept either array of hubs or object keyed by slug
  if (Array.isArray(hubsData)) return hubsData;
  if (hubsData && typeof hubsData === 'object') {
    // common shapes: { sleep: {...}, stress: {...} } or { hubs:[...] }
    if (Array.isArray(hubsData.hubs)) return hubsData.hubs;
    return Object.entries(hubsData).map(([slug, v]) => ({ slug, ...(v || {}) }));
  }
  return [];
}

function toArray(v) {
  if (!v) return [];
  if (Array.isArray(v)) return v;
  if (typeof v === 'string') return v.split(',').map(s => s.trim()).filter(Boolean);
  return [];
}

function listContent(dir) {
  const full = path.join(process.cwd(), 'content', dir);
  if (!fs.existsSync(full)) return [];
  return fs.readdirSync(full)
    .filter(f => f.endsWith('.md') || f.endsWith('.mdx'))
    .map(f => {
      const slug = f.replace(/\.(md|mdx)$/,'');
      const raw = fs.readFileSync(path.join(full, f), 'utf8');
      const { data } = matter(raw);
      const tags = toArray(data?.tags).map(t => t.toLowerCase());
      const updated = data?.updated || data?.date || null;
      return {
        type: dir, slug, tags,
        title: data?.title || slug.replace(/-/g,' '),
        description: data?.description || '',
        date: updated ? new Date(updated).toISOString() : null
      };
    });
}

function pickForHub(all, hub) {
  const key = (hub?.slug || '').toLowerCase();
  const aliases = toArray(hub?.aliases).map(a => a.toLowerCase());
  return all.filter(p => {
    const t = p.tags || [];
    return t.includes(key) || aliases.some(a => t.includes(a));
  }).sort((a,b) => (b.date || '').localeCompare(a.date || ''));
}

export async function getStaticPaths() {
  const hubs = normHubs();
  return {
    paths: hubs.map(h => ({ params: { slug: h.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const hubs = normHubs();
  const hub = hubs.find(h => h.slug === params.slug) || { slug: params.slug };

  const guides = pickForHub(listContent('guides'), hub);
  const reviews = pickForHub(listContent('reviews'), hub);
  const blog = pickForHub(listContent('blog'), hub);

  const url = `https://www.wild-and-well.store/hubs/${params.slug}`;
  const title = hub.title || (params.slug.charAt(0).toUpperCase() + params.slug.slice(1));
  const description = hub.description || `Explore guides, reviews, and practical tips on ${title.toLowerCase()}.`;

  // ItemList for SEO
  const itemList = [...guides, ...reviews, ...blog].slice(0, 25).map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.title,
    url: `https://www.wild-and-well.store/${p.type}/${p.slug}`
  }));

  return {
    props: {
      hub: {
        slug: params.slug,
        title,
        description
      },
      guides, reviews, blog,
      seo: {
        title: `${title} — Hub — Wild & Well`,
        description,
        url,
        breadcrumbs: [
          { name: 'Home', item: 'https://www.wild-and-well.store/' },
          { name: 'Hubs', item: 'https://www.wild-and-well.store/hubs' },
          { name: title, item: url }
        ]
      },
      itemList
    },
    revalidate: 60 * 60 * 6
  };
}

export default function HubPage({ hub, guides, reviews, blog, seo, itemList }) {
  return (
    <>
      <SEO {...seo} />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: itemList
          })}}
        />
      </Head>
      <div className="container">
        <article className="post">
          <h1 className="post-title">{hub.title}</h1>
          {hub.description ? <p className="post-meta">{hub.description}</p> : null}

          {guides.length ? (
            <>
              <h2>Guides</h2>
              <ul>
                {guides.map(p => (
                  <li key={`g-${p.slug}`}>
                    <Link href={`/guides/${p.slug}`}>{p.title}</Link>
                    {p.description ? <> — {p.description}</> : null}
                  </li>
                ))}
              </ul>
            </>
          ) : null}

          {reviews.length ? (
            <>
              <h2>Reviews</h2>
              <ul>
                {reviews.map(p => (
                  <li key={`r-${p.slug}`}>
                    <Link href={`/reviews/${p.slug}`}>{p.title}</Link>
                    {p.description ? <> — {p.description}</> : null}
                  </li>
                ))}
              </ul>
            </>
          ) : null}

          {blog.length ? (
            <>
              <h2>Blog</h2>
              <ul>
                {blog.map(p => (
                  <li key={`b-${p.slug}`}>
                    <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                    {p.description ? <> — {p.description}</> : null}
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </article>
      </div>
    </>
  );
}
