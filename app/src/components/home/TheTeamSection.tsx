import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { team } from '../../data/homeNarrative'

gsap.registerPlugin(ScrollTrigger)

export default function TheTeamSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

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

      cardRefs.current.forEach((el, i) => {
        if (!el) return
        gsap.fromTo(el,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.7, delay: i * 0.1, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none reverse' },
          }
        )
      })
    }, sectionRef)

    return () => { ctx.revert() }
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-40 bg-parchment">
      <div className="max-w-5xl mx-auto px-8">
        {/* Head */}
        <div ref={headRef} className="text-center mb-16 md:mb-24">
          <p className="font-display text-xs tracking-[0.3em] uppercase text-teal-deep/50 mb-4">
            The People
          </p>
          <h2 className="font-display text-2xl md:text-4xl text-text-deep leading-tight">
            {team.intro}
          </h2>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {team.members.map((member, i) => (
            <div
              key={member.id}
              ref={el => { cardRefs.current[i] = el }}
              className="bg-canvas border border-teal-deep/10 rounded-lg p-6 hover:border-teal-deep/25 transition-colors duration-500"
            >
              {/* Initials avatar */}
              <div className="w-14 h-14 rounded-full bg-teal-deep/10 flex items-center justify-center mb-4">
                <span className="font-display text-lg text-teal-deep/60 tracking-wider">
                  {member.initials}
                </span>
              </div>

              <h3 className="font-display text-base md:text-lg text-text-deep tracking-wide mb-1">
                {member.name}
              </h3>
              <p className="font-mono text-xs text-teal-deep/50 tracking-wider uppercase mb-3">
                {member.role}
              </p>
              <p className="font-body text-sm text-text-deep/60 italic leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
