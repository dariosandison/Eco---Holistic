import "../styles/globals.css";
import "../styles/ui.css"; // delete if you don't have it
import { MDXProvider } from "@mdx-js/react";
import mdxComponents from "../components/mdx";
import Layout from "../components/Layout";
import Analytics from "../components/Analytics";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script src="/assets/js/siteconfig.js" strategy="beforeInteractive" />
      <Script src="/assets/js/consent-banner.js" strategy="afterInteractive" />
      <Script src="/assets/js/click-tracking.js" strategy="afterInteractive" />
      <Script src="/assets/js/affiliate-links.js" strategy="afterInteractive" />
      <Script src="/assets/js/comparison-table.js" strategy="afterInteractive" />
      <Script src="/assets/js/email-capture.js" strategy="afterInteractive" />
      <Analytics />
      <MDXProvider components={mdxComponents || {}}>
        <Layout><Component {...pageProps} /></Layout>
      </MDXProvider>
    </>
  );
}
