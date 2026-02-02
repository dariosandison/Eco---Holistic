// components/MDXRenderer.jsx
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

import AffiliateLink from '@/components/mdx/AffiliateLink'
import AmazonLink from '@/components/mdx/AmazonLink'
import AmazonButton from '@/components/mdx/AmazonButton'
import ProductPick from '@/components/mdx/ProductPick'
import ComparisonTable from '@/components/mdx/ComparisonTable'
import ProsCons from '@/components/mdx/ProsCons'
import Note from '@/components/mdx/Note'
import YouTube from '@/components/mdx/YouTube'
import RatingStars from '@/components/mdx/RatingStars'

function isExternalHref(href = '') {
  return /^https?:\/\//i.test(href)
}

function isAffiliateHref(href = '') {
  const h = String(href).toLowerCase()

  // Always treat shortener-style affiliate links as affiliate
  if (h.includes('amzn.to')) return true

  // Common affiliate networks/domains
  const affiliateDomains = [
    'awin1.com',
    'awin.com',
    'linksynergy.com',
    'cj.com',
    'shareasale.com',
    'impact.com',
    'partnerize.com',
    'rakuten',
  ]
  if (affiliateDomains.some((d) => h.includes(d))) return true

  // Amazon (only mark as affiliate when it looks like an affiliate URL)
  if (h.includes('amazon.') && (h.includes('tag=') || h.includes('linkcode=') || h.includes('ascsubtag='))) return true

  // Generic affiliate markers
  const markers = ['utm_medium=affiliate', 'irclickid=', 'clickref=', 'awc=', 'affid=', 'aff=', 'ref=']
  return markers.some((m) => h.includes(m))
}

const components = {
  AffiliateLink,
  AmazonLink,
  AmazonButton,
  ProductPick,
  ComparisonTable,
  ProsCons,
  Note,
  YouTube,
  RatingStars,
  a: (props) => {
    const href = props.href || ''
    const isExternal = isExternalHref(href)
    const isAffiliate = isExternal && isAffiliateHref(href)

    const rel = isExternal
      ? isAffiliate
        ? 'noopener noreferrer nofollow sponsored'
        : 'noopener noreferrer'
      : props.rel

    const target = isExternal ? '_blank' : props.target

    // eslint-disable-next-line jsx-a11y/anchor-has-content
    return <a {...props} href={href} rel={rel} target={target} />
  },
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
