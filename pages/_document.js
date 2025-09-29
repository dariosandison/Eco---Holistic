// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';
import site from '../site.config';

export default class MyDocument extends Document {
  render() {
    const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN; // e.g. wild-and-well.store
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content={site?.themeColor || '#ffffff'} />
          {plausibleDomain ? (
            <script
              defer
              data-domain={plausibleDomain}
              src="https://plausible.io/js/script.js"
            />
          ) : null}
          <link rel="icon" href={site?.brand?.favicon || '/favicon.ico'} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
