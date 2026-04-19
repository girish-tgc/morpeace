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
}

export type GallerySection = {
  id: string
  label: string
  heading: string
  description: string
  items: GalleryItem[]
}

export const gallerySections: GallerySection[] = [
  {
    id: 'food',
    label: 'Food',
    heading: 'At the Table',
    description: 'Thalis by the pool, bruschetta under an open sky — meals that belong to the place.',
    items: [
      { src: 'media/rustic-haven/rh-21.jpg', alt: 'Thali spread on the outdoor dining bench by the pool', type: 'image' },
      { src: 'media/rustic-haven/rh-01.jpg', alt: 'Breakfast at sunset beside the pool', type: 'image' },
      { src: 'media/property/whatsapp-image-2026-02-16-at-10-56-39-pm-1.jpeg', alt: 'Outdoor table set with bruschetta, bread and flowers', type: 'image' },
      { src: 'media/dining-and-food/whatsapp-video-2026-02-16-at-10-56-35-pm.mp4', alt: 'Dining at Morpeace', type: 'video', poster: 'media/rustic-haven/rh-21.jpg' },
      { src: 'media/dining-and-food/whatsapp-video-2026-02-16-at-10-56-38-pm.mp4', alt: 'Dining at Morpeace', type: 'video', poster: 'media/rustic-haven/rh-01.jpg' },
    ],
  },
  {
    id: 'hall',
    label: 'The Hall',
    heading: 'Where we gather',
    description: 'Brick, wood, soft light — the long room that holds the quiet.',
    items: [
      { src: 'media/rustic-haven/rh-19.jpg', alt: 'The great hall with swing and glass walls opening to the pool', type: 'image' },
      { src: 'media/rustic-haven/rh-04.jpg', alt: 'Living room panorama with swing, sofas and brick walls', type: 'image' },
      { src: 'media/rustic-haven/rh-20.jpg', alt: 'Wide living room with cathedral ceiling and double-sided light', type: 'image' },
      { src: 'media/rustic-haven/rh-18.jpg', alt: 'Dining table beside the ping-pong area', type: 'image' },
      { src: 'media/rustic-haven/rh-09.jpg', alt: 'Reading nook with bookshelf and writing desk', type: 'image' },
      { src: 'media/rustic-haven/rh-16.jpg', alt: 'Brick bench nook beside the wooden armoire', type: 'image' },
      { src: 'media/property/whatsapp-image-2026-02-16-at-10-56-29-pm-1.jpeg', alt: 'Sofa with flowers in the hall', type: 'image' },
      { src: 'media/property/sham-kane-renonwed-tabla-player.jpeg', alt: 'Tabla player Sham Kane visiting the hall', type: 'image' },
    ],
  },
  {
    id: 'bedroom',
    label: 'Bedroom',
    heading: 'Where we rest',
    description: 'Linen, brick, palm light — rooms that let the day fall away.',
    items: [
      { src: 'media/rustic-haven/rh-05.jpg', alt: 'Bedroom with wide bed and palm-framed windows', type: 'image' },
      { src: 'media/rustic-haven/rh-15.jpg', alt: 'Green-linen bedroom with floor-to-ceiling palm view', type: 'image' },
      { src: 'media/rustic-haven/rh-10.jpg', alt: 'Spacious bedroom with wardrobes and pink linen', type: 'image' },
      { src: 'media/rustic-haven/rh-12.jpg', alt: 'Large bedroom with painting, sofa and pink bed', type: 'image' },
      { src: 'media/rustic-haven/rh-07.jpg', alt: 'Bedroom looking out to a bench nook and armoire', type: 'image' },
    ],
  },
  {
    id: 'bathroom',
    label: 'Bathroom',
    heading: 'Water and stone',
    description: 'Walk-in showers, basin stone, soft morning light.',
    items: [
      { src: 'media/rustic-haven/rh-17.jpg', alt: 'Bathroom with dark stone counter and walk-in shower', type: 'image' },
      { src: 'media/rustic-haven/rh-08.jpg', alt: 'Bathroom with glass shower and basin', type: 'image' },
      { src: 'media/rustic-haven/rh-13.jpg', alt: 'Bathroom with wall basin and window to the trees', type: 'image' },
    ],
  },
  {
    id: 'external',
    label: 'External',
    heading: 'The Land',
    description: 'Facades, lake, pool, mountain — the grounds from the outside in.',
    items: [
      { src: 'media/rustic-haven/rh-23.jpg', alt: 'Aerial of the house with fields and mountain range behind', type: 'image' },
      { src: 'media/rustic-haven/rh-02.jpg', alt: 'Aerial of the lit house and lake at dusk', type: 'image' },
      { src: 'media/rustic-haven/rh-25.jpg', alt: 'The house and tower seen from across the lake', type: 'image' },
      { src: 'media/rustic-haven/rh-24.jpg', alt: 'Infinity pool and tower lit at night', type: 'image' },
      { src: 'media/rustic-haven/rh-22.jpg', alt: 'Terrace chairs with spiral stair to the tower', type: 'image' },
      { src: 'media/rustic-haven/rh-03.jpg', alt: 'Pool deck with loungers in daylight', type: 'image' },
      { src: 'media/property/whatsapp-image-2026-02-16-at-10-56-36-pm.jpeg', alt: 'Morpeace entrance at dusk', type: 'image' },
      { src: 'media/property/mountain-in-bg.jpeg', alt: 'Mountain in the background', type: 'image' },
      { src: 'media/property/img-20260208-wa0011.jpg', alt: 'Lake at sunset', type: 'image' },
      { src: 'media/property/img-20260208-wa0015.jpg', alt: 'Mountain at sunset', type: 'image' },
      { src: 'media/property/img-20260208-wa0017.jpg', alt: 'Rainbow over the lake', type: 'image' },
    ],
  },
  {
    id: 'days',
    label: 'Days at Morpeace',
    heading: 'How time passes here',
    description: 'Cows fed, board games played, kids running where they want to. The days unfold slowly.',
    items: [
      { src: 'media/activities/whatsapp-image-2026-02-16-at-10-53-20-pm-2.jpeg', alt: 'Activities at Morpeace', type: 'image' },
      { src: 'media/activities/board-game-1.jpeg', alt: 'Board game 1', type: 'image' },
      { src: 'media/activities/chess.jpeg', alt: 'Chess', type: 'image' },
      { src: 'media/activities/cows-feeding.jpeg', alt: 'Cows feeding', type: 'image' },
      { src: 'media/activities/cows.mp4', alt: 'Cows', type: 'video', poster: 'media/activities/whatsapp-image-2026-02-16-at-10-53-20-pm-2.jpeg' },
      { src: 'media/activities/yoga.jpeg', alt: 'Yoga', type: 'image' },
      { src: 'media/kids/whatsapp-image-2026-02-16-at-11-05-25-pm.jpeg', alt: 'Kids at Morpeace', type: 'image' },
      { src: 'media/kids/fun.jpeg', alt: 'Fun', type: 'image' },
      { src: 'media/kids/kids-in-forest.jpeg', alt: 'Kids in forest', type: 'image' },
      { src: 'media/kids/kids-playing-in-pool.mp4', alt: 'Kids playing in pool', type: 'video', poster: 'media/kids/whatsapp-image-2026-02-16-at-11-05-25-pm.jpeg' },
      { src: 'media/kids/kids1.jpeg', alt: 'Kids1', type: 'image' },
      { src: 'media/kids/on-gallery.jpeg', alt: 'On gallery', type: 'image' },
    ],
  },
  {
    id: 'aerial',
    label: 'Aerial',
    heading: 'From Above',
    description: 'A drone sweep across the land — the shape of Morpeace from the sky.',
    items: [
      { src: 'media/aerial-property-drone.mp4', alt: 'Drone sweep over Morpeace', type: 'video', poster: 'media/rustic-haven/rh-23.jpg' },
    ],
  },
  {
    id: 'history',
    label: 'Origins',
    heading: 'Becoming',
    description: 'Glimpses of the becoming — the meditation room finding its shape, ground broken at the plinth.',
    items: [
      { src: 'media/history/at-plinth.mp4', alt: 'At plinth', type: 'video', poster: 'media/history/meditation-room-done.jpeg' },
      { src: 'media/history/meditation-room-done.jpeg', alt: 'Meditation room done', type: 'image' },
    ],
  },
]
