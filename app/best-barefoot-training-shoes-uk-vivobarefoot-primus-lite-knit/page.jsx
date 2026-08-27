import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import ProductPick from '@/components/mdx/ProductPick'
import EducationFirstCallout from '@/components/EducationFirstCallout'
import MoneyPageEducationBlock from '@/components/MoneyPageEducationBlock'
import { getMoneyPageEdu } from '@/lib/moneyPageEdu'
import MoneyPageNextLinks from '@/components/MoneyPageNextLinks'

export const metadata = {
  title: 'Vivobarefoot Primus Lite Knit (UK) — barefoot training shoe guide',
  description: 'A practical guide to barefoot training shoes: who they suit, how to transition safely, and what to compare before buying.',
}

const FEATURED_AWIN = 'https://www.awin1.com/cread.php?awinmid=7778&awinaffid=2754234&clickref=ww_movement_footstrength_vivo_primus_lite_knit&ued=https%3A%2F%2Fwww.vivobarefoot.com%2Fuk%2Fprimus-lite-knit-training-footwear'
const PRIMUS_III_MENS = 'https://www.awin1.com/cread.php?awinmid=7778&awinaffid=2754234&clickref=ww_movement_footwear_vivo_primus_lite_iii_mens&ued=https%3A%2F%2Fwww.vivobarefoot.com%2Fuk%2Fprimus-lite-iii-mens'
const GEO_RACER_MENS = 'https://www.awin1.com/cread.php?awinmid=7778&awinaffid=2754234&clickref=ww_movement_footwear_vivo_geo_racer_knit_mens&ued=https%3A%2F%2Fwww.vivobarefoot.com%2Fuk%2Fgeo-racer-knit-mens'

export default function Page() {
  const slug = 'best-barefoot-training-shoes-uk-vivobarefoot-primus-lite-knit'
  const edu = getMoneyPageEdu(slug)
  const ld = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Barefoot training shoes (UK): Vivobarefoot Primus Lite Knit', datePublished: '2026-02-13', dateModified: '2026-08-27' }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />
      <header>
        <div className="max-w-3xl"><h1 className="text-4xl font-bold">Barefoot training shoes (UK): Vivobarefoot Primus Lite Knit</h1><p className="mt-3 text-zinc-700">A practical guide to barefoot training shoes: who they suit, how to transition safely, and what to compare before buying.</p></div>
        <img src="/images/photography/movement.jpg" alt="" className="mt-6 h-[260px] w-full rounded-3xl border border-zinc-200 object-cover shadow-sm md:h-[380px]" loading="lazy" decoding="async" />
        <div className="max-w-3xl"><EducationFirstCallout topicHref="/movement" topicLabel="Movement" insightHref="/blog/home-strength-basics-busy-people" insightLabel="Home strength basics" /><div className="mt-5 flex flex-wrap gap-2"><Link className="btn-secondary" href="/movement">Movement</Link><Link className="btn-secondary" href="/best-barefoot-walking-boots-uk-vivobarefoot-tracker-winter-iii">Barefoot boots guide</Link><Link className="btn-secondary" href="/affiliate-disclosure">Affiliate disclosure</Link></div><p className="mt-3 text-xs text-zinc-500">Last updated: August 27, 2026 · Wild &amp; Well Editorial Team</p></div>
      </header>
      <MoneyPageEducationBlock edu={edu} />
      <section className="mt-12"><h2 className="text-2xl font-semibold">Featured option</h2><p className="mt-2 max-w-3xl text-sm text-zinc-600">If you’re new to barefoot shoes, go slow. Short sessions first, especially with calf loading, then build volume.</p><div className="mt-6 grid gap-4 md:grid-cols-2"><ProductPick title="Vivobarefoot Primus Lite Knit" badge="Foot strength" description="A barefoot training option for gym work. Prioritise fit and transition gradually." bullets={['Best for: gym training and foot-strength work when you want ground feel','Avoid if: you need lots of cushioning or you’re ramping up mileage fast','Transition slowly (short sessions first) to avoid calf/foot overload']} trackingContext="primus_lite_knit_guide_featured" links={[{ label: 'Check Primus Lite Knit at Vivobarefoot', merchant: 'awin', href: FEATURED_AWIN, variant: 'primary' }]} /></div></section>
      <section className="mt-12"><h2 className="text-2xl font-semibold">Two nearby Vivobarefoot alternatives</h2><p className="mt-2 max-w-3xl text-sm text-zinc-600">If the featured model is unavailable or the fit is not right, compare another low-profile training option before jumping to an unrelated marketplace listing.</p><div className="mt-6 grid gap-4 md:grid-cols-2"><ProductPick title="Vivobarefoot Primus Lite III (Men)" badge="Training alternative" description="A simple alternative within the same barefoot training family." bullets={['Best for: gym and everyday barefoot-style wear','Fit matters: use Vivobarefoot sizing guidance','Build training volume gradually']} trackingContext="primus_lite_knit_guide_alt_primus3" links={[{ label: 'Check Primus Lite III', merchant: 'awin', href: PRIMUS_III_MENS, variant: 'primary' }]} /><ProductPick title="Vivobarefoot Geo Racer Knit (Men)" badge="Lightweight alternative" description="Another lightweight Vivobarefoot option worth comparing for fit and intended use." bullets={['Best for: lightweight everyday movement and training','Compare upper feel and fit with Primus','Transition gradually if you are new to minimal footwear']} trackingContext="primus_lite_knit_guide_alt_geo" links={[{ label: 'Check Geo Racer Knit', merchant: 'awin', href: GEO_RACER_MENS, variant: 'primary' }]} /></div></section>
      <section className="mt-10 panel"><h2 className="text-lg font-semibold">Quick transition checklist</h2><ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700"><li>Start with short indoor sessions (10–20 minutes) before full workouts.</li><li>Expect some adaptation, but reduce volume if discomfort lingers or sharpens.</li><li>Keep the rest of your training stable for 2–3 weeks so you can judge the change.</li></ul></section>
      <MoneyPageNextLinks slug={slug} />
      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, Wild &amp; Well may earn a commission at no extra cost to you.</p>
    </main>
  )
}
