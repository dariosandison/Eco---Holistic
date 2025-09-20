import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import SEO from "../components/SEO";

const GUIDES_DIR = path.join(process.cwd(), "content", "guides");

export default function Home({ guides }) {
  return (
    <>
      <SEO title="Wild & Well — Eco & holistic picks that just work" path="/" />

      <main className="wrap">
        <header className="hero">
          <img src="/logo.svg" alt="Wild & Well" className="logo" />
          <h1 className="tag1">
            Your guide to eco-living, holistic health, and mindful wellness.
          </h1>
          <p className="tag2">
            Bite-size, practical reads for eco-friendly living and holistic wellness.
          </p>

          <div className="chips">
            {["starter", "water", "cleaning", "supplements", "protein"].map((c) => (
              <a className="chip" key={c} href={`/guides/${c === "starter" ? "wellness-starter" : c}`}>
                {c}
              </a>
            ))}
          </div>
        </header>

        <section className="start">
          <h2>Start here</h2>
          <div className="grid">
            <a className="card" href="/guides/wellness-starter">Wellness Starter</a>
            <a className="card" href="/guides/water-filters">Water Filters</a>
            <a className="card" href="/guides/safer-cleaning">Safer Cleaning</a>
            <a className="card" href="/guides/vitamin-supplements-minimal-additives">Minimal-Additive Vitamins</a>
            <a className="card" href="/guides/protein-powders-natural-ingredients">Natural Protein</a>
          </div>
        </section>

        <section>
          <h2>Latest guides</h2>
          <ul className="list">
            {guides.map((g) => (
              <li key={g.slug}>
                <a href={`/guides/${g.slug}`}>{g.title}</a>
                {g.excerpt ? <p>{g.excerpt}</p> : null}
              </li>
            ))}
          </ul>
        </section>

        <section className="email">
          <h3>Get one small eco upgrade each week</h3>
          <form
            action="https://formsubmit.co/hello@wild-and-well.store"
            method="POST"
          >
            <input type="email" name="email" placeholder="you@example.com" required />
            <button type="submit">Subscribe</button>
          </form>
          <small>We’ll send practical, low-tox tips. Unsubscribe anytime.</small>
        </section>
      </main>

      <style jsx>{`
        .wrap { max-width: 980px; margin: 0 auto; padding: 0 16px 40px; }
        .hero { text-align: center; padding: 24px 0 12px; }
        .logo { height: 36px; margin: 12px auto 16px; display: block; }
        .tag1 { font-size: 1.35rem; margin: 8px 0 6px; }
        .tag2 { color: #4b5563; margin: 0 0 16px; }
        .chips { display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; }
        .chip {
          border: 1px solid #e5e7eb; border-radius: 999px; padding: 8px 12px;
          text-decoration: none; color: #111827; background:#fff;
        }
        .chip:hover { background:#f3f4f6; }
        .start .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 12px;
        }
        .card {
          display: block; border:1px solid #e5e7eb; border-radius:12px;
          padding: 14px; text-decoration:none; color:#111827; background:#fff;
        }
        .card:hover { background:#fafafa; }
        h2 { margin: 18px 0 10px; }
        .list { list-style: none; padding: 0; display: grid; gap: 12px; }
        .list li { border:1px solid #e5e7eb; border-radius:12px; padding:12px; background:#fff; }
        .list li p { margin:6px 0 0; color:#4b5563; }
        .email { text-align:center; border:1px dashed #cbd5e1; border-radius:12px; padding:16px; margin-top: 24px; }
        input { padding:10px; border:1px solid #d1d5db; border-radius:10px; width:260px; max-width: 70vw; }
        button { margin-left:8px; padding:10px 14px; border:none; border-radius:10px; background:#2563eb; color:#fff; }
        button:hover { background:#1d4ed8; }
      `}</style>
    </>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(GUIDES_DIR).filter((f) => f.endsWith(".md"));
  const guidesRaw = await Promise.all(
    files.map(async (f) => {
      const raw = fs.readFileSync(path.join(GUIDES_DIR, f), "utf8");
      const { data } = matter(raw);
      return {
        slug: f.replace(/\.md$/, ""),
        title: data.title || f,
        excerpt: data.excerpt || data.description || "",
        date: data.date || null,
      };
    })
  );

  // Sort newest first if dates exist
  const guides = guidesRaw
    .sort((a, b) => (b.date || "").localeCompare(a.date || ""))
    .slice(0, 9);

  return { props: { guides } };
}
