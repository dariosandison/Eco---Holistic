// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';
import site from '@/../site.config';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content={site.color} />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* add your font link if needed */}
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
