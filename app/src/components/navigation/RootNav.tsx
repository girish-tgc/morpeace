import { useState } from 'react'

interface Props {
  exploredLayers: Set<number>
  onNavigate: (index: number) => void
  activeTree: number | null
}

const layers = [
  { name: 'Soil', subtitle: 'The Story', icon: '◉' },
  { name: 'Floor', subtitle: 'The Map', icon: '◈' },
  { name: 'Understory', subtitle: 'Trail & Stillness', icon: '❋' },
  { name: 'Canopy', subtitle: 'Recipes', icon: '✿' },
  { name: 'Sky', subtitle: 'Invitation', icon: '✧' },
]

export default function RootNav({ exploredLayers, onNavigate }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const exploredCount = exploredLayers.size

  // Don't show nav until at least Layer 0 is explored
  if (exploredCount === 0) return null

  return (
    <div className="fixed bottom-6 left-6 z-[90]">
      {/* Seed/root toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500
          ${isOpen
            ? 'bg-leaf-new/20 border-leaf-new/40 scale-110'
            : 'bg-soil-deep/80 border-sky-cream/10 hover:border-sky-cream/20 backdrop-blur-sm'
          } border`}
        aria-label="Navigation"
      >
        {/* Growing seed SVG */}
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          {/* Seed body */}
          <ellipse cx="12" cy="14" rx="4" ry="5" fill="#6b8f3c" fillOpacity={0.5} />
          {/* Root (grows with exploration) */}
          <line x1="12" y1="19" x2="12" y2={19 + exploredCount * 1}
            stroke="#6b8f3c" strokeWidth="0.8" strokeOpacity="0.4" />
          {/* Sprout (grows with exploration) */}
          {exploredCount >= 2 && (
            <line x1="12" y1="9" x2="12" y2={9 - Math.min(exploredCount, 4)}
              stroke="#a8c256" strokeWidth="0.8" strokeOpacity="0.6" />
          )}
          {/* Leaves (appear at 3+) */}
          {exploredCount >= 3 && (
            <>
              <ellipse cx="10" cy="7" rx="2" ry="1" fill="#a8c256" fillOpacity="0.4" transform="rotate(-30 10 7)" />
              <ellipse cx="14" cy="6" rx="2" ry="1" fill="#a8c256" fillOpacity="0.4" transform="rotate(30 14 6)" />
            </>
          )}
          {/* Crown (at 5) */}
          {exploredCount >= 5 && (
            <circle cx="12" cy="4" r="2" fill="#a8c256" fillOpacity="0.3" stroke="#a8c256" strokeWidth="0.3" strokeOpacity="0.4" />
          )}
        </svg>
      </button>

      {/* Navigation panel */}
      {isOpen && (
        <div className="absolute bottom-16 left-0 bg-forest-night/95 backdrop-blur-md border border-leaf-new/15 rounded-xl p-3 min-w-[180px] shadow-2xl">
          {/* Root line connecting dots */}
          <div className="absolute left-[22px] top-[20px] w-px bg-leaf-new/15" style={{ height: `${layers.length * 44 - 20}px` }} />

          {layers.map((layer, i) => {
            const isExplored = exploredLayers.has(i)
            return (
              <button
                key={i}
                onClick={() => { onNavigate(i); setIsOpen(false) }}
                className={`flex items-center gap-3 w-full py-2 px-2 rounded-lg transition-all
                  ${isExplored
                    ? 'hover:bg-sky-cream/[0.05] text-sky-cream/70 hover:text-sky-cream/90'
                    : 'text-sky-cream/20 cursor-default'
                  }`}
                disabled={!isExplored}
              >
                <span className={`text-sm w-5 text-center ${isExplored ? 'text-leaf-new/60' : 'text-sky-cream/10'}`}>
                  {layer.icon}
                </span>
                <div className="text-left">
                  <p className="text-sm font-display tracking-wider">{layer.name}</p>
                  <p className="text-xs font-poem italic opacity-60">{layer.subtitle}</p>
                </div>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
