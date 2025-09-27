// pages/product-disclosure.js
import { getDocBySlug } from '../lib/content';
import { renderMarkdown } from '../lib/markdown';

export async function getStaticProps() {
  const fields = ['slug', 'title', 'date', 'content', 'excerpt'];
  const doc =
    getDocBySlug({ dir: 'content/legal', slug: 'product-disclosure', fields }) ||
    getDocBySlug({ dir: '.', slug: 'product-disclosure', fields });

  if (!doc) return { notFound: true };
  const html = renderMarkdown(doc.content || '');
  return { props: { doc, html } };
}

export default function ProductDisclosure({ doc, html }) {
  return (
    <div>
      <h1>{doc.title || 'Product Disclosure'}</h1>
      <article className="prose" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
