interface Props {
  title: string
  description: string
  icon?: string
}

export default function ActivityCard({ title, description, icon }: Props) {
  return (
    <div data-animate className="bg-white border border-[#e8e2d8] rounded-xl p-6 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
      {icon && <div className="text-2xl mb-3">{icon}</div>}
      <h4 className="font-display text-base text-text-deep font-medium mb-1.5">{title}</h4>
      <p className="font-body text-sm text-text-deep/50 leading-relaxed">{description}</p>
    </div>
  )
}
