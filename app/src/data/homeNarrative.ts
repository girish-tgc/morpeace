// All landing page copy — Touch-Me-Not narrative, cinematic structure

export const hero = {
  title: 'Morpeace',
  subtitle: 'A prayer unfolding as a forest.',
  brandAnchor: 'Morpeace is not being built. It is becoming.',
  scrollPrompt: 'Enter gently',
  // Four single-word doorways. Each word is a handle; the reel behind it
  // carries the feeling. Order left-to-right: arrival, warmth, wander, depth.
  capsules: [
    { label: 'Wake gently', reel: 'photos/meditation-drone-1.mp4' },
    { label: 'Breathe deeply', reel: 'photos/golden-hour-leaves.mp4' },
    { label: 'Eat real', reel: 'photos/drone-shot.mp4' },
    { label: 'Be natural', reel: 'photos/meditation-drone-2.mp4' },
  ] as const,
  cta: {
    text: 'Stay with us',
  },
}

export interface NarrativeBeat {
  id: string
  lines: string[]
  background: string
  isVideo: boolean
  accent?: string
  finale?: boolean
  title?: boolean
}

export const narrativeBeats: NarrativeBeat[] = [
  {
    id: 'origin',
    lines: ['The origin of Morpeace'],
    background: 'mimosa-shy-plant.mp4',
    isVideo: true,
    title: true,
  },
  {
    id: 'voice',
    lines: [
      'Isn\u2019t it ironic\u2026',
      '',
      'that a forest',
      'has chosen its tiniest plant',
      'as its voice?',
      '',
      'I am the Touch-Me-Not.',
      'I fold when touched\u2026',
      'only to open again.',
      '',
      'And this is my story.',
    ],
    background: 'mimosa-shy-plant.mp4',
    isVideo: true,
  },
  {
    id: 'planted',
    lines: [
      'Long ago,',
      'a child planted me',
      'beside his ancestral home.',
      '',
      'I grew among grand companions \u2014',
      'tamarind, guava, roses\u2026',
    ],
    background: 'forest-path.webp',
    isVideo: false,
  },
  {
    id: 'machines',
    lines: [
      'Then the machines came.',
      'And everything fell.',
      '',
      'The canopies vanished.',
      'Concrete replaced breath.',
    ],
    background: 'tree-stump-fog.webp',
    isVideo: false,
  },
  {
    id: 'returned',
    lines: [
      'Years later\u2026',
      'he returned.',
      '',
      'Not to impose.',
      'But to listen.',
      '',
      'When he touched my leaves, I folded.',
      'Not in fear. But in recognition.',
      '',
      'He remembered.',
      'I remembered.',
      '',
      'And in that moment\u2026',
      'something stirred.',
    ],
    background: 'mimosa-pudica-closeup.mp4',
    isVideo: true,
  },
  {
    id: 'question',
    lines: [
      'He arrived with a question:',
      '',
      'Can life return\u2026',
      'the way it once knew how to live?',
      '',
      'And I felt what I had always known:',
      '',
      'Life does not respond to force.',
      'It responds\u2026 to conditions.',
    ],
    background: 'golden-hour-leaves.mp4',
    isVideo: true,
  },
  {
    id: 'listening',
    lines: [
      'And so, he began.',
      '',
      'Not by planting trees.',
      'But by listening to the land.',
    ],
    background: 'hands-planting.mp4',
    isVideo: true,
  },
  {
    id: 'respond',
    lines: [
      'And then\u2026',
      '',
      'life began to respond.',
      '',
      'In wings.',
      'In roots.',
      'In those who could feel what was unfolding.',
    ],
    background: 'mimosa-pudica-closeup.mp4',
    isVideo: true,
  },
  {
    id: 'process',
    lines: [
      'Morpeace began\u2026',
      '',
      'not as a place,',
      'but as a living process.',
      '',
      'A prayer\u2026 becoming forest.',
    ],
    background: 'drone-shot.mp4',
    isVideo: true,
    accent: 'text-canopy-light/90',
  },
  {
    id: 'invited',
    lines: [
      'The forest was not planted.',
      'It was invited.',
      '',
      'The soil was not fed.',
      'It was restored.',
      '',
      'The birds were not called.',
      'They arrived.',
    ],
    background: 'forest-dense-vegetation.webp',
    isVideo: false,
  },
  {
    id: 'remembered',
    lines: [
      'Years from now,',
      'they will say:',
      '',
      'This forest was created.',
      '',
      'But I will know the truth.',
      '',
      'It was not created.',
      'It simply unfolded.',
    ],
    background: 'drone-shot.mp4',
    isVideo: true,
    accent: 'text-canopy-light',
  },
  {
    id: 'likeness',
    lines: [
      'Just like he remembered.',
      'Just like I did.',
      '',
      'And perhaps\u2026',
      '',
      'just like something within you does now.',
    ],
    background: 'mimosa-shy-plant.mp4',
    isVideo: true,
  },
  {
    id: 'still',
    lines: [
      'So\u2026 walk gently.',
      'Pause long enough.',
      '',
      'When you are still\u2026',
      'you will feel it too.',
      '',
      'A quiet prayer\u2014',
      'for the flourishing of all life.',
    ],
    background: 'meditation-drone-2.mp4',
    isVideo: true,
    finale: true,
  },
]

