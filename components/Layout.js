// components/Layout.js
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import site from '@/site.config';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="theme-color" content={site.themeColor || '#C9D8B6'} />
      </Head>
      <div className="min-h-screen bg-olive-25 text-olive-950">
        <Header />
        <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
  // in components/Layout.js, inside the root component JSX
{/* ...rest of layout */}
{/* Mount search modal once */}
{typeof window !== 'undefined' && require('@/components/SearchModal').default && <></>}

        <Footer />
      </div>
    </>
  );
}
