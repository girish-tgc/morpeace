// All gallery media, grouped into sections. Auto-organized from media/ folder.

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
    id: 'property',
    label: 'The Property',
    heading: 'The Wada',
    description: 'Light, stone, and quiet rooms — the buildings that hold the silence.',
    items: [
      { src: 'media/property/img-20260208-wa0011.jpg', alt: 'Property at Morpeace', type: 'image' },
      { src: 'media/property/img-20260208-wa0014.jpg', alt: 'Property at Morpeace', type: 'image' },
      { src: 'media/property/img-20260208-wa0015.jpg', alt: 'Property at Morpeace', type: 'image' },
      { src: 'media/property/img-20260208-wa0017.jpg', alt: 'Property at Morpeace', type: 'image' },
      { src: 'media/property/sham-kane-renonwed-tabla-player.jpeg', alt: 'Sham Kane Renonwed tabla player', type: 'image' },
      { src: 'media/property/whatsapp-image-2026-02-16-at-10-56-29-pm-1.jpeg', alt: 'Property at Morpeace', type: 'image' },
      { src: 'media/property/whatsapp-image-2026-02-16-at-10-56-29-pm.jpeg', alt: 'Property at Morpeace', type: 'image' },
      { src: 'media/property/whatsapp-image-2026-02-16-at-10-56-30-pm.jpeg', alt: 'Property at Morpeace', type: 'image' },
      { src: 'media/property/whatsapp-image-2026-02-16-at-10-56-33-pm.jpeg', alt: 'Property at Morpeace', type: 'image' },
      { src: 'media/property/whatsapp-image-2026-02-16-at-10-56-34-pm.jpeg', alt: 'Property at Morpeace', type: 'image' },
      { src: 'media/property/whatsapp-image-2026-02-16-at-10-56-35-pm.jpeg', alt: 'Property at Morpeace', type: 'image' },
      { src: 'media/property/whatsapp-image-2026-02-16-at-10-56-36-pm-1.jpeg', alt: 'Property at Morpeace', type: 'image' },
      { src: 'media/property/whatsapp-image-2026-02-16-at-10-56-36-pm.jpeg', alt: 'Property at Morpeace', type: 'image' },
      { src: 'media/property/whatsapp-image-2026-02-16-at-10-56-38-pm-1.jpeg', alt: 'Property at Morpeace', type: 'image' },
      { src: 'media/property/whatsapp-image-2026-02-16-at-10-56-38-pm.jpeg', alt: 'Property at Morpeace', type: 'image' },
      { src: 'media/property/whatsapp-image-2026-02-16-at-10-56-39-pm-1.jpeg', alt: 'Property at Morpeace', type: 'image' },
      { src: 'media/property/whatsapp-image-2026-02-16-at-10-56-39-pm.jpeg', alt: 'Property at Morpeace', type: 'image' },
      { src: 'media/property/whatsapp-image-2026-02-16-at-11-06-23-pm-1.jpeg', alt: 'Property at Morpeace', type: 'image' },
      { src: 'media/property/whatsapp-image-2026-02-16-at-11-06-23-pm.jpeg', alt: 'Property at Morpeace', type: 'image' },
      { src: 'media/property/whatsapp-video-2026-02-16-at-10-56-33-pm.mp4', alt: 'Property at Morpeace', type: 'video', poster: 'media/property/img-20260208-wa0011.jpg' },
      { src: 'media/property/whatsapp-video-2026-02-16-at-10-56-34-pm.mp4', alt: 'Property at Morpeace', type: 'video', poster: 'media/property/img-20260208-wa0011.jpg' },
      { src: 'media/property/bed.jpeg', alt: 'Bed', type: 'image' },
      { src: 'media/property/lobby.jpeg', alt: 'Lobby', type: 'image' },
      { src: 'media/property/meditation-room-circle.jpeg', alt: 'Meditation room circle', type: 'image' },
      { src: 'media/property/mountain-in-bg.jpeg', alt: 'Mountain in bg', type: 'image' },
      { src: 'media/property/swimming-pool.jpeg', alt: 'Swimming pool', type: 'image' },
      { src: 'media/property/at-night-lake-view.jpeg', alt: 'Lake view', type: 'image' },
      { src: 'media/property/at-night-pool-view.jpeg', alt: 'Pool view', type: 'image' },
      { src: 'media/property/at-night-top-view.jpeg', alt: 'Top view', type: 'image' },
    ],
  },
  {
    id: 'flora',
    label: 'Flora',
    heading: 'Blooms & Botanicals',
    description: 'A shifting palette of native and cultivated blooms across the seasons.',
    items: [
      { src: 'media/flowers/angel-s-trumpets-brugmansia.jpeg', alt: 'Angel\'s Trumpets Brugmansia', type: 'image' },
      { src: 'media/flowers/hibiscus-mutabilis-pink.jpeg', alt: 'Hibiscus mutabilis pink', type: 'image' },
      { src: 'media/flowers/hibiscus-mutabilis-white.jpeg', alt: 'Hibiscus mutabilis white', type: 'image' },
      { src: 'media/flowers/img-20260216-wa0025.jpg', alt: 'Flowers at Morpeace', type: 'image' },
      { src: 'media/flowers/img-20260218-wa0001.jpg', alt: 'Flowers at Morpeace', type: 'image' },
      { src: 'media/flowers/img-20260218-wa0003.jpg', alt: 'Flowers at Morpeace', type: 'image' },
      { src: 'media/flowers/img-20260218-wa0006.jpg', alt: 'Flowers at Morpeace', type: 'image' },
      { src: 'media/flowers/img-20260218-wa0009.jpg', alt: 'Flowers at Morpeace', type: 'image' },
      { src: 'media/flowers/img-20260218-wa0010.jpg', alt: 'Flowers at Morpeace', type: 'image' },
      { src: 'media/flowers/img-20260218-wa0020.jpg', alt: 'Flowers at Morpeace', type: 'image' },
      { src: 'media/flowers/img-20260218-wa0021.jpg', alt: 'Flowers at Morpeace', type: 'image' },
      { src: 'media/flowers/img-20260218-wa0023.jpg', alt: 'Flowers at Morpeace', type: 'image' },
      { src: 'media/flowers/whatsapp-image-2026-02-17-at-11-16-34-pm-1.jpeg', alt: 'Flowers at Morpeace', type: 'image' },
      { src: 'media/flowers/whatsapp-image-2026-02-17-at-11-16-34-pm-4.jpeg', alt: 'Flowers at Morpeace', type: 'image' },
      { src: 'media/flowers/whatsapp-image-2026-02-17-at-11-16-34-pm-5.jpeg', alt: 'Flowers at Morpeace', type: 'image' },
      { src: 'media/flowers/whatsapp-image-2026-02-17-at-11-16-34-pm-6.jpeg', alt: 'Flowers at Morpeace', type: 'image' },
      { src: 'media/flowers/whatsapp-image-2026-02-17-at-11-16-34-pm.jpeg', alt: 'Flowers at Morpeace', type: 'image' },
      { src: 'media/flowers/whatsapp-video-2026-02-17-at-11-16-34-pm-1.mp4', alt: 'Flowers at Morpeace', type: 'video', poster: 'media/flowers/angel-s-trumpets-brugmansia.jpeg' },
      { src: 'media/flowers/whatsapp-video-2026-02-17-at-11-16-34-pm.mp4', alt: 'Flowers at Morpeace', type: 'video', poster: 'media/flowers/angel-s-trumpets-brugmansia.jpeg' },
      { src: 'media/flowers/ajan-flowers.jpeg', alt: 'Ajan flowers', type: 'image' },
      { src: 'media/flowers/bel.jpeg', alt: 'Bel', type: 'image' },
      { src: 'media/flowers/morning-glory.jpeg', alt: 'Morning glory', type: 'image' },
      { src: 'media/flowers/water-liiy.jpeg', alt: 'Water liiy', type: 'image' },
    ],
  },
  {
    id: 'trees',
    label: 'Trees',
    heading: 'Canopy & Bark',
    description: 'The standing residents — bamboo, mango, and the older companions of the land.',
    items: [
      { src: 'media/trees/whatsapp-image-2026-02-06-at-11-18-14-pm-1.jpeg', alt: 'Trees at Morpeace', type: 'image' },
      { src: 'media/trees/whatsapp-image-2026-02-06-at-11-18-14-pm.jpeg', alt: 'Trees at Morpeace', type: 'image' },
      { src: 'media/trees/bamboo.jpeg', alt: 'Bamboo', type: 'image' },
      { src: 'media/trees/mango-flowring-1.jpeg', alt: 'Mango flowring 1', type: 'image' },
      { src: 'media/trees/mango-flowring-2.jpeg', alt: 'Mango flowring 2', type: 'image' },
      { src: 'media/trees/mango-flowring.jpeg', alt: 'Mango flowring', type: 'image' },
    ],
  },
  {
    id: 'orchard',
    label: 'Orchard',
    heading: 'Fruit & Harvest',
    description: 'Mangoes ripening, the first sweet taste of summer.',
    items: [
      { src: 'media/fruits/whatsapp-image-2026-02-06-at-11-18-14-pm-2.jpeg', alt: 'Fruits at Morpeace', type: 'image' },
      { src: 'media/fruits/whatsapp-image-2026-02-06-at-11-18-14-pm-3.jpeg', alt: 'Fruits at Morpeace', type: 'image' },
      { src: 'media/fruits/whatsapp-image-2026-02-06-at-11-18-15-pm-1.jpeg', alt: 'Fruits at Morpeace', type: 'image' },
      { src: 'media/fruits/whatsapp-image-2026-02-06-at-11-18-15-pm.jpeg', alt: 'Fruits at Morpeace', type: 'image' },
      { src: 'media/fruits/whatsapp-image-2026-02-06-at-11-18-16-pm-1.jpeg', alt: 'Fruits at Morpeace', type: 'image' },
      { src: 'media/fruits/whatsapp-image-2026-02-06-at-11-18-16-pm.jpeg', alt: 'Fruits at Morpeace', type: 'image' },
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
      { src: 'media/dining-and-food/whatsapp-video-2026-02-16-at-10-56-35-pm.mp4', alt: 'Dining at Morpeace', type: 'video', poster: 'media/property/lobby.jpeg' },
      { src: 'media/dining-and-food/whatsapp-video-2026-02-16-at-10-56-38-pm.mp4', alt: 'Dining at Morpeace', type: 'video', poster: 'media/property/lobby.jpeg' },
    ],
  },
  {
    id: 'wildlife',
    label: 'Wildlife',
    heading: 'Creatures of Morpeace',
    description: 'The companions that arrived as the land settled.',
    items: [
      { src: 'media/animals/gecko.jpeg', alt: 'Gecko', type: 'image' },
      { src: 'media/animals/tilapia.jpg', alt: 'Tilapia', type: 'image' },
    ],
  },
  {
    id: 'aerial',
    label: 'Aerial',
    heading: 'From Above',
    description: 'A drone sweep across the land — the shape of Morpeace from the sky.',
    items: [
      { src: 'media/aerial-property-drone.mp4', alt: 'Drone sweep over Morpeace', type: 'video', poster: 'media/property/mountain-in-bg.jpeg' },
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
