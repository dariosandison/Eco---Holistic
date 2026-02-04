import Link from 'next/link'
import ProductPick from '@/components/mdx/ProductPick'
import TopicEducationDeepDive from '@/components/TopicEducationDeepDive'
import TopicAtAGlance from '@/components/TopicAtAGlance'
import TopicFAQ from '@/components/TopicFAQ'
import { amazonSearchUrl } from '@/lib/amazon'
import { getTopicEdu } from '@/lib/topicEdu'

export const metadata = {
  title: 'Air Quality Topics — Wild & Well',
  description: 'Air quality for UK homes: allergies, damp, and the practical steps that matter most.',
}

export default function Page() {
  const edu = getTopicEdu('air-quality')

  const faqs = [
    {
      q: 'Do air purifiers help with allergies?',
      a: 'They can reduce airborne particles (e.g., pollen, dust) when sized correctly for the room and used consistently. Room size and filter replacement matter more than extra features.',
    },
    {
      q: 'Do air purifiers help with damp or mould?',
      a: [
        'Purifiers help with particles; they do not remove moisture. If damp is the driver, focus on ventilation and humidity control first.',
        'A dehumidifier can be the more direct tool when humidity stays high and condensation/mould is recurring.',
      ],
    },
    {
      q: 'How do I choose the right size?',
      a: 'Match the purifier’s stated coverage or CADR to your room size. A small unit in a large room is a common reason people see no improvement.',
    },
    {
      q: 'HEPA vs “HEPA-style”: what’s the difference?',
      a: 'Prefer true HEPA claims from reputable brands. “HEPA-style” is not a standard and can mean almost anything.',
    },
  ]

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Air Quality (Allergies + Damp)</h1>
        <p className="mt-3 text-zinc-700">
          The biggest win is matching the purifier to the room size and using it consistently. For damp, moisture control usually matters more than air cleaning.
        </p>
        {/* Topic image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/photography/air-quality.png"
          alt=""
          className="mt-6 w-full rounded-3xl border border-zinc-200 shadow-sm"
          loading="lazy"
          decoding="async"
        />
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/blog/healthy-air-at-home">Read the air guide</Link>
          <Link className="btn-secondary" href="/best-air-purifiers-allergies-uk">Air purifiers for allergies</Link>
          <Link className="btn-secondary" href="/best-air-purifiers-small-flats-uk">Air purifiers for small flats</Link>
          <Link className="btn-secondary" href="/best-dehumidifiers-damp-mould-uk">Dehumidifiers for damp &amp; mould</Link>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <a className="chip" href="#understand">Understand</a>
          <a className="chip" href="#start">Start</a>
          <a className="chip" href="#options">Options</a>
          <a className="chip" href="#faqs">FAQs</a>
        </div>

        <p className="mt-3 text-xs text-zinc-500">Last updated: February 2, 2026</p>
      </header>

      <TopicEducationDeepDive edu={edu} />

      <div id="start" />
      <TopicAtAGlance
        items={[
          {
            title: 'Start here',
            bullets: [
              'Check room size (m²) and choose a unit that can cover it.',
              'HEPA is the baseline; add carbon if odours are a problem.',
              'Place it where air moves, not behind furniture.',
              'Replace filters on schedule.',
            ],
          },
          {
            title: 'If damp is the issue',
            bullets: [
              'Measure humidity with a hygrometer (aim roughly 40–60%).',
              'Ventilate high-moisture rooms (kitchen/bathroom).',
              'Consider a dehumidifier if humidity stays high and mould recurs.',
            ],
          },
          {
            title: 'Common mistakes',
            bullets: [
              'Buying a small unit for a large room.',
              'Choosing based on “smart” features instead of performance and noise.',
              'Skipping filter replacements.',
            ],
          },
        ]}
      />

      <section className="mt-14" id="options">
        <h2 className="section-title">Options (compare links)</h2>
        <p className="section-subtitle">After the basics, these broad search links help you compare noise, warranty, and replacement filter cost.</p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ProductPick
            title="Air purifier (bedroom / small room)"
            badge="Small spaces"
            description="Choose based on room size and noise level for night use."
            href={amazonSearchUrl('HEPA air purifier small room quiet night mode')}
            bullets={['Match to room size', 'Plan for replacement filters', 'Quiet mode matters for bedrooms']}
          />
          <ProductPick
            title="Air purifier (allergy season / living room)"
            badge="Allergens"
            description="Larger rooms need higher coverage/CADR."
            href={amazonSearchUrl('HEPA air purifier allergies UK large room')}
            bullets={['HEPA + carbon helps with smells', 'Auto mode can help but is not essential']}
          />
          <ProductPick
            title="Humidity monitor (hygrometer)"
            badge="Damp control"
            description="Useful for deciding if humidity is actually the problem."
            href={amazonSearchUrl('digital hygrometer humidity monitor')}
            bullets={['Aim roughly 40–60% humidity', 'Use measurements to guide decisions']}
          />
          <ProductPick
            title="Dehumidifier (if needed)"
            badge="Moisture"
            description="A direct tool for recurring condensation and mould risk."
            href={amazonSearchUrl('dehumidifier UK energy efficient quiet')}
            bullets={['Check tank size', 'Look for laundry mode', 'Consider noise for bedrooms']}
          />
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          <Link className="btn-primary" href="/best-air-purifiers-allergies-uk">Allergy shortlist →</Link>
          <Link className="btn-secondary" href="/best-air-purifiers-small-flats-uk">Small flats →</Link>
          <Link className="btn-secondary" href="/best-dehumidifiers-damp-mould-uk">Dehumidifier shortlist →</Link>
        </div>
      </section>

      <section className="mt-12 panel">
        <h2 className="text-lg font-semibold">Where to buy (UK)</h2>
        <p className="mt-2 text-sm text-zinc-700">
          Common retailers for air-quality products include Amazon, AO.com, Currys, and brand stores (for example: Pro Breeze, Coway, Blueair). Always compare replacement filter costs and returns.
        </p>
      </section>

      <TopicFAQ faqs={faqs} />

      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, we earn a commission.</p>
    </main>
  )
}
