import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serializeMdx, jsonSafeMeta } from "../../lib/mdx";
import SEO from "../../components/SEO";
import { mdxComponents } from "../../components/MDXComponents";

const ROOT = process.cwd();
const DIR = path.join(ROOT, "content/legal");

// Replace the placeholder MDX component <Thing .../> with a harmless <span .../>
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

export async function getStaticProps({ params }) {
  const filepath = fileFor(params.slug);
  if (!filepath) return { notFound: true };

  const raw = fs.readFileSync(filepath, "utf8");
  const { data, content } = matter(raw);
  const meta = jsonSafeMeta(data || {});

  let mdxSource = null;
  let fallbackHtml = null;
  try {
    const cleaned =
