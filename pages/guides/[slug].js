// pages/guides/[slug].js
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";
import { remark } from "remark";
import html from "remark-html";

const GUIDES_DIR = path.join(process.cwd(), "content", "guides");

export async function getStaticPaths() {
  const files = fs.readdirSync(GUIDES_DIR).filter(f => f.endsWith(".md"));
  const paths = files.map((f) => ({
    params: { slug: f.replace(/\.md$/, "") },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const fullPath = path.join(GUIDES_DIR, `${params.slug}.md`);
  const file = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(file);

  const processed = await remark().use(html).process(content || "");
  const contentHtml = processed.toString();

  // for “You might also like…”
  const all = fs.readdirSync(GUIDES_DIR).filter(f => f.endsWith(".md"));
  const recos = all
    .filter((f) => f.replace(/\.md$/, "") !== params.slug)
    .slice(0, 3)
    .map((f) => {
      const raw = fs.readFileSync(path.join(GUIDES_DIR, f), "utf8");
      const fm = matter(raw).data || {};
      return {
        slug: f.replace(/\.md$/, ""),
        title: fm.title || f.replace(/\.md$/, ""),
        excerpt: fm.excerpt || "",
      };
    });

  return { props: { frontMatter: data || {}, contentHtml, recos } };
}

export default function GuidePage({ frontMatter, contentHtml, recos }) {
  const { title = "Guide", excerpt = "" } = frontMatter || {};
  return (
    <>
      <Head>
        <title>{title} | Wild & Well</title>
        {excerpt && <meta name="description" content={excerpt} />}
      </Head>

      <main className="container">
        <article className="guide">
          <h1>{title}</h1>
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </article>

        {recos?.length > 0 && (
          <section className="more">
            <h2>You might also like</h2>
            <ul>
              {recos.map((r) => (
                <li key={r.slug}>
                  <Link href={`/guides/${r.slug}`}>{r.title}</Link>
                  {r.excerpt && <p>{r.excerpt}</p>}
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>

      <style jsx>{`
        .container { max-width: 900px; margin: 2rem auto; padding: 0 16px; }
        h1 { margin-bottom: 0.75rem; }
        .prose :global(p) { line-height: 1.7; margin: 1rem 0; }
        .prose :global(h2) { margin-top: 2rem; }
        .more { margin-top: 3rem; border-top: 1px solid #e5e7eb; padding-top: 1.5rem; }
        .more ul { list-style: none; padding: 0; margin: 0; display: grid; gap: 8px; }
        .more li a { font-weight: 600; }
        .more li p { margin: 4px 0 0; color: #6b7280; }
      `}</style>
    </>
  );
}
