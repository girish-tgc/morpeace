import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { fauna, type FaunaSpecies } from '../../data/fauna'
import { Lightbox } from './FaunaGrid'

gsap.registerPlugin(ScrollTrigger)

const BASE = import.meta.env.BASE_URL
const byId = (id: string) => fauna.find((f) => f.id === id)

// All numbers below: Monsoon Biodiversity Report of Morpeace, 17 Nov 2026.
const STATS = [
  { value: '140', label: 'Kinds of animals', sub: 'in one monsoon round' },
  { value: '80', label: 'Bird species', sub: '+23 new this monsoon', accent: true },
  { value: '34', label: 'Butterflies', sub: '+14 new this monsoon', accent: true },
  { value: '7', label: 'Frogs & toads', sub: 'first amphibian records' },
  { value: '7', label: 'Dragonflies', sub: 'all breeding on site' },
  { value: '22', label: 'Spider genera', sub: 'up from 9 in summer' },
]

const SEASONS = [
  { group: 'Birds', summer: 57, monsoon: 63, total: 80 },
  { group: 'Butterflies', summer: 20, monsoon: 28, total: 34 },
  { group: 'Spider genera', summer: 9, monsoon: 17, total: 22 },
  { group: 'Dragonflies & damselflies', summer: 1, monsoon: 6, total: 7 },
]
const SEASON_MAX = 80

const SHARE = [
  { group: 'Birds', pct: 14, detail: '80 of 577' },
  { group: 'Amphibians', pct: 16, detail: '7 of 43 (genera)' },
  { group: 'Butterflies', pct: 12, detail: '34 of 284' },
  { group: 'Dragonflies', pct: 5, detail: '7 of 144' },
]

type Story = { title: string; tag: string; body: string; photoId?: string }
const STORIES: Story[] = [
  {
    title: 'Four cuckoos, calling',
    tag: 'Voices of the rain',
    photoId: 'grey-bellied-cuckoo',
    body: 'Indian, Grey-bellied and Fork-tailed Drongo-Cuckoos and the Asian Koel. Cuckoos lay their eggs in other birds’ nests, so they can breed only where their hosts breed in good numbers.',
  },
  {
    title: 'A weaver at its nest',
    tag: 'Breeding ground',
    photoId: 'baya-weaver',
    body: 'A male Baya Weaver at its bottle-shaped nest, woven from fresh grass. Morpeace is a nursery, not just a stop-over.',
  },
  {
    title: 'The Harial',
    tag: 'State bird of Maharashtra',
    photoId: 'yellow-footed-green-pigeon',
    body: 'The Yellow-footed Green Pigeon feeds mainly on figs — a direct link to the four wild fig species growing on the property.',
  },
  {
    title: 'A parrot that sleeps upside down',
    tag: 'Schedule II · CITES II',
    body: 'Two Vernal Hanging Parrots near the bridge. Only two research-grade records exist from all of Satara district.',
  },
  {
    title: 'A frog with no tadpole',
    tag: 'Western Ghats group',
    body: 'A bush frog (Raorchestes, likely R. ghatei). Its eggs hatch straight into tiny froglets on land. It needs shaded, moist shrubs — a good sign for the restoration.',
  },
  {
    title: 'A dragonfly of dusk',
    tag: 'No Satara record before',
    body: 'The Parakeet Darner hunts at dusk near shaded water. iNaturalist holds only 28 research-grade records for all of India, and none for Satara.',
  },
  {
    title: 'A spider new to Maharashtra',
    tag: 'Genus described in 2019',
    body: 'Proszynskia, a shiny jumping spider. Only 18 research-grade records in India and none from Maharashtra. A specialist will confirm it.',
  },
  {
    title: 'The first mammal',
    tag: 'Schedule I',
    photoId: 'golden-jackal',
    body: 'A Golden Jackal. It ranges over a large area, so its visits show that Morpeace is connected to the wider landscape.',
  },
]

const MOSAIC = ['baya-weaver', 'indian-grey-hornbill', 'indian-bullfrog', 'fungus-birds-nest', 'white-spotted-fantail']

const LESSONS = [
  ['Water is the engine', 'The lake, pond and stream support all 7 dragonflies, all 7 frog groups and 10 water birds.'],
  ['Grass is as valuable as trees', 'Quails, avadavats, munias and grass-yellow butterflies need grass left to stand and set seed.'],
  ['The orchard does double duty', 'It feeds 11 fruit-eating birds that spread native seeds. Its citrus is a nursery for 3 butterflies.'],
  ['Every season adds species', 'The second round raised the bird list by 40% and the butterfly list by 70%.'],
]

