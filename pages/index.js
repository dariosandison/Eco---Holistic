import React from "react";
// pages/index.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Nav from "../components/Nav";
import SEO from "../components/SEO";
import SearchBarTabs from "../components/SearchBarTabs";
import Link from "next/link";

export default function Home({ guides }) {
  const [query, setQuery] = React.useState("");
  const [tag, setTag] = React.useState("All");

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return guides.filter(g => {
      const hitQ = !q || g.meta.title.toLowerCase().includes(q) || (g.meta.summary || "").toLowerCase().includes(q);
      const hitT = tag === "All" || (g.meta.tags || []).includes(tag);
      return hitQ && hitT;
    });
  }, [guides, query, tag]);

  return (
    <>
      <SEO
        title="Wild & Well • Your guide to eco-living, holistic health, and mindful wellness"
        description="Bite-size, practical reads to help you build greener, healthier habits—with honest product picks that keep additives and waste low."
        path="/"
      />

      <Nav />

      <main id="main">
        <section className="hero">
          <h1>Your guide to eco-living, holistic health, and mindful wellness</h1>
          <p>Bite-size, practical reads to help you build greener, healthier habits.</p>
        </section>

        <SearchBarTabs
          guides={guides}
          query={query}
          setQuery={setQuery}
          tag={tag}
          setTag={setTag}
        />

        <div className="container section">
          <div className="grid">
            {filtered.map((g) => (
              <Link key={g.slug} href={`/guides/${g.slug}`} className="card" aria-label={g.meta.title}>
                <article>
                  <div className="meta">
                    <span>{g.meta.read} min read</span>
                    <span>•</span>
                    <time dateTime={g.meta.dateISO}>{g.meta.dateHuman}</time>
                  </div>
                  <h3>{g.meta.title}</h3>
                  <p>{g.meta.summary}</p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const guidesDir = path.join(process.cwd(), "content", "guides");
  const files = fs.readdirSync(guidesDir).filter((f) => f.endsWith(".md"));

  const guides = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(guidesDir, file), "utf8");
    const { data } = matter(raw);
    // Safety: force dates to strings
    const dateStr =
      typeof data.date === "string"
        ? data.date
        : new Date(fs.statSync(path.join(guidesDir, file)).mtime).toISOString().slice(0, 10);

    const dateISO = new Date(dateStr).toISOString();
    const dateHuman = new Date(dateStr).toLocaleDateString("en-GB", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });

    return {
      slug,
      meta: {
        title: data.title || slug.replace(/-/g, " "),
        summary: data.summary || "",
        tags: Array.isArray(data.tags) ? data.tags : [],
        read: Number(data.read || 5),
        dateISO,
        dateHuman
      }
    };
  });

  // Sort newest first (string compare on ISO)
  guides.sort((a, b) => (b.meta.dateISO || "").localeCompare(a.meta.dateISO || ""));

  return { props: { guides } };
}

   
