import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function HeroSection() {
  const openingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!openingRef.current) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced) {
      gsap.set(openingRef.current, { opacity: 1 })
    } else {
      gsap.fromTo(openingRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 3, delay: 0.8, ease: 'power2.inOut' }
      )
    }
  }, [])

  return (
    <section
      className="h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at 50% 60%, #2a4a20 0%, #1b3316 40%, #122410 70%, #0a0f07 100%)' }}
    >
      {/* Breathing glow orbs */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="absolute forest-breathe-outer rounded-full"
          style={{
            width: '80vmin',
            height: '80vmin',
            background: 'radial-gradient(circle, rgba(107,143,60,0.3) 0%, rgba(42,74,32,0.15) 50%, transparent 70%)',
            filter: 'blur(30px)',
          }}
        />
        <div
          className="absolute forest-breathe-inner rounded-full"
          style={{
            width: '40vmin',
            height: '40vmin',
            background: 'radial-gradient(circle, rgba(168,194,86,0.45) 0%, rgba(107,143,60,0.2) 50%, transparent 80%)',
            filter: 'blur(20px)',
          }}
        />
      </div>
      <div
        className="absolute inset-0 forest-breathe-vignette pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(10,15,7,0.7) 100%)',
        }}
      />

      <div ref={openingRef} className="opacity-0 relative z-10 max-w-3xl px-8 text-center">
        <p className="font-display text-6xl md:text-8xl lg:text-9xl tracking-wide peacock-text mb-8">
          Morpeace
        </p>
        <p className="font-body text-xl md:text-2xl lg:text-3xl leading-relaxed text-sky-cream/90 italic forest-breathe-text">
          A forest is returning to its own breath.
        </p>
        <div className="mt-16">
          <div className="animate-bounce">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mx-auto opacity-25 text-sky-cream">
              <path d="M12 5v14m0 0l-7-7m7 7l7-7" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
