import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-neutral-50 border-b">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center">
        <div className="mx-auto w-40 h-40 relative mb-6">
          <Image src="/Logo.png" alt="Wild & Well" fill priority sizes="160px"/>
        </div>
        <h1 className="text-3xl md:text-5xl font-semibold">Live Wild & Well</h1>
        <p className="mt-3 text-neutral-600 max-w-2xl mx-auto">
          Straightforward guides and curated picks for eco-holistic living.
        </p>
      </div>
    </section>
  );
}
