// pages/_app.js
import { MDXProvider } from "@mdx-js/react";
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";
import ConsentBanner from "../components/ConsentBanner";
import SmartLink from "../components/SmartLink";
import { GA_ID, initGA, trackAffiliateClick } from "../lib/analytics";
import dynamic from "next/dynamic";

const SiteStructuredData = dynamic(() => import("../components/SiteStructuredData"), { ssr: true });

const mdxComponents = {
  a: (props) => <SmartLink {...props} />,
  h1: (props) => <h1 {...props} />,
  h2: (props) => <h2 {...props} />,
  p: (props) => <p {...props} />,
};

const isProd = process.env.NEXT_PUBLIC_ENVIRONMENT === "production" || process.env.VERCEL_ENV === "production";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  const router = useRouter();

  useEffect(() => { if (GA_ID) initGA(); }, []);

  useEffect(() => {
    function onClick(e) {
      if (e.defaultPrevented) return;
      let el = e.target;
      while (el && el.tagName !== "A") el = el.parentElement;
      if (!el || el.tagName !== "A") return;
      const href = el.getAttribute("href") || "";
      if (!href.startsWith("/go/")) return;
      const slug = href.replace(/^\/go\//, "");
      try { trackAffiliateClick({ href, slug }); } catch {}
    }
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {!isProd ? <meta name="robots" content="noindex,nofollow" /> : null}
      </Head>

      {/* GA4 loader */}
      {GA_ID ? (
        <>
          <Script id="gtm-dataLayer" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);} `}
          </Script>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
        </>
      ) : null}

      <SiteStructuredData />

      <MDXProvider components={mdxComponents}>
        {getLayout(<Component {...pageProps} />)}
      </MDXProvider>

      <ConsentBanner />
    </>
  );
}

export default MyApp;
