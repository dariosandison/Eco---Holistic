// pages/guides/index.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import React from "react";
import Link from "next/link";
import Nav from "../../components/Nav";
import SEO from "../../components/SEO";

export default function Guides({ guides }) {
  return (
    <>
      <SEO title="Guides • Wild & Well" path="/guides" />
      <Nav />

      <main id="main" className="container section">
        <h1 style={{marginTop:4, marginBottom:10}}>All Guides</h1>
        <div className="grid">
          {guides.map((g) => (
            <Link key={g.slug} href={`/guides/${g.slug}`} className="card">
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

  guides.sort((a, b) => (b.meta.dateISO || "").localeCompare(a.meta.dateISO || ""));

  return { props: { guides } };
}
