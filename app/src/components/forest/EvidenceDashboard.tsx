import { dashboardStats } from '../../data/trees'

export default function EvidenceDashboard() {
  const stats = [
    { value: `${dashboardStats.totalTrees}`, label: 'Sentinel Trees', sublabel: 'measured & tagged' },
    { value: `${dashboardStats.totalSpecies}`, label: 'Distinct Species', sublabel: 'in this sample' },
    { value: `${dashboardStats.totalLifetimeCO2kg.toLocaleString()} kg`, label: 'CO\u2082 Stored', sublabel: 'lifetime sequestration' },
    { value: dashboardStats.shannonWienerIndex.toFixed(2), label: 'Shannon-Wiener', sublabel: 'diversity index' },
    { value: `${dashboardStats.totalAreaAcres}`, label: 'Acres', sublabel: 'of living forest' },
    { value: `${dashboardStats.lakeAreaSqft.toLocaleString()} sq ft`, label: 'Water Body', sublabel: 'the living lake' },
  ]

  return (
    <section className="py-16 md:py-20 px-6 md:px-8 bg-canvas">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="font-display text-xs tracking-[0.3em] uppercase text-teal-deep/60 mb-3">
            Evidence Dashboard
          </p>
          <p className="font-display text-2xl md:text-3xl text-text-deep">
            Year 1: 18 Trees. The Count Begins.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6 mb-10">
          {stats.map(stat => (
            <div
              key={stat.label}
              className="text-center p-5 md:p-6 rounded-xl border border-text-deep/10 bg-canvas"
            >
              <p className="font-mono text-3xl md:text-4xl text-turmeric font-medium">{stat.value}</p>
              <p className="font-display text-sm tracking-wider uppercase text-text-deep/85 mt-2">{stat.label}</p>
              <p className="font-body text-sm text-text-deep/50 italic">{stat.sublabel}</p>
            </div>
          ))}
        </div>

        {/* Methodology note */}
        <div className="max-w-2xl mx-auto text-center border-t border-text-deep/10 pt-8">
          <p className="font-display text-xs tracking-[0.2em] uppercase text-text-deep/40 mb-3">Methodology</p>
          <p className="font-body text-sm text-text-deep/60 leading-relaxed">
            Carbon calculations use the Chave et al. 2014 pantropical allometric equation.
            Each tree is measured by girth at breast height (GBH), height, and crown diameter.
            GPS coordinates recorded on-site. Biodiversity index calculated from species abundance.
          </p>
        </div>
      </div>
    </section>
  )
}
