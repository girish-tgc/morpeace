import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function MeditationCave() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const textRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!sectionRef.current) return

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
    <div ref={sectionRef} className="relative py-16 md:py-24 overflow-hidden">
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={`${import.meta.env.BASE_URL}photos/meditation-drone-1.mp4`} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-forest-night/40" />
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 50% 40%, rgba(20,35,20,0.15) 0%, rgba(10,15,7,0.4) 40%, rgba(28,21,8,0.55) 100%)' }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-8">
        <div ref={el => { textRefs.current[0] = el }} className="text-center mb-16">
          <h2 className="font-display text-xs md:text-sm tracking-[0.3em] uppercase text-mango-gold mb-6">
            The Meditation Cave
          </h2>
          <p className="font-display text-3xl md:text-5xl text-sky-cream leading-tight mb-4">
            The Cave of the Inner Star
          </p>
          <p className="font-body text-base md:text-lg text-sky-cream/80 italic">
            Where stillness is always welcome
          </p>
        </div>

        <div ref={el => { textRefs.current[1] = el }} className="text-center mb-16 md:mb-20">
          <p className="font-body text-lg md:text-xl text-sky-cream/90 italic leading-relaxed max-w-2xl mx-auto">
            You expect darkness when you descend underground.
            That is the first illusion the cave dissolves.
          </p>
        </div>

        <div ref={el => { textRefs.current[2] = el }} className="text-center mb-16 md:mb-20">
          <p className="font-body text-lg md:text-xl text-sky-cream/90 italic leading-relaxed max-w-2xl mx-auto">
            Step down slowly. Feel the earth cool around you.
            <br />I am not a bunker. I am a womb.
          </p>
        </div>

        <div ref={el => { textRefs.current[3] = el }} className="text-center mb-16 md:mb-20">
          <p className="font-body text-lg md:text-xl text-sky-cream/85 italic leading-relaxed max-w-2xl mx-auto">
            There is a story the sages tell. A seeker once asked his master:
            &ldquo;Where do I find the light?&rdquo;
          </p>
          <p className="font-body text-lg md:text-xl text-mango-gold/90 italic leading-relaxed mt-4 max-w-2xl mx-auto">
            The master said: &ldquo;Close your eyes. The light you seek was never outside.&rdquo;
          </p>
        </div>

        {/* Kutastha Star */}
        <div ref={el => { textRefs.current[4] = el }} className="flex justify-center mb-16 md:mb-20">
          <div className="relative w-48 h-48 md:w-64 md:h-64">
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

        <div ref={el => { textRefs.current[5] = el }} className="text-center mb-16 md:mb-20">
          <p className="font-body text-lg md:text-xl text-sky-cream/90 italic leading-relaxed max-w-2xl mx-auto">
            When you sit within me, you are sitting inside that eclipse.
            The shadows you meet first are your own.
          </p>
          <p className="font-body text-lg md:text-xl text-sky-cream/85 italic leading-relaxed mt-6 max-w-2xl mx-auto">
            Stay. Do not rise.
          </p>
        </div>

        <div ref={el => { textRefs.current[6] = el }} className="text-center mb-16 md:mb-20">
          <p className="font-body text-lg md:text-xl text-sky-cream/90 italic leading-relaxed max-w-2xl mx-auto mb-6">
            The sages named it differently:
          </p>
          <p className="font-body text-lg md:text-xl text-sky-cream/85 italic leading-relaxed max-w-2xl mx-auto mb-4">
            The Upanishads called it the <span className="text-mango-gold">jyoti madhya</span> &mdash; the light at the center.
          </p>
          <p className="font-body text-lg md:text-xl text-sky-cream/85 italic leading-relaxed max-w-2xl mx-auto mb-4">
            The Sufis spoke of <span className="text-mango-gold">noor</span> &mdash; the radiance hidden within the heart.
          </p>
          <p className="font-body text-lg md:text-xl text-sky-cream/85 italic leading-relaxed max-w-2xl mx-auto mb-4">
            The Buddhists called it <span className="text-mango-gold">prabhasvara</span> &mdash; the luminous mind, clear and undisturbed.
          </p>
          <p className="font-body text-lg md:text-xl text-sky-cream/85 italic leading-relaxed max-w-2xl mx-auto">
            Each tradition, a different doorway. Each pointing to the same stillness.
          </p>
        </div>

        <div ref={el => { textRefs.current[7] = el }} className="text-center mb-12">
          <p className="font-body text-lg md:text-xl text-sky-cream/90 italic leading-relaxed max-w-2xl mx-auto">
            Underground is not beneath life.
            <br />It is beneath distraction.
          </p>
          <p className="font-body text-lg md:text-xl text-canopy-light/95 italic leading-relaxed mt-6 max-w-2xl mx-auto">
            And here, in stillness, you may find &mdash;
            <br />the light you seek was never absent.
          </p>
        </div>

      </div>
    </div>
  )
}
