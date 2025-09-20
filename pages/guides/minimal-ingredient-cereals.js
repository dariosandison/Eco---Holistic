// pages/guides/minimal-ingredient-cereals.js
import Head from "next/head";

const SITE = "https://www.wild-and-well.store";
const TAG = "wildandwell0c-21";

export default function MinimalCereals() {
  const canonical = `${SITE}/guides/minimal-ingredient-cereals`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Minimal-Ingredient Cereals & Better Breakfast Basics",
    description:
      "Short-label cereals and whole-food add-ins to keep mornings simple.",
    image: [`${SITE}/cover.jpg`],
    mainEntityOfPage: canonical,
    author: { "@type": "Organization", name: "Wild & Well" },
  };

  return (
    <>
      <Head>
        <title>Minimal-Ingredient Cereals • Wild & Well</title>
        <meta
          name="description"
          content="Short-label cereals and whole-food add-ins to keep mornings simple."
        />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content="Minimal-Ingredient Cereals & Better Breakfast Basics" />
        <meta
          property="og:description"
          content="Short-label cereals and whole-food add-ins to keep mornings simple."
        />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="/cover.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
      </Head>

      <main className="wrap">
        <header className="hero">
          <h1>Minimal-Ingredient Cereals & Better Breakfast Basics</h1>
          <p className="lead">
            Scan labels for short ingredient lists, then boost with nuts, seeds and fruit
            for fibre and steady energy.
          </p>
          <p className="disclosure">
            <strong>Disclosure:</strong> Affiliate links may appear below.
          </p>
        </header>

        <section className="grid">
          <div className="card">
            <h2>Simple Puffed Grains</h2>
            <p>Ingredients should be just the grain (and maybe a touch of honey or salt).</p>
            <a
              className="btn"
              href={`https://www.amazon.co.uk/s?k=puffed+rice+cereal&tag=${TAG}`}
              target="_blank"
              rel="nofollow sponsored noreferrer"
            >
              Puffed rice options →
            </a>
            <a
              className="btn ghost"
              href={`https://www.amazon.co.uk/s?k=honey+puffed+cereal&tag=${TAG}`}
              target="_blank"
              rel="nofollow sponsored noreferrer"
            >
              Honey puffs →
            </a>
          </div>

          <div className="card">
            <h2>Whole Oats (Porridge / Overnight)</h2>
            <p>Zero-fuss base with endless toppings; great warm or cold.</p>
            <a
              className="btn"
              href={`https://www.amazon.co.uk/s?k=rolled+oats+organic&tag=${TAG}`}
              target="_blank"
              rel="nofollow sponsored noreferrer"
            >
              Rolled oats →
            </a>
          </div>

          <div className="card">
            <h2>Add-Ins: Nuts & Seeds</h2>
            <p>Almonds, walnuts, chia, flax and pumpkin seeds add healthy fats and fibre.</p>
            <a
              className="btn"
              href={`https://www.amazon.co.uk/s?k=chia+seeds+organic&tag=${TAG}`}
              target="_blank"
              rel="nofollow sponsored noreferrer"
            >
              Chia seeds →
            </a>
            <a
              className="btn ghost"
              href={`https://www.amazon.co.uk/s?k=pumpkin+seeds+bulk&tag=${TAG}`}
              target="_blank"
              rel="nofollow sponsored noreferrer"
            >
              Pumpkin seeds →
            </a>
          </div>

          <div className="card">
            <h2>Natural Sweeteners (Optional)</h2>
            <p>Choose minimal-process options and use sparingly.</p>
            <a
              className="btn"
              href={`https://www.amazon.co.uk/s?k=raw+honey+uk&tag=${TAG}`}
              target="_blank"
              rel="nofollow sponsored noreferrer"
            >
              Raw honey →
            </a>
            <a
              className="btn ghost"
              href={`https://www.amazon.co.uk/s?k=100%25+maple+syrup&tag=${TAG}`}
              target="_blank"
              rel="nofollow sponsored noreferrer"
            >
              100% maple syrup →
            </a>
          </div>
        </section>

        <aside className="tips">
          <h3>Quick Wins</h3>
          <ul>
            <li>Pick cereals with ≤ 5 ingredients and low added sugar.</li>
            <li>Batch-prep oat jars with chia + frozen berries for grab-and-go.</li>
            <li>Protein boost: add yogurt, milk, or a spoon of nut butter.</li>
          </ul>
        </aside>
      </main>

      <style jsx>{`
        .wrap { max-width: 1000px; margin: 28px auto; padding: 0 16px; }
        .hero h1 { margin: 0 0 6px; font-size: 2rem; }
        .lead { color: #4b5563; margin: 0 0 8px; }
        .disclosure { color: #6b7280; font-size: .9rem; }
        .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 14px; margin-top: 16px; }
        .card { border: 1px solid #e5e7eb; border-radius: 12px; padding: 14px; background: #fff; }
        .btn { display: inline-block; margin-right: 8px; margin-top: 10px; padding: 10px 12px; border-radius: 10px; background: #065f46; color: #fff; text-decoration: none; border: 1px solid #065f46; }
        .btn.ghost { background: #fff; color: #065f46; }
        .btn:hover { filter: brightness(.98); }
        .tips { margin: 16px 0 8px; border-top: 1px solid #e5e7eb; padding-top: 12px; }
        ul { margin: 8px 0 0 20px; color: #374151; }
      `}</style>
    </>
  );
}
