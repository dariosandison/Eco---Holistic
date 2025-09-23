// pages/disclaimer.js
import Head from "next/head";

export default function Disclaimer() {
  const title = "General Disclaimer | Wild & Well";
  const desc = "Important disclaimers about Wild & Well content.";
  const url = "https://www.wild-and-well.store/disclaimer";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
      </Head>

      <main className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-3xl font-semibold tracking-tight">General Disclaimer</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: {new Date().toISOString().slice(0, 10)}</p>

        <div className="prose prose-slate mt-6 max-w-none">
          <p>
            Wild & Well provides general information for educational purposes only. It is not a substitute for
            professional medical, legal, financial, or other advice.
          </p>
          <p>
            Always seek the advice of a qualified professional with any questions you may have regarding a condition,
            product, or decision.
          </p>
          <p>
            Reliance on any information provided by this site is solely at your own risk.
          </p>
        </div>
      </main>
    </>
  );
}
