import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { regeneration } from '../../data/homeNarrative'

gsap.registerPlugin(ScrollTrigger)

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!ref.current) return

    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start: 'top 85%',
      onEnter: () => {
        if (hasAnimated.current) return
        hasAnimated.current = true
        const obj = { val: 0 }
        gsap.to(obj, {
          val: value,
          duration: 2,
          ease: 'power2.out',
          onUpdate: () => setDisplay(Math.round(obj.val)),
        })
      },
    })

    return () => { trigger.kill() }
  }, [value])

  return (
    <span ref={ref}>
      {display}{suffix}
    </span>
  )
}

export default function RegenerationSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headRef = useRef<HTMLDivElement>(null)
  const closingRef = useRef<HTMLDivElement>(null)

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

      if (closingRef.current) {
        gsap.fromTo(closingRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: closingRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
          }
        )
      }
    }, sectionRef)

    return () => { ctx.revert() }
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-40 bg-parchment">
      <div className="max-w-5xl mx-auto px-8">
        {/* Header */}
        <div ref={headRef} className="text-center mb-16 md:mb-24">
          <p className="font-display text-xs tracking-[0.3em] uppercase text-teal-deep/50 mb-4">
            What is changing
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-text-deep leading-tight">
            Measurable regeneration
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-16 md:mb-24">
          {regeneration.stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="font-display text-4xl md:text-6xl text-teal-deep mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="font-display text-sm md:text-base text-text-deep/80 tracking-wide mb-1">
                {stat.label}
              </p>
              <p className="font-body text-xs text-text-deep/40 italic">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>

        {/* Closing */}
        <div ref={closingRef} className="text-center">
          <p className="font-body text-base md:text-lg text-text-deep/60 italic mb-3">
            {regeneration.closing}
          </p>
          <p className="font-mono text-xs text-teal-deep/50 tracking-wider mb-8">
            {regeneration.trust}
          </p>
          <Link
            to={regeneration.cta.href}
            className="inline-block border border-teal-deep/30 text-teal-deep/70 hover:text-teal-deep hover:border-teal-deep/60 px-6 py-2 rounded-full font-display text-xs tracking-[0.2em] uppercase transition-all duration-500"
          >
            {regeneration.cta.text}
          </Link>
        </div>
      </div>
    </section>
  )
}
