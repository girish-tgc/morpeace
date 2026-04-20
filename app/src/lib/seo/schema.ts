import { BRAND, REVIEWS_AGGREGATE, SITE_URL, absUrl } from './site'

type JsonLd = Record<string, unknown>

const postalAddress = () => ({
  '@type': 'PostalAddress',
  ...BRAND.address,
})

const geoCoordinates = () => ({
  '@type': 'GeoCoordinates',
  latitude: BRAND.geo.latitude,
  longitude: BRAND.geo.longitude,
})

export const organizationSchema = (): JsonLd => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: BRAND.name,
  legalName: BRAND.legalName,
  url: SITE_URL,
  logo: absUrl('/logo.webp'),
  description: BRAND.description,
  founder: { '@type': 'Person', name: BRAND.founder },
  address: postalAddress(),
  sameAs: BRAND.sameAs,
})

export const lodgingBusinessSchema = (): JsonLd => ({
  '@context': 'https://schema.org',
  '@type': ['LodgingBusiness', 'Resort'],
  '@id': `${SITE_URL}/#lodging`,
  name: `${BRAND.name} — ${BRAND.tagline}`,
  alternateName: 'Rustic Haven by StayVista',
  description: BRAND.description,
  url: SITE_URL,
  telephone: BRAND.phone,
  image: [
    absUrl('/photos/forest-path.webp'),
    absUrl('/logo.webp'),
  ],
  address: postalAddress(),
  geo: geoCoordinates(),
  priceRange: '₹₹₹',
  numberOfRooms: 4,
  petsAllowed: true,
  smokingAllowed: false,
  checkinTime: '14:00',
  checkoutTime: '11:00',
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Private pool', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Lake', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Forest trails', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Organic farm kitchen', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Watchtower / stargazing', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Free parking', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'WiFi', value: true },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: REVIEWS_AGGREGATE.ratingValue,
    reviewCount: REVIEWS_AGGREGATE.reviewCount,
    bestRating: REVIEWS_AGGREGATE.bestRating,
    worstRating: REVIEWS_AGGREGATE.worstRating,
  },
  sameAs: BRAND.sameAs,
  isPartOf: { '@id': `${SITE_URL}/#organization` },
})

export const placeSchema = (): JsonLd => ({
  '@context': 'https://schema.org',
  '@type': ['Place', 'TouristAttraction'],
  '@id': `${SITE_URL}/the-forest#place`,
  name: 'The Morpeace Forest',
  description:
    'A 10-acre regenerated forest near Satara in the Western Ghats — over 18 sentinel trees documented, 40+ mango varieties, a lake, and a decade of rewilding.',
  url: absUrl('/the-forest'),
  address: postalAddress(),
  geo: geoCoordinates(),
  isAccessibleForFree: false,
  touristType: ['Nature lovers', 'Eco-tourists', 'Families', 'Birders'],
})

export const personSchema = (args: {
  name: string
  jobTitle?: string
  description?: string
  image?: string
  sameAs?: string[]
  knowsAbout?: string[]
}): JsonLd => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: args.name,
  ...(args.jobTitle && { jobTitle: args.jobTitle }),
  ...(args.description && { description: args.description }),
  ...(args.image && { image: args.image }),
  ...(args.sameAs && { sameAs: args.sameAs }),
  ...(args.knowsAbout && { knowsAbout: args.knowsAbout }),
})

export const articleSchema = (args: {
  headline: string
  description: string
  url: string
  image: string
  datePublished?: string
  authorName?: string
  about?: string
}): JsonLd => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: args.headline,
  description: args.description,
  mainEntityOfPage: args.url,
  image: args.image,
  ...(args.datePublished && { datePublished: args.datePublished }),
  author: {
    '@type': 'Person',
    name: args.authorName ?? 'Dr. Girish Kulkarni',
    affiliation: { '@type': 'Organization', name: 'The Green Concept' },
  },
  publisher: { '@id': `${SITE_URL}/#organization` },
  ...(args.about && { about: args.about }),
})

export const faqPageSchema = (
  faqs: Array<{ question: string; answer: string }>,
): JsonLd => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
})

export const breadcrumbSchema = (
  items: Array<{ name: string; path: string }>,
): JsonLd => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: absUrl(item.path),
  })),
})

export const imageGallerySchema = (args: {
  name: string
  url: string
  images: Array<{ url: string; caption?: string }>
}): JsonLd => ({
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  name: args.name,
  url: args.url,
  image: args.images.map((img) => ({
    '@type': 'ImageObject',
    contentUrl: img.url,
    ...(img.caption && { caption: img.caption }),
  })),
})

export const menuSchema = (sections: Array<{ name: string; items: string[] }>): JsonLd => ({
  '@context': 'https://schema.org',
  '@type': 'Menu',
  name: 'Morpeace Kitchen — Rustic Haven Menu',
  hasMenuSection: sections.map((s) => ({
    '@type': 'MenuSection',
    name: s.name,
    hasMenuItem: s.items.map((name) => ({ '@type': 'MenuItem', name })),
  })),
})
