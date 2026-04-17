// All landing-page & site media, grouped into gallery sections

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
    id: 'forest',
    label: 'The Forest',
    heading: 'Living Landscape',
    description: 'The restored forest at Morpeace — trails, canopy, and the green silence beneath.',
    items: [
      { src: 'photos/forest-path.jpeg', alt: 'Forest path at Morpeace', type: 'image' },
      { src: 'photos/forest-dense-vegetation.jpeg', alt: 'Dense forest vegetation', type: 'image' },
      { src: 'photos/forest-garden-lantana.jpeg', alt: 'Forest garden with lantana', type: 'image' },
    ],
  },
  {
    id: 'flora',
    label: 'Flora',
    heading: 'Blooms & Botanicals',
    description: 'A shifting palette of native and cultivated blooms across the seasons.',
    items: [
      { src: 'photos/flowers-vivid-pink.jpeg', alt: 'Vivid pink flowers', type: 'image' },
      { src: 'photos/flowers-plumeria.jpeg', alt: 'Plumeria blossoms', type: 'image' },
      { src: 'photos/flowers-pink-spread.jpeg', alt: 'Pink flowers spread across the garden', type: 'image' },
      { src: 'photos/flowers-pink-banana.jpeg', alt: 'Pink flowers beside banana leaves', type: 'image' },
      { src: 'photos/flowers-purple-pink.jpeg', alt: 'Purple and pink flowers', type: 'image' },
      { src: 'photos/flowers-purple-foliage.jpeg', alt: 'Purple flowers among foliage', type: 'image' },
      { src: 'photos/flowers-mixed-garden.jpeg', alt: 'Mixed garden blooms', type: 'image' },
      { src: 'photos/flowers-salvia-banana.jpeg', alt: 'Salvia beside banana', type: 'image' },
      { src: 'photos/flower-nursery.jpeg', alt: 'The flower nursery', type: 'image' },
      { src: 'photos/flower-red-closeup.jpeg', alt: 'Red flower close-up', type: 'image' },
    ],
  },
  {
    id: 'orchard',
    label: 'Orchard',
    heading: 'Fruit & Harvest',
    description: 'Mangoes, chikoo, strawberries — the fruit-bearing trees that feed the land and the kitchen.',
    items: [
      { src: 'photos/mango-tree-laden.jpeg', alt: 'Mango tree laden with fruit', type: 'image' },
      { src: 'photos/mango-tree-ripe.jpeg', alt: 'Ripe mango tree', type: 'image' },
      { src: 'photos/mango-tree-green.jpeg', alt: 'Green mango tree', type: 'image' },
      { src: 'photos/mangoes-sunlight.jpeg', alt: 'Mangoes in sunlight', type: 'image' },
      { src: 'photos/chikoo-tree.jpeg', alt: 'Chikoo tree', type: 'image' },
      { src: 'photos/strawberries.jpeg', alt: 'Strawberries from the farm', type: 'image' },
    ],
  },
  {
    id: 'wildlife',
    label: 'Wildlife',
    heading: 'Creatures of Morpeace',
    description: 'Turtles, fish — companions who arrived when the land was ready.',
    items: [
      { src: 'photos/turtle.jpeg', alt: 'Resident turtle', type: 'image' },
      { src: 'photos/fish-pond.jpeg', alt: 'Fish in the pond', type: 'image' },
    ],
  },
  {
    id: 'aerial',
    label: 'Aerial',
    heading: 'From Above',
    description: 'Drone sweeps across the land — the shape of Morpeace from the sky.',
    items: [
      { src: 'photos/drone-shot.mp4', alt: 'Drone sweep over Morpeace', type: 'video', poster: 'photos/forest-dense-vegetation.jpeg' },
      { src: 'photos/meditation-drone-1.mp4', alt: 'Meditation drone view 1', type: 'video' },
      { src: 'photos/meditation-drone-2.mp4', alt: 'Meditation drone view 2', type: 'video' },
      { src: 'photos/roots-growing.mp4', alt: 'Roots growing', type: 'video' },
    ],
  },
]
