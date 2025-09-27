// pages/index.js
import Link from 'next/link';
import Card from '../components/Card';
import SeoHead from '../components/SeoHead';
import { getAllDocs } from '../lib/content';

export async function getStaticProps() {
  const docs = getAllDocs({
    dir: 'content/guides',
    fields: ['slug','title','excerpt','date','badge','deal','category'],
  });
  return { props: { docs } };
}

export default function Home({ docs }) {
  const latest = docs.slice(0, 6);
  const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wild-and-well.store';

  return (
    <>
      <SeoHead
        title="Wild & Well — Actionable wellness guides & clean product picks"
        description="Practical, no-sponsor guides on sleep, stress, movement, and low-tox living."
        url={SITE}
        type="website"
      />

      <section className="hero">
        <h1>Wild & Well</h1>
        <p>Actionable guides and clean product picks to help you sleep better, stress less, and move more.</p>
        <div className="hero-links">
          <Link className="btn" href="/guides">Explore Guides</Link>
          <Link className="btn btn--ghost" href="/deals">Today&apos;s Deals</Link>
        </div>

        {/* FIX: style prop must be an object, not a string */}
        <div
          style={{
            marginTop: 14,
            display: 'flex',
            gap: 12,
            justifyContent: 'center',
            flexWrap: 'wrap',
            color: 'var(--muted)',
          }}
        >
          <span>Independent • Reader-supported</span>
          <span>Evidence-informed picks</span>
          <span>No sponsored posts</span>
        </div>
      </section>

      <h2 className="section-title">Latest Guides</h2>
      {latest.length === 0 ? (
        <p style={{ color:'#f6f1e3' }}>No guides published yet.</p>
      ) : (
        <div className="grid">
          {latest.map((p) => <Card key={p.slug} {...p} />)}
        </div>
      )}
    </>
  );
}
