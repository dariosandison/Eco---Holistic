import "../styles/globals.css";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import NewsletterBar from "../components/NewsletterBar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SiteHeader />
      <NewsletterBar />
      <main className="min-h-screen bg-brand-green text-brand-cream">
        <Component {...pageProps} />
      </main>
      <SiteFooter />
    </>
  );
}
