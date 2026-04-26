// §7 Soil Health — April 2026 baseline (composite topsoil 0–15 cm, 1.5-acre former sugarcane patch).
// Source: Biodiversity Survey Report, Table 7 — ISO 9001:2015 accredited assay.

type Status = 'good' | 'low' | 'borderline'

const params: { name: string; value: string; range: string; status: Status }[] = [
  { name: 'pH', value: '7.70', range: '6.5 – 8.5', status: 'good' },
  { name: 'Electrical conductivity', value: '0.18 dS/m', range: '< 1.0', status: 'good' },
  { name: 'Organic carbon', value: '0.99 %', range: '> 1.5 %', status: 'borderline' },
  { name: 'Available nitrogen', value: '408.80 kg/ha', range: '280 – 450', status: 'good' },
  { name: 'Available phosphorus', value: '5.77 kg/ha', range: '13 – 22', status: 'low' },
  { name: 'Available potassium', value: '111.46 kg/ha', range: '181 – 240', status: 'low' },
  { name: 'Calcium', value: 'Sufficient', range: 'Within range', status: 'good' },
  { name: 'Magnesium', value: 'Sufficient', range: 'Within range', status: 'good' },
  { name: 'Free lime (CaCO₃)', value: '11.45 %', range: 'Locks phosphate', status: 'borderline' },
  { name: 'Bacterial count', value: '24 × 10⁶ CFU/g', range: 'Active microbiome', status: 'good' },
  { name: 'Fungal count', value: '13 × 10³ CFU/g', range: 'Room to grow', status: 'borderline' },
]

const prescription = [
  {
    title: 'Lift organic carbon',
    body: 'Compost, farmyard manure and in-situ leaf-litter retention across the orchards and restoration plot; target > 1.2% OC at the next retest.',
  },
  {
    title: 'Fix nitrogen on-site',
    body: 'Legume cover crops — Crotalaria juncea (sunn hemp), Sesbania, Cajanus (pigeon pea) — rotated through the understory to fix N biologically and loosen compacted horizons.',
  },
  {
    title: 'Unlock phosphorus',
    body: 'Rock-phosphate co-applied with FYM and composted organic acids to mobilise phosphate past the 11.45% lime barrier; optionally a phosphate-solubilising microbial inoculum.',
  },
  {
    title: 'Restore potassium naturally',
    body: 'Wood-ash from on-site pruning, biochar from controlled burn of invasive biomass, and mulch-in-place of coconut and banana residues.',
  },
  {
    title: 'Retest at Q4 2026',
    body: 'The same 13-parameter panel, same sampling points, so the trajectory is unambiguous.',
  },
]

function StatusPill({ status }: { status: Status }) {
  if (status === 'good') {
    return (
      <span className="eyebrow text-[10px] px-2 py-0.5 rounded-full border border-emerald-300/45 text-emerald-200 bg-emerald-900/20 whitespace-nowrap">
        In range
      </span>
    )
  }
  if (status === 'low') {
    return (
      <span className="eyebrow text-[10px] px-2 py-0.5 rounded-full border border-[#E94A3C]/60 text-[#F5EBD0] bg-[#E94A3C]/15 whitespace-nowrap">
        Low
      </span>
    )
  }
  return (
    <span className="eyebrow text-[10px] px-2 py-0.5 rounded-full border border-amber-300/50 text-amber-200 bg-amber-900/20 whitespace-nowrap">
      Watch
    </span>
  )
}

