// pages/guides/water-filters.js
import Head from "next/head";

const SITE = "https://www.wild-and-well.store";
const TAG = "wildandwell0c-21";

export default function WaterFilters() {
  const canonical = `${SITE}/guides/water-filters`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Water Filters: Clearer, Better-Tasting Water",
    description:
      "From jugs to under-sink systems—what to consider for cleaner drinking water at home.",
    image: [`${SITE}/cover.jpg`],
    mainEntityOfPage: canonical,
    author: { "@type": "Organization", name: "Wild & Well" },
  };

  return (
    <>
      <Head>
        <title>Water Filters • Wild & Well</title>
        <meta
          name="description"
          content="From jugs to under-sink systems—what to consider for cleaner drinking water at home."
        />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content="Water Filters: Clearer, Better-Tasting Water" />
        <meta
          property="og:description"
          content="From jugs to under-sink systems—what to consider for cleaner drinking water at home."
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
          <h1>Water Filters: Clearer, Better-Tasting Water</h1>
          <p className="lead">
            Choose based on your tap water, space and budget. Start simple, then upgrade
            if needed.
          </p>
          <p className="disclosure">
            <strong>Disclosure:</strong> Affiliate links below help support our work. We
            may earn a small commission if you buy through them.
          </p>
        </header>

        <section className="grid">
          <div className="card">
            <h2>Jug / Pitcher Filters</h2>
            <p>
              Affordable and easy to use. Great for taste and odour. Replace cartridges on
              schedule for best performance.
            </p>
            <a
              className="btn"
              href={`https://www.amazon.co.uk/s?k=water+filter+jug&tag=${TAG}`}
              target="_blank"
              rel="nofollow sponsored noreferrer"
            >
              Compare jugs →
            </a>
          </div>

          <div className="card">
            <h2>Tap-Mount / Faucet Filters</h2>
            <p>
              Attach directly to the tap. Handy renter-friendly option without drilling.
            </p>
            <a
              className="btn"
              href={`https://www.amazon.co.uk/s?k=faucet+water+filter&tag=${TAG}`}
              target="_blank"
              rel="nofollow sponsored noreferrer"
            >
              Tap-mount filters →
            </a>
          </div>

          <div className="card">
            <h2>Countertop / Gravity Systems</h2>
            <p>
              Larger capacity with gravity filtration. Good for households drinking a lot
              of water daily.
            </p>
            <a
              className="btn"
              href={`https://www.amazon.co.uk/s?k=countertop+water+filter&tag=${TAG}`}
              target="_blank"
              rel="nofollow sponsored noreferrer"
            >
              Countertop options →
            </a>
          </div>

          <div className="card">
            <h2>Under-Sink Systems</h2>
            <p>
              Out of sight and convenient. Choose carbon filters for taste; multi-stage if
              you need extra reduction.
            </p>
            <a
              className="btn"
              href={`https://www.amazon.co.uk/s?k=under+sink+water+filter&tag=${TAG}`}
              target="_blank"
              rel="nofollow sponsored noreferrer"
            >
              Under-sink systems →
            </a>
          </div>

          <div className="card">
            <h2>Filter Cartridges</h2>
            <p>Stock up and set a reminder to replace on time for consistent results.</p>
            <a
              className="btn"
              href={`https://www.amazon.co.uk/s?k=water+filter+replacement+cartridges&tag=${TAG}`}
              target="_blank"
              rel="nofollow sponsored noreferrer"
            >
              Replacement cartridges →
            </a>
          </div>
        </section>

        <aside className="tips">
          <h3>Buying Tips</h3>
          <ul>
            <li>Check the filter’s certification and what it’s rated to reduce.</li>
            <li>Match capacity to your daily intake to avoid constant refilling.</li>
            <li>Keep filters in the fridge if advised to prevent microbial growth.</li>
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
        .btn { display: inline-block; margin-top: 10px; padding: 10px 12px; border-radius: 10px; background: #065f46; color: #fff; text-decoration: none; border: 1px solid #065f46; }
        .btn:hover { filter: brightness(.98); }
        .tips { margin: 16px 0 8px; border-top: 1px solid #e5e7eb; padding-top: 12px; }
        ul { margin: 8px 0 0 20px; color: #374151; }
      `}</style>
    </>
  );
}
