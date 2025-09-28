// pages/404.js
import Head from 'next/head';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <Head><title>Not Found — Wild &amp; Well</title></Head>
      <div className="container" style={{ marginTop: 22 }}>
        <section className="hero">
          <div className="hero-inner">
            <h1 className="post-title">Page not found</h1>
            <p className="hero-slogan">Let’s get you back to something helpful.</p>
            <div className="cta-row">
              <Link className="btn btn-primary" href="/guides">Browse Guides</Link>
              <Link className="btn btn-outline" href="/hubs/sleep">Visit Sleep Hub</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
