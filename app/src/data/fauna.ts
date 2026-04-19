// Companions — fauna observed during the Satara biodiversity survey (Apr 2026).
//
// Data follows the report's photographic plates: Birds, Butterflies, Spiders,
// and Insects & other arthropods. Multiple photos of the same species are
// grouped into a single entry with a `photos[]` array — so the grid reads
// as one tile per taxon rather than repeating the same creature.

export type FaunaCategory =
  | 'birds'
  | 'butterflies'
  | 'spiders'
  | 'insects'

export interface FaunaSpecies {
  id: string
  common: string
  scientific?: string // italic in brackets
  family?: string // e.g. Salticidae
  category: FaunaCategory
  photos: string[] // first is the representative; rest open in lightbox gallery
  note?: string
}

export const fauna: FaunaSpecies[] = [
  // ---------- Birds (3 photographed of 58 confirmed) ----------
  {
    id: 'oriental-turtle-dove',
    common: 'Oriental Turtle Dove',
    scientific: 'Streptopelia orientalis',
    category: 'birds',
    photos: ['media/fauna/oriental-turtle-dove-1.webp', 'media/fauna/oriental-turtle-dove-2.webp'],
  },
  {
    id: 'sunbird-nest',
    common: 'Sunbird nest',
    family: 'Nectariniidae',
    category: 'birds',
    photos: ['media/fauna/sunbird-nest.webp'],
    note: 'A woven cradle in the canopy',
  },

  // ---------- Butterflies (10 photographed of 20 confirmed) ----------
  {
    id: 'common-cerulean',
    common: 'Common Cerulean',
    scientific: 'Jamides celeno',
    family: 'Lycaenidae',
    category: 'butterflies',
    photos: ['media/fauna/common-cerulean.webp'],
  },
  {
    id: 'pea-blue',
    common: 'Pea Blue',
    scientific: 'Lampides boeticus',
    family: 'Lycaenidae',
    category: 'butterflies',
    photos: ['media/fauna/pea-blue.webp'],
  },
  {
    id: 'zebra-blue',
    common: 'Zebra Blue',
    scientific: 'Leptotes plinius',
    family: 'Lycaenidae',
    category: 'butterflies',
    photos: ['media/fauna/zebra-blue.webp'],
  },
  {
    id: 'forget-me-not',
    common: 'Forget-Me-Not',
    scientific: 'Catochrysops strabo',
    family: 'Lycaenidae',
    category: 'butterflies',
    photos: ['media/fauna/forget-me-not.webp'],
  },
  {
    id: 'dark-grass-blue',
    common: 'Dark Grass Blue',
    scientific: 'Zizeeria karsandra',
    family: 'Lycaenidae',
    category: 'butterflies',
    photos: ['media/fauna/dark-grass-blue.webp'],
  },
  {
    id: 'spotless-grass-yellow',
    common: 'Spotless Grass Yellow',
    scientific: 'Eurema laeta',
    family: 'Pieridae',
    category: 'butterflies',
    photos: ['media/fauna/spotless-grass-yelow.webp'],
  },
  {
    id: 'common-five-ring',
    common: 'Common Five-ring',
    scientific: 'Ypthima baldus',
    family: 'Nymphalidae',
    category: 'butterflies',
    photos: ['media/fauna/common-five-ring.webp', 'media/fauna/common-five-ring-dsf.webp'],
    note: 'Both wet-season and dry-season form recorded',
  },
  {
    id: 'common-four-ring',
    common: 'Common Four-ring',
    scientific: 'Ypthima huebneri',
    family: 'Nymphalidae',
    category: 'butterflies',
    photos: ['media/fauna/common-four-ring.webp', 'media/fauna/common-four-ring-1.webp'],
  },

  // ---------- Spiders (8 genera, 5 families) ----------
  {
    id: 'rhene-sp',
    common: 'Jumping spider',
    scientific: 'Rhene sp.',
    family: 'Salticidae',
    category: 'spiders',
    photos: [
      'media/fauna/rhene-sp-2.webp',
      'media/fauna/rhene-sp-4.webp',
      'media/fauna/rhene-sp-6.webp',
      'media/fauna/rhene-sp-8.webp',
      'media/fauna/rhene-sp-19.webp',
      'media/fauna/rhene-sp-21.webp',
    ],
    note: 'Active day-hunter — sight-driven, no web',
  },
  {
    id: 'salticidae-sp',
    common: 'Jumping spider',
    scientific: 'Salticidae',
    family: 'Salticidae',
    category: 'spiders',
    photos: [
      'media/fauna/salticidae.webp',
      'media/fauna/salticidae-sp-4.webp',
      'media/fauna/salticidae-sp-5.webp',
      'media/fauna/salticidae-sp-9.webp',
      'media/fauna/salticidae-sp-10.webp',
      'media/fauna/salticidae-sp-11.webp',
    ],
  },
  {
    id: 'oxyopes-sp',
    common: 'Lynx spider',
    scientific: 'Oxyopes sp.',
    family: 'Oxyopidae',
    category: 'spiders',
    photos: [
      'media/fauna/oxyopes-sp-1-male.webp',
      'media/fauna/oxyopes-sp-2-female.webp',
      'media/fauna/oxyopes-sp-2.webp',
    ],
    note: 'Male and female both recorded',
  },
  {
    id: 'hamadruas-sp',
    common: 'Hamadruas jumping spider',
    scientific: 'Hamadruas sp.',
    family: 'Oxyopidae',
    category: 'spiders',
    photos: ['media/fauna/hamadruas-sp-1.webp', 'media/fauna/hamadruas-sp-2.webp'],
  },
  {
    id: 'pardosa-sp',
    common: 'Wolf spider',
    scientific: 'Pardosa sp.',
    family: 'Lycosidae',
    category: 'spiders',
    photos: ['media/fauna/pardosa-sp-1.webp', 'media/fauna/pardosa-sp-2.webp', 'media/fauna/pardosa-sp-3.webp'],
    note: 'Ground-running hunter',
  },
  {
    id: 'sparassidae',
    common: 'Huntsman spider',
    scientific: 'Olios sp.',
    family: 'Sparassidae',
    category: 'spiders',
    photos: ['media/fauna/sparassidae-1.webp', 'media/fauna/sparassidae-2.webp'],
    note: 'Nocturnal, fast, large',
  },
  {
    id: 'thomisus-predation',
    common: 'Crab spider × honeybee',
    scientific: 'Thomisus sp. + Apis florea',
    family: 'Thomisidae',
    category: 'spiders',
    photos: ['media/fauna/apis-florea-and-thomisus-1.webp'],
    note: 'Ambush predation in mid-act — the moment of encounter',
  },

  // ---------- Insects & other arthropods ----------
  {
    id: 'apis-florea',
    common: 'Dwarf honeybee',
    scientific: 'Apis florea',
    category: 'insects',
    photos: ['media/fauna/apis-florea-3.webp'],
    note: 'Wild pollinator — open-nest coloniser',
  },
  {
    id: 'apis-indica',
    common: 'Indian hive bee',
    scientific: 'Apis cerana indica',
    category: 'insects',
    photos: ['media/fauna/apis-indica.webp'],
  },
  {
    id: 'potter-wasp',
    common: 'Potter wasp',
    scientific: 'Eumeninae',
    category: 'insects',
    photos: ['media/fauna/potterwasp.webp'],
    note: 'Builds pot-shaped mud nests',
  },
  {
    id: 'cicada',
    common: 'Cicada',
    scientific: 'Cicadidae',
    category: 'insects',
    photos: ['media/fauna/cicada.webp'],
  },
  {
    id: 'hoverfly',
    common: 'Hoverfly',
    scientific: 'Syrphidae',
    category: 'insects',
    photos: ['media/fauna/dsc-0490.webp'],
    note: 'Mimics bees — important secondary pollinator',
  },
  {
    id: 'odonate-nymph',
    common: 'Dragonfly nymph',
    scientific: 'Odonata',
    category: 'insects',
    photos: ['media/fauna/odonate-nymph-1.webp', 'media/fauna/odonate-nymph-2.webp'],
    note: 'Aquatic juvenile stage — indicator of healthy water',
  },
  {
    id: 'stick-mantis',
    common: 'Stick Mantis',
    family: 'Empusidae / Hymenopodidae',
    category: 'insects',
    photos: [
      'media/fauna/stick-mantis-1.webp',
      'media/fauna/stick-mantis-2.webp',
      'media/fauna/stick-mantis-3.webp',
      'media/fauna/stick-mantis-4.webp',
      'media/fauna/stick-mantis-5.webp',
      'media/fauna/stick-mantis-6.webp',
    ],
    note: 'Apex insect predator using the property\u2019s shrub layer',
  },
  {
    id: 'gecko',
    common: 'Gecko',
    category: 'insects',
    photos: ['media/animals/gecko.webp'],
    note: 'House companion — resident predator of moths and roaches',
  },
  {
    id: 'tilapia',
    common: 'Tilapia',
    scientific: 'Oreochromis sp.',
    category: 'insects',
    photos: ['media/animals/tilapia.webp'],
    note: 'In the monsoon-fed lake',
  },
]

export const faunaByCategory: Record<FaunaCategory, FaunaSpecies[]> = {
  birds: [],
  butterflies: [],
  spiders: [],
  insects: [],
}

fauna.forEach((f) => faunaByCategory[f.category].push(f))

// Stats — authoritative numbers from the Apr 2026 report.
// `photographed` is how many distinct taxa were photographed and tiled here.
// `confirmed` is the total species count confirmed on-site (incl. acoustic/sight records).
export const faunaStats = {
  photographed: fauna.length,
  totalPhotos: fauna.reduce((sum, f) => sum + f.photos.length, 0),
  birds: { photographed: faunaByCategory.birds.length, confirmed: 58 },
  butterflies: { photographed: faunaByCategory.butterflies.length, confirmed: 20 },
  spiderGenera: 8, // report §3.3 — "Eight genera have been confirmed"
  spiderFamilies: 5,
}
