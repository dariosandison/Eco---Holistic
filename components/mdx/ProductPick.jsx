import Image from 'next/image'
import Link from 'next/link'
import AmazonButton from '@/components/mdx/AmazonButton'
import { withAwinContext } from '@/lib/affiliates'

export default function ProductPick({
  title,
  description,
  asin,
  href,
  image,
  badge,
  bullets = [],
  facts = [],
  meta = null,
  links = null,
  trackingContext = '',
}) {
  const bulletStrings = Array.isArray(bullets) ? bullets.map((b) => String(b)) : []
  const bestForLine = bulletStrings.find((b) => /^(great|best|ideal)\s+for\s*:/i.test(b))
  const avoidIfLine = bulletStrings.find((b) => /^(avoid|skip)\s+if\s*:/i.test(b))
  const bestFor = bestForLine ? bestForLine.replace(/^[^:]+:\s*/i, '').trim() : ''
  const avoidIf = avoidIfLine ? avoidIfLine.replace(/^[^:]+:\s*/i, '').trim() : ''
  const displayBullets = bulletStrings.filter((b) => b !== bestForLine && b !== avoidIfLine)
  const hasVerifiedImage = Boolean(image && image !== '/og-default.jpg')

  const autoFacts = (() => {
    const t = `${title || ''} ${badge || ''} ${description || ''} ${bulletStrings.join(' ')}`.toLowerCase()
    const out = []
    if (t.includes('under-sink') || t.includes('undersink')) out.push('Under-sink')
    if (t.includes('countertop')) out.push('Countertop')
    if (t.includes('jug')) out.push('Jug')
    if (t.includes('hepa')) out.push('HEPA')
    if (t.includes('cadr') || t.includes('room')) out.push('Room size')
    if (t.includes('quiet') || t.includes('noise')) out.push('Noise')
    if (t.includes('filter') || t.includes('replacement')) out.push('Filters')
    if (t.includes('clean') || t.includes('maintenance')) out.push('Maintenance')
    return out
  })()

  const chips = Array.from(new Set([...(Array.isArray(facts) ? facts : []), ...autoFacts])).slice(0, 4)
  const metaRows = Array.isArray(meta) ? meta : meta ? [meta] : []
  const resolvedLinks = Array.isArray(links) && links.length
    ? links
    : [{ label: 'Check retailer details', merchant: 'amazon', asin, href, variant: 'primary' }]

  return (
    <article className="product-pick not-prose">
      {hasVerifiedImage ? (
        <div className="product-pick__image">
          <Image src={image} alt="" fill className="object-cover" sizes="(max-width: 640px) 100vw, 240px" />
        </div>
      ) : null}

      <div className="product-pick__body">
        <div className="product-pick__heading">
          <div>
            <p className="product-pick__eyebrow">Shortlisted option</p>
            <h3>{title}</h3>
          </div>
          {badge ? <span className="product-pick__badge">{badge}</span> : null}
        </div>

        {description ? <p className="product-pick__description">{description}</p> : null}

        {(bestFor || avoidIf) ? (
          <div className="product-pick__fit">
            {bestFor ? <div><span>Best for</span><strong>{bestFor}</strong></div> : null}
            {avoidIf ? <div><span>Skip if</span><strong>{avoidIf}</strong></div> : null}
          </div>
        ) : null}

        {chips.length ? <div className="product-pick__chips">{chips.map((c, i) => <span key={i}>{c}</span>)}</div> : null}

        {metaRows.length ? (
          <dl className="product-pick__meta">
            {metaRows.slice(0, 4).map((m, i) => {
              const label = typeof m === 'string' ? 'Detail' : (m.label || 'Detail')
              const value = typeof m === 'string' ? m : (m.value || '')
              return <div key={i}><dt>{label}</dt><dd>{value}</dd></div>
            })}
          </dl>
        ) : null}

        {displayBullets?.length ? (
          <div className="product-pick__why">
            <p>Why it made the shortlist</p>
            <ul>{displayBullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
          </div>
        ) : null}

        <div className="product-pick__actions">
          <div className="flex flex-wrap gap-2">
            {resolvedLinks.map((l, i) => {
              const merchant = String(l.merchant || '').toLowerCase()
              const rawLabel = l.label || 'Check retailer details'
              const hrefResolved = String(l.href || '')
              const isInternal = merchant === 'internal' || hrefResolved.startsWith('/')
              const label = !isInternal && /\bprice\b/i.test(rawLabel) ? 'Check retailer details' : rawLabel
              const v = l.variant || 'primary'

              if (merchant.includes('amazon') || merchant === '') {
                return <AmazonButton key={i} asin={l.asin || asin} href={l.href || href} variant={v}>{label}</AmazonButton>
              }

              const className = v === 'primary' ? 'btn-primary' : v === 'ghost' ? 'inline-flex items-center justify-center border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50' : 'btn-secondary'

              if (isInternal) return <Link key={i} href={hrefResolved || '/'} className={className}>{label}</Link>

              const outboundHref = merchant === 'awin' && trackingContext ? withAwinContext(hrefResolved, `${trackingContext}_${i + 1}`) : hrefResolved
              return <a key={i} href={outboundHref} target="_blank" rel="noopener nofollow sponsored" className={className} data-affiliate-context={trackingContext || undefined}>{label}</a>
            })}
          </div>
          <p>Retailer links may be affiliate links. Product details, availability and current price are confirmed by the retailer.</p>
        </div>
      </div>
    </article>
  )
}
