import { redirect } from 'next/navigation'

// Legacy route kept for backwards compatibility (old links, bookmarks, search results).
// Canonical shortlists live at /picks.

export default function Page({ searchParams }) {
  const sp = new URLSearchParams()
  if (searchParams) {
    for (const [k, v] of Object.entries(searchParams)) {
      if (Array.isArray(v)) {
        v.forEach((val) => sp.append(k, String(val)))
      } else if (v != null) {
        sp.set(k, String(v))
      }
    }
  }
  const qs = sp.toString()
  redirect(qs ? `/picks?${qs}` : '/picks')
}
