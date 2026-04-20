import HeroSection from '../components/home/HeroSection'
import TheStorySection from '../components/home/TheStorySection'
import { invitation } from '../data/homeNarrative'

export default function HomePage() {
  return (
    <div>
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={invitation.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#F0E6CD] border border-[#F0E6CD] text-[#012E43] hover:bg-[#F5EDD9] hover:border-[#F5EDD9] px-8 py-3 rounded-full cta-text transition-all duration-500"
            >
              {invitation.primaryCta.text}
            </a>
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
