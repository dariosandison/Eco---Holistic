// lib/site.js

type Site = {
  name: string
  description: string
  siteUrl: string   // absolute, no trailing slash
  // add whatever else you use (logo, twitter, etc.)
}

export const site: Site = {
  name: 'Wild & Well',                // <- your site name
  description: '...',                 // <- your description
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com',
}

export default site
