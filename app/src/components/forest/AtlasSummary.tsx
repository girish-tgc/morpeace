import { speciesStats } from '../../data/species'
import { faunaStats } from '../../data/fauna'

const stats = [
  { value: speciesStats.totalTrees.toLocaleString('en-IN'), label: 'Trees tagged', sub: 'individually GPS-located' },
  { value: String(speciesStats.totalSpecies), label: 'Tree species', sub: 'scientific + local names' },
  { value: `${speciesStats.nativePct.toFixed(0)}%`, label: 'Native', sub: `${speciesStats.nativeCount} of ${speciesStats.totalTrees.toLocaleString('en-IN')} trees`, accent: 'emerald' as const },
  { value: `${(speciesStats.totalCo2eKg / 1000).toFixed(1)} t`, label: 'CO₂e stored', sub: 'Chave et al. 2014', accent: 'gold' as const },
  { value: String(faunaStats.birds.confirmed), label: 'Bird species', sub: 'acoustic + visual' },
  { value: String(faunaStats.butterflies.confirmed), label: 'Butterfly species', sub: 'photographic survey' },
]

export default function AtlasSummary() {
  return (
    <section
      id="summary"
      className="relative scroll-mt-28 py-20 md:py-28 text-sky-cream"
      style={{ background: 'linear-gradient(180deg, #012E43 0%, #016795 100%)' }}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="eyebrow text-[#F5EBD0]/80 mb-3">§Tree Census · Year-0 Baseline · April–October 2026</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-sky-cream mb-5 leading-tight">
            Every tree,<br/>one by one.
          </h2>
          <div className="w-12 h-0.5 bg-[#E94A3C]/70 mx-auto mb-6" />
          <p className="font-body text-base md:text-lg text-sky-cream/75 leading-relaxed">
            The tree census began with a first pass on 16–18 April 2026 and continued through October,
            including the Nakshatra Van saplings planted in July. Each tree was tagged, measured, geo-located
            and catalogued through the <a href="https://tgctree.web.app/" target="_blank" rel="noopener" className="underline decoration-[#F5EBD0]/60 underline-offset-4 hover:text-[#F5EBD0]">tgctree</a> platform.
            In parallel, a photographic and acoustic survey began documenting the property's resident fauna.
            What follows is the Year-0 baseline: {speciesStats.totalTrees.toLocaleString('en-IN')} trees so far,
            with {speciesStats.unidentified} still waiting for a confirmed name.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl ring-1 ring-sky-cream/10 bg-[#012E43]/30 p-5 md:p-7 text-center"
            >
              <p
                className={`font-mono tabular-nums text-3xl md:text-5xl font-medium break-words ${
                  s.accent === 'emerald'
                    ? 'text-emerald-300'
                    : s.accent === 'gold'
                      ? 'text-turmeric'
                      : 'text-sky-cream'
                }`}
              >
                {s.value}
              </p>
              <p className="eyebrow text-sky-cream/75 mt-3">{s.label}</p>
              <p className="font-body text-xs italic text-sky-cream/50 mt-1">{s.sub}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center text-sky-cream/55 text-xs italic font-body">
          Tree census: April–October 2026 · Aboli Kulkarni, Rohan Shetti, Girish Kulkarni and the Green Concept field team · Abhijeet Bayani (biodiversity lead) · prepared for Rohit Talwalkar, Morpeace Consulting LLP
        </div>
      </div>
    </section>
  )
}
