'use client'
import { withAmazonTag } from '@/lib/affiliates'
import { trackAffiliateClick } from '@/lib/analytics'

export default function AmazonLink({ asin, children }) {
  const base = `https://www.amazon.co.uk/dp/${asin || ''}`
  const href = withAmazonTag(base)
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener nofollow sponsored"
      className="underline decoration-dotted"
      onClick={() => trackAffiliateClick({ href, asin })}
    >
      {children || 'View on Amazon'}
    </a>
  )
}
