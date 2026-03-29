import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { visionaries } from '../data/homeNarrative'

gsap.registerPlugin(ScrollTrigger)

const BASE = import.meta.env.BASE_URL
const ts = '0 2px 24px rgba(0,0,0,0.7), 0 1px 8px rgba(0,0,0,0.5)'

export default function VisionariesPage() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const introRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!sectionRef.current) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = gsap.context(() => {
      if (prefersReduced) return

      if (introRef.current) {
        const lines = introRef.current.querySelectorAll('[data-intro-line]')
        gsap.fromTo(lines,
          { opacity: 0, y: 25 },
          {
            opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out',
            scrollTrigger: { trigger: introRef.current, start: 'top 75%', toggleActions: 'play none none reverse' },
          }
        )
      }

      cardRefs.current.forEach((el, i) => {
        if (!el) return
        gsap.fromTo(el,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 1, delay: i * 0.1, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' },
          }
        )
      })
    }, sectionRef)

    return () => { ctx.revert() }
  }, [])

  return (
    <div ref={sectionRef}>
      {/* Hero / Intro */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <img
          src={`${BASE}photos/forest-dense-vegetation.jpeg`}
          alt=""
          className="absolute inset-0 w-full h-full object-cover ken-burns-a"
          style={{ filter: 'brightness(0.25) saturate(1.3)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        <div className="light-dapple" />

        <div ref={introRef} className="relative z-10 max-w-3xl mx-auto px-8 text-center">
          <h1
            data-intro-line
            className="font-display text-4xl md:text-6xl lg:text-7xl peacock-text mb-8"
            style={{ textShadow: '0 4px 40px rgba(0,0,0,0.6)' }}
          >
            {visionaries.headline}
          </h1>

          <div className="space-y-2 md:space-y-3">
            {visionaries.intro.map((line, i) => {
              if (line === '') return <div key={i} data-intro-line className="h-4" />
              return (
                <p
                  key={i}
                  data-intro-line
                  className="font-body text-lg md:text-xl text-sky-cream/80 italic"
                  style={{ textShadow: ts }}
                >
                  {line}
                </p>
              )
            })}
          </div>
        </div>
      </section>

      {/* Visionary cards */}
      <section className="section-dark py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-8 space-y-16 md:space-y-24">
          {visionaries.members.map((member, i) => (
            <div
              key={member.id}
              ref={el => { cardRefs.current[i] = el }}
              className="relative"
            >
              {/* Thin accent line */}
              <div className="w-8 h-px bg-canopy-light/20 mb-8" />

              {/* Name + role */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-canopy-light/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-display text-sm text-canopy-light/60 tracking-wider">
                    {member.initials}
                  </span>
                </div>
                <div>
                  <h2 className="font-display text-lg md:text-xl text-sky-cream tracking-wide">
                    {member.name}
                  </h2>
                  {member.role && (
                    <p className="font-mono text-[10px] text-canopy-light/40 tracking-[0.2em] uppercase">
                      {member.role}
                    </p>
                  )}
                </div>
              </div>

              {/* Quote */}
              <blockquote className={`${member.lang === 'mr' ? 'font-devanagari' : 'font-body'} text-base md:text-xl leading-relaxed italic whitespace-pre-line ${member.lang === 'mr' ? 'text-sky-cream/75' : 'text-sky-cream/80'}`}>
                {member.quote.split('\n').map((line, li) => {
                  if (line.trim() === '') return <br key={li} />
                  return <span key={li}>{line}<br /></span>
                })}
              </blockquote>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
