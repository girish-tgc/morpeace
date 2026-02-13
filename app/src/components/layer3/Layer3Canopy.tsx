import { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { recipes, type Recipe } from '../../data/recipes'

gsap.registerPlugin(ScrollTrigger)

const textShadow = '0 2px 20px rgba(0,0,0,0.5), 0 1px 6px rgba(0,0,0,0.3)'

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

export default function Layer3Canopy() {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null)
  const [isExpanded, setIsExpanded] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const heroImgRef = useRef<HTMLImageElement>(null)
  const recipesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const mm = gsap.matchMedia()
    mm.add('(min-width: 768px)', () => {
      if (heroImgRef.current) {
        gsap.to(heroImgRef.current, {
          yPercent: -20,
          ease: 'none',
          scrollTrigger: {
            trigger: heroImgRef.current.parentElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          }
        })
      }
    })
    return () => mm.revert()
  }, [])

  // Animate recipes in when expanded
  useEffect(() => {
    if (!isExpanded || !recipesRef.current) return
    const cards = recipesRef.current.querySelectorAll('.recipe-card')
    gsap.fromTo(cards,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out' }
    )
  }, [isExpanded])

  const treeRecipes = recipes.filter(r => r.sourceTreeTag)
  const lostRecipes = recipes.filter(r => !r.sourceTreeTag)

  return (
    <section ref={sectionRef} className="relative">
      {/* === CINEMATIC HERO === */}
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          ref={heroImgRef}
          src={`${import.meta.env.BASE_URL}photos/mangoes-sunlight.jpeg`}
          alt=""
          className="absolute inset-0 w-full h-full object-cover scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />
        <div className="relative z-10 text-center px-8 py-20">
          <h2
            className="font-display text-base md:text-lg tracking-[0.3em] uppercase text-mango-gold/80 mb-6"
            style={{ textShadow: '0 1px 12px rgba(0,0,0,0.4)' }}
          >
            The Canopy
          </h2>
          <p
            className="font-display text-3xl md:text-5xl text-sky-cream mb-6"
            style={{ textShadow }}
          >
            Forgotten Recipes of the Forest
          </p>
          <p
            className="font-poem text-lg md:text-xl text-sky-cream/80 italic max-w-2xl mx-auto leading-relaxed"
            style={{ textShadow: '0 1px 12px rgba(0,0,0,0.4)' }}
          >
            Every recipe here begins with a tree. Traditional preparations using ingredients
            that modern kitchens have forgotten.
          </p>
        </div>
      </div>

      {/* Dark content area */}
      <div className="bg-gradient-to-b from-root-green/30 via-forest-night to-forest-night py-20">

        {/* Photo strip */}
        <div className="max-w-5xl mx-auto mb-16 px-8">
          <div className="flex justify-center gap-4 md:gap-8">
            {[
              { src: '/photos/mango-tree-ripe.jpeg', label: 'Mango' },
              { src: '/photos/strawberries.jpeg', label: 'Strawberry' },
              { src: '/photos/chikoo-tree.jpeg', label: 'Chikoo' },
              { src: '/photos/mango-tree-laden.jpeg', label: 'Harvest' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div
                  className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-mango-gold/20"
                  style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.4)' }}
                >
                  <img src={item.src} alt="" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <p className="font-handwritten text-base md:text-lg text-sky-cream/70 mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Expand/collapse toggle */}
        <div className="text-center mb-12">
          <button
            onClick={() => setIsExpanded(prev => !prev)}
            className="group inline-flex flex-col items-center gap-3"
          >
            <span className="font-display text-sm md:text-base tracking-[0.2em] uppercase text-canopy-light/70 group-hover:text-canopy-light transition-colors">
              {isExpanded ? 'Close the Recipe Book' : 'Open the Recipe Book'}
            </span>
            <span
              className="w-14 h-14 rounded-full flex items-center justify-center border border-canopy-light/30 group-hover:border-canopy-light/60 group-hover:bg-canopy-light/10 transition-all"
            >
              <svg
                width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                className={`text-canopy-light/60 transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`}
                strokeWidth="1.5"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </span>
            <span className="font-poem text-sm text-sky-cream/30 italic">
              {recipes.length} recipes from the forest
            </span>
          </button>
        </div>

        {/* Recipes — collapsed by default */}
        {isExpanded && (
          <div ref={recipesRef}>
            {/* From the Trees section */}
            <div className="max-w-6xl mx-auto px-6 md:px-8 mb-20">
              <h3 className="font-display text-sm tracking-[0.2em] uppercase text-leaf-new/70 mb-3 text-center">
                From the Trees of Morpeace
              </h3>
              <p className="font-poem text-base text-sky-cream/40 italic text-center mb-10">
                Recipes sourced from the trees that grow here
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {treeRecipes.map(recipe => (
                  <RecipeCard key={recipe.id} recipe={recipe} onClick={() => setSelectedRecipe(recipe)} />
                ))}
              </div>
            </div>

            {/* Lost Recipes section */}
            <div className="max-w-6xl mx-auto px-6 md:px-8">
              <div className="text-center mb-10">
                <div className="w-px h-10 mx-auto mb-6 bg-strawberry/20" />
                <h3 className="font-display text-sm tracking-[0.2em] uppercase text-strawberry/70 mb-3">
                  Lost Recipes of India
                </h3>
                <p className="font-poem text-base text-sky-cream/40 italic">
                  Ancient preparations from Mahabharata era and forgotten monsoon kitchens
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {lostRecipes.map(recipe => (
                  <RecipeCard key={recipe.id} recipe={recipe} onClick={() => setSelectedRecipe(recipe)} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Recipe Detail Overlay */}
      {selectedRecipe && (
        <RecipeDetail recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
      )}
    </section>
  )
}

function RecipeCard({ recipe, onClick }: { recipe: Recipe; onClick: () => void }) {
  const primarySeason = recipe.season[0]
  const accentColor = seasonAccents[primarySeason] || '#d4a017'

  return (
    <button
      onClick={onClick}
      className="recipe-card group text-left rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] relative"
      style={{
        background: `linear-gradient(145deg, rgba(12,26,14,0.95), rgba(26,18,7,0.9))`,
        border: `1px solid ${accentColor}20`,
        boxShadow: `0 4px 24px rgba(0,0,0,0.3)`,
      }}
    >
      {/* Accent strip at top */}
      <div
        className="h-1 w-full"
        style={{ background: `linear-gradient(90deg, transparent, ${accentColor}60, transparent)` }}
      />

      <div className="p-6 md:p-7">
        {/* Header row */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1 min-w-0">
            <h4
              className="font-display text-lg md:text-xl text-sky-cream/90 group-hover:text-sky-cream transition-colors leading-tight"
            >
              {recipe.title}
            </h4>
            <p className="font-devanagari text-sm text-sky-cream/40 mt-1">{recipe.titleMarathi}</p>
          </div>
          {recipe.isLostRecipe && (
            <span
              className="shrink-0 ml-3 text-xs px-2.5 py-1 rounded-full font-display tracking-widest uppercase bg-strawberry/15 text-strawberry/70 border border-strawberry/25"
            >
              Lost
            </span>
          )}
        </div>

        {/* Source tree */}
        {recipe.sourceTreeName && (
          <p className="text-xs text-leaf-new/60 mb-3 font-poem italic flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-leaf-new/40">
              <circle cx="12" cy="10" r="6" fill="currentColor" opacity="0.5"/>
              <rect x="11" y="14" width="2" height="6" rx="1" fill="currentColor" opacity="0.4"/>
            </svg>
            From the {recipe.sourceTreeName}
          </p>
        )}

        {/* Story preview */}
        <p className="font-poem text-sm text-sky-cream/60 leading-relaxed line-clamp-2 mb-5">
          {recipe.story}
        </p>

        {/* Season tags + read prompt */}
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {recipe.season.map(s => (
              <span
                key={s}
                className="text-xs px-2 py-0.5 rounded-full font-display tracking-wider uppercase"
                style={{
                  backgroundColor: `${seasonAccents[s] || accentColor}15`,
                  color: `${seasonAccents[s] || accentColor}`,
                  border: `1px solid ${seasonAccents[s] || accentColor}25`,
                  opacity: 0.8,
                }}
              >
                {seasonIcons[s]} {s}
              </span>
            ))}
          </div>
          <span className="font-display text-xs tracking-wider uppercase text-sky-cream/25 group-hover:text-mango-gold/60 transition-colors">
            Read →
          </span>
        </div>
      </div>

      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{ boxShadow: `inset 0 0 40px ${accentColor}08, 0 8px 32px ${accentColor}12` }}
      />
    </button>
  )
}

function RecipeDetail({ recipe, onClose }: { recipe: Recipe; onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null)
  const primarySeason = recipe.season[0]
  const accentColor = seasonAccents[primarySeason] || '#d4a017'

  useEffect(() => {
    if (!panelRef.current) return
    gsap.fromTo(panelRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
    )
  }, [])

  return (
    <div className="fixed inset-0 z-[100] bg-soil-deep/95 backdrop-blur-sm overflow-y-auto" onClick={onClose}>
      <div
        ref={panelRef}
        className="max-w-2xl mx-auto py-16 px-6 md:px-8"
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="fixed top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-sky-cream/5 text-sky-cream/40 hover:text-sky-cream/70 hover:bg-sky-cream/10 z-10 transition-all">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>

        <div
          className="rounded-2xl p-8 md:p-12 relative overflow-hidden"
          style={{
            background: 'linear-gradient(160deg, rgba(12,26,14,0.95), rgba(26,18,7,0.9))',
            border: `1px solid ${accentColor}20`,
          }}
        >
          {/* Accent strip */}
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{ background: `linear-gradient(90deg, transparent, ${accentColor}60, transparent)` }}
          />

          {/* Header */}
          <div className="mb-10 pb-8 border-b border-sky-cream/10">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-display text-2xl md:text-4xl text-sky-cream">{recipe.title}</h3>
                <p className="font-devanagari text-lg text-sky-cream/50 mt-1">{recipe.titleMarathi}</p>
              </div>
              {recipe.isLostRecipe && (
                <span className="text-xs px-3 py-1.5 rounded-full bg-strawberry/15 text-strawberry/70 border border-strawberry/25 font-display tracking-wider">
                  LOST
                </span>
              )}
            </div>
            {recipe.sourceTreeName && (
              <p className="mt-4 font-handwritten text-xl text-leaf-new/70">
                From the {recipe.sourceTreeName} tree at Morpeace ({recipe.sourceTreeTag})
              </p>
            )}
            <p className="mt-2 font-poem text-sm text-sky-cream/50 italic">{recipe.origin}</p>
          </div>

          {/* Story */}
          <div className="mb-10">
            <p className="font-poem text-lg text-sky-cream/80 leading-relaxed italic">
              &ldquo;{recipe.story}&rdquo;
            </p>
          </div>

          {recipe.isLostRecipe && recipe.lostNote && (
            <div className="mb-10 p-5 rounded-xl bg-strawberry/5 border border-strawberry/15">
              <p className="font-display text-xs tracking-wider uppercase text-strawberry/60 mb-2">Why This Recipe Was Lost</p>
              <p className="font-poem text-base text-sky-cream/70 leading-relaxed">{recipe.lostNote}</p>
            </div>
          )}

          {/* Ingredients */}
          <div className="mb-10">
            <h4
              className="font-display text-xs tracking-[0.2em] uppercase mb-5"
              style={{ color: accentColor }}
            >
              Ingredients
            </h4>
            <ul className="space-y-3">
              {recipe.ingredients.map((ing, i) => (
                <li key={i} className="flex items-start gap-3 font-poem text-base">
                  <span className="text-sky-cream/30 mt-1 text-lg">\u00B7</span>
                  <span className={ing.fromMorpeace ? 'text-leaf-new/80' : 'text-sky-cream/70'}>
                    {ing.quantity} {ing.item}
                    {ing.fromMorpeace && <span className="text-xs text-leaf-new/50 ml-2 italic">from Morpeace</span>}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Steps */}
          <div className="mb-10">
            <h4
              className="font-display text-xs tracking-[0.2em] uppercase mb-5"
              style={{ color: accentColor }}
            >
              Method
            </h4>
            <ol className="space-y-5">
              {recipe.steps.map((step, i) => (
                <li key={i} className="flex gap-4 font-poem text-base text-sky-cream/80 leading-relaxed">
                  <span
                    className="font-handwritten text-2xl shrink-0 w-8"
                    style={{ color: `${accentColor}70` }}
                  >
                    {i + 1}.
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Nutrition */}
          <div className="pt-8 border-t border-sky-cream/10">
            <p className="font-display text-xs tracking-wider uppercase text-water-green/60 mb-2">Nutrition & Wisdom</p>
            <p className="font-poem text-base text-sky-cream/60 leading-relaxed">{recipe.nutritionNote}</p>
          </div>
        </div>

        <p className="text-center mt-6 font-poem text-xs text-sky-cream/30">
          click outside to close
        </p>
      </div>
    </div>
  )
}
