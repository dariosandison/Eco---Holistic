import Image from 'next/image'
import Link from 'next/link'

export default function JourneyHero({ number, kicker, title, intro, image, imageAlt, actions = [], anchors = [], note }) {
  return (
    <header className="journey-hero">
      <div className="journey-hero__copy">
        <div className="journey-hero__meta"><span>{number}</span><p className="eyebrow">{kicker}</p></div>
        <h1>{title}</h1>
        <p className="journey-hero__intro">{intro}</p>
        <div className="journey-hero__actions">
          {actions.map((action, index) => <Link key={action.href} className={index === 0 ? 'btn-primary' : 'text-link'} href={action.href}>{action.label}{index ? ' →' : ''}</Link>)}
        </div>
        {note ? <p className="journey-hero__note">{note}</p> : null}
      </div>
      <div className="journey-hero__visual">
        <Image src={image} alt={imageAlt || ''} fill priority sizes="(max-width: 850px) 100vw, 48vw" className="object-cover" />
        {anchors.length ? <nav className="journey-hero__index" aria-label="On this page">{anchors.map((anchor, index) => <a key={anchor.href} href={anchor.href}><span>0{index + 1}</span>{anchor.label}</a>)}</nav> : null}
      </div>
    </header>
  )
}
