// pages/index.js
import React from "react";
import Head from "next/head";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import GuideFilters from "../components/GuideFilters";

export async function getStaticProps() {
  const guidesDir = path.join(process.cwd(), "content", "guides");
  const files = fs.readdirSync(guidesDir).filter((f) => f.endsWith(".md"));

  const all = files.map((filename) => {
    const raw = fs.readFileSync(path.join(guidesDir, filename), "utf8");
    const { data } = matter(raw);
    const slug = filename.replace(/\.md$/, "");
    const dateStr = (data.date || "").toString();
    const ts = dateStr ? new Date(dateStr).getTime() : 0;

    return {
      slug,
      title: data.title || slug,
      excerpt:
        data.excerpt ||
        data.description ||
        "Quick, practical take from Wild & Well.",
      cover: data.cover || "/cover.png",
      category: data.category || "Other",
      date: dateStr,
      ts,
      readingTime: data.readingTime || "",
    };
  });

  const featured = all.filter((g) => g.featured).length
    ? all.filter((g) => g.featured).sort((a, b) => b.ts - a.ts)
    : all.sort((a, b) => b.ts - a.ts).slice(0, 8);

  const categories = Array.from(new Set(all.map((g) => g.category))).sort();

  return { props: { allGuides: all, featured, categories } };
}

export default function Home({ allGuides, featured, categories }) {
  const [active, setActive] = React.useState("All");
  const [query, setQuery] = React.useState("");

  const filtered = allGuides
    .filter((g) => (active === "All" ? true : g.category === active))
    .filter((g) => {
      if (!query) return true;
      const q = query.toLowerCase();
      return (
        g.title.toLowerCase().includes(q) ||
        g.excerpt.toLowerCase().includes(q) ||
        g.category.toLowerCase().includes(q)
      );
    })
    .sort((a, b) => b.ts - a.ts)
    .slice(0, 8);

  const showSearchResults = query.length > 0 || active !== "All";
  const cards = showSearchResults ? filtered : featured;

  const title = "Wild & Well — Bite-size wellness & eco-living guides";
  const desc =
    "Bite-size, practical reads for eco-friendly living and holistic wellness.";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta property="og:title" content="Wild & Well" />
        <meta property="og:description" content={desc} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/cover.png" />
        <meta property="og:url" content="https://www.wild-and-well.store" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.wild-and-well.store/" />
      </Head>

      <main className="wrap">
        <header className="hero">
          <p className="eyebrow">
            Bite-size, practical reads for eco-friendly living and holistic wellness.
          </p>
          <h1 className="h1">
            Your guide to eco-living, holistic health, and mindful wellness.
          </h1>
        </header>

        <GuideFilters
          categories={categories}
          active={active}
          setActive={setActive}
          query={query}
          setQuery={setQuery}
        />

        <section className="grid">
          {cards.map((g) => (
            <Link href={`/guides/${g.slug}`} key={g.slug} className="card">
              <article>
                <div className="thumb">
                  <img src={g.cover} alt={g.title} />
                </div>
                <div className="meta">
                  <span className="pill">{g.category}</span>
                  {g.readingTime && <span className="rt">{g.readingTime}</span>}
                </div>
                <h2 className="title">{g.title}</h2>
                <p className="excerpt">{g.excerpt}</p>
                <span className="cta">Read guide →</span>
              </article>
            </Link>
          ))}
        </section>

        {!showSearchResults && (
          <p className="center">
            <Link href="/guides" className="browse">Browse all guides →</Link>
          </p>
        )}

        <p className="fine">
          As an Amazon Associate, we earn from qualifying purchases.
        </p>
      </main>

      <style jsx>{`
        .wrap { max-width: 1100px; margin: 28px auto 64px; padding: 0 16px; }
        .hero { text-align: center; margin: 10px auto 18px; max-width: 880px; }
        .eyebrow { margin: 0 0 8px; color: #374151; font-weight: 600; font-size: 1.05rem; line-height: 1.45; }
        .h1 { margin: 0; font-size: 2rem; line-height: 1.25; letter-spacing: -0.01em; color: #111827; }
        @media (min-width: 860px) { .h1 { font-size: 2.2rem; } .eyebrow { font-size: 1.1rem; } }

        .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 18px; margin-top: 12px; }
        .card { text-decoration: none; color: inherit; }
        .card article {
          border: 1px solid #e5e7eb; border-radius: 16px; background: #fff;
          overflow: hidden; height: 100%; display: flex; flex-direction: column;
          transition: box-shadow .2s ease, transform .2s ease, border-color .2s ease;
        }
        .card article:hover { border-color: #d1d5db; box-shadow: 0 10px 24px rgba(17,24,39,.07); transform: translateY(-1px); }
        .thumb { width: 100%; aspect-ratio: 16/9; background: #f3f4f6; overflow: hidden; }
        .thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .meta { padding: 12px 16px 0; display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }
        .pill { background: #ecfdf5; color: #0f766e; border: 1px solid #99f6e4; padding: 2px 10px; border-radius: 999px; font-size: .85rem; }
        .rt { color: #6b7280; font-size: .9rem; }
        .title { font-size: 1.15rem; line-height: 1.35; padding: 6px 16px 0; margin: 0; color: #111827; }
        .excerpt { padding: 8px 16px 0; margin: 0; color: #4b5563; flex: 1; }
        .cta { display: block; padding: 12px 16px 16px; color: #0f766e; font-weight: 700; }
        .center { text-align: center; margin-top: 14px; }
        .browse { color: #0f766e; font-weight: 700; }
        .fine { color: #6b7280; font-size: .9rem; text-align: center; margin-top: 20px; }
      `}</style>
    </>
  );
}
