import Head from "next/head";

// ===== EDIT THESE 6 CONSTANTS LATER IF NEEDED =====
const postTitle = "Sustainable Dental Care: Bamboo Brush, Tabs & Floss";
const postDescription =
  "Simple low-waste swaps for an eco dental routine: bamboo toothbrush, toothpaste tablets, a stainless tongue scraper, and refillable floss.";
const canonical =
  "https://www.wild-and-well.store/posts/sustainable-dental-care";
const datePublished = "2025-03-01";
const dateModified = "2025-03-01";
const heroImage = "/cover.jpg"; // change if you add a dedicated hero image
const products = [
  {
    name: "FSC Bamboo Toothbrush (Soft)",
    bullets: [
      "Biodegradable handle",
      "Soft, dentist-friendly bristles",
      "Plastic-free packaging"
    ],
    why: "An easy daily swap that cuts plastic at the source.",
    url: "https://www.amazon.co.uk/dp/ASIN1/?tag=your-tag-20"
  },
  {
    name: "Toothpaste Tablets (Fluoride)",
    bullets: [
      "Travel-friendly & mess-free",
      "Measured dose each time",
      "Recyclable or refillable jar"
    ],
    why: "No squeezed tubes; just bite, brush, and rinse.",
    url: "https://www.amazon.co.uk/dp/ASIN2/?tag=your-tag-20"
  },
  {
    name: "Stainless Steel Tongue Scraper",
    bullets: [
      "Improves breath in seconds",
      "Durable & easy to sanitize",
      "Ergonomic grip"
    ],
    why: "Removes buildup that brushing can miss.",
    url: "https://www.amazon.co.uk/dp/ASIN3/?tag=your-tag-20"
  },
  {
    name: "Natural Dental Floss + Refill",
    bullets: [
      "Refillable glass dispenser",
      "Compostable silk/corn-fiber",
      "Light natural coating"
    ],
    why: "Ditches plastic flossers for a lower-waste habit.",
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
          <h2>Why switch to low-waste oral care?</h2>
          <p>
            Billions of plastic toothbrushes and tubes end up in landfill each year.
            With a few thoughtful swaps, you can keep your smile healthy while
            drastically cutting plastic and packaging waste.
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
          <h2>2-minute routine</h2>
          <ol>
            <li>Bite a tablet and chew briefly until it foams.</li>
            <li>Brush with the bamboo brush for 2 minutes; spit and rinse.</li>
            <li>Gently scrape the tongue back-to-front 2–3 times, rinse.</li>
            <li>Floss between each tooth with a gentle sawing motion.</li>
          </ol>
        </section>

        <section className="note">
          <p>
            <strong>Disclaimer:</strong> This content is for information only and
            not medical advice. Ask your dentist if you have sensitivity, gum issues,
            or questions about fluoride use.
          </p>
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
        .related {
          margin-top: 26px;
          padding-top: 12px;
          border-top: 1px solid #e5e7eb;
        }
        .related ul {
          margin: 6px 0 0 18px;
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
