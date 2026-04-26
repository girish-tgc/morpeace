// The Wider Canopy — 62 tree species on the Morpeace property.
//
// Data source: Biodiversity Survey Report, April 2026 (docs/output/biodiversity-survey-2026-04.html)
// — the official Year-0 baseline, compiled by Green Concept Ecoscapes Pvt. Ltd.
// from 447 hand-tagged, GPS-located trees surveyed 16-18 April 2026.
//
// Classification (native / introduced) follows the report's rule-based framework.
// Sentinel species with stories carry `sentinelTreeTag` — clicking the tile
// opens /the-forest/:treeTag for the full chapter-based poem.

export type SpeciesCategory =
  | 'sacred'
  | 'fruiting'
  | 'native-forest'
  | 'flowering'
  | 'timber'
  | 'palm'
  | 'medicinal'
  | 'ornamental'

export type Origin = 'native' | 'exotic' | 'unclassified'

export interface Species {
  id: string
  common: string
  scientific: string
  marathi?: string
  count: number
  totalCo2eKg: number
  origin: Origin
  categories: SpeciesCategory[]
  sentinelTreeTag?: string
  iucn?: 'VU' | 'EN' | 'CR' // IUCN Red List status where applicable
  note?: string
}

export const species: Species[] = [
  // ---------- Top 15 by count (from report §2.1) ----------
  { id: 'santalum-album', common: 'Sandalwood', scientific: 'Santalum album', count: 64, totalCo2eKg: 1088, origin: 'native', categories: ['sacred', 'timber'], iucn: 'VU', note: 'IUCN Vulnerable. The largest named population on site — a conservation asset.' },
  { id: 'cocos-nucifera', common: 'Coconut Palm', scientific: 'Cocos nucifera', marathi: 'नारळ', count: 60, totalCo2eKg: 15312, origin: 'native', categories: ['palm', 'fruiting'] },
  { id: 'mangifera-indica', common: 'Mango', scientific: 'Mangifera indica', marathi: 'आंबा', count: 51, totalCo2eKg: 10702, origin: 'native', categories: ['fruiting'], note: '40 varieties in the working orchard' },
  { id: 'morus-indica', common: 'Indian Mulberry', scientific: 'Morus indica', marathi: 'तुती', count: 32, totalCo2eKg: 1182, origin: 'native', categories: ['fruiting', 'native-forest'] },
  { id: 'tectona-grandis', common: 'Teak', scientific: 'Tectona grandis', marathi: 'साग', count: 18, totalCo2eKg: 998, origin: 'native', categories: ['timber', 'native-forest'] },
  { id: 'moringa-oleifera', common: 'Drumstick', scientific: 'Moringa oleifera', marathi: 'शेवगा', count: 17, totalCo2eKg: 2824, origin: 'native', categories: ['medicinal', 'fruiting'] },
  { id: 'syzygium-cumini', common: 'Jamun', scientific: 'Syzygium cumini', marathi: 'जांभूळ', count: 16, totalCo2eKg: 598, origin: 'native', categories: ['fruiting', 'native-forest'], sentinelTreeTag: 'eg1261' },
  { id: 'terminalia-mantaly', common: 'Madagascar Almond', scientific: 'Terminalia mantaly', count: 15, totalCo2eKg: 24, origin: 'exotic', categories: ['ornamental'] },
  { id: 'tamarindus-indica', common: 'Tamarind', scientific: 'Tamarindus indica', marathi: 'चिंच', count: 13, totalCo2eKg: 499, origin: 'native', categories: ['native-forest', 'fruiting'], sentinelTreeTag: 'eg0140', note: 'The tree that began Morpeace' },
  { id: 'citrus-limon', common: 'Lemon', scientific: 'Citrus limon', marathi: 'लिंबू', count: 13, totalCo2eKg: 28, origin: 'native', categories: ['fruiting'] },
  { id: 'melia-azedarach', common: 'Chinaberry', scientific: 'Melia azedarach', count: 10, totalCo2eKg: 282, origin: 'native', categories: ['medicinal'], note: 'Long-naturalised, treated as native' },
  { id: 'psidium-guajava', common: 'Guava', scientific: 'Psidium guajava', marathi: 'पेरू', count: 9, totalCo2eKg: 89, origin: 'native', categories: ['fruiting'] },
  { id: 'azadirachta-indica', common: 'Neem', scientific: 'Azadirachta indica', marathi: 'कडूनिंब', count: 9, totalCo2eKg: 1300, origin: 'native', categories: ['medicinal', 'native-forest'] },
  { id: 'artocarpus-heterophyllus', common: 'Jackfruit', scientific: 'Artocarpus heterophyllus', marathi: 'फणस', count: 9, totalCo2eKg: 655, origin: 'native', categories: ['fruiting'] },
  { id: 'spathodea-campanulata', common: 'African Tulip', scientific: 'Spathodea campanulata', count: 7, totalCo2eKg: 1297, origin: 'exotic', categories: ['flowering', 'ornamental'] },

  // ---------- Keystone + sacred figs ----------
  { id: 'ficus-racemosa', common: 'Audumbar (Wild Fig)', scientific: 'Ficus racemosa', marathi: 'उंबर / औदुंबर', count: 7, totalCo2eKg: 1866, origin: 'native', categories: ['sacred', 'native-forest', 'fruiting'], sentinelTreeTag: 'eg1602', note: 'The Quiet Monarch — 230 cm girth, 35 m tall. Keystone fig.' },
  { id: 'ficus-benghalensis', common: 'Banyan', scientific: 'Ficus benghalensis', marathi: 'वड', count: 4, totalCo2eKg: 182, origin: 'native', categories: ['sacred', 'native-forest'], sentinelTreeTag: 'eg1250', note: 'Keystone fig. Sheltering hundreds of species.' },
  { id: 'muntingia-calabura', common: 'Singapore Cherry', scientific: 'Muntingia calabura', marathi: 'सिंगापूर चेरी', count: 6, totalCo2eKg: 502, origin: 'exotic', categories: ['fruiting'], sentinelTreeTag: 'eg1257', note: 'Planted by birds' },
  { id: 'other', common: 'Other (unidentified)', scientific: 'Various', count: 6, totalCo2eKg: 106, origin: 'unclassified', categories: ['native-forest'], note: 'Awaiting taxonomic verification' },
  { id: 'peltophorum-pterocarpum', common: 'Copper Pod', scientific: 'Peltophorum pterocarpum', count: 5, totalCo2eKg: 247, origin: 'exotic', categories: ['flowering', 'ornamental'] },
  { id: 'broussonetia-monoica', common: 'Small Paper Mulberry', scientific: 'Broussonetia monoica', count: 5, totalCo2eKg: 166, origin: 'exotic', categories: ['ornamental'] },

  // ---------- Less common ----------
  { id: 'plumeria-alba', common: 'White Frangipani', scientific: 'Plumeria alba', marathi: 'पांढरा चाफा', count: 4, totalCo2eKg: 16, origin: 'unclassified', categories: ['flowering', 'sacred'] },
  { id: 'lagerstroemia-speciosa', common: 'Pride of India', scientific: 'Lagerstroemia speciosa', marathi: 'ताम्हण', count: 4, totalCo2eKg: 82, origin: 'native', categories: ['flowering', 'native-forest'] },
  { id: 'plumeria-rubra', common: 'Pink Frangipani', scientific: 'Plumeria rubra', marathi: 'चाफा', count: 4, totalCo2eKg: 45, origin: 'exotic', categories: ['flowering', 'sacred'] },
  { id: 'tecoma-stans', common: 'Yellow Bells', scientific: 'Tecoma stans', count: 4, totalCo2eKg: 113, origin: 'exotic', categories: ['flowering', 'ornamental'] },
  { id: 'areca-catechu', common: 'Betel Palm', scientific: 'Areca catechu', marathi: 'सुपारी', count: 4, totalCo2eKg: 36, origin: 'native', categories: ['palm'] },
  { id: 'magnolia-champaca', common: 'Champak', scientific: 'Magnolia champaca', marathi: 'सोनचाफा', count: 3, totalCo2eKg: 292, origin: 'unclassified', categories: ['flowering', 'sacred'] },
  { id: 'ficus-benjamina', common: 'Weeping Fig', scientific: 'Ficus benjamina', count: 3, totalCo2eKg: 45, origin: 'unclassified', categories: ['ornamental'] },
  { id: 'pimenta-dioica', common: 'Allspice', scientific: 'Pimenta dioica', count: 3, totalCo2eKg: 227, origin: 'exotic', categories: ['medicinal', 'fruiting'] },

  // ---------- Doubletons ----------
  { id: 'thespesia-populnea', common: 'Indian Tulip', scientific: 'Thespesia populnea', marathi: 'पारस पिंपळ', count: 2, totalCo2eKg: 30, origin: 'unclassified', categories: ['flowering', 'native-forest'] },
  { id: 'carissa-carandas', common: 'Karanda', scientific: 'Carissa carandas', marathi: 'करवंद', count: 2, totalCo2eKg: 14, origin: 'native', categories: ['fruiting', 'native-forest'] },
  { id: 'jatropha-gossypiifolia', common: 'Bellyache Bush', scientific: 'Jatropha gossypiifolia', count: 2, totalCo2eKg: 3, origin: 'exotic', categories: ['medicinal'] },
  { id: 'bombax-ceiba', common: 'Red Silk Cotton', scientific: 'Bombax ceiba', marathi: 'काटेसावर', count: 2, totalCo2eKg: 132, origin: 'native', categories: ['flowering', 'native-forest'] },
  { id: 'broussonetia-papyrifera', common: 'Paper Mulberry', scientific: 'Broussonetia papyrifera', count: 2, totalCo2eKg: 29, origin: 'exotic', categories: ['ornamental'] },
  { id: 'delonix-regia', common: 'Gulmohar', scientific: 'Delonix regia', marathi: 'गुलमोहर', count: 2, totalCo2eKg: 394, origin: 'exotic', categories: ['flowering'] },
  { id: 'elaeocarpus-angustifolius', common: 'Blue Marble Tree', scientific: 'Elaeocarpus angustifolius', count: 2, totalCo2eKg: 2, origin: 'unclassified', categories: ['native-forest', 'fruiting'] },
  { id: 'annona-reticulata', common: "Bullock's Heart", scientific: 'Annona reticulata', marathi: 'रामफळ', count: 2, totalCo2eKg: 47, origin: 'native', categories: ['fruiting'] },
  { id: 'ficus-elastica', common: 'Rubber Tree', scientific: 'Ficus elastica', count: 2, totalCo2eKg: 0, origin: 'unclassified', categories: ['ornamental'] },
  { id: 'amla', common: 'Amla', scientific: 'Phyllanthus emblica', marathi: 'आवळा', count: 2, totalCo2eKg: 109, origin: 'native', categories: ['medicinal', 'fruiting', 'sacred'], note: 'Recorded under both Phyllanthus emblica and synonym Emblica officinalis' },

  // ---------- Singletons ----------
  { id: 'manilkara-zapota', common: 'Chikoo', scientific: 'Manilkara zapota', marathi: 'चिकू', count: 1, totalCo2eKg: 28, origin: 'native', categories: ['fruiting'] },
  { id: 'annona-squamosa', common: 'Sitaphal', scientific: 'Annona squamosa', marathi: 'सीताफळ', count: 1, totalCo2eKg: 11, origin: 'native', categories: ['fruiting'] },
  { id: 'ceiba-pentandra', common: 'Kapok', scientific: 'Ceiba pentandra', marathi: 'हिरवी शेवरी', count: 1, totalCo2eKg: 17, origin: 'unclassified', categories: ['native-forest', 'timber'] },
  { id: 'sesbania-grandiflora', common: 'Agati', scientific: 'Sesbania grandiflora', marathi: 'अगस्ती', count: 1, totalCo2eKg: 164, origin: 'unclassified', categories: ['flowering', 'medicinal'] },
  { id: 'aegle-marmelos', common: 'Bel', scientific: 'Aegle marmelos', marathi: 'बेल', count: 1, totalCo2eKg: 8, origin: 'native', categories: ['sacred', 'fruiting'], sentinelTreeTag: 'eg1258' },
  { id: 'litchi-chinensis', common: 'Lychee', scientific: 'Litchi chinensis', count: 1, totalCo2eKg: 79, origin: 'exotic', categories: ['fruiting'] },
  { id: 'terminalia-catappa', common: 'Indian Almond', scientific: 'Terminalia catappa', count: 1, totalCo2eKg: 55, origin: 'unclassified', categories: ['native-forest', 'fruiting'] },
  { id: 'alstonia-scholaris', common: 'Saptaparni', scientific: 'Alstonia scholaris', marathi: 'सप्तपर्णी', count: 1, totalCo2eKg: 128, origin: 'unclassified', categories: ['medicinal', 'sacred'] },
  { id: 'bauhinia-purpurea', common: 'Kanchan', scientific: 'Bauhinia purpurea', marathi: 'कांचन', count: 1, totalCo2eKg: 128, origin: 'native', categories: ['native-forest', 'flowering'], sentinelTreeTag: 'eg1604' },
  { id: 'pongamia-pinnata', common: 'Indian Beech', scientific: 'Pongamia pinnata', marathi: 'करंज', count: 1, totalCo2eKg: 31, origin: 'native', categories: ['native-forest', 'medicinal'] },
  { id: 'bambusa-bambos', common: 'Giant Thorny Bamboo', scientific: 'Bambusa bambos', marathi: 'बांबू', count: 1, totalCo2eKg: 18, origin: 'unclassified', categories: ['native-forest', 'timber'] },
  { id: 'canarium-strictum', common: 'Black Damar', scientific: 'Canarium strictum', count: 1, totalCo2eKg: 0, origin: 'native', categories: ['timber'] },
  { id: 'couroupita-guianensis', common: 'Kailaspati', scientific: 'Couroupita guianensis', marathi: 'कैलासपती', count: 1, totalCo2eKg: 2, origin: 'exotic', categories: ['sacred', 'flowering'], sentinelTreeTag: 'eg1262', note: 'Cannonball tree — the gift that bloomed' },
  { id: 'polyalthia-longifolia', common: 'Ashoka (Mast Tree)', scientific: 'Polyalthia longifolia', marathi: 'अशोक', count: 1, totalCo2eKg: 8, origin: 'exotic', categories: ['sacred'] },
  { id: 'brownea-grandiceps', common: 'Rose of Venezuela', scientific: 'Brownea grandiceps', count: 1, totalCo2eKg: 94, origin: 'exotic', categories: ['flowering', 'ornamental'] },
  { id: 'holoptelea-integrifolia', common: 'Indian Elm', scientific: 'Holoptelea integrifolia', count: 1, totalCo2eKg: 60, origin: 'native', categories: ['native-forest', 'timber'] },
  { id: 'ziziphus-mauritiana', common: 'Indian Jujube', scientific: 'Ziziphus mauritiana', marathi: 'बोर', count: 1, totalCo2eKg: 73, origin: 'native', categories: ['fruiting', 'native-forest'] },
  { id: 'bridelia-retusa', common: 'Spinous Kino', scientific: 'Bridelia retusa', count: 1, totalCo2eKg: 0, origin: 'unclassified', categories: ['native-forest'] },
  { id: 'plumeria-pudica', common: 'Wild Plumeria', scientific: 'Plumeria pudica', count: 1, totalCo2eKg: 10, origin: 'unclassified', categories: ['flowering'] },
  { id: 'coffea-arabica', common: 'Arabica Coffee', scientific: 'Coffea arabica', count: 1, totalCo2eKg: 0, origin: 'exotic', categories: ['ornamental'] },
  { id: 'nyctanthes-arbor-tristis', common: 'Parijat', scientific: 'Nyctanthes arbor-tristis', marathi: 'पारिजात', count: 1, totalCo2eKg: 121, origin: 'unclassified', categories: ['flowering', 'sacred'], note: 'Night-flowering jasmine' },
  { id: 'bixa-orellana', common: 'Achiote', scientific: 'Bixa orellana', count: 1, totalCo2eKg: 0, origin: 'exotic', categories: ['medicinal'] },

  // ---------- Sacred sentinels not in the cultivated census ----------
  // These are unique specimens outside the 447-tree survey but documented in the
  // Pasaydan sacred-grove cluster. Each carries a full chapter-based story.
  { id: 'ficus-religiosa', common: 'Peepal', scientific: 'Ficus religiosa', marathi: 'पिंपळ', count: 1, totalCo2eKg: 0, origin: 'native', categories: ['sacred', 'native-forest'], sentinelTreeTag: 'eg1272', note: 'The Tree of Breath. Keystone fig.' },
  { id: 'ficus-krishnae', common: 'Krushnavad', scientific: 'Ficus krishnae', marathi: 'कृष्णवड', count: 1, totalCo2eKg: 0, origin: 'native', categories: ['sacred', 'native-forest'], sentinelTreeTag: 'eg1250b', note: 'The butter bowl' },
  { id: 'elaeocarpus-ganitrus', common: 'Rudraksh', scientific: 'Elaeocarpus ganitrus', marathi: 'रुद्राक्ष', count: 1, totalCo2eKg: 0, origin: 'native', categories: ['sacred'], sentinelTreeTag: 'eg0522', note: 'The tear that became a tree' },
  { id: 'neolamarckia-cadamba', common: 'Kadamb', scientific: 'Neolamarckia cadamba', marathi: 'कदंब', count: 1, totalCo2eKg: 0, origin: 'native', categories: ['sacred', 'native-forest', 'flowering'], sentinelTreeTag: 'eg1601' },
  { id: 'phyllostachys-nigra', common: 'Black Bamboo', scientific: 'Phyllostachys nigra', marathi: 'काळा बांबू', count: 1, totalCo2eKg: 0, origin: 'exotic', categories: ['timber'], sentinelTreeTag: 'eg1301' },
  { id: 'terminalia-elliptica', common: 'Ajan', scientific: 'Terminalia elliptica', marathi: 'अजन', count: 1, totalCo2eKg: 0, origin: 'native', categories: ['native-forest', 'timber'], sentinelTreeTag: 'eg1121', note: "Born from a pilgrim's staff" },
  { id: 'mimusops-elengi', common: 'Bakul', scientific: 'Mimusops elengi', marathi: 'बकुळ', count: 1, totalCo2eKg: 0, origin: 'native', categories: ['native-forest', 'flowering'], sentinelTreeTag: 'eg1252' },
  { id: 'mimosa-pudica', common: 'Touch-Me-Not', scientific: 'Mimosa pudica', marathi: 'लाजाळू', count: 1, totalCo2eKg: 0, origin: 'native', categories: ['native-forest', 'medicinal'], sentinelTreeTag: 'eg1259', note: 'Sensitivity is not weakness' },
]

