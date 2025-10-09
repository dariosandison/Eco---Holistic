import "@/styles/globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import NewsletterBar from "@/components/NewsletterBar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SiteHeader />
      <main className="container">
        <Component {...pageProps} />
      </main>
      <NewsletterBar />
      <SiteFooter />
    </>
  );
}
