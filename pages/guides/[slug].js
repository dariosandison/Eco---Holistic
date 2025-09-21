// pages/guides/[slug].js
import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import Nav from "../../components/Nav";
import SEO from "../../components/SEO";
import Link from "next/link";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://www.wild-and-well.store";
const AMAZON_TAG = "wildandwell0c-21"; // your tag

function appendAmazonTagToLinks(htmlStr, tag) {
  // Adds tag to amazon links that don't already have a tag/associate param
  return htmlStr.replace(
    /href="(https?:\/\/(?:www\.)?amazon\.(?:co\.uk|com|de|fr|it|es|ca|com\.au)\/[^"]+)"/g,
    (m, url) => {
      if (/[?&](?:tag|ascsubtag|linkCode)=/i.test(url)) return m; // already tagged
      const sep = url.includes("?") ? "&" : "?";
      return `href="${url}${sep}tag=${encodeURIComponent(tag)}"`;
    }
  );
}

function wordCount(text) {
  return (text || "").trim().split(/\s+/).filter(Boolean).length;
}

export default function GuidePage({ slug, meta, html, products, prev, next }) {
  const pageUrl = `${SITE}/guides/${slug}`;

  return (
    <>
      <SEO
        title={`${meta.title} • Wild & Well`}
        description={meta.summary || "Bite-size, practical reads for eco-friendly living and holistic wellness."}
        path={`/guides/${slug}`}
      />

      <Nav />

      <main id="main">
        <header className="hero">
          <p className="eyebrow">{meta.read} min read • <time dateTime={meta.dateISO}>{meta.dateHuman}</time></p>
          <h1 className="title">{meta.title}</h1>
          {meta.summary && <p className="summary">{meta.summary}</p>}
        </header>

        <article className="container article">
          {/* main content */}
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          {/* optional product grid */}
          {Array.isArray(products) && products.length > 0 && (
            <section className="product-section" aria-labelledby="picks">
              <h2 id="picks">Recommended picks</h2>
              <div className="grid">
                {products.map((p, i) => {
                  const url = appendAmazonTagToLinks(`<a href="${p.href || "#"}">x</a>`, AMAZON_TAG)
                    .match(/href="([^"]+)"/)?.[1] || p.href;

                  return (
                    <a key={i} href={url} target="_blank" rel="nofollow sponsored noopener" className="card" aria-label={p.title}>
                      {p.image && <img src={p.image} alt="" loading="lazy" />}
                      <h3>{p.title}</h3>
                      {p.note && <p className="muted">{p.note}</p>}
                      {p.pros && p.pros.length > 0 && (
                        <ul className="pros">
                          {p.pros.map((x, idx) => <li key={idx}>✔ {x}</li>)}
                        </ul>
                      )}
                      {p.cons && p.cons.length > 0 && (
                        <ul className="cons">
                          {p.cons.map((x, idx) => <li key={idx}>• {x}</li>)}
                        </ul>
                      )}
                      <span className="btn">View on Amazon</span>
                    </a>
                  );
                })}
              </div>
              <p className="disclaimer">
                <small>
                  As an Amazon Associate, we earn from qualifying purchases. This supports our work at no extra cost to you.
                </small>
              </p>
            </section>
          )}

          {/* share */}
          <section className="share">
            <span>Share:</span>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(meta.title)}`}
              target="_blank" rel="noopener"
            >Twitter</a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`}
              target="_blank" rel="noopener"
            >Facebook</a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`}
              target="_blank" rel="noopener"
            >LinkedIn</a>
            <a
              href={`https://www.reddit.com/submit?url=${encodeURIComponent(pageUrl)}&title=${encodeURIComponent(meta.title)}`}
              target="_blank" rel="noopener"
            >Reddit</a>
          </section>

          {/* prev / next */}
          <nav className="pager" aria-label="Guide pagination">
            {prev && (
              <Link className="pill" href={`/guides/${prev.slug}`} aria-label={`Previous: ${prev.title}`}>
                ← {prev.title}
              </Link>
            )}
            <span className="spacer" />
            {next && (
              <Link className="pill" href={`/guides/${next.slug}`} aria-label={`Next: ${next.title}`}>
                {next.title} →
              </Link>
            )}
          </nav>

          {/* JSON-LD Article */}
          <script type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                headline: meta.title,
                description: meta.summary || undefined,
                datePublished: meta.dateISO,
                dateModified: meta.dateISO,
                author: { "@type": "Person", name: "Wild & Well Editors" },
                publisher: {
                  "@type": "Organization",
                  name: "Wild & Well",
                  logo: {
                    "@type": "ImageObject",
                    url: `${SITE}/logo.png`,
                  },
                },
                mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
              }),
            }}
          />
        </article>
      </main>

      <style jsx>{`
        .hero { text-align: center; padding: 26px 16px 8px; }
        .eyebrow { color: #6b7280; margin: 0 0 4px; }
        .title { margin: 0 0 6px; font-size: clamp(1.6rem, 2.2vw + 1rem, 2.2rem); letter-spacing: -0.015em; }
        .summary { margin: 0; color: #4b5563; }

        .article { max-width: 820px; }
        .content :global(p) { margin: 0 0 1rem; }
        .content :global(h2) { margin: 1.4rem 0 .6rem; font-size: 1.35rem; }
        .content :global(h3) { margin: 1.1rem 0 .4rem; font-size: 1.1rem; }
        .content :global(ul), .content :global(ol) { padding-left: 1.25rem; margin: .75rem 0; }
        .content :global(blockquote) {
          margin: 1rem 0; padding: .75rem 1rem; background: #f7faf9; border-left: 3px solid #cfe7df;
        }
        .content :global(code) { background: #f3f4f6; padding: .1rem .35rem; border-radius: 4px; }

        .product-section { margin-top: 1.25rem; }
        .product-section h2 { margin: 0 0 .75rem; }
        .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 14px; }
        .card {
          display: block;
          background: #fff;
          border: 1px solid #e7ecea;
          border-radius: 12px;
          padding: 14px;
          text-decoration: none;
          color: inherit;
          transition: transform .12s ease, box-shadow .12s ease;
        }
        .card:hover { transform: translateY(-2px); box-shadow: 0 6px 22px rgba(0,0,0,.06); }
        .card img { width: 100%; height: auto; border-radius: 10px; margin-bottom: 10px; }
        .card h3 { margin: 4px 0 6px; font-size: 1rem; }
        .muted { color: #6b7280; margin: 0 0 8px; }
        .pros, .cons { margin: 0; padding-left: 1rem; color: #374151; }
        .btn {
          display: inline-block; margin-top: 8px; padding: 8px 10px;
          border-radius: 999px; background: #0b3d2e; color: #fff; font-size: .9rem;
        }
        .disclaimer { color: #6b7280; margin-top: 6px; }

        .share {
          display: flex; gap: 10px; align-items: center;
          margin-top: 18px; flex-wrap: wrap; color: #6b7280;
        }
        .share a { color: #0b3d2e; }

        .pager { display: flex; align-items: center; gap: 12px; margin-top: 22px; }
        .pill {
          border: 1px solid #e7ecea; padding: 8px 12px; border-radius: 999px; background: #fff;
        }
        .spacer { flex: 1; }
      `}</style>
    </>
  );
}

