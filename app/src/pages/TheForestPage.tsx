import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import SeoHead from '../components/SeoHead'
import { breadcrumbSchema, placeSchema } from '../lib/seo/schema'
import AtlasSummary from '../components/forest/AtlasSummary'
import CarbonEquivalents from '../components/forest/CarbonEquivalents'
import ConservationHighlights from '../components/forest/ConservationHighlights'
import DiversityIndex from '../components/forest/DiversityIndex'
import NativeExoticBars from '../components/forest/NativeExoticBars'
import SpeciesGrid from '../components/forest/SpeciesGrid'
import FaunaGrid from '../components/forest/FaunaGrid'
import Checklists from '../components/forest/Checklists'
import EcosystemAtWork from '../components/forest/EcosystemAtWork'
import SoilHealth from '../components/forest/SoilHealth'
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
      <SeoHead
        title="The Biodiversity Atlas — Morpeace Forest | Western Ghats"
        description="A scientifically documented 10-acre biodiversity sanctuary in the Western Ghats near Satara. 18 sentinel trees measured, 40+ mango varieties, native flora and fauna, and a decade of regeneration."
        path="/the-forest"
        jsonLd={[
          placeSchema(),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Biodiversity', path: '/the-forest' },
          ]),
        ]}
      />
      {/* === HERO === */}
      <section
        className="relative min-h-[72vh] flex items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #016795 0%, #014066 50%, #012E43 100%)' }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at top, rgba(9,108,108,0.4), transparent 65%)' }}
        />
        <div ref={heroRef} className="relative z-10 text-center px-6 md:px-8 py-20 md:py-24 max-w-3xl">
          <p data-hero-line className="eyebrow text-[#F5EBD0] mb-6" style={{ textShadow: heroShadow }}>
            Morpeace · Living Pasaydan · Year 0 Baseline
          </p>
          <h1
            data-hero-line
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-sky-cream leading-[1.05] mb-6"
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
            className="font-body text-base md:text-lg italic text-[#FFD29A]/90 max-w-xl mx-auto"
            style={{ textShadow: heroShadow }}
          >
            A scientifically documented, benchmark biodiversity sanctuary.
          </p>
        </div>
      </section>

      <EcologicalSignificance />

      <AtlasSummary />

      <CarbonEquivalents />

      <ConservationHighlights />

      <DiversityIndex />

      <NativeExoticBars />

      <SpeciesGrid />

      <FaunaGrid />

      <Checklists />

      <EcosystemAtWork />

      <SoilHealth />

      <BaselineTable />
    </div>
  )
}
