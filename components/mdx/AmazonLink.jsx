import { withAmazonTag } from '@/lib/affiliates'

export default function AmazonLink({ asin, children }) {
  const base = `https://www.amazon.co.uk/dp/${asin || ''}`
  const href = withAmazonTag(base)
  return (
    <a href={href} target="_blank" rel="noopener nofollow sponsored" className="underline decoration-dotted">
      {children || 'View on Amazon'}
    </a>
  )
}
