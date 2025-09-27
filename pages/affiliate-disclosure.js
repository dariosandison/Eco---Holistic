// pages/affiliate-disclosure.js
import { getDocBySlug } from '../lib/content';
import { renderMarkdown } from '../lib/markdown';

export async function getStaticProps() {
  const fields = ['slug', 'title', 'date', 'content', 'excerpt'];
  const doc =
    getDocBySlug({ dir: 'content/legal', slug: 'affiliate-disclosure', fields }) ||
    getDocBySlug({ dir: '.', slug: 'affiliate-disclosure', fields });

  if (!doc) return { notFound: true };
  const html = renderMarkdown(doc.content || '');
  return { props: { doc, html } };
}

export default function AffiliateDisclosure({ doc, html }) {
  return (
    <div>
      <h1>{doc.title || 'Affiliate Disclosure'}</h1>
      <article className="prose" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
