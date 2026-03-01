import { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'

interface Props {
  open: boolean
  onClose: () => void
  links: readonly { to: string; label: string }[]
}

export default function MobileMenu({ open, onClose, links }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const { pathname } = useLocation()

  useEffect(() => {
    if (!overlayRef.current || !panelRef.current) return

    if (open) {
      document.body.style.overflow = 'hidden'
      gsap.to(overlayRef.current, { opacity: 1, duration: 0.3, ease: 'power2.out' })
      gsap.fromTo(panelRef.current,
        { x: '100%' },
        { x: '0%', duration: 0.4, ease: 'power3.out' }
      )
    } else {
      document.body.style.overflow = ''
      gsap.to(overlayRef.current, { opacity: 0, duration: 0.2 })
      gsap.to(panelRef.current, { x: '100%', duration: 0.3, ease: 'power2.in' })
    }

    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[60] md:hidden">
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black/40 opacity-0"
        onClick={onClose}
      />

      {/* Slide-out panel */}
      <div
        ref={panelRef}
        className="absolute top-0 right-0 bottom-0 w-72 bg-parchment shadow-2xl flex flex-col"
        style={{ transform: 'translateX(100%)' }}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="p-2 text-[#1a2e1a]/60 hover:text-[#1a2e1a]"
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2 px-6 pt-4">
          {links.map(link => {
            const active = pathname === link.to || (link.to !== '/' && pathname.startsWith(link.to))
            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={onClose}
                className={`font-body text-lg py-3 px-4 rounded-xl transition-colors ${
                  active
                    ? 'text-[#1B6B5A] bg-[#1B6B5A]/10'
                    : 'text-[#1a2e1a]/80 hover:text-[#1a2e1a] hover:bg-[#1a2e1a]/5'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* Footer */}
        <div className="mt-auto p-6 border-t border-[#1a2e1a]/10">
          <p className="font-handwritten text-lg text-[#1a2e1a]/40">
            17.6105°N, 73.9895°E
          </p>
        </div>
      </div>
    </div>
  )
}
