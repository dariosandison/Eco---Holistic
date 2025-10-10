'use client'
import { withAmazonTag } from '@/lib/affiliates'
import { trackAffiliateClick } from '@/lib/analytics'

export default function AffiliateLink({ href = '#', children }) {
  const url = withAmazonTag(href)
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener nofollow sponsored"
      className="underline decoration-dotted"
      onClick={() => trackAffiliateClick({ href: url, text: typeof children === 'string' ? children : undefined })}
    >
      {children}
    </a>
  )
}
