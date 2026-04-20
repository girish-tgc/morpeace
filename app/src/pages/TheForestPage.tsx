import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import AtlasSummary from '../components/forest/AtlasSummary'
import ConservationHighlights from '../components/forest/ConservationHighlights'
import NativeExoticBars from '../components/forest/NativeExoticBars'
import SpeciesGrid from '../components/forest/SpeciesGrid'
import FaunaGrid from '../components/forest/FaunaGrid'
import Checklists from '../components/forest/Checklists'
import EcologicalSignificance from '../components/forest/EcologicalSignificance'
import BaselineTable from '../components/forest/BaselineTable'

const heroShadow = '0 2px 20px rgba(1,46,67,0.55), 0 1px 6px rgba(1,46,67,0.35)'

export default function TheForestPage() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!heroRef.current) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return
    const ctx = gsap.context(() => {
      const lines = heroRef.current!.querySelectorAll('[data-hero-line]')
      gsap.fromTo(
        lines,
        { opacity: 0, y: 26 },
        { opacity: 1, y: 0, duration: 1.1, stagger: 0.14, ease: 'power3.out' },
      )
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <div>
      {/* === HERO === */}
      <section
        className="relative min-h-[72vh] flex items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #016795 0%, #014066 50%, #012E43 100%)' }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at top, rgba(9,108,108,0.4), transparent 65%)' }}
        />
        <div ref={heroRef} className="relative z-10 text-center px-8 py-24 max-w-3xl">
          <p data-hero-line className="eyebrow text-[#FF7D6B] mb-6" style={{ textShadow: heroShadow }}>
            Morpeace · Living Pasaydan · Year 0 Baseline
          </p>
          <h1
            data-hero-line
            className="font-display text-4xl md:text-6xl lg:text-7xl text-sky-cream leading-[1.05] mb-6"
            style={{ textShadow: heroShadow }}
          >
            The Biodiversity Atlas
          </h1>
          <p
            data-hero-line
            className="font-body text-xl md:text-2xl lg:text-3xl text-sky-cream leading-snug max-w-2xl mx-auto mb-4"
            style={{ textShadow: heroShadow }}
          >
            Morpeace &mdash; the most biodiverse private landscape.
          </p>
          <p
            data-hero-line
            className="font-body text-base md:text-lg italic text-[#FFD29A]/90 max-w-xl mx-auto mb-6"
            style={{ textShadow: heroShadow }}
          >
            A scientifically documented, benchmark biodiversity sanctuary.
          </p>
          <p
            data-hero-line
            className="font-body text-lg md:text-xl italic text-sky-cream/75 max-w-xl mx-auto"
            style={{ textShadow: heroShadow }}
          >
            Flora &amp; Fauna · ~10 acres · Satara, Maharashtra
          </p>

          <div
            data-hero-line
            className="mt-10 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-[#E94A3C]/60 to-transparent"
          />

          <div data-hero-line className="mt-10 max-w-xl mx-auto">
            <p className="font-devanagari text-lg md:text-xl text-sky-cream/90" style={{ textShadow: heroShadow }}>
              जो जे वांछिल तो ते लाभो, प्राणिजात ।
            </p>
            <p className="font-body text-sm md:text-base italic text-sky-cream/60 mt-2" style={{ textShadow: heroShadow }}>
              Whatever all beings desire, may that be granted to them. — Pasaydan
            </p>
          </div>
        </div>
      </section>

      <AtlasSummary />

      <ConservationHighlights />

      <NativeExoticBars />

      <SpeciesGrid />

      <FaunaGrid />

      <Checklists />

      <EcologicalSignificance />

      <BaselineTable />
    </div>
  )
}
