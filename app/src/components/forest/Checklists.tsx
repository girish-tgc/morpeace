import { useState } from 'react'
import { birdChecklist, butterflyChecklist } from '../../data/checklists'

function ChecklistPanel({ title, eyebrow, note, items }: { title: string; eyebrow: string; note: string; items: string[] }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-xl ring-1 ring-sky-cream/10 bg-[#012E43]/35 overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left px-6 py-5 md:px-8 md:py-6 flex items-baseline justify-between gap-4 hover:bg-[#012E43]/55 transition-colors"
      >
        <div>
          <p className="eyebrow text-[#FF7D6B]/80 mb-1">{eyebrow}</p>
          <h3 className="font-display text-xl md:text-2xl text-sky-cream">{title}</h3>
          <p className="font-body text-sm italic text-sky-cream/60 mt-1 max-w-2xl">{note}</p>
        </div>
        <span className="eyebrow text-[#FF7D6B] whitespace-nowrap">
          {open ? 'Collapse' : `Show all ${items.length} →`}
        </span>
      </button>
      {open && (
        <ul className="px-6 md:px-8 pb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-1.5 font-body text-sm text-sky-cream/80">
          {items.map((name, i) => (
            <li key={name} className="flex items-baseline gap-3">
              <span className="font-mono text-xs text-sky-cream/30 tabular-nums w-6">{String(i + 1).padStart(2, '0')}</span>
              <span>{name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function Checklists() {
  return (
    <section
      id="checklists"
      className="relative scroll-mt-28 py-20 md:py-24 text-sky-cream"
      style={{ background: 'linear-gradient(180deg, #012E43 0%, #014066 100%)' }}
    >
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="eyebrow text-[#FF7D6B]/80 mb-3">Appendix B · Full Fauna Checklists</p>
          <h2 className="font-display text-3xl md:text-4xl text-sky-cream mb-4">
            The broader catalogue
          </h2>
          <div className="w-12 h-0.5 bg-[#E94A3C]/70 mx-auto mb-5" />
          <p className="font-body text-base italic text-sky-cream/65">
            Beyond what could be photographed in a three-day window — the full roll of species
            recorded on site by sight, sound, and survey.
          </p>
        </div>

        <div className="space-y-5">
          <ChecklistPanel
            eyebrow="§3.1 Birds"
            title="58 bird species recorded"
            note="Visual field observation + Merlin Sound ID (Cornell Lab). Wetland specialists, raptors, frugivores, insectivores, nectarivores."
            items={birdChecklist}
          />
          <ChecklistPanel
            eyebrow="§3.2 Butterflies"
            title="20 butterfly species recorded"
            note="Predominantly Pieridae, Nymphalidae and Lycaenidae — diagnostic of healthy grass ground-layer and intact flowering understory."
            items={butterflyChecklist}
          />
        </div>
      </div>
    </section>
  )
}
