// pages/product-disclosure.js
import Head from 'next/head';

export default function ProductDisclosure() {
  return (
    <>
      <Head>
        <title>Product Disclosure — Wild &amp; Well</title>
        <meta name="robots" content="noindex,follow" />
      </Head>
      <div className="container" style={{ marginTop: 22 }}>
        <article className="post">
          <h1 className="post-title">Product Disclosure</h1>
          <p>Products referenced on Wild &amp; Well may be purchased by us or sent by brands as review units. Receiving a unit does not guarantee coverage or a positive review.</p>
          <ul>
            <li>We disclose any material connection where relevant.</li>
            <li>Loaned products are returned unless otherwise stated.</li>
            <li>We do not sell positive placement.</li>
          </ul>
        </article>
      </div>
    </>
  );
}
