// pages/guides/[slug].js
import Head from 'next/head';
import { getAllGuidesMeta, getGuideBySlug } from '../../src/lib/guides';

// Lightweight MD -> HTML (no separate util file needed)
async function mdToHtml(markdown) {
  const { remark } = await import('remark');
  const html = (await import('remark-html')).default;
  const file = await remark().use(html).process(markdown || '');
  return String(file);
}

export default function Guide({ meta, html }) {
  if (!meta) return <main className="article"><p>Not found.</p></main>;

  return (
    <main className="article">
      <Head>
        <title>{meta.title} – Wild &amp; Well</title>
        {meta.summary ? <meta name="description" content={meta.summary} /> : null}
        {meta.image ? <meta property="og:image" content={meta.image} /> : null}
      </Head>

      <header style={{ marginBottom: 14 }}>
        <h1 style={{ margin: 0 }}>{meta.title}</h1>
        <p style={{ color: 'var(--muted)', margin: '6px 0 0' }}>
          {meta.date ? <>Updated {meta.date}</> : null}
          {meta.readTime ? <>{meta.date ? ' • ' : ''}{meta.readTime}</> : null}
        </p>
        {meta.image ? (
          <img
            src={meta.image}
            alt=""
            style={{ width: '100%', height: 'auto', borderRadius: 12, marginTop: 10 }}
          />
        ) : null}
      </header>

      {/* Simple affiliate note so there is no missing component import */}
      <div
        style={{
          fontSize: '0.95rem',
          lineHeight: 1.5,
          background: 'var(--card)',
          border: '1px solid var(--border)',
          padding: '12px 14px',
          borderRadius: 10,
          margin: '10px 0 18px'
        }}
      >
        Heads up: some links are affiliate links. If you buy through them, we may earn a small commission at no extra cost to you.
      </div>

      <article className="prose" dangerouslySetInnerHTML={{ __html: html }} />

      <hr style={{ margin: '28px 0', border: 'none', borderTop: '1px solid var(--border)' }} />

      <p>
        <strong>More:</strong> <a href="/guides">Explore all guides</a>
      </p>

      <style jsx>{`
        .article {
          max-width: 760px;
          margin: 0 auto;
          padding: 22px 16px 40px;
        }
        .prose :global(h2) { margin-top: 1.6em; }
        .prose :global(img) { border-radius: 10px; }
        .prose :global(a) { text-decoration: underline; }
      `}</style>
    </main>
  );
}

export async function getStaticPaths() {
  const guides = getAllGuidesMeta();
  return {
    paths: guides.map(g => ({ params: { slug: g.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const data = getGuideBySlug(params.slug);
  if (!data) return { props: { meta: null, html: '' } };
  const html = await mdToHtml(data.content);
  return { props: { meta: data.meta, html } };
}
