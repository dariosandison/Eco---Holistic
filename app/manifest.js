export default function manifest() {
  return {
    name: 'Wild & Well',
    short_name: 'Wild & Well',
    description:
      'Low‑tox living and natural wellness, in plain English. UK‑focused guides and shortlists for air, water, fragrance‑free living, sleep, nutrition, and movement.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1f6a58',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
