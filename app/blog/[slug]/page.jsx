import MDXRenderer from '@/components/MDXRenderer'
import ArticleLayout from '@/components/ArticleLayout'
import StructuredData from '@/components/StructuredData'
import AffiliateNotice from '@/components/mdx/AffiliateNotice'
import ArticleEducationBlock from '@/components/ArticleEducationBlock'
import RelatedReading from '@/components/RelatedReading'
import RelatedShortlists from '@/components/RelatedShortlists'
import InlineSignup from '@/components/InlineSignup'
import { redirect, notFound } from 'next/navigation'
import { getContent, listContent, tocFromMarkdown } from '@/lib/content'
import { SITE_NAME, SITE_URL } from '@/lib/site'
import { getAuthor } from '@/lib/authors'

import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

const LEGACY_SLUG_REDIRECTS = {
  'gut-health-basics': 'fibre-gut-health-practical-guide',
  'gut-health-starters': 'fibre-gut-health-practical-guide',
}

export async function generateStaticParams() {
  return listContent('blog').map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const legacy = LEGACY_SLUG_REDIRECTS[params.slug]
  if (legacy) return { title: 'Redirecting…', robots: { index: false, follow: true } }

  try {
    const { frontmatter } = getContent('blog', params.slug)
    const canonical = `${SITE_URL}/blog/${params.slug}`
    return {
      title: frontmatter.title,
      description: frontmatter.description,
      alternates: { canonical },
      openGraph: {
        title: frontmatter.title,
        description: frontmatter.description,
        url: canonical,
        siteName: SITE_NAME,
        images: frontmatter.image ? [{ url: frontmatter.image }] : undefined,
        type: 'article',
        publishedTime: frontmatter.date || undefined,
        modifiedTime: frontmatter.updated || frontmatter.date || undefined,
      },
      twitter: {
        card: 'summary_large_image',
        title: frontmatter.title,
        description: frontmatter.description,
        images: frontmatter.image ? [frontmatter.image] : undefined,
      },
    }
  } catch {
    return { title: 'Not found', robots: { index: false, follow: false } }
  }
}

export default function Page({ params }) {
  const legacy = LEGACY_SLUG_REDIRECTS[params.slug]
  if (legacy) redirect(`/blog/${legacy}`)

  let data
  try {
    data = getContent('blog', params.slug)
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
  const allPosts = listContent('blog')
  const authorType = author.schemaType === 'Organization' ? 'Organization' : 'Person'

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
      <ArticleEducationBlock frontmatter={frontmatter} content={content} />
      <MDXRenderer source={content} options={mdxOptions} />

      <InlineSignup
        placement={`blog_${params.slug}`}
        title="Make the next decision easier"
        description="Occasional Wild & Well notes with practical actions, useful comparisons and no-pressure product guidance."
        cta="Join Wild & Well"
      />

      <RelatedReading currentSlug={params.slug} currentTags={frontmatter.tags || []} posts={allPosts} />
      <RelatedShortlists tags={frontmatter.tags || []} />

      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: frontmatter.title,
          description: frontmatter.description,
          image: frontmatter.image ? `${SITE_URL}${frontmatter.image}` : undefined,
          datePublished: frontmatter.date,
          dateModified: frontmatter.updated || frontmatter.date,
          mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${params.slug}` },
          author: { '@type': authorType, name: author.name, url: author.url },
          publisher: {
            '@type': 'Organization',
            name: SITE_NAME,
            url: SITE_URL,
            logo: { '@type': 'ImageObject', url: `${SITE_URL}/og-default.jpg` },
          },
        }}
      />

      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE_URL}/blog` },
            { '@type': 'ListItem', position: 3, name: frontmatter.title, item: `${SITE_URL}/blog/${params.slug}` },
          ],
        }}
      />
    </ArticleLayout>
  )
}
