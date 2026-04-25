import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { invitation } from '../../data/homeNarrative'
import PairedBookingCTAs from '../nav/PairedBookingCTAs'

gsap.registerPlugin(ScrollTrigger)

export default function InvitationSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = gsap.context(() => {
      if (prefersReduced) return

      gsap.fromTo(contentRef.current!,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1.5, ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => { ctx.revert() }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-40 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #012E43 0%, #014066 20%, #096C6C 55%, #014066 85%, #012E43 100%)' }}
    >
      {/* Subtle ocean bloom for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 45%, rgba(1,103,149,0.25) 0%, transparent 70%)' }}
      />
      {/* Infrared glint — same lone warm punctuation as hero */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 30% 25% at 85% 15%, rgba(233,74,60,0.08) 0%, transparent 60%)' }}
      />

      <div ref={contentRef} className="relative z-10 max-w-3xl mx-auto px-6 md:px-8 text-center">
        {/* Brand anchor */}
        <p
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl peacock-text mb-8 md:mb-12"
          style={{ textShadow: '0 4px 40px rgba(1,46,67,0.65)' }}
        >
          {invitation.brandAnchor}
        </p>

        {/* Invitation text */}
        <p className="font-body text-lg md:text-2xl text-sky-cream/80 italic mb-12 md:mb-16">
          {invitation.text}
        </p>

        {/* CTAs */}
        <div className="flex flex-col items-center gap-4">
          <PairedBookingCTAs size="md" tone="dark" />
          <a
            href={invitation.secondaryCta.href}
            className="inline-block border border-sky-cream/15 text-sky-cream/55 hover:text-sky-cream/85 hover:border-sky-cream/35 px-6 md:px-8 py-3.5 min-h-[44px] rounded-full cta-text transition-all duration-500"
          >
            {invitation.secondaryCta.text}
          </a>
        </div>
      </div>
    </section>
  )
}
