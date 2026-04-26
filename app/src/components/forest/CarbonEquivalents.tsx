// Translates the property's 42.7 t CO₂e standing stock into everyday equivalents
// drawn from §2.4 of the April 2026 baseline report.

const equivalents = [
  { value: '171,000', unit: 'km of driving', sub: 'offset by the standing canopy' },
  { value: '296', unit: 'Mumbai–Delhi flights', sub: 'in equivalent CO₂' },
  { value: '9.3', unit: 'cars off the road', sub: 'for one full year' },
  { value: '18.6', unit: 'households powered', sub: 'for one year' },
  { value: '45,000', unit: 'kg of oxygen', sub: 'released annually' },
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
            42.7 tonnes, made tangible.
          </h2>
          <div className="w-12 h-0.5 bg-[#E94A3C]/70 mx-auto mb-5" />
          <p className="font-body text-base md:text-lg text-sky-cream/75 leading-relaxed">
            The standing population stores <strong className="text-sky-cream">42,681.6&nbsp;kg CO₂e</strong> —
            <strong className="text-sky-cream">11.6&nbsp;t of carbon</strong> held in
            <strong className="text-sky-cream"> 19.3&nbsp;t of above-ground biomass</strong>.
            What that means in everyday terms:
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
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
          (Global Wood Density Database); biomass-to-CO₂e factor 1.83.
        </p>
      </div>
    </section>
  )
}
