import Head from "next/head";

export default function Terms() {
  const title = "Terms of Use";
  const description =
    "Rules for using Wild & Well: content ownership, disclaimers, and limitations of liability.";
  const canonical = "https://www.wild-and-well.store/terms";

  return (
    <>
      <Head>
        <title>{title} | Wild & Well</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
      </Head>

      <main className="wrap">
        <h1>Terms of Use</h1>
        <p className="small">Last updated: {new Date().toISOString().slice(0,10)}</p>

        <h2>Use of the Site</h2>
        <p>By accessing this website, you agree to these Terms.</p>

        <h2>Content & Advice Disclaimer</h2>
        <p>Information is educational only and not medical/pro advice.</p>

        <h2>Affiliate Disclosure</h2>
        <p>
          We may earn commissions from affiliate links (including Amazon). See our{" "}
          <a href="/disclosure">Affiliate Disclosure</a>.
        </p>

        <h2>Intellectual Property</h2>
        <p>Content belongs to Wild &amp; Well unless stated otherwise.</p>

        <h2>External Links</h2>
        <p>We’re not responsible for content/policies of external sites.</p>

        <h2>Limitation of Liability</h2>
        <p>Provided “as is” without warranties; use at your own risk.</p>

        <h2>Contact</h2>
        <p>
          Questions? <a href="mailto:support@wild-and-well.store">support@wild-and-well.store</a>
        </p>
      </main>

      <style jsx>{`
        .wrap { max-width: 820px; margin: 32px auto; padding: 0 16px; }
        .small { color: #6b7280; font-size: 0.9rem; margin-bottom: 14px; }
        h2 { margin-top: 22px; }
      `}</style>
    </>
  );
}
