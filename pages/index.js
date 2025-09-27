// pages/index.js
import Link from 'next/link';
import Newsletter from '../components/Newsletter';
import Card from '../components/Card';
import { getAllDocs } from '../lib/content';

export async function getStaticProps() {
  const docs = getAllDocs({
    dir: 'content/guides',
    fields: ['slug', 'title', 'excerpt', 'date', 'badge', 'deal'],
  });
  return { props: { docs } };
}

export default function Home({ docs }) {
  const latest = docs.slice(0, 6);

  return (
    <>
      <section className="hero">
        <h1>Wild & Well</h1>
        <p>Actionable guides and clean product picks to help you sleep better, stress less, and move more.</p>
        <div className="hero-links">
          <Link className="btn" href="/guides">Explore Guides</Link>
          <Link className="btn btn--ghost" href="/deals">Today&apos;s Deals</Link>
        </div>
      </section>

      <Newsletter />

      <h2 className="section-title">Latest Guides</h2>
      {latest.length === 0 ? (
        <p>No guides published yet.</p>
      ) : (
        <div className="grid">
          {latest.map((p) => (
            <Card key={p.slug} {...p} />
          ))}
        </div>
      )}
    </>
  );
}
