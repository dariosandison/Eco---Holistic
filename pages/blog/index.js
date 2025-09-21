// pages/blog/index.js
import React, { useMemo, useState } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Nav from "../../components/Nav";
import SEO from "../../components/SEO";
import Link from "next/link";

export default function BlogIndex({ posts, allTags }) {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState("");

  const filtered = useMemo(() => {
    return posts.filter(p => {
      const matchQ =
        !q ||
        p.title.toLowerCase().includes(q.toLowerCase()) ||
        p.summary.toLowerCase().includes(q.toLowerCase());
      const matchTag = !tag || p.tags.includes(tag);
      return matchQ && matchTag;
    });
  }, [q, tag, posts]);

  return (
    <>
      <SEO
        title="Blog • Wild & Well"
        description="Fresh, practical insights on holistic health, low-tox living, and sustainable habits."
        path="/blog"
      />
      <Nav />

      <main id="main" className="container">
        <header className="header">
          <h1>Blog</h1>
          <p className="sub">Practical, bite-size reads on holistic wellness and eco-living.</p>

          <div className="tools">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search posts…"
              aria-label="Search blog posts"
            />
            <div className="tags">
              <button
                className={!tag ? "chip active" : "chip"}
                onClick={() => setTag("")}
              >
                All
              </button>
              {allTags.map((t) => (
                <button
                  key={t}
                  className={tag === t ? "chip active" : "chip"}
                  onClick={() => setTag(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </header>

        <section className="grid">
          {filtered.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="card">
              <h3>{p.title}</h3>
              <p className="meta">
                <time dateTime={p.dateISO}>{p.dateHuman}</time> • {p.read} min read
              </p>
              <p className="summary">{p.summary}</p>
              <div className="tagrow">
                {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
            </Link>
          ))}
        </section>
      </main>

      <style jsx>{`
        .header { text-align: center; padding: 18px 0 8px; }
        h1 { margin: 0 0 6px; }
        .sub { margin: 0; color: #4b5563; }
        .tools { margin: 14px auto 0; max-width: 760px; }
        input {
          width: 100%; padding: 12px 14px; border: 1px solid #e6ece9; border-radius: 10px;
          font-size: 1rem; outline: none;
        }
        .tags { display: flex; gap: 8px; flex-wrap: wrap; justify-content: center; margin-top: 10px; }
        .chip { border: 1px solid #dbe7e2; padding: 6px 10px; background: #fff; border-radius: 999px; }
        .chip.active { background: #0b3d2e; color: #fff; border-color: #0b3d2e; }

        .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 14px; margin-top: 16px; }
        .card {
          display: block; padding: 14px; border: 1px solid #e7ecea; border-radius: 12px; background: #fff;
          text-decoration: none; color: inherit; transition: transform .12s ease, box-shadow .12s ease;
        }
        .card:hover { transform: translateY(-2px); box-shadow: 0 6px 22px rgba(0,0,0,.06); }
        .meta { color: #6b7280; margin: 4px 0 6px; font-size: .95rem; }
        .summary { color: #374151; margin: 0 0 8px; }
        .tagrow { display: flex; gap: 6px; flex-wrap: wrap; }
        .tag { background: #eef6f3; color: #0b3d2e; border: 1px solid #d7ece6; border-radius: 999px; padding: 4px 10px; font-size: .85rem; }
      `}</style>
    </>
  );
}

export async function getStaticProps() {
  const dir = path.join(process.cwd(), "content", "blog");
  if (!fs.existsSync(dir)) {
    return { props: { posts: [], allTags: [] } };
  }

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));

  const posts = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(dir, file), "utf8");
    const { data, content } = matter(raw);

    const dateStr = typeof data.date === "string" ? data.date : new Date().toISOString().slice(0,10);
    const dateISO = new Date(dateStr).toISOString();
    const dateHuman = new Date(dateStr).toLocaleDateString("en-GB", { year: "numeric", month: "short", day: "2-digit" });
    const read = Number(data.read) || Math.max(3, Math.round(content.trim().split(/\s+/).length / 200));

    return {
      slug,
      title: data.title || slug.replace(/-/g, " "),
      summary: data.summary || "",
      tags: Array.isArray(data.tags) ? data.tags : [],
      dateISO,
      dateHuman,
      read,
    };
  });

  // Sort newest first by date string/ISO (string compare OK)
  posts.sort((a, b) => (b.dateISO || "").localeCompare(a.dateISO || ""));

  const allTags = Array.from(new Set(posts.flatMap((p) => p.tags))).sort((a, b) => a.localeCompare(b));

  return { props: { posts, allTags } };
}
