import Head from "next/head";

// ===== EDIT THESE 6 CONSTANTS LATER IF NEEDED =====
const postTitle = "Less-Harmful Cleaning Products: Simple Low-Tox Swaps";
const postDescription =
  "Ditch harsh fragrances and mystery chemicals. Here are safer, effective cleaning swaps, quick DIYs, and where to start for kitchens, bathrooms, and laundry.";
const canonical = "https://www.wild-and-well.store/posts/less-harmful-cleaning-products";
const datePublished = "2025-03-01";
const dateModified = "2025-03-01";
const heroImage = "/cover.jpg"; // replace later with a cleaning-themed banner if you like
const products = [
  {
    name: "Pure Castile Soap (Unscented, Concentrate)",
    bullets: [
      "Ultra-concentrated: dilute for dishes, floors, hands",
      "Fragrance-free; add essential oils only if desired",
      "Plant-based surfactants"
    ],
    why: "One bottle replaces several cleaners—great first swap that cuts plastic & cost.",
    url: "https://www.amazon.co.uk/dp/ASIN201/?tag=your-tag-20"
  },
  {
    name: "Microfibre Cleaning Cloth Set",
    bullets: [
      "Grabs dust without sprays",
      "Machine washable, long-lasting",
      "Use colour-coding by room"
    ],
    why: "Reduces chemical load and paper towel waste; excellent for glass & mirrors.",
    url: "https://www.amazon.co.uk/dp/ASIN202/?tag=your-tag-20"
  },
  {
    name: "Oxygen Bleach (Sodium Percarbonate) Powder",
    bullets: [
      "Non-chlorine whitening/brightening",
      "Good on tea/coffee stains & grout",
      "Biodegrades to soda ash + oxygen"
    ],
    why: "Laundry boost and bathroom grout refresh without chlorine fumes.",
    url: "https://www.amazon.co.uk/dp/ASIN203/?tag=your-tag-20"
  },
  {
    name: "Fragrance-Free Dishwasher Tablets (Short INCI)",
    bullets: [
      "No dyes or strong perfumes",
      "Rinse-aid included in many",
      "Check packaging for phosphates-free"
    ],
    why: "Easier on skin and indoor air; look for transparent ingredient lists.",
    url: "https://www.amazon.co.uk/dp/ASIN204/?tag=your-tag-20"
  },
  {
    name: "Citric Acid (Food Grade) + Refillable Spray Bottle",
    bullets: [
      "Natural limescale remover",
      "Great on kettles, taps, shower glass",
      "DIY: 1–2 tbsp per 500 ml warm water"
    ],
    why: "Effective descaler without harsh mineral acids; cheap, simple, reliable.",
    url: "https://www.amazon.co.uk/dp/ASIN205/?tag=your-tag-20"
  }
];
// ===== END EDITABLE AREA =====

