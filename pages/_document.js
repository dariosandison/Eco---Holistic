// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const siteName = "Wild & Well";
  return (
    <Html lang="en">
      <Head>
        {/* Google Search Console verification */}
        <meta
          name="google-site-verification"
          content="Av_pqZlbZTPcXOAjnUZ826c433VlzcKUcyODsNRicOU"
        />

        {/* PWA + Icons (safe if files don’t exist yet) */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Brand color for address bar on mobile */}
        <meta name="theme-color" content="#0b3d2e" />
        <meta name="application-name" content={siteName} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
