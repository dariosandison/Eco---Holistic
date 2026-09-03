'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const journeys = [
  ['Water', '/topics/water'], ['Air', '/topics/air-quality'], ['Sleep', '/topics/sleep'],
  ['Nutrition', '/topics/nutrition'], ['Movement', '/topics/movement'],
  ['Healthy home', '/healthy-home'], ['Resilience', '/topics/resilience'],
]

export default function SiteHeader() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const el = document.getElementById('site-header')
    if (!el) return
    const setHeight = () => document.documentElement.style.setProperty('--header-h', `${el.offsetHeight}px`)
    setHeight()
    const observer = new ResizeObserver(setHeight)
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const openSearch = (event) => {
    event.preventDefault()
    try { window.dispatchEvent(new Event('ww_open_palette')) } catch {}
    setOpen(false)
  }

  return (
    <header id="site-header" className="site-header">
      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:bg-white focus:px-4 focus:py-3">Skip to content</a>
      <div className="site-header__bar">
        <Link href="/" className="site-header__brand" aria-label="Wild & Well home"><Image src="/logo.png" alt="" width={34} height={34} priority /><span>Wild <i>&amp;</i> Well</span></Link>
        <nav className="site-header__nav" aria-label="Primary navigation">
          <Link href="/topics">Explore</Link><Link href="/blog">Guides</Link><Link href="/shortlists">Compare</Link><Link href="/about">Why trust us</Link>
        </nav>
        <div className="site-header__tools"><a href="/search" onClick={openSearch} aria-label="Search Wild & Well">Search</a><Link href="/start-here" className="site-header__cta">Start here</Link></div>
        <button type="button" className="site-header__menu" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /></button>
      </div>
      <div className="site-header__journeys" aria-label="Explore by topic">{journeys.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</div>
      <div className={`mobile-drawer ${open ? 'mobile-drawer--open' : ''}`} aria-hidden={!open}>
        <nav aria-label="Mobile navigation">
          <p>Explore Wild &amp; Well</p>{journeys.map(([label, href], i) => <Link href={href} onClick={() => setOpen(false)} key={href}><span>0{i + 1}</span>{label}</Link>)}
          <div className="mobile-drawer__secondary"><Link href="/start-here" onClick={() => setOpen(false)}>Start here</Link><Link href="/blog" onClick={() => setOpen(false)}>Guides</Link><Link href="/shortlists" onClick={() => setOpen(false)}>Compare</Link><Link href="/tools" onClick={() => setOpen(false)}>Free tools</Link><Link href="/about" onClick={() => setOpen(false)}>Why trust us</Link><a href="/search" onClick={openSearch}>Search</a></div>
        </nav>
      </div>
    </header>
  )
}