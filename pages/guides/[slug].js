// pages/guides/[slug].js
import { getAllGuidesSlugs, getGuideBySlug } from "../../lib/guides";

export async function getStaticPaths() {
  const slugs = getAllGuidesSlugs();
  return { paths: slugs.map(slug => ({ params: { slug } })), fallback: false };
}

export async function getStaticProps({ params }) {
  const guide = getGuideBySlug(params.slug);
  if (!guide) return { notFound: true };
  return { props: { guide } };
}

export default function GuidePage({ guide }) {
  const { meta, content } = guide;
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 prose">
      <h1>{meta.title}</h1>
      {/* plain content render to avoid extra build deps for now */}
      <pre className="whitespace-pre-wrap">{content}</pre>
    </article>
  );
}
