export default function SiteHeader() {
  const nav = [
    { href: '/guides', label: 'Guides' },
    { href: '/blog', label: 'Blog' },
    { href: '/deals', label: 'Deals' },
  ]
  return (
    <header className="border-b bg-white">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <a href="/" className="font-bold tracking-tight text-lg text-[var(--brand)]">Wild & Well</a>
        <nav className="flex gap-5 text-sm">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="hover:underline">
              {n.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
