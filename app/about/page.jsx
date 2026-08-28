import Link from 'next/link'

export const metadata = {
  title: 'About',
  description: 'What Wild & Well is, how we evaluate products, how the site is funded, and how we keep editorial decisions independent.',
}

export default function Page(){
  return (
    <main className='mx-auto max-w-3xl px-4 py-16 prose'>
      <h1>About Wild &amp; Well</h1>
      <p>
        Wild &amp; Well is a practical wellness site for UK homes. We cover water, indoor air, sleep, food-first nutrition,
        movement, lower-tox home choices and simple household resilience. The aim is to help people understand the problem first,
        try sensible low-cost steps where appropriate, and only then compare products.
      </p>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/photography/home.jpg"
        alt=""
        className="w-full rounded-3xl border border-zinc-200 shadow-sm"
        loading="lazy"
        decoding="async"
      />

      <h2>How the site is organised</h2>
      <ul>
        <li><strong>Wellness Insights</strong> — explainers and practical guides that help you understand what matters.</li>
        <li><strong>Shortlists</strong> — focused comparison pages with trade-offs, ownership costs and use-case guidance.</li>
        <li><strong>Topics</strong> — curated paths across water, air, sleep, nutrition, movement, lower-tox home and resilience.</li>
        <li><strong>Free tools</strong> — calculators designed to answer part of the decision before you buy anything.</li>
      </ul>

      <h2>How we make money</h2>
      <p>
        Some pages include affiliate links. If you buy through one of those links, we may earn a commission at no extra cost to you.
        Affiliate availability does not determine what problem we cover or where a product appears in a comparison.
        We do not sell paid ranking positions or disguise sponsorship as independent advice.
      </p>
      <p>
        Read our <Link href='/affiliate-disclosure'>affiliate disclosure</Link>, <Link href='/product-disclosure'>product disclosure</Link>,
        <Link href='/editorial-policy'> editorial policy</Link> and <Link href='/how-we-test'>how we evaluate products</Link>.
      </p>

      <h2>How product evaluation works</h2>
      <p>
        Unless a page explicitly says otherwise, our product guides are based on editorial research rather than laboratory testing or long-term hands-on testing.
        We compare the job a product is meant to do, available evidence and specifications, UK practicality, ownership cost, maintenance and relevant alternatives — including buying nothing.
      </p>
      <p>
        We do not present manufacturer claims as our own test results. When evidence is uncertain or a product is not the right solution, the page should say so.
      </p>

      <h2>Start here</h2>
      <p>
        If you are new, browse <Link href='/topics'>Topics</Link> or use one of the <Link href='/tools'>free tools</Link> to choose a single area to improve first.
      </p>

      <h2>Who’s behind Wild &amp; Well</h2>
      <p>
        Wild &amp; Well is founded and edited in-house. You can read the <Link href='/authors/wild-and-well-founder'>Founder &amp; Editor profile</Link>
        and see other contributors on the <Link href='/authors'>Authors</Link> page.
      </p>

      <p>
        Have feedback, corrections, or a product you would like us to consider? Use the <Link href='/contact'>contact page</Link>.
      </p>

      <p className="text-xs text-zinc-500">Last updated: August 28, 2026</p>
    </main>
  )
}
