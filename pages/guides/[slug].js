// /pages/guides/[slug].js
import Head from 'next/head';
import Link from 'next/link';
import { getAllGuideSlugs, getGuideBySlug } from '../../src/lib/guides';

export default function GuidePage({ meta, content }) {
  if (!meta) {
    return (
      <main style={wrap}>
        <h1 style={h1}>Guide not found</h1>
        <p><Link href="/guides">Back to guides</Link></p>
      </main>
    );
  }

  const dateStr = meta.date ? new Date(meta.date).toLocaleDateString(undefined, {
    year: 'numeric', month: 'short', day: 'numeric',
  }) : null;

  return (
    <>
      <Head>
        <title>{meta.title} | Eco &amp; Holistic</title>
        <meta name="description" content={meta.description || meta.title} />
      </Head>

      <main style={wrap}>
        <article style={article}>
          <header style={header}>
            <h1 style={h1}>{meta.title}</h1>
            {dateStr ? <p style={metaP}>{dateStr}</p> : null}
            {meta.tags?.length ? (
              <p style={tagsP}>
                {meta.tags.map((t) => (
                  <span key={t} style={tag}>{t}</span>
                ))}
              </p>
            ) : null}
          </header>

          {/* Minimal readable rendering (no extra packages).
             We’ll pretty it up later with a markdown pipeline. */}
          <div style={contentBox}>
            <pre style={pre}>{content}</pre>
          </div>

          <footer style={footer}>
            <Link href="/guides" style={backLink}>← Back to all guides</Link>
          </footer>
        </article>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const slugs = getAllGuideSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = getGuideBySlug(params.slug);
  if (!data) {
    return { notFound: true };
  }
  // Ensure JSON-serializable props
  return {
    props: {
      meta: data.meta,
      content: data.content || '',
    },
  };
}

// --------- styles (inline, no CSS deps) ----------
const wrap = { maxWidth: 860, margin: '0 auto', padding: '32px 16px', fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial' };
const article = { display: 'grid', gap: 16 };
const header = { borderBottom: '1px solid #e2e8f0', paddingBottom: 8, marginBottom: 8 };
const h1 = { margin: '0 0 8px', fontSize: 34, lineHeight: 1.15 };
const metaP = { margin: '0 0 8px', color: '#64748b', fontSize: 14 };
const tagsP = { margin: '0 0 0', display: 'flex', flexWrap: 'wrap', gap: 8 };
const tag = { background: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: 999, padding: '4px 10px', fontSize: 12, color: '#0f172a' };
const contentBox = { marginTop: 8 };
const pre = { whiteSpace: 'pre-wrap', wordWrap: 'break-word', fontFamily: 'inherit', fontSize: 16, lineHeight: 1.6 };
const footer = { marginTop: 24, borderTop: '1px solid #e2e8f0', paddingTop: 12 };
const backLink = { color: '#0369a1', textDecoration: 'underline' };
