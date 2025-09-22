import Link from 'next/link';
import GuideCard from '../src/components/GuideCard';
import { getAllGuidesMeta } from '../src/lib/guides';

export default function Home({ latest, categories }) {
  return (
    <>
      <section className="hero">
        <div className="heroInner container">
          <h1>Your guide to eco-living, holistic health, and mindful wellness</h1>
          <p>Bite-size, practical reads without the fluff — find safer products, build healthy habits, and live a little cleaner.</p>
          <Link href="/guides" className="cta">Explore Guides</Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 style={{margin:'0 0 12px'}}>Featured categories</h2>
          <div className="badges" role="navigation" aria-label="Featured categories">
            {categories.map(c => (
              <Link key={c} href={`/guides?tag=${encodeURIComponent(c)}`} className="badge">{c}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 style={{margin:'0 0 12px'}}>Latest guides</h2>
          <div className="grid">
            {latest.map(g => <GuideCard key={g.slug} guide={g} />)}
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps(){
  const all = getAllGuidesMeta();
  const latest = all.slice(0,6);
  const categories = Array.from(new Set(all.flatMap(g => g.tags))).slice(0,8);
  return { props: { latest, categories } };
}
