import MDXRenderer from '@/components/MDXRenderer'
import ArticleLayout from '@/components/ArticleLayout'
import StructuredData from '@/components/StructuredData'
import AffiliateNotice from '@/components/mdx/AffiliateNotice'
import { redirect, notFound } from 'next/navigation'
import { getContent, listContent, tocFromMarkdown } from '@/lib/content'
import { SITE_NAME, SITE_URL } from '@/lib/site'
import { getAuthor } from '@/lib/authors'

import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

export const runtime = 'nodejs'

// Legacy slugs we want to keep working (avoid 500s for old links).
const LEGACY_SLUG_REDIRECTS = {
  'gut-health-basics': 'fibre-gut-health-practical-guide',
}

export async function generateStaticParams() {
  return listContent('blog').map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const slug = params.slug

  if (LEGACY_SLUG_REDIRECTS[slug]) {
    return {
      title: 'Redirecting…',
      robots: { index: false, follow: false },
    }
  }

  try {
    const { frontmatter } = getContent('blog', slug)
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
  } catch {
    return {
      title: 'Not found',
      robots: { index: false, follow: false },
    }
  }
}

export default function Page({ params }) {
  const slug = params.slug

  const redirectTo = LEGACY_SLUG_REDIRECTS[slug]
  if (redirectTo) redirect(`/blog/${redirectTo}`)

  let data
  try {
    data = getContent('blog', slug)
  } catch {
    notFound()
  }

  const { frontmatter, content } = data
  const author = getAuthor(frontmatter.author)
  const toc = tocFromMarkdown(content)

  const mdxOptions = {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [[rehypeSlug], [rehypeAutolinkHeadings, { behavior: 'wrap' }]],
    },
  }

  const showAffiliateNotice = Boolean(process.env.NEXT_PUBLIC_AMAZON_TAG)

  return (
    <ArticleLayout
      title={frontmatter.title}
      description={frontmatter.description}
      date={frontmatter.date}
      updated={frontmatter.updated}
      image={frontmatter.image}
      author={author}
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
            '@id': `${SITE_URL}/blog/${slug}`,
          },
          author: {
            '@type': 'Person',
            name: author.name,
            url: author.url,
          },
          publisher: {
            '@type': 'Organization',
            name: SITE_NAME,
            url: SITE_URL,
            logo: {
              '@type': 'ImageObject',
              url: `${SITE_URL}/og-default.jpg`,
            },
          },
        }}
      />

      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Wellness Insights', item: `${SITE_URL}/blog` },
            { '@type': 'ListItem', position: 3, name: frontmatter.title, item: `${SITE_URL}/blog/${slug}` },
          ],
        }}
      />
    </ArticleLayout>
  )
}
