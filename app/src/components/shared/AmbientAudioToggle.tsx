import { useAmbientAudio } from '../../hooks/useAmbientAudio'

export default function AmbientAudioToggle() {
  const { muted, toggle } = useAmbientAudio()

  const isPlaying = !muted

  return (
    <button
      onClick={toggle}
      aria-label={isPlaying ? 'Mute ambient sound' : 'Enable ambient sound'}
      className="fixed bottom-6 right-6 z-[90] w-10 h-10 flex items-center justify-center rounded-full bg-forest-night/60 backdrop-blur-sm border border-canopy-light/10 text-sky-cream/60 hover:text-sky-cream hover:bg-forest-night/80 transition-all duration-300"
    >
      {isPlaying ? (
        // Speaker with waves — playing
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" fillOpacity="0.2" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </svg>
      ) : (
        // Speaker with X — muted/locked
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" fillOpacity="0.2" />
          <line x1="23" y1="9" x2="17" y2="15" />
          <line x1="17" y1="9" x2="23" y2="15" />
        </svg>
      )}
    </button>
  )
}