// ─── Villa ───

export const villa = {
  label: 'The Living Wada',
  headline: 'A philosophy in stone, water, and wind. More than a structure.',
  values: [
    { name: 'Transparency', text: 'Glass walls that let light flow freely. Inside and outside speak to one another.' },
    { name: 'Honesty', text: 'Exposed brick and bare cement. What you see is what I am.' },
    { name: 'Togetherness', text: 'The central courtyard \u2014 the chowk \u2014 where life gathers.' },
    { name: 'Joy', text: 'A swimming pool where laughter splashes freely.' },
    { name: 'Depth', text: 'The lake that carries mist at dawn, gold at dusk, stars at night.' },
    { name: 'Aspiration', text: 'A golden spiral tower rising from the courtyard. Each step invites awareness.' },
  ],
}

// ─── Team ───

export const team = {
  headline: 'The people behind',
  subhead: 'Morpeace is held \u2014 by many hands.',
  intro: [
    'Some came to build.',
    'Some came to care.',
    'Some came to understand.',
    '',
    'All of them stayed \u2014',
    'because this land changes the people who listen to it.',
  ],
  members: [
    {
      id: 'rohit-komal',
      name: 'Komal & Rohit Talwalkar',
      role: 'Trustees',
      photo: 'photos/team/rohit-komal-children.webp',
      fit: 'contain' as const,
      quote: 'Morpeace was never just a place for us.\n\nIt was a feeling\u2026 a memory\u2026 a quiet longing.\n\nWhat began as a dream emerging from a tragedy\nslowly unfolded into something we were meant to care for.\n\nToday, we hold it gently \u2014\nnot as creators, but as trustees of what continues to emerge.',
      lang: 'en' as const,
      initials: 'KR',
    },
    {
      id: 'sharad-arundhati',
      name: 'Arundhati & Sharad Talwalkar',
      role: 'Guiding Force behind Morpeace',
      photo: 'photos/team/sharad-arundhati-watercolor.webp',
      quote: 'We have cared for and guided this land with patience and intent.\n\nWhat Morpeace has become fills us with quiet pride \u2014\nyet it feels shaped by a wisdom beyond our own.\n\nNow we just come and sit \u2014\nand let the trees do most of the talking.',
      lang: 'en' as const,
      initials: 'AS',
    },
    {
      id: 'pawar',
      name: 'Pawar Family',
      role: 'Caretakers',
      members: 'Sangeeta & Rajendra Pawar',
      photo: 'photos/team/pawar-watercolor.webp',
      quote: '\u0907\u0925\u0947 \u0906\u0932\u094B \u0924\u0947\u0935\u094D\u0939\u093E \u0935\u093E\u091F\u0932\u0902 \u2014\n\u0906\u092A\u0923 \u091C\u092E\u0940\u0928 \u0938\u093E\u0902\u092D\u093E\u0933\u0924\u094B\u092F.\n\n\u092A\u0923 \u0906\u0924\u093E \u092A\u091F\u0932\u0902\u2026\n\u0939\u0940 \u091C\u092E\u0940\u0928\u091A \u0906\u092E\u094D\u0939\u093E\u0932\u093E \u0938\u093E\u0902\u092D\u093E\u0933\u0924\u0947.\n\n\u0930\u094B\u091C \u0938\u0915\u093E\u0933\u0940 \u0927\u094D\u092F\u093E\u0928\u0917\u0941\u0939\u0947\u0924 \u0927\u094D\u092F\u093E\u0928 \u0915\u0930\u0924\u094B\u2026\n\u0924\u0947\u0935\u094D\u0939\u093E \u0905\u091C\u0942\u0928\u091A \u091C\u093E\u0923\u0935\u0924\u0902 \u2014\n\u0907\u0925\u0932\u0902 \u0938\u0917\u0933\u0902\u091A \u091C\u093F\u0935\u0902\u0924 \u0906\u0939\u0947\u2026\n\u0906\u0923\u093F \u0906\u092E\u094D\u0939\u093E\u0932\u093E \u0926\u093F\u0936\u093E \u0926\u093E\u0916\u0935\u0924\u0947 \u0906\u0939\u0947.',
      lang: 'mr' as const,
      initials: 'P',
    },
    {
      id: 'dhumal',
      name: 'Dhumal Family',
      role: 'Caretakers',
      members: 'Tara & Hari  ·  Mayuri & Ganesh',
      photo: 'photos/team/dhumal-watercolor.webp',
      fit: 'contain' as const,
      orientation: 'landscape' as const,
      quote: '\u0906\u0927\u0940 \u0930\u094B\u091C\u091A\u0902 \u0915\u093E\u092E \u0939\u094B\u0924\u0902\u2026\n\u0924\u0947\u091A \u0924\u0947\u2026 \u0938\u093E\u0902\u0917\u093F\u0924\u0932\u0947\u0932\u0902 \u0915\u0930\u093E\u092F\u091A\u0902.\n\n\u0906\u0924\u093E\u2026\n\u0938\u0915\u093E\u0933\u0940 \u0909\u0920\u0932\u094D\u092F\u093E\u0935\u0930 \u092C\u0918\u093E\u0935\u0902\u0938\u0902 \u0935\u093E\u091F\u0924\u0902 \u2014\n\u0915\u093E\u092F \u092C\u0926\u0932 \u091D\u093E\u0932\u093E\u092F.\n\n\u0930\u094B\u091C \u091C\u093E\u0923\u0935\u0924\u0902\u2026\n\u091C\u092E\u0940\u0928 \u0915\u093E\u0939\u0940\u0924\u0930\u0940 \u0938\u093E\u0902\u0917\u0924\u0947\u2026\n\u0928\u0935\u0902 \u0936\u093F\u0915\u0935\u0924\u0947\u2026\n\u0906\u0923\u093F \u0938\u094D\u0935\u0924\u0903\u091A \u092A\u094D\u0930\u092F\u094B\u0917 \u0915\u0930\u093E\u092F\u0932\u093E \u0932\u093E\u0935\u0924\u0947.',
      lang: 'mr' as const,
      initials: 'D',
    },
    {
      id: 'salunkhe',
      name: 'Salunkhe Mama',
      role: 'Farm Experimenter',
      photo: 'photos/team/salunkhe-watercolor.webp',
      quote: '\u0907\u0925\u0947 \u0916\u0942\u092A \u0917\u094B\u0937\u094D\u091F\u0940 \u0915\u0930\u0942\u0928 \u092A\u093E\u0939\u093F\u0932\u094D\u092F\u093E\u2026\n\u0907\u0928\u094D\u0938\u093F\u0928\u0930\u0947\u091F\u0930 \u092C\u0938\u0935\u0932\u0902, \u092C\u093E\u092F\u094B\u091A\u093E\u0930 \u0915\u0947\u0932\u0902,\n\u0936\u0947\u0921\u0928\u0947\u091F \u0917\u094D\u0930\u0940\u0928\u0939\u093E\u0909\u0938 \u0909\u092D\u093E\u0930\u0932\u0902\u2026\n\u0915\u093E\u092F\u092E\u0938\u094D\u0935\u0930\u0942\u092A\u0940 \u092C\u0947\u0921\u094D\u0938 \u092A\u0923 \u0924\u092F\u093E\u0930 \u0915\u0947\u0932\u0947.\n\n\u0928\u0947\u0939\u092E\u0940 \u0915\u093E\u0939\u0940\u0924\u0930\u0940 \u092C\u0926\u0932 \u0915\u0930\u0924 \u0930\u093E\u0939\u0924\u094B\u2026\n\n\u092E\u0917 \u091C\u092E\u0940\u0928\u091A \u0938\u093E\u0902\u0917\u0924\u0947 \u2014\n\u0915\u093E\u092F \u092C\u0930\u094B\u092C\u0930 \u0906\u0939\u0947\u2026\n\u0906\u0923\u093F \u092A\u0941\u0922\u0947 \u0915\u093E\u092F \u0915\u0930\u093E\u092F\u091A\u0902 \u0906\u0939\u0947.',
      lang: 'mr' as const,
      initials: 'S',
    },
    {
      id: 'architect',
      name: 'Pratik Devi',
      role: 'Architect',
      photo: 'photos/team/pratik-devi.webp',
      quote: 'At first, we thought we were designing something.\n\nBut slowly\u2026 it felt like the place already knew what it wanted to be.\n\nWe were just\u2026 helping it take shape.',
      lang: 'en' as const,
      initials: 'PD',
    },
    {
      id: 'contractor',
      name: 'Narendra Pansare',
      role: 'Contractor',
      photo: 'photos/team/pansare-watercolor.webp',
      quote: 'We\u2019re used to drawings being final \u2014\nyou just execute and move on.\n\nHere, it was different.\n\nSome things only made sense as we were building\u2026\nlike they were evolving in front of us.\n\nWe just had to be patient with it.',
      lang: 'en' as const,
      initials: 'NP',
    },
    {
      id: 'tgc',
      name: 'The Green Concept',
      role: 'Ecology & Technology partner',
      photo: 'photos/team/tgc-watercolor.webp',
      fit: 'contain' as const,
      orientation: 'landscape' as const,
      quote: 'When we first walked into Morpeace,\nit didn\u2019t feel like a typical project.\n\nIt felt like the thinking was already in place.\n\nAlmost like the land knew\nwhat it wanted to become.\n\nOur role was not to design it\u2026\nbut to hear it, understand it \u2014\nand give it ecological roots.\n\nTo bring in the science, the measurement\u2026\nand quietly support what is already unfolding \u2014\nsometimes\u2026 by simply getting out of the way.',
      lang: 'en' as const,
      initials: 'TGC',
    },
  ],
}

