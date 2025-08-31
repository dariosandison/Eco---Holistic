import { getAllPosts, getPostBySlug } from "../../lib/posts";
import Head from "next/head";

export default function Post({ post }) {
  return (
    <>
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      author: {
        "@type": "Organization",
        name: "Wild & Well",
      },
      publisher: {
        "@type": "Organization",
        name: "Wild & Well",
        logo: {
          "@type": "ImageObject",
          url: "https://www.wild-and-well.store/favicon.ico",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://www.wild-and-well.store/posts/${post.slug}`,
      },
    }),
  }}
/>

      <Head>
        <title>{post.title} | Wild & Well</title>
        <meta
          name="description"
          content={post.description || "Read more on holistic living, eco-friendly health, and mindful wellness."}
        />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${post.title} | Wild & Well`} />
        <meta property="og:description" content={post.description} />
        <meta
          property="og:url"
          content={`https://www.wild-and-well.store/posts/${post.slug}`}
        />
        <meta property="og:image" content="/cover.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={
