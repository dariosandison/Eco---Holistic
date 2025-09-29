// pages/_document.jsx
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* App identity */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.webmanifest" />

        {/* Performance: hint the browser we’ll load images & styles */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="color-scheme" content="light" />

        {/* Ensure images don’t cause layout shift when dimensions are set */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
