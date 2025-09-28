// pages/index.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import GuidesGrid from '../components/GuidesGrid';
import Footer from '../components/Footer';

export default function Home({ guides }) {
  return (
    <div className="page-wrap">
      <Head>
        <title>Wild & Well – Holistic Health & Eco Living</title>
        <meta name="description" content="Your guide to holistic health, eco living and natural wellness." />
      </Head>

      <Header />
      <Hero />

      <main className="page-main">
        <section className="container">
          <h2 className="section-title">Latest Guides</h2>
          <GuidesGrid guides={guides} />
        </section>
      </main>

      {/* Spacer so a fixed newsletter bar never covers the footer */}
      <div id="newsletter-spacer" />

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const dir = path.join(process.cwd(), 'content', 'guides');
  let guides = [];
  try {
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.md') || f.endsWith('.mdx'));
    guides = files.map((file) => {
      const slug = file.replace(/\.mdx?$/, '');
      const raw = fs.readFileSync(path.join(dir, file), 'utf8');
      const { data } = matter(raw);
      return {
        slug,
        title: data.title || slug.replace(/-/g, ' '),
        date: data.date || '1970-01-01',
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 12);
  } catch (_) {
    guides = [];
  }
  return { props: { guides } };
}
