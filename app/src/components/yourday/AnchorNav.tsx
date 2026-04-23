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

  // Auto-scroll active link into view on mobile — scroll only the nav's
  // horizontal axis. scrollIntoView bubbles up to ancestor scroll containers
  // on iOS Safari and can drag the page vertically when this nav is sticky,
  // so we manipulate the nav's scrollLeft directly instead.
  useEffect(() => {
    const nav = navRef.current
    if (!nav) return
    const activeLink = nav.querySelector<HTMLElement>(`[data-nav="${activeId}"]`)
    if (!activeLink) return
    const target = activeLink.offsetLeft + activeLink.offsetWidth / 2 - nav.clientWidth / 2
    nav.scrollTo({ left: Math.max(0, target), behavior: 'smooth' })
  }, [activeId])

  const handleClick = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="sticky top-[calc(4rem+env(safe-area-inset-top))] md:top-[calc(5rem+env(safe-area-inset-top))] z-40 bg-[#012E43]/85 backdrop-blur-md border-b border-sky-cream/10">
      <nav
        ref={navRef}
        className="overflow-x-auto scrollbar-hide"
      >
        <div className="flex justify-start md:justify-center gap-6 md:gap-8 px-6 py-3.5 min-w-max">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              data-nav={id}
              onClick={() => handleClick(id)}
              className={`font-display text-xs tracking-[0.2em] uppercase whitespace-nowrap transition-colors duration-200 pb-0.5 border-b-2 ${
                activeId === id
                  ? 'text-[#F5EBD0] border-[#E94A3C]'
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
