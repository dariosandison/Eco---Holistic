// pages/disclosure.js
import Head from "next/head";

export default function Disclosure() {
  return (
    <>
      <Head>
        <title>Affiliate Disclosure | Wild & Well</title>
        <meta
          name="description"
          content="Transparency about affiliate links and how Wild & Well earns commissions at no extra cost to you."
        />
      </Head>

      <main className="container">
        <h1>Affiliate Disclosure</h1>
        <p>
          Some links on Wild & Well are affiliate links. If you click and make a
          purchase, we may earn a small commission at no extra cost to you. This
          helps keep our content free and allows us to invest more time into
          helpful guides and reviews.
        </p>
        <p>
          <strong>Amazon Associates:</strong> As an Amazon Associate, we earn
          from qualifying purchases. Prices and availability are accurate as of
          the date/time indicated and are subject to change. Any price and
          availability information displayed on Amazon at the time of purchase
          will apply to the purchase of the product.
        </p>
        <p>
          We only recommend products that align with our values around
          sustainability, quality, and usefulness. However, please do your own
          research to ensure an item fits your needs.
        </p>
      </main>

      <style jsx>{`
        .container { max-width: 800px; margin: 2rem auto; padding: 0 16px; }
        h1 { margin-bottom: .5rem; }
        p { color: var(--muted); }
      `}</style>
    </>
  );
}
