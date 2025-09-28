// pages/index.js
import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import Link from 'next/link';

// --- Minimal frontmatter/heading parser (no extra deps) ---
function parseFrontmatter(raw) {
  // Returns { title, date } as strings if found
  let title = null;
  let date = null;

  // Try YAML frontmatter between '---' blocks
  if (raw.startsWith('---')) {
    const end = raw.indexOf('\n---', 3);
    if (end !== -1) {
      const fm = raw.slice(3, end).trim(); // content between the markers
      const lines = fm.split(/\r?\n/);
      for (const line of lines) {
        const m = line.match(/^\s*(\w+)\s*:\s*(.+)\s*$/);
        if (m) {
          const key = m[1].toLowerCase();
          const val = m[2].replace(/^['"]|['"]$/g, '').trim();
          if (key === 'title') title = val;
          if (key === 'date') date = val; // keep as string
        }
      }
    }
  }

  // Fallback: first markdown H1
  if (!title) {
    const m = raw.match(/^\s*#\s+(.+)\s*$/m);
    if (m) title = m[1].trim();
  }

  return { title, date };
}

// --- Filesystem utils ---
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
        date: date || null // keep as string or null
      });
    } catch {
      // skip unreadable files
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

      <div className="page-wrap">
        <main className="page-main">
          {/* Hero */}
          <section className="hero">
            <div className="hero__card">
              <div className="hero__frame">
                <h1 style={{ color: '#f4eedb', margin: 0, textAlign: 'center' }}>
                  Your guide to holistic health and eco friendly living
                </h1>
              </div>
              <p className="hero__tagline">
                Curated guides, simple steps, and products that cut the fluff.
              </p>
              <div style={{ textAlign: 'center' }}>
                <Link href="/guides" className="btn">Explore Guides</Link>
                <Link href="/blog" className="btn btn--ghost">Read the Blog</Link>
              </div>
            </div>
          </section>

          {/* Guides grid (cards) */}
          <section className="container" style={{ marginTop: 28 }}>
            <h2 className="section-title">Popular Guides</h2>
            <div className="guides-grid">
              {guides.map((g) => (
                <Link key={g.slug} href={`/guides/${g.slug}`} className="card">
                  <div className="card__banner">
                    <div style={{ fontSize: 32, fontWeight: 800, color: '#F4EEDB' }}>
                      {String(g.title || g.slug).charAt(0).toUpperCase()}
                    </div>
                  </div>
                  <div className="card__title">{g.title || g.slug}</div>
                </Link>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const guidesDir = path.join(process.cwd(), 'content', 'guides');
  const allGuides = readGuides(guidesDir);

  // Optional: sort by date string if present (descending), else by title
  const sorted = [...allGuides].sort((a, b) => {
    if (a.date && b.date) return (b.date > a.date) ? 1 : (b.date < a.date) ? -1 : 0;
    if (a.date) return -1;
    if (b.date) return 1;
    return (a.title || '').localeCompare(b.title || '');
    });

  // Limit for homepage
  const guides = sorted.slice(0, 9);

  // All values are plain JSON-serializable (strings/null) — no Date objects
  return {
    props: { guides },
    revalidate: 60
  };
}
