const BASE = import.meta.env.BASE_URL

interface Props {
  tag: string
  heading: string
  copy: string | string[]
  imageSrc: string
  imageAlt?: string
  reverse?: boolean
  id?: string
  altBg?: boolean
}

export default function SplitSection({ tag, heading, copy, imageSrc, imageAlt, reverse, id, altBg }: Props) {
  const paragraphs = Array.isArray(copy) ? copy : [copy]
  const isPlaceholder = imageSrc.startsWith('placeholder:')
  const resolvedSrc = isPlaceholder ? '' : (imageSrc.startsWith('http') ? imageSrc : `${BASE}${imageSrc}`)

  return (
    <section className={altBg ? 'bg-[#012E43]/30' : ''}>
      <div
        id={id}
        data-animate
        className="max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-24 scroll-mt-28"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className={`relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-[#014066]/60 to-[#096C6C]/60 ring-1 ring-sky-cream/10 ${reverse ? 'md:order-2' : ''}`}>
            {isPlaceholder ? (
              <div className="w-full h-full flex items-center justify-center text-sky-cream/50 font-body text-sm italic">
                {imageSrc.replace('placeholder:', '')}
              </div>
            ) : (
              <>
                <img
                  src={resolvedSrc}
                  alt={imageAlt || ''}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'rgba(50,104,114,0.14)', mixBlendMode: 'multiply' }} />
              </>
            )}
          </div>

          {/* Text */}
          <div className={reverse ? 'md:order-1' : ''}>
            <span className="eyebrow text-[#F5EBD0]/75 block mb-3">
              {tag}
            </span>
            <h3 className="font-display text-2xl md:text-3xl text-sky-cream mb-4">
              {heading}
            </h3>
            <div className="w-10 h-0.5 bg-[#E94A3C]/70 mb-5" />
            {paragraphs.map((p, i) => (
              <p key={i} className="font-body text-base md:text-lg text-sky-cream/75 leading-relaxed mb-3">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
