import { useRef } from 'react'
import { useCinematicReveal } from '../../hooks/useCinematicReveal'

export default function OurDream() {
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
          <div className="ken-burns-a absolute inset-0">
            <img
              ref={bgRef}
              src={`${import.meta.env.BASE_URL}photos/forest-dense-vegetation.jpeg`}
              alt=""
              className="absolute inset-0 w-full h-full object-cover scale-110"
              loading="lazy"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-soil-deep/70 via-black/60 to-soil-deep/80" />
        <div className="light-dapple" />
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative z-10 text-center px-8 py-24 max-w-3xl mx-auto">
        <p
          data-animate
          className="font-display text-base md:text-lg tracking-[0.3em] uppercase text-canopy-light/80 mb-10"
          style={{ textShadow: '0 1px 12px rgba(0,0,0,0.4)' }}
        >
          Our Dream
        </p>

        <div data-animate className="space-y-6 mb-12">
          <p
            className="font-poem text-xl md:text-2xl lg:text-3xl text-sky-cream/90 italic leading-relaxed"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
          >
            To let the soil return to its own breath.
          </p>
          <p
            className="font-poem text-xl md:text-2xl lg:text-3xl text-sky-cream/90 italic leading-relaxed"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
          >
            To see life unfold in rhythm and grace.
          </p>
          <p
            className="font-poem text-xl md:text-2xl lg:text-3xl text-sky-cream/80 italic leading-relaxed"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
          >
            Where roots speak to roots,
            <br />and every being finds its place.
          </p>
        </div>

        <p
          data-animate
          className="font-display text-lg md:text-2xl lg:text-3xl text-sky-cream"
          style={{ textShadow: '0 2px 24px rgba(107,143,60,0.3), 0 2px 20px rgba(0,0,0,0.5)' }}
        >
          Morpeace will not be built &mdash; it will become.
        </p>
      </div>
    </section>
  )
}
