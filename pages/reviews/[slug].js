import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serializeMdx, jsonSafeMeta } from "../../lib/mdx";
import SEO from "../../components/SEO";
import { mdxComponents } from "../../components/MDXComponents";

const ROOT = process.cwd();
const DIR = path.join(ROOT, "content/reviews");

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
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
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
    mdxSource = await serializeMdx(content || "");
  } catch {
    fallbackHtml = `<pre style="white-space:pre-wrap">${escapeHtml(content || "")}</pre>`;
  }

  const title = meta.title || params.slug.replace(/-/g, " ");
  const description = meta.description || "";
  const url = `https://www.wild-and-well.store/reviews/${params.slug}`;

  return {
    props: {
      slug: params.slug,
      meta,
      mdxSource,
      fallbackHtml,
      seo: {
        title: `${title} — Reviews — Wild & Well`,
        description,
        url,
        type: "article",
        breadcrumbs: [
          { name: "Home", item: "https://www.wild-and-well.store/" },
          { name: "Reviews", item: "https://www.wild-and-well.store/reviews" },
          { name: title, item: url },
        ],
      },
    },
    revalidate: 60 * 60 * 12,
  };
}

export default function ReviewPage({ slug, meta, mdxSource, fallbackHtml, seo }) {
  const updated = meta.updated || meta.date;
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Review",
              headline: meta?.title || "Product Review",
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
          <p className="post-meta">
            {meta.date ? <>Published {new Date(meta.date).toLocaleDateString()}</> : null}
            {meta.date && updated ? <> · </> : null}
            {updated ? <>Updated {new Date(updated).toLocaleDateString()}</> : null}
            {meta.tags ? (
              <> · {Array.isArray(meta.tags) ? meta.tags.join(", ") : meta.tags}</>
            ) : null}
          </p>

          {mdxSource ? (
            <MDXRemote {...mdxSource} components={mdxComponents} />
          ) : (
            <div dangerouslySetInnerHTML={{ __html: fallbackHtml || "" }} />
          )}
        </article>
      </div>
    </>
  );
}
