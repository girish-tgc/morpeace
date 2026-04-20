import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead from '../components/SeoHead'

gsap.registerPlugin(ScrollTrigger)

const BASE = import.meta.env.BASE_URL
const BOOKING_URL =
  'https://www.stayvista.com/villa/rustic-haven?adult=6&child=0&infant=0&pax_selected=false&rooms_booked=3&reference_number=prop673b7f18be369lqw7kij&from=card'
const MAPS_URL =
  'https://www.google.com/maps/place/StayVista+at+Rustic+Haven+%7C+Villa+with+Private+Pool+in+Satara/@17.6105128,73.9891524,17z'

// Peacock palette — sourced from the brand reference image
const PALETTE = {
  ink: '#1E3E4D',    // deep teal — primary dark
  sand: '#C1B589',   // warm cream/gold — soft accent
  aqua: '#24BEB9',   // turquoise — bright accent
  blue: '#0E7EC0',   // peacock blue — secondary
  deep: '#183340',   // half-shade darker for banding
  cream: '#F5F1E3',  // headline near-white
}

const NAV_SECTIONS = [
  { id: 'what', label: 'What' },
  { id: 'day', label: 'A day' },
  { id: 'forest', label: 'Forest' },
  { id: 'stay', label: 'Stay' },
  { id: 'children', label: 'Children' },
  { id: 'meditation', label: 'Meditation' },
  { id: 'food', label: 'Food' },
  { id: 'celebrations', label: 'Celebrations' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'nearby', label: 'Nearby' },
  { id: 'location', label: 'Location' },
]

const FACTS = [
  { k: '10', v: 'acres of regenerated forest' },
  { k: '4', v: 'rooms · sleeps up to 10' },
  { k: '40+', v: 'heirloom mango varieties' },
  { k: '2 hr', v: 'drive from Pune' },
]

const DAY_BEATS = [
  'You wake to birds, not alarms.',
  'Breathe deeply — AQI here typically ranges 10–50.',
  'Meals arrive fresh, seasonal, often gathered from the land.',
  'Your room, modern comforts set gently within nature.',
  'Nothing is rushed. Nothing is required.',
]

const LAND_ACTIVITIES = [
  { icon: '🐄', title: 'Cow Feeding', description: 'Spend time with the cows in the morning. No rush, no audience.' },
  { icon: '🐟', title: 'Fish Feeding', description: 'Sit by the water and feed the fish. A surprisingly calming ritual.' },
  { icon: '🍋', title: 'Fruit Plucking', description: 'Pick seasonal fruit straight from the trees when it\'s ready.' },
  { icon: '🌿', title: 'Hammock Rest', description: 'Find a spot, lie down, and watch the forest move above you.' },
  { icon: '🌅', title: 'Sky Gazing', description: 'Clear skies at night. Stars you won\'t see from the city.' },
  { icon: '🚶', title: 'Forest Walk', description: 'Guided or solo trails through the restored forest.' },
]

const RECREATION_ACTIVITIES = [
  { icon: '🏊', title: 'Swimming Pool', description: 'Open-air pool surrounded by greenery. Open all day.' },
  { icon: '🏓', title: 'Table Tennis', description: 'Indoor table tennis for friendly competition.' },
  { icon: '🎲', title: 'Board Games', description: 'A collection of classics. Great for evenings with family or friends.' },
]

const SUSTAINABILITY_ITEMS = [
  { icon: '🔥', title: 'Biochar', description: 'Returning life to the soil through carbon-rich amendments.' },
  { icon: '🌱', title: 'Shed-Net Greenhouse', description: 'Nurturing delicate growth in controlled environments.' },
  { icon: '💧', title: 'Hydroponics', description: 'Exploring water-led cultivation methods.' },
  { icon: '♻️', title: 'Biogas', description: 'Transforming organic waste into energy, quietly.' },
  { icon: '🗑️', title: 'Zero-Waste Incinerator', description: 'Designed to leave nothing behind.' },
  { icon: '🌾', title: 'Open Growing Structures', description: 'Working with the land, not against it.' },
]

