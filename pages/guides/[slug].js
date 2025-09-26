export default function GuidePage({ slug, html }) {
  // If you're not converting MD to HTML yet, this will render raw text safely.
  // When you add a proper MD/MDX renderer, switch to dangerouslySetInnerHTML with sanitized HTML.
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 prose prose-invert">
      <h1 className="mb-6 text-3xl font-bold">{slug.replace(/-/g, " ")}</h1>
      <article style={{ whiteSpace: "pre-wrap" }}>{html}</article>
    </main>
  );
}

export async function getStaticPaths() {
  const { getAllGuideSlugs } = await import("../../lib/content.js");
  const slugs = await getAllGuideSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { readGuideFile } = await import("../../lib/content.js");
  const { content } = await readGuideFile(params.slug);

  // Minimal pass-through; keep as plain text for now.
  // (You can swap in your MD/MDX renderer later.)
  return {
    props: {
      slug: params.slug,
      html: content,
    },
  };
}
