// pages/guides/[slug].js
import Head from 'next/head';
import Link from 'next/link';
import Newsletter from '../../components/Newsletter';
import { getAllSlugs, getDocBySlug } from '../../lib/content';
import { renderMarkdown, stripLeadingH1 } from '../../lib/markdown';

const SITE =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wild-and-well.store';

export async function getStaticPaths() {
  const slugs = getAllSlugs({ dir: 'content/guides' });
  return { paths: slugs.map((slug) => ({ params: { slug } })), fallback: false };
}

export async function getStaticProps({ params }) {
  const doc = getDocBySlug({
    dir: 'content/guides',
    slug: params.slug,
    fields: ['slug', 'title', 'date', 'content', 'excerpt', 'badge', 'deal'],
  });
  if (!doc) return { notFound: true };
  const html = renderMarkdown(stripLeadingH1(doc.content || ''));
  const og = `${SITE}/api/og?slug=${encodeURIComponent(doc.slug)}&title=${encodeURIComponent(doc.title || doc.slug)}&badge=${encodeURIComponent(doc.badge || '')}&deal=${encodeURIComponent(doc.deal || '')}`;
  return { props: { doc, html, og } };
}

export default function GuidePage({ doc, html, og }) {
  return (
    <>
      <Head>
        <meta property="og:title" content={doc.title || doc.slug} />
        <meta property="og:description" content={doc.excerpt || 'Wild & Well guide'} />
        <meta property="og:image" content={og} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <p style={{ margin: 0 }}><Link href="/guides">← All guides</Link></p>
      <h1 style={{ marginTop: 8 }}>{doc.title || doc.slug}</h1>
      {doc.date && <small style={{ color: 'var(--muted)' }}>{new Date(doc.date).toLocaleDateString()}</small>}
      {doc.excerpt && <p style={{ marginTop: 8, color: 'var(--muted)' }}>{doc.excerpt}</p>}

      <Newsletter compact />

      <article className="prose" style={{ marginTop: 24 }} dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
