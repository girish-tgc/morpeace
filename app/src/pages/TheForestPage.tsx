import { trees } from '../data/trees'
import TreeCard from '../components/forest/TreeCard'
import EvidenceDashboard from '../components/forest/EvidenceDashboard'
import RegenerationSection from '../components/home/RegenerationSection'

const textShadow = '0 2px 20px rgba(1,46,67,0.55), 0 1px 6px rgba(1,46,67,0.35)'

export default function TheForestPage() {
  return (
    <div>
      {/* === HERO === */}
      <section
        className="relative min-h-[50vh] flex items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(to bottom, #016795, #014066)' }}
      >
        <div className="relative z-10 text-center px-8 py-20">
          <p className="font-display text-sm md:text-base tracking-[0.3em] uppercase text-leaf-new/70 mb-6" style={{ textShadow }}>
            The Living Forest
          </p>
          <p className="font-display text-3xl md:text-5xl text-sky-cream mb-4" style={{ textShadow }}>
            Come, meet my companions.
          </p>
          <p className="font-body text-lg md:text-xl text-sky-cream/70 italic max-w-xl mx-auto" style={{ textShadow }}>
            Each one measured. Each one carries a story.
          </p>
        </div>
      </section>

      {/* === REGENERATION — measurable impact === */}
      <RegenerationSection />

      {/* === TREE GRID (light background) === */}
      <section className="py-16 md:py-20 px-6 md:px-8 bg-canvas">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-display text-xs tracking-[0.3em] uppercase text-teal-deep/60 mb-3">
              All Trees
            </p>
            <p className="font-display text-2xl md:text-3xl text-text-deep">
              The 18 Sentinels of Morpeace
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {trees.map(tree => (
              <TreeCard key={tree.id} tree={tree} />
            ))}
          </div>
        </div>
      </section>

      {/* === EVIDENCE DASHBOARD === */}
      <EvidenceDashboard />
    </div>
  )
}
