import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#C9D8B6" />
      </Head>
      <div className="min-h-screen bg-olive-25 text-olive-950">
        <Header />
        <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
        <Footer />
      </div>
    </>
  );
}
