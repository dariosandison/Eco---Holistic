import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

const GUIDES_DIR = path.join(process.cwd(), "content", "guides");

/* -------------------------------- Utils -------------------------------- */

function getAllSlugs(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((f) => f.replace(/\.mdx?$/, ""));
}

function loadBySlug(dir, slug) {
  const pMdx = path.join(dir, `${slug}.mdx`);
  const pMd = path.join(dir, `${slug}.md`);
  const filePath = fs.existsSync(pMdx) ? pMdx : pMd;
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(raw);
  return { content, meta: data || {} };
}

function titleFromSlug(slug) {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());
}

function deepJsonSafe(value) {
  if (value instanceof Date) return value.toISOString();
  if (Array.isArray(value)) return value.map(deepJsonSafe);
  if (value && typeof value === "object") {
    const out = {};
    for (const [k, v] of Object.entries(value)) out[k] = deepJsonSafe(v);
    return out;
  }
  return value;
}

function escapeHtml(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/** very small “better than nothing” markdown-ish to HTML for fallback */
function toFallbackHtml(text) {
  let t = text;

  // Bold/italic (very naive)
  t = t.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  t = t.replace(/\*([^*]+)\*/g, "<em>$1</em>");

  // Links: [text](url)
  t = t.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" rel="nofollow noopener" target="_blank">$1</a>');

  // Bare urls
  t = t.replace(/(?<!\()(?<!")\bhttps?:\/\/[^\s<)]+/g, (m) => `<a href="${m}" rel="nofollow noopener" target="_blank">${m}</a>`);

  // Paragraphs
  t = t.split(/\n{2,}/).map(p => `<p>${p.replace(/\n/g, "<br/>")}</p>`).join("\n");
  return t;
}

/**
 * Sanitize MDX so MDX compiler won’t choke.
 * - Lift code (inline + fenced) so we don't touch it
 * - Remove HTML comments / <! ... >
 * - Turn <https://...> into proper markdown links
 * - Drop bare {UppercaseIdentifier}
 * - Replace unknown JSX tags (Thing, Audience) with <div>
 */
function sanitizeMDX(src) {
  if (!src) return src;

  // Lift code blocks and inline code
  const code = [];
  let lifted = src.replace(/```[\s\S]*?```/g, (m) => `@@CODE_${code.push(m) - 1}@@`);
  lifted = lifted.replace(/`[^`\n]+`/g, (m) => `@@CODE_${code.push(m) - 1}@@`);

  // Strip HTML comments + <! ... >
  let cleaned = lifted.replace(/<!--[\s\S]*?-->/g, "").replace(/<![\s\S]*?>/g, "");

  // Convert <http(s)://...> to [url](url)
  cleaned = cleaned.replace(/<https?:\/\/[^>\s]+>/g, (m) => {
    const url = m.slice(1, -1);
    return `[${url}](${url})`;
  });

  // Remove bare {UppercaseIdentifier}
  cleaned = cleaned.replace(/\{[ \t]*[A-Z][A-Za-z0-9_]*[ \t]*\}/g, "");

  // Replace unknown JSX tags with <div>
  const unknownTags = ["Thing", "Audience"];
  unknownTags.forEach((name) => {
    cleaned = cleaned.replace(new RegExp(`<${name}\\b([^>]*)\\s*/>`, "g"), `<div$1 />`);
    cleaned = cleaned.replace(new RegExp(`<${name}\\b([^>]*)>`, "g"), `<div$1>`);
    cleaned = cleaned.replace(new RegExp(`</${name}>`, "g"), `</div>`);
  });

  // Restore code
  cleaned = cleaned.replace(/@@CODE_(\d+)@@/g, (_, i) => code[Number(i)]);

  return cleaned;
}

function withFallback(base = {}) {
  return new Proxy(base, {
    get(target, prop) {
      if (prop in target) return target[prop];
      if (typeof prop === "string" && /^[A-Z]/.test(prop)) {
        return function Fallback(props) {
          return <div {...props} />;
        };
      }
      return undefined;
    },
  });
}

/* -------------------------------- Page -------------------------------- */

export default function GuidePage({ slug, meta, mdxSource, fallbackHtml }) {
  const components = withFallback({
    Thing: (p) => <div {...p} />,
    Audience: (p) => <div {...p} />,
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
            {mdxSource ? (
              <MDXRemote {...mdxSource} components={components} />
            ) : (
              <div dangerouslySetInnerHTML={{ __html: fallbackHtml }} />
            )}
          </div>
        </article>
      </div>
    </>
  );
}

/* -------------------------------- Data -------------------------------- */

export async function getStaticPaths() {
  const slugs = getAllSlugs(GUIDES_DIR);
  return { paths: slugs.map((slug) => ({ params: { slug } })), fallback: false };
}

export async function getStaticProps({ params }) {
  const loaded = loadBySlug(GUIDES_DIR, params.slug);
  if (!loaded) return { notFound: true };

  const safeMeta = deepJsonSafe(loaded.meta);
  const cleaned = sanitizeMDX(loaded.content);

  let mdxSource = null;
  let fallbackHtml = null;

  try {
    mdxSource = await serialize(cleaned, { scope: safeMeta, parseFrontmatter: false });
  } catch (err) {
    // Last-resort fallback so builds never fail on bad MDX
    fallbackHtml = toFallbackHtml(escapeHtml(cleaned));
  }

  return {
    props: { slug: params.slug, meta: safeMeta, mdxSource, fallbackHtml },
  };
}
