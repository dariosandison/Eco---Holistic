'use client'

import { trackEvent } from '@/lib/analytics'

const INTERESTS = [['wellness','Wellness'],['healthy-home','Healthy home'],['dogs','Dogs'],['outdoors','Outdoors'],['offers','Offers']]

export default function InterestSignup({ placement = 'interest-signup', defaultInterest = 'wellness', title = 'Choose what Wild & Well sends you', description = 'Useful UK guides and carefully selected offers. No constant sales emails.' }) {
  return <section className="rounded-3xl border border-zinc-200 bg-zinc-50/70 p-6 md:p-8"><h2 className="text-xl font-semibold">{title}</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-700">{description}</p><form action="/api/subscribe" method="post" className="mt-5 grid gap-3 sm:grid-cols-[1fr_180px_auto]" onSubmit={(event) => { const interest = event.currentTarget.elements.interest?.value || defaultInterest; trackEvent('newsletter_signup', { placement, interest }) }}><input type="hidden" name="source" value={placement} /><input type="email" name="email" required placeholder="your@email.com" aria-label="Email address" autoComplete="email" inputMode="email" className="rounded-xl border border-zinc-300 bg-white px-3 py-2" /><select name="interest" defaultValue={defaultInterest} aria-label="Main interest" className="rounded-xl border border-zinc-300 bg-white px-3 py-2">{INTERESTS.map(([value,label]) => <option key={value} value={value}>{label}</option>)}</select><button type="submit" className="btn-primary whitespace-nowrap">Join free</button></form><p className="mt-3 text-[11px] text-zinc-500">You can unsubscribe at any time. See our <a href="/privacy" className="underline">privacy policy</a>.</p></section>
}
