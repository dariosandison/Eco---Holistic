// pages/legal/[slug].js
import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serializeMdx, jsonSafeMeta } from "../../lib/mdx";
import SEO from "../../components/SEO";
import { mdxComponents } from "../../components/MDXComponents";

const ROOT = process.cwd();
const DIR = path.join(ROOT, "content", "legal");

function listSlugs() {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((f) => f.replace(/\.(md|mdx)$/i, ""));
}

function fileFor(slug) {
  const mdx = path.join(DIR, `${slug}.mdx`);
  const md = path.join(DIR, `${slug}.md`);
  if (fs.existsSync(mdx)) return mdx;
  if (fs.existsSync(md)) return md;
  return null;
}

function sanitiseUnknownPlaceholders(src = "") {
  return src
    // Turn <Thing .../> or <Thing>...</Thing> into harmless spans (already safe)
    .replace(/<\s*Thing(\s+[^>]*)?\/>/g, "<span$1 />")
    .replace(/<\s*Thing(\s+[^>]*)?>/g, "<span$1>")
    .replace(/<\s*\/\s*Thing\s*>/g, "</span>")
    // NEW: remove bare {Capitalized} placeholders like {Audience}, {Thing}, etc.
    // (only when it's *just* the identifier – no dots, calls, math, etc.)
    .replace(/\{\s*[A-Z][A-Za-z0-9_]*\s*\}/g, "");
}

function escapeHtml(s = "") {
  return s.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

// Replace unknown placeholders/components that may appear in legacy MDX
function sanitiseUnknownPlaceholders(src = "") {
  return src
    // <Thing .../> and <Thing>...</Thing>
    .replace(/<\s*Thing(\s+[^>]*)?\/>/g, "<span$1 />")
    .replace(/<\s*Thing(\s+[^>]*)?>/g, "<span$1>")
    .replace(/<\s*\/\s*Thing\s*>/g, "</span>")
    // {Thing} expressions
    .replace(/\{\s*Thing\s*\}/g, "");
}

export async function getStaticProps({ params }) {
  const filepath = fileFor(params.slug);
  if (!filepath) return { notFound: true };

  const raw = fs.readFileSync(filepath, "utf8");
  const { data, content } = matter(raw);
  const meta = jsonSafeMeta(data || {});

  let mdxSource = null;
  let fallbackHtml = null;

  try {
    const cleaned = sanitiseUnknownPlaceholders(content || "");
    mdxSource = await serializeMdx(cleaned);
  } catch {
    // As a last resort, render as escaped HTML so build doesn’t fail
    fallbackHtml = `<pre style="white-space:pre-wrap">${escapeHtml(content || "")}</pre>`;
  }

  const title = meta.title || params.slug.replace(/-/g, " ");
  const description = meta.description || "";
  const url = `https://www.wild-and-well.store/legal/${params.slug}`;

  return {
    props: {
      slug: params.slug,
      meta,
      mdxSource,
      fallbackHtml,
      seo: {
        title: `${title} — Wild & Well`,
        description,
        url,
        type: "article",
        breadcrumbs: [
          { name: "Home", item: "https://www.wild-and-well.store/" },
          { name: "Legal", item: "https://www.wild-and-well.store/legal" },
          { name: title, item: url },
        ],
      },
    },
    revalidate: 60 * 60 * 12,
  };
}

export default function LegalPage({ slug, meta, mdxSource, fallbackHtml, seo }) {
  const components = {
    ...mdxComponents,
    // Ensure <Thing /> never crashes render if it sneaks through
    Thing: (props) => <div {...props} />,
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: meta?.title || "Wild & Well — Legal",
              description: meta?.description || undefined,
              datePublished: meta?.date || undefined,
              dateModified: meta?.updated || meta?.date || undefined,
              author: [{ "@type": "Person", name: "Wild & Well Editorial Team" }],
              publisher: { "@type": "Organization", name: "Wild & Well" },
            }),
          }}
        />
      </Head>

      <SEO {...seo} />
      <div className="container">
        <article className="post">
          <h1 className="post-title">{meta.title || slug.replace(/-/g, " ")}</h1>
          {(meta.date || meta.updated) ? (
            <p className="post-meta">
              {meta.date ? <>Published {new Date(meta.date).toLocaleDateString()}</> : null}
              {meta.date && meta.updated ? <> · </> : null}
              {meta.updated ? <>Updated {new Date(meta.updated).toLocaleDateString()}</> : null}
            </p>
          ) : null}

          {mdxSource ? (
            <MDXRemote {...mdxSource} components={components} />
          ) : (
            <div dangerouslySetInnerHTML={{ __html: fallbackHtml || "" }} />
          )}
        </article>
      </div>
    </>
  );
}
