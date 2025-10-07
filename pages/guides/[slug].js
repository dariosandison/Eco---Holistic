import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import NewsletterBar from "../../components/NewsletterBar";

const CONTENT_DIR = path.join(process.cwd(), "content", "guides");

/* ----------------------------- MDX utilities ----------------------------- */

function cleanMdx(src) {
  if (!src) return src;
  let s = String(src);

  // Remove HTML comments
  s = s.replace(/<!--[\s\S]*?-->/g, "");

  // Convert <https://...> to markdown link
  s = s.replace(/<((https?:\/\/)[^>\s]+)>/g, (_m, url) => `[${url}](${url})`);

  // Neutralize a few known stray component tags if they sneak in the content
  ["Thing", "Audience"].forEach((name) => {
    s = s.replace(new RegExp(`<\\s*${name}\\b([^>]*)\\/\\s*>`, "g"), `<div$1></div>`);
    s = s.replace(
      new RegExp(`<\\s*${name}\\b([^>]*)>([\\s\\S]*?)<\\s*\\/\\s*${name}\\s*>`, "g"),
      `<div$1>$2</div>`
    );
  });

  return s;
}

function listSlugs() {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

function loadFile(slug) {
  const full = path.join(CONTENT_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(full, "utf8");
  const { content, data } = matter(raw);
  return { content, meta: data || {} };
}

/* ------------------------------- Components ------------------------------ */

// Safe <a> that fixes MDX links and sets rel/target for externals
function SafeLink(props) {
  let { href = "", children, ...rest } = props;
  const isExternal = /^https?:\/\//i.test(href);

  // Fix accidental .mdx links from content authors
  if (/\.mdx(\?|#|$)/i.test(href)) {
    const lower = href.toLowerCase();
    if (lower.includes("privacy")) href = "/privacy";
    else if (lower.includes("cookies")) href = "/cookies";
    else if (lower.includes("terms")) href = "/terms";
    else if (lower.includes("disclaimer")) href = "/disclaimer";
    else if (lower.includes("affiliate")) href = "/affiliate-disclosure";
    else if (lower.includes("editorial")) href = "/editorial-policy";
    else if (lower.includes("how-we-test")) href = "/how-we-test";
    else if (lower.includes("product-disclosure")) href = "/product-disclosure";
    else href = href.replace(/^.*?pages\//, "/").replace(/\.mdx$/i, "");
  }

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "nofollow sponsored noopener noreferrer" : undefined}
      {...rest}
    >
      {children ?? href}
    </a>
  );
}

// Minimal <AffiliateLink> for MDX demos and real use
function AffiliateLink({ href = "", children, ...rest }) {
  const isExternal = /^https?:\/\//i.test(href);
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "nofollow sponsored noopener noreferrer" : undefined}
      {...rest}
    >
      {children || "View product"}
    </a>
  );
}

const mdxComponents = {
  a: SafeLink,
  AffiliateLink,
};

// Fallback for ANY unknown Capitalized MDX component (prevents “X is not defined”)
const componentsProxy = new Proxy(mdxComponents, {
  get(target, prop) {
    if (prop in target) return target[prop];
    if (typeof prop === "string" && /^[A-Z]/.test(prop)) {
      return (p) => <span {...p} />;
    }
    return undefined;
  },
});

/* --------------------------------- Page ---------------------------------- */

export default function GuidePage({ slug, meta, mdxSource }) {
  const title = meta?.title || slug;
  const desc = meta?.description || "Practical wellness guide from Wild & Well";

  return (
    <>
      <Head>
        <title>{title} | Wild & Well</title>
        <meta name="description" content={desc} />
      </Head>

      <SiteHeader />

      <main className="container" style={{ padding: "1.25rem 0 2rem" }}>
        <article className="post">
          <h1>{title}</h1>
          {meta?.updated && <p className="muted">Updated {meta.updated}</p>}
          <MDXRemote {...mdxSource} components={componentsProxy} />
        </article>
      </main>

      <SiteFooter />
      <NewsletterBar />
    </>
  );
}

export async function getStaticPaths() {
  const slugs = listSlugs();
  return { paths: slugs.map((slug) => ({ params: { slug } })), fallback: false };
}

export async function getStaticProps({ params }) {
  const { content, meta: rawMeta } = loadFile(params.slug);

  const cleaned = cleanMdx(content);
  const mdxSource = await serialize(cleaned, {
    parseFrontmatter: false,
    mdxOptions: { format: "mdx" },
  });

  // Force JSON-serializable meta
  const meta = { ...rawMeta };
  ["date", "updated", "datePublished", "dateModified"].forEach((k) => {
    if (!meta[k]) return;
    const v = meta[k];
    meta[k] = v instanceof Date ? v.toISOString() : String(v);
  });

  return { props: { slug: params.slug, meta, mdxSource } };
}
