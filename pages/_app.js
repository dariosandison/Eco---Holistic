// pages/_app.js
import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import SiteFooter from "../components/SiteFooter";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-0G3ER4B1RE";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* GA4 */}
      {GA_ID ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { anonymize_ip: true });
            `}
          </Script>
        </>
      ) : null}

      <Component {...pageProps} />
      <SiteFooter />
    </>
  );
}
