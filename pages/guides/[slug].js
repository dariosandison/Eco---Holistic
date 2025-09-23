// pages/guides/[slug].js
import Head from "next/head";
import Link from "next/link";
import { getAllGuidesSlugs, getGuideBySlug } from "../../src/lib/guides";

export default function GuidePage({ meta, html }) {
  if (!meta) return null;

  const title = meta.title || "Guide";
  const description =
    meta.description || meta.excerpt || "Practical, low-tox living tips.";
  const canonical = `https://www.wild-and-well.store/guides/${meta.slug}`;

  return (
    <>
      <Head>
        <title>{title} | Wild & Well</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        {meta.image ? <meta property="og:image" content={meta.image} /> : null}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>

      <main className="mx-auto max-w-3xl px-4 py-10">
        <nav className="mb-6 text-sm">
          <Link className="underline" href="/guides">
            ← All guides
          </Link>
        </nav>

        <article>
          <header className="mb-6">
            <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
            <p className="mt-2 text-sm text-slate-500">
              {meta.updated || meta.date
                ? `Last updated: ${meta.updated || meta.date}`
                : null}
              {meta.readTime ? ` · ${meta.readTime} min read` : null}
            </p>
          </header>

          <div
            className="prose prose-slate max-w-none"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  try {
    const slugs = await getAllGuidesSlugs();
    const list = Array.isArray(slugs) ? slugs : [];
    const paths = list.map((slug) => ({ params: { slug } }));
    return { paths, fallback: "blocking" };
  } catch {
    // If anything goes wrong at build time, allow on-demand generation
    return { paths: [], fallback: "blocking" };
  }
}

export async function getStaticProps({ params }) {
  try {
    const data = await getGuideBySlug(params?.slug || "");
    // Not found or draft → 404
    if (!data || !data.meta || data.meta.draft) {
      return { notFound: true, revalidate: 3600 };
    }

    // Ensure everything is JSON-safe
    const safeMeta = {
      slug: data.meta.slug || params.slug,
      title: data.meta.title || null,
      description: data.meta.description || data.meta.excerpt || null,
      excerpt: data.meta.excerpt || null,
      image: data.meta.image || null,
      tags: Array.isArray(data.meta.tags) ? data.meta.tags : [],
      date: data.meta.date || null,
      updated: data.meta.updated || null,
      draft: !!data.meta.draft,
      readTime:
        typeof data.meta.readTime === "number" ? data.meta.readTime : null,
    };

    return {
      props: { meta: safeMeta, html: data.html || "" },
      revalidate: 86400, // re-generate at most once per day
    };
  } catch {
    return { notFound: true, revalidate: 3600 };
  }
}