export default function MonsoonSurvey() {
  const rootRef = useRef<HTMLElement>(null)
  const [selected, setSelected] = useState<FaunaSpecies | null>(null)

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
      gsap.utils.toArray<HTMLElement>('[data-bar]').forEach((el) => {
        gsap.fromTo(
          el,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.1,
            ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 92%', toggleActions: 'play none none none' },
          },
        )
      })
    }, rootRef)
    return () => ctx.revert()
  }, [])

  const open = (id: string) => {
    const f = byId(id)
    if (f) setSelected(f)
  }

  return (
    <section
      id="monsoon"
      ref={rootRef}
      className="relative scroll-mt-28 overflow-hidden py-20 md:py-28 text-sky-cream"
      style={{ background: 'linear-gradient(180deg, #016795 0%, #096C6C 45%, #014066 100%)' }}
    >
      {/* soft rain streaks */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(105deg, #F0F5F7 0 1px, transparent 1px 22px)',
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 md:px-8">
        {/* Header */}
        <div data-reveal className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="eyebrow text-[#F5EBD0]/85 mb-3">New · Survey round 2 · Monsoon 2026</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl text-sky-cream mb-5 leading-[1.05]">
            When the rains came
          </h2>
          <div className="w-12 h-0.5 bg-[#E94A3C]/80 mx-auto mb-6" />
          <p className="font-body text-lg md:text-xl text-sky-cream/85 leading-relaxed">
            With the first heavy rains, frogs climb out of the soil, dragonflies lay eggs in fresh water
            and cuckoos begin to call. One monsoon walk-through found <strong className="text-[#F5EBD0]">140 kinds
            of animals</strong> &mdash; and the first frogs, reptile and mammal ever listed at Morpeace.
          </p>
        </div>

        {/* Photo mosaic */}
        <div data-reveal className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-3 md:gap-4 mb-14 md:mb-20">
          {MOSAIC.map((id, i) => {
            const f = byId(id)
            if (!f) return null
            return (
              <button
                key={id}
                type="button"
                onClick={() => open(id)}
                className={`group relative overflow-hidden rounded-2xl ring-1 ring-sky-cream/15 hover:ring-[#F5EBD0]/50 transition-all duration-500 text-left ${
                  i === 0 ? 'col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto' : 'aspect-square'
                }`}
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
                  style={{ background: 'linear-gradient(180deg, rgba(1,46,67,0) 50%, rgba(1,46,67,0.9) 100%)' }}
                />
                <div className="absolute inset-x-0 bottom-0 p-3 md:p-5">
                  <p className={`font-display text-sky-cream leading-tight ${i === 0 ? 'text-lg md:text-2xl' : 'text-sm md:text-base'}`}>
                    {f.common}
                  </p>
                  {f.scientific && (
                    <p className="font-body text-[11px] md:text-xs italic text-sky-cream/65 mt-0.5">({f.scientific})</p>
                  )}
                </div>
              </button>
            )
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mb-16 md:mb-24">
          {STATS.map((s) => (
            <div
              key={s.label}
              data-reveal
              className="rounded-xl ring-1 ring-sky-cream/15 bg-[#012E43]/35 backdrop-blur-sm p-4 md:p-5 text-center"
            >
              <p className={`font-mono tabular-nums text-3xl md:text-4xl font-medium ${s.accent ? 'text-[#F5EBD0]' : 'text-sky-cream'}`}>
                {s.value}
              </p>
              <p className="eyebrow text-[10px] md:text-[11px] text-sky-cream/80 mt-2">{s.label}</p>
              <p className="font-body text-xs italic text-sky-cream/55 mt-1">{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Stories */}
        <div data-reveal className="text-center max-w-2xl mx-auto mb-10">
          <h3 className="font-display text-2xl md:text-4xl text-sky-cream mb-3">Stories from the rains</h3>
          <p className="font-body text-base italic text-sky-cream/70">Eight records that make this monsoon special.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-16 md:mb-24">
          {STORIES.map((s) => {
            const f = s.photoId ? byId(s.photoId) : undefined
            return (
              <article
                key={s.title}
                data-reveal
                className="flex flex-col overflow-hidden rounded-2xl ring-1 ring-sky-cream/15 bg-[#012E43]/40"
              >
                {f && (
                  <button
                    type="button"
                    onClick={() => setSelected(f)}
                    className="group relative aspect-[16/10] overflow-hidden"
                    aria-label={`View photo: ${f.common}`}
                  >
                    <img
                      src={`${BASE}${f.photos[0]}`}
                      alt={f.common}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                  </button>
                )}
                <div className="flex-1 p-5 md:p-6">
                  <span className="eyebrow text-[10px] px-2 py-0.5 rounded-full border border-[#E94A3C]/60 text-[#F5EBD0] bg-[#E94A3C]/15">
                    {s.tag}
                  </span>
                  <h4 className="font-display text-xl text-sky-cream mt-3 mb-2">{s.title}</h4>
                  <p className="font-body text-sm text-sky-cream/75 leading-relaxed">{s.body}</p>
                </div>
              </article>
            )
          })}
          {/* Callout card fills the last grid slot */}
          <div
            data-reveal
            className="flex flex-col justify-center rounded-2xl p-6 md:p-7 ring-1 ring-[#F5EBD0]/30"
            style={{ background: 'linear-gradient(135deg, rgba(233,74,60,0.25), rgba(1,46,67,0.5))' }}
          >
            <p className="font-display text-5xl md:text-6xl text-[#F5EBD0] leading-none">1 in 7</p>
            <p className="font-body text-base md:text-lg text-sky-cream/90 mt-3 leading-snug">
              of all bird species known from Maharashtra have now been recorded on these ten acres.
            </p>
            <p className="font-body text-xs italic text-sky-cream/55 mt-3">80 of 577 · after only two seasonal rounds</p>
          </div>
        </div>

        {/* Two seasons + share of state */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-24">
          <div data-reveal className="rounded-2xl ring-1 ring-sky-cream/15 bg-[#012E43]/40 p-6 md:p-8">
            <h3 className="font-display text-xl md:text-2xl text-sky-cream mb-1">Two seasons, one list</h3>
            <p className="font-body text-sm italic text-sky-cream/60 mb-6">
              Only two-thirds of the birds were seen in both seasons. A single survey would have missed the rest.
            </p>
            <div className="space-y-5">
              {SEASONS.map((r) => (
                <div key={r.group}>
                  <div className="flex items-baseline justify-between mb-1.5">
                    <span className="font-body text-sm text-sky-cream/90">{r.group}</span>
                    <span className="font-mono text-xs text-sky-cream/60">
                      {r.summer} → {r.monsoon} · <span className="text-[#F5EBD0]">total {r.total}</span>
                    </span>
                  </div>
                  <div className="space-y-1">
                    {[
                      { v: r.summer, c: 'bg-sky-cream/35', l: 'Summer' },
                      { v: r.monsoon, c: 'bg-emerald-300/80', l: 'Monsoon' },
                      { v: r.total, c: 'bg-[#F5EBD0]', l: 'Year-0 total' },
                    ].map((b) => (
                      <div key={b.l} className="h-2 rounded-full bg-sky-cream/5 overflow-hidden" title={`${b.l}: ${b.v}`}>
                        <div
                          data-bar
                          className={`h-full rounded-full origin-left ${b.c}`}
                          style={{ width: `${Math.max(2, (b.v / SEASON_MAX) * 100)}%` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 mt-6 font-body text-xs text-sky-cream/65">
              <span className="flex items-center gap-1.5"><i className="w-3 h-2 rounded-full bg-sky-cream/35" /> Summer</span>
              <span className="flex items-center gap-1.5"><i className="w-3 h-2 rounded-full bg-emerald-300/80" /> Monsoon</span>
              <span className="flex items-center gap-1.5"><i className="w-3 h-2 rounded-full bg-[#F5EBD0]" /> Year-0 total</span>
            </div>
          </div>

          <div data-reveal className="rounded-2xl ring-1 ring-sky-cream/15 bg-[#012E43]/40 p-6 md:p-8">
            <h3 className="font-display text-xl md:text-2xl text-sky-cream mb-1">Ten acres, measured against a state</h3>
            <p className="font-body text-sm italic text-sky-cream/60 mb-6">
              Share of all species known from Maharashtra, already recorded at Morpeace.
            </p>
            <div className="space-y-5">
              {SHARE.map((r) => (
                <div key={r.group}>
                  <div className="flex items-baseline justify-between mb-1.5">
                    <span className="font-body text-sm text-sky-cream/90">{r.group}</span>
                    <span className="font-mono text-xs text-sky-cream/60">
                      {r.detail} · <span className="text-[#F5EBD0]">{r.pct}%</span>
                    </span>
                  </div>
                  <div className="h-3 rounded-full bg-sky-cream/5 overflow-hidden">
                    <div
                      data-bar
                      className="h-full rounded-full origin-left"
                      style={{ width: `${r.pct * 5}%`, background: 'linear-gradient(90deg, #E94A3C, #F5EBD0)' }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="font-body text-xs italic text-sky-cream/50 mt-6">
              Bar scale: full width = 20%. About a third of the 244 birds known from the nearby Sahyadri Tiger Reserve
              are also on the Morpeace list. Possible because water, grass, reeds, orchard, old trees and buildings
              sit side by side.
            </p>
          </div>
        </div>

        {/* Lessons */}
        <div data-reveal className="text-center max-w-2xl mx-auto mb-8">
          <h3 className="font-display text-2xl md:text-3xl text-sky-cream">What the rains taught us</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {LESSONS.map(([t, b], i) => (
            <div key={t} data-reveal className="rounded-xl p-5 bg-sky-cream/[0.06] ring-1 ring-sky-cream/10">
              <p className="font-mono text-xs text-[#E94A3C] mb-2">0{i + 1}</p>
              <p className="font-display text-lg text-sky-cream mb-1.5">{t}</p>
              <p className="font-body text-sm text-sky-cream/70 leading-relaxed">{b}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sky-cream/50 text-xs italic font-body">
          Monsoon Biodiversity Report, 17 November 2026 · Field team: Dhanaya Naik, Dr. Abhijeet Bayani, Dr. Aboli Kulkarni,
          Dr. Rohan Shetti, Dr. Girish Kulkarni · Green Concept Ecoscapes for Morpeace Consulting LLP ·{' '}
          <a href="#companions" className="underline underline-offset-4 decoration-sky-cream/40 hover:text-[#F5EBD0]">
            See all photographs
          </a>
        </p>
      </div>
      {selected && <Lightbox f={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
