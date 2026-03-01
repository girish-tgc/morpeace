import { useRef } from 'react'
import { useCinematicReveal } from '../../hooks/useCinematicReveal'

export default function TheUnfolding() {
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
          <div className="ken-burns-b absolute inset-0">
            <img
              ref={bgRef}
              src={`${import.meta.env.BASE_URL}photos/forest-dense-vegetation.jpeg`}
              alt=""
              className="absolute inset-0 w-full h-full object-cover scale-110"
              loading="lazy"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-soil-deep/75 via-black/65 to-soil-deep/85" />
        <div className="light-dapple" />
      </div>

      <div ref={contentRef} className="relative z-10 text-center px-8 py-24 max-w-3xl mx-auto">
        <div data-animate className="space-y-8 mb-12">
          <p
            className="font-display text-2xl md:text-3xl lg:text-4xl text-sky-cream leading-snug"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
          >
            This is not a project.
          </p>
          <p
            className="font-display text-2xl md:text-3xl lg:text-4xl text-canopy-light leading-snug"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
          >
            It is a patient unfolding.
          </p>
        </div>

        <div data-animate className="space-y-6 mb-12">
          <p
            className="font-poem text-xl md:text-2xl text-sky-cream/85 italic leading-relaxed"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
          >
            Saplings are placed with centuries in mind.
            <br />Water is guided, not forced.
            <br />Birdsong is invited, not engineered.
          </p>
        </div>

        <p
          data-animate
          className="font-display text-lg md:text-2xl text-sky-cream/70"
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
        >
          Ten acres rise &mdash; not in defiance, but in devotion.
        </p>
      </div>
    </section>
  )
}
