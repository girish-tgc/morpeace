import { BOOKING_URL_ROOM, BOOKING_URL_VILLA } from '../../data/contact'

type Tone = 'light' | 'dark' | 'peacock' | 'drawer'
type Size = 'sm' | 'md' | 'lg'

interface Props {
  tone?: Tone
  size?: Size
  stack?: boolean
  fullWidth?: boolean
  onNavigate?: () => void
  className?: string
  roomLabel?: string
  villaLabel?: string
}

const sizeCls: Record<Size, string> = {
  sm: 'text-[10px] px-3 py-1.5 tracking-[0.15em]',
  md: 'text-xs px-5 py-2.5 tracking-[0.2em]',
  lg: 'text-base md:text-lg px-7 md:px-9 py-3.5 md:py-4 tracking-[0.2em]',
}

const toneRoom: Record<Tone, string> = {
  light: 'border border-[#E94A3C] text-[#E94A3C] hover:bg-[#E94A3C]/10 bg-transparent',
  dark: 'border border-[#F5EBD0]/80 text-[#F5EBD0] hover:bg-[#F5EBD0]/10 bg-[#012E43]/30 backdrop-blur-sm',
  peacock: 'border border-[#24BEB9]/80 text-[#24BEB9] hover:bg-[#24BEB9]/10 bg-[#1E3E4D]/40 backdrop-blur-sm',
  drawer: 'border border-[#E94A3C] text-[#E94A3C] hover:bg-[#E94A3C]/10 bg-transparent',
}

const toneVilla: Record<Tone, string> = {
  light: 'bg-[#E94A3C] text-white hover:bg-[#B3271E] border border-transparent',
  dark: 'bg-[#F5EBD0] text-[#012E43] hover:bg-[#E94A3C] border border-transparent',
  peacock: 'bg-[#24BEB9] text-[#1E3E4D] hover:bg-[#24BEB9]/85 border border-transparent shadow-[0_8px_24px_rgba(36,190,185,0.35)]',
  drawer: 'bg-[#E94A3C] text-white hover:bg-[#B3271E] border border-transparent',
}

export default function PairedBookingCTAs({
  tone = 'light',
  size = 'md',
  stack = false,
  fullWidth = false,
  onNavigate,
  className = '',
  roomLabel = 'Book a room',
  villaLabel = 'Book the villa',
}: Props) {
  const base = `font-display uppercase rounded-full transition-all active:scale-95 md:hover:scale-[1.02] inline-flex items-center justify-center whitespace-nowrap ${sizeCls[size]}`
  const wrapper = stack
    ? 'flex flex-col gap-2.5'
    : 'flex flex-row flex-wrap gap-2 md:gap-3 items-center'
  const btn = `${base} ${fullWidth ? 'w-full' : ''}`
  return (
    <div className={`${wrapper} ${className}`}>
      <a
        href={BOOKING_URL_ROOM}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onNavigate}
        className={`${btn} ${toneRoom[tone]}`}
      >
        {roomLabel}
      </a>
      <a
        href={BOOKING_URL_VILLA}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onNavigate}
        className={`${btn} ${toneVilla[tone]}`}
      >
        {villaLabel}
      </a>
    </div>
  )
}
