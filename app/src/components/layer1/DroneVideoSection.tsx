import { useEffect, useRef } from 'react'

export default function DroneVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const video = videoRef.current
    const section = sectionRef.current
    if (!video || !section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative h-[70vh] md:h-screen overflow-hidden">
      {/* Drone video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={`${import.meta.env.BASE_URL}photos/drone-shot.mp4`} type="video/mp4" />
      </video>

      {/* Gradient overlays for cinematic transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-soil-deep/60 via-transparent to-soil-deep/80" />

      {/* Poetic caption */}
      <div className="absolute inset-0 flex items-end justify-center pb-16 md:pb-24 px-8">
        <p className="font-poem text-xl md:text-2xl lg:text-3xl text-sky-cream/70 text-center italic max-w-xl">
          From above, the canopy tells its own story
        </p>
      </div>
    </section>
  )
}
