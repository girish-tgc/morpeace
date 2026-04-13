import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const BASE = import.meta.env.BASE_URL

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const logo = containerRef.current.querySelector('[data-hero-logo]')
    const lines = containerRef.current.querySelectorAll('[data-hero-line]')
    const enter = containerRef.current.querySelector('[data-hero-enter]')

    if (prefersReduced) {
      gsap.set([logo, ...lines, enter], { opacity: 1 })
    } else {
      gsap.fromTo(logo,
        { opacity: 0, scale: 0.92 },
        { opacity: 1, scale: 1, duration: 2.5, delay: 0.6, ease: 'power2.out' }
      )
      gsap.fromTo(lines,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.8, delay: 1.8, stagger: 0.6, ease: 'power3.out' }
      )
      gsap.fromTo(enter,
        { opacity: 0 },
        { opacity: 1, duration: 2, delay: 4, ease: 'power2.inOut' }
      )
    }
  }, [])

  return (
    <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Dark teal radial gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 70% at 50% 45%, #0f5060 0%, #0a3545 25%, #071e2d 50%, #040f18 80%, #020a0f 100%)',
        }}
      />

      {/* Subtle texture overlay for depth */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(15,80,96,0.4) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div ref={containerRef} className="relative z-10 flex flex-col items-center justify-center text-center px-8 max-w-3xl">
        {/* Logo */}
        <img
          data-hero-logo
          src={`${BASE}logo.png`}
          alt="Morpeace"
          className="opacity-0 w-[280px] md:w-[380px] lg:w-[440px] mb-10 md:mb-14"
          style={{ filter: 'brightness(0.85) contrast(1.1)' }}
        />

        {/* Tagline */}
        <p
          data-hero-line
          className="opacity-0 font-body text-xl md:text-2xl lg:text-3xl italic text-sky-cream/80 mb-10 md:mb-14"
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}
        >
          A forest, <em>unfolding.</em>
        </p>

        {/* Brand anchor */}
        <div data-hero-line className="opacity-0 mb-20 md:mb-28">
          <p
            className="font-body text-sm md:text-base text-sky-cream/50 leading-relaxed tracking-wide"
            style={{ textShadow: '0 1px 12px rgba(0,0,0,0.3)' }}
          >
            Morpeace is not being built.
          </p>
          <p
            className="font-body text-sm md:text-base text-sky-cream/50 leading-relaxed tracking-wide"
            style={{ textShadow: '0 1px 12px rgba(0,0,0,0.3)' }}
          >
            It is becoming.
          </p>
        </div>

        {/* Enter gently */}
        <p
          data-hero-enter
          className="opacity-0 font-body text-base md:text-lg text-sky-cream/40 tracking-[0.15em]"
          style={{ textShadow: '0 1px 10px rgba(0,0,0,0.3)' }}
        >
          Enter gently
        </p>
      </div>
    </section>
  )
}
