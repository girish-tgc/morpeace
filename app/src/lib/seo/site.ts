export const SITE_URL = 'https://morpeace.com'

export const BRAND = {
  name: 'Morpeace',
  legalName: 'Morpeace Consulting LLP',
  tagline: 'A Forest That Remembers',
  description:
    'A 10-acre forest sanctuary near Satara, Maharashtra. Ten years of regeneration, 40+ mango varieties, and trees that tell their own stories.',
  founder: 'Rohit Talwalkar',
  email: 'hello@morpeace.com',
  phone: '+91-9999999999',
  address: {
    streetAddress: 'Gat No 267, Shivajinagar, Mugdul Bhatachiwadi',
    addressLocality: 'Satara',
    addressRegion: 'Maharashtra',
    postalCode: '415519',
    addressCountry: 'IN',
  },
  geo: { latitude: 17.6105, longitude: 73.9895 },
  sameAs: [
    'https://www.stayvista.com/homes/maharashtra-rustic-haven-by-stayvista',
  ],
} as const

export const REVIEWS_AGGREGATE = {
  ratingValue: 4.95,
  reviewCount: 98,
  bestRating: 5,
  worstRating: 1,
} as const

export const absUrl = (path = '/') => {
  const p = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${p === '/' ? '' : p}`
}

export const DEFAULT_OG_IMAGE = absUrl('/photos/forest-path.webp')
