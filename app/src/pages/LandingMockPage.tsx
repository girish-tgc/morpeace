import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead from '../components/SeoHead'
import PairedBookingCTAs from '../components/nav/PairedBookingCTAs'
import HeroVariantC from '../components/hero/HeroVariantC'
import WhoForSection from '../components/landing/WhoForSection'
import ActivitiesSection from '../components/landing/ActivitiesSection'
import { SUSTAINABILITY_ITEMS } from '../data/activities'
import { FEATURED_NEARBY_PLACES } from '../data/nearbyPlaces'
import { ADDRESS_LINES, MAPS_URL, MAPS_EMBED_URL } from '../data/contact'
import { DAY_BEATS } from '../data/dayBeats'

gsap.registerPlugin(ScrollTrigger)

const BASE = import.meta.env.BASE_URL

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
  { id: 'who-for', label: 'Who for' },
  { id: 'things-to-do', label: 'Do' },
  { id: 'day', label: 'A day' },
  { id: 'forest', label: 'Forest' },
  { id: 'stay', label: 'Stay' },
  { id: 'children', label: 'Children' },
  { id: 'meditation', label: 'Meditation' },
  { id: 'food', label: 'Food' },
  { id: 'nearby', label: 'Nearby' },
  { id: 'location', label: 'Location' },
]

