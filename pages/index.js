// pages/index.js
import Head from 'next/head';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

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

      {/* Top padding to breathe like in your screenshot */}
      <div style={{ paddingTop: '24px' }}>
        <Hero />
      </div>

      <main className="mx-auto mb-12 max-w-6xl px-4">
        <h2
          className="mb-4 text-2xl font-bold"
          style={{ color: '#fff', marginTop: '8px' }}
        >
          Latest Guides
        </h2>
        {/* (Optional) If/when you add a grid, render it here. Kept empty on purpose to match screenshot. */}
      </main>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  return { props: {} };
}
