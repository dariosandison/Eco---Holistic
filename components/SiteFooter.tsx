import Link from "next/link";
import site from "@/data/site.config.json";

export default function SiteFooter(){
  return (
    <footer className="footer-fixed">
      <div className="container">
        <div className="footer-links">
          <Link href="/about">About</Link>
          <Link href="/editorial-policy">Editorial Policy</Link>
          <Link href="/how-we-test">How We Test</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/cookies">Cookies</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/disclaimer">Disclaimer</Link>
          <Link href="/disclosure">Affiliate Disclosure</Link>
          <Link href="/product-disclosure">Product Disclosure</Link>
          {site.social?.instagram && <a href={site.social.instagram} target="_blank" rel="noopener">Instagram</a>}
          {site.social?.pinterest && <a href={site.social.pinterest} target="_blank" rel="noopener">Pinterest</a>}
        </div>
        <div className="footer-meta">
          © {new Date().getFullYear()} {site.siteName} • Independent • Reader-supported
        </div>
      </div>
    </footer>
  );
}

