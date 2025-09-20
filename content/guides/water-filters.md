import Head from "next/head";
const TAG = "wildandwell0c-21";
const withTag = (u) => `${u}${u.includes("?") ? "&" : "?"}tag=${TAG}`;

export default function WaterFilters() {
  const url = "https://www.wild-and-well.store/guides/water-filters";
  const products = [
    {
      title: "Carbon Block Pitcher (Lead Reduction)",
      href: withTag("https://www.amazon.co.uk/dp/B07CVHW4CM"),
      img: "https://m.media-amazon.com/images/I/71b9iRkqYlL._AC_SL1500_.jpg",
      blurb: "Great taste + certified reductions.",
    },
    {
      title: "Under-Sink RO System",
      href: withTag("https://www.amazon.co.uk/dp/B01NAUZJPE"),
      img: "https://m.media-amazon.com/images/I/71afqkz0wWL._AC_SL1500_.jpg",
      blurb: "Broad removal; includes faucet.",
    },
    {
      title: "Whole-House Sediment Filter",
      href: withTag("https://www.amazon.co.uk/dp/B07H5N8ZJV"),
      img: "https://m.media-amazon.com/images/I/61e8z8U8VWL._AC_SL1500_.jpg",
      blurb: "Protects plumbing and appliances.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Choosing a Home Water Filter",
    mainEntityOfPage: url,
    description:
      "Understand main filter types and pick the simplest option that meets your water needs.",
    author: { "@type": "Organization", name: "Wild & Well" },
  };

  return (
    <>
      <Head>
        <title>Choosing a Home Water Filter • Wild & Well</title>
        <meta
          name="description"
          content="Understand the main filter types and pick the simplest option that meets your water quality needs."
        />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Choosing a Home Water Filter • Wild & Well" />
        <meta property="og:description" content="Quick guide to carbon block, RO, and whole-house filters." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content="/cover.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <main className="wrap">
        <h1>Choosing a Home Water Filter</h1>
        <p className="lead">
          If taste/odour is your main concern, a solid carbon block pitcher is often enough. For specific contaminants,
          look for certified reductions; for broad removal, consider reverse osmosis (RO).
        </p>

        <section>
          <h2>Filter Types (Quick)</h2>
          <ul>
            <li><strong>Activated carbon:</strong> Taste/odour, chlorine.</li>
            <li><strong>Carbon block + lead reduction:</strong> Selected metals + taste.</li>
            <li><strong>RO (reverse osmosis):</strong> Broad removal; needs install & waste line.</li>
            <li><strong>Whole-house sediment:</strong> Protects plumbing; not a final drinking filter.</li>
          </ul>
        </section>

        <section>
          <h2>Upkeep</h2>
          <ul>
            <li>Change cartridges on schedule—performance drops when overdue.</li>
            <li>Flush new filters as instructed for best taste.</li>
          </ul>
        </section>

        <section>
          <h2>Recommended Options</h2>
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

