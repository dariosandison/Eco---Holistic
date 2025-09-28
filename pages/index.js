// pages/index.js
import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import Link from 'next/link';

// --- Minimal frontmatter/heading parser (no extra deps) ---
function parseFrontmatter(raw) {
  let title = null;
  let date = null;

  if (raw.startsWith('---')) {
    const end = raw.indexOf('\n---', 3);
    if (end !== -1) {
      const fm = raw.slice(3, end).trim();
      const lines = fm.split(/\r?\n/);
      for (const line of lines) {
        const m = line.match(/^\s*([\w-]+)\s*:\s*(.+)\s*$/);
        if (m) {
          const key = m[1].toLowerCase();
          const val = m[2].replace(/^['"]|['"]$/g, '').trim();
          if (key === 'title') title = val;
          if (key === 'date') date = val; // keep as string
        }
      }
    }
  }
  if (!title) {
    const m = raw.match(/^\s*#\s+(.+)\s*$/m);
    if (m) title = m[1].trim();
  }
  return { title, date };
}

function readGuides(dir) {
  let files = [];
  try {
    files = fs.readdirSync(dir);
  } catch (_) {
    return [];
  }

  const entries = [];
  for (const file of files) {
    if (!/\.(md|mdx)$/i.test(file)) continue;
    const full = path.join(dir, file);
    try {
      const raw = fs.readFileSync(full, 'utf8');
      const { title, date } = parseFrontmatter(raw);
      const slug = file.replace(/\.(md|mdx)$/i, '');
      entries.push({
        slug,
        title: title || slug.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
        date: date || null
      });
    } catch {
      // ignore unreadable files
    }
  }
  return entries;
}

export default function Home({ guides }) {
  return (
    <>
      <Head>
        <title>Wild &amp; Well — Your guide to holistic health and eco friendly living</title>
        <meta
          name="description"
          content="Your guide to holistic health and eco friendly living"
        />
      </Head>

      {/* Logo centered at top */}
      <section className="hero">
        <div className="container hero-inner">
          <img src="/logo.svg" alt="Wild & Well" className="hero-logo" />
          <p className="hero-slogan">
            Your guide to holistic health and eco friendly living
          </p>
        </div>
      </section>

      {/* Guides grid */}
      <section className="guides">
        <div className="container">
          <h2 className="section-title">Latest Guides</h2>
          <div className="grid">
            {guides.map((g) => (
              <Link key={g.slug} href={`/guides/${g.slug}`} className="card">
                <h3>{g.title}</h3>
                {g.date && <p className="date">{g.date}</p>}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const guidesDir = path.join(process.cwd(), 'content/guides');
  const guides = readGuides(guidesDir);
  return {
    props: { guides }
  };
}
