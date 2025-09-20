// pages/guides/[slug].js
import Head from "next/head";
import fs from "fs";
import path from "path";

/** --- tiny helpers (no external deps) --- **/
function parseFrontMatter(raw = "") {
  // expects:
  // ---
  // title: ...
  // description: ...
  // date: 2025-01-01
  // cover: /cover.jpg or https://...
  // tags: ["tag1","tag2"]
  // ---
  // content...
  const start = raw.startsWith("---") ? 3 : -1;
  if (start === -1) return { data: {}, content: raw };
  const end = raw.indexOf("\n---", start);
  if (end === -1) return { data: {}, content: raw };

  const fmBlock = raw.slice(start, end).trim();
  const body = raw.slice(end + 4).trim();
  const data = {};

  fmBlock.split("\n").forEach((line) => {
    const idx = line.indexOf(":");
    if (idx === -1) return;
    const k = line.slice(0, idx).trim();
    let v = line.slice(idx + 1).trim();
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
      v = v.slice(1, -1);
    }
    if (k === "tags" && v.startsWith("[") && v.endsWith("]")) {
      try { data[k] = JSON.parse(v.replace(/'/g, '"')); } catch { data[k] = []; }
    } else {
      data[k] = v;
    }
  });

  return { data, content: body };
}

function slugify(str = "") {
  return str.toLowerCase().replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-");
}

function escapeHtml(s = "") {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// very small markdown-ish renderer: headings, lists, links, images, code, bold/italic, blockquote
function renderMarkdown(md = "") {
  // normalize line endings
  md = md.replace(/\r\n/g, "\n");

  // code fences ``` ```
  const fencePattern = /```([\s\S]*?)```/g;
  let fences = [];
  md = md.replace(fencePattern, (_, code) => {
    const token = `__CODEBLOCK_${fences.length}__`;
    fences.push(`<pre><code>${escapeHtml(code.trim())}</code></pre>`);
    return token;
  });

  // collect headings for TOC (## and ###)
  const headings = [];
  const lines = md.split("\n");
  for (let i = 0; i < lines.length; i++) {
    const h = lines[i].match(/^(#{1,3})\s+(.*)$/);
    if (h) {
      const level = h[1].length; // 1-3
      const text = h[2].trim();
      const id = slugify(text);
      headings.push({ level, text, id });
      lines[i] = `<h${level} id="${id}">${escapeInline(text)}</h${level}>`;
    } else if (/^>\s+/.test(lines[i])) {
      lines[i] = `<blockquote>${escapeInline(lines[i].replace(/^>\s+/, "").trim())}</blockquote>`;
    } else {
      // lists
      if (/^\s*-\s+/.test(lines[i])) {
        const items = [];
        while (i < lines.length && /^\s*-\s+/.test(lines[i])) {
          items.push(`<li>${escapeInline(lines[i].replace(/^\s*-\s+/, ""))}</li>`);
          i++;
        }
        i--; // step back one because for-loop will i++
        lines[i] = `<ul>${items.join("")}</ul>`;
      } else if (/^\s*\d+\.\s+/.test(lines[i])) {
        const items = [];
        while (i < lines.length && /^\s*\d+\.\s+/.test(lines[i])) {
          items.push(`<li>${escapeInline(lines[i].replace(/^\s*\d+\.\s+/, ""))}</li>`);
          i++;
        }
        i--;
        lines[i] = `<ol>${items.join("")}</ol>`;
      } else if (lines[i].trim() !== "" && !lines[i].startsWith("<h") && !lines[i].startsWith("<blockquote")) {
        lines[i] = `<p>${escapeInline(lines[i].trim())}</p>`;
      }
    }
  }
  let html = lines.join("\n");

  // restore code fences
  fences.forEach((block, idx) => {
    html = html.replace(`__CODEBLOCK_${idx}__`, block);
  });

  return { html, headings };
}

function escapeInline(text = "") {
  // images ![alt](src)
  text = text.replace(/!\[([^\]]*?)\]\((.*?)\)/g, (_, alt, src) =>
    `<img src="${src}" alt="${alt}" loading="lazy" />`
  );
  // links [label](url)
  text = text.replace(/\[([^\]]+?)\]\((https?:\/\/[^\s)]+)\)/g, (_, label, href) =>
    `<a href="${href}" target="_blank" rel="nofollow noopener">${label}</a>`
  );
  // inline code
  text = text.replace(/`([^`]+?)`/g, (_, code) => `<code>${escapeHtml(code)}</code>`);
  // bold **text**
  text = text.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  // italic *text*
  text = text.replace(/(^|[^\*])\*([^*]+)\*(?!\*)/g, "$1<em>$2</em>");
  return text;
}

/** --- data fetching --- **/
export async function getStaticPaths() {
  const dir = path.join(process.cwd(), "content", "guides");
  let files = [];
  try {
    files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
  } catch {
    files = [];
  }
  const paths = files.map((f) => ({ params: { slug: f.replace(/\.md$/, "") } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), "content", "guides", `${params.slug}.md`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = parseFrontMatter(raw);
  const { html, headings } = renderMarkdown(content);

  // derive sensible defaults
  const title = data.title || params.slug.replace(/-/g, " ");
  const description =
    data.description ||
    "Practical guide for healthy, low-tox living from Wild & Well.";
  const date = data.date || "1970-01-01";
  const cover = data.cover || "/cover.jpg";

  return {
    props: {
      slug: params.slug,
      title,
      description,
      date,
      cover,
      html,
      toc: headings.filter((h) => h.level <= 3),
    },
  };
}

/** --- page component --- **/
export default function GuidePage({ slug, title, description, date, cover, html, toc }) {
  const iso = new Date(date).toISOString();

  return (
    <>
      <Head>
        <title>{title} • Wild & Well</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`https://www.wild-and-well.store/guides/${slug}`} />

        {/* Open Graph */}
        <meta property="og:title" content={`${title} • Wild & Well`} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://www.wild-and-well.store/guides/${slug}`} />
        <meta property="og:image" content={cover.startsWith("http") ? cover : `https://www.wild-and-well.store${cover}`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${title} • Wild & Well`} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={cover.startsWith("http") ? cover : `https://www.wild-and-well.store${cover}`} />

        {/* Article structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: title,
              description,
              datePublished: iso,
              dateModified: iso,
              image: cover.startsWith("http") ? cover : `https://www.wild-and-well.store${cover}`,
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `https://www.wild-and-well.store/guides/${slug}`,
              },
              author: { "@type": "Organization", name: "Wild & Well" },
              publisher: {
                "@type": "Organization",
                name: "Wild & Well",
                logo: { "@type": "ImageObject", url: "https://www.wild-and-well.store/favicon.ico" },
              },
            }),
          }}
        />
      </Head>

      <main className="wrap">
        <article className="post">
          <header className="hero">
            {cover && <img className="cover" src={cover} alt="" />}
            <h1>{title}</h1>
            <p className="meta">
              <time dateTime={iso}>
                {new Date(date).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </p>
            {description && <p className="desc">{description}</p>}
          </header>

          {toc && toc.length > 1 && (
            <nav className="toc" aria-label="Table of contents">
              <strong>On this page</strong>
              <ul>
                {toc.map((h) => (
                  <li key={h.id} className={`l${h.level}`}>
                    <a href={`#${h.id}`}>{h.text}</a>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>

        <div className="back">
          <a href="/guides">← All Guides</a>
        </div>
      </main>

      <style jsx>{`
        .wrap { max-width: 880px; margin: 2rem auto; padding: 0 16px; }
        .hero { text-align: left; margin-bottom: 1rem; }
        .cover { width: 100%; height: auto; border-radius: 12px; margin-bottom: 14px; }
        h1 { font-size: 2.1rem; margin: 10px 0 6px; line-height: 1.2; }
        .meta { color: #6b7280; margin: 0 0 8px; }
        .desc { color: #475569; margin: 0 0 8px; }
        .toc {
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 12px 14px;
          background: #fafafa;
          margin: 14px 0 18px;
        }
        .toc strong { display: block; margin-bottom: 6px; }
        .toc ul { list-style: none; padding-left: 0; margin: 0; }
        .toc li { margin: 4px 0; }
        .toc li.l2 { margin-left: 10px; }
        .toc li.l3 { margin-left: 20px; }
        .toc a { color: #0f172a; text-decoration: none; }
        .toc a:hover { text-decoration: underline; }
        .content :global(h1), .content :global(h2), .content :global(h3) { margin: 1.2rem 0 .6rem; }
        .content :global(p) { color: #1f2937; line-height: 1.7; margin: .8rem 0; }
        .content :global(ul), .content :global(ol) { padding-left: 1.2rem; margin: .8rem 0; }
        .content :global(blockquote) {
          border-left: 4px solid #e2e8f0;
          padding: .5rem .9rem; color: #475569; background: #f8fafc; border-radius: 6px;
        }
        .content :global(code) { background: #f3f4f6; padding: 0 .25rem; border-radius: 4px; }
        .content :global(pre) { background: #0b1020; color: #e5e7eb; padding: .9rem; overflow: auto; border-radius: 10px; }
        .content :global(img) { max-width: 100%; height: auto; border-radius: 10px; }
        .back { margin-top: 24px; }
        .back a { text-decoration: none; color: #0f172a; }
        .back a:hover { text-decoration: underline; }
      `}</style>
    </>
  );
}
