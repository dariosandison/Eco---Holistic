import Link from 'next/link'
import ProductPick from '@/components/mdx/ProductPick'
import TopicEducationDeepDive from '@/components/TopicEducationDeepDive'
import TopicAtAGlance from '@/components/TopicAtAGlance'
import TopicFAQ from '@/components/TopicFAQ'
import { amazonSearchUrl } from '@/lib/amazon'
import { getTopicEdu } from '@/lib/topicEdu'

export const metadata = {
  title: 'Sun Protection Topics — Wild & Well',
  description: 'Sun protection basics (UK): habits first (shade, clothing), then choosing a sunscreen you will actually use.',
}

export default function Page() {
  const edu = getTopicEdu('sun-protection')

  const faqs = [
    {
      q: 'Do I need sunscreen in the UK?',
      a: [
        'Often, yes — especially in spring/summer and when UV index is higher. The exact need depends on time outside, cloud cover, and your skin type.',
        'Habits matter too: shade, hats, sleeves, and timing reduce exposure without any product.',
      ],
    },
    {
      q: 'Mineral vs chemical sunscreen: which is better?',
      a: [
        'Both can work well. The best one is the one you tolerate and apply consistently.',
        'Mineral (zinc/titanium) can suit sensitive skin but may leave a white cast depending on formula.',
      ],
    },
    {
      q: 'How much sunscreen should I apply?',
      a: 'Most people under-apply. A simple rule of thumb is “two finger lengths” for face and neck, and reapply if you are out for long periods, sweating, or after water exposure.',
    },
    {
      q: 'Is SPF in moisturiser enough?',
      a: 'Sometimes, but many people apply too little moisturiser to reach the stated SPF. If you are spending meaningful time outside, a dedicated sunscreen layer is more reliable.',
    },
  ]

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Sun Protection (SPF + Habits)</h1>
        <p className="mt-3 text-zinc-700">
          Sun protection is mostly behaviour: shade, clothing, and timing. Sunscreen is the back‑up layer — choose one you will actually use.
        </p>

        {/* Topic image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/photography/cards/calm-living-room-corner-with-linen-throw-and-houseplant-by-a-window-negative-space.jpg"
          alt=""
          className="mt-6 w-full rounded-3xl border border-zinc-200 shadow-sm"
          loading="lazy"
          decoding="async"
        />

        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/blog/best-mineral-sunscreens-uk">Mineral sunscreens guide</Link>
          <Link className="btn-secondary" href="/topics/skin-health">Skin health topic</Link>
          <Link className="btn-secondary" href="/topics/fragrance-free">Fragrance‑free topic</Link>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <a className="chip" href="#understand">Understand</a>
          <a className="chip" href="#start">Start</a>
          <a className="chip" href="#options">Options</a>
          <a className="chip" href="#faqs">FAQs</a>
        </div>

        <p className="mt-3 text-xs text-zinc-500">Last updated: February 13, 2026</p>
      </header>

      <TopicEducationDeepDive edu={edu} />

      <div id="start" />
      <TopicAtAGlance
        items={[
          {
            title: 'Start here (habits)',
            bullets: [
              'Check the UV index when you’ll be outside for a while.',
              'Use shade + clothing first (hat, sleeves).',
              'Make sunscreen a default on higher‑UV days.',
            ],
          },
          {
            title: 'Choosing a sunscreen',
            bullets: [
              'Pick a texture you’ll apply daily (no “hero” products).',
              'Sensitive skin: consider mineral formulas and patch test.',
              'Face vs body: many people prefer a dedicated face formula.',
            ],
          },
          {
            title: 'Common mistakes',
            bullets: [
              'Under‑applying (SPF assumes generous application).',
              'Buying a formula you dislike and never use.',
              'Relying only on products and ignoring shade/clothing.',
            ],
          },
        ]}
      />

      <section className="mt-14" id="options">
        <h2 className="section-title">Options (compare links)</h2>
        <p className="section-subtitle">Broad links to compare texture, fragrance, and ease of daily use.</p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ProductPick
            title="Mineral sunscreen (face)"
            badge="Sensitive"
            description="Zinc/titanium formulas can suit sensitive skin. Patch test and check finish/white cast."
            href={amazonSearchUrl('mineral sunscreen face SPF 30 50 fragrance free')}
            bullets={['Patch test first', 'Check white cast', 'Choose a finish you’ll wear daily']}
          />
          <ProductPick
            title="Sunscreen (body)"
            badge="Everyday"
            description="Choose a larger bottle for consistency."
            href={amazonSearchUrl('sunscreen body SPF 50 sensitive skin UK')}
            bullets={['Larger bottle = easier habit', 'Reapply on long outdoor days']}
          />
          <ProductPick
            title="Sun hat (wide brim)"
            badge="Habit"
            description="A high-leverage, no‑chemistry protection layer."
            href={amazonSearchUrl('wide brim sun hat UPF')}
            bullets={['Pick one you’ll actually wear', 'Packable helps']}
          />
          <ProductPick
            title="UPF sun shirt / rash vest"
            badge="Clothing"
            description="Especially useful for long outdoor days and holidays."
            href={amazonSearchUrl('UPF 50 sun shirt long sleeve')}
            bullets={['Great for: long days outside', 'Less reapplication needed on covered areas']}
          />
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          <Link className="btn-primary" href="/blog/best-mineral-sunscreens-uk">Read the sunscreen guide →</Link>
          <Link className="btn-secondary" href="/topics/skin-health">Back to skin health →</Link>
        </div>
      </section>

      <TopicFAQ faqs={faqs} />

      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, we earn a commission.</p>
    </main>
  )
}
