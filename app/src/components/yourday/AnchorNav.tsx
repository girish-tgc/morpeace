import { useState, useEffect, useRef } from 'react'

interface Section {
  id: string
  label: string
}

interface Props {
  sections: Section[]
}

export default function AnchorNav({ sections }: Props) {
  const [activeId, setActiveId] = useState(sections[0]?.id || '')
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: '-20% 0px -70% 0px' }
    )

    for (const section of sections) {
      const el = document.getElementById(section.id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [sections])

  // Auto-scroll active link into view on mobile
  useEffect(() => {
    if (!navRef.current) return
    const activeLink = navRef.current.querySelector(`[data-nav="${activeId}"]`)
    if (activeLink) {
      activeLink.scrollIntoView({ inline: 'center', behavior: 'smooth', block: 'nearest' })
    }
  }, [activeId])

  const handleClick = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="sticky top-[calc(4rem+env(safe-area-inset-top))] md:top-[calc(5rem+env(safe-area-inset-top))] z-40 bg-[#012E43]/85 backdrop-blur-md border-b border-sky-cream/10">
      <nav
        ref={navRef}
        className="overflow-x-auto scrollbar-hide snap-x snap-mandatory"
      >
        <div className="flex justify-start md:justify-center gap-6 md:gap-8 px-6 py-3.5 min-w-max">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              data-nav={id}
              onClick={() => handleClick(id)}
              className={`snap-start font-display text-xs tracking-[0.2em] uppercase whitespace-nowrap transition-colors duration-200 pb-0.5 border-b-2 ${
                activeId === id
                  ? 'text-[#FF7D6B] border-[#E94A3C]'
                  : 'text-sky-cream/45 border-transparent hover:text-sky-cream/80'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </nav>
      {/* Right-edge fade — hints at scrollable content on mobile */}
      <div
        className="pointer-events-none absolute top-0 right-0 bottom-0 w-10 bg-gradient-to-l from-[#012E43]/85 to-transparent md:hidden"
        aria-hidden="true"
      />
    </div>
  )
}
