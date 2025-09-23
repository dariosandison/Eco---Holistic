// pages/_app.js
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import "../styles/globals.css";

const GA_ID = "G-0G3ER4B1RE";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const canonicalUrl =
    "https://www.wild-and-well.store" +
    (router.asPath === "/" ? "/" : router.asPath.split("?")[0]);

  const defaultTitle = "Wild & Well — Practical wellness & low-tox living";
  const defaultDesc =
    "Evidence-informed guides, gear, and simple routines for feeling better every day.";

  return (
    <>
      {/* Default meta for every page */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{defaultTitle}</title>
        <meta name="description" content={defaultDesc} />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={defaultTitle} />
        <meta property="og:description" content={defaultDesc} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="/og-default.jpg" />
        <meta property="og:site_name" content="Wild & Well" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={defaultTitle} />
        <meta name="twitter:description" content={defaultDesc} />
        <meta name="twitter:image" content="/og-default.jpg" />
      </Head>

      {/* GA4 */}
      <Script
        id="ga4-src"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true, page_path: window.location.pathname });
        `}
      </Script>

      <Component {...pageProps} />
    </>
  );
}
