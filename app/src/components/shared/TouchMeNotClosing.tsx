import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function TouchMeNotClosing() {
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

  const shadow = '0 2px 20px rgba(0,0,0,0.5), 0 1px 6px rgba(0,0,0,0.3)'

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={`${import.meta.env.BASE_URL}photos/mimosa-shy-plant.mp4`} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-3xl mx-auto px-8 py-24 text-center">
        <div className="space-y-10 md:space-y-12">
          <div ref={el => { textRefs.current[0] = el }}>
            <p className="font-poem text-xl md:text-2xl lg:text-3xl text-sky-cream/90 italic leading-relaxed" style={{ textShadow: shadow }}>
              I remain small. But I stand witness &mdash; to a promise kept.
            </p>
          </div>

          <div ref={el => { textRefs.current[1] = el }}>
            <p className="font-poem text-xl md:text-2xl lg:text-3xl text-sky-cream/85 italic leading-relaxed" style={{ textShadow: shadow }}>
              I don&rsquo;t see sensitivity as weakness. It is awareness.
            </p>
            <p className="font-poem text-xl md:text-2xl lg:text-3xl text-canopy-light/90 italic leading-relaxed mt-4" style={{ textShadow: shadow }}>
              And awareness is how forests return.
            </p>
          </div>

          <div ref={el => { textRefs.current[2] = el }}>
            <p className="font-poem text-xl md:text-2xl lg:text-3xl text-sky-cream/85 italic leading-relaxed" style={{ textShadow: shadow }}>
              Here at Morpeace, I still fold when touched &mdash; to reopen again.
            </p>
          </div>

          <div ref={el => { textRefs.current[3] = el }}>
            <p className="font-poem text-xl md:text-2xl text-sky-cream/80 italic leading-relaxed" style={{ textShadow: shadow }}>
              And if a forest can rise from sensitivity, perhaps nature does not seek anything more from us.
            </p>
            <p className="font-poem text-xl md:text-2xl text-sky-cream/75 italic leading-relaxed mt-4" style={{ textShadow: shadow }}>
              Perhaps she is just asking us to be more sensitive, more aware.
            </p>
          </div>

          {/* Bridge text */}
          <div ref={el => { textRefs.current[4] = el }} className="pt-6">
            <p className="font-poem text-lg md:text-xl text-mango-gold/80 italic leading-relaxed" style={{ textShadow: shadow }}>
              With this thought, why don&rsquo;t you take a stroll of Morpeace and see what me and my companions are up to..
            </p>

            {/* Scroll indicator */}
            <div className="mt-10 animate-bounce">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mx-auto opacity-30">
                <path d="M12 5v14m0 0l-7-7m7 7l7-7" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