const FACTS = [
  { k: '10', v: 'acres of regenerated forest' },
  { k: '4', v: 'rooms · sleeps up to 10' },
  { k: '40+', v: 'heirloom mango varieties' },
  { k: '2 hr', v: 'drive from Pune' },
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
        description="A boutique forest villa on 10 acres in the Western Ghats. Private pool, lake, 1,000+ native trees, farm-to-table meals. Sleeps up to 10. Book your stay at Morpeace."
        path="/"
      />

      {/* ============================================= HERO */}
      <HeroVariantC />

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

      {/* ============================================= WHO FOR (new) */}
      <WhoForSection />

      {/* ============================================= ACTIVITIES (new, consolidated) */}
      <ActivitiesSection />

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
          <div className="mt-10 md:mt-12 flex justify-center">
            <Link
              to="/philosophy"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-display text-xs md:text-sm tracking-[0.3em] uppercase backdrop-blur-sm transition-colors"
              style={{
                color: PALETTE.cream,
                border: `1px solid ${PALETTE.aqua}66`,
                backgroundColor: `${PALETTE.ink}66`,
              }}
            >
              <span>The philosophy behind Morpeace</span>
              <span aria-hidden style={{ color: PALETTE.aqua }}>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================= FOREST */}
      <section id="forest" className="py-20 md:py-28 px-6 md:px-10 scroll-mt-28">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div
            data-animate
            className="relative rounded-2xl overflow-hidden aspect-[4/3] ring-1 md:order-2"
            style={{ borderColor: `${PALETTE.sand}22`, boxShadow: `0 10px 40px rgba(30,62,77,0.4)` }}
          >
            <img
              src={`${BASE}photos/forest-path.webp`}
              alt="A forest path at Morpeace"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div data-animate className="md:order-1">
            <Eyebrow>The forest</Eyebrow>
            <Heading>Walk without a destination.</Heading>
            <p className="font-body text-lg md:text-xl leading-relaxed" style={{ color: `${PALETTE.sand}cc` }}>
              1,000+ native trees, 10 regenerated acres.
            </p>
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
            <Eyebrow>A look inside</Eyebrow>
            <Heading>Serene, luxurious, exclusive.</Heading>
            <p className="font-body text-lg md:text-xl leading-relaxed mb-3" style={{ color: `${PALETTE.sand}cc` }}>
              Three private rooms designed around light, air, and stillness. Clean spaces with natural
              materials, open views into the forest, and comfort without excess.
            </p>
            <p className="font-body text-lg md:text-xl leading-relaxed" style={{ color: `${PALETTE.sand}b3` }}>
              Open-air pool, a quiet library corner. No schedule, no demands — your day unfolds at
              your own pace.
            </p>
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
              Morpeace is as much for the curious child as it is for the seeking adult.
            </p>
            <p className="font-body text-lg md:text-xl leading-relaxed" style={{ color: `${PALETTE.sand}b3` }}>
              No curated distractions — just space to be playful, present, and free.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================= MEDITATION */}
      <section id="meditation" className="py-20 md:py-28 px-6 md:px-10 scroll-mt-28" style={{ backgroundColor: `${PALETTE.deep}cc` }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div data-animate className="md:order-1">
            <div
              className="relative rounded-2xl overflow-hidden aspect-[4/3] ring-1"
              style={{ borderColor: `${PALETTE.sand}22`, boxShadow: `0 10px 40px rgba(30,62,77,0.4)` }}
            >
              <img
                src={`${BASE}media/property/meditation-room-circle.webp`}
                alt="The meditation cave at Morpeace"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div data-animate className="md:order-2">
            <Eyebrow>Meditation</Eyebrow>
            <Heading>The Cave of the Inner Star.</Heading>
            <p className="font-body text-lg md:text-xl italic leading-relaxed mb-3" style={{ color: `${PALETTE.sand}cc` }}>
              Step down into the meditation cave — a womb carved below the ground, cool and hushed.
            </p>
            <p className="font-body text-lg md:text-xl leading-relaxed" style={{ color: `${PALETTE.sand}b3` }}>
              Underground is not beneath life — it is beneath distraction. Sit. Breathe. Stay as long
              as you like. Stillness is always welcome here.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================= FOOD */}
      <section id="food" className="py-20 md:py-28 px-6 md:px-10 scroll-mt-28">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div
            data-animate
            className="relative rounded-2xl overflow-hidden aspect-[4/3] ring-1 md:order-2"
            style={{ borderColor: `${PALETTE.sand}22`, boxShadow: `0 10px 40px rgba(30,62,77,0.4)` }}
          >
            <img
              src={`${BASE}media/food/feast-spread.jpeg`}
              alt="A traditional thali spread on banana leaves at Morpeace"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div data-animate className="md:order-1">
            <Eyebrow>Food</Eyebrow>
            <Heading>A return to memory.</Heading>
            <p
              className="font-display tracking-[0.22em] uppercase text-xs md:text-sm mb-4"
              style={{ color: PALETTE.aqua }}
            >
              Organic · Sustainable · Farm to table
            </p>
            <p className="font-body text-lg md:text-xl leading-relaxed mb-3" style={{ color: `${PALETTE.sand}cc` }}>
              Forgotten grains, foraged greens, seasonal harvests — grown organically on the land
              you're sitting on. Recipes that quietly survived in village kitchens.
            </p>
            <p className="font-body text-lg md:text-xl leading-relaxed mb-7" style={{ color: `${PALETTE.sand}b3` }}>
              Meals cooked slowly — patient, nourishing, sustainably rooted.
            </p>
            <Link
              to="/menu"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full font-display tracking-[0.2em] uppercase"
              style={{ border: `1px solid ${PALETTE.sand}80`, color: PALETTE.sand }}
            >
              See the menu
            </Link>
          </div>
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
            {SUSTAINABILITY_ITEMS.map((s) => {
              const SIcon = s.icon
              return (
                <div
                  key={s.title}
                  className="p-4 rounded-xl text-center flex flex-col items-center gap-1.5"
                  style={{ backgroundColor: `${PALETTE.ink}b3`, border: `1px solid ${PALETTE.aqua}22` }}
                  title={s.description}
                >
                  <SIcon size={24} weight="thin" style={{ color: PALETTE.aqua }} aria-hidden />
                  <div className="font-body text-sm md:text-base" style={{ color: `${PALETTE.sand}e6` }}>
                    {s.title}
                  </div>
                </div>
              )
            })}
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
            {FEATURED_NEARBY_PLACES.map((p) => (
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
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-start gap-3 group not-italic mb-6"
              aria-label="Open property location in Google Maps"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6 mt-1 flex-shrink-0 transition-transform group-hover:-translate-y-0.5"
                style={{ color: `${PALETTE.sand}cc` }}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <address
                className="not-italic font-body text-lg md:text-xl leading-relaxed underline decoration-current/30 underline-offset-4 group-hover:decoration-current/70 transition-colors"
                style={{ color: `${PALETTE.sand}cc` }}
              >
                {ADDRESS_LINES.flatMap((line, i) =>
                  i === 0 ? [line] : [<br key={`br-${i}`} />, line],
                )}
              </address>
            </a>
            <ul className="space-y-2.5 mb-8 font-body text-base md:text-lg" style={{ color: `${PALETTE.sand}cc` }}>
              <li>· ~150 km from Pune International Airport (2 hr drive)</li>
              <li>· ~270 km from Mumbai (5 hr drive)</li>
              <li>· Minutes from Kaas Plateau, Thoseghar & Vajrai Falls</li>
            </ul>
            <div className="flex flex-col gap-4">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center self-start px-7 py-3.5 rounded-full font-display tracking-[0.2em] uppercase text-base md:text-lg"
                style={{ backgroundColor: PALETTE.blue, color: PALETTE.cream }}
              >
                Open in Google Maps
              </a>
              <PairedBookingCTAs size="md" tone="peacock" />
            </div>
          </div>

          <div
            data-animate
            className="relative rounded-2xl overflow-hidden aspect-[4/3] ring-1"
            style={{ borderColor: `${PALETTE.aqua}33`, boxShadow: `0 20px 60px rgba(30,62,77,0.5)` }}
          >
            <iframe
              title="Morpeace on Google Maps"
              src={MAPS_EMBED_URL}
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
            A single room, or the whole villa. Book direct through StayVista.
          </p>
          <div className="flex justify-center">
            <PairedBookingCTAs size="lg" tone="peacock" />
          </div>
        </div>
      </section>
    </div>
  )
}
