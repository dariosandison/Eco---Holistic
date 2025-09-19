import Head from "next/head";

// ===== EDIT THESE 6 CONSTANTS =====
const postTitle = "Low-Waste Shower Kit: Bars, Saver & Safety Razor";
const postDescription =
  "Switch to plastic-free shower essentials: shampoo/conditioner bars, a sisal saver, and a stainless safety razor.";
const canonical =
  "https://www.wild-and-well.store/posts/low-waste-shower-kit";
const datePublished = "2025-03-01";
const dateModified = "2025-03-01";
const heroImage = "/cover.jpg"; // put any hero image in /public and change this path
const products = [
  {
    name: "Sulfate-Free Solid Shampoo Bar",
    bullets: [
      "Plastic-free, travel-friendly",
      "Rich lather; lasts 60–80 washes",
      "For all hair types"
    ],
    why: "Cuts bottles and shipping weight while keeping hair balanced.",
    url: "https://www.amazon.co.uk/dp/ASIN1/?tag=your-tag-20"
  },
  {
    name: "Nourishing Solid Conditioner Bar",
    bullets: [
      "Detangles without heaviness",
      "Leaves hair soft & shiny",
      "Zero-waste packaging"
    ],
    why: "Pairs with the shampoo bar to reduce plastic drastically.",
    url: "https://www.amazon.co.uk/dp/ASIN2/?tag=your-tag-20"
  },
  {
    name: "Sisal Soap Saver Pouch",
    bullets: [
      "Use up every last sliver",
      "Gentle exfoliation",
      "Compostable fiber"
    ],
    why: "Extends bar life and boosts lather while exfoliating.",
    url: "https://www.amazon.co.uk/dp/ASIN3/?tag=your-tag-20"
  },
  {
    name: "Stainless Safety Razor + Blades",
    bullets: [
      "Close, smooth shave",
      "Fully recyclable blades",
      "Long-lasting metal build"
    ],
    why: "Saves money over cartridges and eliminates mixed-plastic waste.",
    url: "https://www.amazon.co.uk/dp/ASIN4/?tag=your-tag-20"
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
    isPartOf: {
      "@type": "Blog",
      name: site,
      url: "https://www.wild-and-well.store"
    },
    author: { "@type": "Organization", name: site },
    publisher: {
      "@type": "Organization",
      name: site,
      logo: { "@type": "ImageObject", url: "/favicon.ico" }
    }
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <article className="wrap">
        <header className="hero">
          <h1>{postTitle}</h1>
          <p className="dek">{postDescription}</p>
          <img className="heroimg" src={heroImage} alt={postTitle} />
          <p className="meta">
            <time dateTime={datePublished}>Published: {datePublished}</time>{" "}
            · Updated: {dateModified}
          </p>
          <p className="disclosure">
            <strong>Affiliate disclosure:</strong> This post contains affiliate
            links. If you buy through our links, we may earn a small commission
            at no extra cost to you. Thanks for supporting {site}! 🌱
          </p>
        </header>

        <section>
          <h2>Why go low-waste in the shower?</h2>
          <p>
            Bathroom products are a major source of plastic. These simple swaps
            reduce waste, save money over time, and are easy to adopt.
          </p>
        </section>

        <section className="grid">
          {products.map((p) => (
            <div className="card" key={p.name}>
              <h3>{p.name}</h3>
              <ul>
                {p.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <p className="why">
                <strong>Why we like it:</strong> {p.why}
              </p>
              <a
                className="btn"
                href={p.url}
                target="_blank"
                rel="nofollow sponsored noopener"
              >
                View on Amazon
              </a>
            </div>
          ))}
        </section>

        <section>
          <h2>Quick routine to get started</h2>
          <ol>
            <li>Wet hair thoroughly and rub the shampoo bar between hands.</li>
            <li>Apply lather to scalp, massage, and rinse well.</li>
            <li>Glide conditioner bar over mid-lengths/ends; detangle and rinse.</li>
            <li>Pop bars in the sisal pouch to dry; hang between uses.</li>
            <li>Shave with short, light strokes using the safety razor.</li>
          </ol>
        </section>

        <section className="note">
          <p>
            <strong>Disclaimer:</strong> Content is for informational purposes
            only and not a substitute for professional medical advice. Always
            patch-test new products.
          </p>
        </section>
      </article>

      <style jsx>{`
        .wrap {
          max-width: 820px;
          margin: 32px auto 80px;
          padding: 0 16px;
        }
        .hero h1 {
          margin: 0 0 6px;
          font-size: 2rem;
        }
        .dek {
          color: #4b5563;
          margin: 0 0 14px;
        }
        .heroimg {
          width: 100%;
          height: auto;
          border-radius: 12px;
          border: 1px solid #e5e7eb;
          margin: 8px 0 10px;
          object-fit: cover;
        }
        .meta {
          color: #6b7280;
          font-size: 0.9rem;
          margin: 0 0 10px;
        }
        .disclosure {
          background: #f0fdf4;
          border: 1px solid #dcfce7;
          padding: 10px 12px;
          border-radius: 10px;
          font-size: 0.95rem;
        }
        h2 {
          margin: 28px 0 10px;
          font-size: 1.3rem;
        }
        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin: 14px 0 10px;
        }
        .card {
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 14px;
          background: #fff;
        }
        .card h3 {
          margin: 0 0 8px;
          font-size: 1.05rem;
        }
        .card ul {
          margin: 0 0 8px 18px;
        }
        .why {
          margin: 0 0 10px;
          color: #374151;
        }
        .btn {
          display: inline-block;
          text-decoration: none;
          background: #14532d;
          color: #fff;
          padding: 8px 12px;
          border-radius: 10px;
          font-weight: 600;
        }
        .note {
          margin-top: 18px;
          padding: 12px;
          border-left: 4px solid #d1fae5;
          background: #f9fffb;
          border-radius: 8px;
        }
        @media (max-width: 820px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
