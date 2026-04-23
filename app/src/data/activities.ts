import type { Icon } from '@phosphor-icons/react'
import {
  Cow,
  Fish,
  Orange,
  Feather,
  MoonStars,
  PersonSimpleHike,
  SwimmingPool,
  PingPong,
  DiceSix,
  Flame,
  PottedPlant,
  Drop,
  Recycle,
  Trash,
  Plant,
} from '@phosphor-icons/react'

export type ActivityItem = { icon: Icon; title: string; description: string }

export const LAND_ACTIVITIES: ActivityItem[] = [
  { icon: Cow, title: 'Cow Feeding', description: 'Spend time with the cows in the morning. No rush, no audience.' },
  { icon: Fish, title: 'Fish Feeding', description: 'Sit by the water and feed the fish. A surprisingly calming ritual.' },
  { icon: Orange, title: 'Fruit Plucking', description: "Pick seasonal fruit straight from the trees when it's ready." },
  { icon: Feather, title: 'Hammock Rest', description: 'Find a spot, lie down, and watch the forest move above you.' },
  { icon: MoonStars, title: 'Sky Gazing', description: "Clear skies at night. Stars you won't see from the city." },
  { icon: PersonSimpleHike, title: 'Forest Walk', description: 'Guided or solo trails through the restored forest.' },
]

export const RECREATION_ACTIVITIES: ActivityItem[] = [
  { icon: SwimmingPool, title: 'Swimming Pool', description: 'Open-air pool surrounded by greenery. Open all day.' },
  { icon: PingPong, title: 'Table Tennis', description: 'Indoor table tennis for friendly competition.' },
  { icon: DiceSix, title: 'Board Games', description: 'A collection of classics. Great for evenings with family or friends.' },
]

export const SUSTAINABILITY_ITEMS: ActivityItem[] = [
  { icon: Flame, title: 'Biochar', description: 'Returning life to the soil through carbon-rich amendments.' },
  { icon: PottedPlant, title: 'Shed-Net Greenhouse', description: 'Nurturing delicate growth in controlled environments.' },
  { icon: Drop, title: 'Hydroponics', description: 'Exploring water-led cultivation methods.' },
  { icon: Recycle, title: 'Biogas', description: 'Transforming organic waste into energy, quietly.' },
  { icon: Trash, title: 'Zero-Waste Incinerator', description: 'Designed to leave nothing behind.' },
  { icon: Plant, title: 'Open Growing Structures', description: 'Working with the land, not against it.' },
]
