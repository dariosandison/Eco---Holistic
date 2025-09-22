import "@/styles/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import * as gtag from "@/src/lib/gtag";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (!gtag.GA_ID) return;
    const handleRouteChange = (url) => gtag.pageview(url);
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);

  return (
    <>
      {gtag.GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${gtag.GA_ID}', { page_path: window.location.pathname });
            `}
          </Script>
        </>
      )}
      <Component {...pageProps} />
    </>
  );
}

