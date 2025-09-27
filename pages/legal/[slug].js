// pages/legal/[slug].js
import Link from 'next/link';
import { getDocBySlug } from '../../lib/content';

const LEGAL_SLUGS = [
  'privacy',
  'cookies',
  'terms',
  'affiliate-disclosure',
  'disclaimer',
  'product-disclosure',
];

export async function getStaticPaths() {
  return {
    paths: LEGAL_SLUGS.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const fields = ['slug', 'title', 'date', 'content', 'excerpt'];

  // Prefer /content/legal, fallback to project root
  let doc =
    getDocBySlug({ dir: 'content/legal', slug: params.slug, fields }) ||
    getDocBySlug({ dir: '.', slug: params.slug, fields });

  if (!doc) return { notFound: true };
  return { props: { doc } };
}

export default function LegalPage({ doc }) {
  const pretty = (s) =>
    (s || '').replace(/-/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase());

  return (
    <div>
      <p style={{ margin: 0 }}><Link href="/">← Home</Link></p>
      <h1 style={{ marginTop: 8 }}>{doc.title || pretty(doc.slug)}</h1>
      {doc.date && <small style={{ color: '#888' }}>{new Date(doc.date).toLocaleDateString()}</small>}
      {doc.excerpt && <p style={{ marginTop: 8 }}>{doc.excerpt}</p>}
      <article style={{ marginTop: 24, whiteSpace: 'pre-wrap', lineHeight: 1.7 }}>
        {doc.content || 'No content yet.'}
      </article>
    </div>
  );
}
