import { dashboardStats } from '../../data/trees'

export default function MorpeacePulse() {
  const items = [
    { value: `${dashboardStats.totalTrees}`, label: 'trees documented' },
    { value: '10', label: 'stories told' },
    { value: `${dashboardStats.totalLifetimeCO2kg.toLocaleString()} kg`, label: 'carbon held' },
    { value: 'Growing since 2024', label: '' },
  ]

  return (
    <div className="bg-canvas py-8 md:py-10 border-y border-text-deep/10">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:gap-x-12">
          {items.map((item, i) => (
            <div key={i} className="flex items-baseline gap-2">
              <span className="font-mono text-sm md:text-base text-turmeric font-medium">
                {item.value}
              </span>
              {item.label && (
                <span className="font-body text-sm text-text-deep/50">
                  {item.label}
                </span>
              )}
              {i < items.length - 1 && (
                <span className="hidden md:inline text-text-deep/15 ml-4">&middot;</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
