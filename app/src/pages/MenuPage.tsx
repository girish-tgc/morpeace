import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead from '../components/SeoHead'
import { breadcrumbSchema, menuSchema } from '../lib/seo/schema'
import {
  MENU_CHAPTERS,
  MEAL_INCLUSIONS,
  PACKAGE_RATES,
  PACKAGE_NOTES,
  type MenuItem,
  type MenuSection,
  type MenuChapter,
} from '../data/menu'
import PairedBookingCTAs from '../components/nav/PairedBookingCTAs'

gsap.registerPlugin(ScrollTrigger)

const BASE = import.meta.env.BASE_URL

// ─── small decorative flourish that echoes the PDF's brown motifs ──
function Flourish({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M0 6 H44" stroke="currentColor" strokeWidth="0.8" opacity="0.55" />
      <path d="M76 6 H120" stroke="currentColor" strokeWidth="0.8" opacity="0.55" />
      <path
        d="M60 1 C 56 3, 54 5, 54 6 C 54 7, 56 9, 60 11 C 64 9, 66 7, 66 6 C 66 5, 64 3, 60 1 Z"
        stroke="currentColor"
        strokeWidth="0.9"
        opacity="0.7"
      />
      <circle cx="60" cy="6" r="1.1" fill="currentColor" opacity="0.7" />
    </svg>
  )
}

// ─── chapter-level anchor nav (sticky) ────────────────────────────
function MenuAnchorNav({ chapters, activeChapter, onJump }: {
  chapters: MenuChapter[]
  activeChapter: string
  onJump: (id: string) => void
}) {
  return (
    <div className="sticky top-[calc(4rem+env(safe-area-inset-top))] md:top-[calc(5rem+env(safe-area-inset-top))] z-40 bg-[#F4ECDE]/92 backdrop-blur-md border-b border-[#8B6F3D]/18">
      <nav className="overflow-x-auto scrollbar-hide">
        <div className="flex justify-start md:justify-center gap-6 md:gap-10 px-6 py-3.5 min-w-max">
          <button
            onClick={() => onJump('packages')}
            className={`font-display text-xs tracking-[0.22em] uppercase whitespace-nowrap pb-0.5 border-b-2 transition-colors ${
              activeChapter === 'packages'
                ? 'text-[#8B3A24] border-[#8B3A24]'
                : 'text-[#6B4A24]/60 border-transparent hover:text-[#6B4A24]'
            }`}
          >
            Packages
          </button>
          {chapters.map((c) => (
            <button
              key={c.id}
              onClick={() => onJump(c.id)}
              className={`font-display text-xs tracking-[0.22em] uppercase whitespace-nowrap pb-0.5 border-b-2 transition-colors ${
                activeChapter === c.id
                  ? 'text-[#8B3A24] border-[#8B3A24]'
                  : 'text-[#6B4A24]/60 border-transparent hover:text-[#6B4A24]'
              }`}
            >
              {c.tag}
            </button>
          ))}
        </div>
      </nav>
    </div>
  )
}

// ─── single dish card ─────────────────────────────────────────────
function Dish({ item }: { item: MenuItem }) {
  return (
    <div data-animate className="group">
      <div className="flex items-baseline gap-3">
        <h4 className="font-display text-lg md:text-xl text-[#2C1810] leading-snug tracking-tight">
          {item.name}
          {item.tag && (
            <span className="font-body italic text-sm text-[#6B4A24]/70 ml-2 font-normal">
              {item.tag}
            </span>
          )}
        </h4>
        {item.specialty && (
          <span className="font-display uppercase tracking-[0.18em] text-[10px] text-[#8B3A24] border border-[#8B3A24]/35 rounded-full px-2 py-[1px] shrink-0 italic">
            Specialty
          </span>
        )}
      </div>
      <div className="flex justify-between items-end gap-6 mt-1">
        <p className="font-body text-[15px] md:text-[15.5px] text-[#3E2B1A]/80 leading-relaxed italic">
          {item.desc}
        </p>
        {item.price && (
          <span className="font-display text-sm text-[#8B3A24] whitespace-nowrap tracking-tight shrink-0">
            {item.price}
          </span>
        )}
      </div>
    </div>
  )
}

