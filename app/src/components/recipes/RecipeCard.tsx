import { Link } from 'react-router-dom'
import type { Recipe } from '../../data/recipes'

const seasonIcons: Record<string, string> = {
  monsoon: '\u{1F327}',
  summer: '\u{2600}',
  winter: '\u{2744}',
  spring: '\u{1F338}',
}

const seasonAccents: Record<string, string> = {
  monsoon: '#4a7c59',
  summer: '#d4a017',
  winter: '#8a8577',
  spring: '#d94f6b',
}

interface Props {
  recipe: Recipe
}

export default function RecipeCard({ recipe }: Props) {
  const primarySeason = recipe.season[0]
  const accentColor = seasonAccents[primarySeason] || '#d4a017'

  return (
    <Link
      to={`/the-experience/recipes/${recipe.id}`}
      className="group block rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg border border-text-deep/10 bg-canvas"
    >
      {/* Accent strip */}
      <div className="h-1" style={{ backgroundColor: `${accentColor}80` }} />

      <div className="p-5 md:p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1 min-w-0">
            <h4 className="font-display text-lg text-text-deep group-hover:text-teal-deep transition-colors leading-tight">
              {recipe.title}
            </h4>
            <p className="font-devanagari text-sm text-text-deep/40 mt-1">{recipe.titleMarathi}</p>
          </div>
          {recipe.isLostRecipe && (
            <span className="shrink-0 ml-3 text-xs px-2.5 py-1 rounded-full font-display tracking-widest uppercase bg-strawberry/10 text-strawberry/70 border border-strawberry/20">
              Lost
            </span>
          )}
        </div>

        {/* Source tree */}
        {recipe.sourceTreeName && (
          <p className="text-xs text-leaf-new/80 mb-3 font-body italic flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-leaf-new/50">
              <circle cx="12" cy="10" r="6" fill="currentColor" opacity="0.5"/>
              <rect x="11" y="14" width="2" height="6" rx="1" fill="currentColor" opacity="0.4"/>
            </svg>
            From the {recipe.sourceTreeName}
          </p>
        )}

        {/* Story preview */}
        <p className="font-body text-sm text-text-deep/60 leading-relaxed line-clamp-2 mb-4">
          {recipe.story}
        </p>

        {/* Season tags */}
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {recipe.season.map(s => (
              <span
                key={s}
                className="text-xs px-2 py-0.5 rounded-full font-display tracking-wider uppercase"
                style={{
                  backgroundColor: `${seasonAccents[s] || accentColor}10`,
                  color: seasonAccents[s] || accentColor,
                  border: `1px solid ${seasonAccents[s] || accentColor}25`,
                }}
              >
                {seasonIcons[s]} {s}
              </span>
            ))}
          </div>
          <span className="font-display text-xs tracking-wider uppercase text-text-deep/25 group-hover:text-teal-deep/60 transition-colors">
            Read &rarr;
          </span>
        </div>
      </div>
    </Link>
  )
}
