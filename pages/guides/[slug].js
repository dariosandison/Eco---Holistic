// pages/guides/[slug].js
import Link from 'next/link';
import Newsletter from '../../components/Newsletter';
import { getAllSlugs, getDocBySlug } from '../../lib/content';
import { renderMarkdown, stripLeadingH1 } from '../../lib/markdown';

export async function getStaticPaths() {
  const slugs = getAllSlugs({ dir: 'content/guides' });
  return { paths: slugs.map((slug) => ({ params: { slug } })), fallback: false };
}

export async function getStaticProps({ params }) {
  const doc = getDocBySlug({
    dir: 'content/guides',
    slug: params.slug,
    fields: ['slug', 'title', 'date', 'content', 'excerpt'],
  });
  if (!doc) return { notFound: true };
  const html = renderMarkdown(stripLeadingH1(doc.content || ''));
  return { props: { doc, html } };
}

export default function GuidePage({ doc, html }) {
  return (
    <>
      <p style={{ margin: 0 }}><Link href="/guides">← All guides</Link></p>
      <h1 style={{ marginTop: 8 }}>{doc.title || doc.slug}</h1>
      {doc.date && <small style={{ color: 'var(--muted)' }}>{new Date(doc.date).toLocaleDateString()}</small>}
      {doc.excerpt && <p style={{ marginTop: 8, color: 'var(--muted)' }}>{doc.excerpt}</p>}
      <Newsletter compact />
      <article className="prose" style={{ marginTop: 24 }} dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
