// pages/privacy.js
import Head from "next/head";

export default function Privacy() {
  const title = "Privacy Policy | Wild & Well";
  const desc =
    "How Wild & Well collects, uses, and protects your information, including cookies, analytics, and affiliate links.";
  const url = "https://www.wild-and-well.store/privacy";

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
        <h1 className="text-3xl font-semibold tracking-tight">Privacy Policy</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: {new Date().toISOString().slice(0, 10)}</p>

        <div className="prose prose-slate mt-6 max-w-none">
          <p>
            Wild & Well (“we”, “us”, “our”) respects your privacy. This Policy explains what data we collect,
            how we use it, and your choices.
          </p>

          <h2>Information We Collect</h2>
          <ul>
            <li><strong>Usage data:</strong> pages visited, clicks, and general engagement (via Google Analytics 4).</li>
            <li><strong>Cookies:</strong> small files used to remember preferences and measure performance.</li>
            <li><strong>Voluntary info:</strong> if you email us, we receive your email address and message.</li>
          </ul>

          <h2>How We Use Information</h2>
          <ul>
            <li>Improve site content, usability, and performance.</li>
            <li>Measure traffic and understand what content is most helpful.</li>
            <li>Comply with legal obligations and prevent abuse.</li>
          </ul>

          <h2>Analytics (GA4)</h2>
          <p>
            We use Google Analytics 4 with IP anonymization enabled. You can opt out by using Google’s opt-out
            tools or your browser’s privacy controls.
          </p>

          <h2>Affiliate Links</h2>
          <p>
            Some links are affiliate links. If you purchase through them, we may earn a commission at no extra
            cost to you. These links help support our work.
          </p>

          <h2>Data Sharing</h2>
          <p>
            We do not sell personal data. We share limited data with service providers (e.g., analytics) to
            operate the site.
          </p>

          <h2>Data Retention</h2>
          <p>
            We retain data only as long as necessary for the purposes above or as required by law.
          </p>

          <h2>Your Choices</h2>
          <ul>
            <li>Use your browser to block cookies.</li>
            <li>Use analytics opt-out tools.</li>
            <li>Email us to request deletion of messages you’ve sent us.</li>
          </ul>

          <h2>Children’s Privacy</h2>
          <p>
            Our content is for general audiences and not directed to children under 13. We do not knowingly collect
            personal information from children.
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
