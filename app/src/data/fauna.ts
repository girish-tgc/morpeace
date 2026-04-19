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
    photos: ['media/fauna/oriental-turtle-dove-1.jpg', 'media/fauna/oriental-turtle-dove-2.jpg'],
  },
  {
    id: 'sunbird-nest',
    common: 'Sunbird nest',
    family: 'Nectariniidae',
    category: 'birds',
    photos: ['media/fauna/sunbird-nest.jpg'],
    note: 'A woven cradle in the canopy',
  },

  // ---------- Butterflies (10 photographed of 20 confirmed) ----------
  {
    id: 'common-cerulean',
    common: 'Common Cerulean',
    scientific: 'Jamides celeno',
    family: 'Lycaenidae',
    category: 'butterflies',
    photos: ['media/fauna/common-cerulean.jpg'],
  },
  {
    id: 'pea-blue',
    common: 'Pea Blue',
    scientific: 'Lampides boeticus',
    family: 'Lycaenidae',
    category: 'butterflies',
    photos: ['media/fauna/pea-blue.jpg'],
  },
  {
    id: 'zebra-blue',
    common: 'Zebra Blue',
    scientific: 'Leptotes plinius',
    family: 'Lycaenidae',
    category: 'butterflies',
    photos: ['media/fauna/zebra-blue.jpg'],
  },
  {
    id: 'forget-me-not',
    common: 'Forget-Me-Not',
    scientific: 'Catochrysops strabo',
    family: 'Lycaenidae',
    category: 'butterflies',
    photos: ['media/fauna/forget-me-not.jpg'],
  },
  {
    id: 'dark-grass-blue',
    common: 'Dark Grass Blue',
    scientific: 'Zizeeria karsandra',
    family: 'Lycaenidae',
    category: 'butterflies',
    photos: ['media/fauna/dark-grass-blue.jpg'],
  },
  {
    id: 'spotless-grass-yellow',
    common: 'Spotless Grass Yellow',
    scientific: 'Eurema laeta',
    family: 'Pieridae',
    category: 'butterflies',
    photos: ['media/fauna/spotless-grass-yelow.jpg'],
  },
  {
    id: 'common-five-ring',
    common: 'Common Five-ring',
    scientific: 'Ypthima baldus',
    family: 'Nymphalidae',
    category: 'butterflies',
    photos: ['media/fauna/common-five-ring.jpg', 'media/fauna/common-five-ring-dsf.jpg'],
    note: 'Both wet-season and dry-season form recorded',
  },
  {
    id: 'common-four-ring',
    common: 'Common Four-ring',
    scientific: 'Ypthima huebneri',
    family: 'Nymphalidae',
    category: 'butterflies',
    photos: ['media/fauna/common-four-ring.jpg', 'media/fauna/common-four-ring-1.jpg'],
  },

  // ---------- Spiders (8 genera, 5 families) ----------
  {
    id: 'rhene-sp',
    common: 'Jumping spider',
    scientific: 'Rhene sp.',
    family: 'Salticidae',
    category: 'spiders',
    photos: [
      'media/fauna/rhene-sp-2.jpg',
      'media/fauna/rhene-sp-4.jpg',
      'media/fauna/rhene-sp-6.jpg',
      'media/fauna/rhene-sp-8.jpg',
      'media/fauna/rhene-sp-19.jpg',
      'media/fauna/rhene-sp-21.jpg',
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
      'media/fauna/salticidae.jpg',
      'media/fauna/salticidae-sp-4.jpg',
      'media/fauna/salticidae-sp-5.jpg',
      'media/fauna/salticidae-sp-9.jpg',
      'media/fauna/salticidae-sp-10.jpg',
      'media/fauna/salticidae-sp-11.jpg',
    ],
  },
  {
    id: 'oxyopes-sp',
    common: 'Lynx spider',
    scientific: 'Oxyopes sp.',
    family: 'Oxyopidae',
    category: 'spiders',
    photos: [
      'media/fauna/oxyopes-sp-1-male.jpg',
      'media/fauna/oxyopes-sp-2-female.jpg',
      'media/fauna/oxyopes-sp-2.jpg',
    ],
    note: 'Male and female both recorded',
  },
  {
    id: 'hamadruas-sp',
    common: 'Hamadruas jumping spider',
    scientific: 'Hamadruas sp.',
    family: 'Oxyopidae',
    category: 'spiders',
    photos: ['media/fauna/hamadruas-sp-1.jpg', 'media/fauna/hamadruas-sp-2.jpg'],
  },
  {
    id: 'pardosa-sp',
    common: 'Wolf spider',
    scientific: 'Pardosa sp.',
    family: 'Lycosidae',
    category: 'spiders',
    photos: ['media/fauna/pardosa-sp-1.jpg', 'media/fauna/pardosa-sp-2.jpg', 'media/fauna/pardosa-sp-3.jpg'],
    note: 'Ground-running hunter',
  },
  {
    id: 'sparassidae',
    common: 'Huntsman spider',
    scientific: 'Olios sp.',
    family: 'Sparassidae',
    category: 'spiders',
    photos: ['media/fauna/sparassidae-1.jpg', 'media/fauna/sparassidae-2.jpg'],
    note: 'Nocturnal, fast, large',
  },
  {
    id: 'thomisus-predation',
    common: 'Crab spider × honeybee',
    scientific: 'Thomisus sp. + Apis florea',
    family: 'Thomisidae',
    category: 'spiders',
    photos: ['media/fauna/apis-florea-and-thomisus-1.jpg'],
    note: 'Ambush predation in mid-act — the moment of encounter',
  },

  // ---------- Insects & other arthropods ----------
  {
    id: 'apis-florea',
    common: 'Dwarf honeybee',
    scientific: 'Apis florea',
    category: 'insects',
    photos: ['media/fauna/apis-florea-3.jpg'],
    note: 'Wild pollinator — open-nest coloniser',
  },
  {
    id: 'apis-indica',
    common: 'Indian hive bee',
    scientific: 'Apis cerana indica',
    category: 'insects',
    photos: ['media/fauna/apis-indica.jpg'],
  },
  {
    id: 'potter-wasp',
    common: 'Potter wasp',
    scientific: 'Eumeninae',
    category: 'insects',
    photos: ['media/fauna/potterwasp.jpg'],
    note: 'Builds pot-shaped mud nests',
  },
  {
    id: 'cicada',
    common: 'Cicada',
    scientific: 'Cicadidae',
    category: 'insects',
    photos: ['media/fauna/cicada.jpg'],
  },
  {
    id: 'hoverfly',
    common: 'Hoverfly',
    scientific: 'Syrphidae',
    category: 'insects',
    photos: ['media/fauna/dsc-0490.jpg'],
    note: 'Mimics bees — important secondary pollinator',
  },
  {
    id: 'odonate-nymph',
    common: 'Dragonfly nymph',
    scientific: 'Odonata',
    category: 'insects',
    photos: ['media/fauna/odonate-nymph-1.jpg', 'media/fauna/odonate-nymph-2.jpg'],
    note: 'Aquatic juvenile stage — indicator of healthy water',
  },
  {
    id: 'stick-mantis',
    common: 'Stick Mantis',
    family: 'Empusidae / Hymenopodidae',
    category: 'insects',
    photos: [
      'media/fauna/stick-mantis-1.jpg',
      'media/fauna/stick-mantis-2.jpg',
      'media/fauna/stick-mantis-3.jpg',
      'media/fauna/stick-mantis-4.jpg',
      'media/fauna/stick-mantis-5.jpg',
      'media/fauna/stick-mantis-6.jpg',
    ],
    note: 'Apex insect predator using the property\u2019s shrub layer',
  },
  {
    id: 'gecko',
    common: 'Gecko',
    category: 'insects',
    photos: ['media/animals/gecko.jpeg'],
    note: 'House companion — resident predator of moths and roaches',
  },
  {
    id: 'tilapia',
    common: 'Tilapia',
    scientific: 'Oreochromis sp.',
    category: 'insects',
    photos: ['media/animals/tilapia.jpg'],
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
