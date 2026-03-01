import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { trailChapters, trailClosingLesson } from '../data/adventureTrail'
import TrailChapterCard from '../components/trail/TrailChapterCard'
import MeditationCave from '../components/trail/MeditationCave'
import RecipeGrid from '../components/recipes/RecipeGrid'

gsap.registerPlugin(ScrollTrigger)

const BASE = import.meta.env.BASE_URL
const textShadow = '0 2px 20px rgba(0,0,0,0.5), 0 1px 6px rgba(0,0,0,0.3)'

export default function TheExperiencePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const heroImgRef = useRef<HTMLImageElement>(null)
  const closingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mm = gsap.matchMedia()
    const ctx = gsap.context(() => {
      if (heroRef.current) {
        gsap.fromTo(heroRef.current.querySelectorAll('[data-animate]'),
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 1.2, stagger: 0.2, ease: 'power3.out',
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            }
          }
        )
      }

      if (closingRef.current) {
        gsap.fromTo(closingRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 1.5, ease: 'power3.out',
            scrollTrigger: {
              trigger: closingRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            }
          }
        )
      }

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
    })

    return () => { ctx.revert(); mm.revert() }
  }, [])

  return (
    <div>
      {/* === ADVENTURE TRAIL HERO === */}
      <div ref={heroRef} data-audio-zone="adventure-trail" className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="ken-burns-a absolute inset-0">
            <img
              ref={heroImgRef}
              src={`${BASE}photos/forest-path.jpeg`}
              alt=""
              className="absolute inset-0 w-full h-full object-cover scale-110"
              loading="lazy"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-forest-night" />
        <div className="light-dapple" />
        <div className="relative z-10 text-center px-8 py-20">
          <h2
            data-animate
            className="font-display text-sm md:text-base tracking-[0.3em] uppercase text-canopy-light/80 mb-6"
            style={{ textShadow: '0 1px 12px rgba(0,0,0,0.4)' }}
          >
            The Adventure Trail
          </h2>
          <p
            data-animate
            className="font-display text-3xl md:text-5xl text-sky-cream mb-6"
            style={{ textShadow }}
          >
            A Storybook of the Land
          </p>
          <p
            data-animate
            className="font-body text-lg md:text-xl text-sky-cream/80 italic max-w-2xl mx-auto leading-relaxed"
            style={{ textShadow: '0 1px 12px rgba(0,0,0,0.4)' }}
          >
            Five young ones once wandered through my home. Here is what the land whispered to them.
          </p>
        </div>
      </div>

      {/* === TRAIL CHAPTER CARDS === */}
      <div className="section-dark py-16 md:py-20 px-4 md:px-8 bg-forest-night">
        <div
          className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
          style={{ scrollPaddingLeft: '1rem' }}
        >
          <div className="shrink-0 w-2 md:w-4" />
          {trailChapters.map(chapter => (
            <TrailChapterCard key={chapter.id} chapter={chapter} />
          ))}
          <div className="shrink-0 w-2 md:w-4" />
        </div>

        {/* Closing lesson */}
        <div ref={closingRef} className="max-w-3xl mx-auto px-8 pt-16 text-center">
          <div className="w-px h-10 mx-auto mb-8 bg-canopy-light/20" />
          <p className="font-body text-xl md:text-2xl lg:text-3xl text-sky-cream/70 italic leading-relaxed">
            &ldquo;{trailClosingLesson}&rdquo;
          </p>
        </div>
      </div>

      {/* === MEDITATION CAVE === */}
      <MeditationCave />

      {/* === RECIPES === */}
      <section data-audio-zone="layer3-canopy" className="py-16 md:py-20 bg-canvas">
        {/* Recipe hero */}
        <div className="relative min-h-[40vh] flex items-center justify-center overflow-hidden mb-16">
          <div className="absolute inset-0 overflow-hidden">
            <div className="ken-burns-b absolute inset-0">
              <img
                src={`${BASE}photos/mangoes-sunlight.jpeg`}
                alt=""
                className="absolute inset-0 w-full h-full object-cover scale-110"
                loading="lazy"
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />
          <div className="relative z-10 text-center px-8 py-16">
            <h2 className="font-display text-sm md:text-base tracking-[0.3em] uppercase text-mango-gold/80 mb-6" style={{ textShadow: '0 1px 12px rgba(0,0,0,0.4)' }}>
              Forgotten Recipes
            </h2>
            <p className="font-display text-3xl md:text-5xl text-sky-cream mb-4" style={{ textShadow }}>
              Recipes of the Forest
            </p>
            <p className="font-body text-lg md:text-xl text-sky-cream/80 italic max-w-2xl mx-auto" style={{ textShadow: '0 1px 12px rgba(0,0,0,0.4)' }}>
              My companions bear fruits the world has forgotten how to cook.
            </p>
          </div>
        </div>

        <RecipeGrid />
      </section>
    </div>
  )
}
