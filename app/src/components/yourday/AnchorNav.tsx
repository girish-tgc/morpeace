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
    <nav
      ref={navRef}
      className="sticky top-16 md:top-20 z-40 bg-white/95 backdrop-blur-md border-b border-[#e8e2d8] overflow-x-auto scrollbar-hide"
    >
      <div className="flex justify-start md:justify-center gap-6 md:gap-8 px-6 py-3.5 min-w-max">
        {sections.map(({ id, label }) => (
          <button
            key={id}
            data-nav={id}
            onClick={() => handleClick(id)}
            className={`font-display text-[0.7rem] tracking-[0.15em] uppercase whitespace-nowrap transition-colors duration-200 pb-0.5 border-b-2 ${
              activeId === id
                ? 'text-teal-deep border-teal-deep'
                : 'text-text-deep/40 border-transparent hover:text-teal-deep'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  )
}
