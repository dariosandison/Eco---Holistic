// pages/privacy.js
import { getDocBySlug } from '../lib/content';
import { renderMarkdown } from '../lib/markdown';

export async function getStaticProps() {
  const fields = ['slug', 'title', 'date', 'content', 'excerpt'];
  const doc =
    getDocBySlug({ dir: 'content/legal', slug: 'privacy', fields }) ||
    getDocBySlug({ dir: '.', slug: 'privacy', fields });

  if (!doc) return { notFound: true };
  const html = renderMarkdown(doc.content || '');
  return { props: { doc, html} };
}

export default function Privacy({ doc, html }) {
  return (
    <div>
      <h1>{doc.title || 'Privacy Policy'}</h1>
      <article className="prose" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
