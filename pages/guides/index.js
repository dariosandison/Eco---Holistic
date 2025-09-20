// pages/guides/index.js
import Head from "next/head";
import Link from "next/link";
import path from "path";
import fs from "fs";

function parseFrontMatter(raw = "") {
  // very small YAML-ish parser for our simple keys
  const fmMatch = raw.startsWith("---") ? raw.indexOf("\n---", 3) : -1;
  if (fmMatch === -1) return { data: {}, content: raw };
  const fmBlock = raw.slice(3, fmMatch + 1).trim(); // between --- ---
  const body = raw.slice(fmMatch + 5).trim();

  const data = {};
  fmBlock.split("\n").forEach((line) => {
    const idx = line.indexOf(":");
    if (idx === -1) return;
    const k = line.slice(0, idx).trim();
    let v = line.slice(idx + 1).trim();
    // strip quotes
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
      v = v.slice(1, -1);
    }
    // simple array handling: tags: ["a","b"]
    if (k === "tags" && v.startsWith("[") && v.endsWith("]")) {
      try { data[k] = JSON.parse(v.replace(/'/g, '"')); }
      catch { data[k] = []; }
    } else {
      data[k] = v;
    }
  });

  return { data, content: body };
}

export async function getStaticProps() {
  const guidesDir = path.join(process.cwd(), "content", "guides");
  let entries = [];
  try {
    const files = fs.readdirSync(guidesDir).filter((f) => f.endsWith(".md"));
    entries = files.map((file) => {
      const slug = file.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(guidesDir, file), "utf8");
      const { data } = parseFrontMatter(raw);
      return {
        slug,
        title: data.title || slug.replace(/-/g, " "),
        description: data.description || "",
        date: data.date || "1970-01-01",
      };
    });
  } catch (e) {
    // directory may not exist yet
    entries = [];
  }

  // sort by date desc
  entries.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

  return { props: { entries } };
}

export default function GuidesIndex({ entries }) {
  return (
    <>
      <Head>
        <title>Guides • Wild & Well</title>
        <meta
          name="description"
          content="Practical guides for healthy, low-tox living: wellness kickstart, low-waste swaps, safer cleaning, water filters and more."
        />
      </Head>

      <main className="wrap">
        <h1>Guides</h1>
        <p className="intro">
          Start with the 7-Day Wellness Kickstart, then explore low-tox swaps and simple, healthy habits.
        </p>

        {entries.length === 0 ? (
          <p>No guides yet.</p>
        ) : (
          <ul className="list">
            {entries.map((g) => (
              <li key={g.slug} className="card">
                <Link href={`/guides/${g.slug}`} className="title">
                  {g.title}
                </Link>
                {g.description && <p className="desc">{g.description}</p>}
                <span className="date">{new Date(g.date).toLocaleDateString()}</span>
              </li>
            ))}
          </ul>
        )}
      </main>

      <style jsx>{`
        .wrap { max-width: 1100px; margin: 2rem auto; padding: 0 16px; }
        h1 { margin: 0 0 8px; font-size: 2rem; }
        .intro { color: #475569; margin: 0 0 18px; }
        .list { list-style: none; padding: 0; margin: 0; display: grid; gap: 14px;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); }
        .card {
          border: 1px solid #e5e7eb; border-radius: 10px; background: #fff; padding: 16px;
          display: flex; flex-direction: column; gap: 6px; position: relative;
          transition: transform .08s ease, box-shadow .08s ease;
        }
        .card:hover { transform: translateY(-1px); box-shadow: 0 6px 18px rgba(2,12,27,.06); }
        .title { font-weight: 700; text-decoration: none; color: #0f172a; }
        .title:hover { text-decoration: underline; }
        .desc { color: #4b5563; margin: 0; }
        .date { color: #64748b; font-size: .85rem; }
      `}</style>
    </>
  );
}
