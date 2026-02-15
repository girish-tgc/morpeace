import { AUDIO_ZONES, TRACKS } from './audioZones'
import type { TrackId } from './audioZones'

interface AudioState {
  unlocked: boolean
  muted: boolean
  activeZone: string | null
}

type Listener = () => void

const FADE_DURATION = 1500 // ms
const FADE_STEPS = 30

class AmbientAudioManager {
  private state: AudioState = { unlocked: true, muted: false, activeZone: null }
  private listeners = new Set<Listener>()
  private observer: IntersectionObserver | null = null
  private audioElements = new Map<TrackId, HTMLAudioElement>()
  private activeTrack: TrackId | null = null
  private fadeIntervals: number[] = []
  private disabled = false
  private gestureUnlockBound: (() => void) | null = null

  init() {
    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.disabled = true
      return
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        // Find the most visible zone
        let bestEntry: IntersectionObserverEntry | null = null
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (!bestEntry || entry.intersectionRatio > bestEntry.intersectionRatio) {
              bestEntry = entry
            }
          }
        }

        if (bestEntry) {
          const zone = (bestEntry.target as HTMLElement).dataset.audioZone
          if (zone && zone !== this.state.activeZone) {
            this.transitionToZone(zone)
          }
        }
      },
      { threshold: [0.1, 0.3, 0.5, 0.7] }
    )

    // Scan for all audio zone elements
    document.querySelectorAll<HTMLElement>('[data-audio-zone]').forEach((el) => {
      this.observer!.observe(el)
    })
  }

  destroy() {
    this.observer?.disconnect()
    this.observer = null
    this.removeGestureListener()
    this.clearFades()
    this.audioElements.forEach((audio) => {
      audio.pause()
      audio.src = ''
    })
    this.audioElements.clear()
    this.activeTrack = null
    this.state = { unlocked: true, muted: false, activeZone: null }
    this.notify()
  }

  private addGestureListener() {
    if (this.gestureUnlockBound) return
    this.gestureUnlockBound = () => {
      this.removeGestureListener()
      // Re-attempt playback on first user gesture
      const activeZone = this.state.activeZone
      if (activeZone && !this.state.muted) {
        const zone = AUDIO_ZONES[activeZone]
        if (zone) this.crossfade(zone.track, zone.volume)
      }
    }
    for (const evt of ['click', 'touchstart', 'keydown'] as const) {
      document.addEventListener(evt, this.gestureUnlockBound, { once: true, passive: true })
    }
  }

  private removeGestureListener() {
    if (!this.gestureUnlockBound) return
    for (const evt of ['click', 'touchstart', 'keydown'] as const) {
      document.removeEventListener(evt, this.gestureUnlockBound)
    }
    this.gestureUnlockBound = null
  }

  private transitionToZone(zoneKey: string) {
    const zone = AUDIO_ZONES[zoneKey]
    if (!zone) return

    const prevZone = this.state.activeZone
    this.state = { ...this.state, activeZone: zoneKey }
    this.notify()

    if (!this.state.unlocked || this.state.muted) return

    const prevTrack = prevZone ? AUDIO_ZONES[prevZone]?.track : null

    if (prevTrack === zone.track) {
      // Same track — just ramp volume
      this.rampVolume(zone.track, zone.volume)
    } else {
      // Different track — crossfade
      this.crossfade(zone.track, zone.volume)
    }
  }

  private getOrCreateAudio(trackId: TrackId): HTMLAudioElement {
    let audio = this.audioElements.get(trackId)
    if (!audio) {
      audio = new Audio()
      audio.loop = true
      audio.volume = 0
      audio.preload = 'none'
      audio.src = import.meta.env.BASE_URL + TRACKS[trackId].slice(1)
      this.audioElements.set(trackId, audio)
    }
    return audio
  }

  private crossfade(newTrackId: TrackId, targetVolume: number) {
    this.clearFades()

    // Fade out current track
    if (this.activeTrack && this.activeTrack !== newTrackId) {
      const oldAudio = this.audioElements.get(this.activeTrack)
      if (oldAudio) {
        this.fadeVolume(oldAudio, 0, () => {
          oldAudio.pause()
        })
      }
    }

    // Fade in new track
    const newAudio = this.getOrCreateAudio(newTrackId)
    newAudio.volume = 0
    newAudio.play().then(() => {
      this.removeGestureListener()
    }).catch(() => {
      // Autoplay blocked — silently wait for first user gesture
      this.addGestureListener()
    })
    this.fadeVolume(newAudio, targetVolume)
    this.activeTrack = newTrackId
  }

  private rampVolume(trackId: TrackId, targetVolume: number) {
    this.clearFades()
    const audio = this.audioElements.get(trackId)
    if (audio) {
      this.fadeVolume(audio, targetVolume)
    }
  }

  private fadeVolume(audio: HTMLAudioElement, target: number, onDone?: () => void) {
    const startVol = audio.volume
    const diff = target - startVol
    if (Math.abs(diff) < 0.01) {
      audio.volume = target
      onDone?.()
      return
    }

    let step = 0
    const interval = window.setInterval(() => {
      step++
      const t = step / FADE_STEPS
      // Ease-in-out curve
      const ease = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
      audio.volume = Math.max(0, Math.min(1, startVol + diff * ease))

      if (step >= FADE_STEPS) {
        window.clearInterval(interval)
        audio.volume = Math.max(0, Math.min(1, target))
        onDone?.()
      }
    }, FADE_DURATION / FADE_STEPS)

    this.fadeIntervals.push(interval)
  }

  private clearFades() {
    for (const id of this.fadeIntervals) {
      window.clearInterval(id)
    }
    this.fadeIntervals = []
  }

  toggleMute() {
    if (this.disabled) return

    const nowMuted = !this.state.muted
    this.state = { ...this.state, muted: nowMuted }
    this.notify()

    if (nowMuted) {
      // Fade out and pause all
      this.clearFades()
      this.audioElements.forEach((audio) => {
        this.fadeVolume(audio, 0, () => { audio.pause() })
      })
    } else {
      // Resume current zone
      if (this.state.activeZone) {
        const zone = AUDIO_ZONES[this.state.activeZone]
        if (zone) {
          this.crossfade(zone.track, zone.volume)
        }
      }
    }
  }

  // useSyncExternalStore interface
  subscribe = (listener: Listener): (() => void) => {
    this.listeners.add(listener)
    return () => { this.listeners.delete(listener) }
  }

  getSnapshot = (): AudioState => {
    return this.state
  }

  private notify() {
    for (const listener of this.listeners) {
      listener()
    }
  }
}

export const ambientAudio = new AmbientAudioManager()
