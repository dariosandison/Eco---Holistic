import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import ProductPick from '@/components/mdx/ProductPick'
import EducationFirstCallout from '@/components/EducationFirstCallout'
import MoneyPageEducationBlock from '@/components/MoneyPageEducationBlock'
import { getMoneyPageEdu } from '@/lib/moneyPageEdu'
import MoneyPageNextLinks from '@/components/MoneyPageNextLinks'

export const metadata = {
  title: 'Vivobarefoot walking boots UK — barefoot boot buying guide',
  description: 'A practical UK guide to barefoot walking boots, with current Vivobarefoot alternatives, transition advice and tracked partner links.',
}

const TRACKER_FOREST_MENS = 'https://www.awin1.com/cread.php?awinmid=7778&awinaffid=2754234&clickref=ww_movement_footwear_vivo_tracker_forest_esc_mens&ued=https%3A%2F%2Fwww.vivobarefoot.com%2Fuk%2Ftracker-forest-esc-mens'
const MAGNA_FOREST_MENS = 'https://www.awin1.com/cread.php?awinmid=7778&awinaffid=2754234&clickref=ww_movement_footwear_vivo_magna_forest_esc_mens&ued=https%3A%2F%2Fwww.vivobarefoot.com%2Fuk%2Fmagna-forest-esc-mens'
const TRACKER_FOREST_WOMENS = 'https://www.awin1.com/cread.php?awinmid=7778&awinaffid=2754234&clickref=ww_movement_footwear_vivo_tracker_forest_esc_womens&ued=https%3A%2F%2Fwww.vivobarefoot.com%2Fuk%2Ftracker-forest-esc-womens'

export default function Page() {
  const slug = 'best-barefoot-walking-boots-uk-vivobarefoot-tracker-winter-iii'
  const edu = getMoneyPageEdu(slug)
  const ld = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Barefoot walking boots UK: Vivobarefoot buying guide', datePublished: '2026-02-11', dateModified: '2026-08-27' }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />
      <header><div className="max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Barefoot outdoor footwear</p><h1 className="mt-2 text-4xl font-bold">Vivobarefoot walking boots (UK): what to compare</h1><p className="mt-3 text-zinc-700">The original Tracker Winter III page has been broadened into a useful buying guide so visitors can compare current tracked Vivobarefoot outdoor options rather than being sent to a stale product destination.</p></div><img src="/images/photography/movement.jpg" alt="" className="mt-6 h-[260px] w-full rounded-3xl border border-zinc-200 object-cover shadow-sm md:h-[380px]" loading="lazy" decoding="async" /><div className="max-w-3xl"><EducationFirstCallout topicHref="/movement" topicLabel="Movement" insightHref="/shopping-list" insightLabel="Free shopping list" /><div className="mt-5 flex flex-wrap gap-2"><Link className="btn-secondary" href="/movement">Movement</Link><Link className="btn-secondary" href="/best-barefoot-training-shoes-uk-vivobarefoot-primus-lite-knit">Training shoes guide</Link><Link className="btn-secondary" href="/affiliate-disclosure">Affiliate disclosure</Link></div><p className="mt-3 text-xs text-zinc-500">Last updated: August 27, 2026 · Wild &amp; Well Editorial Team</p></div></header>
      <MoneyPageEducationBlock edu={edu} />
      <section className="mt-12"><h2 className="text-2xl font-semibold">Current outdoor options to compare</h2><p className="mt-2 max-w-3xl text-sm text-zinc-600">Start with terrain, weather and fit. Minimal footwear changes how your feet and calves load, so the transition matters as much as the model.</p><div className="mt-6 grid gap-4 md:grid-cols-2"><ProductPick title="Vivobarefoot Tracker Forest ESC (Men)" badge="Walking boot" description="A current tracked Vivobarefoot boot option for outdoor walking and rougher terrain." bullets={['Best for: outdoor walking when you want ground feel and a boot format','Avoid if: you need conventional cushioning or rigid support','Fit matters: follow sizing guidance and use the return policy']} trackingContext="barefoot_boots_guide_tracker_mens" links={[{ label: 'Check Tracker Forest ESC', merchant: 'awin', href: TRACKER_FOREST_MENS, variant: 'primary' }]} /><ProductPick title="Vivobarefoot Magna Forest ESC (Men)" badge="Lighter outdoor option" description="A lower-cut alternative worth comparing when a full boot is more than you need." bullets={['Best for: mixed outdoor use where you prefer a lighter upper','Compare ankle coverage with the Tracker','Transition with shorter walks first']} trackingContext="barefoot_boots_guide_magna_mens" links={[{ label: 'Check Magna Forest ESC', merchant: 'awin', href: MAGNA_FOREST_MENS, variant: 'primary' }]} /><ProductPick title="Vivobarefoot Tracker Forest ESC (Women)" badge="Women’s walking boot" description="The women’s Tracker Forest ESC partner route for readers comparing the same outdoor format." bullets={['Best for: outdoor walking and rougher terrain','Check sizing rather than assuming your conventional shoe size','Build walking volume gradually']} trackingContext="barefoot_boots_guide_tracker_womens" links={[{ label: 'Check women’s Tracker Forest ESC', merchant: 'awin', href: TRACKER_FOREST_WOMENS, variant: 'primary' }]} /></div></section>
      <section className="mt-10 panel"><h2 className="text-lg font-semibold">Before switching boots</h2><ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700"><li>Use short, familiar walks first rather than debuting minimal boots on a long hike.</li><li>Increase distance gradually and pay attention to persistent foot or calf discomfort.</li><li>Choose the model for terrain and fit, not simply because it is labelled barefoot.</li></ul></section>
      <MoneyPageNextLinks slug={slug} />
      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, Wild &amp; Well may earn a commission at no extra cost to you.</p>
    </main>
  )
}
