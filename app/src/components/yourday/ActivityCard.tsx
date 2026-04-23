import type { Icon } from '@phosphor-icons/react'

interface Props {
  title: string
  description: string
  icon?: Icon
}

export default function ActivityCard({ title, description, icon: IconCmp }: Props) {
  return (
    <div data-animate className="bg-[#014066]/45 backdrop-blur-sm border border-sky-cream/10 rounded-xl p-4 md:p-6 md:hover:-translate-y-0.5 hover:border-[#FF7D6B]/30 hover:bg-[#014066]/60 transition-all duration-300">
      {IconCmp && (
        <IconCmp size={26} weight="thin" className="text-[#FF7D6B] mb-3" />
      )}
      <h4 className="font-display text-base text-sky-cream font-medium mb-1.5">{title}</h4>
      <p className="font-body text-sm text-sky-cream/65 leading-relaxed">{description}</p>
    </div>
  )
}
