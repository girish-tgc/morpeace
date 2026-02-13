import { useEffect, useRef, useCallback } from 'react'
import maplibregl from 'maplibre-gl'
import { trees, type Tree, type TreeCategory } from '../../data/trees'

const MAP_CENTER: [number, number] = [73.9893, 17.6107]
const MAP_ZOOM = 16

const MAX_BOUNDS: [[number, number], [number, number]] = [
  [73.984, 17.605],
  [73.995, 17.616],
]

interface Props {
  activeFilters: Set<TreeCategory>
  showStoriesOnly: boolean
  onTreeClick: (tree: Tree) => void
}

function getFilteredTrees(activeFilters: Set<TreeCategory>, showStoriesOnly: boolean): Tree[] {
  let filtered = trees
  if (activeFilters.size > 0) {
    filtered = filtered.filter(t =>
      t.category.some(c => activeFilters.has(c))
    )
  }
  if (showStoriesOnly) {
    filtered = filtered.filter(t => t.story !== null)
  }
  return filtered
}

// Tree icon SVG — organic canopy silhouette with satellite-contrast outline
function treeSVG(color: string, hasStory: boolean, isMonarch: boolean): string {
  const size = isMonarch ? 60 : hasStory ? 48 : 36
  const cx = size / 2
  const cy = size * 0.36
  const r1 = size * 0.28
  const r2 = size * 0.2
  const trunkW = isMonarch ? 5 : hasStory ? 4 : 3
  const trunkTop = cy + r1 * 0.65
  const trunkH = size * 0.2

  let svg = `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">`

  // Outer glow for story trees — pulsing ring
  if (hasStory) {
    svg += `<circle cx="${cx}" cy="${cy}" r="${r1 + 10}" fill="${color}" opacity="0.1"/>`
    svg += `<circle cx="${cx}" cy="${cy}" r="${r1 + 6}" fill="none" stroke="${color}" stroke-width="1" opacity="0.4" stroke-dasharray="4 3"/>`
  }

  // White halo for satellite contrast
  svg += `<circle cx="${cx}" cy="${cy}" r="${r1 + 2}" fill="rgba(255,255,255,0.15)"/>`

  // Main canopy — 3 overlapping circles for organic shape
  svg += `<circle cx="${cx}" cy="${cy}" r="${r1}" fill="${color}" opacity="0.9"/>`
  svg += `<circle cx="${cx - r1 * 0.55}" cy="${cy + r1 * 0.2}" r="${r2}" fill="${color}" opacity="0.7"/>`
  svg += `<circle cx="${cx + r1 * 0.55}" cy="${cy + r1 * 0.2}" r="${r2}" fill="${color}" opacity="0.7"/>`

  // Light highlight on canopy
  svg += `<circle cx="${cx - r1 * 0.2}" cy="${cy - r1 * 0.25}" r="${r1 * 0.2}" fill="rgba(255,255,255,0.2)"/>`

  // Trunk
  svg += `<rect x="${cx - trunkW / 2}" y="${trunkTop}" width="${trunkW}" height="${trunkH}" rx="1.5" fill="${color}" opacity="0.6"/>`

  // Ground shadow ellipse
  svg += `<ellipse cx="${cx}" cy="${trunkTop + trunkH + 1}" rx="${trunkW * 2.5}" ry="2" fill="rgba(0,0,0,0.3)"/>`

  svg += `</svg>`
  return svg
}

function createMarkerElement(tree: Tree): HTMLDivElement {
  const hasStory = tree.story !== null
  const isMonarch = tree.tag === 'EG1602'
  const el = document.createElement('div')
  el.className = 'forest-tree-marker'
  el.style.cursor = 'pointer'
  el.innerHTML = `
    <div class="forest-marker-icon">
      ${treeSVG(tree.accentColor, hasStory, isMonarch)}
    </div>
    <div class="forest-marker-label">${tree.species}</div>
  `
  const iconEl = el.querySelector('.forest-marker-icon') as HTMLElement
  if (iconEl) {
    iconEl.addEventListener('mouseenter', () => { iconEl.style.filter = 'brightness(1.3) drop-shadow(0 0 8px rgba(255,255,255,0.3))' })
    iconEl.addEventListener('mouseleave', () => { iconEl.style.filter = '' })
  }
  return el
}

export default function ForestMap({ activeFilters, showStoriesOnly, onTreeClick }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<maplibregl.Map | null>(null)
  const markersRef = useRef<maplibregl.Marker[]>([])

  const syncMarkers = useCallback(() => {
    const map = mapRef.current
    if (!map) return

    // Remove old markers
    markersRef.current.forEach(m => m.remove())
    markersRef.current = []

    const filtered = getFilteredTrees(activeFilters, showStoriesOnly)

    filtered.forEach(tree => {
      const el = createMarkerElement(tree)
      el.addEventListener('click', () => onTreeClick(tree))

      const marker = new maplibregl.Marker({ element: el, anchor: 'bottom' })
        .setLngLat([tree.coordinates.lng, tree.coordinates.lat])
        .addTo(map)

      markersRef.current.push(marker)
    })
  }, [activeFilters, showStoriesOnly, onTreeClick])

  // Init map
  useEffect(() => {
    if (!containerRef.current) return

    const map = new maplibregl.Map({
      container: containerRef.current,
      style: {
        version: 8,
        sources: {
          'osm-tiles': {
            type: 'raster',
            tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
            tileSize: 256,
            attribution: '&copy; OpenStreetMap contributors',
            maxzoom: 19,
          },
          'esri-satellite': {
            type: 'raster',
            tiles: ['https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'],
            tileSize: 256,
            attribution: 'Esri World Imagery',
            maxzoom: 18,
          },
        },
        layers: [
          { id: 'osm-base', type: 'raster', source: 'osm-tiles' },
          { id: 'satellite', type: 'raster', source: 'esri-satellite' },
        ],
      },
      center: MAP_CENTER,
      zoom: MAP_ZOOM,
      maxZoom: 18,
      maxBounds: MAX_BOUNDS,
      cooperativeGestures: true,
      attributionControl: false,
    })

    map.addControl(new maplibregl.AttributionControl({ compact: true }), 'bottom-right')
    map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-right')

    mapRef.current = map

    map.on('load', () => {
      syncMarkers()
    })

    return () => {
      markersRef.current.forEach(m => m.remove())
      markersRef.current = []
      map.remove()
      mapRef.current = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // React to filter changes
  useEffect(() => {
    if (mapRef.current?.loaded()) {
      syncMarkers()
    }
  }, [syncMarkers])

  return (
    <div className="w-full px-4 md:px-8">
      <div
        ref={containerRef}
        className="w-full h-[60vh] md:h-[75vh] rounded-2xl overflow-hidden border border-leaf-new/10"
      />
    </div>
  )
}
