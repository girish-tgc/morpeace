import { Link } from 'react-router-dom'
import type { Tree } from '../../data/trees'

interface Props {
  tree: Tree
}

export default function TreeCard({ tree }: Props) {
  const hasStory = tree.story !== null

  return (
    <Link
      to={`/the-forest/${tree.tag.toLowerCase()}`}
      className="group block rounded-2xl overflow-hidden border border-text-deep/10 bg-canvas hover:shadow-lg transition-all duration-300"
    >
      {/* Accent strip */}
      <div className="h-1" style={{ backgroundColor: tree.accentColor }} />

      <div className="p-5 md:p-6">
        {/* Species + Marathi */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="font-display text-lg text-text-deep group-hover:text-teal-deep transition-colors">
              {tree.species}
            </h3>
            <p className="font-devanagari text-sm text-text-deep/50">{tree.marathiName}</p>
          </div>
          <div
            className="w-8 h-8 rounded-full shrink-0"
            style={{ backgroundColor: `${tree.accentColor}30`, border: `2px solid ${tree.accentColor}60` }}
          />
        </div>

        {/* Scientific name */}
        <p className="font-body text-xs text-text-deep/40 italic mb-3">{tree.scientificName}</p>

        {/* Key stat */}
        <p className="font-mono text-sm text-turmeric mb-3">
          {tree.carbon.lifetime_co2_kg.toLocaleString()} kg CO&#8322;
        </p>

        {/* Category badges */}
        <div className="flex flex-wrap gap-1.5">
          {tree.category.map(cat => (
            <span
              key={cat}
              className="text-xs px-2 py-0.5 rounded-full font-display tracking-wider uppercase bg-text-deep/5 text-text-deep/60 border border-text-deep/10"
            >
              {cat}
            </span>
          ))}
          {hasStory && (
            <span className="text-xs px-2 py-0.5 rounded-full font-display tracking-wider uppercase bg-turmeric/10 text-turmeric border border-turmeric/20">
              Story
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}
