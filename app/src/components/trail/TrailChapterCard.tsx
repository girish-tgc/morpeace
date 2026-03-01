import { Link } from 'react-router-dom'
import type { TrailChapter } from '../../data/adventureTrail'
import { trailChapters } from '../../data/adventureTrail'

interface Props {
  chapter: TrailChapter
}

export default function TrailChapterCard({ chapter }: Props) {
  const chapterIndex = trailChapters.findIndex(c => c.id === chapter.id)
  const chapterLabel = chapterIndex === 0 ? 'Prologue' : chapterIndex === trailChapters.length - 1 ? 'Epilogue' : `Chapter ${chapterIndex}`

  return (
    <Link
      to={`/the-experience/trail/${chapter.id}`}
      className="group shrink-0 w-72 md:w-80 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.03] relative text-left snap-start block"
      style={{
        background: `linear-gradient(160deg, ${chapter.accentColor}, ${chapter.accentColor}cc)`,
        boxShadow: `0 6px 28px ${chapter.accentColor}40`,
      }}
    >
      <div className="p-6">
        <p className="font-handwritten text-sm mb-2 text-white/70">
          {chapterLabel}
        </p>
        <h3 className="font-display text-lg md:text-xl text-white group-hover:text-white/90 transition-colors leading-tight mb-3">
          {chapter.title}
        </h3>
        <span className="inline-block text-xs px-2.5 py-0.5 rounded-full font-display tracking-wider uppercase mb-4 bg-white/20 text-white/90 border border-white/25">
          {chapter.lesson}
        </span>
        <p className="font-body text-sm text-white/75 leading-relaxed line-clamp-3 mb-5">
          {chapter.excerpt}
        </p>
        <span className="font-display text-xs tracking-wider uppercase text-white/50 group-hover:text-white/80 transition-colors">
          Read the story &rarr;
        </span>
      </div>

      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{ boxShadow: `inset 0 0 40px rgba(255,255,255,0.08), 0 12px 40px ${chapter.accentColor}50` }}
      />
    </Link>
  )
}
