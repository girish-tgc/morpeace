import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { hero } from '../../data/homeNarrative'

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const lines = containerRef.current.querySelectorAll('[data-hero-line]')
    const enter = containerRef.current.querySelector('[data-hero-enter]')

    if (prefersReduced) {
      gsap.set([...lines, enter], { opacity: 1 })
    } else {
      gsap.fromTo(lines,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.8, delay: 0.4, stagger: 0.6, ease: 'power3.out' }
      )
      gsap.fromTo(enter,
        { opacity: 0 },
        { opacity: 1, duration: 2, delay: 2.4, ease: 'power2.inOut' }
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
        {/* Tagline */}
        <p
          data-hero-line
          className="opacity-0 font-body text-xl md:text-2xl lg:text-3xl italic text-sky-cream/85 mb-8 md:mb-12"
          style={{ textShadow: '0 2px 20px rgba(1,46,67,0.5)' }}
        >
          {hero.subtitle}
        </p>

        {/* Brand anchor — the H1 */}
        <h1
          data-hero-line
          className="opacity-0 mb-10 md:mb-16 font-body text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed tracking-wide font-medium"
          style={{ textShadow: '0 1px 0 rgba(2,18,28,0.9), 0 2px 10px rgba(2,18,28,0.9), 0 0 28px rgba(2,18,28,0.7)' }}
        >
          <span className="block">Morpeace is not being built.</span>
          <span className="block">It is becoming.</span>
        </h1>

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
