// pages/index.js
import React from "react";
import Head from "next/head";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function getStaticProps() {
  const guidesDir = path.join(process.cwd(), "content", "guides");
  const files = fs.readdirSync(guidesDir).filter((f) => f.endsWith(".md"));

  const guides = files
    .map((filename) => {
      const raw = fs.readFileSync(path.join(guidesDir, filename), "utf8");
      const { data } = matter(raw);
      const slug = filename.replace(/\.md$/, "");

      // Always keep date as a *string* for Next serialization.
      const dateStr = (data.date || "").toString();
      const ts = dateStr ? new Date(dateStr).getTime() : 0; // for sorting only
      const datePretty = dateStr
        ? new Date(dateStr).toLocaleDateString("en-GB", {
            year: "numeric",
            month: "short",
            day: "2-digit",
          })
        : "";

      return {
        slug,
        title: data.title || slug,
        excerpt:
          data.excerpt ||
          data.description ||
          "Quick, practical take from Wild & Well.",
        cover: data.cover || "/cover.png",
        date: dateStr,
        datePretty,
        _ts: ts,
      };
    })
    .sort((a, b) => b._ts - a._ts)
    .map(({ _ts, ...rest }) => rest); // strip helper before returning

  return { props: { guides } };
}

export default function Home({ guides }) {
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
      </Head>

      <main className="wrap">
        {/* Logo instead of a page title */}
        <div className="logoWrap">
          <img src="/logo.png" alt="Wild & Well" className="logo" />
        </div>

        {/* Swapped + centered hero lines */}
        <header className="hero">
          <p className="eyebrow">Bite-size, practical reads for eco-friendly living and holistic wellness.</p>
          <h1 className="h1">Your guide to eco-living, holistic health, and mindful wellness.</h1>
        </header>

        {/* Guides grid */}
        <section className="grid">
          {guides.map((g) => (
            <Link href={`/guides/${g.slug}`} key={g.slug} className="card">
              <article>
                <div className="thumb">
                  <img src={g.cover} alt={g.title} />
                </div>
                <div className="meta">
                  {g.datePretty && <span className="date">{g.datePretty}</span>}
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
        .wrap {
          max-width: 1100px;
          margin: 24px auto 64px;
          padding: 0 16px;
        }
        .logoWrap {
          display: flex;
          justify-content: center;
          margin: 8px 0 10px;
        }
        .logo {
          width: 120px;
          height: auto;
          object-fit: contain;
        }
        .hero {
          text-align: center;
          margin: 8px auto 22px;
          max-width: 880px;
        }
        .eyebrow {
          margin: 0 0 8px;
          color: #374151;
          font-weight: 600;
          font-size: 1.05rem;
          line-height: 1.45;
        }
        .h1 {
          margin: 0;
          font-size: 1.85rem;
          line-height: 1.25;
          letter-spacing: -0.01em;
          color: #111827;
        }
        @media (min-width: 860px) {
          .h1 { font-size: 2.1rem; }
          .eyebrow { font-size: 1.1rem; }
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 16px;
          margin-top: 18px;
        }
        .card {
          text-decoration: none;
          color: inherit;
        }
        .card article {
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          background: #fff;
          overflow: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
          transition: box-shadow 0.15s ease, border-color 0.15s ease;
        }
        .card article:hover {
          border-color: #d1d5db;
          box-shadow: 0 6px 18px rgba(17, 24, 39, 0.06);
        }
        .thumb {
          width: 100%;
          aspect-ratio: 16/9;
          background: #f3f4f6;
          overflow: hidden;
        }
        .thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .meta {
          padding: 10px 14px 0;
          color: #6b7280;
          font-size: 0.9rem;
        }
        .date {
          background: #f3f4f6;
          border: 1px solid #e5e7eb;
          padding: 2px 8px;
          border-radius: 999px;
        }
        .title {
          font-size: 1.1rem;
          line-height: 1.35;
          padding: 6px 14px 0;
          margin: 0;
          color: #111827;
        }
        .excerpt {
          padding: 8px 14px 0;
          margin: 0;
          color: #4b5563;
          flex: 1;
        }
        .cta {
          display: block;
          padding: 12px 14px 14px;
          color: #0f766e;
          font-weight: 700;
        }
        .fine {
          color: #6b7280;
          font-size: 0.9rem;
          text-align: center;
          margin-top: 20px;
        }
      `}</style>
    </>
  );
}
