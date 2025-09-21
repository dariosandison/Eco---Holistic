// pages/index.js
import React, { useMemo, useState } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Head from "next/head";

/** Convert a markdown body to a short plain-text excerpt */
function mdToExcerpt(md, max = 160) {
  if (!md) return "";
  const text = md
    // remove code blocks & inline code
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    // images ![alt](src)
    .replace(/!\[[^\]]*]\([^)]+\)/g, " ")
    // links [text](url) -> text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    // headings, emphasis, blockquotes, lists symbols
    .replace(/[#>*_~`>-]+/g, " ")
    // collapse whitespace
    .replace(/\s+/g, " ")
    .trim();

  return text.length > max ? text.slice(0, max - 1) + "…" : text;
}

export default function Home({ guides, tags }) {
  const [q, setQ] = useState("");
  const [activeTag, setActiveTag] = useState("All");

  const filtered = useMemo(() => {
    const ql = q.trim().toLowerCase();
    return guides.filter((g) => {
      const tagOk = activeTag === "All" || (g.tags || []).includes(activeTag);
      if (!tagOk) return false;
      if (!ql) return true;
      const hay =
        (g.title || "") +
        " " +
        (g.excerpt || "") +
        " " +
        (g.tags || []).join(" ");
      return hay.toLowerCase().includes(ql);
    });
  }, [q, activeTag, guides]);

  return (
    <>
      <Head>
        <title>Wild & Well — Eco-Living & Holistic Health Guides</title>
        <meta
          name="description"
          content="Bite-size, practical reads for eco-friendly living and holistic wellness. Simple checklists, what-to-avoid tips, and no-nonsense product picks."
        />
      </Head>

      {/* Hero */}
      <section className="hero">
        <span className="kicker">
          Bite-size, practical reads for eco-friendly living and holistic
          wellness
        </span>
        <h1>Your guide to eco-living, holistic health, and mindful wellness</h1>
        <p>
          Explore quick, trustworthy guides with simple checklists, what-to-avoid
          tips, and no-nonsense product picks.
        </p>
      </section>

      {/* Search + Filters */}
      <div className="container" style={{ marginTop: 6 }}>
        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search guides…"
            aria-label="Search guides"
            style={{
              width: "min(520px, 96%)",
              border: "1px solid var(--border)",
              borderRadius: 12,
              padding: "10px 12px",
              fontSize: "1rem",
              outline: "none",
            }}
          />
        </div>

        <div className="filters">
          <button
            className={`chip ${activeTag === "All" ? "active" : ""}`}
            onClick={() => setActiveTag("All")}
          >
            All
          </button>
          {tags.map((t) => (
            <button
              key={t}
              className={`chip ${activeTag === t ? "active" : ""}`}
              onClick={() => setActiveTag(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Guides Grid */}
      <main className="container">
        <section className="grid">
          {filtered.map((g) => (
            <Link key={g.slug} href={`/guides/${g.slug}`} className="card">
              <div className="thumb">
                <img
                  src={g.cover || "/cover.png"}
                  alt={g.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  onError={(e) => {
                    e.currentTarget.src = "/cover.png";
                  }}
                />
              </div>
              <div className="meta">
                <div className="title">{g.title}</div>
                {g.excerpt ? (
                  <div className="desc">{g.excerpt}</div>
                ) : null}
                {g.tags?.length ? (
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {g.tags.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: ".8rem",
                          padding: "4px 8px",
                          borderRadius: 999,
                          background: "var(--chip)",
                          border: "1px solid var(--border)",
                          color: "var(--chip-ink)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </Link>
          ))}
        </section>

        {/* Empty state */}
        {!filtered.length && (
          <p
            style={{
              textAlign: "center",
              color: "var(--muted)",
              margin: "22px 0 40px",
            }}
          >
            No guides match that search — try different keywords or clear the
            tag filter.
          </p>
        )}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const dir = path.join(process.cwd(), "content", "guides");
  const files = fs.existsSync(dir)
    ? fs.readdirSync(dir).filter((f) => f.endsWith(".md"))
    : [];

  const guides = files
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data, content } = matter(raw);

      const title = (data && data.title) || slug.replace(/-/g, " ");
      const cover = data?.cover || ""; // e.g., "/images/guide-x.jpg" or leave empty to fall back
      const tags = Array.isArray(data?.tags)
        ? data.tags.map((t) => String(t))
        : [];
      const dateStr =
        typeof data?.date === "string"
          ? data.date
          : data?.date
          ? new Date(data.date).toISOString().slice(0, 10)
          : null;

      const excerpt =
        data?.excerpt || data?.description || mdToExcerpt(content, 160);

      return {
        slug,
        title: String(title),
        cover: cover ? String(cover) : "",
        tags,
        date: dateStr, // keep as string for JSON-serializable props
        excerpt,
      };
    })
    // newest first if ISO date is present
    .sort((a, b) => {
      const ad = a.date || "";
      const bd = b.date || "";
      // string compare is fine for YYYY-MM-DD format
      return bd.localeCompare(ad);
    });

  // collect unique tags
  const tagSet = new Set();
  guides.forEach((g) => (g.tags || []).forEach((t) => tagSet.add(t)));
  const tags = Array.from(tagSet).sort((a, b) => a.localeCompare(b));

  return {
    props: {
      guides,
      tags,
    },
  };
}
