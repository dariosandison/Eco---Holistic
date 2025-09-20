// pages/cookies.js
import Head from "next/head";

export default function Cookies() {
  return (
    <>
      <Head>
        <title>Cookies Policy | Wild & Well</title>
        <meta
          name="description"
          content="Information about cookies used on Wild & Well and how to control them."
        />
      </Head>

      <main className="container">
        <h1>Cookies Policy</h1>
        <p>
          Cookies are small text files stored on your device to help the site
          function and measure performance. We use:
        </p>
        <ul>
          <li><strong>Essential cookies</strong> for basic site features.</li>
          <li>
            <strong>Analytics cookies</strong> to understand traffic and improve
            content.
          </li>
        </ul>
        <h2>Managing Cookies</h2>
        <p>
          You can control cookies in your browser settings (e.g., block or delete
          cookies). Note that disabling cookies may affect site functionality.
        </p>
        <h2>Contact</h2>
        <p>
          Questions? Email <a href="mailto:hello@wild-and-well.store">hello@wild-and-well.store</a>.
        </p>
      </main>

      <style jsx>{`
        .container { max-width: 800px; margin: 2rem auto; padding: 0 16px; }
        h1 { margin-bottom: .5rem; }
        h2 { margin-top: 1.25rem; }
        p, li { color: var(--muted); }
      `}</style>
    </>
  );
}
