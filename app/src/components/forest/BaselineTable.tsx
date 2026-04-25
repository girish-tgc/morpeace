const rows = [
  { indicator: 'Total standing trees', value: '447', next: 'Q4 2026' },
  { indicator: 'Tree species richness', value: '62', next: 'Q4 2026' },
  { indicator: 'Native-tree proportion', value: '79.6%', next: 'Q4 2026' },
  { indicator: 'CO₂e standing stock', value: '42.6 t', next: 'Q4 2026' },
  { indicator: 'Tree survival rate', value: '100%', next: 'Q3 2026 (monsoon)' },
  { indicator: 'Bird species recorded', value: '58', next: 'Winter migration · Dec 2026' },
  { indicator: 'Butterfly species recorded', value: '20', next: 'Post-monsoon · Oct 2026' },
  { indicator: 'Spider genera recorded', value: '8', next: 'Monsoon · Aug 2026' },
]

export default function BaselineTable() {
  return (
    <section
      id="baseline"
      className="relative scroll-mt-28 py-20 md:py-24 bg-canvas text-text-deep"
    >
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="eyebrow text-teal-deep/65 mb-3">§5 Baseline for 10-year monitoring</p>
          <h2 className="font-display text-3xl md:text-4xl text-text-deep mb-4">
            Year 0. The count begins.
          </h2>
          <div className="w-12 h-0.5 bg-[#E94A3C]/70 mx-auto mb-5" />
          <p className="font-body text-base italic text-text-deep/65">
            Every metric here is a snapshot the next decade of surveys will compare itself against.
            Each indicator has a formally scheduled resurvey.
          </p>
        </div>

        <div className="-mx-6 md:mx-0 px-6 md:px-0 overflow-x-auto">
          <div className="min-w-[34rem] rounded-xl border border-text-deep/12 bg-white/50 overflow-hidden">
            <div className="grid grid-cols-[1fr_auto_auto] gap-4 md:gap-8 px-5 md:px-7 py-4 border-b border-text-deep/12 bg-text-deep/5">
              <span className="eyebrow text-text-deep/55">Indicator</span>
              <span className="eyebrow text-text-deep/55">Year-0</span>
              <span className="eyebrow text-text-deep/55">Next survey</span>
            </div>
            {rows.map((r) => (
              <div
                key={r.indicator}
                className="grid grid-cols-[1fr_auto_auto] gap-4 md:gap-8 px-5 md:px-7 py-4 border-b last:border-b-0 border-text-deep/8 items-baseline"
              >
                <span className="font-display text-sm md:text-base text-text-deep/90">{r.indicator}</span>
                <span className="font-mono text-sm md:text-base text-turmeric tabular-nums">{r.value}</span>
                <span className="font-body text-xs md:text-sm text-text-deep/55 italic">{r.next}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="font-body text-xs italic text-text-deep/50 mt-6 leading-relaxed max-w-3xl">
          A Shannon-Wiener diversity index for trees, soil-health parameters (Morpeace Soil Health Index, MSHI),
          and a formal acoustic-monitoring protocol for birds will be introduced at the Q4 2026 resurvey so
          the ten-year trajectory has the statistical backbone the project deserves.
        </p>

        <div className="mt-10 text-center text-xs italic text-text-deep/45">
          Carbon calculations: Chave et al. (2014) pan-tropical allometric equation; wood density from the
          Global Wood Density Database; biomass-to-CO₂e factor 1.83.
        </div>
      </div>
    </section>
  )
}
