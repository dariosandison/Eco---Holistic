// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const site = process.env.NEXT_PUBLIC_SITE_URL || "https://www.wild-and-well.store";
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0b3d2e" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <meta property="og:site_name" content="Wild & Well" />
        <meta property="og:image" content={`${site}/cover.png`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

