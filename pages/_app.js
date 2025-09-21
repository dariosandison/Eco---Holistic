// pages/_app.js
import "@/styles/globals.css";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  const GA = process.env.NEXT_PUBLIC_GA_ID || "";

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {process.env.NEXT_PUBLIC_GSC_VERIFICATION && (
          <meta
            name="google-site-verification"
            content={process.env.NEXT_PUBLIC_GSC_VERIFICATION}
          />
        )}
      </Head>

      {/* GA4 (loads only if an ID is set) */}
      {GA && (
        <>
          <Script async src={`https://www.googletagmanager.com/gtag/js?id=${GA}`} />
          <Script id="ga-setup">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA}', { anonymize_ip: true });
            `}
          </Script>
        </>
      )}

      <a href="#main" className="skip-link">Skip to content</a>
      <Component {...pageProps} />
    </>
  );
}
