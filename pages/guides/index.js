// pages/guides/index.js
import React from "react";
import Head from "next/head";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import GuideFilters from "../../components/GuideFilters";

export async function getStaticProps() {
  const guidesDir = path.join(process.cwd(), "content", "guides");
  const files = fs.readdirSync(guidesDir).filter((f) => f.endsWith(".md"));

  const guides = files.map((filename) => {
    const raw = fs.readFileSync(path.join(guidesDir, filename), "utf8");
    const { data } = matter(raw);
    const slug = filename.replace(/\.md$/, "");
    const dateStr = (data.date || "").toString();
    return {
      slug,
      title: data.title || slug,
      excerpt:
        data.excerpt ||
        data.description ||
        "Quick, practical take from Wild & Well.",
      cover: data.cover || "/cover.png",
      category: data.category || "Other",
      readingTime: data.readingTime || "",
      date: dateStr,
      ts: dateStr ? new Date(dateStr).getTime() : 0,
    };
  });

  const categories = Array.from(new Set(guides.map((g) => g.category))).sort();

  return { props: { guides, categories } };
}

export default function GuidesIndex({ guides, categories }) {
  const [active, setActive] = React.useState("All");
  const [query, setQuery] = React.useState("");

  const filtered = guides
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
    .sort((a, b) => b.ts - a.ts);

  return (
    <>
      <Head>
        <title>All Guides • Wild & Well</title>
        <meta
          name="description"
          content="Explore all Wild & Well bite-size guides for eco-living and holistic health."
        />
        <link rel="canonical" href="https://www.wild-and-well.store/guides" />
      </Head>

      <main className="wrap">
        <header className="hero">
          <h1 className="h1">Explore all guides</h1>
          <p className="sub">Filter by topic or search for what you need.</p>
        </header>

        <GuideFilters
          categories={categories}
          active={active}
          setActive={setActive}
          query={query}
          setQuery={setQuery}
        />

        <section className="grid">
          {filtered.map((g) => (
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

        <p className="fine">
          As an Amazon Associate, we earn from qualifying purchases.
        </p>
      </main>

      <style jsx>{`
        .wrap { max-width: 1100px; margin: 28px auto 64px; padding: 0 16px; }
        .hero { text-align: center; margin: 4px auto 12px; max-width: 820px; }
        .h1 { margin: 0 0 6px; font-size: 2rem; color: #111827; }
        .sub { color: #4b5563; margin: 0; }

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
        .fine { color: #6b7280; font-size: .9rem; text-align: center; margin-top: 20px; }
      `}</style>
    </>
  );
}
