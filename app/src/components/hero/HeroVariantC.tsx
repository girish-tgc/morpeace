import HeroBase from './HeroBase'

export default function HeroVariantC() {
  return (
    <HeroBase
      media={{
        type: 'image',
        src: 'media/property/at-night-pool-view.webp',
        alt: 'Open-air pool at Morpeace surrounded by the forest',
      }}
      ctaCaption="Solo room or whole villa · sleeps 10"
    >
      <div
        aria-hidden
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            'linear-gradient(100deg, rgba(3,18,28,0.85) 0%, rgba(3,18,28,0.72) 22%, rgba(3,18,28,0.52) 40%, rgba(3,18,28,0.28) 55%, rgba(3,18,28,0.08) 68%, transparent 78%)',
        }}
      />

      <div className="relative z-10 flex-1 flex flex-col px-6 md:px-10 py-24 md:py-32">
        <div data-animate className="max-w-xl md:max-w-2xl">
          <span
            className="font-display inline-block text-[11px] md:text-xs tracking-[0.4em] uppercase mb-6"
            style={{
              color: '#E6D8A8',
              textShadow: '0 1px 2px rgba(0,0,0,0.8)',
            }}
          >
            Western Ghats · Satara
          </span>
          <h1
            className="font-display text-5xl sm:text-6xl md:text-7xl leading-[1.02] mb-7"
            style={{
              color: '#F5F1E3',
              textShadow:
                '0 2px 6px rgba(0,0,0,0.8), 0 8px 32px rgba(0,0,0,0.55)',
              letterSpacing: '-0.01em',
            }}
          >
            A stay inside a forest.
          </h1>
          <div
            aria-hidden
            className="h-px w-16 mb-7"
            style={{
              background:
                'linear-gradient(90deg, rgba(230,216,168,0.9) 0%, rgba(230,216,168,0.3) 100%)',
            }}
          />
          <p
            className="font-body text-2xl md:text-4xl max-w-xl leading-[1.25]"
            style={{
              color: '#F7EEDA',
              fontWeight: 400,
              textShadow:
                '0 1px 2px rgba(0,0,0,0.85), 0 3px 16px rgba(0,0,0,0.55)',
            }}
          >
            Come to pause. To celebrate. To breathe.
          </p>
        </div>
      </div>
    </HeroBase>
  )
}
