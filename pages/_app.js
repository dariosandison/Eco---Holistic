// /pages/_app.js
import "../styles/globals.css";
import { useEffect } from "react";
import Script from "next/script";
import CookieConsent from "../components/CookieConsent";
import { useRouter } from "next/router";

const GA_ID = process.env.NEXT_PUBLIC_GA4_ID || "G-0G3ER4B1RE";

function pageview(url) {
  if (typeof window === "undefined") return;
  window.gtag?.("config", GA_ID, { page_path: url });
}

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => pageview(url);
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);

  return (
    <>
      {/* GA4 core */}
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
          gtag('config', '${GA_ID}', { send_page_view: true });
        `}
      </Script>

      {/* App */}
      <Component {...pageProps} />

      {/* Non-blocking cookie notice (small toast) */}
      <CookieConsent />
    </>
  );
}
