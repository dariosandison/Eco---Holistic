// components/Hero.js
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      aria-label="Site hero"
      className="mx-auto mt-6 mb-10 max-w-6xl rounded-2xl bg-cream p-6 md:p-8 shadow-[0_6px_0_rgba(0,0,0,0.15)]"
      style={{ background: 'var(--paper, #F5EEDC)' }}
    >
      <div className="relative w-full overflow-hidden rounded-xl border border-[rgba(0,0,0,0.08)]">
        <div
          className="flex items-center justify-center"
          style={{ background: '#10210f' }}
        >
          <Image
            src="/logo-wide.png"
            alt="Wild & Well"
            width={1600}
            height={600}
            priority
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      </div>

      <p className="mx-auto mt-6 max-w-3xl text-center text-lg md:text-xl"
         style={{ color: 'var(--ink, #2c3a2e)' }}>
        <strong>Your guide to holistic health, eco living and natural wellness.</strong>
      </p>

      <div className="mt-5 flex items-center justify-center gap-4">
        <a
          href="/guides"
          className="inline-flex items-center rounded-full px-5 py-3 text-base font-semibold"
          style={{
            background: 'var(--brand-600, #2E6B4E)',
            color: 'white',
            boxShadow: '0 4px 0 rgba(0,0,0,0.15)'
          }}
        >
          Explore Guides
        </a>
        <a
          href="/deals"
          className="inline-flex items-center rounded-full border px-5 py-3 text-base font-semibold"
          style={{
            background: 'var(--paper, #F5EEDC)',
            borderColor: 'rgba(0,0,0,0.15)',
            color: 'var(--ink, #2c3a2e)',
            boxShadow: '0 4px 0 rgba(0,0,0,0.06)'
          }}
        >
          Today&apos;s Deals
        </a>
      </div>

      <p className="mx-auto mt-5 max-w-4xl text-center text-sm opacity-80"
         style={{ color: 'var(--ink, #2c3a2e)' }}>
        Independent • Reader-supported • Evidence-informed picks • No sponsored posts
      </p>
    </section>
  );
}
