// pages/_app.js
import "../styles/globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Head from "next/head";
import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Site-wide defaults; per-page SEO via <SEO /> */}
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* GA4 only renders if NEXT_PUBLIC_GA_ID is set */}
      {GA_ID ? (
        <>
          <Script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
          <Script id="ga4">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}</Script>
        </>
      ) : null}

      {/* Organization JSON-LD */}
      <Script id="org-ld" type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Wild & Well",
            url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com",
            logo: (process.env.NEXT_PUBLIC_SITE_URL || "") + "/favicon.ico",
            sameAs: [
              "https://www.instagram.com/yourpage",
              "https://www.pinterest.com/yourpage"
            ]
          })
        }}
      />

      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
