// pages/index.js
import Head from 'next/head';
import Hero from '../components/Hero';
// If you already have a grid/list component for guides, keep using it.
// Otherwise the page will still render the hero and the rest of your existing sections.
import dynamic from 'next/dynamic';

const GuidesGrid = dynamic(() => import('../components/GuidesGrid').catch(() => () => null), { ssr: true });

export default function Home() {
  return (
    <>
      <Head>
        <title>Wild & Well – Holistic Health & Eco Living</title>
        <meta
          name="description"
          content="Your guide to holistic health, eco living and natural wellness."
        />
      </Head>

      <Hero />

      <main className="mx-auto mb-12 max-w-6xl px-4">
        <h2 className="mb-4 text-2xl font-bold" style={{ color: '#fff' }}>Latest Guides</h2>
        {GuidesGrid ? <GuidesGrid /> : null}
      </main>
    </>
  );
}
