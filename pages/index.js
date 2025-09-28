// pages/index.js
import Head from 'next/head';
import Link from 'next/link';

// If you already have helpers in lib/content, we’ll use them.
// They were referenced in earlier builds, so this should match your project.
import { getDocs } from '../lib/content'; // getDocs({ dir, fields })

// ---------- Utilities ----------
// Deep-serialize any Date instances (and nested arrays/objects) to ISO strings
function serializeDates(value) {
  if (value instanceof Date) return value.toISOString();
  if (Array.isArray(value)) return value.map(serializeDates);
  if (value && typeof value === 'object') {
    const out = {};
    for (const k of Object.keys(value)) out[k] = serializeDates(value[k]);
    return out;
  }
  return value;
}

// ---------- Page ----------
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
        {/* Header is handled by your layout/_app if present */}

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
                    {/* Simple letter avatar if you don’t have images */}
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

        {/* Footer is handled by your layout/_app if present */}
      </div>
    </>
  );
}

// ---------- Data ----------
export async function getStaticProps() {
  // Pull a small set of fields for the home page cards
  // (Adjust fields to match what your lib/content supports)
  const fields = ['slug', 'title', 'date', 'excerpt'];

  // Read guides from your content directory
  // If your project keeps guides somewhere else, change 'content/guides'
  const rawGuides =
    (await getDocs({ dir: 'content/guides', fields })) ||
    [];

  // Sort (optional) – newest first if dates exist
  const sorted = [...rawGuides].sort((a, b) => {
    const ad = a.date ? new Date(a.date).getTime() : 0;
    const bd = b.date ? new Date(b.date).getTime() : 0;
    return bd - ad;
  });

  // Limit for homepage
  const guides = sorted.slice(0, 9);

  // 🔧 IMPORTANT: make all props JSON-serializable (convert Date objects)
  const props = serializeDates({ guides });

  return {
    props,
    // Revalidate to keep SSG fast but allow content updates
    revalidate: 60
  };
}
