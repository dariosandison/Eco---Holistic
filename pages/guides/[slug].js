import fs from "fs";
import path from "path";
import Head from "next/head";
import Link from "next/link";
import { remark } from "remark";
import html from "remark-html";

// tiny front-matter parser (kept in sync with index.js)
function parseFrontmatter(src) {
  const fm = { title: "", excerpt: "", date: "", cover: "/cover.jpg", tags: [] };
  if (src.startsWith("---")) {
    const end = src.indexOf("---", 3);
    if (end !== -1) {
      const head = src.slice(3, end).trim();
      head.split("\n").forEach((line) => {
        const m = line.match(/^(\w+):\s*(.*)$/);
        if (!m) return;
        const key = m[1];
        let val = m[2].trim();
        if (
          (val.startsWith('"') && val.endsWith('"')) ||
          (val.startsWith("'") && val.endsWith("'"))
        ) {
          val = val.slice(1, -1);
        } else if (val.startsWith("[")) {
          try {
            val = JSON.parse(val.replace(/'/g, '"'));
          } catch {
            val = [];
          }
        }
        fm[key] = val;
      });
      const content = src.slice(end + 3).trim();
      return { data: fm, content };
    }
  }
  return { data: fm, content: src };
}

export async function getStaticPaths() {
  const dir = path.join(process.cwd(), "content", "guides");
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
  const paths = files.map((file) => ({
    params: { slug: file.replace(/\.md$/, "") },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), "content", "guides", `${params.slug}.md`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = parseFrontmatter(raw);

  const processed = await remark().use(html).process(content);
  const htmlContent = processed.toString();

  return {
    props: {
      slug: params.slug,
      frontmatter: {
        title: data.title || params.slug,
        excerpt: data.excerpt || "",
        date: data.date || "",
        cover: data.cover || "/cover.jpg",
        tags: Array.isArray(data.tags) ? data.tags : [],
      },
      htmlContent,
    },
  };
}

export default function GuidePage({ slug, frontmatter, htmlContent }) {
  const { title, excerpt, cover, tags } = frontmatter;

  return (
    <>
      <Head>
        <title>{title} • Wild & Well</title>
        {excerpt && <meta name="description" content={excerpt} />}
        <meta property="og:title" content={`${title} • Wild & Well`} />
        {excerpt && <meta property="og:description" content={excerpt} />}
        <meta property="og:image" content={cover || "/cover.jpg"} />
      </Head>

      <main className="wrap">
        <nav className="crumbs">
          <Link href="/">Home</Link> <span>›</span>{" "}
          <Link href="/#guides">Guides</Link> <span>›</span>{" "}
          <span className="here">{title}</span>
        </nav>

        <article className="post">
          <header className="header">
            <h1>{title}</h1>
            {excerpt && <p className="deck">{excerpt}</p>}
            {tags?.length > 0 && (
              <div className="tags">
                {tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </header>

          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          <footer className="note">
            <p>
              Some links on this page are affiliate links. We may earn a small commission at no
              extra cost to you. As an Amazon Associate, we earn from qualifying purchases.
            </p>
          </footer>
        </article>

        <Link href="/" className="back">
          ← Back to all guides
        </Link>
      </main>

      <style jsx>{`
        .wrap {
          max-width: 820px;
          margin: 0 auto;
          padding: 28px 16px 56px;
        }
        .crumbs {
          font-size: 0.9rem;
          color: #6b7280;
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 8px;
        }
        .here {
          color: #111827;
        }
        .header h1 {
          font-size: 2rem;
          margin: 6px 0 6px;
          line-height: 1.2;
        }
        .deck {
          color: #4b5563;
          margin: 0 0 10px;
        }
        .tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 8px;
        }
        .tag {
          font-size: 0.8rem;
          color: #2563eb;
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          padding: 2px 8px;
          border-radius: 999px;
        }
        .content :global(h2) {
          font-size: 1.4rem;
          margin-top: 22px;
        }
        .content :global(p),
        .content :global(li) {
          color: #1f2937;
          line-height: 1.7;
        }
        .content :global(ul) {
          padding-left: 22px;
        }
        .note {
          margin-top: 18px;
          padding-top: 14px;
          border-top: 1px solid #e5e7eb;
          color: #6b7280;
          font-size: 0.9rem;
        }
        .back {
          display: inline-block;
          margin-top: 20px;
          text-decoration: none;
          font-weight: 600;
        }
      `}</style>
    </>
  );
}
