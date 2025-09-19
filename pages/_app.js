// pages/_app.js
import '../styles/globals.css';
import Head from 'next/head';
import DisclosureNote from '../components/DisclosureNote';
// If you have a Nav component, you can import it too:
// import Nav from '../components/Nav';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Optional global nav */}
      {/* <Nav /> */}

      <Component {...pageProps} />
      <DisclosureNote />
    </>
  );
}