// ─── a named section within a chapter (e.g. "Breakfast") ─────────
function Section({ section }: { section: MenuSection }) {
  return (
    <section id={section.id} className="scroll-mt-32 mb-16 md:mb-20">
      <div data-animate className="text-center mb-8 md:mb-10">
        <h3 className="font-display text-2xl md:text-3xl text-[#5A2410] tracking-tight inline-flex items-center gap-4">
          <span className="text-[#8B6F3D]/65" aria-hidden="true">❧</span>
          {section.heading}
          <span className="text-[#8B6F3D]/65" aria-hidden="true">❧</span>
        </h3>
        {section.intro && (
          <p className="font-body italic text-[#6B4A24]/75 text-sm md:text-base mt-3 max-w-xl mx-auto">
            {section.intro}
          </p>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-7">
        {section.items.map((it) => (
          <Dish key={it.name} item={it} />
        ))}
      </div>
    </section>
  )
}

// ─── chapter — a major grouping (Thali / À la Carte) ─────────────
function Chapter({ chapter }: { chapter: MenuChapter }) {
  return (
    <section id={chapter.id} className="scroll-mt-24 py-16 md:py-24 px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div data-animate className="text-center mb-14 md:mb-20">
          <span className="font-display uppercase tracking-[0.3em] text-xs text-[#8B3A24]/85">
            {chapter.tag}
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-[#2C1810] mt-3 leading-tight">
            {chapter.title}
          </h2>
          {chapter.tagline && (
            <p className="font-body italic text-[#6B4A24] text-base md:text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
              {chapter.tagline}
            </p>
          )}
          <Flourish className="w-40 h-3 mx-auto mt-7 text-[#8B6F3D]" />
        </div>
        {chapter.sections.map((s) => (
          <Section key={s.id} section={s} />
        ))}
      </div>
    </section>
  )
}

// ─── packages / thali inclusions block ───────────────────────────
function PackagesBlock() {
  return (
    <section id="packages" className="scroll-mt-24 py-16 md:py-24 px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div data-animate className="text-center mb-12 md:mb-16">
          <span className="font-display uppercase tracking-[0.3em] text-xs text-[#8B3A24]/85">
            Meal Packages
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-[#2C1810] mt-3 leading-tight">
            What Comes with Your Stay
          </h2>
          <p className="font-body italic text-[#6B4A24] text-base md:text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
            Every meal is a slow-crafted memory — especially those made with ingredients gathered
            from our own food forest, seasonal harvests, and foraged greens.
          </p>
          <Flourish className="w-40 h-3 mx-auto mt-7 text-[#8B6F3D]" />
        </div>

        {/* Inclusions */}
        <div data-animate className="mb-12 md:mb-16">
          <h3 className="font-display text-xl md:text-2xl text-[#5A2410] text-center mb-6">
            What a Meal Includes
          </h3>
          <div className="overflow-hidden rounded-xl border border-[#8B6F3D]/30 bg-[#FBF4E4]/70 shadow-[0_1px_2px_rgba(60,32,12,0.05)]">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[#8B6F3D]/10">
                  <th className="font-display text-sm md:text-base text-[#2C1810] px-5 md:px-8 py-4 tracking-wide w-[34%] md:w-[30%]">Meal</th>
                  <th className="font-display text-sm md:text-base text-[#2C1810] px-5 md:px-8 py-4 tracking-wide">Inclusions</th>
                </tr>
              </thead>
              <tbody>
                {MEAL_INCLUSIONS.map((row, i) => (
                  <tr
                    key={row.meal}
                    className={`${i !== MEAL_INCLUSIONS.length - 1 ? 'border-b border-[#8B6F3D]/15' : ''}`}
                  >
                    <td className="font-display text-[15px] md:text-base text-[#5A2410] px-5 md:px-8 py-4 align-top">{row.meal}</td>
                    <td className="font-body italic text-[15px] text-[#3E2B1A]/85 px-5 md:px-8 py-4 leading-relaxed">{row.includes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Package rates */}
        <div data-animate>
          <h3 className="font-display text-xl md:text-2xl text-[#5A2410] text-center mb-6">
            Package Rates <span className="text-[#6B4A24]/70 text-base md:text-lg font-normal italic">— per person</span>
          </h3>
          <div className="overflow-hidden rounded-xl border border-[#8B6F3D]/30 bg-[#FBF4E4]/70 shadow-[0_1px_2px_rgba(60,32,12,0.05)]">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[#8B6F3D]/10">
                  <th className="font-display text-sm md:text-base text-[#2C1810] px-5 md:px-8 py-4 tracking-wide">Package</th>
                  <th className="font-display text-sm md:text-base text-[#2C1810] px-5 md:px-8 py-4 tracking-wide text-right whitespace-nowrap">Rate</th>
                </tr>
              </thead>
              <tbody>
                {PACKAGE_RATES.map((row, i) => (
                  <tr
                    key={row.label}
                    className={`${i !== PACKAGE_RATES.length - 1 ? 'border-b border-[#8B6F3D]/15' : ''}`}
                  >
                    <td className="font-body text-[15px] md:text-base text-[#3E2B1A] px-5 md:px-8 py-4">{row.label}</td>
                    <td className="font-display text-[15px] md:text-base text-[#8B3A24] px-5 md:px-8 py-4 text-right whitespace-nowrap">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ul className="mt-8 space-y-2 max-w-2xl mx-auto">
            {PACKAGE_NOTES.map((note, i) => (
              <li key={i} className="font-body italic text-[15px] text-[#6B4A24] leading-relaxed flex gap-3">
                <span className="text-[#8B3A24] shrink-0 mt-[2px]">•</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

// ─── chapter divider — a feather motif between sections ──────────
function ChapterDivider() {
  return (
    <div className="py-10 md:py-14 flex items-center justify-center gap-6" aria-hidden="true">
      <span className="block w-16 md:w-28 h-px bg-[#8B6F3D]/35" />
      <img
        src={`${BASE}feather2.webp`}
        alt=""
        className="h-6 md:h-8 opacity-70"
        style={{ filter: 'sepia(0.5) saturate(0.9)' }}
      />
      <span className="block w-16 md:w-28 h-px bg-[#8B6F3D]/35" />
    </div>
  )
}

export default function MenuPage() {
  const pageRef = useRef<HTMLDivElement>(null)
  const [activeChapter, setActiveChapter] = useState<string>('packages')

  // fade-in on scroll — matches the YourDayPage pattern
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = gsap.context(() => {
      const animEls = pageRef.current?.querySelectorAll('[data-animate]')
      if (!animEls) return

      if (prefersReduced) {
        gsap.set(animEls, { opacity: 1, y: 0 })
        return
      }

      animEls.forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })
    }, pageRef)

    return () => ctx.revert()
  }, [])

  // track which chapter is visible so the sticky nav can highlight
  useEffect(() => {
    const ids = ['packages', ...MENU_CHAPTERS.map((c) => c.id)]
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveChapter(entry.target.id)
        }
      },
      { rootMargin: '-30% 0px -60% 0px' },
    )
    for (const id of ids) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  const handleJump = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div
      ref={pageRef}
      className="text-[#2C1810]"
      style={{
        background:
          'radial-gradient(ellipse 90% 60% at 50% 0%, #F7EFDE 0%, #F4ECDE 35%, #EFE4D0 100%)',
      }}
    >
      <SeoHead
        title="The Menu — Morpeace | Farm-to-Table Maharashtrian Cuisine"
        description="A menu of age-old recipes, cooked slow and served warm — Maharashtrian thalis, clay-oven breads, Gavran chicken, farm vegetables, and seasonal mangoes from our own groves."
        path="/menu"
        jsonLd={[
          menuSchema(
            MENU_CHAPTERS.map((c) => ({
              name: c.title,
              items: c.sections.flatMap((s) => s.items.map((i) => i.name)),
            })),
          ),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Menu', path: '/menu' },
          ]),
        ]}
      />
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[70vh] md:min-h-[78vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="ken-burns-a absolute inset-0">
            <img
              src={`${BASE}photos/mangoes-sunlight.webp`}
              alt=""
              className="absolute inset-0 w-full h-full object-cover scale-110"
              aria-hidden="true"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#2C1810]/55 via-[#2C1810]/35 to-[#F4ECDE]" />
        <div className="relative z-10 text-center px-8 py-20 max-w-3xl">
          <div data-animate>
            <h1
              className="font-display text-5xl md:text-7xl text-[#FBF4E4] leading-[1.05]"
              style={{ textShadow: '0 2px 24px rgba(44,24,16,0.65)' }}
            >
              The Menu
            </h1>
            <Flourish className="w-44 h-3 mx-auto mt-6 text-[#F7D9A8]/80" />
            <p
              className="font-body italic text-lg md:text-2xl text-[#FBF4E4]/90 mt-7 leading-relaxed"
              style={{ textShadow: '0 1px 14px rgba(44,24,16,0.55)' }}
            >
              Lovingly crafted with age-old recipes — cooked slow, served warm, just like grandma would.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ STICKY ANCHOR NAV ═══ */}
      <MenuAnchorNav
        chapters={MENU_CHAPTERS}
        activeChapter={activeChapter}
        onJump={handleJump}
      />

      {/* ═══ PACKAGES ═══ */}
      <PackagesBlock />

      <ChapterDivider />

      {/* ═══ CHAPTERS ═══ */}
      {MENU_CHAPTERS.map((chapter, i) => (
        <div key={chapter.id}>
          <Chapter chapter={chapter} />
          {i < MENU_CHAPTERS.length - 1 && <ChapterDivider />}
        </div>
      ))}

      {/* ═══ FOOTER / CTA ═══ */}
      <section className="py-20 md:py-28 px-6 text-center bg-[#EFE4D0]/70 border-t border-[#8B6F3D]/20">
        <div data-animate className="max-w-2xl mx-auto">
          <Flourish className="w-40 h-3 mx-auto mb-6 text-[#8B6F3D]" />
          <h2 className="font-display text-3xl md:text-4xl text-[#2C1810] mb-4">
            Let Us Cook for You
          </h2>
          <p className="font-body italic text-[#6B4A24] text-base md:text-lg mb-10 leading-relaxed">
            Kindly share your preferences a day in advance so we can source the freshest from the
            farm, the forest, and the village around us.
          </p>
          <div className="flex flex-col items-center gap-5">
            <PairedBookingCTAs size="md" tone="light" />
            <Link
              to="/the-experience"
              className="inline-block cta-text text-[#6B4A24]/75 hover:text-[#6B4A24] px-4 py-2 tracking-[0.2em] transition-colors"
            >
              ← Back to Morpeace
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
