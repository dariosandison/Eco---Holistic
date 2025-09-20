import Head from "next/head";

const TAG = "wildandwell0c-21";
const withTag = (u) => `${u}${u.includes("?") ? "&" : "?"}tag=${TAG}`;

export default function LowWasteShowerKit() {
  const url = "https://www.wild-and-well.store/guides/low-waste-shower-kit";
  const products = [
    {
      title: "Solid Shampoo Bar (Tin)",
      href: withTag("https://www.amazon.co.uk/dp/B08QJ8G1M6"),
      img: "https://m.media-amazon.com/images/I/71H0K2TqvDL._AC_SL1500_.jpg",
      blurb: "Travel-friendly, plastic-free cleansing.",
    },
    {
      title: "Solid Conditioner Bar",
      href: withTag("https://www.amazon.co.uk/dp/B08QJ82KH5"),
      img: "https://m.media-amazon.com/images/I/71o1y0+Z4gL._AC_SL1500_.jpg",
      blurb: "Detangles and softens without the bottle.",
    },
    {
      title: "Stainless/Aluminium Refillable Bottle",
      href: withTag("https://www.amazon.co.uk/dp/B09C2N8Q1S"),
      img: "https://m.media-amazon.com/images/I/61v4dZ7wYDL._AC_SL1500_.jpg",
      blurb: "Use with concentrate or DIY body wash.",
    },
    {
      title: "Safety Razor (Replaceable Blades)",
      href: withTag("https://www.amazon.co.uk/dp/B07T8D1VSV"),
      img: "https://m.media-amazon.com/images/I/61s7C2g3WOL._AC_SL1500_.jpg",
      blurb: "Durable metal body, close shave, less waste.",
    },
    {
      title: "Natural Fiber Washcloth",
      href: withTag("https://www.amazon.co.uk/dp/B07V6C2N1N"),
      img: "https://m.media-amazon.com/images/I/81fl1y2zvLL._AC_SL1500_.jpg",
      blurb: "Gently exfoliates; fully washable.",
    },
    {
      title: "Draining Soap Tray",
      href: withTag("https://www.amazon.co.uk/dp/B0892M8ZJZ"),
      img: "https://m.media-amazon.com/images/I/71Kp3dZ1HOL._AC_SL1500_.jpg",
      blurb: "Helps bars last longer between uses.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Low-Waste Shower Kit",
    description:
      "Build a simple, planet-friendly shower routine using bar soap, refillable bottles, and durable accessories.",
    mainEntityOfPage: url,
    author: { "@type": "Organization", name: "Wild & Well" },
  };

  return (
    <>
      <Head>
        <title>Low-Waste Shower Kit • Wild & Well</title>
        <meta
          name="description"
          content="Build a simple, planet-friendly shower routine using bar soap, refillable bottles, and durable accessories."
        />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Low-Waste Shower Kit • Wild & Well" />
        <meta property="og:description" content="Planet-friendly shower routine using bars, refills, and durable tools." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content="/cover.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <main className="wrap">
        <h1>Low-Waste Shower Kit</h1>
        <p className="lead">
          Bathrooms generate a lot of plastic—from shampoo bottles to disposable razors. These small swaps reduce waste,
          look great on the shelf, and last longer.
        </p>

        <section>
          <h2>Core Swaps</h2>
          <ul>
            <li>Solid shampoo & conditioner bars in tins</li>
            <li>Bar soap (fragrance-light, palm-aware sourcing)</li>
            <li>Refillable bottle if you prefer liquid body wash</li>
            <li>Safety razor with replaceable blades</li>
            <li>Natural fiber washcloth or loofah</li>
          </ul>
        </section>

        <section>
          <h2>Tips</h2>
          <ul>
            <li>Finish what you have first—then swap one item at a time.</li>
            <li>Store bars on a draining tray so they last longer.</li>
          </ul>
        </section>

        <section>
          <h2>Recommended Items</h2>
          <div className="grid">
            {products.map((p) => (
              <a
                key={p.title}
                className="card"
                href={p.href}
                target="_blank"
                rel="nofollow sponsored noopener"
                title={p.title}
              >
                <img src={p.img} alt={p.title} />
                <div className="info">
                  <strong>{p.title}</strong>
                  <p>{p.blurb}</p>
                  <span className="cta">View on Amazon →</span>
                </div>
              </a>
            ))}
          </div>
          <p className="disclaimer">
            As an Amazon Associate, we earn from qualifying purchases.
          </p>
        </section>
      </main>

      <style jsx>{`
        .wrap { max-width: 900px; margin: 2rem auto; padding: 0 16px; }
        h1 { font-size: 2rem; margin-bottom: .25rem; }
        .lead { color: #475569; margin-bottom: 1rem; }
        h2 { font-size: 1.25rem; margin: 1.25rem 0 .5rem; }
        ul { margin-left: 1.25rem; }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 16px; margin-top: .5rem;
        }
        .card {
          border: 1px solid #e5e7eb; background: #fff; border-radius: 10px;
          overflow: hidden; text-decoration: none; color: inherit;
          display: grid; grid-template-rows: 150px auto;
        }
        .card img { width: 100%; height: 150px; object-fit: cover; display: block; }
        .info { padding: 10px 12px; }
        .info p { margin: 6px 0 10px; color: #4b5563; font-size: .95rem; }
        .cta { color: #0f766e; font-weight: 600; font-size: .95rem; }
        .disclaimer { color: #6b7280; font-size: .9rem; margin-top: .75rem; }
      `}</style>
    </>
  );
}

