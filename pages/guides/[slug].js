// Dynamic Guide Template
import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import Head from "next/head";
import Image from "next/image";

import SEO from "../../components/SEO";
import ProductCard from "../../components/ProductCard";
import AuthorBox from "../../components/AuthorBox";
import HowWeChoose from "../../components/HowWeChoose";
import FaqBlock from "../../components/FaqBlock";

const GUIDES_DIR = path.join(process.cwd(), "content", "guides");

function ArticleJsonLd({ meta, url }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.excerpt || meta.description || "",
    datePublished: meta.date || undefined,
    dateModified: meta.updated || meta.date || undefined,
    author: [{ "@type": "Person", name: "D. Sandison" }],
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function ItemListJsonLd({ products = [], url }) {
  if (!products.length) return null;
  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: p.href,
      name: p.title,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function GuidePage({ meta, contentHtml, products, related }) {
  const site = "https://wild-and-well.store";
  const url = `${site}/guides/${meta.slug}`;

  return (
    <>
      <SEO
        title={`${meta.title} • Wild & Well`}
        description={meta.excerpt || meta.description}
        path={`/guides/${meta.slug}`}
        image={meta.cover || "/cover.jpg"}
      />
      <ArticleJsonLd meta={meta} url={url} />
      <ItemListJsonLd products={products} url={url} />

      <main className="wrap">
        <article className="post">
          {meta.cover ? (
            <Image
              src={meta.cover}
              alt={meta.title}
              width={1200}
              height={630}
              style={{ width: "100%", height: "auto", borderRadius: 12 }}
            />
          ) : null}

          <h1>{meta.title}</h1>
          {meta.excerpt ? <p className="lead">{meta.excerpt}</p> : null}

          {/* Intro/body from markdown */}
          {contentHtml ? (
            <section
              className="content"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          ) : null}

          {/* Avoid / Look For (frontmatter arrays) */}
          {meta.avoid?.length ? (
            <section>
              <h2>What to avoid</h2>
              <ul>{meta.avoid.map((x) => <li key={x}>{x}</li>)}</ul>
            </section>
          ) : null}

          {meta.lookfor?.length ? (
            <section>
              <h2>What to look for</h2>
              <ul>{meta.lookfor.map((x) => <li key={x}>{x}</li>)}</ul>
            </section>
          ) : null}

          {/* Top Picks */}
          {products?.length ? (
            <section>
              <h2>Top picks</h2>
              <div className="grid">
                {products.map((p) => (
                  <ProductCard key={p.title} {...p} />
                ))}
              </div>
              <p className="disc">
                As an Amazon Associate, we earn from qualifying purchases. This
                does not change the price you pay.
              </p>
            </section>
          ) : null}

          {/* Methods + Author */}
          <HowWeChoose />
          <AuthorBox />

          {/* FAQs */}
          <FaqBlock faqs={meta.faqs || []} />

          {/* Related */}
          {related?.length ? (
            <section>
              <h2>You might also like</h2>
              <ul className="related">
                {related.map((g) => (
                  <li key={g.slug}>
                    <a href={`/guides/${g.slug}`}>{g.title}</a>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </article>
      </main>

      <style jsx>{`
        .wrap { max-width: 980px; margin: 24px auto; padding: 0 16px; }
        .post h1 { margin: 16px 0 6px; }
        .lead { color: #374151; font-size: 1.1rem; }
        .content :global(p) { color: #374151; line-height: 1.7; }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 16px;
        }
        .disc { color: #6b7280; font-size: .9rem; margin-top: 8px; }
        .related { display: grid; gap: 8px; padding-left: 18px; }
      `}</style>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(GUIDES_DIR).filter((f) => f.endsWith(".md"));
  const paths = files.map((f) => ({
    params: { slug: f.replace(/\.md$/, "") },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const fullPath = path.join(GUIDES_DIR, `${params.slug}.md`);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  const processed = await remark().use(html).process(content || "");
  const contentHtml = processed.toString();

  // Build products safely (optional in frontmatter)
  const products = Array.isArray(data.products) ? data.products : [];

  // Get related (up to 3 others sharing any tag)
  const allFiles = fs.readdirSync(GUIDES_DIR).filter((f) => f.endsWith(".md"));
  const others = await Promise.all(
    allFiles
      .filter((f) => f !== `${params.slug}.md`)
      .slice(0, 20)
      .map(async (f) => {
        const raw2 = fs.readFileSync(path.join(GUIDES_DIR, f), "utf8");
        const { data: d2 } = matter(raw2);
        return {
          slug: f.replace(/\.md$/, ""),
          title: d2.title || f,
          tags: d2.tags || [],
        };
      })
  );

  const related = others
    .filter((o) => (o.tags || []).some((t) => (data.tags || []).includes(t)))
    .slice(0, 3);

  const meta = {
    slug: params.slug,
    title: data.title || params.slug,
    excerpt: data.excerpt || data.description || "",
    cover: data.cover || null,
    date: data.date || null,
    updated: data.updated || null,
    tags: data.tags || [],
    avoid: data.avoid || [],
    lookfor: data.lookfor || [],
    faqs: data.faqs || [],
  };

  return {
    props: { meta, contentHtml, products, related },
  };
}
