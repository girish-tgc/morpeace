import { useLocation } from 'react-router-dom'
import PairedBookingCTAs from './PairedBookingCTAs'
import { whatsappLink, telLink, CONTACT } from '../../data/contact'

export default function FloatingContactCluster() {
  const { pathname } = useLocation()
  const isHeroRoute = pathname === '/' || pathname.startsWith('/hero-')

  if (isHeroRoute) {
    return (
      <div
        className="fixed bottom-3 right-3 md:bottom-6 md:right-6 z-40 pointer-events-auto"
        style={{ paddingBottom: 'max(0rem, env(safe-area-inset-bottom))' }}
      >
        <PairedBookingCTAs size="md" tone="peacock" />
      </div>
    )
  }

  return (
    <div
      className="fixed bottom-3 left-3 md:bottom-6 md:left-6 z-40 flex flex-col gap-2 pointer-events-none"
      style={{ paddingBottom: 'max(0rem, env(safe-area-inset-bottom))' }}
    >
      <div className="flex gap-2 md:hidden pointer-events-auto">
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Message us on WhatsApp"
          className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] text-white px-4 py-3 min-h-[44px] font-display text-[11px] tracking-[0.18em] uppercase shadow-[0_6px_18px_rgba(37,211,102,0.45)] hover:bg-[#1fb558] active:scale-95 transition-all"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M20.52 3.48A11.86 11.86 0 0012.05 0C5.49 0 .18 5.31.18 11.87a11.78 11.78 0 001.59 5.94L0 24l6.35-1.67a11.9 11.9 0 005.7 1.45h.01c6.56 0 11.87-5.31 11.87-11.87 0-3.17-1.23-6.15-3.41-8.43zM12.06 21.8h-.01a9.91 9.91 0 01-5.05-1.38l-.36-.21-3.77.99 1.01-3.67-.24-.38a9.82 9.82 0 01-1.51-5.28c0-5.45 4.44-9.88 9.9-9.88a9.83 9.83 0 016.99 2.9 9.8 9.8 0 012.89 6.99c0 5.46-4.44 9.92-9.9 9.92zm5.43-7.41c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35z"/>
          </svg>
          <span className="hidden min-[360px]:inline">WhatsApp</span>
        </a>
        <a
          href={telLink()}
          aria-label={`Call ${CONTACT.whatsappDisplay}`}
          className="inline-flex items-center gap-1.5 rounded-full bg-[#0E7EC0] text-white px-4 py-3 min-h-[44px] font-display text-[11px] tracking-[0.18em] uppercase shadow-[0_6px_18px_rgba(14,126,192,0.45)] hover:bg-[#016795] active:scale-95 transition-all"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.28-1.28a2 2 0 0 1 2.11-.45c.9.35 1.84.59 2.8.72A2 2 0 0 1 22 16.92z" />
          </svg>
          <span className="hidden min-[360px]:inline">Call</span>
        </a>
      </div>

      <div className="pointer-events-auto">
        <PairedBookingCTAs size="sm" tone="dark" />
      </div>
    </div>
  )
}
