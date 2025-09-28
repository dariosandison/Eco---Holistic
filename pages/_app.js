// pages/_app.js
import '../styles/global.css';
import Header from '../components/Header';
import NewsletterBar from '../components/NewsletterBar';
import Footer from '../components/Footer';

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="app-shell">
      <Header />
      <NewsletterBar />
      <main className="app-main">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