export async function getStaticPaths() {
  const dir = path.join(process.cwd(), "content", "guides");
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
  const paths = files.map((f) => ({ params: { slug: f.replace(/\.md$/, "") } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), "content", "guides", `${params.slug}.md`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  // Convert MD -> HTML
  const processed = await remark().use(html).process(content);
  let htmlString = String(processed);
  htmlString = appendAmazonTagToLinks(htmlString, AMAZON_TAG);

  // Dates as strings (avoid non-serializable Date objects)
  const fileStatISO = new Date(fs.statSync(filePath).mtime).toISOString();
  const dateStr = typeof data.date === "string" ? data.date : fileStatISO.slice(0, 10);
  const dateISO = new Date(dateStr).toISOString();
  const dateHuman = new Date(dateStr).toLocaleDateString("en-GB", {
    year: "numeric", month: "short", day: "2-digit",
  });

  // Reading time (fallback if not provided)
  const read = Number(data.read) || Math.max(3, Math.round(wordCount(content) / 200));

  // Build prev/next links
  const dir = path.join(process.cwd(), "content", "guides");
  const all = fs.readdirSync(dir).filter((f) => f.endsWith(".md")).sort();
  const idx = all.indexOf(`${params.slug}.md`);
  const before = idx > 0 ? all[idx - 1] : null;
  const after = idx < all.length - 1 ? all[idx + 1] : null;

  const getTitle = (slug) => {
    const raw = fs.readFileSync(path.join(dir, slug + ".md"), "utf8");
    const { data } = matter(raw);
    return data.title || slug.replace(/-/g, " ");
  };

  const prev = before ? { slug: before.replace(/\.md$/, ""), title: getTitle(before.replace(/\.md$/, "")) } : null;
  const next = after ? { slug: after.replace(/\.md$/, ""), title: getTitle(after.replace(/\.md$/, "")) } : null;

  // Normalize products (optional in frontmatter)
  const products = Array.isArray(data.products) ? data.products.map((p) => ({
    title: p.title || "",
    href: p.href || "",
    image: p.image || "",
    note: p.note || "",
    pros: Array.isArray(p.pros) ? p.pros : [],
    cons: Array.isArray(p.cons) ? p.cons : [],
  })) : [];

  return {
    props: {
      slug: params.slug,
      meta: {
        title: data.title || params.slug.replace(/-/g, " "),
        summary: data.summary || "",
        tags: Array.isArray(data.tags) ? data.tags : [],
        read,
        dateISO,
        dateHuman,
      },
      html: htmlString,
      products,
      prev,
      next,
    },
  };
}
