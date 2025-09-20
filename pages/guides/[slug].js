// /pages/guides/[slug].js
import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import SEO from "../../components/SEO";
import ShareBar from "../../components/ShareBar";

const CONTENT_DIR = path.join(process.cwd(), "content", "guides");

export default function GuidePage({ slug, meta, htmlContent }) {
  const pathForSeo = `/guides/${slug}`;
  return (
    <>
      <SEO
        title={meta.title || "Wild & Well"}
        description={meta.description || "Eco & holistic guides"}
        path={pathForSeo}
        cover={meta.cover || "/cover.png"}
      />

      <main className="wrap">
        <header className="hero">
          <h1>{meta.title}</h1>
          {meta.description && <p className="dek">{meta.description}</p>}
          <p className="meta">
            <span>{meta.readingTime || "5 min read"}</span>
            {meta.date && <> • <time dateTime={meta.date}>{meta.date}</time></>}
            {meta.updated && meta.updated !== meta.date && (
              <> • Updated <time dateTime={meta.updated}>{meta.updated}</time></>
            )}
          </p>
        </header>

        <article
          className="content"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />

        <ShareBar
          path={pathForSeo}
          title={meta.title || "Wild & Well"}
          cover={meta.cover || "/cover.png"}
        />

        <p className="disclaimer">
          Educational only and not a substitute for professional advice. As an Amazon Associate, we earn from qualifying purchases.
        </p>
      </main>

      <style jsx>{`
        .wrap {
          max-width: 860px;
          margin: 2rem auto;
          padding: 0 16px 64px;
        }
        .hero h1 {
          font-size: 2rem;
          margin: 0 0 8px;
        }
        .dek {
          color: #4b5563;
          margin: 0 0 8px;
        }
        .meta {
          color: #6b7280;
          font-size: 0.95rem;
          margin-bottom: 18px;
        }
        .content :global(h2) {
          font-size: 1.4rem;
          margin-top: 1.6rem;
        }
        .content :global(p), .content :global(li) {
          line-height: 1.75;
          color: #1f2937;
        }
        .content :global(a) {
          color: #2563eb;
          text-decoration: none;
        }
        .content :global(a:hover) {
          text-decoration: underline;
        }
        .disclaimer {
          color: #6b7280;
          font-size: 0.88rem;
          margin-top: 16px;
        }
      `}</style>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".md"));
  const paths = files.map((file) => ({
    params: { slug: file.replace(/\.md$/, "") },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  const processed = await remark().use(html).process(content);
  const htmlContent = processed.toString();

  // Ensure strings only (Next export requirement)
  const meta = {
    title: String(data.title || ""),
    description: String(data.description || ""),
    date: data.date ? String(data.date) : "",
    updated: data.updated ? String(data.updated) : "",
    cover: String(data.cover || "/cover.png"),
    readingTime: String(data.readingTime || ""),
  };

  return {
    props: { slug, meta, htmlContent },
  };
}
