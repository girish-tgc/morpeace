import type { TreeCategory } from '../../data/trees'

const CATEGORY_FILTERS: { key: TreeCategory; label: string; activeClass: string }[] = [
  { key: 'sacred', label: 'Sacred', activeClass: 'bg-root-green/25 text-root-green border-root-green/50' },
  { key: 'fruiting', label: 'Fruit Bearers', activeClass: 'bg-mango-gold/25 text-mango-gold border-mango-gold/50' },
  { key: 'native', label: 'Native', activeClass: 'bg-leaf-new/25 text-leaf-new border-leaf-new/50' },
  { key: 'flowering', label: 'Flowering', activeClass: 'bg-flower-pink/25 text-flower-pink border-flower-pink/50' },
  { key: 'timber', label: 'Timber', activeClass: 'bg-bark-sienna/25 text-bark-sienna border-bark-sienna/50' },
]

const INACTIVE_CLASS = 'text-sky-cream/65 border-sky-cream/25 hover:text-sky-cream/90 hover:border-sky-cream/40'

interface Props {
  activeFilters: Set<TreeCategory>
  showStoriesOnly: boolean
  onToggleFilter: (cat: TreeCategory) => void
  onToggleStories: () => void
}

export default function MapFilterPanel({ activeFilters, showStoriesOnly, onToggleFilter, onToggleStories }: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 px-4">
      {CATEGORY_FILTERS.map(({ key, label, activeClass }) => {
        const active = activeFilters.has(key)
        return (
          <button
            key={key}
            onClick={() => onToggleFilter(key)}
            className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-sm font-display tracking-wider border transition-all duration-300
              ${active ? activeClass : INACTIVE_CLASS}`}
          >
            {label}
          </button>
        )
      })}

      {/* Divider */}
      <div className="w-px h-6 bg-sky-cream/10 self-center mx-1 hidden md:block" />

      {/* Has Story toggle */}
      <button
        onClick={onToggleStories}
        className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-sm font-display tracking-wider border transition-all duration-300
          ${showStoriesOnly
            ? 'bg-mango-gold/25 text-mango-gold border-mango-gold/50'
            : INACTIVE_CLASS
          }`}
      >
        Has Story
      </button>
    </div>
  )
}
