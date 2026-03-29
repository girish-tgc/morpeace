export interface PasaydanGrove {
  id: number
  name: string
  meaning: string
  ecologicalFunction: string
  experience: string
  keySpecies: string[]
  area?: string
}

export const pasaydanGroves: PasaydanGrove[] = [
  {
    id: 1,
    name: 'Darkness to Dawn',
    meaning: 'Ignorance to awakening',
    ecologicalFunction: 'Riparian corridor along the stream — shade, moisture, transition',
    experience: 'Walking from shadow into dappled light; the sound of water',
    keySpecies: ['Vetiver', 'Terminalia arjuna', 'Bacopa'],
    area: '1.2 ac',
  },
  {
    id: 2,
    name: 'Wisdom',
    meaning: 'The tree of knowledge',
    ecologicalFunction: 'Sacred grove — Pimpal, Wad, Bel, Rudraksha, Dhoop',
    experience: 'A clearing of ancient forms; stillness; the largest canopies',
    keySpecies: ['Pimpal', 'Wad', 'Bel', 'Rudraksha'],
  },
  {
    id: 3,
    name: 'Compassion',
    meaning: 'Kindness to all beings',
    ecologicalFunction: 'Medicinal herb garden — Ashwagandha, Shatavari, Tulsi',
    experience: 'Fragrance, texture, the knowledge that every plant heals',
    keySpecies: ['Ashwagandha', 'Tulsi', 'Shatavari', 'Adulasa'],
    area: '0.2 ac',
  },
  {
    id: 4,
    name: 'Abundance',
    meaning: 'May all beings have enough',
    ecologicalFunction: 'Fruiting forest — Jambhul, Umbar, Kokam, Hirda, Behda',
    experience: 'Seasonal fruit; birds feeding at every level',
    keySpecies: ['Jambhul', 'Umbar', 'Kokam', 'Hirda'],
  },
  {
    id: 5,
    name: 'Harmony',
    meaning: 'Balance among all creatures',
    ecologicalFunction: 'Multi-layer forest core — 5 vertical layers, maximum niche',
    experience: 'Canopy above, ground cover below, life at every height',
    keySpecies: ['Arjun', 'Bakul', 'Kadamb', 'Kanchan'],
  },
  {
    id: 6,
    name: 'Gratitude',
    meaning: 'Thankfulness for the earth',
    ecologicalFunction: 'Existing orchards enhanced with native understory',
    experience: 'What the land has already given, honored and enriched',
    keySpecies: ['Mango', 'Coconut', 'Banana', 'Chikoo'],
    area: '3.0 ac',
  },
  {
    id: 7,
    name: 'Joy',
    meaning: 'Delight in existence',
    ecologicalFunction: 'Butterfly & pollinator garden — Ixora, Kadipatta, Aboli',
    experience: 'Butterflies rising; sunbirds hovering; the hum of bees',
    keySpecies: ['Ixora', 'Kadipatta', 'Aboli', 'Passiflora'],
    area: '0.5 ac',
  },
  {
    id: 8,
    name: 'Service',
    meaning: 'Giving without expectation',
    ecologicalFunction: 'Bamboo grove & grass savanna — wind, erosion control, biomass',
    experience: 'Wind through bamboo; the land giving back to itself',
    keySpecies: ['Bambusa bambos', 'Vetiver', 'Lemongrass', 'Darbha'],
    area: '0.5 ac',
  },
  {
    id: 9,
    name: 'Enlightenment',
    meaning: 'The final integration',
    ecologicalFunction: 'Sugandhika lake & wetland — water, land, and sky meet',
    experience: 'Lake edge at dusk; kingfishers diving; the full circle',
    keySpecies: ['Hedychium coronarium', 'Saraca asoca', 'Pongamia pinnata'],
    area: '1.5 ac',
  },
]

export const pasaydanQuote = 'जो जे वांछिल तो ते लाहो , प्राणिजात...'
export const pasaydanTranslation = 'Whatever all beings desire, may that be granted to them.'
