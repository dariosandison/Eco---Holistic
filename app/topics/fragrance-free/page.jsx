import Link from 'next/link'
import ProductPick from '@/components/mdx/ProductPick'
import TopicEducationDeepDive from '@/components/TopicEducationDeepDive'
import TopicAtAGlance from '@/components/TopicAtAGlance'
import TopicFAQ from '@/components/TopicFAQ'
import { amazonSearchUrl } from '@/lib/amazon'
import { getTopicEdu } from '@/lib/topicEdu'

export const metadata = {
  title: 'Fragrance-Free Topics — Wild & Well',
  description: 'Fragrance-free + sensitive-skin friendly cleaning and laundry topics for UK homes.',
}

export default function Page() {
  const edu = getTopicEdu('fragrance-free')

  const faqs = [
    {
      q: 'Is “unscented” the same as fragrance-free?',
      a: 'Not always. “Unscented” can mean fragrance is used to mask smells. “Fragrance-free” is clearer, but still check the ingredient list for parfum/fragrance and essential oils if you react to them.',
    },
    {
      q: 'What should I switch first?',
      a: 'Start with high-contact products: laundry detergent, dish soap, hand soap, and body products. Then move to sprays and surface cleaners.',
    },
    {
      q: 'Do essential oils count as fragrance?',
      a: 'For many sensitive people, yes. Essential oils are still scented compounds and can trigger symptoms even when the product is labelled “natural”.',
    },
    {
      q: 'Why can overdosing detergent make things worse?',
      a: 'Too much detergent can leave residue in fabrics. For sensitive skin, a correct dose and an extra rinse can be more comfortable than stronger products.',
    },
  ]

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Fragrance-Free Cleaning &amp; Laundry</h1>
        <p className="mt-3 text-zinc-700">
          The simplest approach is to remove fragrance from high-contact products first (laundry, dish, body). That usually reduces exposure more than switching a dozen surface sprays.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/blog/non-toxic-cleaning-starter">Cleaning starter guide</Link>
          <Link className="btn-secondary" href="/best-fragrance-free-laundry-detergents-uk">Laundry detergents shortlist</Link>
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
              'Switch laundry detergent first (skin contact all day).',
              'Then dish soap and hand soap.',
              'Then cleaners and sprays.',
            ],
          },
          {
            title: 'What to watch for',
            bullets: [
              'Look for parfum/fragrance in ingredient lists.',
              'Essential oils can be a trigger even in “natural” products.',
              'Use the right dose; consider an extra rinse for bedding.',
            ],
          },
          {
            title: 'Common mistakes',
            bullets: [
              'Buying “natural” products that are still heavily scented.',
              'Overdosing detergent and leaving residue.',
              'Masking smells instead of removing the source.',
            ],
          },
        ]}
      />

      <section className="mt-14" id="options">
        <h2 className="section-title">Options (compare links)</h2>
        <p className="section-subtitle">If you’ve done the “no-spend” basics, these broad links help you compare price and availability.</p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ProductPick
            title="Ecover ZERO laundry liquid (fragrance-free)"
            badge="Allergy UK approved"
            description="Fragrance-free and designed for sensitive skin."
            href={amazonSearchUrl('Ecover ZERO laundry liquid fragrance free')}
            bullets={['Fragrance-free', 'Mainstream availability', 'Consider refills if available']}
          />
          <ProductPick
            title="Surcare non-bio laundry liquid (0% fragrance)"
            badge="Sensitive"
            description="A popular sensitive-skin option in UK supermarkets."
            href={amazonSearchUrl('Surcare sensitive non bio laundry liquid 0% fragrance')}
            bullets={['0% fragrance/dyes/enzymes', 'Useful for bedding and towels']}
          />
          <ProductPick
            title="Bio-D laundry liquid (fragrance-free)"
            badge="Refill-friendly"
            description="Often available in larger bottles/refills."
            href={amazonSearchUrl('Bio-D fragrance free laundry liquid')}
            bullets={['Fragrance-free', 'Check refill sizes/availability']}
          />
          <ProductPick
            title="White vinegar (laundry rinse helper)"
            badge="Budget"
            description="Sometimes used to reduce musty smells. Use sparingly and avoid on delicate fabrics."
            href={amazonSearchUrl('white vinegar cleaning 5L')}
            bullets={['Low cost', 'Use occasionally, not as a fragrance replacement']}
          />
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          <Link className="btn-primary" href="/best-fragrance-free-laundry-detergents-uk">Detergent guide →</Link>
          <Link className="btn-secondary" href="/blog/eco-laundry">Laundry guide</Link>
        </div>
      </section>

      <TopicFAQ faqs={faqs} />

      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, we earn a commission.</p>
    </main>
  )
}
