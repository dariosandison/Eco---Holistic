// pages/cookies.js
import Head from "next/head";

export default function Cookies() {
  const canonical = "https://www.wild-and-well.store/cookies";

  return (
    <>
      <Head>
        <title>Cookies Policy • Wild & Well</title>
        <meta
          name="description"
          content="Details on the cookies used by Wild & Well, how we use them, and how you can control them."
        />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content="Cookies Policy • Wild & Well" />
        <meta property="og:description" content="What cookies we use and your options." />
        <meta property="og:url" content={canonical} />
      </Head>

      <main className="container page">
        <h1>Cookies Policy</h1>
        <p className="muted">Last updated: {new Date().toLocaleDateString()}</p>

        <section className="card">
          <h3>What Are Cookies?</h3>
          <p>
            Cookies are small text files stored on your device to help websites work properly,
            remember preferences, and understand how people use them.
          </p>
        </section>

        <section className="card">
          <h3>Types We Use</h3>
          <ul>
            <li>
              <strong>Essential:</strong> Required for core functionality (security, performance, basic UX).
            </li>
            <li>
              <strong>Analytics (GA4):</strong> Helps us understand page views, traffic sources, and general usage.
            </li>
            <li>
              <strong>Affiliate:</strong> Retailers (e.g., Amazon) may set cookies to attribute referrals.
            </li>
          </ul>
        </section>

        <section className="card">
          <h3>Managing Cookies</h3>
          <ul>
            <li>Use your browser settings to block or delete cookies.</li>
            <li>
              Install the{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Analytics Opt-out Add-on
              </a>{" "}
              to opt out of GA4 measurement.
            </li>
            <li>
              Private/Incognito browsing modes can reduce cookie persistence between sessions.
            </li>
          </ul>
        </section>

        <section className="card">
          <h3>More Info</h3>
          <p>
            If you have questions about our use of cookies, email{" "}
            <a href="mailto:hello@wild-and-well.store">hello@wild-and-well.store</a>.
          </p>
        </section>
      </main>

      <style jsx>{`
        .page { margin: 2.5rem auto; }
        .muted { color: #6b7280; margin: 6px 0 12px; }
        .card {
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 16px;
          background: #fff;
          margin: 14px 0;
        }
        ul { margin: 8px 0 0 18px; }
        li { margin: 6px 0; }
      `}</style>
    </>
  );
}
