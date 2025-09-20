// pages/about.js
import Head from "next/head";

export default function About() {
  const canonical = "https://www.wild-and-well.store/about";

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Wild & Well",
    url: "https://www.wild-and-well.store",
    logo: "https://www.wild-and-well.store/favicon.ico",
    sameAs: [
      "https://instagram.com/yourhandle",
      "https://pinterest.com/yourhandle",
      "https://www.facebook.com/yourpage",
    ],
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Wild & Well",
    url: "https://www.wild-and-well.store",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.wild-and-well.store/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <Head>
        <title>About • Wild & Well</title>
        <meta
          name="description"
          content="Wild & Well helps you live more naturally with practical eco swaps and mindful wellness tips."
        />
        <link rel="canonical" href={canonical} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </Head>

      <main className="container page">
        <h1>About Wild & Well</h1>
        <p className="lead">
          We make eco-friendly living and holistic wellness simple. Our guides and
          product picks focus on practicality, transparency, and small changes that last.
        </p>

        <section className="grid">
          <div className="card">
            <h3>What We Cover</h3>
            <ul>
              <li>Low-waste home and bathroom swaps</li>
              <li>Holistic wellness basics and routines*</li>
              <li>Kitchen tools and safer cleaning essentials</li>
              <li>Mindful habits for calmer days</li>
            </ul>
            <p className="fine">*Educational only; not medical advice.</p>
          </div>

          <div className="card">
            <h3>How We Pick Products</h3>
            <ul>
              <li>Durability over disposables</li>
              <li>Reasonable price for quality</li>
              <li>Clear materials & honest claims</li>
              <li>Real-world usefulness</li>
            </ul>
            <p className="fine">
              Some links are affiliate links. As an Amazon Associate, we earn from qualifying purchases.
            </p>
          </div>
        </section>

        <section className="contact">
          <h3>Contact</h3>
          <p>
            Questions or suggestions? Email{" "}
            <a href="mailto:hello@wild-and-well.store">hello@wild-and-well.store</a>
          </p>
        </section>
      </main>

      <style jsx>{`
        .page { margin: 2.5rem auto; }
        .lead { color: var(--muted); margin: 8px 0 16px; }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 16px;
          margin: 12px 0 20px;
        }
        .card {
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 16px;
          background: #fff;
        }
        ul { margin: 8px 0 0 18px; }
        li { margin: 6px 0; }
        .fine { color: #6b7280; font-size: .9rem; margin-top: 8px; }
        .contact { margin-top: 10px; }
      `}</style>
    </>
  );
}
