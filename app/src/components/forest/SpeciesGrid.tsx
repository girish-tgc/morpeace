import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { topSpecies, allSpecies, maxSpeciesCount, type Species, type Origin } from '../../data/species'

gsap.registerPlugin(ScrollTrigger)

function OriginPill({ origin }: { origin: Origin }) {
  const cls =
    origin === 'native'
      ? 'text-emerald-300/90 border-emerald-300/40 bg-emerald-900/20'
      : origin === 'exotic'
        ? 'text-amber-200/90 border-amber-300/40 bg-amber-900/20'
        : 'text-sky-cream/55 border-sky-cream/20 bg-sky-cream/5'
  const label = origin === 'native' ? 'Native' : origin === 'exotic' ? 'Exotic' : '—'
  return (
    <span className={`eyebrow text-[10px] px-2 py-0.5 rounded-full border ${cls}`}>{label}</span>
  )
}

function LeaderCard({ s, rank, maxCount }: { s: Species; rank: number; maxCount: number }) {
  const pct = Math.max(8, (s.count / maxCount) * 100)
  const body = (
    <div className="relative p-5 md:p-6 rounded-xl ring-1 ring-sky-cream/10 bg-[#012E43]/40 hover:ring-[#F5EBD0]/45 transition-all duration-500">
      <div className="flex items-start gap-5">
        <div className="font-display text-3xl md:text-4xl text-sky-cream/25 tabular-nums leading-none pt-1">
          {String(rank).padStart(2, '0')}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-baseline gap-3 flex-wrap">
            <h3 className="font-display text-xl md:text-2xl text-sky-cream leading-tight">{s.common}</h3>
            {s.iucn === 'VU' && (
              <span className="eyebrow text-[10px] px-2 py-0.5 rounded-full border border-[#E94A3C]/60 text-[#F5EBD0] bg-[#E94A3C]/10">
                IUCN VU
              </span>
            )}
            {s.sentinelTreeTag && (
              <span className="eyebrow text-[10px] px-2 py-0.5 rounded-full border border-turmeric/50 text-turmeric bg-turmeric/10">
                Story
              </span>
            )}
          </div>
          <p className="font-body text-sm italic text-sky-cream/55 mt-0.5">({s.scientific})</p>
          {s.marathi && (
            <p className="font-devanagari text-sm text-sky-cream/70 mt-1">{s.marathi}</p>
          )}

          <div className="mt-4 flex items-center gap-3">
            <div className="flex-1 h-1.5 rounded-full bg-sky-cream/8 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#F5EBD0] to-turmeric transition-all duration-700"
                style={{ width: `${pct}%` }}
              />
            </div>
            <span className="font-mono text-sm text-turmeric tabular-nums whitespace-nowrap">
              {s.count} {s.count === 1 ? 'tree' : 'trees'}
            </span>
          </div>

          <div className="mt-3 flex items-center justify-between gap-3 text-xs text-sky-cream/55">
            <OriginPill origin={s.origin} />
            {s.totalCo2eKg > 0 && (
              <span className="font-mono tabular-nums">
                {s.totalCo2eKg.toLocaleString()} kg CO₂
              </span>
            )}
          </div>

          {s.note && (
            <p className="font-body text-xs italic text-sky-cream/55 mt-3 leading-snug">{s.note}</p>
          )}
        </div>
      </div>
    </div>
  )

  const wrapperClass = 'block group'
  if (s.sentinelTreeTag) {
    return (
      <Link data-species-row to={`/the-forest/${s.sentinelTreeTag}`} className={wrapperClass}>
        {body}
      </Link>
    )
  }
  return <div data-species-row className={wrapperClass}>{body}</div>
}

