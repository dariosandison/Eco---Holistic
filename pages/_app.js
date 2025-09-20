import '../styles/globals.css';
import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Baseline meta + fonts */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Merriweather:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
