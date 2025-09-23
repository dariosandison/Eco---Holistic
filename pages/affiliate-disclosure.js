// pages/affiliate-disclosure.js
import Head from "next/head";

export default function AffiliateDisclosure() {
  const title = "Affiliate Disclosure | Wild & Well";
  const desc = "Disclosure of our use of affiliate links on Wild & Well.";
  const url = "https://www.wild-and-well.store/affiliate-disclosure";

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
        <h1 className="text-3xl font-semibold tracking-tight">Affiliate Disclosure</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: {new Date().toISOString().slice(0, 10)}</p>

        <div className="prose prose-slate mt-6 max-w-none">
          <p>
            Some links on Wild & Well are affiliate links. If you click an affiliate link and make a purchase,
            we may earn a commission at no additional cost to you.
          </p>
          <p>
            We only recommend products we genuinely believe are helpful. Commissions help keep our content free.
          </p>
          <p>
            Have questions? Email <a href="mailto:hello@wild-and-well.store">hello@wild-and-well.store</a>.
          </p>
        </div>
      </main>
    </>
  );
}

