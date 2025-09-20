// pages/guides/low-waste-shower-kit.js
import Head from "next/head";

const SITE = "https://www.wild-and-well.store";
const TAG = "wildandwell0c-21"; // Amazon affiliate tag

export default function LowWasteShower() {
  const canonical = `${SITE}/guides/low-waste-shower-kit`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Build a Low-Waste Shower Kit",
    description:
      "Simple bathroom swaps—bars, refills and durable tools—to cut plastic without sacrificing comfort.",
    image: [`${SITE}/cover.jpg`],
    mainEntityOfPage: canonical,
    author: { "@type": "Organization", name: "Wild & Well" },
    publisher: {
      "@type": "Organization",
      name: "Wild & Well",
      logo: { "@type": "ImageObject", url: `${SITE}/favicon.ico` },
    },
  };

  return (
    <>
      <Head>
        <title>Build a Low-Waste Shower Kit • Wild & Well</title>
        <meta
          name="description"
          content="Simple bathroom swaps—bars, refills and durable tools—to cut plastic without sacrificing comfort."
        />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content="Build a Low-Waste Shower Kit" />
        <meta
          property="og:description"
          content="Simple bathroom swaps—bars, refills and durable tools—to cut plastic without sacrificing comfort."
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
          <h1>Build a Low-Waste Shower Kit</h1>
          <p className="lead">
            Cut plastic and clutter with bar formats, refills, and durable tools that
            actually feel great to use.
          </p>
          <p className="disclosure">
            <strong>Disclosure:</strong> Some links below are affiliate links. As an Amazon
            Associate, we earn from qualifying purchases at no extra cost to you.
          </p>
        </header>

        <section className="grid">
          <div className="card">
            <h2>1) Shampoo & Conditioner Bars</h2>
            <p>
              Bars are concentrated, travel-friendly and ditch the plastic bottle. Look
              for sulfate-free formulas if you have a dry scalp.
            </p>
            <a
              className="btn"
              href={`https://www.amazon.co.uk/s?k=shampoo+bar&tag=${TAG}`}
              target="_blank"
              rel="nofollow sponsored noreferrer"
            >
              Browse shampoo bars →
            </a>
            <a
              className="btn ghost"
              href={`https://www.amazon.co.uk/s?k=conditioner+bar&tag=${TAG}`}
              target="_blank"
              rel="nofollow sponsored noreferrer"
            >
              Conditioner bars →
            </a>
          </div>

          <div className="card">
            <h2>2) Gentle Body Bar or Refill Wash</h2>
            <p>
              Unscented or essential-oil scented bars are simple and long-lasting. If you
              prefer liquid, choose brands offering large refill pouches.
            </p>
            <a
              className="btn"
              href={`https://www.amazon.co.uk/s?k=natural+soap+bar&tag=${TAG}`}
              target="_blank"
              rel="nofollow sponsored noreferrer"
            >
              Natural soap bars →
            </a>
            <a
              className="btn ghost"
              href={`https://www.amazon.co.uk/s?k=body+wash+refill&tag=${TAG}`}
              target="_blank"
              rel="nofollow sponsored noreferrer"
            >
              Body wash refills →
            </a>
          </div>

          <div className="card">
            <h2>3) Stainless Safety Razor</h2>
            <p>
              One metal handle + inexpensive blades. Smooth shaves, less plastic waste and
              lower long-term cost.
            </p>
            <a
              className="btn"
              href={`https://www.amazon.co.uk/s?k=stainless+safety+razor&tag=${TAG}`}
              target="_blank"
              rel="nofollow sponsored noreferrer"
            >
              See safety razors →
            </a>
          </div>

          <div className="card">
            <h2>4) Reusable Cloth & Exfoliating Glove</h2>
            <p>
              Swap plastic poufs for washable cotton cloths or an exfoliating mitt. They
              dry quickly and last.
            </p>
            <a
              className="btn"
              href={`https://www.amazon.co.uk/s?k=exfoliating+glove&tag=${TAG}`}
              target="_blank"
              rel="nofollow sponsored noreferrer"
            >
              Exfoliating gloves →
            </a>
            <a
              className="btn ghost"
              href={`https://www.amazon.co.uk/s?k=cotton+wash+cloths&tag=${TAG}`}
              target="_blank"
              rel="nofollow sponsored noreferrer"
            >
              Cotton cloths →
            </a>
          </div>

          <div className="card">
            <h2>5) Simple Shower Filter (Optional)</h2>
            <p>
              If your water is hard or heavily chlorinated, a basic in-line filter can
              help with skin feel and hair manageability.
            </p>
            <a
              className="btn"
              href={`https://www.amazon.co.uk/s?k=shower+filter&tag=${TAG}`}
              target="_blank"
              rel="nofollow sponsored noreferrer"
            >
              Compare shower filters →
            </a>
          </div>
        </section>

        <aside className="tips">
          <h3>Tips</h3>
          <ul>
            <li>Let bars dry on a slotted dish—makes them last much longer.</li>
            <li>Patch test new products if you have sensitive skin.</li>
            <li>Refill before empty so you never revert to last-minute plastic buys.</li>
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
