import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead from '../components/SeoHead'
import { breadcrumbSchema } from '../lib/seo/schema'
import SectionHeader from '../components/yourday/SectionHeader'
import ActivityCard from '../components/yourday/ActivityCard'
import SplitSection from '../components/yourday/SplitSection'
import AnchorNav from '../components/yourday/AnchorNav'
import PairedBookingCTAs from '../components/nav/PairedBookingCTAs'
import {
  LAND_ACTIVITIES,
  RECREATION_ACTIVITIES,
  SUSTAINABILITY_ITEMS,
} from '../data/activities'
import { NEARBY_PLACES } from '../data/nearbyPlaces'

gsap.registerPlugin(ScrollTrigger)

const BASE = import.meta.env.BASE_URL

const ANCHOR_SECTIONS = [
  { id: 'stay', label: 'Stay' },
  { id: 'forest', label: 'Forest' },
  { id: 'land', label: 'Land' },
  { id: 'recreation', label: 'Recreation' },
  { id: 'children', label: 'Children' },
  { id: 'library', label: 'Library' },
  { id: 'meditation', label: 'Meditation' },
  { id: 'food', label: 'Food' },
  { id: 'sustainability', label: 'Sustainability' },
  { id: 'celebrations', label: 'Celebrations' },
  { id: 'nearby', label: 'Nearby' },
]

