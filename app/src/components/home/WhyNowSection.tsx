import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { whyNow } from '../../data/homeNarrative'

gsap.registerPlugin(ScrollTrigger)

export default function WhyNowSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const statementsRef = useRef<(HTMLParagraphElement | null)[]>([])
  const closingRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = gsap.context(() => {
      if (prefersReduced) return

      // Headline
      if (headlineRef.current) {
        gsap.fromTo(headlineRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 1.2, ease: 'power3.out',
            scrollTrigger: {
              trigger: headlineRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }

      // Statements stagger
      statementsRef.current.forEach((el, i) => {
        if (!el) return
        gsap.fromTo(el,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 1, delay: i * 0.15, ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })

      // Closing
      if (closingRef.current) {
        gsap.fromTo(closingRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0, duration: 1, ease: 'power3.out',
            scrollTrigger: {
              trigger: closingRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }
    }, sectionRef)

    return () => { ctx.revert() }
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-40 bg-parchment">
      <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
        <h2
          ref={headlineRef}
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-text-deep leading-tight mb-16 md:mb-24"
        >
          {whyNow.headline}
        </h2>

        <div className="space-y-12 md:space-y-16 mb-16 md:mb-24">
          {whyNow.statements.map((statement, i) => (
            <p
              key={i}
              ref={el => { statementsRef.current[i] = el }}
              className="font-body text-lg md:text-xl lg:text-2xl leading-relaxed text-text-deep/70 italic"
            >
              {statement}
            </p>
          ))}
        </div>

        <p
          ref={closingRef}
          className="font-body text-base md:text-lg text-teal-deep/80 tracking-wide"
        >
          {whyNow.closing}
        </p>
      </div>
    </section>
  )
}
