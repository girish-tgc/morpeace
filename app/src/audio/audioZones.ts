export const TRACKS = {
  'indian-flute': '/audio/indian-flute.mp3',
  'night-forest': '/audio/night-forest.mp3',
  'forest-day': '/audio/forest-day.mp3',
  'gentle-breeze': '/audio/gentle-breeze.mp3',
  'cave-ambiance': '/audio/cave-ambiance.mp3',
} as const

export type TrackId = keyof typeof TRACKS

export interface AudioZone {
  track: TrackId
  volume: number
}

export const AUDIO_ZONES: Record<string, AudioZone> = {
  'layer0-intro':     { track: 'indian-flute',    volume: 0.5  },
  'layer0-story':     { track: 'night-forest',    volume: 0.6  },
  'our-dream':        { track: 'gentle-breeze',   volume: 0.4  },
  'the-unfolding':    { track: 'forest-day',      volume: 0.5  },
  'touch-me-not':     { track: 'gentle-breeze',   volume: 0.5  },
  'drone-video':      { track: 'gentle-breeze',   volume: 0.3  },
  'layer1-floor':     { track: 'forest-day',      volume: 0.4  },
  'adventure-trail':  { track: 'forest-day',      volume: 0.5  },
  'meditation-cave':  { track: 'cave-ambiance',   volume: 0.6  },
  'layer3-canopy':    { track: 'forest-day',      volume: 0.35 },
  'our-promise':      { track: 'night-forest',    volume: 0.5  },
  'layer4-sky':       { track: 'night-forest',    volume: 0.5  },
}
