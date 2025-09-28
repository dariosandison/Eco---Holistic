// pages/product-disclosure.js
import { getDocBySlug } from '../lib/content';
import { renderMarkdown } from '../lib/markdown';

export async function getStaticProps() {
  const fields = ['slug', 'title', 'date', 'content', 'excerpt'];
  const doc = getDocBySlug({
    dir: 'content/legal',
    slug: 'product-disclosure',
    fields,
  });

  if (!doc) return { notFound: true };

  const html = renderMarkdown(doc.content || '');
  return { props: { doc: { ...doc, content: null }, html } };
}

export default function ProductDisclosure({ doc, html }) {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-semibold mb-6">
        {doc.title || 'Product Disclosure'}
      </h1>
      <article
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </main>
  );
}
