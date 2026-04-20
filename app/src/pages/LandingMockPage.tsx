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

// Peacock palette (sourced from the brief)
const PALETTE = {
  ink: '#1E3E4D',     // deep teal — primary dark
  sand: '#C1B589',    // warm cream/gold — soft accent
  aqua: '#24BEB9',    // turquoise — bright accent
  blue: '#0E7EC0',    // peacock blue — secondary
}

const FACTS = [
  { k: '10', v: 'acres of regenerated forest' },
  { k: '4', v: 'private rooms · sleeps up to 18' },
  { k: '40+', v: 'heirloom mango varieties' },
  { k: '3.5 hr', v: 'drive from Pune' },
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

const EXPERIENCES = [
  { icon: '🌳', title: 'Forest & trails', desc: 'Walk through a 10-acre regenerated forest of 1,500+ native trees.' },
  { icon: '🏊', title: 'Private pool & lake', desc: 'Open-air pool and a lake beside the villa — swim, kayak, or simply sit.' },
  { icon: '🍲', title: 'Farm-to-table meals', desc: 'Seasonal Maharashtrian food prepared by the caretaker families.' },
  { icon: '🧘', title: 'Meditation cave', desc: 'A cool, hushed room below the ground — stillness is always welcome.' },
  { icon: '🔭', title: 'Watchtower & stars', desc: 'Clear Western Ghats night skies. AQI 10–50 — air you can feel.' },
  { icon: '🥭', title: 'Mango orchard', desc: 'Seasonal tasting of 40+ heirloom varieties grown on the land.' },
]

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
      style={{ backgroundColor: PALETTE.ink, color: PALETTE.sand }}
      className="min-h-screen"
    >
      <SeoHead
        title="Morpeace — Stay in a Forest Villa near Satara (Mock Landing)"
        description="A boutique forest villa on 10 acres in the Western Ghats. Private pool, lake, forest trails, farm-to-table meals. Book your stay at Morpeace."
        path="/landing-mock"
      />

      {/* ============================================= HERO */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden">
        <img
          src={`${BASE}media/property/at-night-lake-view.webp`}
          alt="Morpeace villa reflected on the lake at dusk"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Deep teal wash for legibility */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, rgba(30,62,77,0.55) 0%, rgba(30,62,77,0.35) 45%, rgba(30,62,77,0.85) 100%)`,
          }}
        />
        {/* Aqua glow hinting at the palette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 50% 40% at 20% 80%, rgba(36,190,185,0.18) 0%, transparent 65%)',
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 py-24 md:py-32 w-full">
          <div data-animate>
            <span
              className="inline-block px-3 py-1 rounded-full text-xs tracking-[0.25em] uppercase mb-6"
              style={{ backgroundColor: `${PALETTE.aqua}22`, color: PALETTE.aqua, border: `1px solid ${PALETTE.aqua}55` }}
            >
              Western Ghats · Satara, Maharashtra
            </span>
            <h1
              className="font-display text-4xl sm:text-5xl md:text-7xl leading-tight mb-5"
              style={{ color: '#F5F1E3', textShadow: '0 2px 24px rgba(30,62,77,0.85)' }}
            >
              A stay inside a forest.
            </h1>
            <p
              className="font-body text-lg md:text-2xl max-w-2xl leading-relaxed mb-10"
              style={{ color: PALETTE.sand, textShadow: '0 1px 12px rgba(30,62,77,0.8)' }}
            >
              Morpeace is a boutique villa on ten regenerated acres in the Western Ghats — a private pool,
              a lake, 1,500+ native trees, and food grown on the land. Sleeps up to 18.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full cta-text transition-transform duration-300 hover:scale-[1.02]"
                style={{ backgroundColor: PALETTE.aqua, color: PALETTE.ink, boxShadow: `0 10px 30px ${PALETTE.aqua}55` }}
              >
                Book your stay
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full cta-text transition-colors duration-300"
                style={{ border: `1px solid ${PALETTE.sand}66`, color: PALETTE.sand }}
              >
                View on map
              </a>
            </div>
          </div>
        </div>

        {/* scroll hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs tracking-[0.25em] uppercase opacity-60"
          style={{ color: PALETTE.sand }}>
          scroll to explore
        </div>
      </section>

      {/* ============================================= WHAT THIS IS (FACTS STRIP) */}
      <section
        className="py-14 md:py-20 px-6 md:px-10"
        style={{ backgroundColor: '#183340' }}
      >
        <div className="max-w-6xl mx-auto">
          <div data-animate className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {FACTS.map((f) => (
              <div key={f.v} className="text-center">
                <p className="font-display text-4xl md:text-5xl mb-2" style={{ color: PALETTE.aqua }}>
                  {f.k}
                </p>
                <p className="font-body text-sm md:text-base" style={{ color: `${PALETTE.sand}cc` }}>
                  {f.v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================= GALLERY */}
      <section className="py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div data-animate className="mb-10 md:mb-14">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: PALETTE.aqua }}>
              A look inside
            </p>
            <h2 className="font-display text-3xl md:text-5xl" style={{ color: '#F5F1E3' }}>
              Quiet, generous, real.
            </h2>
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

      {/* ============================================= WHAT YOU CAN DO */}
      <section
        className="py-20 md:py-28 px-6 md:px-10"
        style={{ backgroundColor: '#183340' }}
      >
        <div className="max-w-6xl mx-auto">
          <div data-animate className="mb-10 md:mb-14 max-w-2xl">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: PALETTE.aqua }}>
              What you can do here
            </p>
            <h2 className="font-display text-3xl md:text-5xl mb-4" style={{ color: '#F5F1E3' }}>
              More than a villa.
            </h2>
            <p className="font-body text-base md:text-lg" style={{ color: `${PALETTE.sand}cc` }}>
              A slow, unhurried day. Forest walks, home-cooked meals, stars overhead. Nothing is rushed.
              Nothing is required.
            </p>
          </div>
          <div data-animate className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {EXPERIENCES.map((e) => (
              <div
                key={e.title}
                className="p-6 rounded-2xl transition-transform duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: `${PALETTE.ink}cc`,
                  border: `1px solid ${PALETTE.aqua}33`,
                }}
              >
                <div className="text-2xl mb-3" aria-hidden>
                  {e.icon}
                </div>
                <h3 className="font-display text-xl mb-2" style={{ color: '#F5F1E3' }}>
                  {e.title}
                </h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: `${PALETTE.sand}b3` }}>
                  {e.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================= LOCATION */}
      <section className="py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div data-animate>
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: PALETTE.aqua }}>
              Where we are
            </p>
            <h2 className="font-display text-3xl md:text-5xl mb-5" style={{ color: '#F5F1E3' }}>
              Near Satara, inside the Western Ghats.
            </h2>
            <address
              className="not-italic font-body text-base md:text-lg leading-relaxed mb-6"
              style={{ color: `${PALETTE.sand}cc` }}
            >
              Gat No 267, Shivajinagar,<br />
              Mugdul Bhatachiwadi,<br />
              Satara, Maharashtra 415519
            </address>
            <ul className="space-y-2 mb-8 font-body text-sm" style={{ color: `${PALETTE.sand}99` }}>
              <li>· ~150 km from Pune International Airport (3.5 hr drive)</li>
              <li>· ~270 km from Mumbai (5–6 hr drive)</li>
              <li>· Minutes from Kaas Plateau, Thoseghar & Vajrai Falls</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full cta-text"
                style={{ backgroundColor: PALETTE.blue, color: '#F5F1E3' }}
              >
                Open in Google Maps
              </a>
              <Link
                to="/the-experience"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full cta-text"
                style={{ border: `1px solid ${PALETTE.sand}55`, color: PALETTE.sand }}
              >
                See a day here
              </Link>
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
          background: `linear-gradient(135deg, ${PALETTE.ink} 0%, #0f2a36 40%, ${PALETTE.blue}33 100%)`,
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 50% 40% at 80% 30%, rgba(36,190,185,0.2) 0%, transparent 70%)',
          }}
        />
        <div data-animate className="relative z-10 max-w-3xl mx-auto text-center">
          <h2
            className="font-display text-4xl md:text-6xl mb-6"
            style={{ color: '#F5F1E3', textShadow: '0 2px 24px rgba(30,62,77,0.7)' }}
          >
            Come stay in the forest.
          </h2>
          <p className="font-body text-lg md:text-xl mb-10" style={{ color: `${PALETTE.sand}cc` }}>
            Book direct through StayVista. The whole villa is yours.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full cta-text text-lg transition-transform duration-300 hover:scale-[1.03]"
            style={{ backgroundColor: PALETTE.aqua, color: PALETTE.ink, boxShadow: `0 14px 40px ${PALETTE.aqua}66` }}
          >
            Book now
          </a>
        </div>
      </section>
    </div>
  )
}
