import { useRef } from 'react'
import { useCinematicReveal } from '../../hooks/useCinematicReveal'

export default function OurPromise() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const bgWrapperRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLImageElement>(null)

  useCinematicReveal({ sectionRef, bgWrapperRef, contentRef, bgRef, crossfadeOut: false })

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background wrapper for B&W→color */}
      <div ref={bgWrapperRef} className="absolute inset-0">
        <div className="absolute inset-0 overflow-hidden">
          <div className="ken-burns-c absolute inset-0">
            <img
              ref={bgRef}
              src={`${import.meta.env.BASE_URL}photos/forest-path.jpeg`}
              alt=""
              className="absolute inset-0 w-full h-full object-cover scale-110"
              loading="lazy"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-forest-night/60 via-forest-night/50 to-soil-deep/70" />
        {/* Warm golden radial glow */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 45%, rgba(212,160,23,0.1) 0%, transparent 55%)' }} />
        <div className="light-dapple" />
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative z-10 text-center px-8 py-24 max-w-3xl mx-auto">
        <p
          data-animate
          className="font-display text-lg md:text-xl tracking-[0.3em] uppercase text-mango-gold mb-10"
          style={{ textShadow: '0 2px 16px rgba(0,0,0,0.7), 0 0 40px rgba(212,160,23,0.3)' }}
        >
          Our Promise
        </p>

        <div data-animate className="space-y-6 mb-12">
          <p
            className="font-poem text-2xl md:text-3xl lg:text-4xl text-sky-cream italic leading-relaxed"
            style={{ textShadow: '0 2px 24px rgba(0,0,0,0.8), 0 4px 40px rgba(0,0,0,0.5)' }}
          >
            We will plant with centuries in mind.
          </p>
          <p
            className="font-poem text-2xl md:text-3xl lg:text-4xl text-sky-cream/95 italic leading-relaxed"
            style={{ textShadow: '0 2px 24px rgba(0,0,0,0.8), 0 4px 40px rgba(0,0,0,0.5)' }}
          >
            We will guard the quiet and the unseen.
          </p>
          <p
            className="font-poem text-2xl md:text-3xl lg:text-4xl text-sky-cream/95 italic leading-relaxed"
            style={{ textShadow: '0 2px 24px rgba(0,0,0,0.8), 0 4px 40px rgba(0,0,0,0.5)' }}
          >
            We will listen more than we speak,
          </p>
        </div>

        <p
          data-animate
          className="font-display text-xl md:text-3xl lg:text-4xl text-mango-gold"
          style={{ textShadow: '0 2px 24px rgba(212,160,23,0.4), 0 4px 40px rgba(0,0,0,0.7)' }}
        >
          &hellip;and leave this Earth richer than we found it.
        </p>
      </div>
    </section>
  )
}
