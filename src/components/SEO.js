// /components/SEO.js
import Head from "next/head";
import { site } from "../src/lib/site";

export default function SEO({ title, description, path = "/", jsonLd = [] }) {
  const url = `${site.url}${path}`;
  const fullTitle = title ? `${title} — ${site.name}` : site.name;

  return (
    <Head>
      <title>{fullTitle}</title>
      {description ? <meta name="description" content={description} /> : null}
      <link rel="canonical" href={url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={fullTitle} />
      {description ? <meta property="og:description" content={description} /> : null}
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={site.name} />
      {jsonLd.length
        ? jsonLd.map((obj, i) => (
            <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }} />
          ))
        : null}
    </Head>
  );
}
