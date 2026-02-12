import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import { PHASE22_UPDATED, PHASE22_UPDATED_LABEL, PHASE22_PREV_UPDATED_LABEL, PHASE22_DEFAULT_UPDATE_CHANGES } from '@/lib/phase22'
import ComparisonTable from '@/components/ComparisonTable'
import ProductPick from '@/components/mdx/ProductPick'
import { amazonSearchUrl } from '@/lib/amazon'
import EducationFirstCallout from '@/components/EducationFirstCallout'
import MoneyPageEducationBlock from '@/components/MoneyPageEducationBlock'
import { getMoneyPageEdu } from '@/lib/moneyPageEdu'
import { getTop10Meta } from '@/data/top10Meta'
import MoneyPageNextLinks from '@/components/MoneyPageNextLinks'
import InlineSignup from '@/components/InlineSignup'
import MoneyPageDecisionBox from '@/components/MoneyPageDecisionBox'
import MoneyPageQuickCompare from '@/components/MoneyPageQuickCompare'
import MoneyPageUpdateLog from '@/components/MoneyPageUpdateLog'
import BestForBadges from '@/components/BestForBadges'
import FAQSection from '@/components/FAQSection'
import MoneyPageTrustBlock from '@/components/MoneyPageTrustBlock'
import MoneyPageRoutes from '@/components/MoneyPageRoutes'




export const metadata = {
  title: 'Air Purifiers for Allergies (UK): shortlist',
  description: 'Shortlisted HEPA air purifiers for allergies in UK homes — what matters, what to skip, and top options for bedrooms and living rooms.',
}

const UPDATE_CHANGES = PHASE22_DEFAULT_UPDATE_CHANGES
const DECISION_RULES = [
  { if: 'Allergies worst in the bedroom at night', then: 'Start with a quiet bedroom‑friendly HEPA pick (night mode matters).', note: 'Size it to the bedroom you sleep in, not the whole home.' },
  { if: 'You’re buying for a larger living room', then: 'Choose a higher‑coverage (large room) unit rather than the smallest “HEPA” you can find.', note: 'Too small is the #1 reason people see no benefit.' },
  { if: 'Smells/odours bother you', then: 'Prefer a model with a carbon stage (and check carbon filter replacement cost).' },
  { if: 'Damp/condensation is the main issue', then: 'A dehumidifier + ventilation is usually the direct fix; a purifier doesn’t remove moisture.', note: 'See the damp & mould shortlist for the right tool.' },
]

const PICKS = [
  {
    title: 'Shark NeverChange5 (HEPA)',
    badge: 'Low filter fuss',
    desc: 'A popular option marketed around longer filter life. Still check replacement costs.',
    query: 'Shark NeverChange5 air purifier',
    bullets: ['Great for: busy households', 'Check room size coverage', 'Prioritise quiet night mode'],
  },
  {
    title: 'Blueair Blue Max 3250i',
    badge: 'Strong all‑rounder',
    desc: 'Well-regarded for everyday particle control with simple use.',
    query: 'Blueair Blue Max 3250i air purifier',
    bullets: ['Great for: living rooms', 'Plan for filter replacements', 'Auto mode is useful, not essential'],
  },
  {
    title: 'Levoit Core 600S (large rooms)',
    badge: 'Big room value',
    desc: 'Often recommended for higher coverage without jumping to premium pricing.',
    query: 'Levoit Core 600S air purifier',
    bullets: ['Great for: open plan spaces', 'Check noise at higher fan speeds'],
  },
  {
    title: 'Meaco HEPA air purifier',
    badge: 'Quiet comfort',
    desc: 'Meaco units are often praised for quiet operation — ideal for sleep.',
    query: 'Meaco air purifier HEPA',
    bullets: ['Great for: bedrooms', 'Look for quiet night mode'],
  },
  {
    title: 'Dyson purifier (HEPA + carbon)',
    badge: 'Premium',
    desc: 'Expensive, but some households value the build and sensor feedback.',
    query: 'Dyson purifier HEPA carbon',
    bullets: ['Great for: premium features', 'Check filter costs before committing'],
  },
  {
    title: 'Blueair Blue 511i Max (bedrooms)',
    badge: 'Small space',
    desc: 'Great for bedrooms/small rooms if you size it correctly.',
    query: 'Blueair 511i Max air purifier',
    bullets: ['Great for: small rooms', 'Quiet night mode matters'],
  },
]

