import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { trees, dashboardStats } from '../../data/trees'

type MapMode = 'walk' | 'data' | 'seasons'

interface Props {
  mode: MapMode
}

// Pick trees with stories for the spotlight
const storyTrees = trees.filter(t => t.story !== null)

export default function ForestDashboard({ mode }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return
    gsap.fromTo(containerRef.current,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
    )
  }, [mode])

  return (
    <div ref={containerRef} className="relative z-10 max-w-5xl mx-auto mb-10 px-4">
      {mode === 'data' && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard value={`${dashboardStats.totalTrees}`} label="Sentinel Trees" sublabel="measured & tagged" />
          <StatCard value={`${dashboardStats.totalSpecies}`} label="Distinct Species" sublabel="in this sample" />
          <StatCard value={`${dashboardStats.totalLifetimeCO2kg.toLocaleString()} kg`} label="CO&#x2082; Stored" sublabel="lifetime sequestration" />
          <StatCard value={dashboardStats.shannonWienerIndex.toFixed(2)} label="Shannon-Wiener" sublabel="diversity index" />
          <StatCard value={`${dashboardStats.mangoVarieties}+`} label="Mango Varieties" sublabel="and counting" />
          <StatCard value={`${dashboardStats.totalAreaAcres}`} label="Acres" sublabel="of living forest" />
          <StatCard value={`${dashboardStats.lakeAreaSqft.toLocaleString()}`} label="Sq Ft of Water" sublabel="the living lake" />
          <StatCard value={`${dashboardStats.yearsGrowing}`} label="Years Growing" sublabel="since 2009" />
        </div>
      )}

      {mode === 'walk' && <TreeSpotlight />}

      {mode === 'seasons' && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          <SeasonCard season="Monsoon" months="Jun&#x2013;Sep" description="The lake fills. Wild greens appear. The forest breathes deepest." photo={`${import.meta.env.BASE_URL}photos/fish-pond.jpeg`} />
          <SeasonCard season="Winter" months="Oct&#x2013;Feb" description="Cool winds. Strawberries ripen. Birds migrate in." photo={`${import.meta.env.BASE_URL}photos/strawberries.jpeg`} />
          <SeasonCard season="Spring" months="Feb&#x2013;Apr" description="Flowers explode. Bees arrive. The air is sweet." photo={`${import.meta.env.BASE_URL}photos/flowers-vivid-pink.jpeg`} />
          <SeasonCard season="Summer" months="Apr&#x2013;Jun" description="Mango season. 40+ varieties ripen. The forest feeds." photo={`${import.meta.env.BASE_URL}photos/mango-tree-ripe.jpeg`} />
        </div>
      )}

      <p className="text-center mt-8 font-handwritten text-xl text-sky-cream/60">
        {dashboardStats.sentinelNote}
      </p>
    </div>
  )
}

/** Rotating species spotlight — cycles through story trees every 5 seconds */
function TreeSpotlight() {
  const [index, setIndex] = useState(() => Math.floor(Math.random() * storyTrees.length))
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out, switch, fade in
      if (cardRef.current) {
        gsap.to(cardRef.current, {
          opacity: 0, y: -10, duration: 0.4, ease: 'power2.in',
          onComplete: () => {
            setIndex(prev => (prev + 1) % storyTrees.length)
            if (cardRef.current) {
              gsap.fromTo(cardRef.current,
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
              )
            }
          },
        })
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const tree = storyTrees[index]
  const storyTitle = tree.storyTitle || tree.species

  return (
    <div className="text-center max-w-lg mx-auto">
      <p className="font-body text-base text-sky-cream/50 italic mb-6">
        Each dot is a tree. The larger dots with rings have stories to tell.
        Click one to begin walking through the forest.
      </p>

      <Link to={`/the-forest/${tree.tag.toLowerCase()}`}>
        <div
          ref={cardRef}
          className="inline-block rounded-2xl border px-8 py-6 backdrop-blur-sm transition-all hover:scale-105"
          style={{
            borderColor: `${tree.accentColor}30`,
            background: `linear-gradient(145deg, ${tree.accentColor}15, rgba(12,26,14,0.6))`,
          }}
        >
          <p className="font-display text-xs tracking-[0.25em] uppercase text-sky-cream/40 mb-3">
            Species Spotlight
          </p>
          <p className="font-display text-2xl md:text-3xl" style={{ color: tree.accentColor }}>
            {tree.species}
          </p>
          <p className="font-devanagari text-lg text-sky-cream/60 mt-1">
            {tree.marathiName}
          </p>
          <p className="font-body text-sm italic text-sky-cream/70 mt-3">
            &ldquo;{storyTitle}&rdquo;
          </p>
          <p className="font-body text-xs text-sky-cream/30 mt-3">
            tap to meet this tree &rarr;
          </p>
        </div>
      </Link>
    </div>
  )
}

function StatCard({ value, label, sublabel }: { value: string; label: string; sublabel: string }) {
  return (
    <div
      className="text-center p-5 rounded-xl border border-leaf-new/15"
      style={{ background: 'linear-gradient(145deg, rgba(12,26,14,0.8), rgba(45,80,22,0.15))' }}
    >
      <p className="font-display text-3xl md:text-5xl text-canopy-light">{value}</p>
      <p className="font-display text-sm tracking-wider uppercase text-sky-cream/85 mt-2">{label}</p>
      <p className="font-body text-sm text-sky-cream/60 italic">{sublabel}</p>
    </div>
  )
}

function SeasonCard({ season, months, description, photo }: { season: string; months: string; description: string; photo: string }) {
  return (
    <div className="rounded-xl overflow-hidden relative group">
      <div className="aspect-[4/3] relative overflow-hidden">
        <img
          src={photo}
          alt={season}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="font-display text-sm md:text-base tracking-wider uppercase text-sky-cream" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.5)' }}>
            {season}
          </p>
          <p className="font-handwritten text-base md:text-lg text-sky-cream/85" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.5)' }}>{months}</p>
        </div>
      </div>
      <div className="p-4 bg-forest-night/10">
        <p className="font-body text-base text-sky-cream/80 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
