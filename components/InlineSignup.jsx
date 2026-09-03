"use client";

import Link from "next/link";
import SignupFormTracker from "@/components/SignupFormTracker";

function safeId(v) {
  return String(v || "")
    .toLowerCase()
    .replace(/[^a-z0-9_-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * Inline email capture module.
 * Posts to /api/subscribe and retains the existing subscriber flow.
 */
export default function InlineSignup({
  placement = "inline",
  title = "Make the next decision easier",
  description = "Occasional Wild & Well notes with practical actions, useful comparisons and no-pressure product guidance.",
  cta = "Join Wild & Well",
  showPreview = false,
}) {
  const id = `inline-signup-${safeId(placement) || "module"}`;

  return (
    <section className="mt-10">
      <div className="rounded-3xl border border-zinc-200 bg-zinc-50/60 p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2">
              <span className="chip">Email</span>
              <h2 className="text-lg font-semibold text-zinc-900">{title}</h2>
            </div>
            <p className="mt-2 text-sm text-zinc-700">{description}</p>
          </div>
          {showPreview ? (
            <Link href="/shopping-list" className="text-sm font-semibold text-zinc-900 hover:underline whitespace-nowrap">
              See free guide →
            </Link>
          ) : null}
        </div>

        <SignupFormTracker formId={id} placement={placement} />
        <form
          id={id}
          action="/api/subscribe"
          method="post"
          className="mt-5 flex flex-col gap-2 sm:flex-row"
        >
          <input type="hidden" name="source" value={placement} />
          <input
            type="email"
            name="email"
            required
            placeholder="Email address"
            aria-label="Email address"
            autoComplete="email"
            inputMode="email"
            className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-2"
          />
          <button type="submit" className="btn-primary whitespace-nowrap">
            {cta}
          </button>
        </form>

        <p className="mt-2 text-[11px] text-zinc-600">
          By subscribing you agree to our{" "}
          <Link className="underline" href="/privacy">
            privacy policy
          </Link>
          . Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
