// components/Layout.js
import Header from './Header';
import Footer from './Footer';
import NewsletterBar from './NewsletterBar';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="page">{children}</main>
      <Footer />
      <NewsletterBar />
    </>
  );
}
