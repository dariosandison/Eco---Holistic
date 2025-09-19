import Head from "next/head";

export default function Disclosure() {
  const site = "Wild & Well";
  const url = "https://www.wild-and-well.store";

  return (
    <>
      <Head>
        <title>Affiliate Disclosure | {site}</title>
        <meta
          name="description"
          content="How Wild & Well uses affiliate links and partnerships in line with FTC/ASA guidelines."
        />
        <link rel="canonical" href={`${url}/disclosure`} />
        <meta property="og:title" content="Affiliate Disclosure | Wild & Well" />
        <meta property="og:description" content="Our policy on affiliate links, recommendations, and sponsorships." />
        <meta property="og:url" content={`${url}/disclosure`} />
      </Head>

      <main className="container">
        <h1>Affiliate Disclosure</h1>
        <p className="muted">Last updated: {new Date().getFullYear()}</p>

        <section>
          <h2>Short Version</h2>
          <p>
            Some links on this site are affiliate links. If you click and buy, we may earn a commission at no extra cost
            to you. We only recommend products we believe add real value.
          </p>
        </section>

        <section>
          <h2>Legally Required Bits</h2>
          <ul>
            <li>
              <strong>FTC / ASA compliance:</strong> We disclose affiliate relationships on pages and posts containing
              monetized links.
            </li>
            <li>
              <strong>Amazon Associates:</strong> As an Amazon Associate, we earn from qualifying purchases.
            </li>
            <li>
              <strong>Sponsorships:</strong> Any sponsored content will be clearly labeled as such.
            </li>
          </ul>
        </section>

        <section>
          <h2>How We Choose Products</h2>
          <p>
            We prioritize quality, sustainability, and usefulness. Recommendations are based on research, specs,
            ingredient lists, user feedback, and—where possible—hands-on evaluation.
          </p>
        </section>

        <section>
          <h2>Editorial Independence</h2>
          <p>
            Affiliate partnerships do not influence our editorial opinions. Our goal is to help you live more naturally
            and sustainably with honest, balanced guidance.
          </p>
        </section>

        <section>
          <h2>Health Disclaimer</h2>
          <p>
            Content on this site is for informational purposes only and is not medical advice. Always consult a qualified
            healthcare professional before making changes to your diet, supplements, or lifestyle.
          </p>
        </section>

        <section>
          <h2>Questions?</h2>
          <p>
            Have concerns about a recommendation or partnership? Email us at{" "}
            <a href="mailto:hello@wild-and-well.store">hello@wild-and-well.store</a>.
          </p>
        </section>
      </main>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 40px auto;
          padding: 0 16px 64px;
          line-height: 1.7;
        }
        h1 {
          font-size: 2rem;
          margin: 0 0 6px;
          letter-spacing: 0.2px;
        }
        h2 {
          font-size: 1.25rem;
          margin: 28px 0 8px;
        }
        .muted {
          color: #6b7280;
          font-size: 0.95rem;
          margin-bottom: 18px;
        }
        ul {
          padding-left: 18px;
        }
        a {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}
