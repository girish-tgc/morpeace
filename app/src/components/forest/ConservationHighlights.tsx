export default function ConservationHighlights() {
  return (
    <section
      id="conservation"
      className="relative scroll-mt-28 py-20 md:py-24 text-sky-cream"
      style={{ background: 'linear-gradient(180deg, #016795 0%, #014066 100%)' }}
    >
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="eyebrow text-[#FF7D6B]/80 mb-3">§2.4 Conservation highlights</p>
          <h2 className="font-display text-3xl md:text-4xl text-sky-cream mb-4">
            What the count reveals
          </h2>
          <div className="w-12 h-0.5 bg-[#E94A3C]/70 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {/* Sandalwood */}
          <div className="rounded-xl ring-1 ring-[#E94A3C]/40 bg-[#E94A3C]/5 p-6">
            <div className="flex items-baseline gap-3 mb-3 flex-wrap">
              <span className="eyebrow text-[10px] px-2 py-0.5 rounded-full border border-[#E94A3C]/70 text-[#FF7D6B] bg-[#E94A3C]/15">
                IUCN Vulnerable
              </span>
              <span className="font-mono text-xs text-sky-cream/60">64 individuals</span>
            </div>
            <h3 className="font-display text-xl md:text-2xl text-sky-cream">Sandalwood</h3>
            <p className="font-body text-sm italic text-sky-cream/65 mt-0.5">(Santalum album)</p>
            <p className="font-body text-sm text-sky-cream/75 leading-relaxed mt-4">
              Heavily exploited across its Indian range for sandalwood oil; wild regeneration is poor.
              The Morpeace population is the single largest named species on site — and a conservation
              asset in its own right.
            </p>
          </div>

          {/* Keystone figs */}
          <div className="rounded-xl ring-1 ring-sky-cream/15 bg-[#012E43]/40 p-6">
            <div className="flex items-baseline gap-3 mb-3 flex-wrap">
              <span className="eyebrow text-[10px] px-2 py-0.5 rounded-full border border-emerald-300/50 text-emerald-200 bg-emerald-900/20">
                Keystone
              </span>
              <span className="font-mono text-xs text-sky-cream/60">Ficus complex</span>
            </div>
            <h3 className="font-display text-xl md:text-2xl text-sky-cream">Wild Figs</h3>
            <p className="font-body text-sm italic text-sky-cream/65 mt-0.5">(F. racemosa · benghalensis · religiosa)</p>
            <p className="font-body text-sm text-sky-cream/75 leading-relaxed mt-4">
              Keystone resources for frugivorous birds and mammals. Two of the ten largest carbon
              contributors on the property are <em>F. racemosa</em> — these trees anchor the most
              vertically structured canopy pockets.
            </p>
          </div>

          {/* Native fruit scaffold */}
          <div className="rounded-xl ring-1 ring-sky-cream/15 bg-[#012E43]/40 p-6">
            <div className="flex items-baseline gap-3 mb-3 flex-wrap">
              <span className="eyebrow text-[10px] px-2 py-0.5 rounded-full border border-amber-300/50 text-amber-200 bg-amber-900/20">
                Year-round
              </span>
              <span className="font-mono text-xs text-sky-cream/60">7 fruiting natives</span>
            </div>
            <h3 className="font-display text-xl md:text-2xl text-sky-cream">Fruiting scaffold</h3>
            <p className="font-body text-sm italic text-sky-cream/65 mt-0.5">Jamun · Tamarind · Mango · Guava · Custard Apple · Jackfruit · Fig</p>
            <p className="font-body text-sm text-sky-cream/75 leading-relaxed mt-4">
              Together these natives provide year-round fruit availability — the ecological scaffold
              on which the 58-species avifauna depends.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
