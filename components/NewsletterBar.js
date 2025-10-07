import { useEffect, useState } from "react";

/**
 * Visible, dismissible newsletter bar.
 * To enable submissions, set NEXT_PUBLIC_NEWSLETTER_ENDPOINT to your provider POST URL.
 */
export default function NewsletterBar(){
  const endpoint = process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT || "";
  const [email, setEmail] = useState("");
  const [ok, setOk] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const v = localStorage.getItem("ww-newsletter-hidden");
    if (v === "1") setHidden(true);
  }, []);

  if (hidden) return null;

  async function onSubmit(e){
    e.preventDefault();
    if(!endpoint){
      alert("Add NEXT_PUBLIC_NEWSLETTER_ENDPOINT to enable newsletter submissions.");
      return;
    }
    const res = await fetch(endpoint, {
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify({ email })
    }).catch(()=>({ok:false}));
    setOk(!!res?.ok);
  }

  function dismiss(){
    setHidden(true);
    localStorage.setItem("ww-newsletter-hidden","1");
  }

  return (
    <div id="newsletter-bar" style={{
      position:"sticky", bottom:0, zIndex:50,
      borderTop:"1px solid rgba(255,255,255,0.12)",
      background:"rgba(11,13,15,0.98)", color:"#F2EDE3"
    }}>
      <div className="container" style={{display:"flex",gap:10,alignItems:"center",justifyContent:"space-between",padding:"0.75rem 1rem", flexWrap:"wrap"}}>
        <div style={{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"}}>
          <strong>Get one great tip each week</strong>
          <span style={{color:"#C9C4B8"}}>No spam. Unsubscribe anytime.</span>
        </div>
        <form onSubmit={onSubmit} style={{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"}}>
          <input
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            style={{
              appearance:"none",
              border:"1px solid rgba(255,255,255,0.12)",
              background:"rgba(255,255,255,0.03)",
              color:"#F2EDE3",
              padding:".45rem .65rem",
              borderRadius:10,
              minWidth:220
            }}
          />
          <button type="submit" style={{
            display:"inline-flex",alignItems:"center",justifyContent:"center",
            border:"1px solid rgba(255,255,255,0.12)", background:"rgba(255,255,255,0.06)",
            color:"#F2EDE3", padding:".45rem .75rem", borderRadius:10, cursor:"pointer"
          }}>
            Subscribe
          </button>
          <button type="button" onClick={dismiss} aria-label="Dismiss" style={{
            display:"inline-flex",alignItems:"center",justifyContent:"center",
            border:"1px solid transparent", background:"transparent",
            color:"#C9C4B8", padding:".45rem", borderRadius:10, cursor:"pointer"
          }}>
            ✕
          </button>
        </form>
      </div>
      {ok && (
        <div className="container" style={{padding:"0 1rem 0.75rem"}}>
          <p style={{color:"#9FE7C1", margin:0}}>Thanks! Please check your inbox to confirm.</p>
        </div>
      )}
    </div>
  );
}
