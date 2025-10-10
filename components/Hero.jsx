import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-4 py-16 text-center">
        <Image
          src="/logo.png"          // <- lowercase file you added
          alt="Wild & Well"
          width={120}
          height={120}
          priority
          sizes="120px"
          className="mx-auto mb-6"
        />
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Low-tox living made simple</h1>
        <p className="mt-3 text-neutral-600 max-w-2xl mx-auto">
          Tested picks, honest reviews, and practical guides to save you time and money.
        </p>
        <div className="mt-6">
          <a href="/guides" className="btn-primary">Start with Guides</a>
        </div>
      </div>
    </section>
  )
}
