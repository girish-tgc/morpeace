import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { guestReviews } from '../../data/reviews'

gsap.registerPlugin(ScrollTrigger)

const tagColors: Record<string, string> = {
  peace: 'bg-[#016795]/25 text-[#4AA7CC]',
  nature: 'bg-[#096C6C]/25 text-[#5FB3B3]',
  food: 'bg-[#E94A3C]/20 text-[#F5EBD0]',
  architecture: 'bg-[#326872]/30 text-[#8FB4BC]',
  hospitality: 'bg-[#5A8A93]/25 text-[#A8CCD4]',
}

export default function GuestVoicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headRef = useRef<HTMLDivElement>(null)
  const featuredRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const featured = guestReviews.find(r => r.featured)
  const others = guestReviews.filter(r => !r.featured)

  useEffect(() => {
    if (!sectionRef.current) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = gsap.context(() => {
      if (prefersReduced) return

      if (headRef.current) {
        gsap.fromTo(headRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: headRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
          }
        )
      }

      if (featuredRef.current) {
        gsap.fromTo(featuredRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: featuredRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
          }
        )
      }

      if (scrollRef.current) {
        gsap.fromTo(scrollRef.current,
          { opacity: 0 },
          {
            opacity: 1, duration: 1, ease: 'power2.out',
            scrollTrigger: { trigger: scrollRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
          }
        )
      }
    }, sectionRef)

    return () => { ctx.revert() }
  }, [])

  return (
    <section ref={sectionRef} className="section-dark py-24 md:py-40 overflow-hidden">
      <div className="max-w-6xl mx-auto px-8">
        {/* Head */}
        <div ref={headRef} className="text-center mb-12 md:mb-16">
          <p className="eyebrow text-[#7FB0B5]/55 mb-4">
            What our guests say
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-sky-cream leading-tight">
            Voices of Morpeace
          </h2>
        </div>

        {/* Featured review */}
        {featured && (
          <div ref={featuredRef} className="max-w-3xl mx-auto mb-12 md:mb-16">
            <div className="bg-forest-night/50 border border-canopy-light/10 rounded-xl p-8 md:p-10">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#F5EBD0]/75">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="font-body text-base md:text-lg text-sky-cream/80 italic leading-relaxed mb-6">
                "{featured.text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-display text-sm text-sky-cream/90">{featured.name}</p>
                  <p className="font-body text-xs text-sky-cream/40">{featured.date}</p>
                </div>
                <div className="flex gap-2">
                  {featured.tags.map(tag => (
                    <span key={tag} className={`px-2 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider ${tagColors[tag] || 'bg-sky-cream/10 text-sky-cream/50'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Scrollable reviews */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
        >
          {others.map((review, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[300px] md:w-[340px] snap-start bg-forest-night/30 border border-sky-cream/8 rounded-lg p-6 hover:border-sky-cream/15 transition-colors duration-500"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, si) => (
                  <svg key={si} width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-[#F5EBD0]/55">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="font-body text-sm text-sky-cream/65 italic leading-relaxed mb-4">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-display text-xs text-sky-cream/80">{review.name}</p>
                  <p className="font-body text-[10px] text-sky-cream/30">{review.date}</p>
                </div>
                <div className="flex gap-1">
                  {review.tags.slice(0, 2).map(tag => (
                    <span key={tag} className={`px-1.5 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-wider ${tagColors[tag] || 'bg-sky-cream/10 text-sky-cream/50'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
