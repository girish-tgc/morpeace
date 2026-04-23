import { Link, useLocation } from 'react-router-dom'

const VARIANTS = [
  { path: '/', label: 'Now' },
  { path: '/hero-a', label: 'A' },
  { path: '/hero-b', label: 'B' },
  { path: '/hero-c', label: 'C' },
] as const

export default function HeroVariantSwitcher() {
  const { pathname } = useLocation()
  const active = pathname === '/' ? '/' : pathname.replace(/\/$/, '')
  const visible = active === '/' || active.startsWith('/hero-')
  if (!visible) return null

  return (
    <div
      className="fixed top-[5.5rem] right-3 md:right-5 z-[60] flex gap-1 rounded-full backdrop-blur-md px-1.5 py-1 font-display text-[10px] md:text-[11px] tracking-[0.25em] uppercase"
      style={{
        backgroundColor: 'rgba(1, 46, 67, 0.65)',
        border: '1px solid rgba(240, 230, 205, 0.3)',
      }}
      aria-label="Hero variant switcher"
    >
      {VARIANTS.map(v => {
        const isActive = active === v.path
        return (
          <Link
            key={v.path}
            to={v.path}
            className={`px-2.5 py-1 rounded-full transition-colors ${
              isActive ? 'text-[#012E43]' : 'text-[#F0E6CD]/75 hover:text-[#F0E6CD]'
            }`}
            style={{
              backgroundColor: isActive ? '#24BEB9' : 'transparent',
            }}
          >
            {v.label}
          </Link>
        )
      })}
    </div>
  )
}
