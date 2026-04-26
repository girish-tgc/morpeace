// Gallery — aesthetic record of the land.
//
// Sections: Food, Hall, Bedroom, Bathroom, External, Days, Aerial, Origins.
// Flora, Trees, Orchard, Wildlife live on /the-forest as the Biodiversity
// Atlas (see data/species.ts and data/fauna.ts). Photo files live in
// public/media/ and are referenced from there.

export type GalleryItem = {
  src: string
  alt: string
  type: 'image' | 'video'
  poster?: string
  caption?: string
}

export type GallerySection = {
  id: string
  label: string
  heading: string
  description: string
  items: GalleryItem[]
  attribution?: string
}

export const gallerySections: GallerySection[] = [
  {
    id: 'food',
    label: 'Food',
    heading: 'At the Table',
    description: 'Forgotten grains, foraged greens, slow village recipes — meals that belong to the place.',
    items: [
      { src: 'media/food/feast-spread.jpeg', alt: 'A full feast spread laid out for the table', type: 'image' },
      { src: 'media/food/whatsapp-image-2026-04-25-at-11-34-23-pm-1.jpeg', alt: 'Slow-cooked village recipe served warm', type: 'image' },
      { src: 'media/food/whatsapp-image-2026-04-25-at-11-39-20-pm.jpeg', alt: 'Seasonal harvest plated for the meal', type: 'image' },
      { src: 'media/food/whatsapp-image-2026-04-25-at-11-41-07-pm.jpeg', alt: 'Foraged greens and forgotten grains, plated', type: 'image' },
      { src: 'media/food/whatsapp-image-2026-04-25-at-11-44-43-pm.jpeg', alt: 'Hand-rolled breads and accompaniments', type: 'image' },
      { src: 'media/food/whatsapp-image-2026-04-25-at-11-45-55-pm.jpeg', alt: 'Sweet course at the end of a long meal', type: 'image' },
      { src: 'media/rustic-haven/rh-21.webp', alt: 'Thali spread on the outdoor dining bench by the pool', type: 'image' },
      { src: 'media/rustic-haven/rh-01.webp', alt: 'Breakfast at sunset beside the pool', type: 'image' },
      { src: 'media/property/whatsapp-image-2026-02-16-at-10-56-39-pm-1.webp', alt: 'Outdoor table set with bruschetta, bread and flowers', type: 'image' },
      { src: 'media/dining-and-food/whatsapp-video-2026-02-16-at-10-56-35-pm.mp4', alt: 'Dining at Morpeace', type: 'video', poster: 'media/rustic-haven/rh-21.webp' },
      { src: 'media/dining-and-food/whatsapp-video-2026-02-16-at-10-56-38-pm.mp4', alt: 'Dining at Morpeace', type: 'video', poster: 'media/rustic-haven/rh-01.webp' },
    ],
  },
  {
    id: 'hall',
    label: 'The Hall',
    heading: 'Where we gather',
    description: 'Brick, wood, soft light — the long room that holds the quiet.',
    items: [
      { src: 'media/rustic-haven/rh-19.webp', alt: 'The great hall with swing and glass walls opening to the pool', type: 'image' },
      { src: 'media/rustic-haven/rh-04.webp', alt: 'Living room panorama with swing, sofas and brick walls', type: 'image' },
      { src: 'media/rustic-haven/rh-20.webp', alt: 'Wide living room with cathedral ceiling and double-sided light', type: 'image' },
      { src: 'media/rustic-haven/rh-18.webp', alt: 'Dining table beside the ping-pong area', type: 'image' },
      { src: 'media/rustic-haven/rh-09.webp', alt: 'Reading nook with bookshelf and writing desk', type: 'image' },
      { src: 'media/rustic-haven/rh-16.webp', alt: 'Brick bench nook beside the wooden armoire', type: 'image' },
      { src: 'media/property/whatsapp-image-2026-02-16-at-10-56-29-pm-1.webp', alt: 'Sofa with flowers in the hall', type: 'image' },
      { src: 'media/property/sham-kane-renonwed-tabla-player.webp', alt: 'Tabla player Sham Kane visiting the hall', type: 'image' },
    ],
  },
  {
    id: 'bedroom',
    label: 'Bedroom',
    heading: 'Where we rest',
    description: 'Linen, brick, palm light — rooms that let the day fall away.',
    items: [
      { src: 'media/rustic-haven/rh-05.webp', alt: 'Bedroom with wide bed and palm-framed windows', type: 'image' },
      { src: 'media/rustic-haven/rh-15.webp', alt: 'Green-linen bedroom with floor-to-ceiling palm view', type: 'image' },
      { src: 'media/rustic-haven/rh-10.webp', alt: 'Spacious bedroom with wardrobes and pink linen', type: 'image' },
      { src: 'media/rustic-haven/rh-12.webp', alt: 'Large bedroom with painting, sofa and pink bed', type: 'image' },
      { src: 'media/rustic-haven/rh-07.webp', alt: 'Bedroom looking out to a bench nook and armoire', type: 'image' },
    ],
  },
  {
    id: 'bathroom',
    label: 'Bathroom',
    heading: 'Water and stone',
    description: 'Walk-in showers, basin stone, soft morning light.',
    items: [
      { src: 'media/rustic-haven/rh-17.webp', alt: 'Bathroom with dark stone counter and walk-in shower', type: 'image' },
      { src: 'media/rustic-haven/rh-08.webp', alt: 'Bathroom with glass shower and basin', type: 'image' },
      { src: 'media/rustic-haven/rh-13.webp', alt: 'Bathroom with wall basin and window to the trees', type: 'image' },
    ],
  },
  {
    id: 'external',
    label: 'External',
    heading: 'The Land',
    description: 'Facades, lake, pool, mountain — the grounds from the outside in.',
    items: [
      { src: 'media/rustic-haven/rh-23.webp', alt: 'Aerial of the house with fields and mountain range behind', type: 'image' },
      { src: 'media/rustic-haven/rh-02.webp', alt: 'Aerial of the lit house and lake at dusk', type: 'image' },
      { src: 'media/rustic-haven/rh-25.webp', alt: 'The house and tower seen from across the lake', type: 'image' },
      { src: 'media/rustic-haven/rh-24.webp', alt: 'Infinity pool and tower lit at night', type: 'image' },
      { src: 'media/rustic-haven/rh-22.webp', alt: 'Terrace chairs with spiral stair to the tower', type: 'image' },
      { src: 'media/rustic-haven/rh-03.webp', alt: 'Pool deck with loungers in daylight', type: 'image' },
      { src: 'media/property/whatsapp-image-2026-02-16-at-10-56-36-pm.webp', alt: 'Morpeace entrance at dusk', type: 'image' },
      { src: 'media/property/mountain-in-bg.webp', alt: 'Mountain in the background', type: 'image' },
      { src: 'media/property/img-20260208-wa0011.webp', alt: 'Lake at sunset', type: 'image' },
      { src: 'media/property/img-20260208-wa0015.webp', alt: 'Mountain at sunset', type: 'image' },
      { src: 'media/property/img-20260208-wa0017.webp', alt: 'Rainbow over the lake', type: 'image' },
    ],
  },
  {
    id: 'night',
    label: 'At Night',
    heading: 'When the land turns in',
    description: 'Lake under dusk, pool lit against the dark, the tower catching the last light — Morpeace after sundown.',
    items: [
      { src: 'media/at-night/night.webp', alt: 'Night falling over Morpeace', type: 'image' },
      { src: 'media/at-night/lake-view.webp', alt: 'Lake at night', type: 'image' },
      { src: 'media/at-night/pool-view.webp', alt: 'Pool lit at night', type: 'image' },
      { src: 'media/at-night/top-view.webp', alt: 'Top view of Morpeace at night', type: 'image' },
    ],
  },
  {
    id: 'days',
    label: 'Days at Morpeace',
    heading: 'How time passes here',
    description: 'Cows fed, board games played, kids running where they want to. The days unfold slowly.',
    items: [
      { src: 'media/activities/whatsapp-image-2026-02-16-at-10-53-20-pm-2.webp', alt: 'Activities at Morpeace', type: 'image' },
      { src: 'media/activities/board-game-1.webp', alt: 'Board game 1', type: 'image' },
      { src: 'media/activities/chess.webp', alt: 'Chess', type: 'image' },
      { src: 'media/activities/cows-feeding.webp', alt: 'Cows feeding', type: 'image' },
      { src: 'media/activities/cows.mp4', alt: 'Cows', type: 'video', poster: 'media/activities/whatsapp-image-2026-02-16-at-10-53-20-pm-2.webp' },
      { src: 'media/activities/yoga.webp', alt: 'Yoga', type: 'image' },
      { src: 'media/kids/whatsapp-image-2026-02-16-at-11-05-25-pm.webp', alt: 'Kids at Morpeace', type: 'image' },
      { src: 'media/kids/fun.webp', alt: 'Fun', type: 'image' },
      { src: 'media/kids/kids-in-forest.webp', alt: 'Kids in forest', type: 'image' },
      { src: 'media/kids/kids-playing-in-pool.mp4', alt: 'Kids playing in pool', type: 'video', poster: 'media/kids/whatsapp-image-2026-02-16-at-11-05-25-pm.webp' },
      { src: 'media/kids/kids1.webp', alt: 'Kids1', type: 'image' },
      { src: 'media/kids/on-gallery.webp', alt: 'On gallery', type: 'image' },
    ],
  },
  {
    id: 'aerial',
    label: 'Aerial',
    heading: 'From Above',
    description: 'A drone sweep across the land — the shape of Morpeace from the sky.',
    items: [
      { src: 'media/aerial-property-drone.mp4', alt: 'Drone sweep over Morpeace', type: 'video', poster: 'media/rustic-haven/rh-23.webp' },
    ],
  },
  {
    id: 'satara',
    label: 'Around Satara',
    heading: 'The land beyond the gate',
    description: 'Western Ghats lakes, Kaas Plateau wildflowers, Sajjangad fort, the forests of Tapola — what surrounds Morpeace, and what is yours to wander when you stay.',
    items: [
      { src: 'media/satara/kaas-lake.jpg', alt: 'Lake on the Kaas plateau, Satara — UNESCO World Heritage site (photo: Dinesh Valke, CC BY-SA 2.0)', type: 'image', caption: 'Kaas Plateau Lake' },
      { src: 'media/satara/kaas-plateau.jpg', alt: 'Wildflowers of the Kaas plateau in bloom (photo: Ganesh R. Mandavkar, CC BY-SA 4.0)', type: 'image', caption: 'Kaas Plateau · Wildflowers' },
      { src: 'media/satara/mahabaleshwar.jpg', alt: 'Mahabaleshwar hill station, Satara district (photo: Amey Khot, CC BY 3.0)', type: 'image', caption: 'Mahabaleshwar' },
      { src: 'media/satara/panchgani.jpg', alt: 'Scenic Panchgani plateau, near Mahabaleshwar (photo: Amol Bakshi, CC BY-SA 4.0)', type: 'image', caption: 'Panchgani' },
      { src: 'media/satara/pratapgad-fort.jpg', alt: 'Pratapgad fort in the Sahyadris (photo: Neeraj Rane, CC BY-SA 4.0)', type: 'image', caption: 'Pratapgad Fort' },
      { src: 'media/satara/sajjangad-fort.jpg', alt: 'View from Sajjangad fort, near Satara (photo: Vinayaraj, CC BY-SA 4.0)', type: 'image', caption: 'Sajjangad Fort' },
      { src: 'media/satara/thoseghar-falls.jpg', alt: 'Thoseghar waterfalls, Satara (photo: Bairagi17, CC BY-SA 4.0)', type: 'image', caption: 'Thoseghar Falls' },
      { src: 'media/satara/koyna-backwaters.jpg', alt: 'Koyna backwaters in Satara district (photo: Bangal Priti, CC BY-SA 4.0)', type: 'image', caption: 'Koyna Backwaters' },
      { src: 'media/satara/tapola-forest.jpg', alt: 'Forest in Tapola, near the Koyna backwaters (photo: Hanmant Dadaso Rane, CC BY-SA 4.0)', type: 'image', caption: 'Tapola Forest' },
      { src: 'media/satara/mandhardevi.jpg', alt: 'Mandhardevi (Kalubai) hills near Satara (photo: Atulbibave, CC BY-SA 4.0)', type: 'image', caption: 'Mandhardevi (Kalubai)' },
    ],
    attribution:
      'Photographs of the surrounding region courtesy Wikimedia Commons contributors Dinesh Valke, Ganesh R. Mandavkar, Amey Khot, Amol Bakshi, Neeraj Rane, Vinayaraj, Bairagi17, Bangal Priti, Hanmant Dadaso Rane, and Atulbibave — used under Creative Commons BY 3.0, BY-SA 2.0 and BY-SA 4.0 licences.',
  },
  {
    id: 'history',
    label: 'Origins',
    heading: 'Becoming',
    description: 'Glimpses of the becoming — the meditation room finding its shape, ground broken at the plinth.',
    items: [
      { src: 'media/history/at-plinth.mp4', alt: 'At plinth', type: 'video', poster: 'media/history/meditation-room-done.webp' },
      { src: 'media/history/meditation-room-done.webp', alt: 'Meditation room done', type: 'image' },
    ],
  },
]
