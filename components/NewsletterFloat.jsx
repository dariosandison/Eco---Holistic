import { useEffect, useState } from "react";
import site from "../data/site.config.json";

const KEY = "ww_newsletter_hide_until";

export default function NewsletterFloat(){
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    try{
      const until = localStorage.getItem(KEY);
      if (!until || Date.now() > Number(until)) setShow(true);
    }catch(e){}
  }, []);

  if (!show) return null;

  const link = (site.newsletter && site.newsletter.magicLink) || "";
  const handleSubmit = (e) => {
    e.preventDefault();
    const m = String(email || "").trim();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(m)){
      alert("Please enter a valid email.");
      return;
    }
    if (link){
      const url = link.replace("{{email}}", encodeURIComponent(m));
      window.location.href = url;
    }
    // Also hide for 30 days
    try{ localStorage.setItem(KEY, String(Date.now() + 30*24*60*60*1000)); }catch(e){}
    setShow(false);
  };

  const dismiss = () => {
    try{ localStorage.setItem(KEY, String(Date.now() + 7*24*60*60*1000)); }catch(e){}
    setShow(false);
  };

  return (
    <aside className="newsletter-float">
      <h4>Get smarter about wellness</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          aria-label="Email address"
          required
        />
        <button className="btn" type="submit">Subscribe</button>
      </form>
      <span className="dismiss" onClick={dismiss}>No thanks</span>
    </aside>
  );
}
