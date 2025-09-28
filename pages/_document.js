// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" data-theme="wildandwell">
      <Head>
        {/* Color & rendering hints */}
        <meta name="theme-color" content="#fdf6e5" />
        <meta name="color-scheme" content="light only" />

        {/* Preconnects for analytics (safe even if GA is disabled) */}
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="" />

        {/* Preload the homepage LCP (logo) */}
        <link
          rel="preload"
          as="image"
          href="/logo.svg"
          type="image/svg+xml"
          imagesrcset="/logo.svg"
          fetchpriority="high"
        />

        {/* Favicon basics */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <noscript><div style={{display:'none'}}>JavaScript disabled</div></noscript>
      </body>
    </Html>
  );
}
