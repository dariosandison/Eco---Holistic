// components/NewsletterInline.jsx
// Works with Mailchimp/ConvertKit/Buttondown/Beehiiv embed actions.
// Set NEXT_PUBLIC_NEWSLETTER_ACTION to your form POST URL.
// For Mailchimp you'll also set NEXT_PUBLIC_NEWSLETTER_HONEYPOT="b_xxxxx_xxxxx".
export default function NewsletterInline({ title="Get the good stuff", subtitle="1–2 emails/month. No spam." }) {
  const action = process.env.NEXT_PUBLIC_NEWSLETTER_ACTION;
  const honeypot = process.env.NEXT_PUBLIC_NEWSLETTER_HONEYPOT || "hp_field";

  if (!action) return null;

  return (
    <section style={{border:"1px solid #e5e7eb", borderRadius:12, padding:16, background:"#fafafa"}}>
      <h3 style={{margin:"0 0 4px"}}>{title}</h3>
      <p style={{margin:"0 0 12px", opacity:.8}}>{subtitle}</p>
      <form action={action} method="post" target="_blank" noValidate>
        <input type="email" name="EMAIL" required placeholder="you@example.com"
          style={{width:"100%", padding:"12px 14px", borderRadius:10, border:"1px solid #ddd", marginBottom:8}} />
        {/* Honeypot */}
        <div style={{position:"absolute", left:-5000}} aria-hidden="true">
          <input type="text" name={honeypot} tabIndex="-1" defaultValue="" />
        </div>
        <button type="submit" style={{padding:"10px 14px", borderRadius:10, border:"1px solid #0ea5e9", background:"#0ea5e9", color:"#fff"}}>
          Subscribe
        </button>
      </form>
    </section>
  );
}
