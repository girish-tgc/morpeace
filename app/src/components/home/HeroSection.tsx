import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const BASE = import.meta.env.BASE_URL

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const featherRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (!containerRef.current) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const logo = containerRef.current.querySelector('[data-hero-logo]')
    const lines = containerRef.current.querySelectorAll('[data-hero-line]')
    const enter = containerRef.current.querySelector('[data-hero-enter]')
    const feather = featherRef.current

    if (prefersReduced) {
      gsap.set([logo, ...lines, enter, feather].filter(Boolean), { opacity: 1 })
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
      if (feather) {
        gsap.fromTo(feather,
          { opacity: 0, scale: 0.96 },
          { opacity: 0.38, scale: 1, duration: 3, delay: 1.2, ease: 'power2.out' }
        )
      }
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

      {/* Single resting peacock feather — bottom-right, tip angled toward the logo */}
      <img
        ref={featherRef}
        src={`${BASE}feather2.png`}
        alt=""
        aria-hidden="true"
        decoding="async"
        className="pointer-events-none absolute bottom-[-6%] right-[-8%] w-[52vw] max-w-[320px] sm:max-w-[400px] md:max-w-[520px] lg:max-w-[600px] opacity-0 select-none"
        style={{
          transform: 'rotate(-18deg)',
          filter: 'drop-shadow(0 12px 40px rgba(1,46,67,0.55)) drop-shadow(0 2px 8px rgba(233,74,60,0.08))',
        }}
      />

      <div ref={containerRef} className="relative z-10 flex flex-col items-center justify-center text-center px-8 max-w-3xl">
        {/* Logo */}
        <img
          data-hero-logo
          src={`${BASE}logo.png`}
          alt="Morpeace"
          className="opacity-0 w-[260px] sm:w-[340px] md:w-[500px] lg:w-[600px] mb-12 md:mb-16"
          style={{ filter: 'brightness(0) invert(1) drop-shadow(0 6px 30px rgba(1,46,67,0.6)) drop-shadow(0 2px 10px rgba(233,74,60,0.15))' }}
        />

        {/* Tagline */}
        <p
          data-hero-line
          className="opacity-0 font-body text-xl md:text-2xl lg:text-3xl italic text-sky-cream/85 mb-10 md:mb-14"
          style={{ textShadow: '0 2px 20px rgba(1,46,67,0.5)' }}
        >
          A forest, <em>unfolding.</em>
        </p>

        {/* Brand anchor */}
        <div data-hero-line className="opacity-0 mb-20 md:mb-28">
          <p
            className="font-body text-sm md:text-base text-sky-cream/55 leading-relaxed tracking-wide"
            style={{ textShadow: '0 1px 12px rgba(1,46,67,0.4)' }}
          >
            Morpeace is not being built.
          </p>
          <p
            className="font-body text-sm md:text-base text-sky-cream/55 leading-relaxed tracking-wide"
            style={{ textShadow: '0 1px 12px rgba(1,46,67,0.4)' }}
          >
            It is becoming.
          </p>
        </div>

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
