// pages/affiliate-disclosure.js
import Head from 'next/head';

export default function AffiliateDisclosure() {
  return (
    <>
      <Head>
        <title>Affiliate Disclosure — Wild &amp; Well</title>
        <meta name="robots" content="noindex,follow" />
      </Head>
      <div className="container" style={{ marginTop: 22 }}>
        <article className="post">
          <h1 className="post-title">Affiliate Disclosure</h1>
          <p>We’re reader-supported. If you buy through links on Wild &amp; Well, we may earn a commission at no extra cost to you. This helps fund our testing and writing.</p>
          <h2>How this affects our recommendations</h2>
          <ul>
            <li>We only recommend products we have used or researched deeply.</li>
            <li>Affiliate relationships never guarantee inclusion or “best” status.</li>
            <li>All affiliate links are qualified with <code>rel="nofollow sponsored"</code>.</li>
          </ul>
          <p>If you have questions about a recommendation, contact us and we’ll help.</p>
        </article>
      </div>
    </>
  );
}
