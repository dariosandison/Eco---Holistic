// pages/disclosure.js
import Head from "next/head";

export default function Disclosure() {
  const canonical = "https://www.wild-and-well.store/disclosure";

  return (
    <>
      <Head>
        <title>Affiliate Disclosure • Wild & Well</title>
        <meta
          name="description"
          content="We may earn a commission from links on this site at no extra cost to you. Transparency about how Wild & Well is funded."
        />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content="Affiliate Disclosure • Wild & Well" />
        <meta property="og:description" content="How we earn and how that supports the site." />
        <meta property="og:url" content={canonical} />
      </Head>

      <main className="container page">
        <h1>Affiliate Disclosure</h1>
        <p className="lead">
          Some links on Wild & Well are affiliate links. If you purchase through these links,
          we may earn a small commission at **no extra cost to you**. This helps keep our
          content free and supports the work we do.
        </p>

        <section className="card">
          <h3>Amazon Associate</h3>
          <p>
            Wild & Well is a participant in the Amazon Services LLC Associates Program, an
            affiliate advertising program designed to provide a means for sites to earn
            advertising fees by advertising and linking to Amazon. As an Amazon Associate,
            we earn from qualifying purchases.
          </p>
        </section>

        <section className="card">
          <h3>Our Promise</h3>
          <ul>
            <li>We only recommend items we believe offer genuine value.</li>
            <li>Affiliate status never changes our opinions or reviews.</li>
            <li>Pricing and availability are accurate at time of publish but can change.</li>
          </ul>
        </section>

        <p className="fine">
          Questions? Email <a href="mailto:hello@wild-and-well.store">hello@wild-and-well.store</a>.
        </p>
      </main>

      <style jsx>{`
        .page { margin: 2.5rem auto; }
        .lead { color: var(--muted); margin: 8px 0 16px; }
        .card {
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 16px;
          background: #fff;
          margin: 14px 0;
        }
        ul { margin: 8px 0 0 18px; }
        li { margin: 6px 0; }
        .fine { color: #6b7280; margin-top: 14px; }
      `}</style>
    </>
  );
}
