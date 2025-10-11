import Image from 'next/image'

export default function SiteHeader() {
  return (
   <header className="sticky top-0 z-50 border-b border-zinc-200/60 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/70">
  {/* ... */}
</header>

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
