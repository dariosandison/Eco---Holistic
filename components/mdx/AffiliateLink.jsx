import { withAmazonTag } from '@/lib/affiliates'

export default function AffiliateLink({ href = '#', children }) {
  const url = withAmazonTag(href)
  return (
    <a href={url} target="_blank" rel="noopener nofollow sponsored" className="underline decoration-dotted">
      {children}
    </a>
  )
}
