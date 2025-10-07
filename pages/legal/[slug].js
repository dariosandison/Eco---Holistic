// pages/legal/[slug].js
import React from "react";
import { MDXRemote } from "next-mdx-remote";
import { getLegalSlugs, getLegalBySlug } from "../../lib/content";
import mdxComponents from "../../components/MDXComponents";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";

function withSafeComponents(base) {
  return new Proxy(base, {
    get(target, prop) {
      if (prop in target) return target[prop];
      if (typeof prop === "string" && /^[A-Z]/.test(prop)) {
        return (props) => <div {...props} />;
      }
      return undefined;
    },
  });
}

export default function LegalPage({ meta, mdx }) {
  const safe = withSafeComponents(mdxComponents);
  return (
    <>
      <SiteHeader />
      <main className="container prose">
        <article>
          <h1>{meta.title}</h1>
          <MDXRemote {...mdx} components={safe} />
        </article>
      </main>
      <SiteFooter />
    </>
  );
}

export async function getStaticPaths() {
  const slugs = getLegalSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { meta, mdx } = await getLegalBySlug(params.slug);
  const serialisable = {
    ...meta,
    date: meta.date || null,
    updated: meta.updated || null,
  };
  return { props: { meta: serialisable, mdx } };
}
