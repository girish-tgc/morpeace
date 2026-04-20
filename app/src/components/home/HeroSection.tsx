import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { hero, invitation } from '../../data/homeNarrative'

const BASE = import.meta.env.BASE_URL

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeReel, setActiveReel] = useState<number | null>(null)

  useEffect(() => {
    if (!containerRef.current) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const logo = containerRef.current.querySelector('[data-hero-logo]')
    const lines = containerRef.current.querySelectorAll('[data-hero-line]')
    const cta = containerRef.current.querySelector('[data-hero-cta]')
    const enter = containerRef.current.querySelector('[data-hero-enter]')

    if (prefersReduced) {
      gsap.set([logo, ...lines, cta, enter], { opacity: 1 })
    } else {
      gsap.fromTo(logo,
        { opacity: 0, scale: 0.92 },
        { opacity: 1, scale: 1, duration: 2.5, delay: 0.6, ease: 'power2.out' }
      )
      gsap.fromTo(lines,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.8, delay: 1.8, stagger: 0.6, ease: 'power3.out' }
      )
      gsap.fromTo(cta,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 1.6, delay: 4.4, ease: 'power2.out' }
      )
      gsap.fromTo(enter,
        { opacity: 0 },
        { opacity: 1, duration: 2, delay: 5.2, ease: 'power2.inOut' }
      )
    }
  }, [])

  return (
    <section className="min-h-[100svh] h-[100svh] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Cool ocean radial gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 70% at 50% 45%, #016795 0%, #096C6C 30%, #326872 60%, #014066 85%, #0B2E3A 100%)',
        }}
      />

      {/* Subtle ocean bloom for depth */}
      <div
        className="absolute inset-0 opacity-35"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(1,103,149,0.45) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Infrared glint — the lone warm punctuation */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 25% 25% at 15% 85%, rgba(233,74,60,0.09) 0%, transparent 60%)',
        }}
      />

      {/* Text scrim — dark pool behind the content so copy reads cleanly */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 55% 55% at 50% 50%, rgba(2,18,28,0.55) 0%, rgba(2,18,28,0.25) 45%, transparent 75%)',
        }}
      />

      <div ref={containerRef} className="relative z-10 flex flex-col items-center justify-center text-center px-8 max-w-3xl">
        {/* Logo */}
        <img
          data-hero-logo
          src={`${BASE}logo.webp`}
          alt="Morpeace"
          className="opacity-0 w-[260px] sm:w-[340px] md:w-[500px] lg:w-[600px] mb-8 md:mb-12"
          style={{ filter: 'brightness(0) invert(1) drop-shadow(0 6px 30px rgba(1,46,67,0.6)) drop-shadow(0 2px 10px rgba(233,74,60,0.15))' }}
        />

        {/* Tagline */}
        <p
          data-hero-line
          className="opacity-0 font-body text-xl md:text-2xl lg:text-3xl italic text-sky-cream/85 mb-6 md:mb-10"
          style={{ textShadow: '0 2px 20px rgba(1,46,67,0.5)' }}
        >
          {hero.subtitle}
        </p>

        {/* Brand anchor */}
        <div data-hero-line className="opacity-0 mb-8 md:mb-12">
          <p
            className="font-body text-lg md:text-xl lg:text-2xl text-white leading-relaxed tracking-wide font-medium"
            style={{ textShadow: '0 1px 0 rgba(2,18,28,0.9), 0 2px 10px rgba(2,18,28,0.9), 0 0 28px rgba(2,18,28,0.7)' }}
          >
            Morpeace is not being built.
          </p>
          <p
            className="font-body text-lg md:text-xl lg:text-2xl text-white leading-relaxed tracking-wide font-medium"
            style={{ textShadow: '0 1px 0 rgba(2,18,28,0.9), 0 2px 10px rgba(2,18,28,0.9), 0 0 28px rgba(2,18,28,0.7)' }}
          >
            It is becoming.
          </p>
        </div>

        {/* Four single-word doorways — each a handle to a different page, reel on hover */}
        <div
          data-hero-line
          className="opacity-0 mb-8 md:mb-10 relative flex flex-wrap justify-center gap-x-3 gap-y-3 md:gap-x-4"
        >
          {/* Shared reel preview — floats above the row on hover (desktop only, lazy-mounts) */}
          <div
            className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-full mb-4 hidden md:block w-56 lg:w-64 aspect-[4/5]"
            aria-hidden
          >
            {activeReel !== null && (
              <video
                key={hero.capsules[activeReel].label}
                src={`${BASE}${hero.capsules[activeReel].reel}`}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover rounded-2xl border border-sky-cream/20 shadow-[0_10px_40px_rgba(2,18,28,0.6)]"
              />
            )}
          </div>

          {hero.capsules.map((c, i) => (
            <span
              key={c.label}
              onMouseEnter={() => setActiveReel(i)}
              onMouseLeave={() => setActiveReel(null)}
              className="inline-flex items-center rounded-full border border-sky-cream/25 bg-sky-cream/[0.06] backdrop-blur-sm px-5 py-2 md:px-7 md:py-2.5 font-display text-base md:text-lg lg:text-xl tracking-wide text-sky-cream/90 leading-none shadow-[0_2px_18px_rgba(2,18,28,0.45)]"
            >
              {c.label}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          data-hero-cta
          href={invitation.primaryCta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-0 inline-block border border-sky-cream/40 text-sky-cream/85 hover:text-sky-cream hover:border-sky-cream/70 px-7 py-2.5 rounded-full cta-text transition-all duration-500 mb-10 md:mb-14"
        >
          {hero.cta.text}
        </a>

        {/* Enter gently */}
        <p
          data-hero-enter
          className="opacity-0 font-body text-base md:text-lg text-sky-cream/45 tracking-[0.2em]"
          style={{ textShadow: '0 1px 10px rgba(1,46,67,0.4)' }}
        >
          Enter gently
        </p>
      </div>
    </section>
  )
}