export default function Page() {
    
  const edu = getMoneyPageEdu('best-air-purifiers-allergies-uk')

  const { bestFor, routes, faqs } = getTop10Meta('best-air-purifiers-allergies-uk')

const itemList = PICKS.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.title,
    url: amazonSearchUrl(p.query),
  }))

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Air Purifiers for Allergies (UK): shortlist',
    dateModified: PHASE22_UPDATED,
    datePublished: '2026-01-25',
    mainEntity: { '@type': 'ItemList', itemListElement: itemList },
  }
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />

      <header>
        <div className="max-w-3xl">
        <h1 className="text-4xl font-bold">Air purifiers for allergies (UK): shortlist</h1>
        <p className="mt-3 text-zinc-700">
          The biggest mistake is buying a purifier that’s too small for the room. Size first, features second.

        </p>

        <BestForBadges items={bestFor} />

        </div>

        {/* Page image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/photography/air-quality.png"
          alt=""
          className="mt-6 h-[260px] w-full rounded-3xl border border-zinc-200 object-cover shadow-sm md:h-[380px]"
          loading="lazy"
          decoding="async"
        />

        <div className="max-w-3xl">
        <EducationFirstCallout topicHref="/topics/air-quality" topicLabel="Air quality topic" insightHref="/blog/healthy-air-at-home" insightLabel="Healthy air at home" />
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/topics/air-quality">Air quality</Link>
          <Link className="btn-secondary" href="/blog/healthy-air-at-home">Healthy air guide</Link>
          <Link className="btn-secondary" href="/best-air-purifiers-small-flats-uk">Small flats list</Link>
        </div>
        <p className="mt-4 text-xs text-zinc-500">Last updated: {PHASE22_UPDATED_LABEL} · Wild & Well Editorial Team</p>
        </div>
      </header>

      
      <MoneyPageEducationBlock edu={edu} />

      <MoneyPageDecisionBox rules={DECISION_RULES} />
      <MoneyPageQuickCompare picks={PICKS} />
      <MoneyPageTrustBlock />
      <MoneyPageRoutes routes={routes} />
<section className="mt-12 grid gap-4 md:grid-cols-3">
        <div className="card">
          <h2 className="text-lg font-semibold">What matters</h2>
          <ul className="mt-3 list-disc pl-6 text-sm text-zinc-700 space-y-2">
            <li><strong>Right size</strong> for the room.</li>
            <li><strong>True HEPA</strong> for particles.</li>
            <li><strong>Carbon</strong> if smells bother you.</li>
            <li>Filter replacement cost + availability.</li>
          </ul>
        </div>
        <div className="card">
          <h2 className="text-lg font-semibold">Bedroom priority</h2>
          <p className="mt-3 text-sm text-zinc-700">Quiet night mode beats “smart” features you never use.</p>
        </div>
        <div className="card">
          <h2 className="text-lg font-semibold">If damp is the issue</h2>
          <p className="mt-3 text-sm text-zinc-700">A purifier helps particles, but damp often needs dehumidifying + ventilation.</p>
          <Link className="btn-secondary mt-4 inline-flex" href="/blog/winter-humidity-guide">Humidity guide</Link>
        </div>
      </section>

      <InlineSignup
        placement="air_purifiers_allergies"
        title="Free: Low‑Tox Shopping List"
        description="A beginner-friendly shortcut with simple swaps for air, water, cleaning and sleep — in plain English."
        cta="Send me the list"
      />

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Top options (shortlist)</h2>
        <p className="mt-2 text-sm text-zinc-600">Three common scenarios — choose the one that matches your room and use.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <ProductPick
            title="all‑rounder: Blueair 3250i"
            badge="Best overall"
            description="A straightforward everyday choice for general particle control in living areas."
            href={amazonSearchUrl('Blueair Blue Max 3250i air purifier')}
            bullets={['Size it to your room', 'Plan filter replacements', 'Auto mode is optional']}
          />
          <ProductPick
            title="Great for bedrooms: Meaco HEPA"
            badge="Great for"
            description="Prioritises quiet comfort — helpful if allergies disturb sleep."
            href={amazonSearchUrl('Meaco air purifier HEPA')}
            bullets={['Quiet night mode matters', 'Don’t oversize if noise is a concern']}
          />
          <ProductPick
            title="Great for larger rooms: Levoit 600S"
            badge="Good value"
            description="A common option for higher coverage without premium pricing."
            href={amazonSearchUrl('Levoit Core 600S air purifier')}
            bullets={['Check noise at high speeds', 'Confirm filter availability']}
          />
        </div>

        <ComparisonTable
          caption="At-a-glance comparison (what to check before you buy)"
          columns={[
            { key: 'pick', label: 'Option' },
            { key: 'bestFor', label: 'Great for' },
            { key: 'watchOut', label: 'Watch-out' },
            { key: 'check', label: 'Check before buying' },
          ]}
          rows={[
            {
              pick: 'Bedroom unit',
              bestFor: 'Quiet night use',
              watchOut: 'Noise at higher speeds',
              check: 'Night-mode dB + room-size coverage',
            },
            {
              pick: 'Living room unit',
              bestFor: 'Daytime particle control',
              watchOut: 'Filter cost over time',
              check: 'Replacement filter price + frequency',
            },
            {
              pick: 'Large room unit',
              bestFor: 'Open-plan spaces',
              watchOut: 'You may need higher fan speeds',
              check: 'Coverage spec at realistic settings',
            },
          ]}
        />
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Shortlist (buyer-friendly)</h2>
        <p className="mt-2 text-sm text-zinc-600">Curated searches to compare prices and check filter costs.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {PICKS.map((p) => (
            <ProductPick
              key={p.title}
              title={p.title}
              badge={p.badge}
              description={p.desc}
              href={amazonSearchUrl(p.query)}
              bullets={p.bullets}
            />
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          <Link className="btn-primary" href="/topics/air-quality">Go to Air Quality →</Link>
          <Link className="btn-secondary" href="/best-air-purifiers-small-flats-uk">Great for small flats →</Link>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <MoneyPageUpdateLog updatedLabel={PHASE22_UPDATED_LABEL} prevUpdatedLabel={PHASE22_PREV_UPDATED_LABEL} changes={UPDATE_CHANGES} />
      <MoneyPageNextLinks slug="best-air-purifiers-allergies-uk"  includeSignup={false} />

      <p className="mt-12 text-xs text-zinc-500">
        Some links are affiliate links. If you buy via them, we earn a commission.
      </p>
    </main>
  )
}