export default function Post() {
  const site = "Wild & Well";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: postTitle,
    description: postDescription,
    datePublished,
    dateModified,
    mainEntityOfPage: canonical,
    image: heroImage,
    isPartOf: { "@type": "Blog", name: site, url: "https://www.wild-and-well.store" },
    author: { "@type": "Organization", name: site },
    publisher: { "@type": "Organization", name: site, logo: { "@type": "ImageObject", url: "/favicon.ico" } }
  };

  return (
    <>
      <Head>
        <title>{postTitle} | Wild & Well</title>
        <meta name="description" content={postDescription} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={`${postTitle} | Wild & Well`} />
        <meta property="og:description" content={postDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={heroImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <article className="wrap">
        <header className="hero">
          <h1>{postTitle}</h1>
          <p className="dek">{postDescription}</p>
          <img className="heroimg" src={heroImage} alt={postTitle} />
          <p className="meta">
            <time dateTime={datePublished}>Published: {datePublished}</time> · Updated: {dateModified}
          </p>
          <p className="disclosure">
            <strong>Affiliate disclosure:</strong> This post contains affiliate links. If you buy through our links, we may
            earn a small commission at no extra cost to you. Thanks for supporting {site}! 🌿
          </p>
        </header>

        <section>
          <h2>Quick Start: 3 High-Impact Swaps</h2>
          <ol>
            <li><strong>Degreaser & dishes:</strong> Diluted castile soap + hot water.</li>
            <li><strong>Glass & chrome:</strong> Microfibre + water; polish dry with a second cloth.</li>
            <li><strong>Limescale:</strong> Citric-acid spray on taps, shower doors, kettle (rinse well).</li>
          </ol>
        </section>

        <section className="grid">
          {products.map((p) => (
            <div className="card" key={p.name}>
              <h3>{p.name}</h3>
              <ul>{p.bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
              <p className="why"><strong>Why we like it:</strong> {p.why}</p>
              <a className="btn" href={p.url} target="_blank" rel="nofollow sponsored noopener">View on Amazon</a>
            </div>
          ))}
        </section>

        <section>
          <h2>Room-by-Room Guide</h2>
          <h3>Kitchen</h3>
          <ul>
            <li>Daily surfaces: dilute castile (¼–½ tsp per 500 ml warm water) in a spray bottle.</li>
            <li>Stubborn grease: a few drops of concentrate on a damp cloth, then rinse.</li>
            <li>Tea/coffee stains: oxygen bleach soak; rinse thoroughly.</li>
          </ul>
          <h3>Bathroom</h3>
          <ul>
            <li>Soap scum & limescale: citric-acid spray; leave 5–10 min, scrub with microfibre.</li>
            <li>Grout refresh: oxygen bleach paste (powder + warm water); scrub, rinse well.</li>
            <li>Glass/mirrors: plain microfibre + water; buff dry.</li>
          </ul>
          <h3>Laundry</h3>
          <ul>
            <li>Boost whites: 1–2 tbsp oxygen bleach in drum (check garment care labels).</li>
            <li>Sensitive skin: choose fragrance-free detergents with short ingredient lists.</li>
          </ul>
        </section>

        <section>
          <h2>DIY Basics (Fast & Safe)</h2>
          <ul>
            <li><strong>All-purpose:</strong> ½ tsp castile in 500 ml warm water. Optional: 3–5 drops essential oil (avoid neat skin contact; store away from kids/pets).</li>
            <li><strong>Descaler:</strong> 1–2 tbsp citric acid in 500 ml warm water. Label the bottle.</li>
            <li><strong>Glass:</strong> Water + microfibre (no product needed). For fingerprints, a dab of diluted castile, then buff dry.</li>
          </ul>
          <p className="note">
            <em>Avoid mixing vinegar/citric with bleach or products containing chlorine.</em>
          </p>
        </section>

        <section className="related">
          <h3>Related Guides</h3>
          <ul>
            <li><a href="/posts/water-filters">Cleaner Drinking Water: Home Water Filter Guide</a></li>
            <li><a href="/posts/low-waste-shower-kit">Low-Waste Shower Kit</a></li>
            <li><a href="/posts/processed-foods-minimal-ingredients">Minimal-Ingredient Pantry: Quick Wins</a></li>
          </ul>
        </section>
      </article>

      <style jsx>{`
        .wrap { max-width: 820px; margin: 32px auto 80px; padding: 0 16px; }
        .hero h1 { margin: 0 0 6px; font-size: 2rem; }
        .dek { color: #4b5563; margin: 0 0 14px; }
        .heroimg { width: 100%; height: auto; border-radius: 12px; border: 1px solid #e5e7eb; margin: 8px 0 10px; object-fit: cover; }
        .meta { color: #6b7280; font-size: 0.9rem; margin: 0 0 10px; }
        .disclosure { background: #f0fdf4; border: 1px solid #dcfce7; padding: 10px 12px; border-radius: 10px; font-size: 0.95rem; }
        h2 { margin: 28px 0 10px; font-size: 1.3rem; }
        h3 { margin: 16px 0 6px; font-size: 1.1rem; }
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 14px 0 10px; }
        .card { border: 1px solid #e5e7eb; border-radius: 12px; padding: 14px; background: #fff; }
        .card h3 { margin: 0 0 8px; font-size: 1.05rem; }
        .card ul { margin: 0 0 8px 18px; }
        .why { margin: 0 0 10px; color: #374151; }
        .btn { display: inline-block; text-decoration: none; background: #14532d; color: #fff; padding: 8px 12px; border-radius: 10px; font-weight: 600; }
        .note { margin-top: 8px; color: #374151; }
        .related { margin-top: 26px; padding-top: 12px; border-top: 1px solid #e5e7eb; }
        .related ul { margin: 6px 0 0 18px; }
        @media (max-width: 820px) { .grid { grid-template-columns: 1fr; } }
      `}</style>
    </>
  );
}
