// pages/_app.js
import '../styles/globals.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="page-shell">
      <Nav />
      <main className="page-main">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
