// pages/blog/index.js
import Head from 'next/head';
import Link from 'next/link';

// Reuse your guide metadata so the page always has content to list.
// (Safer than trying to read a separate blog source that might be empty.)
import { getAllGuidesMeta } from '../../src/lib/guides';

export default function BlogIndex({ items }) {
  return (
    <main className="wrap">
      <Head>
        <title>Blog – Wild &amp; Well</title>
        <meta
          name="description"
          content="Simple, practical reads on eco-living and holistic wellness."
        />
      </Head>

      <header className="pageHeader">
        <h1>Blog</h1>
        <p className="sub">Bite-size, practical reads (latest first).</p>
      </header>

      {items.length === 0 ? (
        <p>No posts yet. Check back soon!</p>
      ) : (
        <ul className="grid">
          {items.map((it) => (
            <li key={it.slug} className="card">
              <Link href={`/guides/${it.slug}`} className="cardLink">
                {it.image ? (
                  <img
                    src={it.image}
                    alt=""
                    className="thumb"
                    loading="lazy"
                  />
                ) : (
                  <div className="thumb placeholder" />
                )}
                <h2 className="title">{String(it.title || '').trim()}</h2>
                {it.summary ? (
                  <p className="summary">{String(it.summary)}</p>
                ) : null}
                <p className="meta">
                  {it.date ? `Updated ${String(it.date)}` : '—'}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}

      <style jsx>{`
        .wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 24px 16px 56px;
        }
        .pageHeader h1 {
          margin: 0 0 6px;
          font-size: 2rem;
        }
        .sub {
          margin: 0 0 18px;
          color: var(--muted);
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 16px;
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .card {
          border: 1px solid var(--border);
          border-radius: 12px;
          overflow: hidden;
          background: var(--card, #fff);
          transition: transform 0.08s ease, box-shadow 0.08s ease;
        }
        .card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 18px rgba(0,0,0,0.06);
        }
        .cardLink {
          display: block;
          color: inherit;
          text-decoration: none;
          padding: 0 12px 12px;
        }
        .thumb {
          width: 100%;
          height: 160px;
          object-fit: cover;
          display: block;
          border-bottom: 1px solid var(--border);
          margin: 0 -12px 10px;
        }
        .thumb.placeholder {
          background: linear-gradient(180deg, #f3f4f6, #e5e7eb);
        }
        .title {
          font-size: 1.05rem;
          margin: 0 0 6px;
        }
        .summary {
          margin: 0 0 10px;
          color: var(--muted);
          line-height: 1.5;
        }
        .meta {
          margin: 0;
          color: var(--muted);
          font-size: 0.9rem;
        }
      `}</style>
    </main>
  );
}

export async function getStaticProps() {
  // Pull from guides so the page is always populated and all fields are strings.
  let items = [];
  try {
    items = (getAllGuidesMeta?.() || [])
      .map((g) => ({
        slug: String(g.slug || ''),
        title: String(g.title || ''),
        summary: g.summary ? String(g.summary) : '',
        image: g.image ? String(g.image) : '',
        date: g.date ? String(g.date) : '',
      }))
      .slice(0, 24);
  } catch (e) {
    items = [];
  }
  return { props: { items } };
}
