import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { villa } from '../../data/homeNarrative'
import PairedBookingCTAs from '../nav/PairedBookingCTAs'

gsap.registerPlugin(ScrollTrigger)

const BASE = import.meta.env.BASE_URL

export default function TheVillaSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const headRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    // Play/pause video on visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (entry.isIntersecting) videoRef.current.play().catch(() => {})
          else videoRef.current.pause()
        }
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = gsap.context(() => {
      if (prefersReduced) return

      if (headRef.current) {
        gsap.fromTo(headRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 1.2, ease: 'power3.out',
            scrollTrigger: { trigger: headRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
          }
        )
      }

      cardRefs.current.forEach((el, i) => {
        if (!el) return
        gsap.fromTo(el,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.7, delay: i * 0.1, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' },
          }
        )
      })

      if (ctaRef.current) {
        gsap.fromTo(ctaRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: ctaRef.current, start: 'top 90%', toggleActions: 'play none none reverse' },
          }
        )
      }
    }, sectionRef)

    return () => { ctx.revert(); observer.disconnect() }
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 md:py-40 overflow-hidden">
      {/* Video background */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
        poster={`${BASE}photos/forest-dense-vegetation.webp`}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={`${BASE}photos/drone-shot.mp4`} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[#014066]/40" />
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 50% 40%, transparent 20%, rgba(1,46,67,0.5) 100%)' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-8">
        {/* Head */}
        <div ref={headRef} className="text-center mb-16 md:mb-20">
          <p className="eyebrow text-[#F5EBD0]/90 mb-4">
            {villa.label}
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-sky-cream leading-tight mb-6">
            {villa.headline}
          </h2>
        </div>

        {/* Value cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16 md:mb-20">
          {villa.values.map((val, i) => (
            <div
              key={val.name}
              ref={el => { cardRefs.current[i] = el }}
              className="bg-[#012E43]/75 backdrop-blur-sm border border-sky-cream/20 rounded-lg p-6 hover:border-[#F5EBD0]/40 transition-colors duration-500"
            >
              <h3 className="font-display text-base md:text-lg tracking-[0.2em] uppercase text-[#F5EBD0] mb-3">
                {val.name}
              </h3>
              <p className="font-body text-sm md:text-base text-sky-cream/90 italic leading-relaxed">
                {val.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div ref={ctaRef} className="flex justify-center">
          <PairedBookingCTAs size="md" tone="dark" />
        </div>
      </div>
    </section>
  )
}
