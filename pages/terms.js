// pages/terms.js
import Head from "next/head";

export default function Terms() {
  const title = "Terms of Use | Wild & Well";
  const desc = "The terms and conditions for using Wild & Well.";
  const url = "https://www.wild-and-well.store/terms";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
      </Head>

      <main className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-3xl font-semibold tracking-tight">Terms of Use</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: {new Date().toISOString().slice(0, 10)}</p>

        <div className="prose prose-slate mt-6 max-w-none">
          <h2>Acceptance of Terms</h2>
          <p>
            By accessing or using Wild & Well, you agree to these Terms. If you do not agree, do not use the site.
          </p>

          <h2>Content</h2>
          <p>
            Content is for informational purposes only and may change without notice. We do not guarantee accuracy,
            completeness, or timeliness.
          </p>

          <h2>Medical, Legal, and Financial Disclaimer</h2>
          <p>
            Content is not medical, legal, or financial advice. Always consult a qualified professional for advice
            tailored to your situation.
          </p>

          <h2>Affiliate Relationships</h2>
          <p>
            We may earn commissions from qualifying purchases via affiliate links, at no additional cost to you.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            The site and its original content are owned by Wild & Well and protected by applicable laws. You may not
            copy, reproduce, or distribute content without permission.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent allowed by law, Wild & Well is not liable for any indirect, incidental, or
            consequential damages arising from your use of the site.
          </p>

          <h2>Links to Third Parties</h2>
          <p>
            We are not responsible for the content or practices of third-party websites linked from our site.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We may update these Terms at any time by posting a new version here.
          </p>

          <h2>Contact</h2>
          <p>
            Questions? Email <a href="mailto:hello@wild-and-well.store">hello@wild-and-well.store</a>.
          </p>
        </div>
      </main>
    </>
  );
}
