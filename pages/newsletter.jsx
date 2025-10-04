import { useState } from "react";

/**
 * Simple modal + form.
 * Wire it by setting NEXT_PUBLIC_NEWSLETTER_ENDPOINT to your provider POST URL
 * (e.g., Buttondown or Mailchimp). Works visually out of the box.
 */
export default function NewsletterModal(){
  const endpoint = process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT || "";
  const [email, setEmail] = useState("");
  const [ok, setOk] = useState(false);

  async function onSubmit(e){
    e.preventDefault();
    if(!endpoint){
      alert("Add NEXT_PUBLIC_NEWSLETTER_ENDPOINT to enable submissions.");
      return;
    }
    const res = await fetch(endpoint, {
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify({ email })
    }).catch(()=>({ok:false}));
    setOk(!!res?.ok);
  }

  return (
    <dialog id="newsletter" style={{border:"1px solid rgba(255,255,255,0.15)", borderRadius:12, background:"rgba(11,13,15,.98)", color:"#F2EDE3", padding:0}}>
      <form method="dialog" style={{display:"flex",justifyContent:"flex-end"}}>
        <button className="btn" style={{margin:10}}>✕</button>
      </form>
      <div style={{padding:"0 1rem 1.25rem"}}>
        <h3 style={{marginTop:0}}>Get one great tip each week</h3>
        <p className="muted" style={{marginTop:6}}>No spam. Unsubscribe any time.</p>
        <form onSubmit={onSubmit} style={{display:"flex",gap:8,marginTop:12}}>
          <input
            type="email"
            required
            placeholder="hello@wild-and-well.store"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="search-input"
            style={{minWidth:240}}
          />
          <button className="btn" type="submit">Subscribe</button>
        </form>
        {ok && <p style={{color:"#9FE7C1", marginTop:10}}>Thanks! Please check your inbox to confirm.</p>}
      </div>
    </dialog>
  );
}
