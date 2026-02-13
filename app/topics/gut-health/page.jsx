import Link from 'next/link'
import ProductPick from '@/components/mdx/ProductPick'
import TopicEducationDeepDive from '@/components/TopicEducationDeepDive'
import TopicAtAGlance from '@/components/TopicAtAGlance'
import TopicFAQ from '@/components/TopicFAQ'
import { amazonSearchUrl } from '@/lib/amazon'
import { getTopicEdu } from '@/lib/topicEdu'

export const metadata = {
  title: 'Gut Health Topics — Wild & Well',
  description: 'Gut health basics for beginners: fibre, diversity, fermented foods, and a sensible, education‑first approach (UK).',
}

export default function Page() {
  const edu = getTopicEdu('gut-health')

  const faqs = [
    {
      q: 'What is the simplest gut health lever?',
      a: [
        'Fibre and food diversity (plants) are a strong, repeatable foundation for most people.',
        'If you currently eat very little fibre, increase gradually and drink enough water.',
      ],
    },
    {
      q: 'Do I need probiotics?',
      a: [
        'Not necessarily. Many people do well with food-first steps: fibre, fermented foods, regular meals, and sleep.',
        'If you try a supplement, choose one change at a time and track symptoms for 2–4 weeks.',
      ],
    },
    {
      q: 'Are fermented foods “mandatory”?',
      a: 'No — they’re optional. If you enjoy them, start small and choose simple-ingredient versions (e.g., plain sauerkraut/kimchi without lots of additives).',
    },
    {
      q: 'When should I get medical help?',
      a: 'If you have persistent symptoms, blood in stool, unexplained weight loss, severe pain, fever, or symptoms that worry you, use NHS guidance and seek clinical advice.',
    },
  ]

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Gut Health (Beginners)</h1>
        <p className="mt-3 text-zinc-700">
          A calm, food-first approach: fibre, plant variety, and simple routines — before spending money on complex stacks.
        </p>

        {/* Topic image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/photography/nutrition.jpg"
          alt=""
          className="mt-6 w-full rounded-3xl border border-zinc-200 shadow-sm"
          loading="lazy"
          decoding="async"
        />

        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/blog/fibre-gut-health-practical-guide">Fibre &amp; gut health guide</Link>
          <Link className="btn-secondary" href="/best-fermented-foods-sauerkraut-kimchi">Fermented foods shortlist</Link>
          <Link className="btn-secondary" href="/best-gut-health-supplements-beginners">Gut supplements (beginners)</Link>
          <Link className="btn-secondary" href="/nutrition">Nutrition section</Link>
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
            title: 'Start here (2 weeks)',
            bullets: [
              'Add 1 high‑fibre food per day (oats, beans, lentils, fruit).',
              'Aim for 20–30 different plant foods per week (rough guide).',
              'Increase fibre gradually and drink water alongside.',
            ],
          },
          {
            title: 'Simple additions',
            bullets: [
              'Fermented foods (optional): small servings a few times per week.',
              'Regular meal timing (less grazing can help some people).',
              'Walk after meals when you can (gentle movement).',
            ],
          },
          {
            title: 'Common mistakes',
            bullets: [
              'Jumping to expensive stacks without a food baseline.',
              'Increasing fibre too fast and then stopping completely.',
              'Assuming “more supplements” = better gut health.',
            ],
          },
        ]}
      />

      <section className="mt-14" id="options">
        <h2 className="section-title">Options (compare links)</h2>
        <p className="section-subtitle">Broad links for simple staples that support fibre and consistency.</p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ProductPick
            title="Oats (wholegrain)"
            badge="Fibre"
            description="An easy daily fibre base. Choose what you’ll actually eat (rolled, jumbo, steel‑cut)."
            href={amazonSearchUrl('organic oats jumbo rolled UK')}
            bullets={['Add fruit/nuts/seeds', 'Keep portion realistic', 'Repeatable breakfast']}
          />
          <ProductPick
            title="Beans & lentils (tinned)"
            badge="Convenience"
            description="A low-effort way to raise fibre without complicated cooking."
            href={amazonSearchUrl('tinned lentils beans mixed case UK')}
            bullets={['Rinse to reduce salt', 'Add to salads and sauces', 'Start with small portions']}
          />
          <ProductPick
            title="Psyllium husk (if needed)"
            badge="Add-on"
            description="Some people use psyllium to top up fibre — start low and increase slowly with water."
            href={amazonSearchUrl('psyllium husk powder UK')}
            bullets={['Start with 1 tsp', 'Drink water alongside', 'Avoid taking with meds without guidance']}
          />
          <ProductPick
            title="Sauerkraut / kimchi"
            badge="Fermented"
            description="Optional. Look for simple ingredients and start with small servings."
            href={amazonSearchUrl('sauerkraut kimchi organic UK')}
            bullets={['Small servings first', 'Check ingredients', 'Keep in fridge after opening']}
          />
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          <Link className="btn-primary" href="/best-fermented-foods-sauerkraut-kimchi">Fermented foods shortlist →</Link>
          <Link className="btn-secondary" href="/blog/fibre-gut-health-practical-guide">Read: fibre guide →</Link>
          <Link className="btn-secondary" href="/nutrition">Explore Nutrition →</Link>
        </div>
      </section>

      <TopicFAQ faqs={faqs} />

      <p className="mt-12 text-xs text-zinc-500">
        General information only — not medical advice. Some links are affiliate links. If you buy via them, we earn a commission.
      </p>
    </main>
  )
}
