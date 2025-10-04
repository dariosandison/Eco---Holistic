import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NewsletterModal from "../../components/NewsletterModal";

const CONTENT_DIR = path.join(process.cwd(), "content", "guides");

// --- utilities ---------------------------------------------------------------

function cleanMdx(src) {
  if (!src) return src;
  let s = String(src);

  // 1) Strip HTML comments
  s = s.replace(/<!--[\s\S]*?-->/g, "");

  // 2) Convert angle-bracket autolinks <https://...> to markdown links
  s = s.replace(/<((https?:\/\/)[^>\s]+)>/g, (_m, url) => `[${url}](${url})`);

  // 3) Neutralize specific unknown JSX tags that caused crashes
  const unknown = ["Thing", "Audience"];
  unknown.forEach((name) => {
    // <Thing ... />
    const selfClose = new RegExp(`<\\s*${name}\\b([^>]*)\\/\\s*>`, "g");
    s = s.replace(selfClose, `<div$1></div>`);
    // <Thing>...</Thing>
    const pair = new RegExp(`<\\s*${name}\\b([^>]*)>([\\s\\S]*?)<\\s*\\/\\s*${name}\\s*>`, "g");
    s = s.replace(pair, `<div$1>$2</div>`);
  });

  // 4) Replace lines starting with common "note!" style with bold labels
  s = s.replace(/^\s*!{1,3}\s*(important|note|tip)?:?/gim, (_m, lbl) => `**${(lbl||"Note").trim()}:**`);

  return s;
}

function loadFile(slug) {
  const full = path.join(CONTENT_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(full, "utf8");
  const { content, data } = matter(raw);
  return { content, meta: data || {} };
}

function listSlugs() {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs.readdirSync(CONTENT_DIR)
    .filter(f => f.endsWith(".mdx"))
    .map(f => f.replace(/\.mdx$/, ""));
}

// External+internal link component that fixes bad .mdx hrefs
function SafeLink(props){
  let { href = "", children, ...rest } = props;
  const text = typeof children === "string" ? children : null;

  // Fix raw .mdx file links like ../../pages/privacy.mdx
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

  const isExternal = /^https?:\/\//i.test(href);
  const rel = isExternal ? "nofollow sponsored noopener noreferrer" : undefined;
  const target = isExternal ? "_blank" : undefined;

  return (
    <a href={href} rel={rel} target={target} {...rest}>
      {children ?? text ?? href}
    </a>
  );
}

const mdxComponents = { a: SafeLink };

// --- page --------------------------------------------------------------------

export default function GuidePage({ slug, meta, mdxSource }) {
  const title = meta?.title || slug;
  const desc = meta?.description || "Practical wellness guide from Wild & Well";

  return (
    <>
      <Head>
        <title>{title} | Wild & Well</title>
        <meta name="description" content={desc} />
      </Head>
      <Header />
      <main className="container" style={{padding:"1.25rem 0 2rem"}}>
        <article className="post">
          <h1>{title}</h1>
          {meta?.updated && (
            <p className="muted">Updated {meta.updated}</p>
          )}
          <MDXRemote {...mdxSource} components={mdxComponents} />
        </article>
      </main>
      <Footer />
      <NewsletterModal />
    </>
  );
}

export async function getStaticPaths() {
  const slugs = listSlugs();
  return {
    paths: slugs.map(slug => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { content, meta: rawMeta } = loadFile(params.slug);

  // clean + serialize MDX
  const cleaned = cleanMdx(content);
  const mdxSource = await serialize(cleaned, {
    parseFrontmatter: false,
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
      ],
      format: "mdx",
    },
  });

  // ensure JSON-serializable meta (fixes Date object error)
  const meta = { ...rawMeta };
  ["date","updated","datePublished","dateModified"].forEach(k=>{
    if (!meta[k]) return;
    const v = meta[k];
    meta[k] = (v instanceof Date) ? v.toISOString() : String(v);
  });

  return {
    props: {
      slug: params.slug,
      meta,
      mdxSource,
    },
  };
}
