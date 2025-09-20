// pages/guides/safer-cleaning.js
import Head from "next/head";

const SITE = "https://www.wild-and-well.store";
const TAG = "wildandwell0c-21";

export default function SaferCleaning() {
  const canonical = `${SITE}/guides/safer-cleaning`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Safer Cleaning: Less-Harsh Products That Work",
    description:
      "Low-tox swaps and simple ingredients for kitchens, bathrooms and everyday surfaces.",
    image: [`${SITE}/cover.jpg`],
    mainEntityOfPage: canonical,
    author: { "@type": "Organization", name: "Wild & Well" },
  };

  return (
    <>
      <Head>
        <title>Safer Cleaning • Wild & Well</title>
        <meta
          name="description"
          content="Low-tox swaps and simple ingredients for kitchens, bathrooms and everyday surfaces."
        />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content="Safer Cleaning: Less-Harsh Products That Work" />
        <meta
          property="og:description"
          content="Low-tox swaps and simple ingredients for kitchens, bathrooms and everyday surfaces."
        />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="/cover.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
      </Head>

      <main className="wrap">
        <header className="hero">
          <h1>Safer Cleaning: Less-Harsh Products That Work</h1>
          <p className="lead">
            Keep it simple: a good all-purpose cleaner, dish soap, glass cleaner and
            scrub. Add microfiber and you’re set.
          </p>
          <p className="disclosure">
            <strong>Disclosure:</strong> Affiliate links below may earn us a commission.
          </p>
        </header>

        <section className="grid">
          <div className="card">
            <h2>All-Purpose Cleaner</h2>
            <p>Plant-based formulas or concentrate refills are cost-effective.</p>
            <a
              className="btn"
              href={`https://www.amazon.co.uk/s?k=natural+all+purpose+cleaner&tag=${TAG}`}
              target="_blank"
              rel="nofollow sponsored noreferrer"
            >
              All-purpose cleaners →
            </a>
          </div>

          <div className="card">
            <h2>Dish Soap (and Refills)</h2>
            <p>Look for biodegradable, fragrance-light options or solid dish bars.</p>
            <a
              className="btn"
              href={`https://www.amazon.co.uk/s?k=eco+dish+soap&tag=${TAG}`}
              target="_blank"
              rel="nofollow sponsored noreferrer"
            >
              Dish soaps →
            </a>
            <a
              className="btn ghost"
              href={`https://www.amazon.co.uk/s?k=dish+soap+refill&tag=${TAG}`}
              target="_blank"
              rel="nofollow sponsored noreferrer"
            >
              Refills →
            </a>
          </div>

          <div className="card">
            <h2>Glass & Mirror Cleaner</h2>
            <p>Streak-free sprays or tablets you dissolve at home to cut plastic.</p>
            <a
              className="btn"
              href={`https://www.amazon.co.uk/s?k=eco+glass+cleaner&tag=${TAG}`}
              target="_blank"
              rel="nofollow sponsored noreferrer"
            >
              Glass cleaners →
            </a>
          </div>

          <div className="card">
            <h2>Scrub: Baking Soda + Castile Soap</h2>
            <p>Great for sinks, tubs and tiles. Gentle but effective with a cloth.</p>
            <a
              className="btn"
              href={`https://www.amazon.co.uk/s?k=castile+soap&tag=${TAG}`}
              target="_blank"
              rel="nofollow sponsored noreferrer"
            >
              Castile soap →
            </a>
            <a
              className="btn ghost"
              href={`https://www.amazon.co.uk/s?k=bicarbonate+of+soda+food+grade&tag=${TAG}`}
              target="_blank"
              rel="nofollow sponsored noreferrer"
            >
              Baking soda →
            </a>
          </div>

          <div className="card">
            <h2>Microfiber Cloths & Scrub Pads</h2>
            <p>Washable, long-lasting and reduce the need for chemical strength.</p>
            <a
              className="btn"
              href={`https://www.amazon.co.uk/s?k=microfiber+cleaning+cloths&tag=${TAG}`}
              target="_blank"
              rel="nofollow sponsored noreferrer"
            >
              Microfiber cloths →
            </a>
          </div>
        </section>

        <aside className="tips">
          <h3>Simple Routine</h3>
          <ul>
            <li>Label spray bottles clearly and keep out of reach of children.</li>
            <li>Ventilate bathrooms; use gloves if you have sensitive skin.</li>
            <li>Never mix vinegar with products containing bleach.</li>
          </ul>
        </aside>
      </main>

      <style jsx>{`
        .wrap { max-width: 1000px; margin: 28px auto; padding: 0 16px; }
        .hero h1 { margin: 0 0 6px; font-size: 2rem; }
        .lead { color: #4b5563; margin: 0 0 8px; }
        .disclosure { color: #6b7280; font-size: .9rem; }
        .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 14px; margin-top: 16px; }
        .card { border: 1px solid #e5e7eb; border-radius: 12px; padding: 14px; background: #fff; }
        .btn { display: inline-block; margin-right: 8px; margin-top: 10px; padding: 10px 12px; border-radius: 10px; background: #065f46; color: #fff; text-decoration: none; border: 1px solid #065f46; }
        .btn.ghost { background: #fff; color: #065f46; }
        .btn:hover { filter: brightness(.98); }
        .tips { margin: 16px 0 8px; border-top: 1px solid #e5e7eb; padding-top: 12px; }
        ul { margin: 8px 0 0 20px; color: #374151; }
      `}</style>
    </>
  );
}
