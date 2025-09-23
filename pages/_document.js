// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Wild & Well",
  "url": "https://www.wild-and-well.store",
  "logo": "https://www.wild-and-well.store/favicon.ico",
  "sameAs": []
};

const WEBSITE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Wild & Well",
  "url": "https://www.wild-and-well.store"
};

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Sensible defaults for every page */}
        <meta name="theme-color" content="#0f172a" />
        <meta
          name="description"
          content="Wild & Well — practical, low-tox tips and vetted product picks."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Wild & Well" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Organization + Website JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_JSONLD) }}
        />
      </Head>
      <body className="bg-white text-slate-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
