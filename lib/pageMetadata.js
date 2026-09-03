import { SITE_NAME, SITE_URL } from '@/lib/site'

function absoluteImage(image) {
  if (!image) return `${SITE_URL}/opengraph-image`
  if (/^https?:\/\//i.test(image)) return image
  return `${SITE_URL}${image.startsWith('/') ? image : `/${image}`}`
}

export function buildPageMetadata({ title, description, path = '/', image, type = 'website' }) {
  const canonical = `${SITE_URL}${path === '/' ? '' : path}`
  const socialImage = absoluteImage(image)

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      type,
      images: [{ url: socialImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [socialImage],
    },
  }
}
