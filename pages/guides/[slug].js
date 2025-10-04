import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

const GUIDES_DIR = path.join(process.cwd(), "content", "guides");

/* ------------------------------ Helpers ------------------------------ */

function getAllSlugs(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((f) => f.replace(/\.mdx?$/, ""));
}

function loadBySlug(dir, slug) {
  const filePathMDX = path.join(dir, `${slug}.mdx`);
  const filePathMD = path.join(dir, `${slug}.md`);
  const filePath = fs.existsSync(filePathMDX) ? filePathMDX : filePathMD;
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(raw);
  return { content, meta: data || {} };
}

function titleFromSlug(slug) {
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

// Make front-matter JSON-serializable (Date -> ISO string)
function jsonSafeMeta(meta) {
  const out = {};
  for (const [k, v] of Object.entries(meta || {})) {
    if (v instanceof Date) out[k] = v.toISOString();
    else out[k] = v;
  }
  return out;
}

/**
 * Sanitize author MDX so next-mdx-remote won't choke.
 * - Lifts code blocks so we never touch code samples
 * - Removes HTML comments and <! … >
 * - Converts angle-bracket autolinks (<https://...>) to markdown links
 * - Removes bare {UppercaseIdentifier} expressions
 * - Replaces unknown JSX tags (Thing, Audience, etc.) with <div>
 */
function sanitizeMDX(src) {
  if (!src) return src;

  // 1) Lift fenced + inline code so we don't mutate their contents.
  const codeBlocks = [];
  let lifted = src.replace(/```[\s\S]*?```/g, (m) => {
    const i = codeBlocks.push(m) - 1;
    return `@@CODEBLOCK_${i}@@`;
  });
  lifted = lifted.replace(/`[^`\n]+`/g, (m) => {
    const i = codeBlocks.push(m) - 1;
    return `@@CODEBLOCK_${i}@@`;
  });

  // 2) Remove HTML comments and any <! ... >
  let cleaned = lifted
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<![\s\S]*?>/g, "");

  // 3) Convert <https://example.com> or <http://...> to markdown links
  cleaned = cleaned.replace(/<https?:\/\/[^>\s]+>/g, (m) => {
    const url = m.slice(1, -1);
    return `[${url}](${url})`;
  });

  // 4) Remove bare {UppercaseIdentifier} expressions
  cleaned = cleaned.replace(/\{[ \t]*[A-Z][A-Za-z0-9_]*[ \t]*\}/g, "");

  // 5) Replace specific unknown JSX components with <div>
  const unknownTags = ["Thing", "Audience"];
  unknownTags.forEach((name) => {
    // Self-closing: <Thing ... />
    const reSelf = new RegExp(`<${name}\\b([^>]*)\\s*/>`, "g");
    cleaned = cleaned.replace(reSelf, `<div$1 />`);
    // Opening: <Thing ...>
    const reOpen = new RegExp(`<${name}\\b([^>]*)>`, "g");
    cleaned = cleaned.replace(reOpen, `<div$1>`);
    // Closing: </Thing>
    const reClose = new RegExp(`</${name}>`, "g");
    cleaned = cleaned.replace(reClose, `</div>`);
  });

  // 6) Restore code blocks
  cleaned = cleaned.replace(/@@CODEBLOCK_(\d+)@@/g, (_, i) => codeBlocks[Number(i)]);

  return cleaned;
}

// Components map that never crashes for unknown MDX tags
function withFallback(base = {}) {
  return new Proxy(base, {
    get(target, prop) {
      if (prop in target) return target[prop];
      if (typeof prop === "string" && /^[A-Z]/.test(prop)) {
        return function FallbackComponent(props) {
          return <div {...props} />;
        };
      }
      return undefined;
    },
  });
}

/* -------------------------------- Page -------------------------------- */

export default function GuidePage({ slug, meta, mdxSource }) {
  const components = withFallback({
    Thing: (props) => <div {...props} />,
    Audience: (props) => <div {...props} />,
  });

  const pageTitle = meta?.title || titleFromSlug(slug);
  const pageDesc = meta?.description || "";

  return (
    <>
      <Head>
        <title>{pageTitle} | Wild &amp; Well</title>
        {pageDesc ? <meta name="description" content={pageDesc} /> : null}

        <script
          type="application/ld+json"
          // JSON-LD must be a pure JSON string
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: pageTitle,
              description: pageDesc || undefined,
              datePublished: meta?.date || undefined,
              dateModified: meta?.updated || meta?.date || undefined,
              author: [{ "@type": "Person", name: "Wild & Well Editorial Team" }],
            }),
          }}
        />
      </Head>

      <div className="container">
        <article className="post">
          <header className="post-header">
            <h1>{pageTitle}</h1>
            {(meta?.updated || meta?.date) && (
              <p className="post-meta">
                {meta?.updated ? "Updated " : "Published "}
                {new Date(meta?.updated || meta?.date).toLocaleDateString()}
              </p>
            )}
          </header>

          <div className="post-content">
            <MDXRemote {...mdxSource} components={components} />
          </div>
        </article>
      </div>
    </>
  );
}

/* -------------------------------- Data -------------------------------- */

export async function getStaticPaths() {
  const slugs = getAllSlugs(GUIDES_DIR);
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const loaded = loadBySlug(GUIDES_DIR, params.slug);
  if (!loaded) return { notFound: true };

  const safeMeta = jsonSafeMeta(loaded.meta);
  const cleaned = sanitizeMDX(loaded.content);

  const mdxSource = await serialize(cleaned, {
    scope: safeMeta,
    parseFrontmatter: false,
  });

  return {
    props: {
      slug: params.slug,
      meta: safeMeta,
      mdxSource,
    },
  };
}
