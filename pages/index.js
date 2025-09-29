// pages/index.js
// Minimal, safe home page to fix React error #130 during prerender.
// Avoids importing any object-as-component and passes only defined SEO props.

import Link from 'next/link';
import SEO from '../components/SEO';

const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || 'Wild & Well';

export default function Home() {
  const title = `${SITE_NAME} — Practical Guides, Reviews & Low-Toxin Living`;
  const description =
    'Actionable wellness guides, honest product reviews, and low-additive picks. No fluff. Just practical steps to feel better and live cleaner.';
  const ogImage = '/images/og-default.jpg'; // keep or replace with an existing asset; remove if you don’t have it

  return (
    <>
      <SEO
        title={title}
        description={description}
        image={ogImage || undefined}
        url="/"
        breadcrumbs={[
          { name: 'Home', item: '/' },
        ]}
      />

      <main style={{ padding: '48px 20px', maxWidth: 960, margin: '0 auto' }}>
        <header style={{ marginBottom: 24 }}>
          <h1 style={{ fontSize: 36, lineHeight: 1.2, fontWeight: 800 }}>
            Practical wellness, minus the noise
          </h1>
          <p style={{ marginTop: 12, fontSize: 18, opacity: 0.85 }}>
            Clear, research-literate guides and reviews to help you choose
            cleaner products, build simple habits, and feel better day to day.
          </p>
        </header>

        <nav
          aria-label="Primary"
          style={{
            display: 'grid',
            gap: 12,
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            marginTop: 24,
          }}
        >
          <Card href="/guides/wellness-starter" title="Start Here">
            A 7-day primer: sleep, movement, food, and environment.
          </Card>
          <Card href="/guides/safer-cleaning" title="Safer Cleaning">
            Cut harsh residues. See our low-tox kit & quick wins.
          </Card>
          <Card
            href="/guides/protein-powders-natural-ingredients"
            title="Cleaner Supplements"
          >
            Minimal-additive protein & vitamin picks we trust.
          </Card>
          <Card href="/guides/water-filters" title="Water Filters">
            Apartment-friendly options that actually improve taste.
          </Card>
          <Card href="/reviews" title="Reviews">
            Evidence-aware, affiliate-supported—always honest.
          </Card>
          <Card href="/about" title="About">
            Who we are, how we test, and how we’re funded.
          </Card>
        </nav>

        <section style={{ marginTop: 40 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 10 }}>
            New & trending
          </h2>
          <ul style={{ listStyle: 'disc', paddingLeft: 20, lineHeight: 1.7 }}>
            <li>
              <Link href="/guides/clean-electrolytes-hydration">
                Clean electrolytes & hydration basics
              </Link>
            </li>
            <li>
              <Link href="/guides/best-blue-light-tools">
                Blue-light tools that aren’t snake oil
              </Link>
            </li>
            <li>
              <Link href="/guides/sauna-basics">Sauna basics & heat therapy</Link>
            </li>
          </ul>
        </section>

        <footer style={{ marginTop: 56, opacity: 0.7, fontSize: 14 }}>
          <p>
            As an affiliate site, we may earn from qualifying purchases at no
            extra cost to you. We only recommend products that meet our
            ingredient, safety, and performance criteria.
          </p>
        </footer>
      </main>
    </>
  );
}

function Card({ href, title, children }) {
  return (
    <Link
      href={href}
      style={{
        display: 'block',
        border: '1px solid rgba(0,0,0,0.08)',
        borderRadius: 12,
        padding: 16,
        textDecoration: 'none',
        background: 'white',
        boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
      }}
    >
      <div style={{ fontWeight: 700, marginBottom: 6 }}>{title}</div>
      <div style={{ opacity: 0.8 }}>{children}</div>
    </Link>
  );
}
