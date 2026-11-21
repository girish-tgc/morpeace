import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { nakshatraTrees, nakshatraRings, nakshatraStats } from '../../data/nakshatraVan'

gsap.registerPlugin(ScrollTrigger)

const BASE = import.meta.env.BASE_URL

const PLANTING_PHOTOS = [
  { src: 'media/nakshatra/planting-1.webp', alt: 'The mandala site with pits dug in concentric rings' },
  { src: 'media/nakshatra/planting-2.webp', alt: 'The field team planting saplings in the July rains' },
  { src: 'media/nakshatra/planting-6.webp', alt: 'The team at the mandala, monsoon clouds over the Sahyadri hills' },
  { src: 'media/nakshatra/planting-5.webp', alt: 'Saplings going into the pre-dug pits at 3 m spacing' },
]

const pctGain = Math.round(
  ((nakshatraStats.speciesAfter - nakshatraStats.speciesBefore) / nakshatraStats.speciesBefore) * 100,
)

export default function NakshatraVan() {
  const rootRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!rootRef.current) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 22 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none none' },
          },
        )
      })
      const mandala = rootRef.current!.querySelector('[data-mandala]')
      if (mandala) {
        gsap.fromTo(
          mandala,
          { rotate: -12, scale: 0.92, opacity: 0 },
          {
            rotate: 0,
            scale: 1,
            opacity: 1,
            duration: 1.4,
            ease: 'power3.out',
            scrollTrigger: { trigger: mandala, start: 'top 85%', toggleActions: 'play none none none' },
          },
        )
      }
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="nakshatra-van"
      ref={rootRef}
      className="relative scroll-mt-28 overflow-hidden py-20 md:py-28 text-sky-cream"
      style={{ background: 'linear-gradient(180deg, #014066 0%, #064848 50%, #012E43 100%)' }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(232,176,75,0.35), transparent 60%)' }}
      />
      <div className="relative mx-auto max-w-6xl px-6 md:px-8">
        {/* Header */}
        <div data-reveal className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="eyebrow text-[#F5EBD0]/85 mb-3">New · Planted July 2026 · नक्षत्र वन</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl text-sky-cream mb-5 leading-[1.05]">
            Nakshatra Van
          </h2>
          <p className="font-body text-lg md:text-xl italic text-[#F5EBD0]/90 mb-5">A grove of the 27 lunar mansions</p>
          <div className="w-12 h-0.5 bg-[#E94A3C]/80 mx-auto mb-6" />
          <p className="font-body text-base md:text-lg text-sky-cream/80 leading-relaxed">
            Indian astronomy divides the moon&rsquo;s path into 27 Nakshatras, and classical texts such as the
            Brihat Samhita give each one a tree. Your birth star has a tree of its own. At Morpeace these 27 trees
            now stand in a 30&nbsp;m mandala of three rings &mdash; joining astronomy, Ayurveda and ecology in one place.
          </p>
        </div>

        {/* Mandala + rings */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 md:gap-12 items-center mb-16 md:mb-24">
          <a
            href={`${BASE}media/nakshatra/mandala.webp`}
            target="_blank"
            rel="noopener"
            data-mandala
            className="block rounded-3xl bg-[#FBF7EE] p-3 md:p-5 ring-1 ring-[#F5EBD0]/40 shadow-[0_20px_60px_rgba(1,46,67,0.5)]"
            aria-label="Open the Nakshatra Van mandala plan in full size"
          >
            <img
              src={`${BASE}media/nakshatra/mandala.webp`}
              alt="Nakshatra Van mandala plan: three concentric rings — 27 Nakshatra trees outside, Dashamula and medicinal plants in the middle, Ayurvedic herbs inside"
              loading="lazy"
              decoding="async"
              className="w-full h-auto rounded-2xl"
            />
          </a>

          <div>
            <div className="space-y-4 mb-8">
              {nakshatraRings.map((r) => (
                <div key={r.id} data-reveal className="flex gap-4 rounded-2xl bg-[#012E43]/40 ring-1 ring-sky-cream/10 p-5">
                  <span
                    className="mt-1 shrink-0 w-5 h-5 rounded-full ring-4 ring-[#012E43]/60"
                    style={{ background: r.color }}
                    aria-hidden
                  />
                  <div>
                    <p className="font-display text-lg text-sky-cream">
                      {r.label} <span className="font-mono text-sm" style={{ color: r.color }}>· {r.count} {r.unit}</span>
                    </p>
                    <p className="font-body text-sm text-sky-cream/70 leading-relaxed mt-1">{r.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div data-reveal className="grid grid-cols-3 gap-3">
              <div className="rounded-xl bg-sky-cream/[0.06] ring-1 ring-sky-cream/10 p-4 text-center">
                <p className="font-mono tabular-nums text-2xl md:text-3xl text-[#F5EBD0]">{nakshatraStats.planted}</p>
                <p className="font-body text-[11px] md:text-xs text-sky-cream/65 mt-1 leading-snug">saplings planted, tagged and measured</p>
              </div>
              <div className="rounded-xl bg-sky-cream/[0.06] ring-1 ring-sky-cream/10 p-4 text-center">
                <p className="font-mono tabular-nums text-2xl md:text-3xl text-[#F5EBD0]">{nakshatraStats.speciesAfter}</p>
                <p className="font-body text-[11px] md:text-xs text-sky-cream/65 mt-1 leading-snug">
                  plant species, up from {nakshatraStats.speciesBefore} (+{pctGain}%)
                </p>
              </div>
              <div className="rounded-xl bg-sky-cream/[0.06] ring-1 ring-sky-cream/10 p-4 text-center">
                <p className="font-mono tabular-nums text-2xl md:text-3xl text-[#F5EBD0]">{nakshatraStats.shannonAfter}</p>
                <p className="font-body text-[11px] md:text-xs text-sky-cream/65 mt-1 leading-snug">
                  Shannon diversity (H&prime;), up from {nakshatraStats.shannonBefore.toFixed(1)}
                </p>
              </div>
            </div>
            <p className="font-body text-xs italic text-sky-cream/50 mt-4">
              One planting season moved the checklist close to the Empress Botanical Garden in Pune (149 species).
            </p>
          </div>
        </div>

        {/* 27 trees */}
        <div data-reveal className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
          <h3 className="font-display text-2xl md:text-4xl text-sky-cream mb-3">Find your birth-star tree</h3>
          <p className="font-body text-base italic text-sky-cream/70">The outer ring, clockwise from north.</p>
        </div>
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
          {nakshatraTrees.map((t) => (
            <li
              key={t.n}
              data-reveal
              className="group flex items-center gap-4 rounded-xl bg-[#012E43]/45 ring-1 ring-sky-cream/10 hover:ring-[#E8B04B]/50 transition-colors duration-300 px-4 py-3"
            >
              <span className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-mono text-xs text-[#012E43] bg-[#E8B04B]">
                {t.n}
              </span>
              <div className="min-w-0">
                <p className="font-display text-base text-sky-cream leading-tight">
                  {t.nakshatra} <span className="font-body text-sm text-[#F5EBD0]/70">{t.devanagari}</span>
                </p>
                <p className="font-body text-sm text-sky-cream/75 leading-snug">
                  {t.tree}
                  {t.substitute && <span className="text-[#E8B04B]">*</span>}{' '}
                  <span className="italic text-sky-cream/50">({t.scientific})</span>
                </p>
              </div>
            </li>
          ))}
        </ol>
        <p className="font-body text-xs italic text-sky-cream/50 mb-16 md:mb-20">
          * Planted in place of the classical tree where it was not available at planting time. Trees were preferred over
          herbs, and some Nakshatras received more than one species.
        </p>

        {/* Planting photos */}
        <div data-reveal className="text-center max-w-2xl mx-auto mb-8">
          <h3 className="font-display text-2xl md:text-3xl text-sky-cream mb-2">Planted in the July rains</h3>
          <p className="font-body text-sm italic text-sky-cream/65">
            Every sapling was tagged, and its location, girth and height recorded &mdash; a measured baseline, not a
            one-time event.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {PLANTING_PHOTOS.map((p) => (
            <figure key={p.src} data-reveal className="relative overflow-hidden rounded-2xl aspect-[3/4] ring-1 ring-sky-cream/10">
              <img
                src={`${BASE}${p.src}`}
                alt={p.alt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-[1.05]"
              />
            </figure>
          ))}
        </div>

        <p className="mt-12 text-center text-sky-cream/50 text-xs italic font-body">
          Nakshatra Van and Medicinal Garden &mdash; Progress Report, 25 September 2026 · Green Concept Ecoscapes for
          Morpeace Consulting LLP
        </p>
      </div>
    </section>
  )
}
