import { useEffect, useMemo, useRef } from 'react'
import { gsap } from 'gsap'

const BASE = import.meta.env.BASE_URL

type Feather = {
  left: number
  size: number
  delay: number
  duration: number
  swayDuration: number
  swayDelay: number
  drift: number
  rotate: number
  opacity: number
}

function makeFeathers(count: number): Feather[] {
  const rand = (min: number, max: number) => min + Math.random() * (max - min)
  return Array.from({ length: count }, () => ({
    left: rand(5, 95),
    size: rand(150, 230),      // substantial, not tiny
    delay: rand(-80, 0),       // spread initial staggered positions
    duration: rand(65, 95),    // very slow descent — ~1 to 1.5 min per feather
    swayDuration: rand(9, 14),
    swayDelay: rand(-8, 0),
    drift: rand(-90, 90),
    rotate: rand(-25, 25),
    opacity: rand(0.28, 0.5),
  }))
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const feathers = useMemo(() => makeFeathers(5), [])

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

      {/* Slow-drifting peacock feathers — large, atmospheric */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden motion-reduce:hidden" aria-hidden="true">
        {feathers.map((f, i) => (
          <span
            key={i}
            className="absolute top-0"
            style={{
              left: `${f.left}%`,
              animation: `feather-fall ${f.duration}s linear ${f.delay}s infinite`,
              ['--feather-drift' as string]: `${f.drift}px`,
            }}
          >
            <span
              className="block"
              style={{
                animation: `feather-sway ${f.swayDuration}s ease-in-out ${f.swayDelay}s infinite alternate`,
              }}
            >
              <img
                src={`${BASE}feather2.png`}
                alt=""
                loading="lazy"
                decoding="async"
                style={{
                  width: `${f.size}px`,
                  height: 'auto',
                  opacity: f.opacity,
                  transform: `rotate(${f.rotate}deg)`,
                  filter: 'drop-shadow(0 6px 18px rgba(1,46,67,0.5))',
                }}
              />
            </span>
          </span>
        ))}
      </div>

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
