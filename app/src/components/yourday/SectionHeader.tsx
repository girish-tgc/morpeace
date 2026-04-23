interface Props {
  tag: string
  heading: string
  subtext?: string
  id?: string
}

export default function SectionHeader({ tag, heading, subtext, id }: Props) {
  return (
    <div id={id} data-animate className="text-center max-w-3xl mx-auto mb-10 md:mb-14 scroll-mt-28">
      <span className="eyebrow text-[#F5EBD0]/75 block mb-3">
        {tag}
      </span>
      <h2 className="font-display text-3xl md:text-4xl text-sky-cream font-normal">
        {heading}
      </h2>
      <div className="w-10 h-0.5 bg-[#E94A3C]/70 mx-auto mt-4" />
      {subtext && (
        <p className="font-body text-base md:text-lg text-sky-cream/65 italic mt-4 max-w-xl mx-auto">
          {subtext}
        </p>
      )}
    </div>
  )
}
