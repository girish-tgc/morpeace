import HeroBase from './HeroBase'
import HeroVideoPlaylist, { type PlaylistItem } from './HeroVideoPlaylist'

const AERIAL_POSTER = 'media/property/at-night-top-view.webp'

const PLAYLIST: PlaylistItem[] = [
  { src: 'media/aerial-drone-01.mp4', poster: AERIAL_POSTER, maxSeconds: 4 },
  { src: 'media/aerial-drone-02.mp4', poster: AERIAL_POSTER, maxSeconds: 7 },
  { src: 'media/aerial-drone-03.mp4', poster: AERIAL_POSTER, maxSeconds: 7 },
  { src: 'media/aerial-drone-04.mp4', poster: AERIAL_POSTER, maxSeconds: 6 },
  { src: 'media/aerial-drone-05.mp4', poster: AERIAL_POSTER, maxSeconds: 4 },
  {
    src: 'media/property/whatsapp-video-2026-02-16-at-10-56-33-pm.mp4',
    poster: 'media/property/at-night-lake-view.webp',
    maxSeconds: 10,
  },
  {
    src: 'media/kids/kids-playing-in-pool.mp4',
    poster: 'media/property/swimming-pool.webp',
    maxSeconds: 3,
  },
  {
    src: 'media/dining-and-food/whatsapp-video-2026-02-16-at-10-56-35-pm.mp4',
    poster: 'media/property/at-night-pool-view.webp',
    maxSeconds: 10,
  },
]

export default function HeroVariantA() {
  return (
    <HeroBase
      backgroundSlot={
        <HeroVideoPlaylist
          items={PLAYLIST}
          alt="Scenes from Morpeace — the forest, the villa, the life"
        />
      }
    >
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 md:px-10 py-24 md:py-32">
        <div data-animate className="flex flex-col items-center text-center max-w-3xl">
          <h1
            className="font-display text-5xl sm:text-6xl md:text-8xl leading-[1.02]"
            style={{
              color: '#F5F1E3',
              textShadow:
                '0 0 1px rgba(0,0,0,0.9), 0 1px 2px rgba(0,0,0,0.9), 0 2px 6px rgba(0,0,0,0.75)',
              letterSpacing: '-0.01em',
            }}
          >
            Where Sunday lasts a week.
          </h1>
          <div
            aria-hidden
            className="h-px w-20 my-8"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, rgba(245,235,208,0.8) 50%, transparent 100%)',
            }}
          />
          <p
            className="font-body italic text-xl md:text-3xl leading-snug"
            style={{
              color: '#F7EEDA',
              fontWeight: 450,
              textShadow:
                '0 0 1px rgba(0,0,0,0.9), 0 1px 2px rgba(0,0,0,0.9), 0 2px 6px rgba(0,0,0,0.7)',
            }}
          >
            Ten quiet acres. A lake, a forest. Yours for a few days.
          </p>
        </div>
      </div>
    </HeroBase>
  )
}
