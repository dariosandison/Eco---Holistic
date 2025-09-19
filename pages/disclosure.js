// pages/disclosure.js
import Head from "next/head";

export default function Disclosure() {
  const siteName = "Wild & Well";
  return (
    <>
      <Head>
        <title>Affiliate Disclosure | {siteName}</title>
        <meta
          name="description"
          content={`${siteName} may use affiliate links, which earn us a commission at no extra cost to you.`}
        />
        {/* Keep it out of search results if you want; remove noindex if you prefer it indexed */}
        <meta name="robots" content="noindex,follow" />
      </Head>

      <main className="container">
        <h1>Affiliate Disclosure</h1>
        <p>
          Some links on {siteName} are affiliate links. If you click an affiliate
          link and make a purchase, we may earn a commission at no additional
          cost to you. We only recommend products we believe add real value.
        </p>

        <h2>Amazon Associates</h2>
        <p>
          As an Amazon Associate, {siteName} earns from qualifying purchases.
          Prices and availability are accurate as of the date/time indicated and
          are subject to change.
        </p>

        <h2>Why Affiliates?</h2>
        <p>
          Affiliate revenue helps us keep {siteName} free and fund more helpful
          content on eco-friendly living, holistic health, and natural remedies.
        </p>

        <h2>Questions?</h2>
        <p>
          Email us anytime at{" "}
          <a href="mailto:hello@wild-and-well.store">hello@wild-and-well.store</a>.
        </p>
      </main>

      <style jsx>{`
        .container {
          max-width: 820px;
          margin: 3rem auto;
          padding: 0 16px;
          line-height: 1.75;
          font-size: 1.05rem;
        }
        h1 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        h2 {
          margin-top: 2rem;
          font-size: 1.25rem;
        }
        a {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}
