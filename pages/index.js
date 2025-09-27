// pages/index.js
import Link from 'next/link';
import Card from '../components/Card';
import SeoHead from '../components/SeoHead';
import { getAllDocs } from '../lib/content';

export async function getStaticProps() {
  const docs = getAllDocs({
    dir: 'content/guides',
    fields: ['slug','title','excerpt','date','badge','deal','category','image'],
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

      {/* NOTE: extra class hero--bg adds moving logo background */}
      <section className="hero hero--bg">
        {/* Offscreen H1 for SEO/accessibility */}
        <h1 style={{position:'absolute',left:'-9999px',top:'auto',width:1,height:1,overflow:'hidden'}}>
          Wild & Well
        </h1>

        <p>Actionable guides and clean product picks to help you sleep better, stress less, and move more.</p>

        <div className="hero-links">
          <Link className="btn" href="/guides">Explore Guides</Link>
          <Link className="btn btn--ghost" href="/deals">Today&apos;s Deals</Link>
        </div>

        <div className="value-props">
          <span>Independent • Reader-supported</span>
          <span>Evidence-informed picks</span>
          <span>No sponsored posts</span>
        </div>
      </section>

      <h2 className="section-title">Latest Guides</h2>
