import Head from "next/head";
import { getAllPostSlugs, getPostBySlug } from "../../lib/blog";

function SimpleMarkdown({ text = "" }) {
  const withLinks = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="nofollow noopener noreferrer" class="underline">$1</a>');
  const html = withLinks
    .split(/\n{2,}/)
    .map((p) => `<p>${p.replace(/\n/g, "<br/>")}</p>`)
    .join("");
  return <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />;
}

export default function PostPage({ meta, content }) {
  return (
    <>
      <Head>
        <title>{meta.title} – Wild & Well</title>
        {meta.description && <meta name="description" content={meta.description} />}
      </Head>
      <article className="prose max-w-none">
        <h1>{meta.title}</h1>
        {meta.date && <p className="text-sm text-gray-500">{new Date(meta.date).toLocaleDateString()}</p>}
        <SimpleMarkdown text={content} />
      </article>
    </>
  );
}

export async function getStaticPaths() {
  const slugs = getAllPostSlugs();
  return { paths: slugs.map((slug) => ({ params: { slug } })), fallback: false };
}

export async function getStaticProps({ params }) {
  const { meta, content } = getPostBySlug(params.slug);
  return { props: { meta, content } };
}
