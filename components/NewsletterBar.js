import { useState } from "react";

export default function NewsletterBar() {
  const [email, setEmail] = useState("");
  return (
    <section className="mt-12">
      <div className="container rounded-xl border border-cream/20 bg-cream/5 p-4 md:p-6 flex flex-col md:flex-row items-center gap-4">
        <div className="text-cream md:flex-1">
          <div className="font-semibold">Get simple, useful wellness tips</div>
          <div className="text-cream/80 text-sm">No spam. Unsubscribe any time.</div>
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); alert("Thanks!"); setEmail(""); }}
          className="flex w-full md:w-auto gap-2"
        >
          <input
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="flex-1 md:w-72 bg-hunter border border-cream/30 rounded-lg px-3 py-2 text-cream placeholder:text-cream/50"
          />
          <button className="bg-cream text-hunter font-semibold rounded-lg px-4 py-2">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
