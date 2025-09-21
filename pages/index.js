// pages/index.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Head from "next/head";

const guidesDir = path.join(process.cwd(), "content", "guides");

function normalizeDate(d) {
  // Accept frontmatter as ISO string like "2025-09-20"
  if (!d) return "";
  if (typeof d === "string") return d;
  if (d instanceof Date) return d.toISOString().slice(0, 10);
  return "";
}

export async function getStaticProps() {
  const files = fs.readdirSync(guidesDir).filter((f) => f.endsWith(".md"));
  const guides = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(guidesDir, file), "utf8");
    const { data } = matter(raw);
    const meta = {
      title: data.title || slug,
      excerpt: data.excerpt || "",
      cover: data.cover || "/cover.png",
      date: normalizeDate(data.date),
      tags: Array.isArray(data.tags) ? data.tags : [],
    };
    return { slug, meta };
  });

  // newest first
  guides.sort((a, b) =>
    (b.meta.date || "").localeCompare(a.meta.date || "")
  );

  return { props: { guides } };
}

export default function Home({ guides }) {
  return (
    <>
      <Head>
        <title>Wild & Well • Bite-size natural living & wellness</title>
        <meta
          name="description"
          content="Bite-size, practical reads for eco-friendly living and holistic wellness."
        />
      </Head>

      <main className="wrap">
        <section className="hero">
          <p className="kicker">Wild & Well</p>
          <h1>Bite-size, practical reads for eco-friendly living and holistic wellness</h1>
          <p className="sub">
            Your guide to eco-living, holistic health, and mindful wellness.
          </p>
        </section>

        <section className="grid">
          {guides.map(({ slug, meta }) => (
            <article key={slug} className="card">
              <Link href={`/guides/${slug}`} className="cardLink">
                <div className="thumb" style={{ backgroundImage: `url(${meta.cover})` }} />
                <div className="body">
                  <h3>{meta.title}</h3>
                  {meta.excerpt && <p>{meta.excerpt}</p>}
                  <div className="meta">
                    {meta.date && <span>{meta.date}</span>}
                    {meta.tags?.length > 0 && (
                      <span className="tags">{meta.tags.slice(0, 2).join(" • ")}</span>
                    )}
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </section>
      </main>

      <style jsx>{`
        .wrap { max-width: 1100px; margin: 0 auto; padding: 28px 16px 56px; }
        .hero { text-align: center; margin: 18px 0 28px; }
        .kicker { font-weight: 700; letter-spacing: .02em; color: #0b3d2e; margin: 0 0 6px; }
        h1 { font-size: clamp(1.6rem, 2.5vw, 2.3rem); margin: 0 0 8px; line-height: 1.2; }
        .sub { color: #4b5563; margin: 0; }
        .grid { display: grid; grid-template-columns: repeat(auto-fill,minmax(260px,1fr)); gap: 18px; margin-top: 24px; }
        .card { border: 1px solid #e5e7eb; border-radius: 12px; background: #fff; overflow: hidden; transition: transform .1s ease, box-shadow .1s ease; }
        .card:hover { transform: translateY(-2px); box-shadow: 0 6px 18px rgba(0,0,0,.06); }
        .cardLink { text-decoration: none; color: inherit; display: block; }
        .thumb { height: 160px; background-size: cover; background-position: center; }
        .body { padding: 14px 14px 16px; }
        h3 { margin: 0 0 6px; font-size: 1.05rem; }
        p { margin: 0; color: #4b5563; }
        .meta { display: flex; gap: 10px; align-items: center; margin-top: 10px; color: #6b7280; font-size: .9rem; }
        .tags { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      `}</style>
    </>
  );
}
