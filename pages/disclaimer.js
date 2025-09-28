// pages/disclaimer.js
import Head from 'next/head';

export default function Disclaimer() {
  return (
    <>
      <Head>
        <title>Disclaimer — Wild &amp; Well</title>
        <meta name="robots" content="noindex,follow" />
      </Head>
      <div className="container" style={{ marginTop: 22 }}>
        <article className="post">
          <h1 className="post-title">Disclaimer</h1>
          <p>The content on Wild &amp; Well is for informational purposes only and is not a substitute for professional medical advice. Always consult a qualified healthcare provider regarding any health questions.</p>
          <p>We strive for accuracy, but information may change and individual results vary.</p>
        </article>
      </div>
    </>
  );
}

