import HeroSection from '../components/home/HeroSection'
import TheStorySection from '../components/home/TheStorySection'
import SeoHead from '../components/SeoHead'
import { invitation } from '../data/homeNarrative'
import PairedBookingCTAs from '../components/nav/PairedBookingCTAs'
import {
  faqPageSchema,
  lodgingBusinessSchema,
  organizationSchema,
} from '../lib/seo/schema'

const HOME_FAQS = [
  {
    question: 'Where is Morpeace located?',
    answer:
      'Morpeace sits on 10 acres near Satara in the Western Ghats of Maharashtra, India — about 3.5 hours by road from Pune and 5–6 hours from Mumbai. Full address: Gat No 267, Shivajinagar, Mugdul Bhatachiwadi, Satara 415519.',
  },
  {
    question: 'How do I book a stay at Morpeace?',
    answer:
      'Morpeace is listed as "Rustic Haven by StayVista". Book a single room or the whole villa (sleeps up to 10) — use the Book a room / Book the villa buttons on any page, or WhatsApp us directly.',
  },
  {
    question: 'What is the nearest airport to Morpeace?',
    answer:
      'Pune International Airport (PNQ) is the closest, about 150 km away — roughly a 3.5-hour drive. Mumbai (BOM) is an alternative at ~270 km / 5–6 hours.',
  },
  {
    question: 'Is Morpeace pet-friendly?',
    answer: 'Yes — well-behaved pets are welcome. Please inform StayVista at the time of booking.',
  },
  {
    question: 'What is included in a stay?',
    answer:
      'The villa sleeps up to 18 guests across 3 rooms, with a private pool, lake access, farm-to-table meals prepared by the caretaker families, forest trails through a regenerated 10-acre sanctuary, a watchtower for stargazing, and access to organic kitchen gardens with 40+ mango varieties.',
  },
  {
    question: 'When is the best time to visit?',
    answer:
      'October to February for pleasant weather and crisp skies; June–September for the monsoon drama of the Western Ghats; March–May for the mango harvest. Each season reveals a different forest.',
  },
  {
    question: 'What is there to do nearby?',
    answer:
      'Kaas Plateau (UNESCO seasonal wildflowers), Thoseghar & Vajrai waterfalls, Sajjangad and Ajinkyatara forts, Koyna Dam, and Mayani Bird Sanctuary are all within a 2-hour radius.',
  },
]

export default function HomePage() {
  return (
    <div>
      <SeoHead
        title="The Origin of Morpeace — A Forest That Remembers"
        description="The origin story of Morpeace — a 10-acre regenerated forest sanctuary near Satara in the Western Ghats. Told through the voice of the Touch-Me-Not, the forest's smallest plant."
        path="/origin"
        jsonLd={[
          organizationSchema(),
          lodgingBusinessSchema(),
          faqPageSchema(HOME_FAQS),
        ]}
      />
      {/* Hero */}
      <HeroSection />

      {/* The full Touch-Me-Not narrative */}
      <TheStorySection />

      {/* Finale — CTA */}
      <section
        className="relative py-20 md:py-32 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #012E43 0%, #014066 15%, #096C6C 50%, #014066 100%)' }}
      >
        {/* Ocean bloom */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 45%, rgba(1,103,149,0.25) 0%, transparent 70%)' }}
        />
        {/* Infrared glint */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 30% 25% at 85% 15%, rgba(233,74,60,0.08) 0%, transparent 60%)' }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-8 text-center">
          <p
            className="font-display text-4xl sm:text-5xl md:text-5xl lg:text-6xl text-sky-cream mb-10 md:mb-14"
            style={{ textShadow: '0 2px 24px rgba(1,46,67,0.6)' }}
          >
            Come experience it.
          </p>

          <div className="flex flex-col items-center gap-4">
            <PairedBookingCTAs size="md" tone="dark" />
            <a
              href={invitation.secondaryCta.href}
              className="inline-block border border-sky-cream/40 text-sky-cream/85 hover:text-sky-cream hover:border-sky-cream/70 px-8 py-3 rounded-full cta-text transition-all duration-500"
            >
              {invitation.secondaryCta.text}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
