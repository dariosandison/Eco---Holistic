// pages/privacy.js
import Head from "next/head";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Wild & Well</title>
        <meta
          name="description"
          content="How we handle your data, cookies, and third-party services on Wild & Well."
        />
      </Head>

      <main className="container">
        <h1>Privacy Policy</h1>
        <p>
          We respect your privacy. We collect minimal analytics to understand site
          performance (e.g., page views). We do not sell personal data.
        </p>
        <h2>Cookies</h2>
        <p>
          We use essential cookies for basic functionality and may use analytics
          cookies to improve the site. See our <a href="/cookies">Cookies Policy</a> for details.
        </p>
        <h2>Third-Party Links</h2>
        <p>
          We link to third-party merchants (e.g., Amazon). Their sites have their
          own privacy policies and cookie practices.
        </p>
        <h2>Contact</h2>
        <p>
          If you have questions, email <a href="mailto:hello@wild-and-well.store">hello@wild-and-well.store</a>.
        </p>
      </main>

      <style jsx>{`
        .container { max-width: 800px; margin: 2rem auto; padding: 0 16px; }
        h1 { margin-bottom: .5rem; }
        h2 { margin-top: 1.25rem; }
        p { color: var(--muted); }
      `}</style>
    </>
  );
}
