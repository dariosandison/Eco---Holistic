import Link from 'next/link'
import TopicEducationDeepDive from '@/components/TopicEducationDeepDive'
import TopicAtAGlance from '@/components/TopicAtAGlance'
import TopicFAQ from '@/components/TopicFAQ'
import { getTopicEdu } from '@/lib/topicEdu'
import { buildPageMetadata } from '@/lib/pageMetadata'

export const metadata = buildPageMetadata({
  title: 'Fragrance-Free Topics — Wild & Well',
  description: 'A practical UK route to reducing fragrance in high-contact laundry, cleaning and bathroom products without replacing everything at once.',
  path: '/topics/fragrance-free',
  image: '/images/photography/cleaning.jpg',
})

export default function Page() {
  const edu = getTopicEdu('fragrance-free')
  const faqs = [
    { q: 'Is “unscented” the same as fragrance-free?', a: 'Not necessarily. Check the ingredient information rather than relying on the front label alone.' },
    { q: 'What should I switch first?', a: 'Start with high-use or high-contact products such as laundry detergent, hand/body products and dish products. Replace things gradually rather than throwing everything away.' },
    { q: 'Do essential oils count as fragrance?', a: 'They are aromatic ingredients. If your goal is genuinely fragrance-free products, check for essential oils as well as parfum/fragrance.' },
    { q: 'Why can using too much detergent be unhelpful?', a: 'More detergent is not automatically cleaner. Follow the product dose and washing-machine guidance; excess product can be wasteful and may leave more residue.' },
  ]

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">High-contact swaps first</p>
        <h1 className="mt-2 text-4xl font-bold">Fragrance-Free Cleaning &amp; Laundry</h1>
        <p className="mt-3 text-zinc-700">Reduce fragrance where products are used most often or stay in contact with fabrics and skin. You do not need to replace the whole house in one shopping trip.</p>
        <img src="/images/photography/cleaning.jpg" alt="" className="mt-6 w-full rounded-3xl border border-zinc-200 shadow-sm" loading="lazy" decoding="async" />
        <div className="mt-5 flex flex-wrap gap-2">
          <Link className="btn-primary" href="/healthy-home/low-tox-shortlist">Healthy-home buying guide</Link>
          <Link className="btn-secondary" href="/best-fragrance-free-laundry-detergents-uk">Laundry shortlist</Link>
          <Link className="btn-secondary" href="/blog/non-toxic-cleaning-starter">Cleaning starter</Link>
          <Link className="btn-secondary" href="/healthy-home">Healthy Home hub</Link>
        </div>
        <div className="mt-4 flex flex-wrap gap-2"><a className="chip" href="#understand">Understand</a><a className="chip" href="#start">Start</a><a className="chip" href="#options">Choose</a><a className="chip" href="#faqs">FAQs</a></div>
      </header>

      <TopicEducationDeepDive edu={edu} />
      <div id="start" />
      <TopicAtAGlance items={[
        { title: 'Start here', bullets: ['Use up products that are working for you rather than creating waste.', 'Prioritise laundry and other high-contact products when replacing them.', 'Then work through cleaning and bathroom products as they run out.'] },
        { title: 'Read beyond the front label', bullets: ['Check ingredient information where available.', 'Do not assume “natural” means fragrance-free.', 'Choose products that fit your actual cleaning routine and budget.'] },
        { title: 'Common mistakes', bullets: ['Replacing everything at once.', 'Buying heavily scented “natural” alternatives when fragrance reduction is the goal.', 'Using more product than the manufacturer recommends.'] },
      ]} />

      <section className="mt-14" id="options">
        <div className="max-w-3xl"><h2 className="section-title">Choose the next useful swap</h2><p className="section-subtitle">Our Healthy Home shortlist groups the main routes so visitors can change one high-use area at a time.</p></div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Link href="/best-fragrance-free-laundry-detergents-uk" className="card hover:shadow-sm transition-shadow"><h3 className="font-semibold">Laundry first</h3><p className="mt-2 text-sm text-zinc-600">Compare fragrance-free laundry options for a product used across clothes, towels and bedding.</p><p className="mt-3 text-sm font-semibold">Open laundry shortlist →</p></Link>
          <Link href="/healthy-home/low-tox-shortlist" className="card hover:shadow-sm transition-shadow"><h3 className="font-semibold">Broader healthy-home swaps</h3><p className="mt-2 text-sm text-zinc-600">Move into cleaning, bathroom, cookware and shower-water routes only where they make sense for your household.</p><p className="mt-3 text-sm font-semibold">Open healthy-home shortlist →</p></Link>
        </div>
        <div className="mt-8 rounded-3xl border border-zinc-200 bg-zinc-50/60 p-6"><h3 className="text-xl font-semibold">The aim is not a “perfect” home</h3><p className="mt-2 text-sm text-zinc-700">A small number of deliberate replacements is cheaper, easier to maintain and more credible than turning lower-tox living into an endless shopping list.</p><div className="mt-4"><Link className="btn-primary" href="/healthy-home">Explore Healthy Home</Link></div></div>
      </section>

      <TopicFAQ faqs={faqs} />
      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, we may earn a commission at no extra cost to you.</p>
    </main>
  )
}
