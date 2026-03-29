import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { invitation } from '../../data/homeNarrative'

gsap.registerPlugin(ScrollTrigger)

const BASE = import.meta.env.BASE_URL

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
    <section ref={sectionRef} className="relative py-24 md:py-40 overflow-hidden">
      {/* Background */}
      <img
        src={`${BASE}photos/peacock-plumage.jpeg`}
        alt=""
        className="absolute inset-0 w-full h-full object-cover ken-burns-c"
        style={{ filter: 'brightness(0.15) saturate(1.2)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(0,0,0,0.5) 100%)' }}
      />

      <div ref={contentRef} className="relative z-10 max-w-3xl mx-auto px-8 text-center">
        {/* Brand anchor */}
        <p
          className="font-display text-4xl md:text-6xl lg:text-7xl peacock-text mb-8 md:mb-12"
          style={{ textShadow: '0 4px 40px rgba(0,0,0,0.6)' }}
        >
          {invitation.brandAnchor}
        </p>

        {/* Invitation text */}
        <p className="font-body text-lg md:text-2xl text-sky-cream/80 italic mb-12 md:mb-16">
          {invitation.text}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 md:mb-16">
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

        {/* Location */}
        <div className="mb-10">
          <a
            href={`https://www.google.com/maps?q=17.6105,73.9895`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-handwritten text-lg text-sky-cream/30 hover:text-sky-cream/50 transition-colors duration-300"
          >
            {invitation.location}
          </a>
          <p className="font-body text-xs text-sky-cream/20 mt-1">
            {invitation.locationLabel}
          </p>
        </div>

        {/* Explore links */}
        <div className="flex justify-center gap-6">
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
      </div>
    </section>
  )
}