const GALLERY: { src: string; alt: string; span?: string }[] = [
  { src: 'media/property/at-night-lake-view.webp', alt: 'Villa reflected on the lake at dusk', span: 'md:col-span-2 md:row-span-2' },
  { src: 'media/property/swimming-pool.webp', alt: 'Open-air pool surrounded by forest' },
  { src: 'media/rustic-haven/rh-05.webp', alt: 'Interior of the villa' },
  { src: 'photos/forest-path.webp', alt: 'A path through the forest' },
  { src: 'media/property/meditation-room-circle.webp', alt: 'The circular meditation room' },
  { src: 'photos/mangoes-sunlight.webp', alt: 'Mangoes in the afternoon light' },
  { src: 'media/kids/kids1.webp', alt: 'Children playing with clay figurines' },
]

const NEARBY_PLACES = [
  { name: 'Kaas Plateau', meta: 'Seasonal · UNESCO site' },
  { name: 'Kaas Lake', meta: 'Quiet water beside the plateau' },
  { name: 'Thoseghar Waterfalls', meta: 'Monsoon season' },
  { name: 'Vajrai Waterfall', meta: 'Among India\u2019s tallest · monsoon' },
  { name: 'Sajjangad', meta: 'Fort & Swami Ramdas shrine' },
  { name: 'Ajinkyatara Fort', meta: 'Hilltop panoramic views' },
  { name: 'Koyna Dam', meta: 'Scenic · permit required' },
  { name: 'Mayani Bird Sanctuary', meta: '400+ species · winter' },
]

// ── tiny helpers for consistent visual language ───────────────────────────
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-display text-sm md:text-base tracking-[0.3em] uppercase mb-4" style={{ color: PALETTE.aqua }}>
      {children}
    </p>
  )
}

function Heading({ children, large }: { children: React.ReactNode; large?: boolean }) {
  return (
    <h2
      className={`font-display ${large ? 'text-5xl md:text-7xl' : 'text-4xl md:text-6xl'} mb-6 leading-tight`}
      style={{ color: PALETTE.cream }}
    >
      {children}
    </h2>
  )
}

