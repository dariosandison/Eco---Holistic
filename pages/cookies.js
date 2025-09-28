// pages/cookies.js
import Head from 'next/head';

export default function Cookies() {
  return (
    <>
      <Head>
        <title>Cookies — Wild &amp; Well</title>
        <meta name="robots" content="noindex,follow" />
      </Head>
      <div className="container" style={{ marginTop: 22 }}>
        <article className="post">
          <h1 className="post-title">Cookies</h1>
          <p>We use essential cookies to make the site work and analytics cookies to understand traffic in aggregate. You can block cookies in your browser settings.</p>
          <h2>Types of cookies</h2>
          <ul>
            <li>Essential: session, preferences</li>
            <li>Analytics: anonymized page views and performance metrics</li>
          </ul>
        </article>
      </div>
    </>
  );
}
