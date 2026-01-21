'use client'
import { withAmazonTag } from '@/lib/affiliates'
import { trackAffiliateClick } from '@/lib/analytics'

export default function AmazonButton({ asin, href: hrefProp, children, variant = 'primary' }) {
  const base = hrefProp || (asin ? `https://www.amazon.co.uk/dp/${asin}` : '#')
  const href = withAmazonTag(base)

  const className =
    variant === 'ghost'
      ? 'inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50'
      : 'btn-primary'

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener nofollow sponsored"
      className={className}
      onClick={() => trackAffiliateClick({ href, asin })}
    >
      {children || 'Check price on Amazon'}
    </a>
  )
}
