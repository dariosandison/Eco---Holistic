// pages/guides/[slug].js
import Link from 'next/link';
import SeoHead from '../../components/SeoHead';
import Newsletter from '../../components/Newsletter';
import PickCard from '../../components/PickCard';
import CompareTable from '../../components/CompareTable';
import Card from '../../components/Card';
import { getAllSlugs, getDocBySlug, getAllDocs } from '../../lib/content';
import { renderMarkdown, stripLeadingH1 } from '../../lib/markdown';

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wild-and-well.store';

export async function getStaticPaths() {
  const slugs = getAllSlugs({ dir: 'content/guides' });
  return { paths: slugs.map((slug) => ({ params: { slug } })), fallback: false };
}

export async function getStaticProps({ params }) {
  const fields = ['slug','title','date','content','excerpt','badge','deal','category','author','updated','picks','compare'];
  const doc = getDocBySlug({ dir: 'content/guides', slug: params.slug, fields });
  if (!doc) return { notFound: true };

  const html = renderMarkdown(stripLeadingH1(doc.content || ''));
  const words = (doc.content || '').trim().split(/\s+/).length;
  const readMins = Math.max(2, Math.round(words / 200));

  // Related: same category, different slug
  const all = getAllDocs({ dir: 'content/guides', fields: ['slug','title','excerpt','date','category','badge','deal'] });
  const related = all.filter(p => p.slug !== doc.slug && (!!doc.category && p.category === doc.category)).slice(0,3);

  const url = `${SITE}/guides/${doc.slug}`;
  const og = `${SITE}/api/og?slug=${encodeURIComponent(doc.slug)}&title=${encodeURIComponent(doc.title || doc.slug)}&badge=${encodeURIComponent(doc.badge || '')}&deal=${encodeURIComponent(doc.deal || '')}`;

  return { props: { doc, html, readMins, related, url, og } };
}

export default function GuidePage({ doc, html, readMins, related, url, og }) {
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

      {/* Top pick above the fold, if provided */}
      {doc.picks?.top && <PickCard variant="top" {...doc.picks.top} />}

      <Newsletter compact />

      <article className="prose" style={{ marginTop: 24 }} dangerouslySetInnerHTML={{ __html: html }} />

      {/* More picks (Budget/Upgrade) */}
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
