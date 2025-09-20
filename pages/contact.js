import Head from "next/head";

export default function Contact() {
  const title = "Contact";
  const description = "Get in touch with Wild & Well.";
  const canonical = "https://www.wild-and-well.store/contact";

  return (
    <>
      <Head>
        <title>{title} | Wild & Well</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={`${title} | Wild & Well`} />
        <meta property="og:description" content={description} />
      </Head>

      <main className="wrap">
        <h1>Contact</h1>
        <p>
          Email us at{" "}
          <a href="mailto:support@wild-and-well.store">support@wild-and-well.store</a>.
        </p>
        <h2>DMCA / Media</h2>
        <p>Please include URLs and any supporting details for a prompt response.</p>
      </main>

      <style jsx>{`
        .wrap { max-width: 820px; margin: 32px auto; padding: 0 16px; }
        h1 { margin-bottom: 8px; }
      `}</style>
    </>
  );
}
