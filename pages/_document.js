// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Optional: global CSS from /public */}
        <link rel="stylesheet" href="/assets/css/affiliate.css" />
        {/* OG fallback image for social (optional) */}
        <meta property="og:image" content="/logo.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
