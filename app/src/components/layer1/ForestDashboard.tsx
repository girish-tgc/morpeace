import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { dashboardStats } from '../../data/trees'

type MapMode = 'walk' | 'data' | 'seasons'

interface Props {
  mode: MapMode
}

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
    <div ref={containerRef} className="max-w-5xl mx-auto mb-10 px-4">
      {mode === 'data' && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard value={`${dashboardStats.totalTrees}`} label="Sentinel Trees" sublabel="measured & tagged" />
          <StatCard value={`${dashboardStats.totalSpecies}`} label="Distinct Species" sublabel="in this sample" />
          <StatCard value={`${dashboardStats.totalLifetimeCO2kg.toLocaleString()} kg`} label="CO₂ Stored" sublabel="lifetime sequestration" />
          <StatCard value={dashboardStats.shannonWienerIndex.toFixed(2)} label="Shannon-Wiener" sublabel="diversity index" />
          <StatCard value={`${dashboardStats.mangoVarieties}+`} label="Mango Varieties" sublabel="and counting" />
          <StatCard value={`${dashboardStats.totalAreaAcres}`} label="Acres" sublabel="of living forest" />
          <StatCard value={`${dashboardStats.lakeAreaSqft.toLocaleString()}`} label="Sq Ft of Water" sublabel="the living lake" />
          <StatCard value={`${dashboardStats.yearsGrowing}`} label="Years Growing" sublabel="since 2009" />
        </div>
      )}

      {mode === 'walk' && (
        <div className="text-center">
          <p className="font-poem text-xl md:text-2xl text-sky-cream/85 italic max-w-xl mx-auto">
            Each dot is a tree. The larger dots with rings have stories to tell.
            Click one to begin walking through the forest.
          </p>
        </div>
      )}

      {mode === 'seasons' && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          <SeasonCard season="Monsoon" months="Jun–Sep" description="The lake fills. Wild greens appear. The forest breathes deepest." color="bg-water-green" photo={`${import.meta.env.BASE_URL}photos/fish-pond.jpeg`} />
          <SeasonCard season="Winter" months="Oct–Feb" description="Cool winds. Strawberries ripen. Birds migrate in." color="bg-sky-cream" photo={`${import.meta.env.BASE_URL}photos/strawberries.jpeg`} />
          <SeasonCard season="Spring" months="Feb–Apr" description="Flowers explode. Bees arrive. The air is sweet." color="bg-flower-pink" photo={`${import.meta.env.BASE_URL}photos/flowers-vivid-pink.jpeg`} />
          <SeasonCard season="Summer" months="Apr–Jun" description="Mango season. 40+ varieties ripen. The forest feeds." color="bg-mango-gold" photo={`${import.meta.env.BASE_URL}photos/mango-tree-ripe.jpeg`} />
        </div>
      )}

      <p className="text-center mt-8 font-handwritten text-xl text-sky-cream/60">
        {dashboardStats.sentinelNote}
      </p>
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
      <p className="font-poem text-sm text-sky-cream/60 italic">{sublabel}</p>
    </div>
  )
}

function SeasonCard({ season, months, description, color, photo }: { season: string; months: string; description: string; color: string; photo: string }) {
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
      <div className={`p-4 ${color}/10`}>
        <p className="font-poem text-base text-sky-cream/80 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
