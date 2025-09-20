import Head from "next/head";
import Link from "next/link";
import fs from "fs";
import path from "path";
import { useMemo, useState } from "react";

// same tiny front-matter parser used elsewhere
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

export async function getStaticProps() {
  const guidesDir = path.join(process.cwd(), "content", "guides");
  const files = fs.readdirSync(guidesDir).filter((f) => f.endsWith(".md"));

  const guides = files
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(guidesDir, file), "utf8");
      const { data } = parseFrontmatter(raw);
      return {
        slug,
        title: data.title || slug,
        excerpt: data.excerpt || "",
        date: data.date || "",
        cover: data.cover || "/cover.jpg",
        tags: Array.isArray(data.tags) ? data.tags : [],
      };
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  // collect unique tags
  const tagSet = new Set();
  guides.forEach((g) => (g.tags || []).forEach((t) => tagSet.add(t)));
  const allTags = Array.from(tagSet).sort((a, b) => a.localeCompare(b));

  return { props: { guides, allTags } };
}

export default function GuidesIndex({ guides, allTags }) {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState("");

  const filtered = useMemo(() => {
    const ql = q.trim().toLowerCase();
    return guides.filter((g) => {
      const matchesQ =
        !ql ||
        g.title.toLowerCase().includes(ql) ||
        g.excerpt.toLowerCase().includes(ql) ||
        (g.tags || []).some((t) => t.toLowerCase().includes(ql));
      const matchesTag = !tag || (g.tags || []).includes(tag);
      return matchesQ && matchesTag;
    });
  }, [guides, q, tag]);

  return (
    <>
      <Head>
        <title>All Guides • Wild & Well</title>
        <meta
          name="description"
          content="Browse every Wild & Well guide: water filters, safer cleaning, low-waste body care, and supplements with simpler ingredients."
        />
      </Head>

      <main className="wrap">
        <header className="hero">
          <h1>All Guides</h1>
          <p className="deck">
            Bite-size, practical reads for eco-friendly living and holistic wellness.
          </p>

          <div className="controls">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search guides (e.g., “water”, “protein”, “cleaning”)"
              aria-label="Search guides"
            />
            <div className="tagrow">
              <button
                className={!tag ? "chip active" : "chip"}
                onClick={() => setTag("")}
              >
                All
              </button>
              {allTags.map((t) => (
                <button
                  key={t}
                  className={tag === t ? "chip active" : "chip"}
                  onClick={() => setTag(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </header>

        <section className="grid">
          {filtered.map((g) => (
            <article key={g.slug} className="card">
              <Link href={`/guides/${g.slug}`} className="imageWrap" aria-label={g.title}>
                <img src={g.cover || "/cover.jpg"} alt="" />
              </Link>
              <div className="body">
                <h2>
                  <Link href={`/guides/${g.slug}`}>{g.title}</Link>
                </h2>
                {g.excerpt && <p className="excerpt">{g.excerpt}</p>}
                {g.tags?.length > 0 && (
                  <div className="tags">
                    {g.tags.slice(0, 4).map((t) => (
                      <span className="tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                <Link href={`/guides/${g.slug}`} className="cta">
                  Read guide →
                </Link>
              </div>
            </article>
          ))}
        </section>

        {filtered.length === 0 && (
          <p className="empty">No matches. Try a different search or tag.</p>
        )}

        <p className="fineprint">
          Some links are affiliate links. We may earn a small commission at no extra cost to
          you. As an Amazon Associate, we earn from qualifying purchases.
        </p>
      </main>

      <style jsx>{`
        .wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 30px 16px 56px;
        }
        .hero {
          text-align: center;
          margin-bottom: 12px;
        }
        h1 {
          font-size: 2rem;
          margin: 0 0 6px;
        }
        .deck {
          color: #4b5563;
          margin: 0 0 14px;
        }
        .controls {
          display: grid;
          gap: 12px;
          justify-items: center;
        }
        input {
          width: min(680px, 100%);
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          padding: 10px 12px;
          font-size: 1rem;
        }
        .tagrow {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: center;
        }
        .chip {
          border: 1px solid #d1d5db;
          background: #fff;
          padding: 6px 10px;
          border-radius: 999px;
          font-size: 0.9rem;
          cursor: pointer;
        }
        .chip.active {
          background: #eff6ff;
          color: #1d4ed8;
          border-color: #bfdbfe;
          font-weight: 600;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 18px;
          margin-top: 20px;
        }
        .card {
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          overflow: hidden;
          background: #fff;
          display: flex;
          flex-direction: column;
        }
        .imageWrap {
          display: block;
          aspect-ratio: 16/9;
          background: #f3f4f6;
          overflow: hidden;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .body {
          padding: 14px 14px 12px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        h2 {
          font-size: 1.1rem;
          line-height: 1.35;
          margin: 0;
        }
        .excerpt {
          color: #4b5563;
          margin: 0;
          min-height: 44px;
        }
        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .tag {
          font-size: 0.8rem;
          color: #2563eb;
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          padding: 2px 8px;
          border-radius: 999px;
        }
        .cta {
          margin-top: 4px;
          font-weight: 600;
          text-decoration: none;
        }
        .empty {
          text-align: center;
          color: #6b7280;
          margin-top: 18px;
        }
        .fineprint {
          color: #6b7280;
          font-size: 0.85rem;
          text-align: center;
          margin-top: 28px;
        }
      `}</style>
    </>
  );
}
