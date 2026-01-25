export const runtime = 'nodejs'

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function wantsJson(req) {
  const accept = req.headers.get('accept') || ''
  const ct = req.headers.get('content-type') || ''
  return ct.includes('application/json') || accept.includes('application/json')
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

  const formAction = process.env.NEWSLETTER_FORM_ACTION
  const emailField = process.env.NEWSLETTER_EMAIL_FIELD || 'email'
  const webhookUrl = process.env.NEWSLETTER_WEBHOOK_URL

  try {
    if (formAction) {
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
    if (wantsJson(req)) {
      return Response.json({ ok: false, error: 'subscribe_failed' }, { status: 500 })
    }
    const u = new URL('/shopping-list', baseUrl)
    u.searchParams.set('error', 'subscribe_failed')
    return Response.redirect(u, 303)
  }
}
