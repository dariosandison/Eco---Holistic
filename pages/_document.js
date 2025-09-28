// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

const ORG = {
  "@context":"https://schema.org",
  "@type":"Organization",
  name:"Wild & Well",
  url:"https://www.wild-and-well.store",
  logo:"https://www.wild-and-well.store/logo.svg"
};
const WEBSITE = {
  "@context":"https://schema.org",
  "@type":"WebSite",
  name:"Wild & Well",
  url:"https://www.wild-and-well.store",
  potentialAction:{
    "@type":"SearchAction",
    target:"https://www.wild-and-well.store/search?q={search_term_string}",
    "query-input":"required name=search_term_string"
  }
};

export default class MyDocument extends Document {
  render() {
    const GA = process.env.NEXT_PUBLIC_GA_ID;
    return (
      <Html lang="en">
        <Head>
          {/* Performance: preconnect for GA if enabled */}
          {GA ? <link rel="preconnect" href="https://www.googletagmanager.com" /> : null}
          {GA ? <link rel="dns-prefetch" href="https://www.googletagmanager.com" /> : null}

          {/* Site-wide JSON-LD (Organization + Website) */}
          <script
            type="application/ld+json"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@graph":[ORG, WEBSITE]}) }}
          />
          {/* GA4 (loads only if NEXT_PUBLIC_GA_ID is set) */}
          {GA && (
            <>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA}`} />
              <script
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA}', { anonymize_ip: true, send_page_view: true });
                  `,
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
