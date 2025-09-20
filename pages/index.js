// pages/index.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";

const GUIDES_DIR = path.join(process.cwd(), "content", "guides");

function normalizeDate(value) {
  if (!value) return "";
  if (typeof value === "string") return value;
  try {
    return new Date(value).toISOString().slice(0, 10);
  } catch {
    return "";
  }
}

export async function getStaticProps() {
  const files = fs.readdirSync(GUIDES_DIR).filter((f) => f.endsWith(".md"));
  const guides = files.map((fn) => {
    const raw = fs.readFileSync(path.join(GUIDES_DIR, fn), "utf8");
    const { data } = matter(raw);
    const slug = fn.replace(/\.md$/, "");
    return {
      title: data.title || slug,
      excerpt: data.excerpt || "",
      date: normalizeDate(data.date),
      tags: Array.isArray(data.tags) ? data.tags : [],
      slug,
    };
  });

  // Sort newest first using string dates
  guides.sort((a, b) => (b.date || "").localeCompare(a.date || ""));

  // Build tag cloud
  const tagCounts = {};
  guides.forEach((g) => g.tags.forEach((t) => (tagCounts[t] = (tagCounts[t] || 0) + 1)));
  const tags = Object.keys(tagCounts).sort();

  return { props: { guides, tags } };
}

export default function Home({ guides, tags }) {
  return (
    <>
      <Head>
        <title>Wild & Well — Guides</title>
        <meta
          name="description"
          content="Bite-size, practical reads for eco-friendly living and holistic wellness."
        />
      </Head>

      <main className="wrap">
        <header className="hero">
          <img src="/logo.svg" alt="Wild & Well" className="logo" />
          <h1 className="strap">Your guide to eco-living, holistic health, and mindful wellness.</h1>
          <p className="sub">Bite-size, practical reads for eco-friendly living and holistic wellness.</p>
        </header>

        {tags?.length > 0 && (
          <nav className="tags">
            {tags.map((t) => (
              <a key={t} href={`#tag-${t}`} className="chip">
                {t}
              </a>
            ))}
          </nav>
        )}

        <section className="grid">
          {guides.map((g) => (
            <Link key={g.slug} href={`/guides/${g.slug}`} className="card">
              <h3>{g.title}</h3>
              {g.excerpt && <p>{g.excerpt}</p>}
              <span className="meta">
                {g.date}
                {g.tags?.length ? ` • ${g.tags.join(", ")}` : ""}
              </span>
            </Link>
          ))}
        </section>
      </main>

      <style jsx>{`
        .wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 24px 16px 64px;
        }
        .hero {
          text-align: center;
          margin: 24px 0 8px;
        }
        .logo {
          width: 44px;
          height: 44px;
          margin: 0 auto 10px;
          display: block;
        }
        .strap {
          font-size: 1.35rem;
          margin: 0 0 6px;
        }
        .sub {
          color: #6b7280;
          margin: 0 0 18px;
        }
        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: center;
          margin-bottom: 12px;
        }
        .chip {
          border: 1px solid #e5e7eb;
          padding: 6px 10px;
          border-radius: 999px;
          font-size: 0.9rem;
          color: #374151;
          text-decoration: none;
        }
        .chip:hover {
          background: #f3f4f6;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 14px;
          margin-top: 8px;
        }
        .card {
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 14px;
          text-decoration: none;
          color: inherit;
          transition: box-shadow 0.15s ease;
          background: #fff;
        }
        .card:hover {
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
        }
        .card h3 {
          margin: 0 0 6px;
          font-size: 1.05rem;
        }
        .card p {
          margin: 0 0 8px;
          color: #4b5563;
        }
        .meta {
          display: inline-block;
          color: #6b7280;
          font-size: 0.85rem;
        }
      `}</style>
    </>
  );
}
