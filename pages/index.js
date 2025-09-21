import Head from 'next/head';
import Link from 'next/link';
import { getAllGuides } from '../src/lib/guides';

export default function Home({ featured, latest }) {
  return (
    <>
      <Head>
        <title>Wild & Well — Eco-living, holistic health, mindful wellness</title>
        <meta
          name="description"
          content="Practical, non-technical guides for healthier homes and habits. Curated picks, what to avoid and why, and simple swaps that actually help."
        />
        <link rel="canonical" href="https://www.wild-and-well.store/" />
      </Head>

      <main>
        <section className="hero">
          <div className="hero__inner">
            <h1>Wild & Well</h1>
            <p className="tagline">
              Your guide to eco-living, holistic health, and mindful wellness.
            </p>
          </div>
        </section>

        <section className="block">
          <div className="block__head">
            <h2>Editor’s Picks</h2>
            <Link className="more" href="/guides">View all guides →</Link>
          </div>
          <div className="grid">
            {featured.map((g) => (
              <GuideCard key={g.slug} g={g} />
            ))}
          </div>
        </section>

        <section className="block">
          <div className="block__head">
            <h2>Latest Guides</h2>
            <Link className="more" href="/guides">Browse all →</Link>
          </div>
          <div className="grid">
            {latest.map((g) => (
              <GuideCard key={g.slug} g={g} />
            ))}
          </div>
        </section>
      </main>

      <style jsx>{`
        main { max-width: 1100px; margin: 0 auto; padding: 24px; }
        .hero { padding: 48px 0 8px; }
        .hero__inner { text-align: left; }
        h1 { margin: 0 0 8px; font-size: 36px; line-height: 1.2; }
        .tagline { margin: 0; color: #444; font-size: 18px; }
        .block { margin: 40px 0; }
        .block__head { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; margin-bottom: 14px; }
        .block__head h2 { margin: 0; font-size: 22px; }
        .more { color: #0a7; text-decoration: none; font-size: 14px; }
        .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 16px; }
        .card { display: block; border: 1px solid #eee; border-radius: 10px; overflow: hidden; text-decoration: none; color: inherit; background: #fff; transition: box-shadow .2s ease, transform .02s ease; }
        .card:hover { box-shadow: 0 6px 18px rgba(0,0,0,0.06); transform: translateY(-1px); }
        .thumb { aspect-ratio: 16/9; background: #f6f6f6; display: flex; align-items: center; justify-content: center; font-size: 13px; color: #888; }
        .body { padding: 12px; }
        .title { margin: 0 0 6px; font-size: 16px; line-height: 1.3; }
        .excerpt { margin: 0; font-size: 14px; color: #555; }
        .meta { margin-top: 8px; font-size: 12px; color: #777; }
      `}</style>
    </>
  );
}

function GuideCard({ g }) {
  return (
    <Link href={`/guides/${g.slug}`} className="card">
      <div className="thumb">{g.cover ? <img src={g.cover} alt={g.title} style={{width:'100%', height:'100%', objectFit:'cover'}}/> : 'Guide'}</div>
      <div className="body">
        <h3 className="title">{g.title || g.slug}</h3>
        <p className="excerpt">{g.excerpt || 'Quick, practical tips to get started.'}</p>
        <div className="meta">{formatDate(g.date)}</div>
      </div>
    </Link>
  );
}

function formatDate(s) {
  if (!s) return '';
  try {
    const d = new Date(s);
    return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
  } catch {
    return s;
  }
}

export async function getStaticProps() {
  const guides = await getAllGuides();

  const featured = guides.filter(g => g.featured === true).slice(0, 6);
  const latestPool = guides
    .filter(g => !featured.find(f => f.slug === g.slug))
    .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));

  const latest = latestPool.slice(0, 12);

  return {
    props: {
      featured: featured.length ? featured : guides.slice(0, 6),
      latest
    }
  };
}
