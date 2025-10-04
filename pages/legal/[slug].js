import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

// Where the MDX/MD files live for legal pages
const LEGAL_DIR = path.join(process.cwd(), "content", "legal");

// --- Helpers ---------------------------------------------------------------

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

// Return a components map that never crashes for unknown MDX tags
function withFallback(base = {}) {
  return new Proxy(base, {
    get(target, prop) {
      if (prop in target) return target[prop];
      if (typeof prop === "string" && /^[A-Z]/.test(prop)) {
        return (props) => <div {...props} />;
      }
      return undefined;
    },
  });
}

// --- Page ------------------------------------------------------------------

export default function LegalPage({ slug, meta, mdxSource }) {
  const components = withFallback({});

  const pageTitle = meta?.title || titleFromSlug(slug);
  const pageDesc = meta?.description || "";

  return (
    <>
      <Head>
        <title>{pageTitle} | Wild &amp; Well</title>
        {pageDesc ? <meta name="description" content={pageDesc} /> : null}
      </Head>

      <div className="container">
        <article className="post">
          <header className="post-header">
            <h1>{pageTitle}</h1>
          </header>

          <div className="post-content">
            <MDXRemote {...mdxSource} components={components} />
          </div>
        </article>
      </div>
    </>
  );
}

// --- Data ------------------------------------------------------------------

export async function getStaticPaths() {
  const slugs = getAllSlugs(LEGAL_DIR);
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const loaded = loadBySlug(LEGAL_DIR, params.slug);
  if (!loaded) {
    return { notFound: true };
  }

  // Compile MDX
  const mdxSource = await serialize(loaded.content, {
    scope: loaded.meta || {},
    parseFrontmatter: false,
  });

  return {
    props: {
      slug: params.slug,
      meta: loaded.meta || {},
      mdxSource,
    },
  };
}
