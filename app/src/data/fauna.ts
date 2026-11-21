// Companions — fauna observed during the Morpeace biodiversity surveys
// (summer round Apr 2026, monsoon round Aug 2026; monsoon report 17 Nov 2026).
//
// Data follows the reports' photographic plates. Multiple photos of the same
// species are grouped into a single entry with a `photos[]` array — so the
// grid reads as one tile per taxon rather than repeating the same creature.

export type FaunaCategory =
  | 'birds'
  | 'butterflies'
  | 'spiders'
  | 'insects'
  | 'amphibians'
  | 'reptiles-mammals'
  | 'fungi'

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
  // ---------- Birds (photographed, of 80 confirmed across summer + monsoon) ----------
  {
    id: 'oriental-turtle-dove',
    common: 'Oriental Turtle Dove',
    scientific: 'Streptopelia orientalis',
    category: 'birds',
    photos: ['media/fauna/oriental-turtle-dove-1.webp', 'media/fauna/oriental-turtle-dove-2.webp'],
  },
  {
    id: 'oriental-magpie-robin',
    common: 'Oriental Magpie-Robin',
    scientific: 'Copsychus saularis',
    family: 'Muscicapidae',
    category: 'birds',
    photos: ['media/animals/bird.webp', 'media/fauna/monsoon/oriental-magpie-robin.webp'],
    note: 'A resident songbird, perched in the palm canopy',
  },
  {
    id: 'cattle-egret',
    common: 'Cattle Egret',
    scientific: 'Bubulcus ibis',
    family: 'Ardeidae',
    category: 'birds',
    photos: ['media/animals/egret.webp'],
    note: 'Flock foraging at the edge of the lake',
  },
  {
    id: 'sunbird-nest',
    common: 'Sunbird nest',
    family: 'Nectariniidae',
    category: 'birds',
    photos: ['media/fauna/sunbird-nest.webp'],
    note: 'A woven cradle in the canopy',
  },
  // Monsoon 2026 photographic plates 1–4
  { id: 'baya-weaver', common: 'Baya Weaver', scientific: 'Ploceus philippinus', family: 'Ploceidae', category: 'birds', photos: ['media/fauna/monsoon/baya-weaver.webp'], note: 'A male at its woven, bottle-shaped nest — proof that Morpeace is a breeding ground.' },
  { id: 'fork-tailed-drongo-cuckoo', common: 'Fork-tailed Drongo-Cuckoo', scientific: 'Surniculus dicruroides', family: 'Cuculidae', category: 'birds', photos: ['media/fauna/monsoon/fork-tailed-drongo-cuckoo.webp'], note: 'A brood parasite of small babblers. Only two research-grade records from Satara district.' },
  { id: 'grey-bellied-cuckoo', common: 'Grey-bellied Cuckoo', scientific: 'Cacomantis passerinus', family: 'Cuculidae', category: 'birds', photos: ['media/fauna/monsoon/grey-bellied-cuckoo.webp'], note: 'A monsoon voice. Lays its eggs in the nests of prinias and tailorbirds.' },
  { id: 'common-hawk-cuckoo', common: 'Common Hawk-Cuckoo', scientific: 'Hierococcyx varius', family: 'Cuculidae', category: 'birds', photos: ['media/fauna/monsoon/common-hawk-cuckoo.webp'], note: 'The "brain-fever bird" of the Indian rains.' },
  { id: 'yellow-footed-green-pigeon', common: 'Yellow-footed Green Pigeon', scientific: 'Treron phoenicopterus', family: 'Columbidae', category: 'birds', photos: ['media/fauna/monsoon/yellow-footed-green-pigeon.webp'], note: 'The Harial — state bird of Maharashtra. Feeds on the figs of Morpeace.' },
  { id: 'indian-grey-hornbill', common: 'Indian Grey Hornbill', scientific: 'Ocyceros birostris', family: 'Bucerotidae', category: 'birds', photos: ['media/fauna/monsoon/indian-grey-hornbill.webp'], note: 'A fruit-eater that plants the future forest. Found only in the Indian subcontinent.' },
  { id: 'indian-peafowl', common: 'Indian Peafowl', scientific: 'Pavo cristatus', family: 'Phasianidae', category: 'birds', photos: ['media/fauna/monsoon/indian-peafowl.webp'], note: "India's national bird. Schedule I, the highest legal protection." },
  { id: 'white-spotted-fantail', common: 'White-spotted Fantail', scientific: 'Rhipidura albogularis', family: 'Rhipiduridae', category: 'birds', photos: ['media/fauna/monsoon/white-spotted-fantail.webp'], note: 'Endemic to India. Six birds fanning their tails through the shrubs.' },
  { id: 'white-browed-bulbul', common: 'White-browed Bulbul', scientific: 'Pycnonotus luteolus', family: 'Pycnonotidae', category: 'birds', photos: ['media/fauna/monsoon/white-browed-bulbul.webp'], note: 'Found only in peninsular India and Sri Lanka.' },
  { id: 'large-grey-babbler', common: 'Large Grey Babbler', scientific: 'Argya malcolmi', family: 'Leiothrichidae', category: 'birds', photos: ['media/fauna/monsoon/large-grey-babbler.webp'], note: 'A noisy flock of ten. Endemic to the Indian subcontinent.' },
  { id: 'barred-buttonquail', common: 'Barred Buttonquail', scientific: 'Turnix suscitator', family: 'Turnicidae', category: 'birds', photos: ['media/fauna/monsoon/barred-buttonquail.webp'], note: 'A ground-nester that needs grass left uncut through the rains.' },
  { id: 'red-wattled-lapwing', common: 'Red-wattled Lapwing', scientific: 'Vanellus indicus', family: 'Charadriidae', category: 'birds', photos: ['media/fauna/monsoon/red-wattled-lapwing.webp'] },
  { id: 'jungle-myna', common: 'Jungle Myna', scientific: 'Acridotheres fuscus', family: 'Sturnidae', category: 'birds', photos: ['media/fauna/monsoon/jungle-myna.webp'] },
  { id: 'indian-white-eye', common: 'Indian White-eye', scientific: 'Zosterops palpebrosus', family: 'Zosteropidae', category: 'birds', photos: ['media/fauna/monsoon/indian-white-eye.webp'] },
  { id: 'white-breasted-waterhen', common: 'White-breasted Waterhen', scientific: 'Amaurornis phoenicurus', family: 'Rallidae', category: 'birds', photos: ['media/fauna/monsoon/white-breasted-waterhen.webp'], note: 'One of ten water birds that depend on the lake, pond and stream.' },
  { id: 'white-throated-kingfisher', common: 'White-throated Kingfisher', scientific: 'Halcyon smyrnensis', family: 'Alcedinidae', category: 'birds', photos: ['media/fauna/monsoon/white-throated-kingfisher.webp'] },
  { id: 'common-tailorbird', common: 'Common Tailorbird', scientific: 'Orthotomus sutorius', family: 'Cisticolidae', category: 'birds', photos: ['media/fauna/monsoon/common-tailorbird.webp'], note: 'New to the Morpeace list this monsoon.' },
  { id: 'short-toed-snake-eagle', common: 'Short-toed Snake Eagle', scientific: 'Circaetus gallicus', family: 'Accipitridae', category: 'birds', photos: ['media/fauna/monsoon/short-toed-snake-eagle.webp'], note: 'A summer record. Raptors range widely and come and go with the seasons.' },
  { id: 'spot-billed-duck', common: 'Indian Spot-billed Duck', scientific: 'Anas poecilorhyncha', family: 'Anatidae', category: 'birds', photos: ['media/fauna/monsoon/spot-billed-duck-1.webp', 'media/fauna/monsoon/spot-billed-duck-2.webp'], note: 'Arrived when the monsoon lake filled. New to the Morpeace list.' },

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
    photos: ['media/fauna/rhene-sp-2.webp'],
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
    photos: ['media/fauna/apis-florea-3.webp', 'media/animals/bee.webp'],
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

  // ---------- Amphibians (monsoon 2026: 7 genera, first records) ----------
  { id: 'indian-bullfrog', common: 'Bullfrog', scientific: 'Hoplobatrachus sp.', family: 'Dicroglossidae', category: 'amphibians', photos: ['media/fauna/monsoon/indian-bullfrog.webp'], note: 'Large predator of the pond edges. The Indian Bullfrog is legally protected.' },
  { id: 'minervarya-sp', common: 'Cricket frog', scientific: 'Minervarya sp.', family: 'Dicroglossidae', category: 'amphibians', photos: ['media/fauna/monsoon/frog-minervarya.webp'], note: 'Lives in wet grass and field edges.' },
  { id: 'microhyla-sp', common: 'Narrow-mouthed frog', scientific: 'Microhyla sp.', family: 'Microhylidae', category: 'amphibians', photos: ['media/fauna/monsoon/frog-microhyla.webp'], note: 'Tiny. Breeds in temporary rain puddles.' },
  { id: 'sphaerotheca-sp', common: 'Burrowing frog', scientific: 'Sphaerotheca sp.', family: 'Dicroglossidae', category: 'amphibians', photos: ['media/fauna/monsoon/frog-sphaerotheca.webp'], note: 'Spends the dry season buried in soil. Needs undisturbed ground.' },

  // ---------- Reptiles & mammals (monsoon 2026: first records) ----------
  { id: 'golden-jackal', common: 'Golden Jackal', scientific: 'Canis aureus', family: 'Canidae', category: 'reptiles-mammals', photos: ['media/fauna/monsoon/golden-jackal.webp'], note: 'The first mammal on the Morpeace list. Schedule I protected. Shows the land is connected to the wider landscape.' },
  { id: 'garden-lizard', common: 'Oriental Garden Lizard', scientific: 'Calotes versicolor', family: 'Agamidae', category: 'reptiles-mammals', photos: ['media/fauna/monsoon/garden-lizard.webp'], note: 'The first reptile on the Morpeace list.' },

  // ---------- Fungi (monsoon 2026, Plate 5) ----------
  { id: 'fungus-jelly', common: 'Orange jelly fungus', category: 'fungi', photos: ['media/fauna/monsoon/fungus-1.webp'], note: 'Tiny orange antlers on a fallen log.' },
  { id: 'fungus-birds-nest', common: "Bird's-nest fungus", category: 'fungi', photos: ['media/fauna/monsoon/fungus-2.webp'], note: 'Each "egg" holds spores, splashed out by raindrops.' },
  { id: 'fungus-purple-cup', common: 'Purple cup fungus', category: 'fungi', photos: ['media/fauna/monsoon/fungus-3.webp'] },
  { id: 'fungus-polypore', common: 'Honeycomb polypore', category: 'fungi', photos: ['media/fauna/monsoon/fungus-4.webp'], note: 'A bracket fungus that recycles dead wood into soil.' },
  { id: 'fungus-coral', common: 'White coral fungi', category: 'fungi', photos: ['media/fauna/monsoon/fungus-5.webp'] },
  { id: 'fungus-mushroom', common: 'Leaf-litter mushroom', category: 'fungi', photos: ['media/fauna/monsoon/fungus-6.webp', 'media/fauna/monsoon/fungus-7.webp'] },
]

export const faunaByCategory: Record<FaunaCategory, FaunaSpecies[]> = {
  birds: [],
  butterflies: [],
  spiders: [],
  insects: [],
  amphibians: [],
  'reptiles-mammals': [],
  fungi: [],
}

fauna.forEach((f) => faunaByCategory[f.category].push(f))

// Stats — authoritative Year-0 totals (summer + monsoon) from the Monsoon
// Biodiversity Report, 17 Nov 2026, Table 10.
// `photographed` is how many distinct taxa were photographed and tiled here.
// `confirmed` is the total species count confirmed on-site (incl. acoustic/sight records).
export const faunaStats = {
  photographed: fauna.length,
  totalPhotos: fauna.reduce((sum, f) => sum + f.photos.length, 0),
  birds: { photographed: faunaByCategory.birds.length, confirmed: 80 },
  butterflies: { photographed: faunaByCategory.butterflies.length, confirmed: 34 },
  spiderGenera: 22,
  amphibianGenera: 7,
}
