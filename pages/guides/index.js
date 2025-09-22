// /pages/guides/index.js
import Head from 'next/head';
import Link from 'next/link';
import { getAllGuides } from '../../src/lib/guides';

export default function GuidesIndex({ guides }) {
  return (
    <>
      <Head>
        <title>Guides | Eco &amp; Holistic</title>
        <meta
          name="description"
          content="All our practical, eco-minded, holistic living guides in one place."
        />
      </Head>

      <main style={wrap}>
        <h1 style={h1}>Guides</h1>
        <p style={lead}>
          Bite-size, practical guides to help you live cleaner, greener, and healthier.
        </p>

        <ul style={grid}>
          {guides.map((g) => (
            <li key={g.slug} style={card}>
              <article>
                <h2 style={h2}>
                  <Link href={`/guides/${g.slug}`} style={link}>
                    {g.title}
                  </Link>
                </h2>
                {g.date ? (
                  <p style={metaP}>
                    {new Date(g.date).toLocaleDateString(undefined, {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </p>
                ) : null}
                {g.description ? <p style={desc}>{g.description}</p> : null}
                {g.tags?.length ? (
                  <p style={tagsP}>
                    {g.tags.map((t) => (
                      <span key={t} style={tag}>{t}</span>
                    ))}
                  </p>
                ) : null}
                <p style={{ marginTop: 12 }}>
                  <Link href={`/guides/${g.slug}`} style={cta}>Read guide →</Link>
                </p>
              </article>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const guides = getAllGuides(); // already sorted, JSON-safe
  return { props: { guides } };
}

// ------- minimal styles (no CSS imports) -------
const wrap = { maxWidth: 1100, margin: '0 auto', padding: '32px 16px', fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial' };
const h1 = { fontSize: 36, margin: '0 0 8px' };
const lead = { margin: '0 0 24px', color: '#475569' };
const grid = { listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' };
const card = { border: '1px solid #e2e8f0', borderRadius: 16, padding: 16, background: '#fff' };
const h2 = { fontSize: 20, margin: '0 0 6px', lineHeight: 1.25 };
const link = { color: '#0f172a', textDecoration: 'none' };
const metaP = { margin: '0 0 8px', color: '#64748b', fontSize: 14 };
const desc = { margin: '0 0 10px', color: '#334155' };
const tagsP = { margin: 0, display: 'flex', gap: 8, flexWrap: 'wrap' };
const tag = { background: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: 999, padding: '3px 8px', fontSize: 12, color: '#0f172a' };
const cta = { color: '#0369a1', textDecoration: 'underline' };
