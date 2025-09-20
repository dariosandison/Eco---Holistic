// pages/guides/[slug].js
import Head from "next/head";

const affiliateTag = "wildandwell0c-21";
const withAmazonTag = (url) => {
  try {
    const u = new URL(url);
    if (/amazon\./i.test(u.hostname)) {
      if (!u.searchParams.has("tag")) u.searchParams.set("tag", affiliateTag);
      return u.toString();
    }
    return url;
  } catch {
    return url;
  }
};

/**
 * 👉 Seed “CMS” in code (no fs). Add/edit guides here.
 * Each guide becomes /guides/<slug>
 */
const GUIDES = [
  {
    slug: "low-waste-shower-kit",
    title: "Build a Low-Waste Shower Kit",
    description:
      "Simple bathroom swaps—bars, refills and durable tools—to cut plastic without sacrificing comfort.",
    hero: "/cover.jpg",
    sections: [
      {
        h: "Why it matters",
        p: "Bathroom plastics are a big source of household waste. Swapping to bars, concentrates and reusable tools reduces plastic and saves money.",
      },
      {
        h: "Core swaps",
        p: "Shampoo/conditioner bars, bar soap, refillable body wash, safety razor, bamboo toothbrush, washable cotton rounds.",
      },
    ],
    products: [
      {
        name: "Safety Razor (Metal, Reusable)",
        url: "https://www.amazon.co.uk/dp/B07D6K1W8G",
      },
      {
        name: "Shampoo Bar Set (SLS free)",
        url: "https://www.amazon.co.uk/dp/B08L3M2W7H",
      },
    ],
  },
  {
    slug: "water-filters",
    title: "Water Filters: Clearer, Better-Tasting Water",
    description:
      "From jugs to under-sink systems—what to consider for cleaner drinking water at home.",
    hero: "/cover.jpg",
    sections: [
      {
        h: "What to look for",
        p: "NSF/ANSI certifications, filter replacement cost, flow rate and local water reports.",
      },
      {
        h: "Types",
        p: "Pitcher filters, faucet-mount, under-sink (carbon/RO), whole-home.",
      },
    ],
    products: [
      {
        name: "Brita Style Jug (Classic, Easy)",
        url: "https://www.amazon.co.uk/dp/B01N16IJ0V",
      },
      {
        name: "Under-Sink Carbon System",
        url: "https://www.amazon.co.uk/dp/B08Z3QGQK2",
      },
    ],
  },
  {
    slug: "safer-cleaning",
    title: "Safer Cleaning: Less-Harsh Products That Work",
    description:
      "Low-tox swaps and simple ingredients for kitchens, bathrooms and everyday surfaces.",
    hero: "/cover.jpg",
    sections: [
      {
        h: "Quick wins",
        p: "Use concentrates and reusable bottles; avoid unnecessary fragrances; ventilate while cleaning.",
      },
      {
        h: "Staples",
        p: "Castile soap, vinegar, baking soda, microfiber cloths, plant-based dish soap.",
      },
    ],
    products: [
      {
        name: "Castile Soap Concentrate",
        url: "https://www.amazon.co.uk/dp/B00016QEI8",
      },
      {
        name: "Amber Glass Spray Bottles (2-pack)",
        url: "https://www.amazon.co.uk/dp/B07F2QX3T3",
      },
    ],
  },
  {
    slug: "minimal-ingredient-cereals",
    title: "Minimal-Ingredient Cereals & Better Breakfast Basics",
    description:
      "Short-label cereals and whole-food add-ins to keep mornings simple.",
    hero: "/cover.jpg",
    sections: [
      {
        h: "Labels to love",
        p: "Fewer ingredients, whole grains first, low added sugar. Pair with fruit and nuts for balance.",
      },
    ],
    products: [
      {
        name: "Rude Health Honey Puffed Oats",
        url: "https://www.amazon.co.uk/dp/B00KQP62YI",
      },
      {
        name: "Organic Chia Seeds",
        url: "https://www.amazon.co.uk/dp/B00V6H0S1U",
      },
    ],
  },
];

export default function GuidePage({ guide }) {
  const canonical = `https://www.wild-and-well.store/guides/${guide.slug}`;
  const date = new Date().toISOString();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    image: guide.hero ? [guide.hero] : undefined,
    mainEntityOfPage: canonical,
    author: { "@type": "Organization", name: "Wild & Well" },
    publisher: {
      "@type": "Organization",
      name: "Wild & Well",
      logo: { "@type": "ImageObject", url: "https://www.wild-and-well.store/favicon.ico" },
    },
    datePublished: date,
    dateModified: date,
  };

  return (
    <>
      <Head>
        <title>{guide.title} • Wild & Well</title>
        <meta name="description" content={guide.description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={`${guide.title} • Wild & Well`} />
        <meta property="og:description" content={guide.description} />
        <meta property="og:url" content={canonical} />
        {guide.hero && <meta property="og:image" content={guide.hero} />}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
      </Head>

      <main className="container page">
        <article className="article">
          {guide.hero && (
            <div className="hero">
              <img src={guide.hero} alt="" />
            </div>
          )}
          <h1>{guide.title}</h1>
          <p className="excerpt">{guide.description}</p>

          {guide.sections.map((s) => (
            <section key={s.h} className="block">
              <h2>{s.h}</h2>
              <p>{s.p}</p>
            </section>
          ))}

          {guide.products?.length > 0 && (
            <section className="block picks">
              <h2>Recommended Picks</h2>
              <ul>
                {guide.products.map((p) => (
                  <li key={p.name}>
                    <a
                      href={withAmazonTag(p.url)}
                      target="_blank"
                      rel="sponsored nofollow noopener"
                    >
                      {p.name} →
                    </a>
                  </li>
                ))}
              </ul>
              <p className="fine">
                As an Amazon Associate, we earn from qualifying purchases. Thanks for your support!
              </p>
            </section>
          )}

          <nav className="next">
            <a href="/recommended">Browse all recommended products →</a>
          </nav>
        </article>
      </main>

      <style jsx>{`
        .page { margin: 2.5rem auto; }
        .article { max-width: 760px; margin: 0 auto; }
        .hero img {
          width: 100%; height: auto; border-radius: 14px; border: 1px solid #eef0f2; margin-bottom: 14px;
          background: #f8fafc;
        }
        h1 { margin: 8px 0 6px; }
        .excerpt { color: #4b5563; margin: 0 0 16px; }
        .block { margin: 16px 0; }
        .picks ul { margin: 8px 0 0 18px; }
        .picks li { margin: 6px 0; }
        .picks a { color: #065f46; font-weight: 600; text-decoration: none; }
        .picks a:hover { text-decoration: underline; }
        .fine { color: #6b7280; font-size: .9rem; margin-top: 10px; }
        .next { margin-top: 22px; }
        .next a { color: #065f46; font-weight: 600; text-decoration: none; }
        .next a:hover { text-decoration: underline; }
      `}</style>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: GUIDES.map((g) => ({ params: { slug: g.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const guide = GUIDES.find((g) => g.slug === params.slug);
  if (!guide) return { notFound: true };
  return { props: { guide } };
}
