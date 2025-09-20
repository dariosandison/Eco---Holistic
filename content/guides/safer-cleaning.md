import Head from "next/head";
const TAG = "wildandwell0c-21";
const withTag = (u) => `${u}${u.includes("?") ? "&" : "?"}tag=${TAG}`;

export default function SaferCleaning() {
  const url = "https://www.wild-and-well.store/guides/safer-cleaning";
  const products = [
    {
      title: "Unscented Dish Soap (Concentrated)",
      href: withTag("https://www.amazon.co.uk/dp/B08KSWN9QH"),
      img: "https://m.media-amazon.com/images/I/61p7i8qYIOL._AC_SL1500_.jpg",
      blurb: "Dilute for light surface cleaning.",
    },
    {
      title: "Plant-Based All-Purpose Concentrate",
      href: withTag("https://www.amazon.co.uk/dp/B07Q6P7N7V"),
      img: "https://m.media-amazon.com/images/I/71t9+qf1wEL._AC_SL1500_.jpg",
      blurb: "One bottle = many refills.",
    },
    {
      title: "Microfiber Cloths (Wash & Reuse)",
      href: withTag("https://www.amazon.co.uk/dp/B07G1Z7W1C"),
      img: "https://m.media-amazon.com/images/I/81L7Y8b1s7L._AC_SL1500_.jpg",
      blurb: "Streak-free glass & surfaces.",
    },
    {
      title: "Baking Soda, Multi-Pack",
      href: withTag("https://www.amazon.co.uk/dp/B00M8Z2A9M"),
      img: "https://m.media-amazon.com/images/I/81i9cJm7dxL._AC_SL1500_.jpg",
      blurb: "Gentle scrub for sinks & tubs.",
    },
    {
      title: "White Vinegar (Cleaning Grade)",
      href: withTag("https://www.amazon.co.uk/dp/B08C9M9V9R"),
      img: "https://m.media-amazon.com/images/I/61zB2p9l2hL._AC_SL1500_.jpg",
      blurb: "Windows, limescale, mineral spots.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Less-Harmful Cleaning Products",
    mainEntityOfPage: url,
    description:
      "Simplify your cleaning kit with effective, lower-irritant options and clearer labels.",
    author: { "@type": "Organization", name: "Wild & Well" },
  };

  return (
    <>
      <Head>
        <title>Less-Harmful Cleaning Products • Wild & Well</title>
        <meta
          name="description"
          content="Simplify your cleaning kit with effective, lower-irritant options and clearer labels."
        />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Less-Harmful Cleaning Products • Wild & Well" />
        <meta property="og:description" content="Minimal kit, label tips, and reusable tools for a cleaner home." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content="/cover.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <main className="wrap">
        <h1>Less-Harmful Cleaning Products</h1>
        <p className="lead">
          A small set of concentrates and reusables can cover most cleaning jobs with fewer irritants and less packaging.
        </p>

        <section>
          <h2>The Minimal Kit</h2>
          <ul>
            <li>Unscented dish soap (dilute for surfaces)</li>
            <li>All-purpose concentrate (plant-based, dye-free)</li>
            <li>White vinegar + water for glass/mineral spots</li>
            <li>Baking soda for gentle scrubbing</li>
            <li>Microfiber or cotton cloths (wash & reuse)</li>
          </ul>
        </section>

        <section>
          <h2>Label Tips</h2>
          <ul>
            <li>Prefer short ingredient lists, low/no dye, and light fragrance.</li>
            <li>Spot-test on delicate surfaces.</li>
          </ul>
        </section>

        <section>
          <h2>Recommended Items</h2>
          <div className="grid">
            {products.map((p) => (
              <a key={p.title} className="card" href={p.href} target="_blank" rel="nofollow sponsored noopener">
                <img src={p.img} alt={p.title} />
                <div className="info">
                  <strong>{p.title}</strong>
                  <p>{p.blurb}</p>
                  <span className="cta">View on Amazon →</span>
                </div>
              </a>
            ))}
          </div>
          <p className="disclaimer">As an Amazon Associate, we earn from qualifying purchases.</p>
        </section>
      </main>

      <style jsx>{`
        .wrap { max-width: 900px; margin: 2rem auto; padding: 0 16px; }
        h1 { font-size: 2rem; margin-bottom: .25rem; }
        .lead { color: #475569; margin-bottom: 1rem; }
        h2 { font-size: 1.25rem; margin: 1.25rem 0 .5rem; }
        ul { margin-left: 1.25rem; }
        .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 16px; }
        .card { border: 1px solid #e5e7eb; background: #fff; border-radius: 10px; overflow: hidden; text-decoration: none; color: inherit; display: grid; grid-template-rows: 150px auto; }
        .card img { width: 100%; height: 150px; object-fit: cover; display: block; }
        .info { padding: 10px 12px; }
        .info p { margin: 6px 0 10px; color: #4b5563; font-size: .95rem; }
        .cta { color: #0f766e; font-weight: 600; font-size: .95rem; }
        .disclaimer { color: #6b7280; font-size: .9rem; margin-top: .75rem; }
      `}</style>
    </>
  );
}

