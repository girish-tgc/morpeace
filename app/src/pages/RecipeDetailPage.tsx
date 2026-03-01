import { useParams, Link } from 'react-router-dom'
import { recipes } from '../data/recipes'

const seasonAccents: Record<string, string> = {
  monsoon: '#4a7c59',
  summer: '#d4a017',
  winter: '#8a8577',
  spring: '#d94f6b',
}

export default function RecipeDetailPage() {
  const { recipeId } = useParams()

  const recipe = recipes.find(r => r.id === recipeId)

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center px-8">
        <div className="text-center">
          <p className="font-display text-2xl text-text-deep mb-4">Recipe not found</p>
          <Link to="/the-experience" className="font-body text-teal-deep hover:underline">&larr; Back to The Experience</Link>
        </div>
      </div>
    )
  }

  const primarySeason = recipe.season[0]
  const accentColor = seasonAccents[primarySeason] || '#d4a017'

  return (
    <div className="pt-20 md:pt-24 pb-20">
      {/* Back link */}
      <div className="max-w-2xl mx-auto px-6 md:px-8 mb-8">
        <Link to="/the-experience" className="font-body text-sm text-teal-deep hover:underline inline-flex items-center gap-1">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M19 12H5m0 0l7 7m-7-7l7-7" />
          </svg>
          Back to Recipes
        </Link>
      </div>

      <div className="max-w-2xl mx-auto px-6 md:px-8">
        {/* Accent strip */}
        <div className="h-1.5 rounded-full mb-10" style={{ background: `linear-gradient(90deg, transparent, ${accentColor}80, transparent)` }} />

        {/* Header */}
        <div className="mb-10 pb-8 border-b border-text-deep/10">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="font-display text-3xl md:text-4xl text-text-deep">{recipe.title}</h1>
              <p className="font-devanagari text-lg text-text-deep/50 mt-1">{recipe.titleMarathi}</p>
            </div>
            {recipe.isLostRecipe && (
              <span className="text-xs px-3 py-1.5 rounded-full bg-strawberry/10 text-strawberry/70 border border-strawberry/20 font-display tracking-wider">
                LOST
              </span>
            )}
          </div>
          {recipe.sourceTreeName && (
            <p className="mt-4 font-handwritten text-xl text-leaf-new/80">
              From the {recipe.sourceTreeName} tree at Morpeace ({recipe.sourceTreeTag})
            </p>
          )}
          <p className="mt-2 font-body text-sm text-text-deep/50 italic">{recipe.origin}</p>
        </div>

        {/* Story */}
        <div className="mb-10">
          <p className="font-body text-lg text-text-deep/80 leading-relaxed italic">
            &ldquo;{recipe.story}&rdquo;
          </p>
        </div>

        {recipe.isLostRecipe && recipe.lostNote && (
          <div className="mb-10 p-5 rounded-xl bg-strawberry/5 border border-strawberry/15">
            <p className="font-display text-xs tracking-wider uppercase text-strawberry/60 mb-2">Why This Recipe Was Lost</p>
            <p className="font-body text-base text-text-deep/70 leading-relaxed">{recipe.lostNote}</p>
          </div>
        )}

        {/* Ingredients */}
        <div className="mb-10">
          <h4 className="font-display text-xs tracking-[0.2em] uppercase mb-5" style={{ color: accentColor }}>
            Ingredients
          </h4>
          <ul className="space-y-3">
            {recipe.ingredients.map((ing, i) => (
              <li key={i} className="flex items-start gap-3 font-body text-base">
                <span className="text-text-deep/30 mt-1 text-lg">&middot;</span>
                <span className={ing.fromMorpeace ? 'text-leaf-new' : 'text-text-deep/70'}>
                  {ing.quantity} {ing.item}
                  {ing.fromMorpeace && <span className="text-xs text-leaf-new/60 ml-2 italic">from Morpeace</span>}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Steps */}
        <div className="mb-10">
          <h4 className="font-display text-xs tracking-[0.2em] uppercase mb-5" style={{ color: accentColor }}>
            Method
          </h4>
          <ol className="space-y-5">
            {recipe.steps.map((step, i) => (
              <li key={i} className="flex gap-4 font-body text-base text-text-deep/80 leading-relaxed">
                <span className="font-handwritten text-2xl shrink-0 w-8" style={{ color: `${accentColor}90` }}>
                  {i + 1}.
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Nutrition */}
        <div className="pt-8 border-t border-text-deep/10">
          <p className="font-display text-xs tracking-wider uppercase text-water-green/70 mb-2">Nutrition & Wisdom</p>
          <p className="font-body text-base text-text-deep/60 leading-relaxed">{recipe.nutritionNote}</p>
        </div>
      </div>
    </div>
  )
}
