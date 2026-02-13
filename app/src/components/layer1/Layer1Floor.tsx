import { useRef, useState, useCallback } from 'react'
import { dashboardStats, type Tree, type TreeCategory } from '../../data/trees'
import ForestMap from './ForestMap'
import MapFilterPanel from './MapFilterPanel'
import ForestDashboard from './ForestDashboard'
import TreeStoryPanel from './TreeStoryPanel'

type MapMode = 'walk' | 'data' | 'seasons'

interface Props {
  onTreeSelect: (id: number) => void
}

export default function Layer1Floor({ onTreeSelect }: Props) {
  const [mode, setMode] = useState<MapMode>('walk')
  const [activeFilters, setActiveFilters] = useState<Set<TreeCategory>>(new Set())
  const [showStoriesOnly, setShowStoriesOnly] = useState(false)
  const [showAudumbarReveal, setShowAudumbarReveal] = useState(false)
  const [storyTree, setStoryTree] = useState<Tree | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const storyPanelRef = useRef<HTMLDivElement>(null)

  const handleToggleFilter = useCallback((cat: TreeCategory) => {
    setActiveFilters(prev => {
      const next = new Set(prev)
      if (next.has(cat)) {
        next.delete(cat)
      } else {
        next.add(cat)
      }
      return next
    })
  }, [])

  const handleToggleStories = useCallback(() => {
    setShowStoriesOnly(prev => !prev)
  }, [])

  const handleTreeClick = useCallback((tree: Tree) => {
    if (tree.tag === 'EG1602') {
      setShowAudumbarReveal(true)
      setTimeout(() => setShowAudumbarReveal(false), 5000)
      return
    }
    if (tree.story) {
      setStoryTree(tree)
      onTreeSelect(tree.id)
    }
  }, [onTreeSelect])

  const handleCloseStory = useCallback(() => {
    setStoryTree(null)
  }, [])

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-root-green/50 via-forest-night to-forest-night relative py-24">
      {/* Section header */}
      <div className="text-center mb-12 px-8">
        <h2 className="font-display text-base md:text-lg tracking-[0.3em] uppercase text-leaf-new mb-4">The Living Map</h2>
        <p className="font-poem text-xl md:text-2xl text-sky-cream/85 max-w-lg mx-auto">
          18 sentinel trees, mapped and measured. Click any tree to hear its story.
        </p>
      </div>

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

      {/* Dashboard — directly below mode buttons for discoverability */}
      <ForestDashboard mode={mode} />

      {/* Filter panel */}
      <MapFilterPanel
        activeFilters={activeFilters}
        showStoriesOnly={showStoriesOnly}
        onToggleFilter={handleToggleFilter}
        onToggleStories={handleToggleStories}
      />

      {/* MapLibre satellite map */}
      <ForestMap
        activeFilters={activeFilters}
        showStoriesOnly={showStoriesOnly}
        onTreeClick={handleTreeClick}
      />

      {/* Inline tree story panel — appears below map when a tree is clicked */}
      <div ref={storyPanelRef}>
        {storyTree && (
          <TreeStoryPanel
            tree={storyTree}
            onClose={handleCloseStory}
          />
        )}
      </div>


      {/* Audumbar Reveal Overlay */}
      {showAudumbarReveal && (
        <div
          className="fixed inset-0 z-[100] bg-soil-deep/95 flex items-center justify-center cursor-pointer"
          onClick={() => setShowAudumbarReveal(false)}
        >
          <div className="text-center px-8 animate-[fadeInUp_1s_ease-out]" style={{ animation: 'fadeInUp 1s ease-out' }}>
            <p className="font-poem text-xl text-sky-cream/40 mb-4">One tree.</p>
            <p className="font-display text-5xl md:text-7xl text-sky-cream/90 mb-2">230 cm</p>
            <p className="font-poem text-lg text-sky-cream/40 mb-6">around its trunk</p>
            <p className="font-display text-5xl md:text-7xl text-canopy-light/80 mb-2">35 meters</p>
            <p className="font-poem text-lg text-sky-cream/40 mb-8">into the sky</p>
            <p className="font-display text-2xl md:text-3xl text-mango-gold/70 italic">
              The Audumbar. The quiet monarch of Morpeace.
            </p>
            <p className="mt-4 font-poem text-sm text-sky-cream/20">
              {dashboardStats.largestTree.carbon.lifetime_co2_kg.toLocaleString()} kg of CO₂ held in its body
            </p>
            <p className="mt-8 text-xs text-sky-cream/15">click anywhere to close</p>
          </div>
        </div>
      )}
    </section>
  )
}
