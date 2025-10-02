import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import NewsletterFloat from "./NewsletterFloat";

export default function Layout({ children }) {
  return (
    <>
      <SiteHeader />
      <main className="container" style={{ paddingTop: 24, paddingBottom: 96 }}>
        {children}
      </main>
      <NewsletterFloat />
      <SiteFooter />
    </>
  );
}
