import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import type { Tree, TreeStoryChapter } from '../../data/trees'

const chapterLabels: Record<string, string> = {
  i_am: 'I Am...',
  at_morpeace: 'At Morpeace',
  ancient: 'Ancient Story',
  gifts: 'Gifts',
  teaching: 'Teaching',
}

interface Props {
  tree: Tree
  onClose: () => void
}

export default function TreeStoryPanel({ tree, onClose }: Props) {
  const panelRef = useRef<HTMLDivElement>(null)
  const [expandedChapter, setExpandedChapter] = useState<TreeStoryChapter | null>(null)

  // Animate in
  useEffect(() => {
    if (!panelRef.current) return
    gsap.fromTo(panelRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
    )
  }, [tree.id])

  if (!tree.story) return null

  return (
    <div ref={panelRef} className="w-full px-4 md:px-8 mt-10">
      <div className="relative rounded-2xl overflow-hidden border border-leaf-new/25 bg-forest-night backdrop-blur-sm">
        {/* Header bar — tree name, close button */}
        <div className="flex items-center justify-between px-6 md:px-8 pt-6 pb-4">
          <div className="flex items-center gap-4">
            <div
              className="w-10 h-10 rounded-full shrink-0"
              style={{
                backgroundColor: `${tree.accentColor}33`,
                border: `2px solid ${tree.accentColor}88`,
                boxShadow: `0 0 16px ${tree.accentColor}22`,
              }}
            />
            <div>
              <h3 className="font-display text-lg md:text-xl text-sky-cream">
                {tree.storyTitle}
              </h3>
              <p className="font-poem text-sm text-sky-cream/60 italic">
                {tree.species} · {tree.marathiName}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-sky-cream/50 hover:text-sky-cream transition-colors p-2"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Divider */}
        <div className="mx-6 md:mx-8 border-t border-sky-cream/15" />

        {/* Horizontal scroll chapter cards */}
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 pt-6 snap-x snap-mandatory px-6 md:px-8">
          <div className="shrink-0 w-2" />
          {tree.story.map(chapter => {
            const isTeaching = chapter.id === 'teaching'
            return (
              <button
                key={chapter.id}
                onClick={() => setExpandedChapter(
                  expandedChapter?.id === chapter.id ? null : chapter
                )}
                className={`shrink-0 w-72 md:w-80 rounded-2xl snap-start text-left p-5 transition-all duration-300 border ${
                  expandedChapter?.id === chapter.id
                    ? 'border-sky-cream/30 bg-sky-cream/10'
                    : 'border-sky-cream/10 bg-sky-cream/5 hover:border-sky-cream/20 hover:bg-sky-cream/8'
                }`}
                style={isTeaching ? { borderColor: `${tree.accentColor}40` } : undefined}
              >
                <p
                  className="font-display text-xs tracking-wider uppercase mb-2"
                  style={{ color: `${tree.accentColor}cc` }}
                >
                  {chapterLabels[chapter.id]}
                </p>
                <p className="font-poem text-sm md:text-base text-sky-cream/80 leading-relaxed line-clamp-4">
                  {chapter.content.split('\n\n')[0]}
                </p>
              </button>
            )
          })}
          <div className="shrink-0 w-2" />
        </div>

        {/* Expanded chapter content */}
        {expandedChapter && (
          <ChapterContent
            key={expandedChapter.id}
            chapter={expandedChapter}
            accentColor={tree.accentColor}
          />
        )}

        {/* Footer — tree data */}
        <div className="mx-6 md:mx-8 border-t border-sky-cream/15" />
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 px-6 md:px-8 py-5 text-center">
          <div>
            <p className="font-display text-xs tracking-wider uppercase text-sky-cream/60">Tag</p>
            <p className="font-handwritten text-base text-sky-cream/80">{tree.tag}</p>
          </div>
          <div>
            <p className="font-display text-xs tracking-wider uppercase text-sky-cream/60">Girth</p>
            <p className="font-handwritten text-base text-sky-cream/80">{tree.measurement.gbh_cm} cm</p>
          </div>
          <div>
            <p className="font-display text-xs tracking-wider uppercase text-sky-cream/60">Height</p>
            <p className="font-handwritten text-base text-sky-cream/80">{tree.measurement.height_m} m</p>
          </div>
          <div>
            <p className="font-display text-xs tracking-wider uppercase text-sky-cream/60">CO₂ Stored</p>
            <p className="font-handwritten text-base text-canopy-light/80">{tree.carbon.lifetime_co2_kg} kg</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function ChapterContent({ chapter, accentColor }: { chapter: TreeStoryChapter; accentColor: string }) {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!contentRef.current) return
    gsap.fromTo(contentRef.current,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
    )
  }, [chapter.id])

  const isTeaching = chapter.id === 'teaching'

  return (
    <div ref={contentRef} className="px-6 md:px-8 py-8 max-h-[50vh] overflow-y-auto scrollbar-hide">
      <div className="mx-6 md:mx-8 border-t border-sky-cream/15 mb-6" />
      {isTeaching ? (
        <div className="text-center max-w-lg mx-auto">
          {chapter.content.split('\n\n').map((paragraph, pi) => (
            <p
              key={pi}
              className="font-poem text-xl md:text-2xl leading-relaxed mb-5"
              style={{ color: `${accentColor}cc` }}
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
        <div className="max-w-xl mx-auto">
          {chapter.content.split('\n\n').map((paragraph, pi) => (
            <p
              key={pi}
              className="font-poem text-base md:text-lg leading-relaxed text-sky-cream/90 mb-5"
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
      )}
    </div>
  )
}
