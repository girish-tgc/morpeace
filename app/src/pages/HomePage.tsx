import { Link } from 'react-router-dom'
import HeroSection from '../components/home/HeroSection'
import TheStorySection from '../components/home/TheStorySection'
import { invitation } from '../data/homeNarrative'

const BASE = import.meta.env.BASE_URL

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <HeroSection />

      {/* The full Touch-Me-Not narrative */}
      <TheStorySection />

      {/* Finale — CTA */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <img
          src={`${BASE}photos/peacock-plumage.jpeg`}
          alt=""
          className="absolute inset-0 w-full h-full object-cover ken-burns-c"
          style={{ filter: 'brightness(0.12) saturate(1.2)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />

        <div className="relative z-10 max-w-3xl mx-auto px-8 text-center">
          <p className="font-body text-lg md:text-2xl text-sky-cream/70 italic mb-10">
            {invitation.text}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href={invitation.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-mango-gold/20 border border-mango-gold/30 text-mango-gold hover:bg-mango-gold/30 hover:border-mango-gold/50 px-8 py-3 rounded-full font-display text-xs tracking-[0.2em] uppercase transition-all duration-500"
            >
              {invitation.primaryCta.text}
            </a>
            <a
              href={invitation.secondaryCta.href}
              className="inline-block border border-sky-cream/15 text-sky-cream/50 hover:text-sky-cream/80 hover:border-sky-cream/30 px-8 py-3 rounded-full font-display text-xs tracking-[0.2em] uppercase transition-all duration-500"
            >
              {invitation.secondaryCta.text}
            </a>
          </div>

          {/* Explore links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {invitation.exploreLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="font-display text-[10px] tracking-[0.2em] uppercase text-sky-cream/25 hover:text-sky-cream/60 transition-colors duration-500"
              >
                {link.text}
              </Link>
            ))}
          </div>

          <div className="mt-10">
            <a
              href="https://www.google.com/maps?q=17.6105,73.9895"
              target="_blank"
              rel="noopener noreferrer"
              className="font-handwritten text-base text-sky-cream/20 hover:text-sky-cream/40 transition-colors"
            >
              {invitation.location}
            </a>
            <p className="font-body text-[10px] text-sky-cream/15 mt-1">{invitation.locationLabel}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
