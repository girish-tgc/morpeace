// Nakshatra Van and Medicinal Garden — Progress Report, 25 Sep 2026.
// Outer ring: one tree per Nakshatra (Table 1). `substitute` marks species
// planted where the planned tree was unavailable at plantation time.

export interface NakshatraTree {
  n: number
  nakshatra: string
  devanagari: string
  tree: string // local / Marathi name
  scientific: string
  substitute?: boolean
}

export const nakshatraTrees: NakshatraTree[] = [
  { n: 1, nakshatra: 'Ashwini', devanagari: 'अश्विनी', tree: 'Kuchla', scientific: 'Strychnos nux-vomica' },
  { n: 2, nakshatra: 'Bharani', devanagari: 'भरणी', tree: 'Aavla', scientific: 'Phyllanthus emblica' },
  { n: 3, nakshatra: 'Krittika', devanagari: 'कृत्तिका', tree: 'Umbar', scientific: 'Ficus racemosa' },
  { n: 4, nakshatra: 'Rohini', devanagari: 'रोहिणी', tree: 'Jambhul', scientific: 'Syzygium cumini' },
  { n: 5, nakshatra: 'Mrigashira', devanagari: 'मृगशीर्ष', tree: 'Khair', scientific: 'Senegalia catechu' },
  { n: 6, nakshatra: 'Ardra', devanagari: 'आर्द्रा', tree: 'Krishna Agaru', scientific: 'Aquilaria malaccensis' },
  { n: 7, nakshatra: 'Punarvasu', devanagari: 'पुनर्वसु', tree: 'Vans / Bamboo', scientific: 'Bambusa bambos' },
  { n: 8, nakshatra: 'Pushya', devanagari: 'पुष्य', tree: 'Pimpal', scientific: 'Ficus religiosa' },
  { n: 9, nakshatra: 'Ashlesha', devanagari: 'आश्लेषा', tree: 'Nagkesar', scientific: 'Mesua ferrea' },
  { n: 10, nakshatra: 'Magha', devanagari: 'मघा', tree: 'Vad', scientific: 'Ficus benghalensis' },
  { n: 11, nakshatra: 'Purva Phalguni', devanagari: 'पूर्वा फाल्गुनी', tree: 'Palas', scientific: 'Butea monosperma' },
  { n: 12, nakshatra: 'Uttara Phalguni', devanagari: 'उत्तरा फाल्गुनी', tree: 'Pakar', scientific: 'Ficus virens' },
  { n: 13, nakshatra: 'Hasta', devanagari: 'हस्त', tree: 'Ambada', scientific: 'Spondias mangifera', substitute: true },
  { n: 14, nakshatra: 'Chitra', devanagari: 'चित्रा', tree: 'Bel', scientific: 'Aegle marmelos' },
  { n: 15, nakshatra: 'Swati', devanagari: 'स्वाती', tree: 'Arjun', scientific: 'Terminalia arjuna' },
  { n: 16, nakshatra: 'Vishakha', devanagari: 'विशाखा', tree: 'Kachnar', scientific: 'Bauhinia variegata', substitute: true },
  { n: 17, nakshatra: 'Anuradha', devanagari: 'अनुराधा', tree: 'Bakul', scientific: 'Mimusops elengi' },
  { n: 18, nakshatra: 'Jyeshtha', devanagari: 'ज्येष्ठा', tree: 'Katesavar', scientific: 'Bombax ceiba' },
  { n: 19, nakshatra: 'Mula', devanagari: 'मूल', tree: 'Bahava', scientific: 'Cassia fistula' },
  { n: 20, nakshatra: 'Purva Ashadha', devanagari: 'पूर्वाषाढा', tree: 'Ashok', scientific: 'Saraca asoca' },
  { n: 21, nakshatra: 'Uttara Ashadha', devanagari: 'उत्तराषाढा', tree: 'Phanas', scientific: 'Artocarpus heterophyllus' },
  { n: 22, nakshatra: 'Shravana', devanagari: 'श्रवण', tree: 'Rui', scientific: 'Calotropis gigantea' },
  { n: 23, nakshatra: 'Dhanishtha', devanagari: 'धनिष्ठा', tree: 'Shami', scientific: 'Prosopis cineraria' },
  { n: 24, nakshatra: 'Shatabhisha', devanagari: 'शतभिषा', tree: 'Kaim', scientific: 'Mitragyna parvifolia', substitute: true },
  { n: 25, nakshatra: 'Purva Bhadrapada', devanagari: 'पूर्वा भाद्रपदा', tree: 'Aamba / Mango', scientific: 'Mangifera indica' },
  { n: 26, nakshatra: 'Uttara Bhadrapada', devanagari: 'उत्तरा भाद्रपदा', tree: 'Limb / Neem', scientific: 'Azadirachta indica' },
  { n: 27, nakshatra: 'Revati', devanagari: 'रेवती', tree: 'Moh', scientific: 'Madhuca longifolia' },
]

// Plant counts per ring = rows in report Tables 1–3.
export const nakshatraRings = [
  {
    id: 'outer',
    label: 'Outer ring',
    color: '#E8B04B',
    count: 27,
    unit: 'Nakshatra trees',
    body: 'One tree for each of the 27 lunar mansions, planted clockwise from true north in its own position.',
  },
  {
    id: 'middle',
    label: 'Middle ring',
    color: '#7FA35B',
    count: 40,
    unit: 'medicinal plants',
    body: 'The ten Dashamula root-medicine trees, with Ayurvedic shrubs, herbs, grasses, climbers and flowering plants in the pits between them.',
  },
  {
    id: 'inner',
    label: 'Inner ring',
    color: '#E07B3C',
    count: 12,
    unit: 'signature herbs',
    body: 'Krishna, Ram and Kapoor Tulsi, Ashwagandha, Vaikanda, Kumari, Bhringraj, Meswak, Brihati, Kavath and more.',
  },
]

export const nakshatraStats = {
  speciesBefore: 82,
  speciesAfter: 136,
  shannonBefore: 3.0,
  shannonAfter: 3.32,
  planted: nakshatraRings.reduce((s, r) => s + r.count, 0),
}
