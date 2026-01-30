import Image from 'next/image'
import AmazonButton from '@/components/mdx/AmazonButton'

export default function ProductPick({
  title,
  description,
  asin,
  href,
  image = '/og-default.jpg',
  badge,
  bullets = [],
  links = null,
}) {

  const needsAutoImage = !image || image === '/og-default.jpg'
  const key = `${title || ''} ${badge || ''}`.toLowerCase()
  const autoImage = needsAutoImage
    ? (() => {
        if (key.includes('humidifier')) return '/images/products/humidifier.svg'
        if (key.includes('air purifier') || key.includes('purifier') || key.includes('hepa')) return '/images/products/air-purifier.svg'
        if (key.includes('shower')) return '/images/products/shower-filter.svg'
        if (key.includes('laundry') || key.includes('detergent')) return '/images/products/laundry.svg'
        if (key.includes('water') || key.includes('filter') || key.includes('brita') || key.includes('doulton')) return '/images/products/water-filter.svg'
        if (key.includes('cookware') || key.includes('pan') || key.includes('skillet')) return '/images/products/kitchen.svg'
        if (key.includes('magnesium') || key.includes('supplement') || key.includes('capsule') || key.includes('vitamin')) return '/images/products/supplements.svg'
        if (key.includes('tracker') || key.includes('watch') || key.includes('wearable')) return '/images/products/tracker.svg'
        if (key.includes('scale')) return '/images/products/scale.svg'
        if (key.includes('band')) return '/images/products/bands.svg'
        if (key.includes('shoe') || key.includes('trainer')) return '/images/products/shoe.svg'
        return '/images/products/neutral.svg'
      })()
    : image

  const resolvedLinks = Array.isArray(links) && links.length
    ? links
    : [{ label: 'Check price', merchant: 'amazon', asin, href, variant: 'primary' }]
  return (
    <div className="not-prose overflow-hidden rounded-2xl border border-zinc-200 bg-white p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-zinc-100">
          <Image src={autoImage} alt="" fill className="object-cover" sizes="96px" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-base font-semibold text-zinc-900">{title}</h3>
            {badge ? (
              <span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-semibold text-zinc-700">
                {badge}
              </span>
            ) : null}
          </div>
          {description ? <p className="mt-1 text-sm text-zinc-700">{description}</p> : null}

          {bullets?.length ? (
            <ul className="mt-3 list-disc pl-5 text-sm text-zinc-700">
              {bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          ) : null}

          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
              {resolvedLinks.map((l, i) => {
                const merchant = String(l.merchant || '').toLowerCase()
                const label = l.label || 'Check price'
                const v = l.variant || 'primary'

                if (merchant.includes('amazon') || merchant === '') {
                  return (
                    <AmazonButton key={i} asin={l.asin || asin} href={l.href || href} variant={v}>
                      {label}
                    </AmazonButton>
                  )
                }

                const className = v === 'ghost'
                  ? 'inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50'
                  : 'btn-secondary'

                return (
                  <a
                    key={i}
                    href={l.href}
                    target="_blank"
                    rel="noopener nofollow sponsored"
                    className={className}
                  >
                    {label}
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
