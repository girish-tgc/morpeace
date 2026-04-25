import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { meditation } from '../../data/homeNarrative'

gsap.registerPlugin(ScrollTrigger)

const BASE = import.meta.env.BASE_URL

export default function MeditationSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const textRefs = useRef<(HTMLDivElement | null)[]>([])

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
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)

    const ctx = gsap.context(() => {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (prefersReduced) return

      textRefs.current.forEach((ref) => {
        if (!ref) return
        gsap.fromTo(ref,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 1.4, ease: 'power3.out',
            scrollTrigger: {
              trigger: ref,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })
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
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={`${BASE}photos/meditation-drone-1.mp4`} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[#014066]/78" />
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 50% 40%, rgba(1,64,102,0.22) 0%, rgba(6,72,72,0.5) 40%, rgba(1,46,67,0.72) 100%)' }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-8 text-center">
        {/* Label + Headline */}
        <div ref={el => { textRefs.current[0] = el }}>
          <p className="eyebrow text-[#F5EBD0]/60 mb-4">
            {meditation.label}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-sky-cream/90 mb-6">
            {meditation.headline}
          </h2>
        </div>

        {/* Key quote */}
        <div ref={el => { textRefs.current[1] = el }} className="mb-16 md:mb-20">
          <p className="font-body text-lg md:text-2xl text-sky-cream/75 italic leading-relaxed max-w-2xl mx-auto">
            {meditation.quote}
          </p>
        </div>

        {/* Kutastha Star */}
        <div ref={el => { textRefs.current[2] = el }} className="flex justify-center mb-16 md:mb-20">
          <div className="relative w-40 h-40 md:w-56 md:h-56">
            <div
              className="absolute inset-0 forest-breathe-outer rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(233,74,60,0.14) 0%, transparent 70%)' }}
            />
            <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
              <circle cx="100" cy="100" r="70" fill="none" stroke="#E94A3C" strokeWidth="1.5" strokeOpacity="0.45" strokeDasharray="8 4" className="animate-slow-rotate" style={{ transformOrigin: '100px 100px' }} />
              <circle cx="100" cy="100" r="55" fill="none" stroke="#E94A3C" strokeWidth="0.5" strokeOpacity="0.3" />
              <circle cx="100" cy="100" r="40" fill="rgba(1,103,149,0.32)" stroke="rgba(1,103,149,0.4)" strokeWidth="1" />
              <circle cx="100" cy="100" r="40" fill="none" stroke="rgba(1,103,149,0.2)" strokeWidth="0.5" className="forest-breathe-inner" style={{ transformOrigin: '100px 100px' }} />
              <circle cx="100" cy="100" r="6" fill="rgba(240,245,247,0.85)" className="forest-breathe-text" />
              <circle cx="100" cy="100" r="12" fill="none" stroke="rgba(240,245,247,0.22)" strokeWidth="0.5" />
              {[0, 60, 120, 180, 240, 300].map(angle => (
                <line key={angle} x1="100" y1="100" x2={100 + 65 * Math.cos(angle * Math.PI / 180)} y2={100 + 65 * Math.sin(angle * Math.PI / 180)} stroke="rgba(233,74,60,0.1)" strokeWidth="0.5" />
              ))}
            </svg>
          </div>
        </div>

        {/* Closing */}
        <div ref={el => { textRefs.current[3] = el }}>
          <p className="font-body text-lg md:text-xl text-sky-cream/70 italic leading-relaxed mb-10">
            {meditation.closing}
          </p>
          <Link
            to={meditation.cta.href}
            className="inline-block border border-[#E94A3C]/25 text-[#E94A3C]/60 hover:text-[#E94A3C] hover:border-[#E94A3C]/50 px-6 py-2 rounded-full cta-text transition-all duration-500"
          >
            {meditation.cta.text}
          </Link>
        </div>
      </div>
    </section>
  )
}
