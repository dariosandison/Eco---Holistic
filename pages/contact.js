import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact — Wild & Well</title>
        <meta name="description" content="Get in touch with Wild & Well." />
        <link rel="canonical" href="https://www.wild-and-well.store/contact" />
      </Head>

      <main className="wrap">
        <h1>Contact</h1>
        <p>Questions, feedback, or partnership ideas? I’d love to hear from you.</p>

        <div className="card">
          <h2>Email</h2>
          <p>
            <a href="mailto:hello@wild-and-well.store">hello@wild-and-well.store</a>
          </p>
          <p className="hint">
            Prefer a form? Your email client will open — this site runs as a static export for speed/privacy.
          </p>
        </div>

        <div className="card">
          <h2>Social</h2>
          <ul>
            <li><a href="https://instagram.com/" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://pinterest.com/" target="_blank" rel="noreferrer">Pinterest</a></li>
            <li><a href="https://facebook.com/" target="_blank" rel="noreferrer">Facebook</a></li>
          </ul>
        </div>
      </main>

      <style jsx>{`
        .wrap { max-width: 820px; margin: 0 auto; padding: 24px; }
        h1 { margin-bottom: 8px; }
        .card { border: 1px solid #eee; border-radius: 10px; padding: 16px; margin: 16px 0; background: #fff; }
        .hint { color: #666; font-size: 14px; }
        a { color: #0a7; }
      `}</style>
    </>
  );
}
