// pages/index.js
import Link from 'next/link';
import Card from '../components/Card';
import SeoHead from '../components/SeoHead';
import { getAllDocs } from '../lib/content';

export async function getStaticProps() {
  const docs = getAllDocs({
    dir: 'content/guides',
    fields: ['slug', 'title', 'excerpt', 'date', 'badge', 'deal', 'category', 'image'],
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
        {/* Offscreen semantic H1 for SEO */}
        <h1
          style={{
            position: 'absolute',
            left: '-9999px',
            top: 'auto',
            width: 1,
            height: 1,
            overflow: 'hidden',
          }}
        >
          Wild & Well
        </h1>

        {/* HERO LOGO — professional sizing (responsive, no distortion) */}
        <img
          src="/logo.svg"
          alt="Wild & Well"
          style={{
            display: 'block',
            margin: '0 auto 16px',
            width: 'auto',
            maxHeight: 'clamp(72px, 12vw, 140px)', // phones ~72–90px, laptops ~110–130px, cap at 140px
          }}
          onError={(e) => {
            e.currentTarget.src = '/logo-dark.svg';
            e.currentTarget.onerror = null;
          }}
        />

        <p>
          Actionable guides and clean product picks to help you sleep better, stress less, and move
          more.
        </p>

        <div className="hero-links">
          <Link className="btn" href="/guides">
            Explore Guides
