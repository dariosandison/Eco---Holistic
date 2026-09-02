import Link from 'next/link'
import TopicEducationDeepDive from '@/components/TopicEducationDeepDive'
import TopicAtAGlance from '@/components/TopicAtAGlance'
import TopicFAQ from '@/components/TopicFAQ'
import { getTopicEdu } from '@/lib/topicEdu'
import JourneyHero from '@/components/JourneyHero'

export const metadata = {
  title: 'Movement Topics — Wild & Well',
  description: 'Movement basics: walking, strength, mobility and foot function first, with focused buying routes for equipment that genuinely supports the habit.',
}

export default function Page() {
  const edu = getTopicEdu('movement')
  const faqs = [
    { q: 'What matters more: steps or workouts?', a: ['Both can help, but daily walking is often the easiest base layer to build first.', 'Once that habit is stable, simple strength sessions can add another useful layer.'] },
    { q: 'How much strength training do I need?', a: 'A simple routine covering major movement patterns a couple of times per week can be a practical starting point. Consistency matters more than complexity.' },
    { q: 'Do I need equipment?', a: 'No. Bodyweight and simple resistance can go a long way. Equipment should reduce friction or expand what you can do — not become the plan itself.' },
    { q: 'How do I avoid doing too much too soon?', a: 'Increase walking, training volume and load gradually. Keep the routine repeatable and avoid adding several demanding changes at once.' },
  ]

  return (
    <main className="journey-page">
      <JourneyHero number="05" kicker="Build the habit first" title="Movement that belongs in everyday life." intro="Walk often. Add simple strength and mobility. Let equipment earn its place by making a useful routine easier to repeat—not by becoming the routine." image="/images/photography/movement.jpg" imageAlt="A person walking outdoors in natural surroundings" actions={[{label:'Start moving',href:'/movement'},{label:'Build home strength',href:'/blog/home-strength-basics-busy-people'},{label:'Choose a useful route',href:'/movement/movement-shortlist'}]} anchors={[{label:'Understand',href:'#understand'},{label:'Build the base',href:'#start'},{label:'Choose',href:'#options'},{label:'FAQs',href:'#faqs'}]} />

      <TopicEducationDeepDive edu={edu} />
      <div id="start" />
      <TopicAtAGlance items={[
        { title: 'Base layer', bullets: ['Walk regularly and make the habit easy to repeat.', 'Use steps as awareness rather than a score to obsess over.', 'Add brisk segments, hills or longer walks gradually.'] },
        { title: 'Add strength', bullets: ['Use simple push, pull, squat/lunge, hinge and carry/core patterns.', 'Bodyweight or basic resistance is enough to start.', 'Add load when the existing routine feels controlled and repeatable.'] },
        { title: 'Common mistakes', bullets: ['Buying equipment before establishing the habit.', 'Starting with too much volume or intensity.', 'Treating trackers and gear as substitutes for actually moving.'] },
      ]} />

      <section className="mt-14" id="options">
        <div className="max-w-3xl"><h2 className="section-title">Choose by what will help you move more</h2><p className="section-subtitle">The movement shortlist groups buying options around the job they perform, not around collecting fitness gear.</p></div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Link href="/movement/movement-shortlist#foot-strength" className="card hover:shadow-sm transition-shadow"><h3 className="font-semibold">Foot strength & everyday movement</h3><p className="mt-2 text-sm text-zinc-600">Footwear and simple tools for people deliberately working on foot function and walking.</p><p className="mt-3 text-sm font-semibold">Explore foot-strength options →</p></Link>
          <Link href="/movement/movement-shortlist#home-strength" className="card hover:shadow-sm transition-shadow"><h3 className="font-semibold">Home strength</h3><p className="mt-2 text-sm text-zinc-600">Basic resistance and equipment when it genuinely makes home training easier to repeat.</p><p className="mt-3 text-sm font-semibold">Explore strength options →</p></Link>
          <Link href="/movement/movement-shortlist#tracking" className="card hover:shadow-sm transition-shadow"><h3 className="font-semibold">Tracking & awareness</h3><p className="mt-2 text-sm text-zinc-600">Trackers can help with trends and consistency, provided the numbers remain a tool rather than the goal.</p><p className="mt-3 text-sm font-semibold">Explore tracking options →</p></Link>
        </div>
        <div className="mt-8 rounded-3xl border border-zinc-200 bg-zinc-50/60 p-6"><h3 className="text-xl font-semibold">Not sure you need to buy anything?</h3><p className="mt-2 text-sm text-zinc-700">Start with walking and a simple bodyweight routine. Come back to the shortlist when you can name the specific limitation that equipment would solve.</p><div className="mt-4 flex flex-wrap gap-2"><Link className="btn-primary" href="/blog/home-strength-basics-busy-people">Start strength without a shopping list</Link><Link className="btn-secondary" href="/topics/foot-strength">Foot strength topic</Link></div></div>
      </section>

      <TopicFAQ faqs={faqs} />
      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, we may earn a commission at no extra cost to you.</p>
    </main>
  )
}
