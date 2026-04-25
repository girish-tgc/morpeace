import type { Icon } from '@phosphor-icons/react'
import {
  TreeEvergreen,
  SwimmingPool,
  FlowerLotus,
  Feather,
  MoonStars,
  Bird,
  Campfire,
  Cow,
  Fish,
  Orange,
  PingPong,
  DiceSix,
  BookOpen,
  MicrophoneStage,
  Lighthouse,
  Tractor,
  Carrot,
} from '@phosphor-icons/react'

const PALETTE = {
  ink: '#1E3E4D',
  sand: '#C1B589',
  aqua: '#24BEB9',
  deep: '#183340',
  cream: '#F5F1E3',
}

interface Activity {
  icon: Icon
  label: string
}

const ON_SITE: Activity[] = [
  { icon: TreeEvergreen, label: 'Forest walks' },
  { icon: SwimmingPool, label: 'Swimming pool' },
  { icon: FlowerLotus, label: 'Meditation cave' },
  { icon: Feather, label: 'Hammock rest' },
  { icon: MoonStars, label: 'Stargazing' },
  { icon: Bird, label: 'Bird watching' },
  { icon: Campfire, label: 'Bonfire evenings' },
  { icon: FlowerLotus, label: 'Yoga, on request' },
  { icon: Cow, label: 'Cow feeding' },
  { icon: Fish, label: 'Fish feeding' },
  { icon: Orange, label: 'Fruit plucking (seasonal)' },
  { icon: PingPong, label: 'Table tennis' },
  { icon: DiceSix, label: 'Board games' },
  { icon: BookOpen, label: 'Books for all' },
  { icon: MicrophoneStage, label: 'Karaoke' },
  { icon: Lighthouse, label: 'Watchtower climb' },
  { icon: Tractor, label: 'Farm tour' },
  { icon: Carrot, label: 'Kitchen garden walk' },
]

export default function ActivitiesSection() {
  return (
    <section
      id="things-to-do"
      className="py-20 md:py-28 px-6 md:px-10 scroll-mt-28"
      style={{ backgroundColor: `${PALETTE.deep}cc` }}
    >
      <div className="max-w-6xl mx-auto">
        <div data-animate className="mb-10 md:mb-14 text-center">
          <p
            className="font-display text-sm md:text-base tracking-[0.3em] uppercase mb-3"
            style={{ color: PALETTE.aqua }}
          >
            Things to do here
          </p>
          <h2
            className="font-display text-4xl sm:text-5xl md:text-6xl mb-5 leading-tight"
            style={{ color: PALETTE.cream }}
          >
            Pick anything. Skip anything.
          </h2>
          <p
            className="font-body text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: `${PALETTE.sand}d9` }}
          >
            Everything below is available at no extra cost. Mornings are yours — sign up to nothing, miss nothing.
          </p>
        </div>

        <div
          data-animate
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3"
        >
          {ON_SITE.map((a) => {
            const IconCmp = a.icon
            return (
              <div
                key={a.label}
                className="px-4 py-4 rounded-xl flex items-center gap-3"
                style={{
                  backgroundColor: `${PALETTE.ink}b3`,
                  border: `1px solid ${PALETTE.aqua}26`,
                }}
              >
                <IconCmp
                  size={24}
                  weight="thin"
                  className="flex-shrink-0"
                  style={{ color: PALETTE.aqua }}
                  aria-hidden
                />
                <span
                  className="font-body text-sm md:text-base leading-tight"
                  style={{ color: `${PALETTE.sand}e6` }}
                >
                  {a.label}
                </span>
              </div>
            )
          })}
        </div>

        <div data-animate className="mt-8 md:mt-10 text-center">
          <a
            href="#nearby"
            className="font-display text-sm md:text-base tracking-[0.2em] uppercase underline underline-offset-4 decoration-1 hover:decoration-2 transition-all"
            style={{ color: PALETTE.aqua }}
          >
            Off-site: Kaas Plateau, Thoseghar, Sajjangad →
          </a>
        </div>
      </div>
    </section>
  )
}
