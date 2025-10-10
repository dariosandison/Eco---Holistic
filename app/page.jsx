import MDXRenderer from '@/components/MDXRenderer';
import ArticleLayout from '@/components/ArticleLayout';
import StructuredData from '@/components/StructuredData';
import { getContent, listContent, tocFromMarkdown } from '@/lib/content';

// ESM plugin imports (fix for Vercel/Next build)
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

export async function generateStaticParams() {
  return listContent('guides').map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { frontmatter } = getContent('guides', params.slug);
  return {
    title: frontmatter.title,
    description: frontmatter.description,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      images: frontmatter.image ? [{ url: frontmatter.image }] : undefined,
      type: 'article',
    },
  };
}

export default function Page({ params }) {
  const { frontmatter, content } = getContent('guides', params.slug);
  const toc = tocFromMarkdown(content);

  const mdxOptions = {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      // add options to autolink to wrap the heading element
      rehypePlugins: [[rehypeSlug], [rehypeAutolinkHeadings, { behavior: 'wrap' }]],
    },
  };

  return (
    <ArticleLayout
      title={frontmatter.title}
      description={frontmatter.description}
      date={frontmatter.date}
      updated={frontmatter.updated}
      image={frontmatter.image}
      toc={toc}
    >
      <MDXRenderer source={content} options={mdxOptions} />
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: frontmatter.title,
          description: frontmatter.description,
          datePublished: frontmatter.date,
          dateModified: frontmatter.updated || frontmatter.date,
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id':
              (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wild-and-well.store') +
              (typeof window === 'undefined' ? '' : window.location.pathname),
          },
          publisher: { '@type': 'Organization', name: 'Wild & Well' },
        }}
      />
    </ArticleLayout>
  );
}