function CompactRow({ s }: { s: Species }) {
  const content = (
    <div className="grid grid-cols-[minmax(0,1fr)_auto_auto] items-baseline gap-4 px-4 py-3 border-b border-sky-cream/8 hover:bg-[#012E43]/30 transition-colors">
      <div className="min-w-0">
        <span className="font-display text-sm md:text-base text-sky-cream">{s.common}</span>
        <span className="font-body text-xs italic text-sky-cream/45 ml-2">({s.scientific})</span>
        {s.marathi && (
          <span className="font-devanagari text-xs text-sky-cream/55 ml-2">{s.marathi}</span>
        )}
        {s.sentinelTreeTag && (
          <span className="eyebrow text-[9px] ml-2 px-1.5 py-0.5 rounded border border-turmeric/50 text-turmeric bg-turmeric/10">
            Story
          </span>
        )}
      </div>
      <OriginPill origin={s.origin} />
      <span className="font-mono text-sm text-turmeric tabular-nums">{s.count}</span>
    </div>
  )
  if (s.sentinelTreeTag) {
    return (
      <Link data-species-row to={`/the-forest/${s.sentinelTreeTag}`} className="block">
        {content}
      </Link>
    )
  }
  return <div data-species-row>{content}</div>
}

export default function SpeciesGrid() {
  const rootRef = useRef<HTMLDivElement>(null)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    if (!rootRef.current) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return
    const ctx = gsap.context(() => {
      const rows = rootRef.current!.querySelectorAll('[data-species-row]')
      rows.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 14 },
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
  }, [expanded])

  const rest = allSpecies.filter((s) => !topSpecies.includes(s))

  return (
    <section
      id="canopy"
      className="relative scroll-mt-28 py-20 md:py-28 text-sky-cream"
      style={{ background: 'linear-gradient(180deg, #012E43 0%, #014066 50%, #096C6C 100%)' }}
      ref={rootRef}
    >
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <p className="eyebrow text-[#F5EBD0]/80 mb-3">§2 — Flora · Tree Survey</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-sky-cream mb-4">The Wider Canopy</h2>
          <div className="w-12 h-0.5 bg-[#E94A3C]/70 mx-auto mb-5" />
          <p className="font-body text-base md:text-lg italic text-sky-cream/70">
            447 tagged trees. 64 species. The first fifteen carry most of the carbon —
            and the sacred grove carries the story.
          </p>
        </div>

        {/* Top 15 leaderboard */}
        <div className="mb-6 flex items-baseline gap-4">
          <h3 className="font-display text-lg md:text-xl text-sky-cream/95">Top 15 by count</h3>
          <div className="flex-1 h-px bg-sky-cream/10" />
          <p className="font-body text-xs italic text-sky-cream/45">Click trees with a <span className="text-turmeric">Story</span> badge to read their chapter.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-14">
          {topSpecies.map((s, i) => (
            <LeaderCard key={s.id} s={s} rank={i + 1} maxCount={maxSpeciesCount} />
          ))}
        </div>

        {/* Remaining species as compact list */}
        <div className="mb-6 flex items-baseline gap-4">
          <h3 className="font-display text-lg md:text-xl text-sky-cream/95">
            All {allSpecies.length} species
          </h3>
          <div className="flex-1 h-px bg-sky-cream/10" />
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            className="eyebrow text-[#F5EBD0] hover:text-sky-cream transition-colors min-h-[44px] px-2"
          >
            {expanded ? 'Collapse' : `Show remaining ${rest.length} →`}
          </button>
        </div>

        {expanded && (
          <div className="rounded-xl ring-1 ring-sky-cream/10 bg-[#012E43]/30 overflow-hidden">
            <div className="grid grid-cols-[minmax(0,1fr)_auto_auto] items-baseline gap-4 px-4 py-3 border-b border-sky-cream/15">
              <span className="eyebrow text-[10px] text-sky-cream/50">Species</span>
              <span className="eyebrow text-[10px] text-sky-cream/50">Origin</span>
              <span className="eyebrow text-[10px] text-sky-cream/50">Count</span>
            </div>
            {rest.map((s) => (
              <CompactRow key={s.id} s={s} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
