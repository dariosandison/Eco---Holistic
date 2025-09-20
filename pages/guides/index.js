// pages/guides/index.js
import Head from "next/head";

const SITE = "https://www.wild-and-well.store";

const GUIDES = [
  {
    slug: "low-waste-shower-kit",
    title: "Build a Low-Waste Shower Kit",
    description:
      "Simple bathroom swaps—bars, refills and durable tools—to cut plastic without sacrificing comfort.",
    hero: "/cover.jpg",
  },
  {
    slug: "water-filters",
    title: "Water Filters: Clearer, Better-Tasting Water",
    description:
      "From jugs to under-sink systems—what to consider for cleaner drinking water at home.",
    hero: "/cover.jpg",
  },
  {
    slug: "safer-cleaning",
    title: "Safer Cleaning: Less-Harsh Products That Work",
    description:
      "Low-tox swaps and simple ingredients for kitchens, bathrooms and everyday surfaces.",
    hero: "/cover.jpg",
  },
  {
    slug: "minimal-ingredient-cereals",
    title: "Minimal-Ingredient Cereals & Better Breakfast Basics",
    description:
      "Short-label cereals and whole-food add-ins to keep mornings simple.",
    hero: "/cover.jpg",
  },
];

export default function GuidesIndex() {
  const canonical = `${SITE}/guides`;

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Wild & Well Guides",
    itemListElement: GUIDES.map((g, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE}/guides/${g.slug}`,
      item: {
        "@type": "Article",
        headline: g.title,
        description: g.description,
        image: g.hero ? [g.hero] : undefined,
      },
    })),
  };

  return (
    <>
      <Head>
        <title>Guides • Wild & Well</title>
        <meta
          name="description"
          content="Step-by-step guides for eco-friendly living and holistic wellness."
        />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content="Guides • Wild & Well" />
        <meta
          property="og:description"
          content="Step-by-step guides for eco-friendly living and holistic wellness."
        />
        <meta property="og:url" content={canonical} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
        />
      </Head>

      <main className="wrap">
        <header className="header">
          <h1>Guides</h1>
          <p className="sub">Practical, no-fluff steps for greener, calmer living.</p>
        </header>

        <section className="grid">
          {GUIDES.map((g) => (
            <a key={g.slug} className="card" href={`/guides/${g.slug}`}>
              <div className="media">
                <img src={g.hero} alt="" loading="lazy" />
              </div>
              <div className="info">
                <h2>{g.title}</h2>
                <p>{g.description}</p>
                <span className="cta">Read guide →</span>
              </div>
            </a>
          ))}
        </section>
      </main>

      <style jsx>{`
        .wrap { max-width: 1100px; margin: 2.5rem auto; padding: 0 16px; }
        .header { margin-bottom: 18px; }
        h1 { font-size: 2rem; margin: 0 0 6px; }
        .sub { color: #4b5563; margin: 0; }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 16px;
        }
        .card {
          display: block;
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          background: #fff;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .card:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,.06); }
        .media { aspect-ratio: 16/9; background: #f8fafc; }
        img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .info { padding: 12px; }
        h2 { font-size: 1.1rem; margin: 0 0 6px; line-height: 1.3; }
        p { margin: 0 0 8px; color: #4b5563; }
        .cta { color: #065f46; font-weight: 600; }
      `}</style>
    </>
  );
}
