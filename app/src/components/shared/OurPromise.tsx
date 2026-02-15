import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function OurPromise() {
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
      {/* Background image */}
      <img
        ref={bgRef}
        src={`${import.meta.env.BASE_URL}photos/forest-path.jpeg`}
        alt=""
        className="absolute inset-0 w-full h-full object-cover scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-night/60 via-forest-night/50 to-soil-deep/70" />
      {/* Warm golden radial glow */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 45%, rgba(212,160,23,0.1) 0%, transparent 55%)' }} />

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
            We will cook with memory in the spice.
          </p>
          <p
            className="font-poem text-2xl md:text-3xl lg:text-4xl text-sky-cream/95 italic leading-relaxed"
            style={{ textShadow: '0 2px 24px rgba(0,0,0,0.8), 0 4px 40px rgba(0,0,0,0.5)' }}
          >
            We will listen to the soil before we speak for it.
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
