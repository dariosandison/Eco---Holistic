import Head from "next/head";

// ===== EDIT THESE 6 CONSTANTS LATER IF NEEDED =====
const postTitle = "Cleaner Drinking Water: Home Water Filter Guide (Low-Tox)";
const postDescription =
  "Simple ways to reduce chlorine, microplastics, PFAS and heavy metals at home. Countertop gravity, under-sink carbon, and shower filters—plus testing tips.";
const canonical = "https://www.wild-and-well.store/posts/water-filters";
const datePublished = "2025-03-01";
const dateModified = "2025-03-01";
const heroImage = "/cover.jpg"; // Swap later if you add a water-themed hero
const products = [
  {
    name: "Countertop Gravity Stainless Filter (Carbon + Fluoride)",
    bullets: [
      "No plumbing; ideal for renters",
      "Carbon + specialty media targets chlorine, PFAS, fluoride",
      "Stainless body, long-life elements"
    ],
    why: "Great entry option with excellent taste improvement and broad contaminant reduction.",
    url: "https://www.amazon.co.uk/dp/ASIN11/?tag=your-tag-20"
  },
  {
    name: "Under-Sink 3-Stage Carbon Block System",
    bullets: [
      "High-flow carbon blocks",
      "DIY-friendly install",
      "Good for chlorine, VOCs, microplastics"
    ],
    why: "Best day-to-day convenience: fast fill rate for cooking and drinking.",
    url: "https://www.amazon.co.uk/dp/ASIN12/?tag=your-tag-20"
  },
  {
    name: "Shower Filter (Vitamin C + KDF/Carbon Blend)",
    bullets: [
      "Reduces chlorine/odour",
      "Helps with dry skin & hair",
      "Tool-free replacement"
    ],
    why: "Quick win for skin barrier and hair feel—especially in chlorinated areas.",
    url: "https://www.amazon.co.uk/dp/ASIN13/?tag=your-tag-20"
  },
  {
    name: "At-Home Water Test Kit (Multi-Parameter)",
    bullets: [
      "Check hardness, chlorine, lead, nitrates, etc.",
      "Baseline before/after filters",
      "Fast strips + guide"
    ],
    why: "Measure first—then match the filter to the problem.",
    url: "https://www.amazon.co.uk/dp/ASIN14/?tag=your-tag-20"
  },
  {
    name: "Glass or Stainless Steel Bottle (500–750 ml)",
    bullets: [
      "BPA/BPS-free",
      "Dishwasher safe (check cap)",
      "Durable for daily carry"
    ],
    why: "Keep filtered water clean on the go—skip single-use plastic.",
    url: "https://www.amazon.co.uk/dp/ASIN15/?tag=your-tag-20"
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
            <strong>Affiliate disclosure:</strong> This post contains affiliate links. If you buy through our links, we may earn a small commission at no extra cost to you. Thanks for supporting {site}! 🌿
          </p>
        </header>

        <section>
          <h2>Match the filter to the problem</h2>
          <p>
            Start by testing your tap water. Carbon block systems are excellent for chlorine, taste and many VOCs. For broader reduction (PFAS, fluoride, some heavy metals), look for gravity systems with specialty media or certified under-sink units. If you have very high TDS or specific issues (like arsenic), consider a certified system targeted to that contaminant.
          </p>
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
          <h2>Quick setup tips</h2>
          <ul>
            <li>Flush new filters thoroughly to remove carbon fines.</li>
            <li>Replace cartridges on schedule; set a calendar reminder.</li>
            <li>Use glass or stainless bottles to keep water tasting clean.</li>
          </ul>
        </section>

        <section className="related">
          <h3>Related Guides</h3>
          <ul>
            <li><a href="/posts/low-waste-shower-kit">Low-Waste Shower Kit</a></li>
            <li><a href="/posts/eco-yoga-mat-starter">Eco Yoga Mat Starter</a></li>
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
