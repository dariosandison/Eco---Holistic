import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serializeMdx, jsonSafeMeta } from "../../lib/mdx";
import SEO from "../../components/SEO";
import { mdxComponents } from "../../components/MDXComponents";

const ROOT = process.cwd();
const DIR = path.join(ROOT, "content/guides");

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

export async function getStaticPaths() {
  return { paths: listSlugs().map((s) => ({ params: { slug: s } })), fallback: false };
}

function escapeHtml(s = "") {
  return s.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

// Replace placeholder MDX component <Thing .../> with harmless <span .../>
function sanitiseUnknownPlaceholders(src = "") {
  return src
    .replace(/<\s*Thing\b/g, "<span")
    .replace(/<\s*\/\s*Thing\b/g, "</span");
}

// Generic safe fallback for any unknown Capitalized MDX component
const Fallback = () => (props) => {
  const { children, ...rest } = props || {};
  return <div {...rest}>{children}</div>;
};
const withFallback = (base = {}) =>
  new Proxy(base, {
    get(target, prop) {
      if (prop in target) return target[prop];
      const key = String(prop);
      if (/^[A-Z]/.test(key)) return Fallback();
      return undefined;
    },
  });

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
  } catch (err) {
    fallbackHtml = `<pre style="white-space:pre-wrap">${escapeHtml(content || "")}</pre>`;
  }

  const title = meta.title || params.slug.replace(/-/g, " ");
  const description = meta.description || "";
  const url = `https://www.wild-and-well.store/guides/${params.slug}`;

  return {
    props: {
      slug: params.slug,
      meta,
      mdxSource,
      fallbackHtml,
      seo: {
        title: `${title} — Guides — Wild & Well`,
        description,
        url,
        type: "article",
        breadcrumbs: [
          { name: "Home", item: "https://www.wild-and-well.store/" },
          { name: "Guides", item: "https://www.wild-and-well.store/guides" },
          { name: title, item: url },
        ],
      },
    },
    revalidate: 60 * 60 * 12,
  };
}

export default function GuidePage({ slug, meta, mdxSource, fallbackHtml, seo }) {
  const updated = meta.updated || meta.date;
  const components = withFallback(mdxComponents);

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: meta?.title || "Wild & Well Guide",
              description: meta?.description || undefined,
              datePublished: meta?.date || undefined,
              dateModified: meta?.updated || meta?.date || undefined,
              author: [{ "@type": "Person", name: "Wild & Well Editorial Team]()