function ActivityGridItem({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div
      className="p-6 rounded-2xl transition-transform duration-300 hover:-translate-y-1"
      style={{
        backgroundColor: `${PALETTE.ink}cc`,
        border: `1px solid ${PALETTE.aqua}33`,
      }}
    >
      <div className="text-3xl mb-3" aria-hidden>
        {icon}
      </div>
      <h3 className="font-display text-xl md:text-2xl mb-2" style={{ color: PALETTE.cream }}>
        {title}
      </h3>
      <p className="font-body text-lg md:text-xl leading-relaxed" style={{ color: `${PALETTE.sand}cc` }}>
        {description}
      </p>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────

export default function LandingMockPage() {
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      const els = pageRef.current?.querySelectorAll('[data-animate]')
      if (!els) return
      if (prefersReduced) {
        gsap.set(els, { opacity: 1, y: 0 })
        return
      }
      els.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' },
          },
        )
      })
    }, pageRef)
    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={pageRef}
      className="min-h-screen"
      style={{
        backgroundColor: PALETTE.ink,
        color: PALETTE.sand,
        background: `linear-gradient(180deg, ${PALETTE.ink} 0%, ${PALETTE.deep} 55%, ${PALETTE.ink} 100%)`,
      }}
    >
      <SeoHead
        title="Morpeace — A Forest Villa near Satara | Boutique Stay in the Western Ghats"
        description="A boutique forest villa on 10 acres in the Western Ghats. Private pool, lake, 1,500+ native trees, farm-to-table meals. Sleeps up to 10. Book your stay at Morpeace."
        path="/"
      />

      {/* ============================================= HERO */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden">
        <img
          src={`${BASE}media/property/at-night-lake-view.webp`}
          alt="Morpeace villa reflected on the lake at dusk"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Light tonal wash — keeps the dusk lake photo visible */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(30,62,77,0.35) 0%, rgba(30,62,77,0.2) 45%, rgba(30,62,77,0.7) 100%)',
          }}
        />
        {/* Soft localized darken behind the text column only */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 55% at 28% 55%, rgba(6,18,26,0.55) 0%, rgba(6,18,26,0.25) 45%, transparent 75%)',
          }}
        />
        {/* Aqua glow kept as a subtle accent, away from text */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 40% 35% at 85% 85%, rgba(36,190,185,0.14) 0%, transparent 65%)',
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 py-24 md:py-32 w-full">
          <div data-animate>
            <span
              className="font-display inline-block px-4 py-1.5 rounded-full text-sm md:text-base tracking-[0.25em] uppercase mb-6"
              style={{
                backgroundColor: `${PALETTE.aqua}22`,
                color: PALETTE.aqua,
                border: `1px solid ${PALETTE.aqua}55`,
              }}
            >
              Western Ghats · Satara, Maharashtra
            </span>
            <h1
              className="font-display text-5xl sm:text-6xl md:text-8xl leading-[1.05] mb-6"
              style={{
                color: PALETTE.cream,
                textShadow:
                  '0 2px 4px rgba(0,0,0,0.95), 0 6px 24px rgba(0,0,0,0.8), 0 0 12px rgba(0,0,0,0.7)',
              }}
            >
              A stay inside a forest.
            </h1>
            <p
              className="font-body text-xl md:text-3xl max-w-3xl leading-relaxed mb-10"
              style={{
                color: '#F5EBD0',
                textShadow:
                  '0 1px 2px rgba(0,0,0,0.95), 0 3px 14px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.6)',
              }}
            >
              Morpeace is a boutique villa on ten regenerated acres in the Western Ghats — a private
              pool, a lake, 1,500+ native trees, and food grown on the land. Sleeps up to 10.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-4 rounded-full font-display tracking-[0.2em] uppercase text-lg md:text-xl transition-transform duration-300 hover:scale-[1.02]"
                style={{ backgroundColor: PALETTE.aqua, color: PALETTE.ink, boxShadow: `0 10px 30px ${PALETTE.aqua}55` }}
              >
                Book your stay
              </a>
              <a
                href="#what"
                className="inline-flex items-center justify-center px-10 py-4 rounded-full font-display tracking-[0.2em] uppercase text-lg md:text-xl transition-colors duration-300"
                style={{ border: `1px solid ${PALETTE.sand}66`, color: PALETTE.sand }}
              >
                What is Morpeace?
              </a>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm tracking-[0.25em] uppercase opacity-70"
          style={{ color: PALETTE.sand }}
        >
          scroll to explore
        </div>
      </section>

      {/* ============================================= FACTS STRIP */}
      <section id="what" className="py-14 md:py-20 px-6 md:px-10 scroll-mt-28" style={{ backgroundColor: PALETTE.deep }}>
        <div className="max-w-6xl mx-auto">
          <div data-animate className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {FACTS.map((f) => (
              <div key={f.v} className="text-center">
                <p className="font-display text-5xl md:text-6xl mb-3" style={{ color: PALETTE.aqua }}>
                  {f.k}
                </p>
                <p className="font-body text-base md:text-lg leading-snug" style={{ color: `${PALETTE.sand}e6` }}>
                  {f.v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================= ANCHOR NAV (inline, palette-matched) */}
      <nav
        className="sticky top-0 z-30 backdrop-blur-md"
        style={{
          backgroundColor: `${PALETTE.ink}e6`,
          borderBottom: `1px solid ${PALETTE.aqua}22`,
        }}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 overflow-x-auto">
          <ul className="flex gap-1 md:gap-2 py-3 whitespace-nowrap">
            {NAV_SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="inline-block px-4 py-2 rounded-full text-sm md:text-base font-medium transition-colors"
                  style={{ color: `${PALETTE.sand}d9` }}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ============================================= A DAY HERE */}
      <section id="day" className="relative py-20 md:py-28 px-6 md:px-10 overflow-hidden scroll-mt-28">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 55% at 50% 50%, rgba(14,126,192,0.14) 0%, transparent 70%)',
          }}
        />
        <div data-animate className="relative z-10 max-w-3xl mx-auto text-center">
          <Eyebrow>A day at Morpeace</Eyebrow>
          <Heading>Unhurried. Unscripted. Real.</Heading>
          <div
            className="font-body text-lg md:text-2xl leading-relaxed space-y-4"
            style={{ color: `${PALETTE.sand}e6` }}
          >
            {DAY_BEATS.map((b, i) => (
              <p key={i}>{b}</p>
            ))}
            <p className="pt-2 italic">You simply arrive… and begin to notice again.</p>
          </div>
        </div>
      </section>

      {/* ============================================= FOREST */}
      <section
        id="forest"
        className="relative min-h-[70vh] flex items-center overflow-hidden scroll-mt-28"
      >
        <img
          src={`${BASE}photos/forest-path.webp`}
          alt="A forest path at Morpeace"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(90deg, ${PALETTE.ink}e6 0%, ${PALETTE.deep}99 55%, transparent 100%)`,
          }}
        />
        <div data-animate className="relative z-10 max-w-xl px-8 md:px-16 py-20">
          <Eyebrow>The forest</Eyebrow>
          <Heading>Walk without a destination.</Heading>
          <p className="font-body text-lg md:text-xl leading-relaxed mb-3" style={{ color: `${PALETTE.sand}d9` }}>
            Over 1,500 native trees across ten regenerated acres. Walk the trails, climb the
            watchtower, or sit and watch the birds return.
          </p>
          <p className="font-body text-lg md:text-xl leading-relaxed" style={{ color: `${PALETTE.sand}b3` }}>
            Forest walks, hammock rest, sky gazing, cow and fish feeding, and seasonal fruit plucking —
            join in when you feel like it.
          </p>
        </div>
      </section>

      {/* ============================================= LIFE ON THE LAND (cards) */}
      <section className="py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div data-animate className="mb-8 md:mb-12 text-center">
            <Eyebrow>Life on the land</Eyebrow>
            <Heading>The simple things.</Heading>
          </div>
          <div data-animate className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {LAND_ACTIVITIES.map((a) => (
              <ActivityGridItem key={a.title} {...a} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================= STAY + RECREATION (split) */}
      <section id="stay" className="py-20 md:py-28 px-6 md:px-10 scroll-mt-28" style={{ backgroundColor: `${PALETTE.deep}cc` }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div
            data-animate
            className="relative rounded-2xl overflow-hidden aspect-[4/3] ring-1"
            style={{ borderColor: `${PALETTE.sand}22`, boxShadow: `0 10px 40px rgba(30,62,77,0.4)` }}
          >
            <img
              src={`${BASE}media/rustic-haven/rh-05.webp`}
              alt="Interior at Morpeace"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div data-animate>
            <Eyebrow>Your stay</Eyebrow>
            <Heading>Simple, quiet, intentional.</Heading>
            <p className="font-body text-lg md:text-xl leading-relaxed mb-3" style={{ color: `${PALETTE.sand}cc` }}>
              Four private rooms designed around light, air, and stillness. Clean spaces with natural
              materials, open views into the forest, and comfort without excess.
            </p>
            <p className="font-body text-lg md:text-xl leading-relaxed mb-6" style={{ color: `${PALETTE.sand}b3` }}>
              Open-air pool, a quiet library corner, table tennis, board games. No schedule, no
              demands — your day unfolds at your own pace.
            </p>
            <div className="grid grid-cols-3 gap-2">
              {RECREATION_ACTIVITIES.map((r) => (
                <div
                  key={r.title}
                  className="px-3 py-2 rounded-lg text-center"
                  style={{ backgroundColor: `${PALETTE.ink}b3`, border: `1px solid ${PALETTE.aqua}22` }}
                >
                  <div className="text-lg mb-0.5" aria-hidden>
                    {r.icon}
                  </div>
                  <div className="font-body text-sm md:text-base" style={{ color: `${PALETTE.sand}e6` }}>
                    {r.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================= CHILDREN */}
      <section id="children" className="py-20 md:py-28 px-6 md:px-10 scroll-mt-28">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div data-animate className="md:order-2">
            <div
              className="relative rounded-2xl overflow-hidden aspect-[4/3] ring-1"
              style={{ borderColor: `${PALETTE.sand}22`, boxShadow: `0 10px 40px rgba(30,62,77,0.4)` }}
            >
              <img
                src={`${BASE}media/kids/kids1.webp`}
                alt="Children playing at Morpeace"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div data-animate className="md:order-1">
            <Eyebrow>For children</Eyebrow>
            <Heading>Space to be free.</Heading>
            <p className="font-body text-lg md:text-xl leading-relaxed mb-3" style={{ color: `${PALETTE.sand}cc` }}>
              Morpeace is as much for the curious child as it is for the seeking adult. Children swim
              under open skies, play board games without screens, and run freely without boundaries.
            </p>
            <p className="font-body text-lg md:text-xl leading-relaxed" style={{ color: `${PALETTE.sand}b3` }}>
              No curated distractions — just space to be playful, present, and free.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================= MEDITATION */}
      <section
        id="meditation"
        className="relative min-h-[70vh] flex items-center overflow-hidden scroll-mt-28"
      >
        <video
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          poster={`${BASE}media/property/meditation-room-circle.webp`}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={`${BASE}photos/meditation-drone-2.mp4`} type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ backgroundColor: `${PALETTE.ink}d9` }} />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 50% 40%, rgba(14,126,192,0.25) 0%, rgba(30,62,77,0.65) 45%, rgba(30,62,77,0.88) 100%)',
          }}
        />
        <div data-animate className="relative z-10 max-w-2xl mx-auto px-8 md:px-16 py-20 text-center">
          <Eyebrow>Meditation</Eyebrow>
          <Heading>The Cave of the Inner Star.</Heading>
          <div className="w-12 h-0.5 mx-auto mb-6" style={{ backgroundColor: `${PALETTE.aqua}b3` }} />
          <p className="font-body text-lg md:text-xl italic leading-relaxed mb-5" style={{ color: `${PALETTE.sand}d9` }}>
            Step down into the meditation cave — a womb carved below the ground, cool and hushed.
          </p>
          <p className="font-body text-lg md:text-xl leading-relaxed" style={{ color: `${PALETTE.sand}bf` }}>
            Underground is not beneath life — it is beneath distraction. Sit. Breathe. Stay as long
            as you like. Stillness is always welcome here.
          </p>
        </div>
      </section>

      {/* ============================================= FOOD */}
      <section
        id="food"
        className="relative min-h-[55vh] flex items-center overflow-hidden scroll-mt-28"
      >
        <img
          src={`${BASE}photos/mangoes-sunlight.webp`}
          alt="Mangoes in the sunlight"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(90deg, ${PALETTE.ink}e6 0%, ${PALETTE.deep}99 55%, transparent 100%)`,
          }}
        />
        <div data-animate className="relative z-10 max-w-xl px-8 md:px-16 py-20">
          <Eyebrow>Food</Eyebrow>
          <Heading>A return to memory.</Heading>
          <p className="font-body text-lg md:text-xl leading-relaxed mb-3" style={{ color: `${PALETTE.sand}d9` }}>
            Forgotten grains, foraged greens, seasonal harvests. Recipes that quietly survived in
            village kitchens. Some ingredients come from the land you're sitting on.
          </p>
          <p className="font-body text-lg md:text-xl leading-relaxed mb-7" style={{ color: `${PALETTE.sand}b3` }}>
            Meals cooked slowly — patient, nourishing, deeply rooted.
          </p>
          <Link
            to="/menu"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full font-display tracking-[0.2em] uppercase"
            style={{ border: `1px solid ${PALETTE.sand}80`, color: PALETTE.sand }}
          >
            See the menu
          </Link>
        </div>
      </section>

      {/* ============================================= SUSTAINABILITY (quiet inline list) */}
      <section className="py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div data-animate className="mb-8 md:mb-12 text-center">
            <Eyebrow>The work beneath</Eyebrow>
            <Heading>Quiet experiments.</Heading>
            <p className="font-body text-lg md:text-xl max-w-2xl mx-auto" style={{ color: `${PALETTE.sand}cc` }}>
              Small experiments across the forest and farm — not as display, but as inquiry into what
              sustains.
            </p>
          </div>
          <div data-animate className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {SUSTAINABILITY_ITEMS.map((s) => (
              <div
                key={s.title}
                className="p-4 rounded-xl text-center"
                style={{ backgroundColor: `${PALETTE.ink}b3`, border: `1px solid ${PALETTE.aqua}22` }}
                title={s.description}
              >
                <div className="text-2xl mb-1.5" aria-hidden>
                  {s.icon}
                </div>
                <div className="font-body text-sm md:text-base" style={{ color: `${PALETTE.sand}e6` }}>
                  {s.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================= CELEBRATIONS */}
      <section id="celebrations" className="py-20 md:py-28 px-6 md:px-10 scroll-mt-28" style={{ backgroundColor: `${PALETTE.deep}cc` }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div data-animate>
            <Eyebrow>Celebrations & gatherings</Eyebrow>
            <Heading>Held gently by the land.</Heading>
            <p className="font-body text-lg md:text-xl leading-relaxed mb-3" style={{ color: `${PALETTE.sand}cc` }}>
              Morpeace has hosted intimate gatherings, pre-wedding shoots, pre-natal shoots,
              birthdays, and moments of togetherness.
            </p>
            <p className="font-body text-lg md:text-xl leading-relaxed" style={{ color: `${PALETTE.sand}b3` }}>
              The space adapts to your celebration — without losing its stillness. Gatherings of up
              to 50 guests.
            </p>
          </div>
          <div
            data-animate
            className="relative rounded-2xl overflow-hidden aspect-[4/3] ring-1"
            style={{ borderColor: `${PALETTE.sand}22`, boxShadow: `0 10px 40px rgba(30,62,77,0.4)` }}
          >
            <img
              src={`${BASE}media/property/sham-kane-renonwed-tabla-player.webp`}
              alt="Gathering at Morpeace"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ============================================= GALLERY */}
      <section id="gallery" className="py-20 md:py-28 px-6 md:px-10 scroll-mt-28">
        <div className="max-w-6xl mx-auto">
          <div data-animate className="mb-10 md:mb-14">
            <Eyebrow>A look inside</Eyebrow>
            <Heading>Quiet, generous, real.</Heading>
          </div>
          <div
            data-animate
            className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4"
          >
            {GALLERY.map((g) => (
              <div
                key={g.src}
                className={`relative overflow-hidden rounded-xl ring-1 ${g.span ?? ''}`}
                style={{ boxShadow: `0 10px 30px rgba(30,62,77,0.4)`, borderColor: `${PALETTE.sand}22` }}
              >
                <img
                  src={`${BASE}${g.src}`}
                  alt={g.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================= NEARBY */}
      <section id="nearby" className="py-20 md:py-28 px-6 md:px-10 scroll-mt-28" style={{ backgroundColor: `${PALETTE.deep}cc` }}>
        <div className="max-w-6xl mx-auto">
          <div data-animate className="mb-8 md:mb-12 text-center">
            <Eyebrow>Beyond Morpeace</Eyebrow>
            <Heading>Explore Satara.</Heading>
          </div>
          <div data-animate className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {NEARBY_PLACES.map((p) => (
              <div
                key={p.name}
                className="flex justify-between items-center backdrop-blur-sm rounded-lg px-5 py-4"
                style={{
                  backgroundColor: `${PALETTE.ink}73`,
                  border: `1px solid ${PALETTE.aqua}26`,
                }}
              >
                <span className="font-display text-lg md:text-xl font-medium" style={{ color: PALETTE.cream }}>
                  {p.name}
                </span>
                <span className="font-body text-base md:text-lg" style={{ color: `${PALETTE.sand}b3` }}>
                  {p.meta}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================= LOCATION + MAP */}
      <section id="location" className="py-20 md:py-28 px-6 md:px-10 scroll-mt-28">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div data-animate>
            <Eyebrow>Where we are</Eyebrow>
            <Heading>Near Satara, inside the Western Ghats.</Heading>
            <address
              className="not-italic font-body text-lg md:text-xl leading-relaxed mb-6"
              style={{ color: `${PALETTE.sand}cc` }}
            >
              Gat No 267, Shivajinagar,<br />
              Mugdul Bhatachiwadi,<br />
              Satara, Maharashtra 415519
            </address>
            <ul className="space-y-2.5 mb-8 font-body text-base md:text-lg" style={{ color: `${PALETTE.sand}cc` }}>
              <li>· ~150 km from Pune International Airport (2 hr drive)</li>
              <li>· ~270 km from Mumbai (5 hr drive)</li>
              <li>· Minutes from Kaas Plateau, Thoseghar & Vajrai Falls</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-display tracking-[0.2em] uppercase text-base md:text-lg"
                style={{ backgroundColor: PALETTE.blue, color: PALETTE.cream }}
              >
                Open in Google Maps
              </a>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-display tracking-[0.2em] uppercase text-base md:text-lg"
                style={{ border: `1px solid ${PALETTE.sand}55`, color: PALETTE.sand }}
              >
                Book your stay
              </a>
            </div>
          </div>

          <div
            data-animate
            className="relative rounded-2xl overflow-hidden aspect-[4/3] ring-1"
            style={{ borderColor: `${PALETTE.aqua}33`, boxShadow: `0 20px 60px rgba(30,62,77,0.5)` }}
          >
            <iframe
              title="Morpeace on Google Maps"
              src="https://www.google.com/maps?q=17.6105128,73.9891524&hl=en&z=13&output=embed"
              className="absolute inset-0 w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ============================================= FINAL CTA */}
      <section
        className="relative py-24 md:py-32 px-6 md:px-10 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${PALETTE.ink} 0%, ${PALETTE.deep} 40%, ${PALETTE.blue}40 100%)`,
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 50% 40% at 80% 30%, rgba(36,190,185,0.22) 0%, transparent 70%)',
          }}
        />
        <div data-animate className="relative z-10 max-w-3xl mx-auto text-center">
          <Heading large>Come stay in the forest.</Heading>
          <p className="font-body text-xl md:text-2xl mb-10" style={{ color: `${PALETTE.sand}e6` }}>
            Book direct through StayVista. The whole villa is yours.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full font-display tracking-[0.2em] uppercase text-lg transition-transform duration-300 hover:scale-[1.03]"
            style={{
              backgroundColor: PALETTE.aqua,
              color: PALETTE.ink,
              boxShadow: `0 14px 40px ${PALETTE.aqua}66`,
            }}
          >
            Book now
          </a>
        </div>
      </section>
    </div>
  )
}
