<section className="hero" style={{marginTop:16}}>
  <div className="hero-inner">
    <div className="hero-logo">
      <img src="/logo.svg" alt="Wild & Well logo" onError={(e)=>{(e.target as HTMLImageElement).src="/logo.png"}} />
    </div>
  </div>
  <p style={{textAlign:"center", margin:"16px 0 0"}}>
    Actionable guides and clean product picks to help you sleep better, stress less, and move more.
  </p>
  <div style={{display:"flex", justifyContent:"center", gap:12, marginTop:16}}>
    <a className="btn" href="/guides">Explore Guides</a>
    <a className="btn" href="/deals" style={{background:"#6f7f6e"}}>Today’s Deals</a>
  </div>
</section>
