// pages/index.js
import Head from "next/head";

export default function Home() {
  const canonical = "https://www.wild-and-well.store/";

  return (
    <>
      <Head>
        <title>Wild & Well • Eco + Holistic Living</title>
        <meta
          name="description"
          content="Simple guidance for eco-friendly living, holistic health, and mindful wellness."
        />
        <link rel="canonical" href={canonical} />
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

        {/* Intro article block (SEO) */}
        <section className="container learn">
          <h2>Start Here: Small Swaps, Big Impact</h2>
          <p>
            Eco-living isn’t about perfection—it’s about choosing better, one
            step at a time. Begin with simple upgrades you’ll feel every day:
            a sturdy bottle that keeps drinks cold, a bamboo toothbrush that cuts
            plastic, or a calming herbal tea for better evenings.
          </p>
          <ul>
            <li><a href="/recommended">Low-waste bathroom swaps</a></li>
            <li><a href="/recommended">Cleaner kitchen essentials</a></li>
            <li><a href="/recommended">Holistic wellness basics*</a></li>
          </ul>
          <p className="fine">
            *Educational only, not medical advice.
          </p>
        </section>

        {/* Optional lightweight email capture (set the action later) */}
        <section className="newsletter">
          <div className="container box">
            <h3>Get simple eco & wellness tips</h3>
            <p className="muted">Monthly roundup. No spam. Unsubscribe anytime.</p>
            <form
              method="post"
              action="#"
              onSubmit={(e) => {
                // Prevent submission until you plug in a real endpoint (Mailchimp/Buttondown/Formspree)
                e.preventDefault();
                alert("Newsletter coming soon. We'll add this after deployment 🚀");
              }}
              className="form"
            >
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                aria-label="Email address"
              />
              <button type="submit">Notify me</button>
            </form>
          </div>
        </section>

        {/* Quick navigation blocks */}
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

        .learn { padding: 28px 0 10px; max-width: 800px; }
        .learn h2 { margin: 16px 0 8px; }
        .learn p { color: var(--muted); margin: 0 0 8px; }
        .learn ul { padding-left: 18px; margin: 8px 0 0; }
        .learn li { margin: 6px 0; }
        .fine { color: #6b7280; font-size: .9rem; margin-top: 8px; }

        .newsletter { background: #f0fdf4; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
        .box { padding: 22px 0; max-width: 800px; }
        .muted { color: var(--muted); margin: 4px 0 12px; }
        .form { display: flex; gap: 10px; flex-wrap: wrap; }
        input[type="email"] {
          flex: 1; min-width: 220px; padding: 10px 12px;
          border: 1px solid var(--border); border-radius: 10px;
        }
        button {
          background: var(--brand); color: #ecfdf5; padding: 10px 14px; border-radius: 10px; font-weight: 600; border: none;
        }
        button:hover { background: var(--brand-2); cursor: pointer; }

        .blocks {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px;
          padding: 28px 0;
        }
        .block {
          border: 1px solid var(--border); border-radius: 12px; padding: 16px;
          color: var(--text); text-decoration: none; background: #fff;
        }
        .block:hover { border-color: #d1d5db; }
        @media (max-width: 900px) { .inner { grid-template-columns: 1fr; } }
      `}</style>
    </>
  );
}
