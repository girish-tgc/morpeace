// Reading the diversity numbers — Shannon and Simpson, with Western Ghats benchmark comparison.
// Source: April 2026 baseline report §8.1.

const benchmarks = [
  { context: 'Monoculture plantation', shannon: '< 1.0', simpson: '< 0.50', mark: false },
  { context: 'Ornamental urban park', shannon: '1.5 – 2.5', simpson: '0.70 – 0.85', mark: false },
  { context: 'Sacred grove · NW Ghats', shannon: '2.8 – 3.4', simpson: '0.88 – 0.93', mark: false },
  { context: 'Morpeace · April 2026', shannon: '3.23', simpson: '0.93', mark: true },
  { context: 'Mature evergreen · S. Ghats', shannon: '3.8 – 4.2', simpson: '0.94 – 0.97', mark: false },
]

export default function DiversityIndex() {
  return (
    <section
      id="diversity"
      className="relative scroll-mt-28 py-20 md:py-24 text-sky-cream"
      style={{ background: 'linear-gradient(180deg, #014066 0%, #012E43 100%)' }}
    >
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="eyebrow text-[#F5EBD0]/80 mb-3">§8.1 Reading the diversity numbers</p>
          <h2 className="font-display text-3xl md:text-4xl text-sky-cream mb-4">
            How rich. How even.
          </h2>
          <div className="w-12 h-0.5 bg-[#E94A3C]/70 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-12">
          {/* Shannon */}
          <div className="rounded-2xl p-7 md:p-8 ring-1 ring-sky-cream/12 bg-[#012E43]/45">
            <div className="flex items-baseline gap-4 mb-3">
              <span className="font-mono tabular-nums text-5xl md:text-6xl text-turmeric leading-none">
                3.23
              </span>
              <span className="eyebrow text-sky-cream/65">Shannon H′</span>
            </div>
            <p className="font-body text-sm md:text-base text-sky-cream/75 leading-relaxed">
              <em>How many kinds, how evenly spread.</em> Pick a tree at random and guess its species —
              if one species dominates, you guess right and H′ is low; if every species is equally
              common, H′ climbs toward the forest ceiling near 4.5. At 3.23, no single species —
              not even the 64-tree sandalwood block — dominates the canopy; sixty-three other species
              share the stand in meaningful numbers.
            </p>
          </div>

          {/* Simpson */}
          <div className="rounded-2xl p-7 md:p-8 ring-1 ring-sky-cream/12 bg-[#012E43]/45">
            <div className="flex items-baseline gap-4 mb-3">
              <span className="font-mono tabular-nums text-5xl md:text-6xl text-turmeric leading-none">
                0.93
              </span>
              <span className="eyebrow text-sky-cream/65">Simpson 1−D</span>
            </div>
            <p className="font-body text-sm md:text-base text-sky-cream/75 leading-relaxed">
              <em>Two-in-a-row.</em> Pick two trees at random — 1−D is the probability they belong
              to <strong className="text-sky-cream">different species</strong>. A monoculture is
              near 0; a rich, even forest approaches 1. At 0.93, there is a 93% chance that any
              two Morpeace trees you grab belong to different species.
            </p>
          </div>
        </div>

        {/* Benchmarks */}
        <div className="mb-4">
          <h3 className="font-display text-lg md:text-xl text-sky-cream/95 mb-2">
            Western Ghats benchmarks
          </h3>
          <p className="font-body text-sm italic text-sky-cream/55 max-w-2xl">
            Read by the diversity arithmetic alone, the property already sits at the top end of the
            sacred-grove band — only a notch below mature evergreen forest.
          </p>
        </div>

        <div className="-mx-6 md:mx-0 px-6 md:px-0 overflow-x-auto">
          <div className="min-w-[34rem] rounded-xl ring-1 ring-sky-cream/10 bg-[#012E43]/35 overflow-hidden">
            <div className="grid grid-cols-[1.6fr_1fr_1fr] gap-4 md:gap-8 px-5 md:px-7 py-3 border-b border-sky-cream/15 bg-[#012E43]/55">
              <span className="eyebrow text-sky-cream/55">Forest context</span>
              <span className="eyebrow text-sky-cream/55">Shannon H′</span>
              <span className="eyebrow text-sky-cream/55">Simpson 1−D</span>
            </div>
            {benchmarks.map((b) => (
              <div
                key={b.context}
                className={`grid grid-cols-[1.6fr_1fr_1fr] gap-4 md:gap-8 px-5 md:px-7 py-4 border-b last:border-b-0 border-sky-cream/8 items-baseline ${
                  b.mark ? 'bg-[#E94A3C]/10' : ''
                }`}
              >
                <span className={`font-display text-sm md:text-base ${b.mark ? 'text-sky-cream' : 'text-sky-cream/85'}`}>
                  {b.context}
                  {b.mark && (
                    <span className="ml-2 eyebrow text-[10px] px-1.5 py-0.5 rounded border border-[#E94A3C]/60 text-[#F5EBD0] bg-[#E94A3C]/15 align-middle">
                      You are here
                    </span>
                  )}
                </span>
                <span className={`font-mono text-sm md:text-base tabular-nums ${b.mark ? 'text-turmeric' : 'text-sky-cream/70'}`}>
                  {b.shannon}
                </span>
                <span className={`font-mono text-sm md:text-base tabular-nums ${b.mark ? 'text-turmeric' : 'text-sky-cream/70'}`}>
                  {b.simpson}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="font-body text-xs italic text-sky-cream/50 mt-6 leading-relaxed max-w-3xl">
          Species count has run ahead of successional stage. The ten-year aim is to lift the other
          dimensions — canopy layering, dead-wood and epiphytic load, soil horizon, undisturbed ground
          flora — so the property matches a mature evergreen forest on every axis, not just species count.
        </p>
      </div>
    </section>
  )
}
