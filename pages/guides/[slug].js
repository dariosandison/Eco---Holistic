// pages/guides/[slug].js
import Head from "next/head";
import Link from "next/link";
import { useMemo } from "react";
import { getAllGuidesMeta } from "../../src/lib/guides";

function toArray(maybe) {
  if (Array.isArray(maybe)) return maybe;
  if (!maybe || typeof maybe !== "object") return [];
  if (Array.isArray(maybe.items)) return maybe.items;
  if (Array.isArray(maybe.guides)) return maybe.guides;
  if (Array.isArray(maybe.data)) return maybe.data;
  const vals = Object.values(maybe);
  return Array.isArray(vals) ? vals : [];
}

function isoOrNull(v) {
  if (!v) return null;
  try {
    const d = new Date(v);
    return isNaN(d.getTime()) ? null : d.toISOString();
  } catch {
    return null;
  }
}

function ArticleLD({ meta, url }) {
  const ld = useMemo(() => {
    const published = isoOrNull(meta.date);
    const modified = isoOrNull(meta.updated) || published;
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: meta.title || "Guide",
      description: meta.description || "",
      image: meta.image || undefined,
      datePublished: published || undefined,
      dateModified: modified || undefined,
      mainEntityOfPage: url,
      author: {
        "@type": "Organization",
        name: "Wild & Well",
        url: "https://www.wild-and-well.store",
      },
      publisher: {
        "@type": "Organization",
        name: "Wild & Well",
        logo: {
          "@type": "ImageObject",
          url: "https://www.wild-and-well.store/icon-512x512.png",
        },
      },
    };
  }, [meta, url]);

  const crumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Guides",
        item: "https://www.wild-and-well.store/guides",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: meta.title || "Guide",
        item: url,
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
    </>
  );
}

export default function GuidePage({ meta, url }) {
  const title = meta.title || "Guide";
  const desc =
    meta.description ||
    meta.excerpt ||
    "Practical, low-tox tips from Wild & Well.";

  return (
    <>
      <Head>
        <title>{title} | Wild & Well</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${title} | Wild & Well`} />
        <meta property="og:description" content={desc} />
        {meta.image ? <meta property="og:image" content={meta.image} /> : null}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <ArticleLD meta={meta} url={url} />

      <main className="mx-auto max-w-3xl px-4 py-10">
        <nav className="mb-6 text-sm">
          <Link href="/guides" className="underline">
            ← All guides
          </Link>
        </nav>

        <header className="mb-6">
          <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
          {(meta.updated || meta.date) && (
            <p className="mt-2 text-sm text-slate-500">
              {meta.updated ? `Updated: ${meta.updated}` : `Published: ${meta.date}`}
            </p>
          )}
          {Array.isArray(meta.tags) && meta.tags.length > 0 && (
            <p className="mt-2 text-sm text-slate-600">
              {meta.tags.map((t, i) => (
                <span key={`${t}-${i}`} className="mr-2 rounded-full bg-slate-100 px-2 py-0.5">
                  #{t}
                </span>
              ))}
            </p>
          )}
        </header>

        {meta.image ? (
          <div className="mb-6 overflow-hidden rounded-lg border">
            {/* Using <img> to avoid extra next/image config */}
            <img src={meta.image} alt={title} className="h-auto w-full" />
          </div>
        ) : null}

        {/* BODY CONTENT
           If you have HTML sections in meta.bodyHtml we render it.
           Otherwise we show a friendly placeholder so the page never breaks. */}
        {meta.bodyHtml ? (
          <article className="prose prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: meta.bodyHtml }} />
        ) : Array.isArray(meta.sections) && meta.sections.length > 0 ? (
          <article className="prose prose-slate max-w-none">
            {meta.sections.map((s, i) => (
              <section key={i} className="mb-6">
                {s.heading ? <h2>{s.heading}</h2> : null}
                {s.text ? <p>{s.text}</p> : null}
              </section>
            ))}
          </article>
        ) : (
          <article className="prose prose-slate max-w-none">
            <p>This guide is being refreshed. Check back soon.</p>
          </article>
        )}
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const raw = await getAllGuidesMeta();
  const list = toArray(raw)
    .filter(Boolean)
    .map((g) => ({ slug: g.slug || "" }))
    .filter((g) => g.slug)
    .filter((g) => !(g.draft === true));

  return {
    paths: list.map((g) => ({ params: { slug: g.slug } })),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const slug = params?.slug || "";
  const raw = await getAllGuidesMeta();
  const meta =
    toArray(raw).find((g) => (g?.slug || "") === slug) ||
    {};

  // Make everything JSON-serializable and safe
  const safe = {
    slug: meta.slug || slug,
    title: meta.title || "Untitled",
    description: meta.description || meta.excerpt || null,
    image: meta.image || null,
    date: meta.date || null,
    updated: meta.updated || null,
    tags: Array.isArray(meta.tags) ? meta.tags : [],
    draft: !!meta.draft,
    // Optional: if your pipeline provides pre-rendered HTML or sections
    bodyHtml: meta.bodyHtml || null,
    sections: Array.isArray(meta.sections) ? meta.sections : [],
  };

  // If draft or missing, show 404
  if (!safe.slug || safe.draft) {
    return { notFound: true };
  }

  const url = `https://www.wild-and-well.store/guides/${safe.slug}`;
  return {
    props: { meta: safe, url },
    revalidate: 86400,
  };
}
