// pages/disclaimer.js
import { getDocBySlug } from '../lib/content';
import { renderMarkdown } from '../lib/markdown';

export async function getStaticProps() {
  const fields = ['slug', 'title', 'date', 'content', 'excerpt'];
  const doc =
    getDocBySlug({ dir: 'content/legal', slug: 'disclaimer', fields }) ||
    getDocBySlug({ dir: '.', slug: 'disclaimer', fields });

  if (!doc) return { notFound: true };
  const html = renderMarkdown(doc.content || '');
  return { props: { doc, html } };
}

export default function Disclaimer() { return null; }

export async function getStaticProps() {
  return {
    redirect: {
      destination: '/legal/disclaimer',
      permanent: true,
    },
  };
}
