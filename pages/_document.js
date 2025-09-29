// pages/_document.js
// Functional Custom Document (ESM-safe). Injects Plausible analytics.
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN; // e.g. www.wild-and-well.store

  return (
    <Html lang="en">
      <Head>
        {plausibleDomain ? (
          <script
            defer
            data-domain={plausibleDomain}
            src="https://plausible.io/js/script.js"
          />
        ) : null}
        {/* Add other global tags if needed, e.g. <meta name="theme-color" content="#ffffff" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
