import Head from "next/head";
import { getAllGuidesSlugs, getGuideBySlug } from "../../lib/guides";
import { article, breadcrumbs } from "../../lib/jsonld";

function SimpleMarkdown({ text = "" }) {
  // ultra-light rendering: paragraphs + links
  const withLinks = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="nofollow noopener noreferrer" class="underline">$1</a>');
  const html = withLinks
    .split(/\n{2,}/)
    .map((p) => `<p>${p.replace(/\n/g, "<br/>")}</p>`)
    .join("");
  return <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />;
}

export default function GuidePage({ meta, content }) {
  const url = `https://www.wild-and-well.store/guides/${meta.slug}`;
  const jsonArticle = article({ title: meta.title, description: meta.description, url });
  const jsonCrumbs = breadcrumbs([
    { name: "Home", item: "https://www.wild-and-well.store/" },
    { name: "Guides", item: "https://www.wild-and-well.store/guides" },
    { name: meta.title, item: url },
  ]);

  return (
    <>
      <Head>
        <title>{meta.title} – Wild & Well</title>
        {meta.description && <meta name="description" content={meta.description} />}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonArticle) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonCrumbs) }} />
      </Head>
      <article className="prose max-w-none">
        <h1>{meta.title}</h1>
        {meta.updated ? (
          <p className="text-sm text-gray-500">Updated {new Date(meta.updated).toLocaleDateString()}</p>
        ) : meta.date ? (
          <p className="text-sm text-gray-500">Published {new Date(meta.date).toLocaleDateString()}</p>
        ) : null}
        <SimpleMarkdown text={content} />
      </article>
    </>
  );
}

export async function getStaticPaths() {
  const slugs = getAllGuidesSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { meta, content } = getGuideBySlug(params.slug);
  return { props: { meta, content } };
}
