// pages/guides/[slug].js
import React from "react";
import { MDXRemote } from "next-mdx-remote";
import { getGuideSlugs, getGuideBySlug } from "../../lib/content";
import mdxComponents from "../../components/MDXComponents";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import NewsletterBar from "../../components/NewsletterBar";

function withSafeComponents(base) {
  return new Proxy(base, {
    get(target, prop) {
      if (prop in target) return target[prop];
      if (typeof prop === "string" && /^[A-Z]/.test(prop)) {
        // unknown capitalised JSX tag from MDX -> harmless wrapper
        return (props) => <div {...props} />;
      }
      return undefined;
    },
  });
}

export default function GuidePage({ meta, mdx }) {
  const safe = withSafeComponents(mdxComponents);
  return (
    <>
      <SiteHeader />
      <main className="container prose">
        <article>
          <h1>{meta.title}</h1>
          {meta.excerpt ? <p className="lead">{meta.excerpt}</p> : null}
          <MDXRemote {...mdx} components={safe} />
        </article>
        <NewsletterBar />
      </main>
      <SiteFooter />
    </>
  );
}

export async function getStaticPaths() {
  const slugs = getGuideSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { meta, mdx } = await getGuideBySlug(params.slug);
  // Ensure serialisable meta
  const serialisable = {
    ...meta,
    date: meta.date || null,
    updated: meta.updated || null,
  };
  return { props: { meta: serialisable, mdx } };
}
