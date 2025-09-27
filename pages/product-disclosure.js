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

export default function ProductDisclosure() { return null; }

export async function getStaticProps() {
  return {
    redirect: {
      destination: '/legal/product-disclosure',
      permanent: true,
    },
  };
}
