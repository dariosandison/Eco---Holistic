// pages/_app.js
import "@/styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const GA_ID = process.env.NEXT_PUBLIC_GA4_ID || ""; // e.g. G-XXXXXXX

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // Track route changes as GA4 pageviews
  useEffect(() => {
    if (!GA_ID) return;
    const handleRouteChange = (url) => {
      window.gtag?.("event", "page_view", { page_location: url });
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);

  return (
    <>
      <Head>
        {/* Base SEO (can be overridden per-page) */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* GA4 loader — loads only if NEXT_PUBLIC_GA4_ID is set */}
      {GA_ID && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
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
      )}

      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
