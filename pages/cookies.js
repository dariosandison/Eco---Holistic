import Head from 'next/head';
import { getDocBySlug } from '../lib/content';
import { renderMarkdown } from '../lib/markdown';

export default function Cookies({ doc, html }) {
  return (
    <>
      <Head>
        <title>{doc?.title ? `${doc.title} | Wild & Well` : 'Cookies | Wild & Well'}</title>
        {doc?.description ? <meta name="description" content={doc.description} /> : null}
      </Head>
      <main className="container">
        <h1>{doc?.title || 'Cookies'}</h1>
        <article dangerouslySetInnerHTML={{ __html: html || '' }} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const fields = ['slug', 'title', 'date', 'content', 'excerpt', 'description'];
  // IMPORTANT: positional args (dir, slug, fields)
  const doc = getDocBySlug('content/legal', 'cookies', fields);

  if (!doc) return { notFound: true };

  const html = renderMarkdown(doc.content || '');
  return { props: { doc, html } };
}
