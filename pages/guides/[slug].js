// pages/guides/[slug].js
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import { remark } from "remark";
import html from "remark-html";

const GUIDES_DIR = path.join(process.cwd(), "content", "guides");

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

  const processed = await remark().use(html).process(content);
  const htmlContent = processed.toString();

  return {
    props: {
      frontmatter: data,
      htmlContent,
      slug: params.slug,
    },
  };
}

export default function Guide({ frontmatter, htmlContent, slug }) {
  const title = frontmatter.title || slug;
  const description =
    frontmatter.excerpt ||
    "Wild & Well guide to eco-living and holistic wellness.";
  const date = frontmatter.date
    ? new Date(frontmatter.date).toLocaleDateString()
    : "";

  return (
    <>
      <Head>
        <title>{title} • Wild & Well</title>
        <meta name="description" content={description} />
      </Head>

      <main className="guide-wrap">
        <header className="guide-header">
          <h1>{title}</h1>
          {date && <span className="date">{date}</span>}
          {frontmatter.cover && (
            <img className="cover" src={frontmatter.cover} alt="" />
          )}
        </header>

        <article
          className="prose"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </main>

      <style jsx>{`
        .guide-wrap {
          max-width: 900px;
          margin: 2.5rem auto;
          padding: 0 16px;
        }
        .guide-header {
          margin-bottom: 1.25rem;
        }
        .date {
          display: inline-block;
          margin-top: 0.25rem;
          color: #6b7280;
          font-size: 0.95rem;
        }
        .cover {
          width: 100%;
          height: auto;
          border-radius: 12px;
          margin: 10px 0 20px;
        }
      `}</style>

      {/* Page-scoped "prose" styles for clean, readable articles */}
      <style jsx global>{`
        .prose {
          color: #111827;
          line-height: 1.75;
          font-size: 1.05rem;
        }
        .prose h2 {
          margin-top: 2rem;
          margin-bottom: 0.75rem;
          font-size: 1.6rem;
        }
        .prose h3 {
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
          font-size: 1.25rem;
        }
        .prose p {
          margin: 0.8rem 0;
          color: #374151;
        }
        .prose a {
          color: #065f46;
          text-decoration: underline;
        }
        .prose ul {
          padding-left: 1.25rem;
          list-style: disc;
        }
        .prose li {
          margin: 0.4rem 0;
        }
        .prose blockquote {
          margin: 1rem 0;
          padding: 0.75rem 1rem;
          border-left: 4px solid #10b981;
          background: #ecfdf5;
          color: #065f46;
          border-radius: 6px;
        }
        .prose hr {
          border: none;
          border-top: 1px solid #e5e7eb;
          margin: 1.5rem 0;
        }
        .prose .btn {
          display: inline-block;
          padding: 0.6rem 1rem;
          border-radius: 8px;
          background: #065f46;
          color: #fff !important;
          text-decoration: none;
          font-weight: 600;
        }
        .prose .note {
          font-size: 0.95rem;
          color: #6b7280;
        }
      `}</style>
    </>
  );
}
