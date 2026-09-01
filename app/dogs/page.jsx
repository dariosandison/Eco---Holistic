import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import { SITE_URL } from '@/lib/site'

export const metadata = {
  title: 'Dog Health, Wellness & Healthy Home UK',
  description: 'Evidence-led UK guidance for dog food, healthy weight, movement, supplements, pet allergies and a healthier home with dogs — practical and free from hype.',
}

const PATHS = [
  {
    title: 'Food & nutrition',
    text: 'Understand complete food, complementary products, labels, portions and marketing claims before comparing brands.',
    href: '/blog/natural-dog-food-uk-complete-labels',
    label: 'Read the food-label guide',
  },
  {
    title: 'Healthy weight & movement',
    text: 'Use body condition, measured portions and activity suited to the individual dog rather than generic step targets.',
    href: '/blog/healthy-weight-exercise-dogs-uk',
    label: 'Build a sensible routine',
  },
  {
    title: 'Supplements without the hype',
    text: 'Separate a plausible use, product evidence and veterinary need before adding powders, chews or oils.',
    href: '/blog/dog-supplements-uk-evidence-guide',
    label: 'Check supplement claims',
  },
  {
    title: 'Allergies & the healthy home',
    text: 'Reduce exposure to airborne pet allergens with cleaning, bedroom boundaries and correctly chosen filtration.',
    href: '/blog/air-purifier-pet-dander-uk',
    label: 'Improve the home first',
  },
]

const FUTURE_AREAS = [
  'Joint comfort and age-appropriate mobility',
  'Digestion, skin and coat',
  'Hydration, bowls and filtered fountains',
  'Sleep, washable beds and household routines',
  'Lower-tox cleaning around dogs',
  'Durable, sustainable toys and accessories',
]

export default function Page() {
  const collection = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Dog Health, Wellness & Healthy Home UK',
    url: `${SITE_URL}/dogs`,
    description: metadata.description,
    isPartOf: { '@type': 'WebSite', name: 'Wild & Well', url: SITE_URL },
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={collection} />
      <header className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Dogs, people and the home they share</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">Dog health &amp; wellness, without the wellness theatre</h1>
        <p className="mt-4 max-w-3xl text-lg text-zinc-700">
          Practical UK guidance for feeding, movement, everyday wellbeing and healthier homes with dogs. We start with established care, complete nutrition and veterinary guidance — then assess whether a product adds anything useful.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/dog-wellness-shortlist-uk" className="btn-primary">See the current shortlist</Link>
          <Link href="/dog-product-catalogue" className="btn-secondary">Browse current dog-home products</Link>
          <Link href="/dogs/editorial-policy" className="btn-secondary">How we assess dog claims</Link>
        </div>
        <p className="mt-4 text-xs text-zinc-500">Wild &amp; Well provides general information, not veterinary diagnosis or individual treatment. Speak to your vet about symptoms, medication, unexplained weight change or a therapeutic diet.</p>
      </header>

      <section className="mt-12">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold">Start with the job, not the product</h2>
          <p className="mt-2 text-zinc-700">These four routes cover the strongest current reader needs and connect naturally to Wild &amp; Well’s existing expertise.</p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {PATHS.map((path) => (
            <article key={path.title} className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-zinc-900">{path.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-700">{path.text}</p>
              <Link href={path.href} className="mt-5 inline-flex font-semibold text-zinc-900 underline underline-offset-4">{path.label} →</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14 grid gap-6 rounded-3xl border border-emerald-900/10 bg-emerald-50/50 p-6 md:grid-cols-2 md:p-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-emerald-900">What “natural” means here</p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Useful description, never proof by itself</h2>
          <p className="mt-3 text-sm leading-6 text-zinc-700">A natural-looking pack does not establish nutritional completeness, safety or effectiveness. We check the legal food description, life stage, feeding directions, evidence for claims and whether a simpler routine already solves the problem.</p>
        </div>
        <div>
          <h3 className="font-semibold text-zinc-900">Our order of operations</h3>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-zinc-700">
            <li>Rule out symptoms or changes that need a vet.</li>
            <li>Get complete food, portions, activity and routine right.</li>
            <li>Define the specific problem a product is meant to solve.</li>
            <li>Compare evidence, suitability, ownership cost and realistic trade-offs.</li>
          </ol>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">The pillar we are building</h2>
        <p className="mt-2 max-w-3xl text-zinc-700">We are expanding carefully as suitable UK partners and sufficiently strong evidence become available.</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {FUTURE_AREAS.map((area) => <div key={area} className="rounded-2xl border border-zinc-200 bg-zinc-50/60 p-4 text-sm font-medium text-zinc-800">{area}</div>)}
        </div>
      </section>

      <section className="mt-14 rounded-3xl border border-zinc-200 bg-zinc-50/60 p-6">
        <h2 className="text-xl font-semibold">Living with pet allergies?</h2>
        <p className="mt-2 max-w-3xl text-sm text-zinc-700">Pet allergy is usually about proteins carried in dander, saliva or urine, not simply visible hair. Start with exposure reduction and cleaning; treat air filtration as one supporting tool.</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link href="/blog/air-purifier-pet-dander-uk" className="btn-primary">Read the pet-allergy home guide</Link>
          <Link href="/air-quality-shortlist-uk#air-purifiers" className="btn-secondary">Compare current air options</Link>
        </div>
      </section>
    </main>
  )
}