export const speciesByOrigin: Record<Origin, Species[]> = {
  native: [],
  exotic: [],
  unclassified: [],
}

species.forEach((s) => speciesByOrigin[s.origin].push(s))

export const topSpecies = species
  .filter((s) => s.count >= 5)
  .slice()
  .sort((a, b) => b.count - a.count)

// The "all species" list for the full census view, sorted by count descending then name.
export const allSpecies = species
  .filter((s) => s.count > 0)
  .slice()
  .sort((a, b) => (b.count - a.count) || a.common.localeCompare(b.common))

// Sentinel-only entries (count 1, not in CSV but in trees.ts)
export const sentinelSpecies = species.filter((s) => s.sentinelTreeTag && s.totalCo2eKg === 0 && s.count === 1 &&
  ['ficus-religiosa', 'ficus-krishnae', 'elaeocarpus-ganitrus', 'neolamarckia-cadamba', 'phyllostachys-nigra', 'terminalia-elliptica', 'mimusops-elengi', 'mimosa-pudica'].includes(s.id))

// ---------- Aggregate stats (Year-0, April 2026) ----------
// From the report's executive summary, with local computations for cross-checks.

const nativeCount = speciesByOrigin.native.reduce((sum, s) => sum + s.count, 0)
const exoticCount = speciesByOrigin.exotic.reduce((sum, s) => sum + s.count, 0)
const unclassifiedCount = speciesByOrigin.unclassified.reduce((sum, s) => sum + s.count, 0)
const totalCounted = nativeCount + exoticCount + unclassifiedCount

export const speciesStats = {
  totalTrees: 447, // authoritative from report
  totalSpecies: 64, // authoritative from report (April 2026 baseline §2)
  totalCo2eKg: 42682, // from report §2.4 (42,681.6 kg = 42.7 t)
  nativeCount,
  exoticCount,
  unclassifiedCount,
  nativePct: (nativeCount / totalCounted) * 100,
  exoticPct: (exoticCount / totalCounted) * 100,
  unclassifiedPct: (unclassifiedCount / totalCounted) * 100,
  sentinelCount: 18,
  largestCarbonContributor: { tag: '621', species: 'Mangifera indica', common: 'Mango', co2eKg: 1766 },
  iucnVulnerable: { scientific: 'Santalum album', common: 'Sandalwood', count: 64 },
}

export const maxSpeciesCount = Math.max(...species.map((s) => s.count))
