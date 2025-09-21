// pages/guides/[slug].js
import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import FAQ from "../../components/FAQ";

const GUIDES_DIR = path.join(process.cwd(), "content", "guides");

export default function GuidePage({ meta, contentHtml }) {
  if (!meta) return <main className="container">Not found.</main>;

  const {
    title = "",
    excerpt = "",
    hero = "",
    date = "",
    tags = [],
    products = [],
    faq = [],
  } = meta;

  return (
    <main className="container">
      <article className="guide">
        <header className="header">
          <h1 className="title">{title}</h1>
          {excerpt && <p className="excerpt">{excerpt}</p>}
          {(date || (tags && tags.length)) && (
            <div className="meta">
              {date && <time dateTime={date}>{date}</time>}
              {Array.isArray(tags) && tags.length > 0 && (
                <ul className="tags">
                  {tags.map((t, i) => (
                    <li key={i}>{String(t)}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
          {hero ? (
            // Use native img to avoid next/image config issues during export
            <img className="hero" src={hero} alt="" loading="lazy" />
          ) : null}
        </header>

        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        {Array.isArray(products) && products.length > 0 && (
          <section className="products">
            <h2>Recommended options</h2>
            <ul className="prod-list">
              {products.map((p, i) => {
                const name = String(p?.name || p?.title || "");
                const url = String(p?.url || p?.link || "");
                const note = p?.note ? String(p.note) : "";
                if (!name || !url) return null;
                return (
                  <li key={i} className="prod">
                    <a
                      href={url}
                      target="_blank"
                      rel="nofollow sponsored noopener"
                    >
                      {name}
                    </a>
                    {note && <p className="note">{note}</p>}
                  </li>
                );
              })}
            </ul>
          </section>
        )}

        {Array.isArray(faq) && faq.length > 0 && (
          <FAQ items={faq} title="FAQs" />
        )}
      </article>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 24px 16px 80px;
        }
        .title {
          font-size: 2rem;
          line-height: 1.2;
          letter-spacing: -0.01em;
          margin: 0 0 6px;
        }
        .excerpt {
          margin: 0 0 8px;
          color: #374151;
        }
        .meta {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #6b7280;
          font-size: 0.95rem;
          margin-bottom: 14px;
        }
        .tags {
          display: flex;
          gap: 8px;
          list-style: none;
          padding: 0;
          margin: 0;
          flex-wrap: wrap;
        }
        .tags li {
          background: #f3f4f6;
          padding: 2px 8px;
          border-radius: 999px;
          font-size: 0.85rem;
          color: #374151;
        }
        .hero {
          width: 100%;
          height: auto;
          border-radius: 12px;
          margin: 10px 0 16px;
        }
        .prose :global(p) {
          margin: 0 0 16px;
          line-height: 1.7;
          color: #1f2937;
          font-size: 1.02rem;
        }
        .prose :global(h2) {
          margin: 28px 0 8px;
          font-size: 1.35rem;
        }
        .prose :global(h3) {
          margin: 22px 0 6px;
          font-size: 1.12rem;
        }
        .prose :global(ul),
        .prose :global(ol) {
          padding-left: 1.3rem;
          margin: 0 0 16px;
        }
        .products {
          margin-top: 28px;
          border-top: 1px solid #e5e7eb;
          padding-top: 20px;
        }
        .prod-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 10px;
        }
        .prod {
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          padding: 12px 14px;
          background: #fff;
        }
        .prod a {
          font-weight: 600;
        }
        .note {
          margin: 6px 0 0;
          color: #4b5563;
          font-size: 0.95rem;
        }
      `}</style>
    </main>
  );
}

export async function getStaticPaths() {
  const files = fs.existsSync(GUIDES_DIR)
    ? fs.readdirSync(GUIDES_DIR).filter((f) => f.endsWith(".md"))
    : [];
  const paths = files.map((file) => ({
    params: { slug: file.replace(/\.md$/, "") },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const fullPath = path.join(GUIDES_DIR, `${params.slug}.md`);
  const file = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(file);

  // IMPORTANT: Await the async markdown → HTML conversion
  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();

  // Normalize meta for safe JSON serialization & rendering
  const meta = {
    ...data,
    title: data?.title || "",
    excerpt: data?.excerpt || "",
    hero: data?.hero || "",
    date: data?.date
      ? new Date(data.date).toISOString().slice(0, 10)
      : "", // YYYY-MM-DD
    tags: Array.isArray(data?.tags) ? data.tags.map(String) : [],
    products: Array.isArray(data?.products) ? data.products : [],
    faq: Array.isArray(data?.faq)
      ? data.faq.map((x) => ({
          q: String(x?.q || ""),
          a: String(x?.a || ""),
        }))
      : [],
  };

  return { props: { meta, contentHtml } };
}
