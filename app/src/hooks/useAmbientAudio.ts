import { useSyncExternalStore, useCallback } from 'react'
import { ambientAudio } from '../audio/ambientAudioManager'

export function useAmbientAudio() {
  const state = useSyncExternalStore(ambientAudio.subscribe, ambientAudio.getSnapshot)

  const toggle = useCallback(() => {
    ambientAudio.toggleMute()
  }, [])

  return { ...state, toggle }
}
