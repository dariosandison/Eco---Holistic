import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const siteName = 'Wild & Well';
  const theme = '#0f1a0d';

  return (
    <Html lang="en">
      <Head>
        {/* PWA / icons */}
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content={theme} />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="icon" href="/icon-192.png" sizes="192x192" />
        <link rel="icon" href="/icon-512.png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/icon-192.png" />

        {/* Preload brand font(s) here if you add any later */}

        {/* Basic meta fallback */}
        <meta name="application-name" content={siteName} />
        <meta name="apple-mobile-web-app-title" content={siteName} />
        <meta name="color-scheme" content="light dark" />
      </Head>
      <body className="bg-white text-slate-900 antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

