// pages/index.js
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Wild & Well • Eco + Holistic Living</title>
        <meta
          name="description"
          content="Healthy, low-tox living made simple — practical guides, clean product picks, and small habits that stick."
        />
      </Head>

      <main>
        <section className="hero">
          <div className="wrap">
            <h1>Healthy, low-tox living — made easy</h1>
            <p>Start with sleep, hydration, simple meals, and a few cleaner swaps. No overwhelm.</p>
            <div className="cta">
              <Link className="btn" href="/guides/wellness-starter">Start the 7-Day Kickstart</Link>
              <Link className="link" href="/guides">Browse Guides →</Link>
            </div>
          </div>
        </section>

        <section className="grid">
          <h2>Popular Guides</h2>
          <div className="cards">
            <Card href="/guides/wellness-starter" title="7-Day Wellness Kickstart" />
            <Card href="/guides/low-waste-shower-kit" title="Low-Waste Shower Kit" />
            <Card href="/guides/water-filters" title="Water Filters: Simple Options" />
            <Card href="/guides/safer-cleaning" title="Safer Cleaning at Home" />
            <Card href="/guides/minimal-ingredient-cereals" title="Minimal-Ingredient Cereals" />
            <Card href="/guides/vitamin-supplements-minimal-additives" title="Vitamins: Fewer Additives" />
            <Card href="/guides/protein-powders-natural-ingredients" title="Protein: Natural Ingredients" />
          </div>
        </section>
      </main>

      <style jsx>{`
        .hero { background: #f8fafc; border-bottom: 1px solid #eef0f2; }
        .wrap { max-width: 1100px; margin: 0 auto; padding: 42px 16px; }
        h1 { margin: 0 0 8px; font-size: 2rem; }
        p { color: #475569; margin: 0 0 16px; }
        .cta { display: flex; gap: 14px; align-items: center; flex-wrap: wrap; }
        .btn {
          background: #0f766e; color: #fff; padding: 10px 14px; border-radius: 8px; text-decoration: none;
        }
        .btn:hover { background: #115e59; }
        .link { color: #0f766e; text-decoration: none; }
        .link:hover { text-decoration: underline; }
        .grid { max-width: 1100px; margin: 28px auto 48px; padding: 0 16px; }
        .grid h2 { margin-bottom: 12px; }
        .cards {
          display: grid; gap: 14px;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        }
      `}</style>
    </>
  );
}

function Card({ href, title }) {
  return (
    <Link href={href} className="card">
      <div className="card_">
        <h3>{title}</h3>
        <span>Read →</span>
      </div>
      <style jsx>{`
        .card { text-decoration: none; color: inherit; }
        .card_ {
          border: 1px solid #e5e7eb; border-radius: 10px; padding: 16px;
          background: #fff; transition: transform .08s ease, box-shadow .08s ease;
        }
        .card_:hover { transform: translateY(-1px); box-shadow: 0 6px 18px rgba(2,12,27,.06); }
        h3 { margin: 0 0 6px; font-size: 1.05rem; }
        span { color: #0f766e; font-weight: 600; }
      `}</style>
    </Link>
  );
}
