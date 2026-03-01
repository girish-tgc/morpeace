import { recipes } from '../../data/recipes'
import RecipeCard from './RecipeCard'

export default function RecipeGrid() {
  const treeRecipes = recipes.filter(r => r.sourceTreeTag)
  const lostRecipes = recipes.filter(r => !r.sourceTreeTag)

  return (
    <div>
      {/* From the Trees section */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 mb-16">
        <h3 className="font-display text-sm tracking-[0.2em] uppercase text-teal-deep/60 mb-3 text-center">
          From the Trees of Morpeace
        </h3>
        <p className="font-body text-base text-text-deep/50 italic text-center mb-10">
          Recipes sourced from the trees that grow here
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {treeRecipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>

      {/* Lost Recipes section */}
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-10">
          <div className="w-px h-10 mx-auto mb-6 bg-strawberry/20" />
          <h3 className="font-display text-sm tracking-[0.2em] uppercase text-strawberry/60 mb-3">
            Lost Recipes of India
          </h3>
          <p className="font-body text-base text-text-deep/50 italic">
            Ancient preparations from Mahabharata era and forgotten monsoon kitchens
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {lostRecipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  )
}
