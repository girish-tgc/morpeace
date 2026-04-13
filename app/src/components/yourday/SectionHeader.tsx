interface Props {
  tag: string
  heading: string
  subtext?: string
  id?: string
}

export default function SectionHeader({ tag, heading, subtext, id }: Props) {
  return (
    <div id={id} data-animate className="text-center max-w-3xl mx-auto mb-10 md:mb-14 scroll-mt-28">
      <span className="font-display text-xs tracking-[0.2em] uppercase text-teal-deep/60 block mb-3">
        {tag}
      </span>
      <h2 className="font-display text-3xl md:text-4xl text-text-deep font-normal">
        {heading}
      </h2>
      <div className="w-10 h-0.5 bg-turmeric mx-auto mt-4" />
      {subtext && (
        <p className="font-body text-base md:text-lg text-text-deep/60 italic mt-4 max-w-xl mx-auto">
          {subtext}
        </p>
      )}
    </div>
  )
}
