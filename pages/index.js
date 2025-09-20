// pages/index.js
import Head from "next/head";

const SITE = "https://www.wild-and-well.store";

export default function Home() {
  const canonical = SITE;

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Wild & Well",
    url: SITE,
    logo: `${SITE}/favicon.ico`,
    sameAs: [
      "https://www.instagram.com/yourhandle",
      "https://www.pinterest.com/yourhandle",
      "https://www.facebook.com/yourpage",
    ],
  };

  return (
    <>
      <Head>
        <title>Wild & Well • Eco Living & Holistic Health</title>
        <meta
          name="description"
          content="Practical guides, simple swaps, and curated picks for eco-friendly living and holistic wellness."
        />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content="Wild & Well • Eco Living & Holistic Health" />
        <meta
          property="og:description"
          content="Practical guides, simple swaps, and curated picks for eco-friendly living and holistic wellness."
        />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="/cover.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </Head>

      {/* HERO */}
      <section className="hero">
        <div className="heroInner">
          <div className="copy">
            <h1>Live <span>Wild & Well</span></h1>
            <p>
              Eco-friendly habits and holistic health—made simple. Start with a guide,
              then explore our curated picks.
            </p>
            <div className="ctaRow">
              <a className="btn primary" href="/recommended">Recommended Products</a>
              <a className="btn" href="/guides/low-waste-shower-kit">Start: Low-Waste Shower</a>
            </div>
          </div>
          <div className="art">
            <img src="/cover.jpg" alt="" />
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="quick">
        <div className="wrap">
          <a className="q" href="/guides/water-filters">
            <h3>Water Filters</h3>
            <p>From jugs to under-sink systems—what to consider.</p>
            <span>Read guide →</span>
          </a>
          <a className="q" href="/guides/safer-cleaning">
            <h3>Safer Cleaning</h3>
            <p>Less-harsh products and easy homemade staples.</p>
            <span>Read guide →</span>
          </a>
          <a className="q" href="/guides/minimal-ingredient-cereals">
            <h3>Breakfast Basics</h3>
            <p>Short-label cereals and whole-food add-ins.</p>
            <span>Read guide →</span>
          </a>
        </div>
      </section>

      {/* PROMO STRIP */}
      <section className="strip">
        <div className="wrap stripInner">
          <div>
            <h2>Curated Picks That Respect Your Time</h2>
            <p>We test, compare, and only list the good stuff. No fluff.</p>
          </div>
          <a className="btn primary" href="/recommended">Shop the List</a>
        </div>
      </section>

      {/* FOOTNOTE DISCLAIMER (page-level, safe for compliance) */}
      <section className="footnote">
        <p>
          <strong>Disclosure:</strong> As an Amazon Associate, we earn from qualifying purchases.
        </p>
      </section>

      <style jsx>{`
        :global(body) { background: #ffffff; }
        .hero {
          border-bottom: 1px solid #e5e7eb;
          background: linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%);
        }
        .heroInner {
          max-width: 1100px; margin: 0 auto; padding: 32px 16px;
          display: grid; grid-template-columns: 1.1fr .9fr; gap: 24px; align-items: center;
        }
        .copy h1 { font-size: 2.25rem; margin: 0 0 8px; }
        .copy h1 span { color: #065f46; }
        .copy p { margin: 0 0 14px; color: #4b5563; }
        .ctaRow { display: flex; gap: 10px; flex-wrap: wrap; }
        .btn {
          display: inline-block; padding: 10px 14px; border-radius: 12px;
          border: 1px solid #065f46; color: #065f46; text-decoration: none; font-weight: 600;
          background: #ffffff;
        }
        .btn.primary { background: #065f46; color: #fff; }
        .btn:hover { filter: brightness(.98); transform: translateY(-1px); }
        .art img {
          width: 100%; height: auto; border-radius: 16px; border: 1px solid #e5e7eb; background: #fff;
        }

        .quick .wrap {
          max-width: 1100px; margin: 24px auto; padding: 0 16px;
          display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 14px;
        }
        .q {
          display: block; padding: 14px; border: 1px solid #e5e7eb; border-radius: 12px; text-decoration: none; color: inherit; background: #fff;
          transition: transform .15s ease, box-shadow .15s ease;
        }
        .q:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,.06); }
        .q h3 { margin: 0 0 6px; font-size: 1.05rem; }
        .q p { margin: 0 0 8px; color: #4b5563; }
        .q span { color: #065f46; font-weight: 600; }

        .strip {
          background: #0f766e; color: #fff; margin: 10px 0 0;
        }
        .stripInner {
          max-width: 1100px; margin: 0 auto; padding: 18px 16px;
          display: flex; justify-content: space-between; gap: 16px; align-items: center; flex-wrap: wrap;
        }
        .strip h2 { margin: 0 0 4px; font-size: 1.2rem; }
        .strip p { margin: 0; opacity: .95; }
        .strip .btn.primary { border-color: #ffffff; background: #fff; color: #0f766e; }

        .footnote { text-align: center; color: #6b7280; font-size: .9rem; padding: 16px; }
        @media (max-width: 880px) {
          .heroInner { grid-template-columns: 1fr; padding: 24px 16px; }
        }
      `}</style>
    </>
  );
}
