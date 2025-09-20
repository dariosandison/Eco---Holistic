import Head from "next/head";
import fs from "fs";
import path from "path";
import Link from "next/link";

// very small front-matter parser (no extra deps)
// expects lines like: key: "value"  and tags: ["a","b"]
function parseFrontmatter(src) {
  const fm = { title: "", excerpt: "", date: "", cover: "", tags: [] };
  if (src.startsWith("---")) {
    const end = src.indexOf("---", 3);
    if (end !== -1) {
      const head = src.slice(3, end).trim();
      head.split("\n").forEach((line) => {
        const m = line.match(/^(\w+):\s*(.*)$/);
        if (!m) return;
        const key = m[1];
        let val = m[2].trim();
        // strip quotes
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

  return {
    props: { guides }, // JSON-serialisable only
  };
}

export default function Home({ guides }) {
  return (
    <>
      <Head>
        <title>Wild & Well — Eco + Holistic Guides</title>
        <meta
          name="description"
          content="Practical guides for eco-friendly living and holistic wellness: water filters, safer cleaning, low-waste body care, and simpler supplements."
        />
      </Head>

      <main className="wrap">
        <section className="hero">
          <h1>Wild & Well</h1>
          <p className="tagline">
            Practical, low-tox choices for your home, body, and pantry — minus the
            overwhelm.
          </p>
        </section>

        <section className="grid">
          {guides.map((g) => (
            <article key={g.slug} className="card">
              <Link href={`/guides/${g.slug}`} className="imageWrap" aria-label={g.title}>
                {/* use <img> to avoid remote loader config */}
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

        <p className="fineprint">
          Some links on this site are affiliate links. We may earn a small commission at no
          extra cost to you. As an Amazon Associate, we earn from qualifying purchases.
        </p>
      </main>

      <style jsx>{`
        .wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 32px 16px 56px;
        }
        .hero {
          text-align: center;
          margin: 10px 0 24px;
        }
        h1 {
          font-size: 2.2rem;
          margin: 0 0 6px;
        }
        .tagline {
          color: #4b5563;
          margin: 0;
          font-size: 1.05rem;
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
