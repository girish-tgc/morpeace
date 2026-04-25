import type { ReactNode } from 'react'

const BASE = import.meta.env.BASE_URL

type ImageMedia = { type: 'image'; src: string; alt: string }
type VideoMedia = {
  type: 'video'
  src: string
  poster: string
  alt: string
}
export type HeroMedia = ImageMedia | VideoMedia

interface Props {
  media?: HeroMedia
  backgroundSlot?: ReactNode
  children: ReactNode
}

export default function HeroBase({ media, backgroundSlot, children }: Props) {
  return (
    <section className="relative min-h-[100svh] flex items-stretch overflow-hidden">
      {backgroundSlot}
      {!backgroundSlot && media?.type === 'image' && (
        <img
          src={`${BASE}${media.src}`}
          alt={media.alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      {!backgroundSlot && media?.type === 'video' && (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={`${BASE}${media.poster}`}
          aria-label={media.alt}
        >
          <source
            src={`${BASE}${media.src}`}
            type="video/mp4"
            media="(min-width: 768px)"
          />
        </video>
      )}

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(6,18,26,0.35) 0%, transparent 28%, transparent 60%, rgba(6,18,26,0.55) 100%)',
        }}
      />

      {children}

      <div
        className="absolute bottom-4 left-4 md:bottom-8 md:left-8 z-10 text-xs tracking-[0.25em] uppercase opacity-70 pointer-events-none"
        style={{ color: '#C1B589' }}
      >
        scroll ↓
      </div>
    </section>
  )
}

interface LogoPanelProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
  tagline?: string
  tint?: 'default' | 'white'
}

export function LogoPanel({
  size = 'md',
  className = '',
  tagline,
  tint = 'default',
}: LogoPanelProps) {
  const logoHeight = {
    sm: 'h-10 md:h-12',
    md: 'h-14 md:h-20',
    lg: 'h-20 md:h-28',
  }[size]
  const glowSpread = {
    sm: '-inset-12 md:-inset-16',
    md: '-inset-16 md:-inset-24',
    lg: '-inset-20 md:-inset-28',
  }[size]
  const glassPadding = {
    sm: 'px-5 py-4 md:px-6 md:py-5',
    md: 'px-6 py-5 md:px-9 md:py-6',
    lg: 'px-8 py-6 md:px-12 md:py-8',
  }[size]
  const isWhite = tint === 'white'

  if (isWhite) {
    return (
      <div className={`relative inline-flex flex-col items-center ${className}`}>
        <div
          aria-hidden
          className={`absolute ${glowSpread} rounded-full blur-3xl pointer-events-none`}
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(1,30,43,0.55) 0%, rgba(1,30,43,0.25) 45%, transparent 75%)',
          }}
        />
        <img
          src={`${BASE}logo.webp`}
          alt="Morpeace"
          className={`${logoHeight} w-auto relative z-10`}
          style={{
            filter:
              'brightness(0) invert(1) drop-shadow(0 2px 6px rgba(0,0,0,0.45)) drop-shadow(0 6px 18px rgba(0,0,0,0.4))',
          }}
        />
        {tagline && (
          <p
            className="relative z-10 font-display mt-3 md:mt-4 text-xs md:text-sm tracking-[0.35em] uppercase"
            style={{
              color: '#F5EBD0',
              textShadow:
                '0 1px 2px rgba(0,0,0,0.85), 0 2px 10px rgba(0,0,0,0.55)',
            }}
          >
            {tagline}
          </p>
        )}
      </div>
    )
  }

  return (
    <div
      className={`inline-flex flex-col items-center rounded-3xl backdrop-blur-2xl backdrop-saturate-125 ${glassPadding} ${className}`}
      style={{
        background: 'rgba(255, 255, 255, 0.18)',
        border: '1px solid rgba(255, 255, 255, 0.35)',
        boxShadow:
          '0 14px 44px rgba(1,30,43,0.32), inset 0 1px 0 rgba(255,255,255,0.45)',
      }}
    >
      <img
        src={`${BASE}logo.webp`}
        alt="Morpeace"
        className={`${logoHeight} w-auto`}
      />
      {tagline && (
        <p
          className="font-display mt-2 md:mt-3 text-xs md:text-sm tracking-[0.35em] uppercase"
          style={{ color: '#F5EBD0', textShadow: '0 1px 2px rgba(0,0,0,0.4)' }}
        >
          {tagline}
        </p>
      )}
    </div>
  )
}
