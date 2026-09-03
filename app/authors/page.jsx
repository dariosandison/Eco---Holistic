import Link from 'next/link'
import { AUTHORS } from '@/lib/authors'
import StructuredData from '@/components/StructuredData'
import { SITE_URL } from '@/lib/site'

export const metadata = {
  title: 'Authors & Editorial Desk',
  description: 'Who writes and maintains Wild & Well, how authorship is labelled, and the standards behind UK healthy-living guidance.',
}

export default function Page() {
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Wild & Well authors and editorial desk',
    itemListElement: AUTHORS.map((a, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: a.name,
      url: `${SITE_URL}/authors/${a.slug}`,
    })),
  }

  return (
    <main className="trust-page">
      <StructuredData data={itemList} />
      <header className="trust-hero">
        <div><p className="trust-hero__kicker">Authorship</p><h1>Who maintains Wild &amp; Well</h1></div>
        <div className="trust-hero__lede"><p>Authorship should tell you who is responsible for a page without implying qualifications that are not there. Wild &amp; Well separates founder/editorial responsibility from external medical, scientific or laboratory expertise.</p><div className="trust-proof"><span>Roles labelled</span><span>No invented credentials</span><span>Editorial standards linked</span></div></div>
      </header>

      <div className="trust-grid">
        <aside className="trust-nav"><p>Standards</p><Link href="/editorial-policy">Editorial policy</Link><Link href="/how-we-test">How we evaluate products</Link><Link href="/corrections">Corrections</Link></aside>
        <div className="trust-content">
          <section className="trust-section"><p className="trust-section__eyebrow">01 / Responsibility</p><h2>Editorial responsibility, clearly described</h2><p>Wild &amp; Well is produced in-house. Pages may be attributed to the founder/editor or the editorial desk depending on who is responsible for the material. Neither label is intended to suggest clinical or laboratory credentials.</p><p>Where a topic needs specialist professional input, the page should rely on appropriate authoritative sources or clearly identified expertise rather than stretching an author biography beyond what is true.</p></section>

          <section className="author-directory">
            {AUTHORS.map((a, index) => (
              <Link key={a.slug} href={`/authors/${a.slug}`} className="author-directory__row">
                <span>0{index + 1}</span>
                <div><p>{a.role}</p><h2>{a.name}</h2><small>{a.bio}</small></div>
                <b>View profile →</b>
              </Link>
            ))}
          </section>

          <div className="trust-callout"><div><p>02 / The standard</p><h2>Authority comes from transparent method, not a decorative byline.</h2></div><div><p>Product recommendations are research-led unless a page explicitly says testing took place. Health information remains general educational guidance. Sources, trade-offs, corrections and commercial relationships should remain visible.</p></div></div>

          <div className="trust-links"><Link href="/editorial-policy">Editorial policy →</Link><Link href="/how-we-test">How we evaluate products →</Link><Link href="/affiliate-disclosure">Affiliate disclosure →</Link></div>
        </div>
      </div>
    </main>
  )
}
