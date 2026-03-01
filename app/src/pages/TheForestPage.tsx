import { useState, useCallback } from 'react'
import { trees, type TreeCategory } from '../data/trees'
import ForestMap from '../components/forest/ForestMap'
import MapFilterPanel from '../components/forest/MapFilterPanel'
import ForestDashboard from '../components/forest/ForestDashboard'
import TreeCard from '../components/forest/TreeCard'
import EvidenceDashboard from '../components/forest/EvidenceDashboard'

type MapMode = 'walk' | 'data' | 'seasons'

const textShadow = '0 2px 20px rgba(0,0,0,0.5), 0 1px 6px rgba(0,0,0,0.3)'

export default function TheForestPage() {
  const [mode, setMode] = useState<MapMode>('walk')
  const [activeFilters, setActiveFilters] = useState<Set<TreeCategory>>(new Set())
  const [showStoriesOnly, setShowStoriesOnly] = useState(false)

  const handleToggleFilter = useCallback((cat: TreeCategory) => {
    setActiveFilters(prev => {
      const next = new Set(prev)
      if (next.has(cat)) next.delete(cat)
      else next.add(cat)
      return next
    })
  }, [])

  const handleToggleStories = useCallback(() => {
    setShowStoriesOnly(prev => !prev)
  }, [])

  return (
    <div>
      {/* === HERO === */}
      <section
        data-audio-zone="layer1-floor"
        className="relative min-h-[50vh] flex items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(to bottom, #0f2313, #1c1508)' }}
      >
        <div className="relative z-10 text-center px-8 py-20">
          <p className="font-display text-sm md:text-base tracking-[0.3em] uppercase text-leaf-new/70 mb-6" style={{ textShadow }}>
            The Living Map
          </p>
          <p className="font-display text-3xl md:text-5xl text-sky-cream mb-4" style={{ textShadow }}>
            Come, meet my companions.
          </p>
          <p className="font-body text-lg md:text-xl text-sky-cream/70 italic max-w-xl mx-auto" style={{ textShadow }}>
            Each one mapped, measured, and eager to share its story.
          </p>
        </div>
      </section>

      {/* === MAP SECTION (dark background) === */}
      <section className="section-dark bg-gradient-to-b from-forest-night to-forest-night py-16 md:py-20">
        {/* Mode compass */}
        <div className="flex justify-center gap-3 md:gap-4 mb-10 px-4">
          {(['walk', 'data', 'seasons'] as MapMode[]).map(m => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`px-4 md:px-6 py-2.5 rounded-full text-xs md:text-sm font-display tracking-wider uppercase transition-all duration-300
                ${mode === m
                  ? 'bg-leaf-new/30 text-canopy-light border border-leaf-new/40'
                  : 'text-sky-cream/65 border border-sky-cream/25 hover:text-sky-cream/90 hover:border-sky-cream/40'
                }`}
            >
              {m === 'walk' ? 'Walk the Land' : m === 'data' ? 'Read the Data' : 'Feel the Seasons'}
            </button>
          ))}
        </div>

        <ForestDashboard mode={mode} />
        <MapFilterPanel
          activeFilters={activeFilters}
          showStoriesOnly={showStoriesOnly}
          onToggleFilter={handleToggleFilter}
          onToggleStories={handleToggleStories}
        />
        <ForestMap
          activeFilters={activeFilters}
          showStoriesOnly={showStoriesOnly}
        />
      </section>

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
