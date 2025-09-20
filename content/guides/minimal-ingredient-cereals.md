import Head from "next/head";
const TAG = "wildandwell0c-21";
const withTag = (u) => `${u}${u.includes("?") ? "&" : "?"}tag=${TAG}`;

export default function MinimalIngredientCereals() {
  const url = "https://www.wild-and-well.store/guides/minimal-ingredient-cereals";
  const products = [
    {
      title: "Rude Health Honey Puffs",
      href: withTag("https://www.amazon.co.uk/dp/B00E4E0R96"),
      img: "https://m.media-amazon.com/images/I/81xGZ4rJrUL._AC_SL1500_.jpg",
      blurb: "Short ingredients; simple sweetness.",
    },
    {
      title: "Pure Oat Porridge (No Added Sugar)",
      href: withTag("https://www.amazon.co.uk/dp/B07Y5J5C2J"),
      img: "https://m.media-amazon.com/images/I/71JrF3uKQwL._AC_SL1500_.jpg",
      blurb: "Whole oats; customise toppings.",
    },
    {
      title: "Wholegrain Wheat Biscuits",
      href: withTag("https://www.amazon.co.uk/dp/B003V8T3V6"),
      img: "https://m.media-amazon.com/images/I/81oQm0b9BqL._AC_SL1500_.jpg",
      blurb: "Simple base; add fruit & nuts.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Minimal-Ingredient Breakfast Cereals",
    mainEntityOfPage: url,
    description:
      "Scan labels for short ingredient lists and simpler sweeteners when possible.",
    author: { "@type": "Organization", name: "Wild & Well" },
  };

  return (
    <>
      <Head>
        <title>Minimal-Ingredient Breakfast Cereals • Wild & Well</title>
        <meta
          name="description"
          content="Scan labels for short ingredient lists, whole grains first, and simpler sweeteners when possible."
        />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Minimal-Ingredient Breakfast Cereals • Wild & Well" />
        <meta property="og:description" content="Short ingredients, whole grains, lower sugar—easy cereal wins." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content="/cover.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <main className="wrap">
        <h1>Minimal-Ingredient Breakfast Cereals</h1>
        <p className="lead">
          Look for whole grains first, short ingredient lists you recognize, and lower sugar per serving.
        </p>

        <section>
          <h2>Pairing Ideas</h2>
          <ul>
            <li>Add nuts/seeds for protein and healthy fats.</li>
            <li>Top with fresh fruit; consider unsweetened milk alternatives.</li>
          </ul>
        </section>

        <section>
          <h2>Recommended Picks</h2>
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

