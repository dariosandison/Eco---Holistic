import Head from "next/head";

// ===== EDIT THESE LATER IF NEEDED =====
const postTitle = "Minimal-Ingredient Processed Foods: Smart Pantry Picks";
const postDescription =
  "Quick wins for a cleaner pantry: cereals, snacks, and staples with short, readable ingredients. Includes shopping tips and our favourite go-tos.";
const canonical = "https://www.wild-and-well.store/posts/processed-foods-minimal-ingredients";
const datePublished = "2025-03-01";
const dateModified = "2025-03-01";
const heroImage = "/cover.jpg"; // swap later for a pantry/cereal image
const products = [
  {
    name: "Rude Health Honey Puffed Cereal",
    bullets: [
      "Short list: whole grains + honey",
      "Crisp texture, kid-friendly",
      "Great base with fruit & yogurt"
    ],
    why: "A simple cereal without a chemistry set of additives.",
    url: "https://www.amazon.co.uk/dp/ASIN401/?tag=your-tag-20"
  },
  {
    name: "100% Peanut Butter (No Sugar, No Palm Oil)",
    bullets: [
      "Just peanuts & pinch of salt (or unsalted)",
      "Protein + healthy fats",
      "Use in porridge, toast, sauces"
    ],
    why: "Nut butters are often loaded with sugar/oils—this one keeps it clean.",
    url: "https://www.amazon.co.uk/dp/ASIN402/?tag=your-tag-20"
  },
  {
    name: "Whole-Leaf Tinned Tomatoes (BPA-Free Lining)",
    bullets: [
      "Ingredients you recognise",
      "Base for soups, stews, sauces",
      "Budget-friendly & shelf-stable"
    ],
    why: "Tomatoes are a weeknight hero—choose cans with simple labels.",
    url: "https://www.amazon.co.uk/dp/ASIN403/?tag=your-tag-20"
  },
  {
    name: "Plain Natural Yogurt (Live Cultures)",
    bullets: [
      "Milk + cultures (that’s it)",
      "Breakfast bowls, marinades, dressings",
      "Check sugar: ≤ 6g/100g (from milk)"
    ],
    why: "Versatile protein source; add fruit/honey yourself to control sweetness.",
    url: "https://www.amazon.co.uk/dp/ASIN404/?tag=your-tag-20"
  },
  {
    name: "70%+ Dark Chocolate (Short Label)",
    bullets: [
      "Cocoa mass, cocoa butter, sugar, vanilla",
      "Intense flavour—satisfying with less",
      "Look for ethically sourced brands"
    ],
    why: "A simple treat that avoids emulsifiers and long additive lists.",
    url: "https://www.amazon.co.uk/dp/ASIN405/?tag=your-tag-20"
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
          <h2>How to Read a Label (10-Second Rule)</h2>
          <ul>
            <li><strong>Short & simple:</strong> 10 ingredients or fewer you recognise.</li>
            <li><strong>Sugar check:</strong> Aim ≤ 5–8g per 100g for everyday items.</li>
            <li><strong>Oils:</strong> Prefer olive/coconut/butter. Skip “vegetable oil blend” when possible.</li>
            <li><strong>Additives:</strong> Minimise artificial colours, flavours, sweeteners, and gums.</li>
          </ul>
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
          <h2>Breakfast Upgrades</h2>
          <ul>
            <li><strong>Base:</strong> Simple cereals (like puffed grains) or plain oats.</li>
            <li><strong>Boost:</strong> Add yogurt, nut butter, berries, and seeds for protein & fibre.</li>
            <li><strong>Sweeten smart:</strong> Drizzle honey or maple yourself—less than boxed cereals.</li>
          </ul>
        </section>

        <section>
          <h2>Snack Swaps</h2>
          <ul>
            <li><strong>Crackers:</strong> Wholegrain or sourdough with short labels.</li>
            <li><strong>Dips:</strong> Hummus (chickpeas, tahini, lemon, salt) or guacamole.</li>
            <li><strong>Sweet bite:</strong> A few squares of 70%+ dark chocolate with nuts.</li>
          </ul>
        </section>

        <section className="related">
          <h3>Related Guides</h3>
          <ul>
            <li><a href="/posts/less-harmful-cleaning-products">Less-Harmful Cleaning Products</a></li>
            <li><a href="/posts/low-waste-shower-kit">Low-Waste Shower Kit</a></li>
            <li><a href="/posts/water-filters">Cleaner Drinking Water: Home Water Filter Guide</a></li>
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
        .related { margin-top: 26px; padding-top: 12px; border-top: 1px solid #e5e7eb; }
        .related ul { margin: 6px 0 0 18px; }
        @media (max-width: 820px) { .grid { grid-template-columns: 1fr; } }
      `}</style>
    </>
  );
}
