import { speciesStats } from '../../data/species'

type Bar = { label: string; count: number; pct: number; color: string; text: string }

export default function NativeExoticBars() {
  const bars: Bar[] = [
    { label: 'Native Indian', count: speciesStats.nativeCount, pct: speciesStats.nativePct, color: 'bg-gradient-to-r from-emerald-500 to-emerald-400', text: 'text-emerald-300' },
    { label: 'Introduced / exotic', count: speciesStats.exoticCount, pct: speciesStats.exoticPct, color: 'bg-gradient-to-r from-amber-500 to-amber-400', text: 'text-amber-300' },
    { label: 'Unclassified', count: speciesStats.unclassifiedCount, pct: speciesStats.unclassifiedPct, color: 'bg-gradient-to-r from-sky-cream/30 to-sky-cream/20', text: 'text-sky-cream/55' },
  ]

  return (
    <section
      className="relative py-16 md:py-20 text-sky-cream"
      style={{ background: '#014066' }}
    >
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        <div className="mb-8">
          <p className="eyebrow text-[#F5EBD0]/80 mb-3">§2.2 Native vs. Exotic composition</p>
          <h3 className="font-display text-2xl md:text-3xl text-sky-cream mb-2">Four in five trees are native.</h3>
          <p className="font-body text-sm italic text-sky-cream/65 max-w-2xl">
            The property exceeds the threshold at which the landscape is recognisable as Indian —
            rather than generically ornamental — to the native fauna.
          </p>
        </div>

        <div className="space-y-4">
          {bars.map((b) => (
            <div key={b.label}>
              <div className="flex justify-between items-baseline mb-1.5">
                <span className={`font-display text-sm md:text-base ${b.text}`}>{b.label}</span>
                <span className="font-mono text-xs text-sky-cream/65 tabular-nums">
                  {b.count} trees · {b.pct.toFixed(1)}%
                </span>
              </div>
              <div className="h-2.5 rounded-full bg-sky-cream/8 overflow-hidden">
                <div className={`h-full rounded-full ${b.color}`} style={{ width: `${b.pct}%` }} />
              </div>
            </div>
          ))}
        </div>

        <p className="font-body text-xs italic text-sky-cream/45 mt-6 leading-relaxed">
          Classification is rule-based on scientific name. Long-naturalised species (e.g. <em>Melia azedarach</em>)
          are treated as native. Unclassified is a small residual of generic "Other" records and species
          requiring taxonomic verification.
        </p>
      </div>
    </section>
  )
}
