// pages/index.js
import React, { useState } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";

export default function Home({ guides, tags }) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("All");
  const [logoOk, setLogoOk] = useState(true); // logo fallback

  const filtered = guides.filter((g) => {
    const byTag = active === "All" || (g.tags || []).includes(active);
    const q = query.trim().toLowerCase();
    const byQuery =
      !q ||
      g.title.toLowerCase().includes(q) ||
      (g.description || "").toLowerCase().includes(q) ||
      (g.tags || []).some((t) => t.toLowerCase().includes(q));
    return byTag && byQuery;
  });

  return (
    <>
      <Head>
        <title>Wild & Well — Eco & Holistic Guides</title>
        <meta
          name="description"
          content="Your guide to eco-living, holistic health, and mindful wellness. Search bite-size"
        />
      </Head>

      {/* HERO (centered) */}
      <header className="hero">
        <div className="logoWrap">
          {logoOk ? (
            // IMPORTANT: make sure this path matches your actual file in /public
            // If your file is /public/logo.svg.jpg leave as-is; otherwise change src below.
            <img
              src="/logo.png"
              alt="Wild & Well"
              width="260"
              height="120"
              onError={() => setLogoOk(false)}
            />
          ) : (
            <div className="logoText">Wild & Well</div>
          )}
        </div>

        {/* SWAPPED ORDER: "Your guide…" is now the main headline */}
        <p className="taglineMain">
          Your guide to eco-living, holistic health, and mindful wellness.
        </p>
        <p className="taglineSub">
          .
        </p>
      </header>

      {/* CONTROLS */}
      <section className="controls">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Search guides (e.g., "water", "protein", "cleaning")'
          aria-label="Search guides"
        />
        <div className="tags">
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`tag ${active === t ? "active" : ""}`}
            >
              {t.toLowerCase()}
            </button>
          ))}
        </div>
      </section>

      {/* GRID */}
      <main className="grid">
        {filtered.map((g) => (
          <Link key={g.slug} href={`/guides/${g.slug}`} className="card">
            <article>
              <h3>{g.title}</h3>
              <p className="desc">{g.description}</p>
              {!!(g.tags || []).length && (
                <div className="cardTags">
                  {(g.tags || []).slice(0, 4).map((t) => (
                    <span key={t} className="pill">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </article>
          </Link>
        ))}
        {!filtered.length && (
          <p className="empty">No matches. Try a different search.</p>
        )}
      </main>

      <style jsx>{`
        .hero {
          max-width: 900px;
          margin: 28px auto 8px;
          padding: 0 16px;
          text-align: center;
        }
        .logoWrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin: 4px auto 4px;
        }
        .logoWrap img {
          display: block;
        }
        .logoText {
          font-size: 2rem;
          font-weight: 800;
          letter-spacing: 0.2px;
        }

        /* SWAPPED SIZES */
        .taglineMain {
          margin: 8px 0 2px;
          font-size: 1.25rem;
          color: #111827;
          font-weight: 700;
        }
        .taglineSub {
          margin: 2px 0 0;
          font-size: 1.02rem;
          color: #374151;
        }

        .controls {
          max-width: 960px;
          margin: 12px auto 20px;
          padding: 0 16px;
        }
        input {
          width: 100%;
          font-size: 1rem;
          padding: 12px 14px;
          border-radius: 10px;
          border: 1px solid #e5e7eb;
          outline: none;
        }
        input:focus {
          border-color: #93c5fd;
          box-shadow: 0 0 0 3px rgba(147, 197, 253, 0.35);
        }
        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin: 14px 0 0;
          justify-content: center;
        }
        .tag {
          padding: 8px 12px;
          border-radius: 999px;
          border: 1px solid #e5e7eb;
          background: #fff;
          color: #111827;
          cursor: pointer;
        }
        .tag.active {
          background: #e8f3ff;
          border-color: #bfdbfe;
          color: #1d4ed8;
          font-weight: 600;
        }

        .grid {
          max-width: 1100px;
          margin: 10px auto 40px;
          padding: 0 16px 8px;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 16px;
        }
        .card {
          display: block;
          text-decoration: none;
          color: inherit;
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          background: #fff;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(0, 0, 0, 0.06);
        }
        article {
          padding: 16px 16px 14px;
        }
        h3 {
          margin: 0 0 6px;
          font-size: 1.05rem;
        }
        .desc {
          margin: 0 0 10px;
          color: #4b5563;
          line-height: 1.45;
        }
        .cardTags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .pill {
          font-size: 0.8rem;
          padding: 4px 8px;
          border-radius: 999px;
          background: #f3f4f6;
          color: #374151;
        }
        .empty {
          grid-column: 1 / -1;
          color: #6b7280;
          text-align: center;
          padding: 24px 0;
        }
      `}</style>
    </>
  );
}

export async function getStaticProps() {
  const DIR = path.join(process.cwd(), "content", "guides");
  const files = fs.readdirSync(DIR).filter((f) => f.endsWith(".md"));

  const guides = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(DIR, file), "utf8");
    const { data, content } = matter(raw);

    const snippet =
      (data.description || data.excerpt || "")
        .toString()
        .trim() ||
      content.replace(/\s+/g, " ").slice(0, 180).trim() + "…";

    return {
      slug,
      title: data.title || slug,
      description: snippet,
      tags: Array.isArray(data.tags) ? data.tags : [],
    };
  });

  const tagSet = new Set();
  guides.forEach((g) => (g.tags || []).forEach((t) => tagSet.add(t)));
  const tags = ["All", ...Array.from(tagSet).sort((a, b) => a.localeCompare(b))];

  return { props: { guides, tags } };
}
