import MDXRenderer from '@/components/MDXRenderer'
import ArticleLayout from '@/components/ArticleLayout'
import StructuredData from '@/components/StructuredData'
import AffiliateNotice from '@/components/mdx/AffiliateNotice'
import { getContent, listContent, tocFromMarkdown } from '@/lib/content'

import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
const AMAZON_TAG = process.env.NEXT_PUBLIC_AMAZON_TAG || process.env.NEXT_PUBLIC_AMAZON_UK || process.env.NEXT_PUBLIC_AMAZON_US || process.env.NEXT_PUBLIC_AMAZON_EU;

export async function generateStaticParams() {
  return listContent('guides').map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { frontmatter } = getContent('guides', params.slug)
  return {
    title: frontmatter.title,
    description: frontmatter.description,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      images: frontmatter.image ? [{ url: frontmatter.image }] : undefined,
      type: 'article',
    },
  }
}

export default function Page({ params }) {
  const { frontmatter, content } = getContent('guides', params.slug)
  const toc = tocFromMarkdown(content)

  const mdxOptions = {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [[rehypeSlug], [rehypeAutolinkHeadings, { behavior: 'wrap' }]],
    },
  }

  const showAffiliateNotice = Boolean(AMAZON_TAG)

  return (
    <ArticleLayout
      title={frontmatter.title}
      description={frontmatter.description}
      date={frontmatter.date}
      updated={frontmatter.updated}
      image={frontmatter.image}
      toc={toc}
    >
      {showAffiliateNotice && <AffiliateNotice />}
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
  )
}