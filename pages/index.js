// pages/index.js
import React from "react";
import Link from "next/link";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import SEO from "../components/SEO";

export async function getStaticProps() {
  const guidesDir = path.join(process.cwd(), "content", "guides");
  const files = fs.readdirSync(guidesDir).filter((f) => f.endsWith(".md"));

  const guides = files
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const file = fs.readFileSync(path.join(guidesDir, filename), "utf8");
      const { data } = matter(file);

      // Ensure serializable props and sensible fallbacks
      const title = data.title || slug.replace(/-/g, " ");
      const description =
        data.description || "Quick, helpful read from Wild & Well.";
      const dateStr =
        typeof data.date === "string"
          ? data.date
          : data.date instanceof Date
          ? data.date.toISOString().slice(0, 10)
          : new Date().toISOString().slice(0, 10);
      const tags = Array.isArray(data.tags) ? data.tags : [];

      return { slug, title, description, date: dateStr, tags };
    })
    // Sort by date (newest first); fall back to title
    .sort((a, b) => {
      const ad = Date.parse(a.date) || 0;
      const bd = Date.parse(b.date) || 0;
      if (ad !== bd) return bd - ad;
      return a.title.localeCompare(b.title);
    });

  return { props: { guides } };
}

export default function Home({ guides }) {
  return (
    <>
      <SEO title="Home" path="/" />

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <h1 className="brand">Wild & Well</h1>
          <p className="tagline">
            Your guide to eco-living, holistic health, and mindful wellness.
          </p>
        </div>
      </section>

      {/* GUIDES GRID */}
      <main className="wrap">
        <div className="grid">
          {guides.map((g) => (
            <article key={g.slug} className="card">
              <Link href={`/guides/${g.slug}`} className="cardLink">
                <h2 className="cardTitle">{g.title}</h2>
                <p className="cardDesc">{g.description}</p>
                <div className="meta">
                  <time dateTime={g.date}>{g.date}</time>
                  {g.tags.length > 0 && (
                    <ul className="tags">
                      {g.tags.slice(0, 3).map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </Link>
            </article>
          ))}
        </div>
      </main>

      <style jsx>{`
        .hero {
          padding: 56px 16px 36px;
          text-align: center;
          background: #f9fafb;
          border-bottom: 1px solid #eef0f3;
        }
        .brand {
          margin: 0 0 8px;
          font-size: 2.1rem;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }
        .tagline {
          margin: 0 auto;
          max-width: 720px;
          color: #4b5563;
          font-size: 1.05rem;
        }
        .wrap {
          max-width: 1100px;
          margin: 24px auto 40px;
          padding: 0 16px;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 18px;
        }
        .card {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          padding: 16px 16px 14px;
          transition: transform 160ms ease, box-shadow 160ms ease,
            border-color 160ms ease;
        }
        .card:hover {
          transform: translateY(-2px);
          border-color: #d1d5db;
          box-shadow: 0 6px 22px rgba(0, 0, 0, 0.06);
        }
        .cardLink {
          display: block;
          color: inherit;
          text-decoration: none;
        }
        .cardTitle {
          margin: 0 0 6px;
          font-size: 1.1rem;
          line-height: 1.25;
          color: #111827;
        }
        .cardDesc {
          margin: 0 0 12px;
          color: #4b5563;
          font-size: 0.98rem;
        }
        .meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #6b7280;
          font-size: 0.86rem;
        }
        .tags {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }
        .tags li {
          background: #f3f4f6;
          border: 1px solid #e5e7eb;
          border-radius: 999px;
          padding: 2px 8px;
          font-size: 0.78rem;
          color: #374151;
        }
        @media (max-width: 640px) {
          .brand {
            font-size: 1.8rem;
          }
          .tagline {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
}
