import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serializeMdx, jsonSafeMeta } from "../../lib/mdx";
import SEO from "../../components/SEO";
import { mdxComponents } from "../../components/MDXComponents";

const ROOT = process.cwd();
const DIR = path.join(ROOT, "content/legal");

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
    const cleaned = sanitiseUnknownPlaceholders(content || "");
    mdxSource = await serializeMdx(cleaned);
  } catch {
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
        type: "webpage",
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
  const components = withFallback(mdxComponents);

  return (
    <>
      <SEO {...seo} />
      <div className="container">
        <article className="post">
          <h1 className="post-title">{meta.title || slug.replace(/-/g, " ")}</h1>
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
