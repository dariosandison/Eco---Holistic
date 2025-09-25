// components/Layout.js
import Head from 'next/head';
import Nav from './Nav';
import Footer from './Footer';

export default function Layout({
  children,
  title,
  description,
  noHeader = false,
  noFooter = false,
}) {
  const siteTitle = title ? `${title} – Wild & Well` : 'Wild & Well';
  const siteDesc =
    description ||
    'Practical wellness guides, clean products, and simple habits.';

  return (
    <>
      <Head>
        {/* keep this light; SEO component can add richer tags per page */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {title && <title>{siteTitle}</title>}
        {description && <meta name="description" content={siteDesc} />}
      </Head>

      {/* a11y: skip link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 bg-white px-3 py-2 rounded-md shadow"
      >
        Skip to content
      </a>

      {!noHeader && <Nav />}

      <main id="main" className="min-h-[60vh]">
        {children}
      </main>

      {!noFooter && <Footer />}
    </>
  );
}
