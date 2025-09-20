// pages/index.js
import Link from "next/link";
import SEO from "../components/SEO";
import { getAllGuides } from "../lib/guides";

export default function Home({ guides }) {
  return (
    <>
      <SEO
        title="Wild & Well — Eco & Holistic Guides"
        description="Practical, low-tox, eco-friendly guides for better sleep, calmer stress, and sustainable living."
        path="/"
      />

      <main className="container">
        <section className="hero">
          <span className="kicker">Welcome</span>
          <h1>Feel better. Live lighter.</h1>
          <p className="lead">
            Simple, science-aware tips and product picks to lower toxins, cut waste,
            and boost everyday energy.
          </p>
        </section>

        <section>
          <h2 className="sectionTitle">Latest Guides</h2>
          <div className="grid">
            {guides.map((g) => (
              <article key={g.slug} className="card">
                <header>
                  <h3 className="cardTitle">
                    <Link href={`/guides/${g.slug}`}>{g.title}</Link>
                  </h3>
                  {g.date && (
                    <time className="date" dateTime={g.date}>
                      {new Date(g.date).toLocaleDateString()}
                    </time>
                  )}
                </header>
                {g.excerpt && <p className="excerpt">{g.excerpt}</p>}
                <p>
                  <Link className="more" href={`/guides/${g.slug}`}>
                    Read guide →
                  </Link>
                </p>
              </article>
            ))}
          </div>
        </section>

        <aside className="note">
          <small>
            Some links may be affiliate links. As an Amazon Associate, we earn from
            qualifying purchases.
          </small>
        </aside>
      </main>

      <style jsx>{`
        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 24px 16px 48px;
        }
        .kicker {
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-size: 0.8rem;
          color: #6b7280;
        }
        .hero h1 {
          margin: 6px 0 8px;
          line-height: 1.2;
          font-size: 2.1rem;
        }
        .lead {
          color: #4b5563;
          max-width: 720px;
        }
        .sectionTitle {
          margin: 28px 0 12px;
          font-size: 1.3rem;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 18px;
        }
        .card {
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 16px;
          background: #fff;
        }
        .cardTitle {
          margin: 0 0 4px;
          font-size: 1.05rem;
          line-height: 1.3;
        }
        .date {
          color: #6b7280;
          font-size: 0.85rem;
        }
        .excerpt {
          color: #374151;
          margin: 8px 0 12px;
        }
        .more {
          color: #0ea5e9;
          text-decoration: none;
        }
        .more:hover {
          text-decoration: underline;
        }
        .note {
          margin-top: 22px;
          color: #6b7280;
          font-size: 0.9rem;
        }
      `}</style>
    </>
  );
}

export async function getStaticProps() {
  // IMPORTANT: await the async helper
  const guides = await getAllGuides();

  // Send only serializable, lightweight data to the page
  const lightGuides = guides.map(({ front }) => front);

  return {
    props: { guides: lightGuides },
  };
}
