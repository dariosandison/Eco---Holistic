// pages/guides/[slug].js
import { useRouter } from "next/router";
import { markdownToHtml } from "@/src/lib/markdown";
import { getAllGuideSlugs, getGuideBySlug } from "@/src/lib/guides";

const formatDate = (iso) =>
  iso
    ? new Date(iso).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

export default function GuidePage({ html, meta }) {
  const router = useRouter();
  if (router.isFallback) return <main className="px-4 py-10">Loading…</main>;

  return (
    <main className="container mx-auto max-w-3xl px-4 py-10">
      <article className="prose prose-zinc lg:prose-lg">
        <h1>{meta.title}</h1>
        {meta.date && <time dateTime={meta.date}>{formatDate(meta.date)}</time>}
        {meta.author && <p className="text-sm opacity-70">By {meta.author}</p>}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </main>
  );
}

export async function getStaticPaths() {
  const slugs = await getAllGuideSlugs(); // e.g. ['water-filters', ...]
  return { paths: slugs.map((slug) => ({ params: { slug } })), fallback: false };
}

export async function getStaticProps({ params }) {
  const { content, meta } = await getGuideBySlug(params.slug);

  // MD -> HTML
  const html = await markdownToHtml(content || "");

  // Make meta fully JSON-serializable (fixes Next export)
  const safeMeta = {
    ...meta,
    date: meta?.date ? new Date(meta.date).toISOString() : null,
  };

  return { props: { html, meta: safeMeta } };
}
