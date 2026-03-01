import { useParams, Link } from 'react-router-dom'
import { trailChapters } from '../data/adventureTrail'

export default function TrailChapterPage() {
  const { chapterId } = useParams()

  const chapterIndex = trailChapters.findIndex(c => c.id === chapterId)
  const chapter = trailChapters[chapterIndex]

  if (!chapter) {
    return (
      <div className="min-h-screen flex items-center justify-center px-8">
        <div className="text-center">
          <p className="font-display text-2xl text-text-deep mb-4">Chapter not found</p>
          <Link to="/the-experience" className="font-body text-teal-deep hover:underline">&larr; Back to The Experience</Link>
        </div>
      </div>
    )
  }

  const chapterLabel = chapterIndex === 0 ? 'Prologue' : chapterIndex === trailChapters.length - 1 ? 'Epilogue' : `Chapter ${chapterIndex}`
  const prevChapter = chapterIndex > 0 ? trailChapters[chapterIndex - 1] : null
  const nextChapter = chapterIndex < trailChapters.length - 1 ? trailChapters[chapterIndex + 1] : null

  return (
    <div className="pt-20 md:pt-24 pb-20">
      {/* Back link */}
      <div className="max-w-2xl mx-auto px-6 md:px-8 mb-8">
        <Link to="/the-experience" className="font-body text-sm text-teal-deep hover:underline inline-flex items-center gap-1">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M19 12H5m0 0l7 7m-7-7l7-7" />
          </svg>
          Back to The Experience
        </Link>
      </div>

      <div className="max-w-2xl mx-auto px-6 md:px-8">
        {/* Accent strip */}
        <div className="h-1.5 rounded-full mb-10" style={{ background: `linear-gradient(90deg, transparent, ${chapter.accentColor}80, transparent)` }} />

        {/* Header */}
        <div className="mb-10 pb-8 border-b border-text-deep/10">
          <p className="font-handwritten text-lg mb-2" style={{ color: chapter.accentColor }}>
            {chapterLabel}
          </p>
          <h1 className="font-display text-3xl md:text-4xl text-text-deep mb-2">{chapter.title}</h1>
          <p className="font-body text-sm text-text-deep/50 italic">{chapter.location}</p>
        </div>

        {/* Speaker quote */}
        <div
          className="mb-10 p-5 rounded-xl"
          style={{
            backgroundColor: `${chapter.accentColor}10`,
            border: `1px solid ${chapter.accentColor}20`,
          }}
        >
          <p className="font-body text-lg text-text-deep/80 italic leading-relaxed">
            &ldquo;{chapter.speakerQuote}&rdquo;
          </p>
        </div>

        {/* Full text */}
        <div className="mb-10">
          {chapter.fullText.split('\n\n').map((paragraph, i) => (
            <p key={i} className="font-body text-base md:text-lg text-text-deep/80 leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Lesson */}
        <div className="pt-8 border-t border-text-deep/10 text-center mb-12">
          <p className="font-display text-xs tracking-wider uppercase text-text-deep/40 mb-2">The Lesson</p>
          <p className="font-display text-xl tracking-wider" style={{ color: chapter.accentColor }}>
            {chapter.lesson}
          </p>
        </div>

        {/* Prev/Next navigation */}
        <div className="flex justify-between gap-4 pt-8 border-t border-text-deep/10">
          {prevChapter ? (
            <Link
              to={`/the-experience/trail/${prevChapter.id}`}
              className="group flex items-center gap-2 font-body text-sm text-text-deep/50 hover:text-teal-deep transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M19 12H5m0 0l7 7m-7-7l7-7" />
              </svg>
              {prevChapter.title}
            </Link>
          ) : <div />}
          {nextChapter ? (
            <Link
              to={`/the-experience/trail/${nextChapter.id}`}
              className="group flex items-center gap-2 font-body text-sm text-text-deep/50 hover:text-teal-deep transition-colors text-right"
            >
              {nextChapter.title}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14m0 0l-7-7m7 7l-7 7" />
              </svg>
            </Link>
          ) : <div />}
        </div>
      </div>
    </div>
  )
}
