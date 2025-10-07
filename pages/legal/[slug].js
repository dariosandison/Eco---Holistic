import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import NewsletterBar from "../../components/NewsletterBar";

const CONTENT_DIR = path.join(process.cwd(), "content", "legal");

/* ----------------------------- MDX utilities ----------------------------- */

function cleanMdx(src) {
  if (!src) return src;
  let s = String(src);

  // Strip HTML comments
  s = s.replace(/<!--[\s\S]*?-->/g, "");

  // Convert <https://...> to [https://...](https://...)
  s = s.replace(/<((https?:\/\/)[^>\s]+)>/g, (_m, url) => `[${url}](${url})`);

  // Neutralize a couple of stray component names if present
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

function SafeLink(props) {
  const { href = "", children, ...rest } = props;
  const isExternal = /^https?:\/\//i.test(href);
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

export default function LegalPage({ slug, meta, mdxSource }) {
  const title = meta?.title || slug;
  return (
    <>
      <Head>
        <title>{title} | Wild & Well</title>
      </Head>

      <SiteHeader />

      <main className="container" style={{ padding: "1.25rem 0 2rem" }}>
        <article className="post">
          <h1>{title}</h1>
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

  const meta = { ...rawMeta };
  ["date", "updated", "datePublished", "dateModified"].forEach((k) => {
    if (!meta[k]) return;
    const v = meta[k];
    meta[k] = v instanceof Date ? v.toISOString() : String(v);
  });

  return { props: { slug: params.slug, meta, mdxSource } };
}
