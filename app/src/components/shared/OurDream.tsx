import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function OurDream() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const mm = gsap.matchMedia()
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.fromTo(contentRef.current.querySelectorAll('[data-animate]'),
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 1.5, stagger: 0.3, ease: 'power3.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            }
          }
        )
      }

      mm.add('(min-width: 768px)', () => {
        if (bgRef.current) {
          gsap.to(bgRef.current, {
            yPercent: -20,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            }
          })
        }
      })
    }, sectionRef)

    return () => { ctx.revert(); mm.revert() }
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <img
        ref={bgRef}
        src={`${import.meta.env.BASE_URL}photos/forest-dense-vegetation.jpeg`}
        alt=""
        className="absolute inset-0 w-full h-full object-cover scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-soil-deep/70 via-black/60 to-soil-deep/80" />

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
          Morpeace is not being built &mdash; it will become.
        </p>
      </div>
    </section>
  )
}
