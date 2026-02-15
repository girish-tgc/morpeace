import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function MeditationSpace() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const textRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!sectionRef.current) return

    // Play/pause video based on visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (entry.isIntersecting) videoRef.current.play().catch(() => {})
          else videoRef.current.pause()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(sectionRef.current)

    const ctx = gsap.context(() => {
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
            }
          }
        )
      })
    }, sectionRef)

    return () => { ctx.revert(); observer.disconnect() }
  }, [])

  return (
    <div ref={sectionRef} className="relative py-14 md:py-20 overflow-hidden">
      {/* Drone video background */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={`${import.meta.env.BASE_URL}photos/meditation-drone-1.mp4`} type="video/mp4" />
      </video>
      {/* Lighter overlay for readability */}
      <div className="absolute inset-0 bg-forest-night/55" />
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 50% 40%, rgba(26,47,26,0.15) 0%, rgba(15,35,19,0.35) 40%, rgba(28,21,8,0.55) 100%)' }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-8">
        {/* Section header */}
        <div ref={el => { textRefs.current[0] = el }} className="text-center mb-12">
          <h2 className="font-display text-base md:text-lg tracking-[0.3em] uppercase text-mango-gold/70 mb-6">
            The Meditation Space
          </h2>
          <p className="font-display text-2xl md:text-4xl text-sky-cream/90 mb-4">
            The Cave of the Inner Star
          </p>
          <p className="font-poem text-lg text-sky-cream/50 italic">
            Where stillness is always welcome
          </p>
        </div>

        {/* Kutastha Star + Breathing Orb */}
        <div ref={el => { textRefs.current[1] = el }} className="flex justify-center mb-12">
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            {/* Outer breathing glow */}
            <div
              className="absolute inset-0 forest-breathe-outer rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(212,160,23,0.15) 0%, transparent 70%)',
              }}
            />

            {/* Kutastha Star SVG */}
            <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
              {/* Golden outer ring — slow rotation */}
              <circle
                cx="100" cy="100" r="70"
                fill="none"
                stroke="#d4a017"
                strokeWidth="1.5"
                strokeOpacity="0.4"
                strokeDasharray="8 4"
                className="animate-slow-rotate"
                style={{ transformOrigin: '100px 100px' }}
              />
              {/* Golden halo glow */}
              <circle
                cx="100" cy="100" r="55"
                fill="none"
                stroke="#d4a017"
                strokeWidth="0.5"
                strokeOpacity="0.25"
              />

              {/* Blue field — infinity */}
              <circle
                cx="100" cy="100" r="40"
                fill="rgba(30,60,120,0.3)"
                stroke="rgba(70,120,200,0.3)"
                strokeWidth="1"
              />
              <circle
                cx="100" cy="100" r="40"
                fill="none"
                stroke="rgba(70,120,200,0.15)"
                strokeWidth="0.5"
                className="forest-breathe-inner"
                style={{ transformOrigin: '100px 100px' }}
              />

              {/* Silver center star — the soul */}
              <circle
                cx="100" cy="100" r="6"
                fill="rgba(220,225,235,0.8)"
                className="forest-breathe-text"
              />
              <circle
                cx="100" cy="100" r="12"
                fill="none"
                stroke="rgba(220,225,235,0.2)"
                strokeWidth="0.5"
              />

              {/* Subtle rays from center */}
              {[0, 60, 120, 180, 240, 300].map(angle => (
                <line
                  key={angle}
                  x1="100" y1="100"
                  x2={100 + 65 * Math.cos(angle * Math.PI / 180)}
                  y2={100 + 65 * Math.sin(angle * Math.PI / 180)}
                  stroke="rgba(212,160,23,0.08)"
                  strokeWidth="0.5"
                />
              ))}
            </svg>
          </div>
        </div>

        {/* Contemplative text blocks */}
        <div className="space-y-10 md:space-y-12">
          {/* Block 1 — from Peepal tree story */}
          <div ref={el => { textRefs.current[2] = el }} className="text-center">
            <p className="font-poem text-xl md:text-2xl text-sky-cream/80 italic leading-relaxed">
              &ldquo;Meditation is not taught here &mdash; it simply happens.&rdquo;
            </p>
            <p className="font-poem text-sm text-sky-cream/30 mt-4">
              From the story of the Peepal tree
            </p>
          </div>

          {/* Block 2 — Kutastha description */}
          <div ref={el => { textRefs.current[3] = el }} className="text-center">
            <p className="font-poem text-lg md:text-xl text-sky-cream/70 italic leading-relaxed max-w-2xl mx-auto">
              At Morpeace, a quiet stone cave holds a space for inner stillness.
              The golden halo is wisdom, the blue field is infinity, and the silver star is your soul.
              The sages call it the Kutastha &mdash; the doorway to peace.
            </p>
          </div>

          {/* Block 3 — Aspiration */}
          <div ref={el => { textRefs.current[4] = el }} className="text-center">
            <p className="font-poem text-lg md:text-xl text-sky-cream/60 italic leading-relaxed max-w-2xl mx-auto">
              When fear or anger clouds your heart, close your eyes.
              The same star shines in each of us.
              Even in the darkest night, this light never goes out.
            </p>
          </div>
        </div>

        {/* Inquire link */}
        <div ref={el => { textRefs.current[5] = el }} className="text-center mt-12">
          <div className="w-px h-10 mx-auto mb-6 bg-mango-gold/20" />
          <a
            href="mailto:rstalwalkar@yahoo.com?subject=Inquiring about the Meditation Space at Morpeace"
            className="inline-flex items-center gap-2 font-display text-sm tracking-[0.2em] uppercase text-mango-gold/60 hover:text-mango-gold/90 transition-colors"
          >
            <span>Inquire</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="opacity-60">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>
      </div>

    </div>
  )
}
