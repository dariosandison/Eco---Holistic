// pages/_app.js
import { useEffect } from "react";
import Script from "next/script";
import { GA_MEASUREMENT_ID, gtag } from "../src/lib/gtag";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Delegate clicks for links marked as affiliate
    function onClick(e) {
      const a = e.target.closest("a");
      if (!a) return;
      const isAffiliate = a.dataset?.affiliate === "true";
      if (!isAffiliate) return;
      gtag("select_promotion", {
        promotion_name: "affiliate_link",
        creative_name: a.textContent?.trim() || "",
        destination: a.href,
        page_path: window.location.pathname,
      });
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      {/* GA4 core */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', { anonymize_ip: true });
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}
