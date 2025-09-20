// pages/index.js
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Wild & Well • Eco + Holistic Living</title>
        <meta
          name="description"
          content="Simple guidance for eco-friendly living, holistic health, and mindful wellness."
        />
      </Head>

      <main>
        <section className="hero">
          <div className="container inner">
            <div className="copy">
              <h1>Live Wild & Well</h1>
              <p>
                Practical tips and curated products for a more natural, low-waste,
                and mindful life.
              </p>
              <div className="actions">
                <a className="btn" href="/recommended">See Recommended Products</a>
                <a className="link" href="/disclosure">Affiliate Disclosure</a>
              </div>
            </div>
            <div className="art">
              <img src="/cover.jpg" alt="Wild & Well cover" />
            </div>
          </div>
        </section>

        <section className="container blocks">
          <a className="block" href="/recommended">
            <h3>Eco Swaps</h3>
            <p>Low-waste, durable picks that cut plastic and clutter.</p>
          </a>
          <a className="block" href="/recommended">
            <h3>Holistic Wellness</h3>
            <p>Teas, supplements, and tools for calmer routines.*</p>
          </a>
          <a className="block" href="/recommended">
            <h3>Home & Kitchen</h3>
            <p>Simplify cooking and cleaning with safer options.</p>
          </a>
        </section>

        <p className="fine container">
          *Information is educational only and not medical advice.
        </p>
      </main>

      <style jsx>{`
        .hero { border-bottom: 1px solid var(--border); background: #f8fafc; }
        .inner { display: grid; grid-template-columns: 1.2fr 1fr; gap: 24px; padding: 36px 0; align-items: center; }
        .copy h1 { font-size: 2.2rem; margin: 0 0 10px; }
        .copy p { color: var(--muted); margin: 0 0 16px; }
        .actions { display: flex; gap: 12px; align-items: center; }
        .btn {
          background: var(--brand); color: #ecfdf5; padding: 10px 14px; border-radius: 10px; font-weight: 600;
        }
        .btn:hover { background: var(--brand-2); text-decoration: none; }
        .link { color: var(--muted); }
        .art img { border-radius: 12px; border: 1px solid var(--border); }

        .blocks {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px;
          padding: 28px 0;
        }
        .block {
          border: 1px solid var(--border); border-radius: 12px; padding: 16px;
          color: var(--text); text-decoration: none; background: #fff;
        }
        .block:hover { border-color: #d1d5db; }
        .fine { color: #6b7280; font-size: .9rem; margin: 8px 0 24px; }
        @media (max-width: 900px) { .inner { grid-template-columns: 1fr; } }
      `}</style>
    </>
  );
}
