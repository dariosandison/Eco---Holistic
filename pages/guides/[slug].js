import SEO from "../../components/SEO";
import JsonLd from "../../components/JsonLd";
import TopPicks from "../../components/TopPicks";
import ComparisonTable from "../../components/ComparisonTable";
import FAQ from "../../components/FAQ";
import AuthorBox from "../../components/AuthorBox";
import InlineNewsletter from "../../components/InlineNewsletter";
import { listGuideSlugs, getGuideBySlug, getRelatedGuides } from "../../lib/md";
import RelatedGuides from "../../components/RelatedGuides";

export default function GuidePage({ slug, meta, html, readingTime, related }) {
  const path = `/guides/${slug}/`;

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": meta.title,
    "datePublished": meta.date,
    "dateModified": meta.date,
    "description": meta.description,
    "mainEntityOfPage": { "@type":"WebPage", "@id": `https://www.wild-and-well.store${path}` },
    "author": { "@type":"Person", "name":"Wild & Well" },
    "publisher": { "@type":"Organization", "name":"Wild & Well" }
  };

  return (
    <>
      <SEO title={meta.title} description={meta.description} path={path} />
      <JsonLd id="article" data={articleLd} />

      <main className="container" style={{padding:'18px 0 28px'}}>
        <article className="prose">
          <p style={{color:'#6b7280', margin:'6px 0'}}>Updated {meta.date} • {readingTime}</p>
          <h1 style={{marginTop:0}}>{meta.title}</h1>
          {meta.description && <p style={{color:'#4b5563'}}>{meta.description}</p>

          }
          <div dangerouslySetInnerHTML={{ __html: html }} />

          {/* Monetization blocks from front-matter if present */}
          <TopPicks picks={meta.picks} />
          <ComparisonTable items={meta.table} />
          <FAQ items={meta.faq} headline="FAQs" />

          <InlineNewsletter />
          <AuthorBox />
        </article>

        <RelatedGuides items={related} />
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const slugs = listGuideSlugs().map(s => s.replace(".md",""));
  return {
    paths: slugs.map(slug => ({ params: { slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const g = await getGuideBySlug(params.slug);
  const related = await getRelatedGuides(params.slug, 3);
  return {
    props: {
      slug: g.slug,
      meta: g.meta,
      html: g.html,
      readingTime: g.readingTime,
      related
    }
  };
}
