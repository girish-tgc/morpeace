export const TRACKS = {
  'indian-flute': '/audio/indian-flute.mp3',
  'forest-day': '/audio/forest-day.mp3',
  'morning-birds': '/audio/morning-birds.mp3',
  'water-stream': '/audio/water-stream.mp3',
  'leaves-rustling': '/audio/leaves-rustling.mp3',
  'birds-water': '/audio/birds-water.mp3',
  'cave-ambiance': '/audio/cave-ambiance.mp3',
} as const

export type TrackId = keyof typeof TRACKS

export interface AudioZone {
  track: TrackId
  volume: number
}

export const AUDIO_ZONES: Record<string, AudioZone> = {
  'layer0-intro':     { track: 'indian-flute',    volume: 0.5  },
  'layer0-story':     { track: 'morning-birds',    volume: 0.5  },
  'our-dream':        { track: 'water-stream',     volume: 0.4  },
  'the-unfolding':    { track: 'forest-day',       volume: 0.5  },
  'touch-me-not':     { track: 'leaves-rustling',  volume: 0.5  },
  'drone-video':      { track: 'birds-water',      volume: 0.3  },
  'layer1-floor':     { track: 'forest-day',      volume: 0.4  },
  'adventure-trail':  { track: 'forest-day',      volume: 0.5  },
  'meditation-cave':  { track: 'cave-ambiance',   volume: 0.6  },
  'layer3-canopy':    { track: 'forest-day',      volume: 0.35 },
  'our-promise':      { track: 'water-stream',     volume: 0.4  },
  'layer4-sky':       { track: 'morning-birds',    volume: 0.4  },
}
