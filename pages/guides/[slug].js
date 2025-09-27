// pages/guides/[slug].js
import Link from 'next/link';
import SeoHead from '../../components/SeoHead';
import PickCard from '../../components/PickCard';
import CompareTable from '../../components/CompareTable';
import Card from '../../components/Card';
import AuthorCard from '../../components/AuthorCard';
import { getAllSlugs, getDocBySlug, getAllDocs } from '../../lib/content';
import { renderMarkdown, stripLeadingH1 } from '../../lib/markdown';

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wild-and-well.store';

export async function getStaticPaths() {
  const slugs = getAllSlugs({ dir: 'content/guides' });
  return { paths: slugs.map((slug) => ({ params: { slug } })), fallback: false };
}

// simple slugify for heading IDs
const slugify = (s='') => s.toLowerCase().trim()
  .replace(/[^a-z0-9\s-]/g,'').replace(/\s+/g,'-').replace(/-+/g,'-');

export async function getStaticProps({ params }) {
  const fields = [
    'slug','title','date','content','excerpt','badge','deal','category',
    'author','authorTitle','authorBio','authorAvatar','updated',
    'picks','compare','image','heroImage'
  ];
  const doc = getDocBySlug({ dir: 'content/guides', slug: params.slug, fields });
  if (!doc) return { notFound: true };

  const raw = stripLeadingH1(doc.content || '');
  // extract H2s for ToC
  const h2s = Array.from(raw.matchAll(/^\s*##\s+(.+)$/gm)).map(m => m[1].trim());
  // render markdown to HTML
  let html = renderMarkdown(raw);
  // inject IDs into <h2> for anchor links
  h2s.forEach(h => {
    const id = slugify(h);
    const pattern = new RegExp(`<h2>\\s*${h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*</h2>`);
    html = html.replace(pattern, `<h2 id="${id}">${h}</h2>`);
  });

  const words = (doc.content || '').trim().split(/\s+/).length;
  const readMins = Math.max(2, Math.round(words / 200));

  const all = getAllDocs({ dir: 'content/guides', fields: ['slug','title','excerpt','date','category','badge','deal','image'] });
  const related = all.filter(p => p.slug !== doc.slug && (!!doc.category && p.category === doc.category)).slice(0,3);

  const url = `${SITE}/guides/${doc.slug}`;
  const og = `${SITE}/api/og?slug=${encodeURIComponent(doc.slug)}&title=${encodeURIComponent(doc.title || doc.slug)}&badge=${encodeURIComponent(doc.badge || '')}&deal=${encodeURIComponent(doc.deal || '')}`;

  return { props: { doc, html, h2s, readMins, related, url, og } };
}

export default function GuidePage({ doc, html, h2s, readMins, related, url, og }) {
  const heroSrc = doc.heroImage || doc.image || `/images/guides/${doc.slug}.jpg`;

  return (
    <>
      <SeoHead
        title={doc.title || doc.slug}
        description={doc.excerpt || 'Wild & Well guide'}
        url={url}
        image={og}
        type="article"
        breadcrumbs={[
          { name:'Home', url:SITE },
          { name:'Guides', url:`${SITE}/guides` },
          { name:doc.title || doc.slug, url }
        ]}
        article={{
          headline: doc.title || doc.slug,
          datePublished: doc.date,
          dateModified: doc.updated || doc.date,
          authorName: doc.author || 'Wild & Well'
        }}
      />

      <p style={{ margin: 0 }}><Link href="/guides">← All guides</Link></p>
      <h1 style={{ marginTop: 8 }}>{doc.title || doc.slug}</h1>
      <small style={{ color: 'var(--muted)' }}>
        {new Date(doc.updated || doc.date).toLocaleDateString()} • {readMins} min read
        {doc.author ? ` • by ${doc.author}` : ''}
      </small>
      {doc.excerpt && <p style={{ marginTop: 8, color: 'var(--muted)' }}>{doc.excerpt}</p>}

      {/* Optional hero image */}
      <div style={{ marginTop: 12 }}>
        <img
          src={heroSrc}
          alt=""
          className="card-img"
          loading="lazy"
          onError={(e)=>{ e.currentTarget.style.display='none'; }}
        />
      </div>

      {/* Picks jump link */}
      {(doc.picks?.top || doc.picks?.budget || doc.picks?.upgrade) && (
        <p style={{ marginTop: 10 }}><a href="#picks">Jump to picks ↓</a></p>
      )}

      {/* Table of Contents (only if there are h2s) */}
      {h2s?.length > 1 && (
        <nav aria-label="Table of contents" className="toc">
          <strong>On this page</strong>
          <ul>
            {h2s.map(h => {
              const id = slugify(h);
              return <li key={id}><a href={`#${id}`}>{h}</a></li>;
            })}
          </ul>
        </nav>
      )}

      {/* Top Pick above the fold */}
      <div id="picks" />
      {doc.picks?.top && <PickCard variant="top" {...doc.picks.top} />}

      {/* Main content */}
      <article className="prose" style={{ marginTop: 24 }} dangerouslySetInnerHTML={{ __html: html }} />

      {/* More picks */}
      {doc.picks?.budget && <PickCard variant="budget" {...doc.picks.budget} />}
      {doc.picks?.upgrade && <PickCard variant="upgrade" {...doc.picks.upgrade} />}

      {/* Comparison table */}
      {Array.isArray(doc.compare) && doc.compare.length > 0 && <CompareTable items={doc.compare} />}

      {/* Related guides */}
      {related?.length ? (
        <>
          <h2 className="section-title">Related Guides</h2>
          <div className="grid">
            {related.map(r => <Card key={r.slug} {...r} />)}
          </div>
        </>
      ) : null}
    </>
  );
}
