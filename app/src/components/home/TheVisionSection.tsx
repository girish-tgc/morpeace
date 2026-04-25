import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { vision } from '../../data/homeNarrative'
import { pasaydanGroves } from '../../data/pasaydan'

gsap.registerPlugin(ScrollTrigger)

const BASE = import.meta.env.BASE_URL

export default function TheVisionSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const footRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = gsap.context(() => {
      if (prefersReduced) return

      // Head fade in
      if (headRef.current) {
        gsap.fromTo(headRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 1.2, ease: 'power3.out',
            scrollTrigger: {
              trigger: headRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }

      // Grove cards stagger
      if (scrollRef.current) {
        const cards = scrollRef.current.querySelectorAll('[data-grove-card]')
        gsap.fromTo(cards,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
            scrollTrigger: {
              trigger: scrollRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }

      // Footer fade in
      if (footRef.current) {
        gsap.fromTo(footRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0, duration: 1, ease: 'power3.out',
            scrollTrigger: {
              trigger: footRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }
    }, sectionRef)

    return () => { ctx.revert() }
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 md:py-40 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${BASE}photos/forest-dense-vegetation.webp)` }}
      />
      <div className="absolute inset-0 bg-forest-night/40" />
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 50% 40%, transparent 20%, rgba(6,22,18,0.55) 100%)' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8">
        {/* Head */}
        <div ref={headRef} className="text-center mb-16 md:mb-20">
          <p className="font-display text-xs md:text-sm tracking-[0.3em] uppercase text-canopy-light/70 mb-4">
            {vision.label}
          </p>
          <p className="font-body text-base md:text-lg text-sky-cream/70 italic mb-6">
            {vision.decoder}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-sky-cream leading-tight mb-8">
            {vision.headline}
          </h2>
          <p className="font-body text-lg md:text-xl text-sky-cream/85 italic leading-relaxed max-w-3xl mx-auto">
            {vision.description}
          </p>
        </div>

        {/* 9 Groves — horizontal scroll on mobile, grid on desktop */}
        <div
          ref={scrollRef}
          className="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto md:overflow-visible pb-4 md:pb-0 scrollbar-hide snap-x snap-proximity mb-16 md:mb-20"
        >
          {pasaydanGroves.map((grove) => (
            <div
              key={grove.id}
              data-grove-card
              className="flex-shrink-0 w-[260px] sm:w-[280px] md:w-auto snap-start bg-forest-night/75 backdrop-blur-sm border border-canopy-light/20 rounded-lg p-6 hover:border-canopy-light/40 transition-colors duration-500"
            >
              <div className="flex items-baseline gap-3 mb-3">
                <span className="font-mono text-sm text-canopy-light/70">{grove.id}</span>
                <h3 className="font-display text-base md:text-lg text-sky-cream tracking-wide">
                  {grove.name}
                </h3>
              </div>
              <p className="font-body text-sm md:text-base text-mango-gold/90 italic mb-3">
                {grove.meaning}
              </p>
              <p className="font-body text-sm md:text-base text-sky-cream/80 leading-relaxed">
                {grove.ecologicalFunction}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div ref={footRef} className="text-center">
          <p className="font-body text-lg md:text-xl text-sky-cream/85 italic leading-relaxed mb-8 max-w-2xl mx-auto">
            {vision.timeline}
          </p>
          <Link
            to={vision.cta.href}
            className="inline-block border border-canopy-light/40 text-canopy-light hover:text-sky-cream hover:border-canopy-light/70 px-6 md:px-8 py-3.5 min-h-[44px] rounded-full font-display text-sm tracking-[0.2em] uppercase transition-all duration-500"
          >
            {vision.cta.text}
          </Link>
        </div>
      </div>
    </section>
  )
}
