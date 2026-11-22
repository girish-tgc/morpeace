// Translates the property's standing CO₂e stock into everyday equivalents.
// Per-tonne factors are taken from §2.4 of the April 2026 baseline report
// (e.g. 171,000 km of driving for 42.68 t), scaled to the current tree census.

import { speciesStats as t } from '../../data/species'

const tonnes = t.totalCo2eKg / 1000
const fmt = (v: number, digits = 0) =>
  v.toLocaleString('en-IN', { maximumFractionDigits: digits, minimumFractionDigits: digits })
const perTonne = (reportValue: number) => (reportValue / 42.682) * tonnes

const equivalents = [
  { value: fmt(Math.round(perTonne(171000) / 1000) * 1000), unit: 'km of driving', sub: 'offset by the standing canopy' },
  { value: fmt(perTonne(296)), unit: 'Mumbai–Delhi flights', sub: 'in equivalent CO₂' },
  { value: fmt(perTonne(9.3)), unit: 'cars off the road', sub: 'for one full year' },
  { value: fmt(perTonne(18.6)), unit: 'households powered', sub: 'for one year' },
]

export default function CarbonEquivalents() {
  return (
    <section
      id="carbon"
      className="relative scroll-mt-28 py-20 md:py-24 text-sky-cream"
      style={{ background: 'linear-gradient(180deg, #016795 0%, #014066 100%)' }}
    >
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="eyebrow text-[#F5EBD0]/80 mb-3">§2.4 Carbon storage</p>
          <h2 className="font-display text-3xl md:text-4xl text-sky-cream mb-4">
            {fmt(tonnes, 1)} tonnes, made tangible.
          </h2>
          <div className="w-12 h-0.5 bg-[#E94A3C]/70 mx-auto mb-5" />
          <p className="font-body text-base md:text-lg text-sky-cream/75 leading-relaxed">
            The {t.totalTrees.toLocaleString('en-IN')} trees in the census store{' '}
            <strong className="text-sky-cream">{fmt(t.totalCo2eKg)}&nbsp;kg CO₂e</strong> —{' '}
            <strong className="text-sky-cream">{fmt(t.carbonKg / 1000, 1)}&nbsp;t of carbon</strong> held in
            <strong className="text-sky-cream"> {fmt(t.agbKg / 1000, 1)}&nbsp;t of above-ground biomass</strong>.
            What that means in everyday terms:
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {equivalents.map((e) => (
            <div
              key={e.unit}
              className="rounded-xl ring-1 ring-sky-cream/10 bg-[#012E43]/35 p-5 md:p-6 text-center"
            >
              <p className="font-mono tabular-nums text-2xl md:text-3xl text-turmeric break-words">
                {e.value}
              </p>
              <p className="eyebrow text-sky-cream/80 mt-3 text-[11px] leading-tight">{e.unit}</p>
              <p className="font-body text-xs italic text-sky-cream/50 mt-1.5 leading-snug">{e.sub}</p>
            </div>
          ))}
        </div>

        <p className="font-body text-xs italic text-sky-cream/45 mt-8 text-center max-w-3xl mx-auto leading-relaxed">
          Per-tree CO₂e calculated from measured girth, height and species-specific wood density
          (Global Wood Density Database); CO₂e = total biomass × 0.47 carbon × 3.67 (factor 1.72).
        </p>
      </div>
    </section>
  )
}
