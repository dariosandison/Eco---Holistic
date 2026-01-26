export const runtime = 'nodejs'

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function wantsJson(req) {
  const accept = req.headers.get('accept') || ''
  const ct = req.headers.get('content-type') || ''
  return ct.includes('application/json') || accept.includes('application/json')
}

function looksLikeUuid(v) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(v)
}

async function subscribeBeehiiv({ email, source, baseUrl }) {
  const apiKey = process.env.BEEHIV_API_KEY
  const publicationIdRaw = process.env.BEEHIV_PUBLICATION_ID

  if (!apiKey || !publicationIdRaw) {
    throw new Error('beehiiv_not_configured')
  }

  const referringSite =
    process.env.NEXT_PUBLIC_SITE_URL || `${baseUrl.protocol}//${baseUrl.host}`

  const payload = {
    email,
    reactivate_existing: true,
    send_welcome_email: true,
    utm_source: process.env.NEXT_PUBLIC_UTM_SOURCE || 'wild-and-well',
    utm_medium: 'site',
    utm_campaign: source || 'site',
    referring_site: referringSite,
  }

  const tryPublicationIds = []
  // Use exactly what the user configured first
  tryPublicationIds.push(publicationIdRaw)

  // Some accounts show a UUID but API docs often use a `pub_...` prefixed ID.
  // If the configured ID looks like a UUID, we also try `pub_<uuid>` as a fallback.
  if (!publicationIdRaw.startsWith('pub_') && looksLikeUuid(publicationIdRaw)) {
    tryPublicationIds.push(`pub_${publicationIdRaw}`)
  }

  let lastErr = null

  for (const publicationId of tryPublicationIds) {
    try {
      const endpoint = `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`

      const r = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(payload),
      })

      if (r.ok) return

      // Read response for debugging in logs (do not leak to user)
      const txt = await r.text().catch(() => '')
      lastErr = new Error(`beehiiv_failed_${r.status}_${txt?.slice(0, 120) || ''}`)
    } catch (e) {
      lastErr = e
    }
  }

  throw lastErr || new Error('beehiiv_failed')
}

export async function POST(req) {
  const baseUrl = new URL(req.url)

  let email = ''
  let source = ''

  try {
    const ct = req.headers.get('content-type') || ''
    if (ct.includes('application/json')) {
      const body = await req.json()
      email = String(body?.email || '')
      source = String(body?.source || '')
    } else {
      const fd = await req.formData()
      email = String(fd.get('email') || '')
      source = String(fd.get('source') || '')
    }
  } catch (e) {
    // fall through
  }

  email = email.trim().toLowerCase()
  source = (source || 'site').trim()

  if (!email || !isValidEmail(email)) {
    if (wantsJson(req)) {
      return Response.json({ ok: false, error: 'invalid_email' }, { status: 400 })
    }
    const u = new URL('/shopping-list', baseUrl)
    u.searchParams.set('error', 'invalid_email')
    return Response.redirect(u, 303)
  }

  const provider = String(process.env.NEWSLETTER_PROVIDER || '').toLowerCase()
  const formAction = process.env.NEWSLETTER_FORM_ACTION
  const emailField = process.env.NEWSLETTER_EMAIL_FIELD || 'email'
  const webhookUrl = process.env.NEWSLETTER_WEBHOOK_URL

  try {
    // Preferred: Beehiiv API (since you already have BEEHIV_API_KEY + BEEHIV_PUBLICATION_ID in Vercel)
    if ((provider.includes('beehiiv') || provider.includes('beehiv') || (process.env.BEEHIV_API_KEY && process.env.BEEHIV_PUBLICATION_ID))) {
      await subscribeBeehiiv({ email, source, baseUrl })
    } else if (formAction) {
      const params = new URLSearchParams()
      params.set(emailField, email)
      params.set('source', source)

      // Optional extra fields, provided as JSON string
      // e.g. {"tags":"wild-and-well","ref":"footer"}
      if (process.env.NEWSLETTER_EXTRA_FIELDS) {
        try {
          const extra = JSON.parse(process.env.NEWSLETTER_EXTRA_FIELDS)
          Object.entries(extra).forEach(([k, v]) => {
            if (v !== null && v !== undefined) params.set(String(k), String(v))
          })
        } catch (e) {
          // ignore bad JSON
        }
      }

      const r = await fetch(formAction, {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body: params.toString(),
      })

      if (!r.ok) throw new Error(`newsletter_form_action_failed_${r.status}`)
    } else if (webhookUrl) {
      const r = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email, source, site: 'wild-and-well' }),
      })
      if (!r.ok) throw new Error(`newsletter_webhook_failed_${r.status}`)
    } else {
      if (wantsJson(req)) {
        return Response.json({ ok: false, error: 'not_configured' }, { status: 501 })
      }
      const u = new URL('/shopping-list', baseUrl)
      u.searchParams.set('error', 'not_configured')
      return Response.redirect(u, 303)
    }

    if (wantsJson(req)) {
      return Response.json({ ok: true })
    }

    const u = new URL('/shopping-list/thanks', baseUrl)
    u.searchParams.set('source', source)
    return Response.redirect(u, 303)
  } catch (e) {
    // For serverless logs (safe: doesn't include secrets)
    console.error('[subscribe] failed', e)

    const msg = String(e?.message || '')
    let err = 'subscribe_failed'
    if (msg.includes('beehiiv_not_configured')) err = 'not_configured'
    else if (msg.startsWith('beehiiv_failed_401') || msg.startsWith('beehiiv_failed_403')) err = 'beehiiv_auth'
    else if (msg.startsWith('beehiiv_failed_404')) err = 'beehiiv_publication'
    else if (msg.startsWith('beehiiv_failed_429')) err = 'beehiiv_rate_limited'
    else if (msg.startsWith('beehiiv_failed_400')) err = 'beehiiv_bad_request'

    if (wantsJson(req)) {
      return Response.json({ ok: false, error: err }, { status: 500 })
    }
    const u = new URL('/shopping-list', baseUrl)
    u.searchParams.set('error', err)
    return Response.redirect(u, 303)
  }
}
