// pages/deals.js
import Head from 'next/head';

// Optional: you can create content/deals.json { "items":[{ "title":"...", "url":"https://...", "note":"...", "price":"£..", "image":"/path.jpg" }]}
export default function Deals({ items }) {
  return (
    <main className="wrap">
      <Head>
        <title>Deals – Wild &amp; Well</title>
        <meta
          name="description"
          content="Curated discounts on eco-living and wellness gear."
        />
      </Head>

      <header className="pageHeader">
        <h1>Deals</h1>
        <p className="sub">
          Curated savings on products we genuinely like. Some links may be
          affiliate—never any extra cost to you.
        </p>
      </header>

      {items.length === 0 ? (
        <p>No live deals right now. Check back soon 👀</p>
      ) : (
        <ul className="grid">
          {items.map((d, i) => (
            <li key={`${d.url || i}`} className="card">
              {d.image ? (
                <img src={d.image} alt="" className="thumb" loading="lazy" />
              ) : (
                <div className="thumb placeholder" />
              )}
              <div className="body">
                <h2 className="title">{String(d.title || '').trim()}</h2>
                {d.note ? <p className="note">{String(d.note)}</p> : null}
                <div className="row">
                  {d.price ? <span className="price">{String(d.price)}</span> : <span />}
                  {d.url ? (
                    <a
                      className="btn"
                      href={String(d.url)}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                    >
                      View deal
                    </a>
                  ) : null}
                </div>
              </div>
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
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
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
        }
        .thumb {
          width: 100%;
          height: 160px;
          object-fit: cover;
          display: block;
          border-bottom: 1px solid var(--border);
        }
        .thumb.placeholder {
          background: linear-gradient(180deg, #f3f4f6, #e5e7eb);
        }
        .body {
          padding: 12px;
        }
        .title {
          margin: 0 0 6px;
          font-size: 1.05rem;
        }
        .note {
          margin: 0 0 10px;
          color: var(--muted);
          line-height: 1.5;
        }
        .row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }
        .price {
          font-weight: 600;
        }
        .btn {
          display: inline-block;
          padding: 8px 12px;
          border: 1px solid var(--border);
          border-radius: 10px;
          text-decoration: none;
        }
        .btn:hover {
          background: #f7f7f7;
        }
      `}</style>
    </main>
  );
}

export async function getStaticProps() {
  // Read optional JSON if present; otherwise, return an empty list.
  let items = [];
  try {
    const fs = await import('fs');
    const path = await import('path');
    const dealsPath = path.join(process.cwd(), 'content', 'deals.json');
    if (fs.existsSync(dealsPath)) {
      const raw = fs.readFileSync(dealsPath, 'utf8');
      const parsed = JSON.parse(raw);
      if (parsed && Array.isArray(parsed.items)) {
        items = parsed.items
          .filter(Boolean)
          .map((d) => ({
            title: d.title ? String(d.title) : '',
            url: d.url ? String(d.url) : '',
            note: d.note ? String(d.note) : '',
            price: d.price ? String(d.price) : '',
            image: d.image ? String(d.image) : '',
          }));
      }
    }
  } catch {
    items = [];
  }
  return { props: { items } };
}
