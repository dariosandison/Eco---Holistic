// pages/guides/[slug].js
import Link from 'next/link';
import { getAllSlugs, getDocBySlug } from '../../lib/content';

export async function getStaticPaths() {
  const slugs = getAllSlugs({ dir: 'content/guides' });
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false, // change to 'blocking' if you plan to add files after build
  };
}

export async function getStaticProps({ params }) {
  const doc = getDocBySlug({
    dir: 'content/guides',
    slug: params.slug,
    fields: ['slug', 'title', 'date', 'content', 'excerpt'],
  });

  if (!doc) {
    return { notFound: true };
  }

  return { props: { doc } };
}

export default function GuidePage({ doc }) {
  return (
    <main style={{ maxWidth: 840, margin: '40px auto', padding: 20 }}>
      <p style={{ margin: 0 }}>
        <Link href="/guides">← All guides</Link>
      </p>
      <h1 style={{ marginTop: 8 }}>{doc.title || doc.slug}</h1>
      {doc.date && (
        <small style={{ color: '#888' }}>
          {new Date(doc.date).toLocaleDateString()}
        </small>
      )}
      {doc.excerpt && <p style={{ marginTop: 8 }}>{doc.excerpt}</p>}
      <article
        style={{
          marginTop: 24,
          whiteSpace: 'pre-wrap',
          lineHeight: 1.7,
          fontSize: 18,
        }}
      >
        {doc.content || 'No content yet.'}
      </article>
    </main>
  );
}
