// pages/cookies.js
import { getDocBySlug } from '../lib/content';
import { renderMarkdown } from '../lib/markdown';

export async function getStaticProps() {
  const fields = ['slug', 'title', 'date', 'content', 'excerpt'];
  const doc =
    getDocBySlug({ dir: 'content/legal', slug: 'cookies', fields }) ||
    getDocBySlug({ dir: '.', slug: 'cookies', fields });

  if (!doc) return { notFound: true };
  const html = renderMarkdown(doc.content || '');
  return { props: { doc, html } };
}

export default function Cookies() { return null; }

export async function getStaticProps() {
  return {
    redirect: {
      destination: '/legal/cookies',
      permanent: true,
    },
  };
}
