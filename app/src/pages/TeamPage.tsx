import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { team } from '../data/homeNarrative'

gsap.registerPlugin(ScrollTrigger)

const BASE = import.meta.env.BASE_URL

type Member = typeof team.members[number]

function MemberPortrait({ member }: { member: Member }) {
  const [failed, setFailed] = useState(false)
  const src = `${BASE}${member.photo}`
  const fit = 'fit' in member && member.fit === 'contain' ? 'object-contain' : 'object-cover'

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-gradient-to-br from-[#016795]/25 to-[#096C6C]/25 ring-1 ring-[#F0F5F7]/10 shadow-[0_30px_80px_-30px_rgba(1,46,67,0.6)]">
      {!failed && (
        <img
          src={src}
          alt={member.name}
          onError={() => setFailed(true)}
          className={`absolute inset-0 h-full w-full ${fit}`}
        />
      )}
      {failed && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#FF7D6B]/35 bg-[#014066]/60 backdrop-blur-sm">
            <span className="font-display text-xl tracking-[0.2em] text-[#FF7D6B]">
              {member.initials}
            </span>
          </div>
          <p className="eyebrow text-sky-cream/45">
            portrait forthcoming
          </p>
        </div>
      )}
      {/* Cool wash to pull warm portraits into palette */}
      <div className="pointer-events-none absolute inset-0" style={{ background: 'rgba(50,104,114,0.14)', mixBlendMode: 'multiply' }} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#012E43]/55 via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-3 ring-1 ring-[#F0F5F7]/15" />
    </div>
  )
}

export default function TeamPage() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const rowRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    if (!sectionRef.current) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = gsap.context(() => {
      if (prefersReduced) return

      if (heroRef.current) {
        const lines = heroRef.current.querySelectorAll('[data-hero-line]')
        gsap.fromTo(
          lines,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            stagger: 0.12,
            ease: 'power3.out',
          },
        )
      }

      rowRefs.current.forEach((el) => {
        if (!el) return
        const photo = el.querySelector('[data-row-photo]')
        const body = el.querySelector('[data-row-body]')
        gsap.fromTo(
          [photo, body].filter(Boolean),
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 78%', toggleActions: 'play none none reverse' },
          },
        )
      })
    }, sectionRef)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <div
      ref={sectionRef}
      className="text-sky-cream"
      style={{ background: 'linear-gradient(180deg, #012E43 0%, #014066 12%, #096C6C 55%, #014066 100%)' }}
    >
      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-24 md:pt-48 md:pb-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(ellipse_at_top,_rgba(1,103,149,0.25),_transparent_60%)]" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-cream/15 to-transparent" />
        </div>

        <div ref={heroRef} className="relative z-10 mx-auto max-w-4xl px-6 md:px-8">
          <p
            data-hero-line
            className="mb-8 eyebrow text-[#FF7D6B]"
          >
            Morpeace &nbsp;&mdash;&nbsp; the people
          </p>

          <h1
            data-hero-line
            className="font-display text-4xl leading-[1.05] text-sky-cream md:text-6xl lg:text-7xl"
            style={{ textShadow: '0 2px 20px rgba(1,46,67,0.5)' }}
          >
            {team.headline}
          </h1>

          <p
            data-hero-line
            className="mt-8 max-w-2xl font-body text-xl italic text-sky-cream/80 md:text-2xl"
          >
            {team.subhead}
          </p>

          <div
            data-hero-line
            className="mt-10 max-w-xl space-y-1.5 font-body text-base text-sky-cream/65 md:text-lg"
          >
            {team.intro.map((line, i) =>
              line === '' ? (
                <div key={i} className="h-3" />
              ) : (
                <p key={i}>{line}</p>
              ),
            )}
          </div>

          <div data-hero-line className="mt-12 flex items-center gap-3">
            <span className="h-px w-10 bg-[#E94A3C]" />
            <span className="eyebrow text-sky-cream/50">
              {team.members.length} hands
            </span>
          </div>
        </div>
      </section>

      {/* Members */}
      <section className="relative pb-32 md:pb-40">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="space-y-24 md:space-y-36">
            {team.members.map((member, i) => {
              const reverse = i % 2 === 1
              return (
                <article
                  key={member.id}
                  ref={(el) => {
                    rowRefs.current[i] = el
                  }}
                  className={`grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-16 ${
                    reverse ? 'md:[&>[data-row-photo]]:order-2' : ''
                  }`}
                >
                  <div data-row-photo className="md:col-span-5">
                    <div className="relative">
                      <span className="absolute -top-3 -left-3 eyebrow text-[#FF7D6B]/80">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <MemberPortrait member={member} />
                    </div>
                  </div>

                  <div data-row-body className="md:col-span-7">
                    <div className="flex items-baseline gap-4">
                      <h2 className="font-display text-3xl leading-tight text-sky-cream md:text-4xl">
                        {member.name}
                      </h2>
                    </div>
                    {member.role && (
                      <p className="mt-2 eyebrow text-[#7FB0B5]">
                        {member.role}
                      </p>
                    )}
                    {'members' in member && member.members && (
                      <p className="mt-2 font-body text-base text-sky-cream/75 md:text-lg">
                        {member.members}
                      </p>
                    )}

                    <div className="mt-6 h-px w-10 bg-[#E94A3C]/70" />

                    <blockquote
                      className={`mt-6 whitespace-pre-line text-lg leading-[1.85] md:text-xl ${
                        member.lang === 'mr' ? 'font-devanagari text-sky-cream/85' : 'font-body italic text-sky-cream/80'
                      }`}
                    >
                      {member.quote}
                    </blockquote>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

    </div>
  )
}
