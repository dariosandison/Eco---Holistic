import Link from 'next/link'
import ProductPick from '@/components/mdx/ProductPick'
import TopicEducationDeepDive from '@/components/TopicEducationDeepDive'
import TopicAtAGlance from '@/components/TopicAtAGlance'
import TopicFAQ from '@/components/TopicFAQ'
import { amazonSearchUrl } from '@/lib/amazon'
import { getTopicEdu } from '@/lib/topicEdu'

export const metadata = {
  title: 'Skin Health Topics — Wild & Well',
  description: 'Skin health basics: barrier-first routines, fragrance triggers, hard water considerations, and sun protection (UK).',
}

export default function Page() {
  const edu = getTopicEdu('skin-health')

  const faqs = [
    {
      q: 'What is the simplest “skin routine” that covers most people?',
      a: [
        'A gentle cleanser (or just water in the morning), a basic moisturiser, and daily SPF on exposed skin.',
        'If your skin is reactive, strip it back for 2 weeks: fragrance-free basics and fewer products.',
      ],
    },
    {
      q: 'Do “natural” products help sensitive skin?',
      a: 'Not always. Essential oils and botanical extracts can still irritate. If you react, a fragrance-free routine is often the cleanest test.',
    },
    {
      q: 'Can hard water affect skin?',
      a: 'Some people find hard water feels drying, especially with harsh cleansers. A gentler cleanser and a consistent moisturiser often matter more than gadgets.',
    },
    {
      q: 'When should I get medical help?',
      a: 'If you have persistent or severe eczema, infected-looking skin, rapidly changing moles, or symptoms that worry you, use NHS guidance and seek clinical advice.',
    },
  ]

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Skin Health (Barrier + Sun)</h1>
        <p className="mt-3 text-zinc-700">
          Skin tends to improve when routines get simpler: gentle cleansing, consistent moisturising, and daily sun protection — with fragrance reduced if you’re reactive.
        </p>

        {/* Topic image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/photography/cards/close-up-of-hands-holding-a-warm-mug-near-a-window-shallow-depth-of-field.jpg"
          alt=""
          className="mt-6 w-full rounded-3xl border border-zinc-200 shadow-sm"
          loading="lazy"
          decoding="async"
        />

        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/topics/fragrance-free">Fragrance-free basics</Link>
          <Link className="btn-secondary" href="/blog/best-mineral-sunscreens-uk">Mineral sunscreens (UK)</Link>
          <Link className="btn-secondary" href="/blog/low-tox-makeup-beginners">Low-tox makeup (beginners)</Link>
          <Link className="btn-secondary" href="/blog/hard-water-uk-myths-and-comfort">Hard water comfort guide</Link>
          <Link className="btn-secondary" href="/best-shower-filters-uk-hard-water">Shower filters (hard water)</Link>
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
            title: '2‑week reset (simple)',
            bullets: [
              'Use a gentle cleanser (or water AM).',
              'Moisturise after washing (barrier support).',
              'Daily SPF on exposed skin.',
              'If reactive: go fragrance-free for 2 weeks.',
            ],
          },
          {
            title: 'Biggest irritant sources',
            bullets: [
              'Fragrance (including essential oils) in skincare and laundry.',
              'Over‑exfoliation (too many acids/retinoids too soon).',
              'Hot water + harsh cleansers stripping the barrier.',
            ],
          },
          {
            title: 'Common mistakes',
            bullets: [
              'Buying lots of “active” products at once.',
              'Skipping SPF while using strong actives.',
              'Not giving changes time (2–4 weeks for baseline signals).',
            ],
          },
        ]}
      />

      <section className="mt-14" id="options">
        <h2 className="section-title">Options (compare links)</h2>
        <p className="section-subtitle">A few broad links to compare simple, low‑friction basics — plus a dedicated sunscreen guide.</p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ProductPick
            title="Fragrance-free moisturiser"
            badge="Barrier"
            description="A basic moisturiser you can use consistently tends to beat complex routines."
            href={amazonSearchUrl('fragrance free moisturiser sensitive skin UK')}
            bullets={['Simple ingredients', 'Patch test if reactive', 'Use after washing']}
          />
          <ProductPick
            title="Gentle cleanser (non‑stripping)"
            badge="Cleanse"
            description="Avoid harsh foaming cleansers if your skin feels dry or tight."
            href={amazonSearchUrl('gentle cleanser sensitive skin fragrance free')}
            bullets={['Avoid strong fragrance', 'Use lukewarm water', 'Don’t over-cleanse']}
          />
          <ProductPick
            title="Mineral sunscreen (zinc oxide)"
            badge="SPF"
            description="If you prefer mineral SPF, focus on comfort + reapplication."
            href={amazonSearchUrl('mineral sunscreen zinc oxide SPF 30 UK')}
            bullets={['SPF 30+ is a good start', 'Reapply if outdoors', 'Comfort matters']}
          />
          <ProductPick
            title="Read: Best mineral sunscreens (UK)"
            badge="Guide"
            description="Our education-first guide to mineral SPF: what to look for, what to avoid, and realistic trade-offs."
            links={[{ label: 'Open guide', merchant: 'internal', href: '/blog/best-mineral-sunscreens-uk', variant: 'primary' }]}
            bullets={['Choose what you’ll wear daily', 'Avoid fragrance if reactive', 'Prioritise reapplication']}
          />
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          <Link className="btn-primary" href="/topics/sun-protection">Sun protection basics →</Link>
          <Link className="btn-secondary" href="/topics/fragrance-free">Fragrance-free home →</Link>
        </div>
      </section>

      <TopicFAQ faqs={faqs} />

      <p className="mt-12 text-xs text-zinc-500">
        General information only — not medical advice. Some links are affiliate links. If you buy via them, we earn a commission.
      </p>
    </main>
  )
}
