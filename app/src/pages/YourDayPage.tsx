import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionHeader from '../components/yourday/SectionHeader'
import ActivityCard from '../components/yourday/ActivityCard'
import SplitSection from '../components/yourday/SplitSection'
import AnchorNav from '../components/yourday/AnchorNav'

gsap.registerPlugin(ScrollTrigger)

const BASE = import.meta.env.BASE_URL
const BOOKING_URL = 'https://www.stayvista.com/villa/rustic-haven?adult=6&child=0&infant=0&pax_selected=false&rooms_booked=3&reference_number=prop673b7f18be369lqw7kij&from=card'

const ANCHOR_SECTIONS = [
  { id: 'stay', label: 'Stay' },
  { id: 'forest', label: 'Forest' },
  { id: 'land', label: 'Land' },
  { id: 'recreation', label: 'Recreation' },
  { id: 'children', label: 'Children' },
  { id: 'library', label: 'Library' },
  { id: 'food', label: 'Food' },
  { id: 'sustainability', label: 'Sustainability' },
  { id: 'celebrations', label: 'Celebrations' },
  { id: 'nearby', label: 'Nearby' },
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

const NEARBY_PLACES = [
  { name: 'Kaas Plateau', meta: 'Seasonal · UNESCO site' },
  { name: 'Thoseghar Waterfalls', meta: 'Monsoon season' },
  { name: 'Sajjangad', meta: 'Historic fort & temple' },
  { name: 'Ajinkyatara Fort', meta: 'Hilltop panoramic views' },
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
        gsap.fromTo(el,
          { opacity: 0, y: 24 },
          {
            opacity: 1, y: 0,
            duration: 0.8,
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
    <div ref={pageRef}>
      {/* === HERO === */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="ken-burns-a absolute inset-0">
            <img
              src={`${BASE}photos/forest-path.jpeg`}
              alt="Forest path at Morpeace"
              className="absolute inset-0 w-full h-full object-cover scale-110"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />
        <div data-animate className="relative z-10 text-center px-8 py-20">
          <h1 className="font-display text-4xl md:text-6xl text-sky-cream font-light mb-5"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
          >
            Your Day at Morpeace
          </h1>
          <p className="font-body text-lg md:text-xl text-sky-cream/80 italic max-w-lg mx-auto"
            style={{ textShadow: '0 1px 12px rgba(0,0,0,0.4)' }}
          >
            A quiet place to slow down, explore, and simply be.
          </p>
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
        imageSrc="placeholder:Villa interior / room with natural light"
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
        imageSrc="photos/forest-path.jpeg"
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
      <section className="bg-[#F4EFE6] py-16 md:py-24 px-6 md:px-8">
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
        imageSrc="placeholder:Kids at the pool / playing outdoors"
      />

      {/* === THE LIBRARY === */}
      <SplitSection
        id="library"
        tag="The Library"
        heading="A Quiet Corner"
        copy="A thoughtfully curated collection in a warm reading corner. Sit, read, reflect — or simply pause between pages."
        imageSrc="placeholder:Reading corner / bookshelves"
        reverse
        altBg
      />

      {/* === FOOD === */}
      <section
        id="food"
        className="relative min-h-[50vh] flex items-center overflow-hidden scroll-mt-28"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="ken-burns-b absolute inset-0">
            <img
              src={`${BASE}photos/mangoes-sunlight.jpeg`}
              alt="Food at Morpeace"
              className="absolute inset-0 w-full h-full object-cover scale-110"
              loading="lazy"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div data-animate className="relative z-10 max-w-xl px-8 md:px-16 py-20">
          <span className="font-display text-xs tracking-[0.2em] uppercase text-turmeric block mb-3">Food</span>
          <h2 className="font-display text-3xl md:text-4xl text-sky-cream mb-5"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
          >
            A Return to Memory
          </h2>
          <p className="font-body text-base md:text-lg text-sky-cream/85 leading-relaxed mb-3">
            Dishes made from forgotten grains, foraged greens, and seasonal harvests. Recipes that have quietly survived in village kitchens. Some ingredients come from the land you're sitting on.
          </p>
          <p className="font-body text-base md:text-lg text-sky-cream/85 leading-relaxed">
            Meals are cooked slowly — patient, nourishing, and deeply rooted.
          </p>
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
        imageSrc="placeholder:Gathering / celebration at Morpeace"
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
                className="flex justify-between items-center bg-white border border-[#e8e2d8] rounded-lg px-5 py-4"
              >
                <span className="font-display text-base text-text-deep font-medium">{p.name}</span>
                <span className="font-body text-sm text-text-deep/40">{p.meta}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === GOOD TO KNOW === */}
      <section className="bg-[#F4EFE6] py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            tag="Good to Know"
            heading="What Morpeace Is Not"
          />
          <div data-animate className="bg-[#F4EFE6] border-l-4 border-turmeric rounded-r-xl pl-8 pr-6 py-6 max-w-2xl mx-auto">
            <ul className="space-y-3">
              {[
                'There is no loud music',
                'No curated entertainment or packed itineraries',
                'No urgency',
                'If you are seeking non-stop activity, this may not be the right fit',
                'If you are open to stillness, you may find more than you expected',
              ].map((item, i) => (
                <li key={i} className="font-body text-base text-text-deep/65 leading-relaxed">
                  <span className="text-turmeric mr-2">—</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* === CTA === */}
      <section data-animate className="text-center py-20 md:py-28 px-6 bg-white">
        <h2 className="font-display text-3xl md:text-4xl text-text-deep mb-4">Ready to Slow Down?</h2>
        <p className="font-body text-base md:text-lg text-text-deep/55 mb-10">
          Book your stay at Morpeace and let the day unfold.
        </p>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-display text-base tracking-wide bg-teal-deep text-white px-10 py-4 rounded-lg hover:bg-[#155a4a] transition-colors duration-300"
        >
          Book Your Stay
        </a>
      </section>
    </div>
  )
}
