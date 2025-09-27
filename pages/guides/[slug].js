// pages/guides/[slug].js
import Link from 'next/link';
import Newsletter from '../../components/Newsletter';
import { getAllSlugs, getDocBySlug } from '../../lib/content';
import { renderMarkdown } from '../../lib/markdown';

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
  const html = renderMarkdown(doc.content || '');
  return { props: { doc, html } };
}

export default function GuidePage({ doc, html }) {
  return (
    <div>
      <p style={{ margin: 0 }}><Link href="/guides">← All guides</Link></p>
      <h1 style={{ marginTop: 8 }}>{doc.title || doc.slug}</h1>
      {doc.date && <small style={{ color: '#888' }}>{new Date(doc.date).toLocaleDateString()}</small>}
      {doc.excerpt && <p style={{ marginTop: 8 }}>{doc.excerpt}</p>}

      <Newsletter compact />

      <article
        style={{ marginTop: 24, lineHeight: 1.7, fontSize: 18 }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
