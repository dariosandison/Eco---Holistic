import Image from 'next/image'

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-4">
        <a href="/" className="inline-flex items-center gap-2">
          <Image src="/logo.png" alt="Wild & Well" width={32} height={32} priority />
          <span className="font-semibold">Wild & Well</span>
        </a>
        {/* ...rest of your nav */}
      </div>
    </header>
  )
}
