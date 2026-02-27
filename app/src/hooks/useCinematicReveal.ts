import { useEffect, type RefObject } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface CinematicRevealOptions {
  sectionRef: RefObject<HTMLElement | null>
  bgWrapperRef: RefObject<HTMLElement | null>
  contentRef: RefObject<HTMLElement | null>
  bgRef?: RefObject<HTMLElement | null>
  crossfadeOut?: boolean
}

export function useCinematicReveal({
  sectionRef,
  bgWrapperRef,
  contentRef,
  bgRef,
  crossfadeOut = true,
}: CinematicRevealOptions) {
  useEffect(() => {
    const section = sectionRef.current
    const bgWrapper = bgWrapperRef.current
    const content = contentRef.current
    if (!section || !bgWrapper || !content) return

    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      gsap.set(section, { opacity: 1 })
      gsap.set(bgWrapper, { filter: 'grayscale(0)' })
      gsap.set(content.querySelectorAll('[data-animate]'), { opacity: 1, y: 0 })
      return
    }

    const mm = gsap.matchMedia()
    const ctx = gsap.context(() => {
      // === ENTRANCE: fade-in + B&W→color + text reveal (scrubbed) ===
      const enterTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 90%',
          end: 'top 15%',
          scrub: 0.6,
        },
      })

      // Section fades in
      enterTl.fromTo(section, { opacity: 0 }, { opacity: 1, duration: 0.35 }, 0)

      // B&W → color (first 60%)
      enterTl.fromTo(
        bgWrapper,
        { filter: 'grayscale(1)' },
        { filter: 'grayscale(0)', duration: 0.6, ease: 'none' },
        0,
      )

      // Text children fade in (last 40%, overlapping slightly with color arriving)
      const animChildren = content.querySelectorAll('[data-animate]')
      if (animChildren.length > 0) {
        enterTl.fromTo(
          animChildren,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.08, ease: 'power3.out' },
          0.45,
        )
      }

      // === EXIT: crossfade out as section leaves ===
      if (crossfadeOut) {
        ScrollTrigger.create({
          trigger: section,
          start: 'bottom 60%',
          end: 'bottom 10%',
          scrub: 0.6,
          onUpdate: (self) => {
            const opacity = 1 - self.progress
            gsap.set(section, { opacity })
            // Prevent invisible sections from intercepting clicks
            section.style.pointerEvents = opacity < 0.1 ? 'none' : 'auto'
          },
        })
      }

      // === DESKTOP: parallax on background image ===
      mm.add('(min-width: 768px)', () => {
        if (bgRef?.current) {
          gsap.to(bgRef.current, {
            yPercent: -20,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          })
        }
      })
    }, section)

    return () => {
      ctx.revert()
      mm.revert()
    }
  }, [sectionRef, bgWrapperRef, contentRef, bgRef, crossfadeOut])
}
