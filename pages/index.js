// pages/index.js
import Head from 'next/head';
import Hero from '../components/Hero';

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
        <div className="flex items-baseline justify-between">
          <h2 className="mb-4 text-2xl font-bold" style={{ color: '#fff' }}>
            Latest Guides
          </h2>
          <a
            href="/guides"
            className="text-sm font-semibold"
            style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none' }}
          >
            View all →
          </a>
        </div>
        {/* If you later add a guides grid component, render it here. */}
      </main>
    </>
  );
}

// keep SSG happy even without data fetching
export async function getStaticProps() {
  return { props: {} };
}