export default function SoilHealth() {
  return (
    <section
      id="soil"
      className="relative scroll-mt-28 py-20 md:py-28 text-sky-cream"
      style={{ background: 'linear-gradient(180deg, #014066 0%, #096C6C 100%)' }}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="eyebrow text-[#F5EBD0]/80 mb-3">§7 Soil Health · Year-0 Baseline</p>
          <h2 className="font-display text-3xl md:text-4xl text-sky-cream mb-4">
            What the ground is doing.
          </h2>
          <div className="w-12 h-0.5 bg-[#E94A3C]/70 mx-auto mb-5" />
          <p className="font-body text-base md:text-lg text-sky-cream/75 leading-relaxed">
            A composite topsoil sample (0–15 cm) was drawn on 3 April 2026 from a 1.5-acre patch
            recently harvested of sugarcane and assayed for thirteen physical, chemical and
            microbiological parameters at an ISO 9001:2015 accredited laboratory.
          </p>
        </div>

        {/* Parameters grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-12">
          {params.map((p) => (
            <div
              key={p.name}
              className="rounded-xl ring-1 ring-sky-cream/10 bg-[#012E43]/35 p-4 md:p-5 flex items-center justify-between gap-4"
            >
              <div className="min-w-0">
                <p className="font-display text-sm md:text-base text-sky-cream">{p.name}</p>
                <p className="font-body text-xs italic text-sky-cream/50 mt-0.5">Healthy: {p.range}</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="font-mono tabular-nums text-sm md:text-base text-turmeric whitespace-nowrap">
                  {p.value}
                </span>
                <StatusPill status={p.status} />
              </div>
            </div>
          ))}
        </div>

        {/* What's working / what needs work */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-12">
          <div className="rounded-2xl p-6 md:p-8 ring-1 ring-emerald-300/30 bg-emerald-900/10">
            <p className="eyebrow text-emerald-200/85 mb-3">§7.1 What the soil is doing well</p>
            <p className="font-body text-sm md:text-base text-sky-cream/80 leading-relaxed">
              The pH of 7.70 sits comfortably inside the 6.5–8.5 range tolerated by most crop and
              native tree species — typical of the mildly alkaline black and brown soils of the
              Deccan tableland. Nitrogen at 408.8 kg/ha is at the upper end of sufficient, a
              reasonable outcome for a site with a long history of organic-input agriculture and
              leguminous cover. The bacterial count of 24 × 10⁶ CFU/g signals an active microbiome
              still capable of driving nutrient cycling.
            </p>
          </div>
          <div className="rounded-2xl p-6 md:p-8 ring-1 ring-[#E94A3C]/35 bg-[#E94A3C]/8">
            <p className="eyebrow text-[#F5EBD0] mb-3">§7.2 What needs work</p>
            <p className="font-body text-sm md:text-base text-sky-cream/80 leading-relaxed">
              Three parameters were flagged: <strong className="text-sky-cream">phosphorus
              (5.77 vs 13–22 kg/ha)</strong>, <strong className="text-sky-cream">potassium
              (111.46 vs 181–240)</strong>, and <strong className="text-sky-cream">organic carbon
              (0.99 vs &gt; 1.5 %)</strong>. The 11.45 % free lime is almost certainly locking phosphate
              into insoluble calcium phosphate. Borderline OC and low K are consistent with decades
              of crop and litter off-take without a balanced return of organic matter.
            </p>
          </div>
        </div>

        {/* Restoration prescription */}
        <div>
          <h3 className="font-display text-xl md:text-2xl text-sky-cream/95 mb-2">
            The route forward
          </h3>
          <p className="font-body text-sm italic text-sky-cream/55 max-w-2xl mb-6">
            The restoration prescription follows directly from the numbers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {prescription.map((p, i) => (
              <div
                key={p.title}
                className="rounded-xl ring-1 ring-sky-cream/10 bg-[#012E43]/35 p-5 md:p-6"
              >
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-mono tabular-nums text-xs text-sky-cream/40">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h4 className="font-display text-base md:text-lg text-sky-cream">{p.title}</h4>
                </div>
                <p className="font-body text-sm text-sky-cream/70 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="font-body text-xs italic text-sky-cream/45 mt-10 text-center max-w-3xl mx-auto leading-relaxed">
          These soil numbers are the <em>nutrient-rich regenerative soil</em> commitment made
          measurable — and the interventions above are how it will be delivered.
        </p>
      </div>
    </section>
  )
}
