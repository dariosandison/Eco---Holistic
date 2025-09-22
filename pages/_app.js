// /pages/_app.js
import "@/styles/globals.css";
import Script from "next/script";
import { SITE } from "@/src/site.config";

export default function App({ Component, pageProps }) {
  const gaId = SITE.gaId;

  return (
    <>
      {/* GA4 */}
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', { anonymize_ip: true });
            `}
          </Script>
        </>
      )}
      <Component {...pageProps} />
    </>
  );
}
