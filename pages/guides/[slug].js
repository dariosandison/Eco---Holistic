// pages/guides/[slug].js
import fs from "fs";
import path from "path";
import Head from "next/head";
import SEO from "../../components/SEO";

const CONTENT_DIR = path.join(process.cwd(), "content", "guides");

function parseFrontMatter(raw) {
  let meta = {};
  let body = raw;
  if (raw.startsWith("---")) {
    const end = raw.indexOf("\n---");
    if (end !== -1) {
      const fm = raw.slice(3, end).trim();
      body = raw.slice(end + 4).trim();
      fm.split("\n").forEach((line) => {
        const idx = line.indexOf(":");
        if (idx !== -1) {
          const key = line.slice(0, idx).trim();
          const val = line.slice(idx + 1).trim().replace(/^["']|["']$/g, "");
          meta[key] = val;
        }
      });
    }
  }
  return { meta, body };
}

function mdToHtml(md) {
  // links
  let html = md.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  // headings
  html = html
    .replace(/^###\s+(.*)$/gm, "<h3>$1</h3>")
    .replace(/^##\s+(.*)$/gm, "<h2>$1</h2>")
    .replace(/^#\s+(.*)$/gm, "<h1>$1</h1>");
  // paragraphs
  html = html
    .split(/\n{2,}/)
    .map((block) => (/^\s*<h[1-3]>/.test(block) ? block : `<p>${block.replace(/\n/g, "<br/>")}</p>`))
    .join("\n");
  return html;
}

export default function Guide({ title, description, html, slug }) {
  const pathUrl = `/guides/${slug}`;
  return (
    <>
      <SEO title={title} description={description} path={pathUrl} />
      <Head>
        <link rel="canonical" href={`https://www.wild-and-well.store${pathUrl}`} />
      </Head>

      <main className="container">
        <article className="article">
          <h1>{title}</h1>
          {description && <p className="lead">{description}</p>}
          <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </main>

      <style jsx>{`
        .container { max-width: 900px; margin: 2.5rem auto; padding: 0 16px; }
        .lead { color:#4b5563; font-size:1.05rem; }
        .content :global(h1){ font-size:2rem; margin:1.2rem 0 .6rem; }
        .content :global(h2){ font-size:1.5rem; margin:1rem 0 .5rem; }
        .content :global(h3){ font-size:1.2rem; margin:.8rem 0 .4rem; }
        .content :global(p){ line-height:1.7; margin:.8rem 0; }
        .content :global(a){ text-decoration:underline; }
      `}</style>
    </>
  );
}

export async function getStaticPaths() {
  let files = [];
  try {
    files = fs.readdirSync(CONTENT_DIR);
  } catch {
    files = [];
  }
  const slugs = Array.from(
    new Set(
      files
        .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
        .map((f) => f.replace(/\.mdx?$/, ""))
    )
  );
  return { paths: slugs.map((slug) => ({ params: { slug } })), fallback: false };
}

export async function getStaticProps({ params }) {
  const md = path.join(CONTENT_DIR, `${params.slug}.md`);
  const mdx = path.join(CONTENT_DIR, `${params.slug}.mdx`);
  const filePath = fs.existsSync(md) ? md : fs.existsSync(mdx) ? mdx : null;
  if (!filePath) return { notFound: true };

  const raw = fs.readFileSync(filePath, "utf8");
  const { meta, body } = parseFrontMatter(raw);
  const title = meta.title || body.match(/^#\s+(.+)$/m)?.[1] || params.slug.replace(/-/g, " ");
  const description =
    meta.description ||
    (body.split("\n").find((l) => l.trim()) || "").slice(0, 160);

  const html = mdToHtml(body);
  return { props: { title, description, html, slug: params.slug } };
}
