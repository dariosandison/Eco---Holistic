// pages/blog/[slug].js
import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";

// Reuse same helpers as guides (duplicated here to keep this file standalone)
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function inlineMd(s) {
  let t = s;
  t = t.replace(
    /!\[([^\]]*)\]\(([^)]+)\)/g,
    (_, alt, src) =>
      `<img src="${src}" alt="${alt}" loading="lazy" style="max-width:100%;height:auto;" />`
  );
  t = t.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    (_, text, href) =>
      `<a href="${href}" target="_blank" rel="nofollow sponsored noopener">${text}</a>`
  );
  t = t.replace(/`([^`]+)`/g, "<code>$1</code>");
  t = t.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  t = t.replace(/(^|[^\*])\*([^*]+)\*/g, "$1<em>$2</em>");
  return t;
}
function mdToHtml(md) {
  const lines = escapeHtml(md).split("\n");
  const out = [];
  let inUl = false, inOl = false, inBlock = false;
  const closeLists = () => {
    if (inUl) { out.push("</ul>"); inUl = false; }
    if (inOl) { out.push("</ol>"); inOl = false; }
  };
  for (let raw of lines) {
    const line = raw.replace(/\s+$/, "");
    if (/^\s*$/.test(line)) { closeLists(); inBlock = false; continue; }
    if (/^[-*_]{3,}\s*$/.test(line)) { closeLists(); out.push("<hr/>"); continue; }
    if (/^######\s+/.test(line)) { closeLists(); out.push(`<h6>${inlineMd(line.replace(/^######\s+/, ""))}</h6>`); continue; }
    if (/^#####\s+/.test(line))  { closeLists(); out.push(`<h5>${inlineMd(line.replace(/^#####\s+/, ""))}</h5>`); continue; }
    if (/^####\s+/.test(line))   { closeLists(); out.push(`<h4>${inlineMd(line.replace(/^####\s+/, ""))}</h4>`); continue; }
    if (/^###\s+/.test(line))    { closeLists(); out.push(`<h3>${inlineMd(line.replace(/^###\s+/, ""))}</h3>`); continue; }
    if (/^##\s+/.test(line))     { closeLists(); out.push(`<h2>${inlineMd(line.replace(/^##\s+/, ""))}</h2>`); continue; }
    if (/^#\s+/.test(line))      { closeLists(); out.push(`<h1>${inlineMd(line.replace(/^#\s+/, ""))}</h1>`); continue; }
    if (/^>\s+/.test(line))      { closeLists(); out.push(`<blockquote><p>${inlineMd(line.replace(/^>\s+/, ""))}</p></blockquote>`); continue; }
    if (/^\s*-\s+/.test(line))   { if (!inUl) { closeLists(); out.push("<ul>"); inUl = true; } out.push(`<li>${inlineMd(line.replace(/^\s*-\s+/, ""))}</li>`); continue; }
    if (/^\s*\d+\.\s+/.test(line)) { if (!inOl) { closeLists(); out.push("<ol>"); inOl = true; } out.push(`<li>${inlineMd(line.replace(/^\s*\d+\.\s+/, ""))}</li>`); continue; }
    if (!inBlock) { closeLists(); out.push(`<p>${inlineMd(line)}</p>`); inBlock = true; }
    else { const last = out.pop(); out.push(last.replace(/<\/p>$/, " " + inlineMd(line) + "</p>")); }
  }
  closeLists();
  return out.join("\n");
}

export default function PostPage({ slug, meta, html }) {
  const title = meta?.title || slug.replace(/-/g, " ");
  const desc =
    meta?.description || meta?.excerpt || "Wild & Well — blog post.";
  const cover = meta?.cover || "/cover.png";

  return (
    <>
      <Head>
        <title>{title} • Wild & Well</title>
        <meta name="description" content={desc} />
        <meta property="og:title" content={`${title} • Wild & Well`} />
        <meta property="og:description" content={desc} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={cover} />
        <link rel="canonical" href={`https://www.wild-and-well.store/blog/${slug}`} />
      </Head>

      <header className="hero">
        <h1>{title}</h1>
        {meta?.subtitle && <p className="subtitle">{meta.subtitle}</p>}
      </header>

      {cover && (
        <div className="cover">
          <img src={cover} alt={title} onError={(e) => (e.currentTarget.style.display = "none")} />
        </div>
      )}

      <main className="wrap">
        <article
          className="content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <p className="fine">
          <em>
            As an Amazon Associate, we earn from qualifying purchases. This
            doesn’t affect the price you pay.
          </em>
        </p>
      </main>

      <style jsx>{`
        .hero { text-align: center; padding: 28px 16px 10px; }
        h1 { margin: 0 0 6px; font-size: 2rem; }
        .subtitle { color: #6b7280; margin: 0; }
        .cover { max-width: 980px; margin: 10px auto 0; }
        .cover img { width: 100%; height: auto; border-radius: 12px; }
        .wrap { max-width: 900px; margin: 18px auto 40px; padding: 0 16px; }
        .content :global(h2) { margin-top: 1.4rem; }
        .content :global(h3) { margin-top: 1.1rem; }
        .content :global(p) { line-height: 1.75; color: #374151; }
        .content :global(a) { color: #0f766e; text-decoration: underline; }
        .content :global(ul), .content :global(ol) { padding-left: 1.25rem; }
        .fine { color: #6b7280; font-size: .9rem; margin-top: 20px; }
      `}</style>
    </>
  );
}

export async function getStaticPaths() {
  const dir = path.join(process.cwd(), "content", "blog");
  const paths = fs.existsSync(dir)
    ? fs
        .readdirSync(dir)
        .filter((f) => f.endsWith(".md"))
        .map((f) => ({ params: { slug: f.replace(/\.md$/, "") } }))
    : [];
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const file = path.join(process.cwd(), "content", "blog", `${params.slug}.md`);
  if (!fs.existsSync(file)) return { notFound: true };

  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);

  const meta = {
    ...data,
    date:
      typeof data?.date === "string"
        ? data.date
        : data?.date
        ? new Date(data.date).toISOString().slice(0, 10)
        : null,
  };

  const html = mdToHtml(content);

  return {
    props: {
      slug: params.slug,
      meta,
      html,
    },
  };
}
