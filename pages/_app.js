// pages/_app.js
import '../styles/globals.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
// inside <Head> in _app.js or _document.js
<script type="application/ld+json" dangerouslySetInnerHTML={{
  __html: JSON.stringify({
    "@context":"https://schema.org",
    "@graph":[
      organization({ name:"Wild & Well", url:"https://www.wild-and-well.store", logo:"/logo.svg" }),
      website({ name:"Wild & Well", url:"https://www.wild-and-well.store" })
    ]
  })
}} />

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