// ─── Invitation ───

export const invitation = {
  brandAnchor: 'Morpeace is not being built. It is becoming.',
  text: 'Come experience it.',
  secondaryCta: {
    text: 'Write to us',
    href: 'mailto:rstalwalkar@yahoo.com?subject=Morpeace',
  },
}

// ─── Regeneration (used on /the-forest) ───

export const regeneration = {
  stats: [
    { value: 18, label: 'Sentinel Trees', sublabel: 'long-term growth tracking', suffix: '' },
    { value: 16, label: 'Species Documented', sublabel: 'native & sacred varieties', suffix: '' },
    { value: 10, label: 'Acres', sublabel: 'of living landscape', suffix: '' },
    { value: 20, label: 'Bird Species', sublabel: 'indicator of ecosystem recovery', suffix: '+' },
    { value: 40, label: 'Mango Varieties', sublabel: 'in regenerative orchards', suffix: '' },
    { value: 6, label: 'Soil Parameters', sublabel: 'measured seasonally', suffix: '' },
  ],
  closing: 'Every ecological claim backed by data. Every tree GPS-tagged. Every season surveyed.',
  trust: 'Live data updated quarterly',
  cta: { text: 'See the living data', href: '/the-forest' },
}

// ─── Vision (used on /the-forest) ───

