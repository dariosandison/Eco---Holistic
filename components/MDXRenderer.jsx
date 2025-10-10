import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

import AffiliateLink from '@/components/mdx/AffiliateLink'
import AmazonLink from '@/components/mdx/AmazonLink'
import ComparisonTable from '@/components/mdx/ComparisonTable'
import ProsCons from '@/components/mdx/ProsCons'
import Note from '@/components/mdx/Note'
import YouTube from '@/components/mdx/YouTube'

const components = {
  AffiliateLink,
  AmazonLink,
  ComparisonTable,
  ProsCons,
  Note,
  YouTube,
  a: (props) => (
    <a
      {...props}
      rel="noopener nofollow sponsored"
      target={props.href?.startsWith('http') ? '_blank' : undefined}
    />
  ),
}

export default function MDXRenderer({ source, options }) {
  return (
    <MDXRemote
      source={source}
      components={components}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]],
        },
        ...options,
      }}
    />
  )
}
