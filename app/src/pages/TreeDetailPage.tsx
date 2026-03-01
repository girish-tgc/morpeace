import { useParams, Link } from 'react-router-dom'
import { trees } from '../data/trees'

const chapterLabels: Record<string, string> = {
  i_am: 'I Am...',
  at_morpeace: 'At Morpeace',
  ancient: 'Ancient Story',
  gifts: 'Gifts',
  teaching: 'Teaching',
}

export default function TreeDetailPage() {
  const { treeId } = useParams()

  const tree = trees.find(t => t.tag.toLowerCase() === treeId?.toLowerCase())

  if (!tree) {
    return (
      <div className="min-h-screen flex items-center justify-center px-8">
        <div className="text-center">
          <p className="font-display text-2xl text-text-deep mb-4">Tree not found</p>
          <Link to="/the-forest" className="font-body text-teal-deep hover:underline">&larr; Back to The Forest</Link>
        </div>
      </div>
    )
  }

  const hasStory = tree.story !== null

  return (
    <div data-audio-zone="layer1-floor" className="pt-20 md:pt-24">
      {/* Back link */}
      <div className="max-w-5xl mx-auto px-6 md:px-8 mb-8">
        <Link to="/the-forest" className="font-body text-sm text-teal-deep hover:underline inline-flex items-center gap-1">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M19 12H5m0 0l7 7m-7-7l7-7" />
          </svg>
          Back to The Forest
        </Link>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-8 pb-20">
        {hasStory ? (
          /* === Dual layout: Story + Data === */
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
            {/* Left: Story chapters */}
            <div className="lg:col-span-3">
              {/* Title */}
              <div className="mb-10">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-full shrink-0"
                    style={{ backgroundColor: `${tree.accentColor}30`, border: `3px solid ${tree.accentColor}70` }}
                  />
                  <div>
                    <h1 className="font-display text-3xl md:text-4xl text-text-deep">{tree.storyTitle}</h1>
                    <p className="font-body text-base text-text-deep/50 italic">{tree.species} &middot; {tree.marathiName}</p>
                  </div>
                </div>
              </div>

              {/* Chapters */}
              <div className="space-y-10">
                {tree.story!.map(chapter => (
                  <div key={chapter.id} className="border-l-2 pl-6 md:pl-8" style={{ borderColor: `${tree.accentColor}40` }}>
                    <p className="font-display text-xs tracking-[0.2em] uppercase mb-3" style={{ color: tree.accentColor }}>
                      {chapterLabels[chapter.id]}
                    </p>
                    {chapter.id === 'teaching' ? (
                      <div className="py-4">
                        {chapter.content.split('\n\n').map((paragraph, pi) => (
                          <p
                            key={pi}
                            className="font-body text-xl md:text-2xl leading-relaxed mb-4"
                            style={{ color: `${tree.accentColor}cc` }}
                          >
                            {paragraph.split('\n').map((line, li) => (
                              <span key={li}>
                                {line}
                                {li < paragraph.split('\n').length - 1 && <br />}
                              </span>
                            ))}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <div>
                        {chapter.content.split('\n\n').map((paragraph, pi) => (
                          <p key={pi} className="font-body text-base md:text-lg leading-relaxed text-text-deep/80 mb-4">
                            {paragraph.split('\n').map((line, li) => (
                              <span key={li}>
                                {line}
                                {li < paragraph.split('\n').length - 1 && <br />}
                              </span>
                            ))}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Data sidebar */}
            <div className="lg:col-span-2">
              <div className="lg:sticky lg:top-24">
                <TreeDataCard tree={tree} />
              </div>
            </div>
          </div>
        ) : (
          /* === Data-only layout === */
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div
                className="w-12 h-12 rounded-full shrink-0"
                style={{ backgroundColor: `${tree.accentColor}30`, border: `3px solid ${tree.accentColor}70` }}
              />
              <div>
                <h1 className="font-display text-3xl md:text-4xl text-text-deep">{tree.species}</h1>
                <p className="font-body text-base text-text-deep/50 italic">{tree.marathiName}</p>
              </div>
            </div>
            <TreeDataCard tree={tree} />
            {tree.notes && (
              <p className="mt-6 font-body text-base text-text-deep/60 italic leading-relaxed">
                {tree.notes}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

function TreeDataCard({ tree }: { tree: typeof trees[number] }) {
  return (
    <div className="rounded-2xl border border-text-deep/10 bg-canvas p-6 md:p-8">
      <p className="font-display text-xs tracking-[0.2em] uppercase text-text-deep/40 mb-6">Tree Data</p>

      <div className="space-y-4">
        <DataRow label="Species" value={tree.species} />
        <DataRow label="Scientific Name" value={tree.scientificName} mono />
        <DataRow label="Marathi" value={tree.marathiName} />
        <DataRow label="Tag" value={tree.tag} mono />

        <div className="border-t border-text-deep/10 pt-4" />

        <DataRow label="Girth (GBH)" value={`${tree.measurement.gbh_cm} cm`} mono />
        <DataRow label="Height" value={`${tree.measurement.height_m} m`} mono />
        <DataRow label="Crown Diameter" value={`${tree.measurement.crown_diameter_m} m`} mono />

        <div className="border-t border-text-deep/10 pt-4" />

        <DataRow label="Biomass" value={`${tree.carbon.biomass_kg.toLocaleString()} kg`} mono />
        <DataRow label="Annual CO\u2082" value={`${tree.carbon.annual_co2_kg.toLocaleString()} kg/yr`} mono />
        <DataRow label="Lifetime CO\u2082" value={`${tree.carbon.lifetime_co2_kg.toLocaleString()} kg`} mono highlight />

        <div className="border-t border-text-deep/10 pt-4" />

        <DataRow label="GPS" value={`${tree.coordinates.lat.toFixed(4)}°N, ${tree.coordinates.lng.toFixed(4)}°E`} mono />

        <div className="flex flex-wrap gap-1.5 mt-4">
          {tree.category.map(cat => (
            <span
              key={cat}
              className="text-xs px-2 py-0.5 rounded-full font-display tracking-wider uppercase bg-text-deep/5 text-text-deep/60 border border-text-deep/10"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function DataRow({ label, value, mono, highlight }: { label: string; value: string; mono?: boolean; highlight?: boolean }) {
  return (
    <div className="flex justify-between items-baseline gap-4">
      <span className="font-body text-sm text-text-deep/50">{label}</span>
      <span className={`text-sm text-right ${mono ? 'font-mono' : 'font-body'} ${highlight ? 'text-turmeric font-medium' : 'text-text-deep/80'}`}>
        {value}
      </span>
    </div>
  )
}
