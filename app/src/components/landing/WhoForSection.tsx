import PairedBookingCTAs from '../nav/PairedBookingCTAs'

const PALETTE = {
  ink: '#1E3E4D',
  sand: '#C1B589',
  aqua: '#24BEB9',
  deep: '#183340',
  cream: '#F5F1E3',
}

type Intent = 'To pause' | 'To explore' | 'To reconnect' | 'To celebrate' | 'On the way'

interface WhoCard {
  intent: Intent
  title: string
  description: string
  meta: string
  mode: 'room' | 'villa' | 'either'
  whatsappPrefill: string
}

const CARDS: WhoCard[] = [
  {
    intent: 'To pause',
    title: 'Solo, or a couple, for a room',
    description:
      'Arrive with a backpack. A single room, the forest, the pool, the meditation cave. The villa carries on around you.',
    meta: '1–2 guests · book a room',
    mode: 'room',
    whatsappPrefill:
      "Hi Morpeace — planning a solo/couple stay in a single room. Could you check availability?",
  },
  {
    intent: 'To explore',
    title: 'Weekend friends from Pune or Mumbai',
    description:
      'Two hours from Pune. Friday evening in, Sunday slow out. Privacy, forest silence, the pool to yourselves.',
    meta: '2–4 guests · room or villa',
    mode: 'either',
    whatsappPrefill:
      "Hi Morpeace — planning a weekend trip for a small group. Could you share room + villa options?",
  },
  {
    intent: 'To reconnect',
    title: 'A family gathering',
    description:
      'Grandparents, cousins, kids — space to be loud together and quiet apart. Three rooms, shared meals, a lake and a pool.',
    meta: '6–10 guests · book the villa',
    mode: 'villa',
    whatsappPrefill:
      "Hi Morpeace — planning a family get-together, looking at the whole villa. Could you check availability?",
  },
  {
    intent: 'To celebrate',
    title: 'A small offsite or celebration',
    description:
      'Meditation cave, table-tennis, unhurried meals. Up to 50 for a day event, 10 overnight. No projectors, by design.',
    meta: '6–10 overnight · book the villa',
    mode: 'villa',
    whatsappPrefill:
      "Hi Morpeace — planning a team offsite / celebration. Could you share options for up to ~50 guests?",
  },
  {
    intent: 'On the way',
    title: 'A pit stop on the Mumbai–Goa drive',
    description:
      'Break the long road. One forest night between city and coast — pull off the highway, sleep in the canopy, breakfast slow, carry on to Goa.',
    meta: '1–2 nights · room or villa',
    mode: 'either',
    whatsappPrefill:
      "Hi Morpeace — planning to stop over on our Mumbai–Goa drive. Could you check availability?",
  },
]

export default function WhoForSection() {
  return (
    <section
      id="who-for"
      className="py-20 md:py-28 px-6 md:px-10 scroll-mt-28"
    >
      <div className="max-w-6xl mx-auto">
        <div data-animate className="mb-10 md:mb-14 text-center">
          <p
            className="font-display text-sm md:text-base tracking-[0.3em] uppercase mb-3"
            style={{ color: PALETTE.aqua }}
          >
            Why you might come
          </p>
          <h2
            className="font-display text-4xl md:text-6xl mb-5 leading-tight"
            style={{ color: PALETTE.cream }}
          >
            Many reasons, one forest.
          </h2>
          <p
            className="font-body text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: `${PALETTE.sand}d9` }}
          >
            Guests arrive with different intents &mdash; to pause, to explore, to reconnect, to celebrate, or simply to break a Mumbai&ndash;Goa drive. The land holds each of them differently.
          </p>
        </div>

        <div data-animate className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="p-6 rounded-2xl flex flex-col"
              style={{
                backgroundColor: `${PALETTE.ink}cc`,
                border: `1px solid ${PALETTE.aqua}33`,
              }}
            >
              <p
                className="font-display text-[11px] md:text-xs tracking-[0.22em] uppercase mb-2.5"
                style={{ color: '#F5EBD0' }}
              >
                {card.intent}
              </p>
              <h3
                className="font-display text-xl md:text-2xl leading-snug mb-3"
                style={{ color: PALETTE.cream }}
              >
                {card.title}
              </h3>
              <p
                className="font-body text-base md:text-lg leading-relaxed mb-4 flex-grow"
                style={{ color: `${PALETTE.sand}d9` }}
              >
                {card.description}
              </p>
              <p
                className="font-display text-[11px] md:text-xs tracking-[0.18em] uppercase mb-4"
                style={{ color: PALETTE.aqua }}
              >
                {card.meta}
              </p>
            </div>
          ))}
        </div>

        <div data-animate className="mt-10 md:mt-14 flex justify-center">
          <PairedBookingCTAs size="md" tone="peacock" />
        </div>
      </div>
    </section>
  )
}
