// pages/guides/[slug].js
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";
import { remark } from "remark";
import html from "remark-html";

const GUIDES_DIR = path.join(process.cwd(), "content", "guides");

function normalizeDate(value) {
  if (!value) return "";
  if (typeof value === "string") return value;
  try {
    return new Date(value).toISOString().slice(0, 10); // YYYY-MM-DD
  } catch {
    return "";
  }
}

export async function getStaticPaths() {
  const slugs = fs
    .readdirSync(GUIDES_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const fullPath = path.join(GUIDES_DIR, `${params.slug}.md`);
  const file = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(file);

  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();

  // Normalize meta (especially date) so Next can serialize it
  const meta = {
    ...data,
    date: normalizeDate(data.date),
    slug: params.slug,
  };

  // Build a small “you might also like” list
  const others = fs
    .readdirSync(GUIDES_DIR)
    .filter((f) => f.endsWith(".md") && f !== `${params.slug}.md`)
    .slice(0, 3)
    .map((fn) => {
      const raw = fs.readFileSync(path.join(GUIDES_DIR, fn), "utf8");
      const { data: d } = matter(raw);
      return {
        title: d.title || fn.replace(/\.md$/, ""),
        slug: fn.replace(/\.md$/, ""),
        date: normalizeDate(d.date),
      };
    });

  return { props: { meta, contentHtml, others } };
}

export default function GuidePage({ meta, contentHtml, others }) {
  return (
    <>
      <Head>
        <title>{meta.title} • Wild & Well</title>
        {meta.excerpt && <meta name="description" content={meta.excerpt} />}
      </Head>

      <main className="container">
        <article className="prose">
          <h1>{meta.title}</h1>
          {meta.excerpt && <p className="lead">{meta.excerpt}</p>}
          {meta.date && <p className="meta">Updated {meta.date}</p>}
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </article>

        {others?.length > 0 && (
          <section className="more">
            <h2>You might also like</h2>
            <ul>
              {others.map((g) => (
                <li key={g.slug}>
                  <Link href={`/guides/${g.slug}`}>{g.title}</Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>

      <style jsx>{`
        .container {
          max-width: 900px;
          margin: 2.5rem auto;
          padding: 0 16px;
        }
        .prose :global(h1) {
          margin-bottom: 0.5rem;
        }
        .lead {
          color: #4b5563;
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
        }
        .meta {
          color: #6b7280;
          font-size: 0.9rem;
          margin-bottom: 1.25rem;
        }
        .more {
          margin-top: 2.5rem;
          border-top: 1px solid #e5e7eb;
          padding-top: 1.25rem;
        }
        .more ul {
          margin: 0.5rem 0 0;
          padding-left: 1rem;
        }
      `}</style>
    </>
  );
}