export default function YourDayPage() {
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = gsap.context(() => {
      const animEls = pageRef.current?.querySelectorAll('[data-animate]')
      if (!animEls) return

      if (prefersReduced) {
        gsap.set(animEls, { opacity: 1, y: 0 })
        return
      }

      animEls.forEach((el) => {
        const isHero = el.hasAttribute('data-hero-hold')
        gsap.fromTo(el,
          { opacity: 0, y: 24 },
          {
            opacity: 1, y: 0,
            duration: isHero ? 1.8 : 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })
    }, pageRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={pageRef}
      className="text-sky-cream"
      style={{ background: 'linear-gradient(180deg, #012E43 0%, #014066 10%, #096C6C 55%, #014066 100%)' }}
    >
      <SeoHead
        title="A Day at Morpeace — The Experience | Western Ghats Villa Stay"
        description="What a day at Morpeace feels like — cow feeding, forest walks, hammock rest, stargazing from the watchtower, farm-to-table meals, and excursions to Kaas Plateau, Thoseghar, and Koyna."
        path="/the-experience"
        jsonLd={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'The Experience', path: '/the-experience' },
        ])}
      />
      {/* === HERO === */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="ken-burns-a absolute inset-0">
            <img
              src={`${BASE}photos/forest-path.webp`}
              alt="Forest path at Morpeace"
              className="absolute inset-0 w-full h-full object-cover scale-110"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#012E43]/35 via-[#012E43]/25 to-[#012E43]/55" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(1,46,67,0.45)_0%,rgba(1,46,67,0.15)_55%,rgba(1,46,67,0.05)_100%)]" />
        <div data-animate data-hero-hold className="relative z-10 text-center px-6 md:px-8 py-20 max-w-2xl mx-auto">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-sky-cream mb-5"
            style={{ textShadow: '0 2px 18px rgba(0,0,0,0.95), 0 0 28px rgba(0,0,0,0.75), 0 0 6px rgba(0,0,0,0.9)' }}
          >
            A Day at Morpeace
          </h1>
          <p className="font-body text-lg md:text-xl text-sky-cream italic mb-10"
            style={{ textShadow: '0 1px 14px rgba(0,0,0,0.95), 0 0 22px rgba(0,0,0,0.7), 0 0 4px rgba(0,0,0,0.85)' }}
          >
            Unhurried. Unscripted. Real.
          </p>
          <div
            className="font-body text-base md:text-lg text-sky-cream leading-relaxed space-y-4"
            style={{ textShadow: '0 1px 14px rgba(0,0,0,0.95), 0 0 20px rgba(0,0,0,0.7), 0 0 4px rgba(0,0,0,0.85)' }}
          >
            <p>Wake up to birds, not alarms.</p>
            <p>Breathe, deeply—air quality here is actively monitored and typically ranges between AQI 10–40. Clean, light, restorative.</p>
            <p>Meals arrive—fresh, seasonal, often gathered from the land itself.</p>
            <p>Luxurious, comfortable rooms to stay within the forest.</p>
            <p className="pt-3">Nothing is rushed. Nothing is required.</p>
            <p>You simply arrive… and begin to notice again.</p>
          </div>
        </div>
      </section>

      {/* === ANCHOR NAV === */}
      <AnchorNav sections={ANCHOR_SECTIONS} />

      {/* === YOUR STAY === */}
      <SplitSection
        id="stay"
        tag="Your Stay"
        heading="Simple, Quiet, Intentional"
        copy={[
          'The spaces at Morpeace are designed around light, air, and stillness. Clean rooms with natural materials, open views into the forest, and comfort without excess.',
          'There is no schedule here. Your day unfolds at your own pace.',
        ]}
        imageSrc="media/rustic-haven/rh-05.webp"
      />

      {/* === THE FOREST === */}
      <SplitSection
        id="forest"
        tag="The Forest"
        heading="Walk Without a Destination"
        copy={[
          'The forest at Morpeace is something you enter, not just see. Walk the trails, climb the watchtower, or sit and watch the birds return.',
          'Spread across the property, the forest is home to over 1,500 native trees and a growing diversity of wildlife.',
        ]}
        imageSrc="photos/forest-path.webp"
        reverse
        altBg
      />

      {/* === LIFE ON THE LAND === */}
      <section className="py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            id="land"
            tag="Life on the Land"
            heading="The Simple Things"
            subtext="Farm life at Morpeace is unhurried and unstructured. Join in when you feel like it."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {LAND_ACTIVITIES.map(a => (
              <ActivityCard key={a.title} {...a} />
            ))}
          </div>
        </div>
      </section>

      {/* === RECREATION === */}
      <section className="bg-[#012E43]/30 py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            id="recreation"
            tag="Recreation"
            heading="Unwind Your Way"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {RECREATION_ACTIVITIES.map(a => (
              <ActivityCard key={a.title} {...a} />
            ))}
          </div>
        </div>
      </section>

      {/* === FOR CHILDREN === */}
      <SplitSection
        id="children"
        tag="For Children"
        heading="Space to Be Free"
        copy={[
          'Morpeace is as much for the curious child as it is for the seeking adult. Children swim under open skies, play board games without screens, and run freely without boundaries.',
          'No curated distractions — just space to be playful, present, and free.',
        ]}
        imageSrc="media/kids/kids1.webp"
      />

      {/* === THE LIBRARY === */}
      <SplitSection
        id="library"
        tag="The Library"
        heading="A Quiet Corner"
        copy="A thoughtfully curated collection in a warm reading corner. Sit, read, reflect — or simply pause between pages."
        imageSrc="media/rustic-haven/rh-09.webp"
        reverse
        altBg
      />

      {/* === MEDITATION CAVE === */}
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
        <div className="absolute inset-0 bg-[#012E43]/75" />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at 50% 40%, rgba(1,64,102,0.2) 0%, rgba(6,72,72,0.55) 45%, rgba(1,46,67,0.78) 100%)' }}
        />
        <div data-animate className="relative z-10 max-w-2xl mx-auto px-6 md:px-16 py-16 md:py-20 text-center">
          <span className="eyebrow text-[#F5EBD0] block mb-3">Meditation</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-sky-cream mb-5"
            style={{ textShadow: '0 2px 20px rgba(1,46,67,0.6)' }}
          >
            The Cave of the Inner Star
          </h2>
          <div className="w-12 h-0.5 bg-[#E94A3C]/70 mx-auto mb-6" />
          <p className="font-body text-lg md:text-xl text-sky-cream/85 italic leading-relaxed mb-5">
            Step down into the meditation cave — a womb carved below the ground, cool and hushed.
          </p>
          <p className="font-body text-base md:text-lg text-sky-cream/75 leading-relaxed mb-4">
            You expect darkness when you descend underground. That is the first illusion the cave dissolves. Underground is not beneath life — it is beneath distraction.
          </p>
          <p className="font-body text-base md:text-lg text-sky-cream/75 leading-relaxed">
            Sit. Breathe. Stay as long as you like. Stillness is always welcome here.
          </p>
        </div>
      </section>

      {/* === FOOD === */}
      <section
        id="food"
        className="relative min-h-[50vh] flex items-center overflow-hidden scroll-mt-28"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="ken-burns-b absolute inset-0">
            <img
              src={`${BASE}photos/mangoes-sunlight.webp`}
              alt="Food at Morpeace"
              className="absolute inset-0 w-full h-full object-cover scale-110"
              loading="lazy"
            />
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'rgba(50,104,114,0.16)', mixBlendMode: 'multiply' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#012E43]/80 via-[#014066]/50 to-transparent" />
        <div data-animate className="relative z-10 max-w-xl px-6 md:px-16 py-16 md:py-20">
          <span className="eyebrow text-[#F5EBD0] block mb-3">Food</span>
          <h2 className="font-display text-3xl md:text-4xl text-sky-cream mb-5"
            style={{ textShadow: '0 2px 20px rgba(1,46,67,0.55)' }}
          >
            A Return to Memory
          </h2>
          <p className="font-body text-base md:text-lg text-sky-cream/85 leading-relaxed mb-3">
            Dishes made from forgotten grains, foraged greens, and seasonal harvests. Recipes that have quietly survived in village kitchens. Some ingredients come from the land you're sitting on.
          </p>
          <p className="font-body text-base md:text-lg text-sky-cream/85 leading-relaxed mb-7">
            Meals are cooked slowly — patient, nourishing, and deeply rooted.
          </p>
          <Link
            to="/menu"
            className="inline-block cta-text border border-[#F0E6CD]/50 text-[#F0E6CD] hover:bg-[#F0E6CD]/15 hover:border-[#F0E6CD]/70 hover:text-[#F5EDD9] px-6 md:px-8 py-3.5 min-h-[44px] rounded-full transition-all duration-300"
          >
            See the Menu
          </Link>
        </div>
      </section>

      {/* === SUSTAINABILITY === */}
      <section className="py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            id="sustainability"
            tag="The Work Beneath"
            heading="Quiet Experiments"
            subtext="Small experiments across the forest and farm — not as display, but as inquiry into what sustains."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SUSTAINABILITY_ITEMS.map(a => (
              <ActivityCard key={a.title} {...a} />
            ))}
          </div>
        </div>
      </section>

      {/* === CELEBRATIONS === */}
      <SplitSection
        id="celebrations"
        tag="Celebrations & Gatherings"
        heading="Held Gently by the Land"
        copy={[
          'Morpeace has hosted intimate gatherings, pre-wedding shoots, pre-natal shoots, birthdays, and moments of togetherness.',
          'The space adapts to your celebration — without losing its stillness. Gatherings of up to 50 guests.',
        ]}
        imageSrc="media/property/sham-kane-renonwed-tabla-player.webp"
        altBg
      />

      {/* === NEARBY === */}
      <section className="py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            id="nearby"
            tag="Beyond Morpeace"
            heading="Explore Satara"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {NEARBY_PLACES.map(p => (
              <div
                key={p.name}
                data-animate
                className="flex justify-between items-center bg-[#014066]/45 backdrop-blur-sm border border-sky-cream/10 rounded-lg px-5 py-4 hover:border-[#F5EBD0]/30 transition-colors"
              >
                <span className="font-display text-base text-sky-cream font-medium">{p.name}</span>
                <span className="font-body text-sm text-sky-cream/55">{p.meta}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === GOOD TO KNOW === */}
      <section className="bg-[#012E43]/30 py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            tag="Good to Know"
            heading="The Pace of Morpeace"
          />
          <div data-animate className="bg-[#014066]/50 backdrop-blur-sm border-l-4 border-[#E94A3C] rounded-r-xl pl-8 pr-6 py-6 max-w-2xl mx-auto">
            <ul className="space-y-3">
              {[
                'Birdsong over background music',
                'Open hours, not packed itineraries',
                'Intentional pacing',
                'Best for guests who welcome a slower rhythm',
                'Stillness here rewards those who settle into it',
              ].map((item, i) => (
                <li key={i} className="font-body text-base text-sky-cream/80 leading-relaxed">
                  <span className="text-[#F5EBD0] mr-2">—</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* === CTA === */}
      <section data-animate className="text-center py-20 md:py-28 px-6">
        <h2 className="font-display text-3xl md:text-4xl text-sky-cream mb-4">Ready to arrive?</h2>
        <p className="font-body text-base md:text-lg text-sky-cream/65 mb-10">
          A single room, or the whole villa. Let the day unfold.
        </p>
        <div className="flex justify-center">
          <PairedBookingCTAs size="md" tone="dark" />
        </div>
      </section>
    </div>
  )
}
