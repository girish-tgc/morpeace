import HeroBase from './HeroBase'

export default function HeroVariantB() {
  return (
    <HeroBase
      media={{
        type: 'image',
        src: 'media/property/at-night-lake-view.webp',
        alt: 'Morpeace villa reflected on the lake at dusk',
      }}
    >
      <div className="relative z-10 flex-1 flex items-end px-6 md:px-10 pb-40 md:pb-48">
        <div data-animate className="flex flex-col items-start gap-4 max-w-4xl">
          <h1
            className="font-display text-5xl sm:text-6xl md:text-7xl leading-[1.05]"
            style={{
              color: '#F0F5F7',
              textShadow:
                '0 2px 4px rgba(0,0,0,0.9), 0 4px 18px rgba(0,0,0,0.7)',
            }}
          >
            A stay inside a forest.
          </h1>
          <p
            className="font-body text-xl md:text-3xl leading-snug"
            style={{
              color: '#F5EBD0',
              textShadow:
                '0 1px 2px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.6)',
            }}
          >
            Ten acres · 1,000+ native trees · sleeps up to 10.
          </p>
        </div>
      </div>
    </HeroBase>
  )
}
