import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { landSpeaks } from '../../data/homeNarrative'

gsap.registerPlugin(ScrollTrigger)

const BASE = import.meta.env.BASE_URL
const ts = '0 2px 24px rgba(0,0,0,0.7), 0 1px 8px rgba(0,0,0,0.5)'

export default function LandSpeaksSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const lineRefs = useRef<(HTMLParagraphElement | null)[]>([])

  useEffect(() => {
    if (!sectionRef.current) return

    // Video play/pause
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (entry.isIntersecting) videoRef.current.play().catch(() => {})
          else videoRef.current.pause()
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = gsap.context(() => {
      lineRefs.current.forEach((el) => {
        if (!el) return
        if (prefersReduced) {
          gsap.set(el, { opacity: 1, y: 0 })
          return
        }
        gsap.fromTo(el,
          { opacity: 0, y: 25 },
          {
            opacity: 1, y: 0, duration: 1.2, ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 82%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })
    }, sectionRef)

    return () => { ctx.revert(); observer.disconnect() }
  }, [])

  // Filter out empty lines for rendering, but keep them as spacers
  const renderLines = landSpeaks.lines

  return (
    <section ref={sectionRef} className="relative py-24 md:py-40 overflow-hidden">
      {/* Video background */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
        poster={`${BASE}photos/forest-path.jpeg`}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={`${BASE}photos/roots-growing.mp4`} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/65" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(0,0,0,0.4) 100%)' }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-8">
        {/* Section label */}
        <p className="text-center font-display text-xs tracking-[0.3em] uppercase text-sky-cream/30 mb-16 md:mb-24">
          If this land could speak
        </p>

        {/* Lines — generous spacing, large text, slow reveal */}
        <div className="space-y-8 md:space-y-12">
          {renderLines.map((line, i) => {
            if (line === '') {
              return <div key={i} className="h-8 md:h-16" />
            }
            return (
              <p
                key={i}
                ref={el => { lineRefs.current[i] = el }}
                className="font-body text-xl md:text-3xl lg:text-4xl text-sky-cream/85 italic text-center leading-relaxed"
                style={{ textShadow: ts }}
              >
                {line.split('\n').map((segment: string, si: number) => (
                  <span key={si}>
                    {si > 0 && <br />}
                    {segment}
                  </span>
                ))}
              </p>
            )
          })}
        </div>
      </div>
    </section>
  )
}