export const vision = {
  label: 'The Vision',
  decoder: 'An ancient prayer reimagined as ecological design.',
  headline: 'Nine groves. One prayer. A living Pasaydan.',
  description:
    'Each grove at Morpeace maps to a stanza of Sant Dnyaneshwar\u2019s Pasaydan \u2014 a prayer for the well-being of all living creatures. Not just humans. From the sacred grove at the heart to the Sugandhika wetland at the edge, every zone serves an ecological function and a philosophical meaning.',
  timeline: 'A 10-year journey from sugarcane field to self-sustaining native forest. We design with the land, not ahead of it.',
  cta: { text: 'Explore the forest map', href: '/the-forest' },
}

// ─── Why Now (orphan component, kept for potential reuse) ───

export const whyNow = {
  headline: 'This is not nostalgia. This is necessity.',
  statements: [
    'The Western Ghats are one of only 36 biodiversity hotspots on Earth. They are retreating.',
    'We have forgotten what a living landscape sounds like. The silence between cities is not peace \u2014 it is absence.',
    'Every private acre that chooses to become a sanctuary changes the equation.',
  ],
  closing: 'Morpeace is one answer. Ten acres in the Western Ghats. A living proof that forests can return.',
}

// ─── Land Speaks (orphan component, kept for potential reuse) ───

export const landSpeaks = {
  lines: [
    'I was once alive.',
    'Then I was forgotten.',
    'Now, I am becoming again.',
    'Because someone chose to remember.',
    '',
    'Twenty bird species have chosen me.',
    'A wolf snake has made me home.',
    'The banyan that grew from my cow shed\nhas been growing longer than any of you have been alive.',
    '',
    'You do not need to save me.',
    'Just remember me.',
    'That is how forests return.',
  ],
}

// ─── Meditation (used on /the-experience) ───

export const meditation = {
  label: 'The Meditation Cave',
  headline: 'The Cave of the Inner Star',
  quote: 'You expect darkness when you descend underground. That is the first illusion the cave dissolves.',
  closing: 'Underground is not beneath life. It is beneath distraction.',
  cta: { text: 'Experience the full journey', href: '/the-experience' },
}
