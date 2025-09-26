// components/Layout.js
import SEO from '@/components/SEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import site from '@/../site.config';

export default function Layout({ children, seo = {} }) {
  return (
    <>
      <SEO {...seo} canonical={seo.canonical || site.domain} />
      <div className="min-h-screen bg-olive-25 text-olive-950">
        <a href="#main" className="sr-only focus:not-sr-only focus:block p-2">
          Skip to content
        </a>
        <Header />
        <main id="main" className="mx-auto max-w-6xl px-4 py-8">{children}</main>
        <Footer />
      </div>
    </>
  );
}
