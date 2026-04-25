const points = [
  {
    n: '01',
    title: 'A genuinely native-weighted canopy',
    body:
      'At 79.6% native trees, the property exceeds the threshold at which the landscape is recognisable as Indian — rather than generically ornamental — to the native fauna. The Pasaydan design brief already has a substrate to build upon; this is not a blank canvas.',
  },
  {
    n: '02',
    title: 'Arthropod diversity far ahead of ornamental landscapes',
    body:
      'Eight spider genera across five families, plus wild Apis, Megachile leafcutters, three ant genera, mantids, odonate nymphs, syrphid pollinators — all from an opportunistic survey in a single season. Spider diversity in particular tracks closely with arthropod prey abundance; its presence here implies the pollinator food-web is intact.',
  },
  {
    n: '03',
    title: 'An avifauna that already speaks',
    body:
      '58 bird species detected on the property so far — including snake eagle, honey buzzard, hornbill, owlet, two sunbird species and multiple babblers — tells us that water bodies, tree canopy, and ground cover are collectively providing nesting, foraging and predator niches. The wildlife is already voting with its wings.',
  },
  {
    n: '04',
    title: 'Breathe, deeply.',
    body:
      'Air quality at Morpeace is actively monitored and typically ranges between AQI 10–40 — clean, light, and restorative. For context, most Indian urban centres sit in the 150–300 band. The canopy, the water bodies and the absence of combustion sources do the work; guests register the difference within minutes of arriving.',
  },
]

export default function EcologicalSignificance() {
  return (
    <section
      id="significance"
      className="relative scroll-mt-28 py-20 md:py-28 text-sky-cream"
      style={{ background: 'linear-gradient(180deg, #014066 0%, #012E43 100%)' }}
    >
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <p className="eyebrow text-[#F5EBD0]/80 mb-3">§4 Ecological Significance</p>
          <h2 className="font-display text-3xl md:text-4xl text-sky-cream mb-4">
            Four signals stand out.
          </h2>
          <div className="w-12 h-0.5 bg-[#E94A3C]/70 mx-auto" />
        </div>

        <div className="space-y-8 md:space-y-12">
          {points.map((p) => (
            <div key={p.n} className="grid grid-cols-[auto_1fr] gap-5 md:gap-8 items-start">
              <div className="font-display text-4xl md:text-5xl text-[#F5EBD0]/40 tabular-nums leading-none">
                {p.n}
              </div>
              <div>
                <h3 className="font-display text-xl md:text-2xl text-sky-cream mb-3 leading-tight">
                  {p.title}
                </h3>
                <p className="font-body text-base md:text-lg text-sky-cream/75 leading-relaxed">
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 md:mt-16 pt-8 border-t border-sky-cream/10 text-center">
          <p className="font-body text-base md:text-lg italic text-sky-cream/75 max-w-2xl mx-auto leading-relaxed">
            Collectively, the findings argue that the restoration effort should prioritise
            <strong className="text-sky-cream"> protection</strong> and
            <strong className="text-sky-cream"> structural enhancement</strong> over replacement planting —
            the ecological momentum is already running.
          </p>
        </div>
      </div>
    </section>
  )
}
