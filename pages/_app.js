// /pages/_app.js
import "../styles/globals.css";
import Script from "next/script";

const GA_MEASUREMENT_ID = "G-0G3ER4B1RE";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* GA4 */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', { anonymize_ip: true });
        `}
      </Script>

      {/* Layout */}
      <div className="site">
        <header className="header">
          <div className="container header__inner">
            <a className="brand" href="/">Wild & Well</a>
            <nav className="nav">
              <a href="/guides">Guides</a>
              <a href="/blog">Blog</a>
              <a href="/recommended">Recommended</a>
              <a href="/deals">Deals</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </nav>
          </div>
        </header>

        <main className="main">
          <Component {...pageProps} />
        </main>

        <footer className="footer">
          <div className="container footer__inner">
            <div>
              <strong>Wild & Well</strong>
              <div className="muted">Practical wellness & low-tox living.</div>
            </div>
            <div className="footer__links">
              <a href="/privacy">Privacy</a>
              <a href="/cookies">Cookies</a>
              <a href="/disclosure">Disclosure</a>
              <a href="/terms">Terms</a>
            </div>
          </div>
          <div className="footer__bottom">
            © {new Date().getFullYear()} Wild & Well — Some links may be affiliate.
          </div>
        </footer>
      </div>
    </>
  );
}
