import { Link } from 'react-router-dom'
import type { Icon } from '@phosphor-icons/react'
import { House, BowlFood, Barn, Tree, HandsPraying } from '@phosphor-icons/react'
import { whatsappLink } from '../../data/contact'

const PALETTE = {
  ink: '#1E3E4D',
  sand: '#C1B589',
  aqua: '#24BEB9',
  blue: '#0E7EC0',
  deep: '#183340',
  cream: '#F5F1E3',
}

const INCLUSIONS: { icon: Icon; title: string; detail: string }[] = [
  { icon: House, title: 'A single room — or the whole villa', detail: '3 rooms · up to 10 guests · whole-villa buyouts welcome' },
  { icon: BowlFood, title: 'Breakfast, high tea, lunch & dinner', detail: 'All four meals included with every stay' },
  { icon: Barn, title: 'Farm-to-table, slow-cooked', detail: 'Veg, chicken, mutton, fish — rooted in the land' },
  { icon: Tree, title: 'Pool, forest walks, meditation cave, games', detail: 'Use any, skip any — the land is yours for the stay' },
  { icon: HandsPraying, title: 'Housekeeping & caretaker families on-site', detail: 'Help arriving quietly, always within reach' },
]

export default function InclusionsStrip() {
  const roomMessage = "Hi Morpeace — I'd like to check availability. Can you share what's included for my dates?"
  return (
    <section
      id="inclusions"
      className="py-14 md:py-20 px-6 md:px-10 scroll-mt-28"
      style={{ backgroundColor: '#F0E6CD' }}
    >
      <div className="max-w-6xl mx-auto">
        <div data-animate className="mb-8 md:mb-10 text-center">
          <p
            className="font-display text-sm md:text-base tracking-[0.3em] uppercase mb-3"
            style={{ color: '#0E5D6E' }}
          >
            What's included
          </p>
          <h2
            className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight mb-4"
            style={{ color: PALETTE.ink }}
          >
            Book a single room, or the whole villa.
          </h2>
          <p
            className="font-body text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: `${PALETTE.ink}cc` }}
          >
            Every stay — solo, couple, family, or full-villa buyout — comes with all four meals, full access to the land, and people on hand to help when you need it. Pet friendly.
          </p>
        </div>

        <div data-animate className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4">
          {INCLUSIONS.map((item) => {
            const IconCmp = item.icon
            return (
              <div
                key={item.title}
                className="p-5 rounded-xl"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: `1px solid ${PALETTE.ink}1a`,
                  boxShadow: '0 8px 24px rgba(30, 62, 77, 0.06)',
                }}
              >
                <IconCmp size={26} weight="thin" className="mb-2.5" style={{ color: PALETTE.aqua }} aria-hidden />
                <h3
                  className="font-display text-base md:text-lg mb-1 leading-snug"
                  style={{ color: PALETTE.ink }}
                >
                  {item.title}
                </h3>
                <p
                  className="font-body text-sm md:text-base leading-relaxed"
                  style={{ color: `${PALETTE.ink}b3` }}
                >
                  {item.detail}
                </p>
              </div>
            )
          })}
        </div>

        <div data-animate className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <Link
            to="/menu"
            className="font-display text-sm md:text-base tracking-[0.2em] uppercase underline underline-offset-4 decoration-1 hover:decoration-2 transition-all"
            style={{ color: '#0E5D6E' }}
          >
            See the full menu →
          </Link>
          <span className="hidden sm:inline" style={{ color: `${PALETTE.ink}55` }}>·</span>
          <a
            href={whatsappLink(roomMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-sm md:text-base tracking-[0.2em] uppercase underline underline-offset-4 decoration-1 hover:decoration-2 transition-all"
            style={{ color: PALETTE.blue }}
          >
            Questions? WhatsApp us →
          </a>
        </div>
      </div>
    </section>
  )
}
