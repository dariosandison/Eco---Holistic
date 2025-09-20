import SEO from "../components/SEO";
// inside your component render:
<SEO title="Eco + Holistic Blog" path="/" />

import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const site = "Wild & Well";
  const url = "https://www.wild-and-well.store";

  // Featured posts (add more objects here as you publish)
  const featured = [
    {
      slug: "/posts/eco-herbal-tea-starter",
      title:
        "Eco Herbal Tea Starter Kit: 3 Essentials for Calm, Better Sleep, and Less Waste",
      excerpt:
        "Beginner-friendly picks: organic herbal blend, zero-waste infuser, and a temp-control kettle.",
      image: "/cover.jpg", // make sure public/cover.jpg exists
    },
  ];

  return (
    <>
      <Head>
        <title>{site} | Eco Living & Holistic Health</title>
        <meta
          name="description"
          content="Practical guides for eco-friendly living, holistic health, and mindful wellness."
        />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={`${site} | Eco Living & Holistic Health`} />
        <meta
          property="og:description"
          content="Practical guides for eco-friendly living, holistic health, and mindful wellness."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content="/cover.jpg" />
      </Head>

      <main className="wrap">
        <section className="hero">
          <h1>Wild & Well</h1>
          <p className="dek">
            Practical guides for eco-friendly living, holistic health, and mindful wellness.
          </p>
        </section>

        <section className="featured">
          <h2>Featured Guide</h2>
          <div className="cards">
            {featured.map((p) => (
              <article className="card" key={p.slug}>
                <Link href={p.slug} className="thumb">
                  <img src={p.image} alt={p.title} />
                </Link>
                <div className="content">
                  <h3>
                    <Link href={p.slug}>{p.title}</Link>
                  </h3>
                  <p>{p.excerpt}</p>
                  <Link href={p.slug} className="cta">
                    Read the guide
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <style jsx>{`
        .wrap { max-width: 980px; margin: 32px auto; padding: 0 16px 72px; }
        .hero h1 { font-size: 2.2rem; margin: 0; }
        .dek { color: #4b5563; margin: 6px 0 18px; }
        .featured h2 { font-size: 1.4rem; margin: 18px 0; }
        .cards { display: grid; grid-template-columns: 1fr; gap: 16px; }
        .card {
          display: grid; grid-template-columns: 220px 1fr; gap: 16px;
          border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; background: #fff;
        }
        .thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .content { padding: 12px; }
        .content h3 { margin: 0 0 6px; font-size: 1.1rem; }
        .content p { margin: 0 0 10px; color: #4b5563; }
        .cta {
          display: inline-block; background: #14532d; color: #fff; text-decoration: none;
          padding: 8px 12px; border-radius: 10px; font-weight: 600;
        }
        @media (max-width: 800px) { .card { grid-template-columns: 1fr; } }
      `}</style>
    </>
  );
}
