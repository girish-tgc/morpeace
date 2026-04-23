export type NearbyPlace = {
  name: string
  meta: string
  featured?: boolean
}

export const NEARBY_PLACES: NearbyPlace[] = [
  { name: 'Kaas Plateau', meta: 'Seasonal · UNESCO site', featured: true },
  { name: 'Kaas Lake', meta: 'Quiet water beside the plateau', featured: true },
  { name: 'Thoseghar Waterfalls', meta: 'Monsoon season', featured: true },
  { name: 'Vajrai Waterfall', meta: 'Among India’s tallest · monsoon', featured: true },
  { name: 'Lingamala Falls', meta: 'Monsoon cascade' },
  { name: 'Sajjangad', meta: 'Fort & Swami Ramdas shrine', featured: true },
  { name: 'Ajinkyatara Fort', meta: 'Hilltop panoramic views', featured: true },
  { name: 'Vasota Fort', meta: 'Trek through Koyna Sanctuary' },
  { name: 'Baramotichi Vihir', meta: '17th-c ornate stepwell' },
  { name: 'Chalkewadi Windmill Farm', meta: 'Plateau of windmills' },
  { name: 'Koyna Dam', meta: 'Scenic · permit required', featured: true },
  { name: 'Lodwick Point', meta: 'Valley viewpoint' },
  { name: 'Mayani Bird Sanctuary', meta: '400+ species · winter', featured: true },
  { name: 'Shivsagar Lake', meta: 'Quiet picnic waters' },
  { name: 'Sangam Mahuli', meta: '18th-c riverside temples' },
  { name: 'Natraj Mandir', meta: 'Chidambaram-style Shiva temple' },
  { name: 'Dholya Ganpati Mandir', meta: 'Ganesha shrine at Wai' },
  { name: 'Shikhar Shingnapur', meta: 'Hilltop Shiva temple' },
  { name: 'Yamai Devi Temple', meta: 'Hilltop shrine at Aundh' },
]

export const FEATURED_NEARBY_PLACES: NearbyPlace[] = NEARBY_PLACES.filter(p => p.featured)
