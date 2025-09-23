// pages/_app.js
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import "../styles/globals.css";
import Newsletter from "../components/Newsletter";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || ""; // already set earlier

function gtag(...args) {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push(args);
  }
}

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // basic pageview on route change (optional)
    const handleRoute = (url) => {
      if (!GA_ID) return;
      window.gtag?.("config", GA_ID, { page_path: url });
    };
    if (typeof window !== "undefined") {
      window.addEventListener("hashchange", () => handleRoute(location.pathname + location.hash));
    }
    return () => window.removeEventListener("hashchange", () => {});
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Google Analytics (uses GA4 id you already added) */}
      {GA_ID ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { anonymize_ip: true });
            `}
          </Script>
        </>
      ) : null}

      {/* Page content */}
      <Component {...pageProps} />

      {/* Site-wide email capture (sticky bar + footer block) */}
      <Newsletter />
    </>
  );
}
