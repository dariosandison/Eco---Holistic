// pages/guides/[slug].js
import Head from "next/head";
import Link from "next/link";
import { getAllGuidesSlugs, getGuideBySlug } from "@/src/lib/guides";
import AffiliateLink from "@/components/AffiliateLink";

export async function getStaticPaths() {
  const slugs = getAllGuidesSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = await getGuideBySlug(params.slug);
  if (!data) {
    return { notFound: true };
  }
  const { meta, contentHtml } = data;

  return {
    props: {
      meta,
      contentHtml, // already HTML
    },
  };
}

export default function GuidePage({ meta, contentHtml }) {
  return (
    <>
      <Head>
        <title>{meta.title} | Wild &amp; Well</title>
        <meta name="description" content={meta.description || ""} />
        {meta.image ? <meta property="og:image" content={meta.image} /> : null}
      </Head>

      <article className="mx-auto max-w-3xl px-4 py-10">
        <header className="mb-6">
          <p className="text-sm text-neutral-500">
            <Link className="underline" href="/guides">← All Guides</Link>
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">
            {meta.title}
          </h1>
          <div className="mt-2 text-sm text-neutral-600">
            {meta.date ? <span>Published: {meta.date}</span> : null}
            {meta.updated ? (
              <span className="ml-3">Updated: {meta.updated}</span>
            ) : null}
          </div>
        </header>

        {/* Rendered Markdown HTML */}
        <div
          className="guide-content space-y-4 leading-7"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        {/* Simple affiliate note */}
        <div className="mt-10 rounded-md border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
          Some links may be affiliate links. If you buy through them, we may earn a commission at no extra cost to you.
        </div>

        <footer className="mt-12">
          <Link href="/guides" className="inline-block rounded-md border px-4 py-2">
            ← Back to Guides
          </Link>
        </footer>
      </article>
    </>
  );
}
