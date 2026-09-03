import Link from 'next/link'

export default function MoneyPageTrustBlock() {
  const principles = [
    ['Problem first', 'We start with the job the product needs to do, not the brand or commission.'],
    ['Whole-cost view', 'Filters, refills, maintenance, energy use and replacement availability matter alongside purchase price.'],
    ['Evidence labelled', 'Editorial research, manufacturer specifications and independent testing are kept distinct rather than blurred together.'],
  ]

  return (
    <section className="money-trust mt-12">
      <div className="money-trust__intro">
        <div><p className="money-trust__eyebrow">Why trust the shortlist</p><h2>Selection standards before product links</h2></div>
        <p>Wild &amp; Well does not assume a product is necessary. We narrow the problem, surface no-spend actions, then compare the practical trade-offs that matter in UK homes and everyday use.</p>
      </div>
      <div className="money-trust__grid">
        {principles.map(([title, text], i) => <div key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></div>)}
      </div>
      <div className="money-trust__links"><Link href="/how-we-test">How we evaluate products</Link><Link href="/editorial-policy">Editorial policy</Link><Link href="/affiliate-disclosure">Affiliate disclosure</Link></div>
    </section>
  )
}
