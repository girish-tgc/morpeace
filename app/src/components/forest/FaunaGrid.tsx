import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { faunaByCategory, faunaStats, type FaunaSpecies, type FaunaCategory } from '../../data/fauna'

gsap.registerPlugin(ScrollTrigger)

const BASE = import.meta.env.BASE_URL

const CATEGORY_ORDER: { id: FaunaCategory; label: string; blurb: string; countFact?: string }[] = [
  {
    id: 'birds',
    label: 'Birds',
    blurb: '58 species recorded on site by sight and Merlin Sound ID. 3 photographed during the survey window.',
    countFact: `${faunaStats.birds.confirmed} recorded · ${faunaStats.birds.photographed} photographed`,
  },
  {
    id: 'butterflies',
    label: 'Butterflies',
    blurb:
      'Grass-yellow and ringlet abundance is diagnostic of a healthy grass ground-layer; the blues indicate intact legume and flowering-understory resources.',
    countFact: `${faunaStats.butterflies.confirmed} recorded · ${faunaStats.butterflies.photographed} photographed`,
  },
  {
    id: 'spiders',
    label: 'Spiders',
    blurb:
      'Eight genera across five families — jumping, lynx, wolf, crab-ambush, huntsman. Sensitive indicators of arthropod base and micro-habitat complexity.',
    countFact: `${faunaStats.spiderGenera} genera · ${faunaStats.spiderFamilies} families`,
  },
  {
    id: 'insects',
    label: 'Insects & other arthropods',
    blurb: 'Two wild honeybee species, potter wasps, cicadas, hoverflies, dragonfly nymphs, stick mantises. An intact pollinator-predator community.',
  },
]

function FaunaTile({ f, onOpen }: { f: FaunaSpecies; onOpen: (f: FaunaSpecies) => void }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(f)}
      data-fauna-tile
      className="group relative overflow-hidden rounded-xl aspect-square bg-[#014066]/40 ring-1 ring-sky-cream/10 hover:ring-[#FF7D6B]/45 transition-all duration-500 text-left"
    >
      <img
        src={`${BASE}${f.photos[0]}`}
        alt={f.common}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, rgba(1,46,67,0) 40%, rgba(1,46,67,0.92) 100%)' }}
      />
      {f.photos.length > 1 && (
        <span className="absolute top-3 right-3 eyebrow text-[10px] text-sky-cream/85 bg-[#012E43]/70 backdrop-blur-sm px-2 py-0.5 rounded-full">
          {f.photos.length} photos
        </span>
      )}
      <div className="absolute inset-x-0 bottom-0 p-3 md:p-4">
        <p className="font-display text-sm md:text-base text-sky-cream leading-tight">{f.common}</p>
        {f.scientific && (
          <p className="font-body text-[11px] md:text-xs italic text-sky-cream/65 mt-0.5 leading-tight">
            ({f.scientific})
          </p>
        )}
      </div>
    </button>
  )
}

function Lightbox({ f, onClose }: { f: FaunaSpecies; onClose: () => void }) {
  const [idx, setIdx] = useState(0)
  const total = f.photos.length

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setIdx((i) => (i + 1) % total)
      if (e.key === 'ArrowLeft') setIdx((i) => (i - 1 + total) % total)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, total])

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8 bg-[#012E43]/95 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 rounded-full flex items-center justify-center text-sky-cream/80 hover:text-[#FF7D6B] bg-[#012E43]/60 ring-1 ring-sky-cream/15"
      >
        ×
      </button>

      <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
        <img
          src={`${BASE}${f.photos[idx]}`}
          alt={f.common}
          className="w-full max-h-[75vh] object-contain rounded-xl"
        />

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={() => setIdx((i) => (i - 1 + total) % total)}
              className="absolute left-2 md:-left-14 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-sky-cream/80 hover:text-[#FF7D6B] bg-[#012E43]/60 ring-1 ring-sky-cream/15"
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => setIdx((i) => (i + 1) % total)}
              className="absolute right-2 md:-right-14 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-sky-cream/80 hover:text-[#FF7D6B] bg-[#012E43]/60 ring-1 ring-sky-cream/15"
              aria-label="Next"
            >
              ›
            </button>
          </>
        )}

        <div className="mt-5 text-center">
          <p className="font-display text-xl md:text-2xl text-sky-cream">{f.common}</p>
          {f.scientific && (
            <p className="font-body text-sm italic text-sky-cream/60 mt-1">({f.scientific})</p>
          )}
          {f.family && (
            <p className="font-body text-xs italic text-sky-cream/45 mt-0.5">Family {f.family}</p>
          )}
          {f.note && (
            <p className="font-body text-sm italic text-sky-cream/65 mt-3 max-w-lg mx-auto">{f.note}</p>
          )}
          {total > 1 && (
            <p className="font-mono text-xs text-sky-cream/40 mt-3">
              {idx + 1} / {total}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default function FaunaGrid() {
  const rootRef = useRef<HTMLDivElement>(null)
  const [selected, setSelected] = useState<FaunaSpecies | null>(null)

  useEffect(() => {
    if (!rootRef.current) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return
    const ctx = gsap.context(() => {
      const tiles = rootRef.current!.querySelectorAll('[data-fauna-tile]')
      tiles.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 92%', toggleActions: 'play none none reverse' },
          },
        )
      })
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="companions"
      className="relative scroll-mt-28 py-20 md:py-28 text-sky-cream"
      style={{ background: 'linear-gradient(180deg, #096C6C 0%, #014066 55%, #012E43 100%)' }}
      ref={rootRef}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <p className="eyebrow text-[#FF7D6B]/80 mb-3">§3 — Fauna · Photographic Plates</p>
          <h2 className="font-display text-3xl md:text-5xl text-sky-cream mb-4">Companions</h2>
          <div className="w-12 h-0.5 bg-[#E94A3C]/70 mx-auto mb-5" />
          <p className="font-body text-base md:text-lg italic text-sky-cream/70">
            The wildlife is already voting with its wings.
          </p>
        </div>

        {CATEGORY_ORDER.map((cat) => {
          const items = faunaByCategory[cat.id]
          if (!items || items.length === 0) return null
          return (
            <div key={cat.id} className="mb-16 md:mb-20 last:mb-0">
              <div className="mb-4 md:mb-6">
                <div className="flex items-baseline gap-4 mb-2">
                  <h3 className="font-display text-xl md:text-2xl text-sky-cream/95">{cat.label}</h3>
                  {cat.countFact && (
                    <span className="font-mono text-xs text-sky-cream/50">{cat.countFact}</span>
                  )}
                  <div className="flex-1 h-px bg-sky-cream/10" />
                </div>
                <p className="font-body text-sm italic text-sky-cream/55 max-w-3xl leading-relaxed">
                  {cat.blurb}
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                {items.map((f) => (
                  <FaunaTile key={f.id} f={f} onOpen={setSelected} />
                ))}
              </div>
            </div>
          )
        })}
      </div>
      {selected && <Lightbox f={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
