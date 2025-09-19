import Head from "next/head";

export default function EcoHerbalTeaStarter() {
  const site = "Wild & Well";
  const url = "https://www.wild-and-well.store";
  const canonical = `${url}/posts/eco-herbal-tea-starter`;

  // 🔧 EDIT THESE once you have your Amazon Associates tag:
  const AMAZON_TAG = "your-tag-20"; // e.g., wildwell-20
  const products = [
    {
      name: "Organic Sleep Tea Blend (Chamomile + Lavender)",
      url: `https://www.amazon.co.uk/dp/B0EXAMPLE/?tag=${AMAZON_TAG}`,
      summary:
        "A calming, caffeine-free blend to help you unwind and improve sleep quality—great for a gentle nightly ritual.",
      bullets: [
        "Certified organic, no artificial flavors",
        "Subtle floral taste; naturally soothing",
        "Compostable tea bags & recyclable box",
      ],
      why:
        "Chamomile (apigenin) and lavender are time-tested botanicals for relaxation—ideal entry point to herbal wellness.",
    },
    {
      name: "Stainless Tea Infuser + Reusable Cotton Bags",
      url: `https://www.amazon.co.uk/dp/B0EXAMPLE2/?tag=${AMAZON_TAG}`,
      summary:
        "Zero-waste tea toolkit: a fine-mesh infuser for loose herbs and washable cotton bags for on-the-go cups.",
      bullets: [
        "Food-grade stainless steel",
        "Reusable cotton drawstring bags",
        "Cuts micro-plastics from disposable bags",
      ],
      why:
        "Lets you buy bulk, organic loose herbs (less packaging, lower cost per cup) while keeping your brew clean.",
    },
    {
      name: "Kettle with Temperature Control (60–100°C)",
      url: `https://www.amazon.co.uk/dp/B0EXAMPLE3/?tag=${AMAZON_TAG}`,
      summary:
        "Right temperature = better flavor. Lower temps preserve delicate aromatics in chamomile, lemon balm, and mint.",
      bullets: [
        "Dedicated herbal/green presets",
        "Auto shut-off; keep-warm",
        "Energy-efficient heating base",
      ],
      why:
        "Precision helps beginners taste the difference—key to sticking with a healthy evening routine.",
    },
  ];

  const postTitle =
    "Eco Herbal Tea Starter Kit: 3 Essentials for Calm, Better Sleep, and Less Waste";
  const postDescription =
    "Build a simple, sustainable tea ritual with organic botanicals, a zero-waste infuser, and the right kettle. Beginner-friendly, eco-minded picks.";

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: postTitle,
    description: postDescription,
    mainEntityOfPage: canonical,
    author: { "@type": "Organization", name: site },
    publisher: {
      "@type": "Organization",
      name: site,
      logo: { "@type": "ImageObject", url: `${url}/favicon.ico` },
    },
    datePublished: "2025-01-01",
    dateModified: "2025-01-01",
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: p.url,
      name: p.name,
    })),
  };

  return (
    <>
      <Head>
        <title>{postTitle} | {site}</title>
        <meta name="description" content={postDescription} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={`${postTitle} | ${site}`} />
        <meta property="og:description" content={postDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="/cover.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      </Head>

      <main className="wrap">
        <article className="post">
          <header className="hero">
            <h1>{postTitle}</h1>
            <p className="dek">{postDescription}</p>

            <aside className="disclosure">
              <strong>Affiliate disclosure:</strong> Links below may be affiliate links. As an Amazon Associate, we
              earn from qualifying purchases—at no extra cost to you.
            </aside>
          </header>

          <section className="intro">
            <p>
              Building a soothing tea ritual can be simple, affordable, and eco-friendly. Start with one organic herbal
              blend, a reusable brewing kit, and a kettle that respects delicate botanicals. Below are our three
              beginner picks plus tips to get the most from each.
            </p>
          </section>

          <section className="grid">
            {products.map((p) => (
              <div className="card" key={p.name}>
                <h2 className="pname">{p.name}</h2>
                <p className="psummary">{p.summary}</p>

                <ul className="bullets">
                  {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>

                <div className="why">
                  <span className="tag">Why it helps</span>
                  <p>{p.why}</p>
                </div>

                <a
                  className="cta"
                  href={p.url}
                  target="_blank"
                  rel="nofollow sponsored noopener"
                >
                  View on Amazon
                </a>

                <p className="smallprint">
                  Tip: if you’re outside the UK, your local Amazon may stock the same model—search by product name.
                </p>
              </div>
            ))}
          </section>

          <section className="howto">
            <h2>How to Brew for Best Results</h2>
            <ol>
              <li>Heat water to 85–90 °C for most calming herbs (avoid boiling for delicate flowers).</li>
              <li>Steep 4–6 minutes; cover your cup to keep aromatics in.</li>
              <li>Add a squeeze of lemon or a drizzle of raw honey if desired.</li>
              <li>Make it a habit: same time each evening to cue your nervous system to wind down.</li>
            </ol>
          </section>

          <section className="faq">
            <h2>FAQs</h2>
            <details>
              <summary>Can I use loose herbs instead of tea bags?</summary>
              <p>Yes—loose herbs are often fresher and reduce packaging. The infuser + cotton bags make it easy.</p>
            </details>
            <details>
              <summary>What if I’m sensitive to chamomile?</summary>
              <p>Try lemon balm or peppermint. Always check with a professional if you have allergies or take medication.</p>
            </details>
          </section>

          <section className="disclaimer">
            <p>
              <strong>Wellness disclaimer:</strong> This content is educational and not medical advice. Consult a
              qualified professional for personal guidance.
            </p>
          </section>
        </article>
      </main>

      <style jsx>{`
        .wrap { max-width: 980px; margin: 32px auto; padding: 0 16px 72px; }
        .hero h1 { font-size: 2rem; line-height: 1.2; margin: 0 0 8px; }
        .dek { color: #4b5563; margin: 0 0 14px; }
        .disclosure {
          background: #f3f4f6; border: 1px solid #e5e7eb; padding: 10px 12px;
          border-radius: 8px; font-size: .95rem; color: #374151; margin: 10px 0 24px;
        }
        .grid {
          display: grid; gap: 18px;
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        @media (max-width: 980px) { .grid { grid-template-columns: 1fr; } }
        .card {
          border: 1px solid #e5e7eb; border-radius: 12px; padding: 16px; background: #fff;
        }
        .pname { font-size: 1.05rem; margin: 0 0 6px; }
        .psummary { color: #4b5563; margin: 0 0 8px; }
        .bullets { padding-left: 18px; margin: 8px 0 10px; }
        .why { background: #f9fafb; border: 1px dashed #e5e7eb; padding: 10px; border-radius: 8px; }
        .tag {
          display: inline-block; font-size: .75rem; background: #ecfdf5; color: #065f46;
          border: 1px solid #a7f3d0; border-radius: 999px; padding: 2px 8px; margin-bottom: 4px;
        }
        .cta {
          display: inline-block; margin-top: 10px; padding: 10px 14px; border-radius: 10px;
          background: #14532d; color: #fff; text-decoration: none; font-weight: 600;
        }
        .cta:hover { opacity: .95; }
        .smallprint { color: #6b7280; font-size: .9rem; margin-top: 8px; }
        .howto, .faq { margin-top: 28px; }
        .howto h2, .faq h2 { font-size: 1.25rem; margin-bottom: 8px; }
        details { background: #fafafa; border: 1px solid #e5e7eb; border-radius: 8px; padding: 10px 12px; margin: 8px 0; }
        .disclaimer { color: #6b7280; font-size: .95rem; margin-top: 24px; }
      `}</style>
    </>
  );
}
