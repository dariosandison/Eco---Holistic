// pages/privacy.js
import Head from "next/head";

export default function Privacy() {
  const canonical = "https://www.wild-and-well.store/privacy";

  return (
    <>
      <Head>
        <title>Privacy Policy • Wild & Well</title>
        <meta
          name="description"
          content="How Wild & Well handles data, analytics, cookies, and your choices."
        />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content="Privacy Policy • Wild & Well" />
        <meta property="og:description" content="How we handle data and your choices." />
        <meta property="og:url" content={canonical} />
      </Head>

      <main className="container page">
        <h1>Privacy Policy</h1>
        <p className="muted">Last updated: {new Date().toLocaleDateString()}</p>

        <section className="card">
          <h3>Overview</h3>
          <p>
            Wild & Well respects your privacy. We collect minimal data to run our website,
            improve content, and understand what resonates with readers. We do not sell your data.
          </p>
        </section>

        <section className="card">
          <h3>What We Collect</h3>
          <ul>
            <li>
              <strong>Analytics:</strong> We use Google Analytics 4 to measure traffic and page performance.
              Data is aggregated and anonymized where possible (e.g., IP anonymization).
            </li>
            <li>
              <strong>Server logs:</strong> Our hosting provider may log requests for security and maintenance.
            </li>
            <li>
              <strong>Affiliate clicks:</strong> When you click an affiliate link (e.g., to Amazon),
              the retailer may track the referral to attribute any purchases.
            </li>
          </ul>
        </section>

        <section className="card">
          <h3>Cookies</h3>
          <p>
            We use essential cookies to operate the site and analytics/affiliate cookies to understand usage
            and attribute referrals. See our <a href="/cookies">Cookies Policy</a> for details and controls.
          </p>
        </section>

        <section className="card">
          <h3>How We Use Data</h3>
          <ul>
            <li>Operate, secure, and maintain the website.</li>
            <li>Analyze usage to improve articles and product guides.</li>
            <li>Attribute affiliate referrals where applicable.</li>
          </ul>
        </section>

        <section className="card">
          <h3>Your Choices</h3>
          <ul>
            <li>
              <strong>Analytics opt-out:</strong> You can use the{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Analytics Opt-out Add-on
              </a>{" "}
              or adjust your browser privacy settings.
            </li>
            <li>
              <strong>Cookies:</strong> You can clear, block, or control cookies via your browser.
              See <a href="/cookies">Cookies Policy</a> for guidance.
            </li>
          </ul>
        </section>

        <section className="card">
          <h3>Third-Party Links</h3>
          <p>
            We link to other websites (e.g., Amazon). Their privacy practices are their own—please review
            their policies.
          </p>
        </section>

        <section className="card">
          <h3>Contact</h3>
          <p>
            Email: <a href="mailto:hello@wild-and-well.store">hello@wild-and-well.store</a>
          </p>
        </section>

        <section className="card">
          <h3>Changes</h3>
          <p>
            We may update this policy to reflect changes to our practices or legal requirements. We will
            update the “Last updated” date above when we do.
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

