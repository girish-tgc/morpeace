// §6 Ecosystem at Work — How the parts connect.
// Four documented + inferred relationships drawn from the April 2026 baseline.

const chains = [
  {
    label: 'Soil → Roots → Canopy',
    body:
      'The topsoil sample carries 24 × 10⁶ CFU/g of culturable bacteria and 13 × 10³ CFU/g of fungi — an active, mixed microbial community. The 64 sandalwoods are the diagnostic: Santalum album is an obligate root hemiparasite that cannot thrive unless its haustoria can tap neighbouring roots. That sandalwood is the most abundant single species on the property is direct evidence the below-ground network is functional.',
    documented: 'microbial counts, sandalwood density',
    inferred: 'specific mycorrhizal colonisation rates — not yet measured',
  },
  {
    label: 'Canopy → Pollinators → Fruit set',
    body:
      'The top carbon-storing and most abundant species are the property’s fruit anchors: mango (51), coconut (60), jackfruit (9), tamarind (13), jamun (16), guava (9), bel, amla, custard apple, mulberry and four Ficus species. Their flowering phenology spans most of the year. The documented pollinator fauna — wild Apis bees, megachilid leaf-cutters, syrphid hover-flies, and 20 butterfly species — is exactly the insect guild ecological literature associates with this fruit roster.',
    documented: 'fruit-tree roster, pollinator guild',
    inferred: 'pollinator-limited fruit set — no exclusion experiment was run',
  },
  {
    label: 'Fruit & Figs → Frugivores → Seed dispersal',
    body:
      'Four Ficus species are present (F. racemosa, F. benghalensis, F. benjamina, F. elastica); F. racemosa #509 contributes one of the ten heaviest individual carbon trees. Figs fruit asynchronously, keeping ripe fruit available year-round — which is why tropical ecology consistently lists them as keystone resources. The 58-species bird list includes hornbills, multiple barbets, bulbuls and koel — textbook fig-dependent seed dispersers.',
    documented: 'fig trees, bird species',
    inferred: 'the dispersal service is operating on site at a non-trivial rate',
  },
  {
    label: 'Water → Arthropods → Predators',
    body:
      'The monsoon-fed lake, the shaded pond and the artificial stream support odonate life-stages — Vestalis gracilis (Clear-winged Forest Glory) was recorded as an adult, and dragonfly nymphs were photographed in the water bodies. Adult odonates, with the documented 8-genera spider assemblage, impose heavy predation on mosquito and other soft-bodied populations. Crested serpent eagle, oriental honey buzzard and spotted owlet sit at the top of the same chain.',
    documented: 'all species named',
    inferred: 'magnitude of pest regulation is a literature-based expectation, not a field measurement',
  },
]

export default function EcosystemAtWork() {
  return (
    <section
      id="ecosystem"
      className="relative scroll-mt-28 py-20 md:py-28 text-sky-cream"
      style={{ background: 'linear-gradient(180deg, #012E43 0%, #014066 50%, #012E43 100%)' }}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="eyebrow text-[#F5EBD0]/80 mb-3">§6 Ecosystem at Work</p>
          <h2 className="font-display text-3xl md:text-4xl text-sky-cream mb-4">
            How the parts connect.
          </h2>
          <div className="w-12 h-0.5 bg-[#E94A3C]/70 mx-auto mb-5" />
          <p className="font-body text-base md:text-lg italic text-sky-cream/70 leading-relaxed">
            A biodiversity census lists species; an ecosystem is the web they form when they act
            on each other. Each panel labels what the survey <em>documented</em> and what is
            <em> inferred</em> from records and published ecology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {chains.map((c) => (
            <div
              key={c.label}
              className="rounded-2xl p-6 md:p-8 ring-1 ring-sky-cream/12 bg-[#012E43]/55 flex flex-col h-full"
            >
              <h3 className="font-display text-lg md:text-2xl text-sky-cream leading-tight mb-4">
                {c.label}
              </h3>
              <p className="font-body text-sm md:text-base text-sky-cream/80 leading-relaxed mb-5">
                {c.body}
              </p>

              <div className="mt-auto pt-4 border-t border-sky-cream/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="eyebrow text-[10px] text-emerald-300/85 mb-1 block">Documented</span>
                  <span className="font-body text-sky-cream/70 italic leading-snug">{c.documented}</span>
                </div>
                <div>
                  <span className="eyebrow text-[10px] text-amber-300/80 mb-1 block">Inferred</span>
                  <span className="font-body text-sky-cream/70 italic leading-snug">{c.inferred}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="font-body text-base md:text-lg italic text-sky-cream/75 mt-12 max-w-3xl mx-auto text-center leading-relaxed">
          Morpeace is not a blank slate on which an ecosystem must be built; it is a partly-working
          system that needs <strong className="text-sky-cream">structural reinforcement</strong>
          rather than foundational rescue.
        </p>
      </div>
    </section>
  )
}
