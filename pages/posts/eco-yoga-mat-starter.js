import Head from "next/head";

// ===== EDIT THESE 6 CONSTANTS LATER IF NEEDED =====
const postTitle = "Eco Yoga Mat Starter: Non-Toxic Mat, Cork Block & Strap";
const postDescription =
  "Build a planet-friendly yoga setup: natural rubber + cork mat, cork block, organic cotton strap, and a stainless bottle.";
const canonical =
  "https://www.wild-and-well.store/posts/eco-yoga-mat-starter";
const datePublished = "2025-03-01";
const dateModified = "2025-03-01";
const heroImage = "/cover.jpg"; // swap if you add a specific hero
const products = [
  {
    name: "Natural Rubber + Cork Yoga Mat (72\" x 24\")",
    bullets: [
      "No PVC, EVA, or phthalates",
      "Grippy dry/wet performance",
      "Cork resists odor & bacteria"
    ],
    why: "Durable, low-odor surface with great traction for flows and hot yoga.",
    url: "https://www.amazon.co.uk/dp/ASIN5/?tag=your-tag-20"
  },
  {
    name: "Cork Yoga Block (Set of 2)",
    bullets: [
      "Sustainably harvested cork",
      "Firm support, rounded edges",
      "Non-slip texture"
    ],
    why: "Stable alignment aid for balance poses and gentle support.",
    url: "https://www.amazon.co.uk/dp/ASIN6/?tag=your-tag-20"
  },
  {
    name: "Organic Cotton Yoga Strap (8 ft)",
    bullets: [
      "Metal D-rings",
      "Soft, sturdy weave",
      "Plastic-free packaging"
    ],
    why: "Improves flexibility and safe stretching across all levels.",
    url: "https://www.amazon.co.uk/dp/ASIN7/?tag=your-tag-20"
  },
  {
    name: "Insulated Stainless Steel Bottle (500 ml)",
    bullets: [
      "BPA-free, keeps drinks cold/hot",
      "Powder-coat finish",
      "Fits standard mat bags"
    ],
    why: "Hydration without plastic; perfect for studio or trail.",
    url: "https://www.amazon.co.uk/dp/ASIN8/?tag=your-tag-20"
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
            at no extra cost to you. Thanks for supporting {site}! 🌿
          </p>
        </header>

        <section>
          <h2>Why eco gear matters</h2>
          <p>
            Traditional PVC mats can shed microplastics and contain additives you
            don’t want on your skin. Cork and natural rubber give you grip,
            comfort, and lower impact—without harsh odors or flimsy foam.
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
          <h2>Quick care tips</h2>
          <ul>
            <li>Air-dry your mat after practice; avoid prolonged sun exposure.</li>
            <li>Wipe with a 1:20 vinegar + water spritz; dry flat.</li>
            <li>Store unrolled or loosely rolled to prevent curl memory.</li>
          </ul>
        </section>

        <section className="note">
          <p>
            <strong>Note:</strong> If you have latex sensitivity, choose a cork
            mat with a TPE backing instead of natural rubber.
          </p>
        </section>

        <section className="related">
          <h3>Related Guides</h3>
          <ul>
            <li><a href="/posts/sustainable-dental-care">Sustainable Dental Care</a></li>
            <li><a href="/posts/low-waste-shower-kit">Low-Waste Shower Kit</a></li>
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
