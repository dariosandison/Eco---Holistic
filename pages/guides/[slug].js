// pages/guides/[slug].js
import Head from "next/head";
import Link from "next/link";

const DOMAIN = "https://www.wild-and-well.store";

const GUIDES = {
  "low-waste-shower-kit": {
    title: "Low-Waste Shower Kit",
    description:
      "Build a simple, planet-friendly shower routine using bar soap, refillable bottles, and durable accessories.",
    sections: [
      {
        h: "Why it matters",
        p: [
          "Bathrooms generate a lot of plastic—from shampoo bottles to disposable razors. Small swaps compound over a year.",
        ],
      },
      {
        h: "Core swaps",
        list: [
          "Solid shampoo & conditioner bars in tins",
          "Bar soap (fragrance-light, palm-aware sourcing)",
          "Refillable stainless/aluminium body-wash bottle (if you prefer liquid)",
          "Long-lasting safety razor with replaceable blades",
          "Natural fiber washcloth / loofah",
        ],
      },
      {
        h: "Tips",
        p: [
          "Finish what you have first. Then swap one item at a time.",
          "Store bars on a draining tray so they last longer.",
        ],
      },
    ],
  },
  "water-filters": {
    title: "Choosing a Home Water Filter",
    description:
      "Understand the main filter types and pick the simplest option that meets your water quality needs.",
    sections: [
      {
        h: "Filter types (quick)",
        list: [
          "Activated carbon (pitcher/inline): great for taste/odour, chlorine.",
          "Carbon block + lead reduction: taste + selected metals.",
          "RO (reverse osmosis): broad removal; needs under-sink install and waste line.",
          "Whole-house sediment: protects appliances; not a final drinking filter.",
        ],
      },
      {
        h: "How to choose",
        p: [
          "If your tap tastes/smells fine: a good carbon block pitcher is often enough.",
          "If you have specific contaminants (e.g., lead): look for certified reductions (NSF/ANSI).",
        ],
      },
      {
        h: "Upkeep",
        list: [
          "Change cartridges on schedule—performance drops when overdue.",
          "Flush new filters as instructed for best taste.",
        ],
      },
    ],
  },
  "safer-cleaning": {
    title: "Less-Harmful Cleaning Products",
    description:
      "Simplify your cleaning kit with effective, lower-irritant options and clearer labels.",
    sections: [
      {
        h: "The minimal kit",
        list: [
          "Unscented dish soap (dilute for surfaces)",
          "All-purpose concentrate (plant-based, dye-free)",
          "White vinegar + water for glass/mineral spots",
          "Baking soda for gentle scrubbing",
          "Microfiber or cotton cloths (wash & reuse)",
        ],
      },
      {
        h: "Label tips",
        p: [
          "Prefer short ingredient lists, low/no dye, and lighter fragrance.",
          "Spot-test on delicate surfaces.",
        ],
      },
    ],
  },
  "minimal-ingredient-cereals": {
    title: "Minimal-Ingredient Breakfast Cereals",
    description:
      "Scan labels for short ingredient lists and simpler sweeteners when possible.",
    sections: [
      {
        h: "What to look for",
        list: [
          "Whole grains first on the list",
          "Short ingredients, you recognize them",
          "Lower sugar per serving",
        ],
      },
      {
        h: "Pairing ideas",
        p: [
          "Add nuts/seeds for protein and healthy fats.",
          "Top with fresh fruit; consider unsweetened milk alternatives.",
        ],
      },
    ],
  },
};

export async function getStaticPaths() {
  const paths = Object.keys(GUIDES).map((slug) => ({ params: { slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const guide = GUIDES[params.slug];
  return { props: { slug: params.slug, guide } };
}

export default function GuidePage({ slug, guide }) {
  if (!guide) return null;
  const url = `${DOMAIN}/guides/${slug}`;

  return (
    <>
      <Head>
        <title>{guide.title} • Wild & Well</title>
        <meta name="description" content={guide.description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={`${guide.title} • Wild & Well`} />
        <meta property="og:description" content={guide.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content="/cover.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className="wrap">
        <nav className="crumbs">
          <Link href="/">Home</Link> <span>›</span>{" "}
          <Link href="/#guides">Guides</Link> <span>›</span>{" "}
          <span aria-current="page">{guide.title}</span>
        </nav>

        <h1>{guide.title}</h1>
        <p className="desc">{guide.description}</p>

        {guide.sections.map((s) => (
          <section key={s.h} className="section">
            <h2>{s.h}</h2>
            {s.p && s.p.map((para, i) => <p key={i}>{para}</p>)}
            {s.list && (
              <ul>
                {s.list.map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <div className="back">
          <Link href="/">← Back to home</Link>
        </div>
      </main>

      <style jsx>{`
        .wrap { max-width: 840px; margin: 2rem auto; padding: 0 16px; }
        .crumbs { font-size: 0.9rem; color: #6b7280; margin-bottom: .5rem; display:flex; gap:.5rem; align-items:center; flex-wrap:wrap; }
        h1 { font-size: 2rem; margin: .25rem 0 .5rem; }
        .desc { color: #475569; margin-bottom: 1rem; }
        .section { margin: 1.25rem 0; }
        h2 { font-size: 1.1rem; margin: .75rem 0 .25rem; }
        ul { margin: .25rem 0 .75rem 1.25rem; }
        li { margin: .25rem 0; }
        .back { margin-top: 1.75rem; }
        a { color: #0f766e; text-decoration: none; }
        a:hover { text-decoration: underline; }
      `}</style>
    </>
  );
}
