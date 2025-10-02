export default function InlineNewsletter() {
  return (
    <div className="card" style={{textAlign:'center'}}>
      <h3 style={{marginTop:0}}>Get the 1-page “Low-Toxin Starter List”</h3>
      <p style={{color:'#4b5563', marginTop:6}}>Bite-size tips + new picks. 2–3 emails per month.</p>
      {/* Replace action with your ESP form endpoint when ready */}
      <form action="https://example.com/your-form" method="post" style={{display:'flex', gap:8, justifyContent:'center', marginTop:10}}>
        <input name="email" type="email" required placeholder="you@example.com" style="padding:10px;border:1px solid #e5e7eb;border-radius:10px;min-width:240px;" />
        <button className="btn" type="submit">Subscribe</button>
      </form>
    </div>
  );
}
