// All landing page copy — Rohit's words, cinematic structure

export const hero = {
  title: 'Morpeace',
  subtitle: 'A forest grown from memory',
  brandAnchor: 'Morpeace is not being built. It is becoming.',
  location: 'Near Satara, Western Ghats',
  scrollPrompt: 'Scroll to enter the forest',
}

export interface NarrativeBeat {
  id: string
  lines: string[]
  background: string
  isVideo: boolean
  accent?: string
  finale?: boolean
}

// Grouped into ~13 beats — every word preserved, related stanzas combined
// so the scroll is half the length but the story is complete.

export const narrativeBeats: NarrativeBeat[] = [
  {
    id: 'voice',
    lines: [
      'Isn\u2019t it ironic that a forest\u2026',
      'has chosen its tiniest plant',
      'as its spokesperson?',
      '',
      'I am the Touch-Me-Not.',
      'I fold when touched, to reopen again.',
      'And this is my story.',
    ],
    background: 'mimosa-shy-plant.mp4',
    isVideo: true,
  },
  {
    id: 'memory-loss',
    lines: [
      'Long ago, a child planted me',
      'beside his ancestral home.',
      'I grew among grand neighbours \u2014',
      'tamarind, guava, roses\u2026',
      '',
      'Then the machines came.',
      'And everything fell.',
      'The canopies vanished.',
      'Concrete replaced breath.',
    ],
    background: 'tree-stump-fog.jpeg',
    isVideo: false,
  },
  {
    id: 'return',
    lines: [
      'Years later, the same child returned.',
      'He did not come to build.',
      'He came to listen.',
      '',
      'When he touched my leaves, I folded.',
      'Not in fear. But in recognition.',
      'He remembered. I remembered.',
      '',
      'And in that moment\u2026',
      'something far older than both of us stirred.',
    ],
    background: 'mimosa-pudica-closeup.mp4',
    isVideo: true,
  },
  {
    id: 'knowing',
    lines: [
      'Not a plan. Not a project.',
      'A knowing.',
      '',
      'That what was lost here\u2026',
      'did not need to be recreated.',
      'It needed to be allowed back.',
    ],
    background: 'forest-path.jpeg',
    isVideo: false,
    accent: 'text-canopy-light',
  },
  {
    id: 'question',
    lines: [
      'He did not arrive with designs.',
      'He arrived with a question:',
      '',
      'Can life return\u2026',
      'the way it once knew how to live?',
      '',
      'I am small.',
      'I do not tower like the Banyan',
      'or whisper like the Peepal.',
      'But I know something they know too:',
      'Life does not respond to force.',
      'It responds to conditions.',
    ],
    background: 'drone-shot.mp4',
    isVideo: true,
  },
  {
    id: 'listening',
    lines: [
      'And so, he began.',
      'Not by planting trees.',
      'But by listening to the land.',
      '',
      'Soon, others came.',
      'Not to impose\u2026 but to understand.',
      'They walked the soil.',
      'They read the water.',
      'They listened to the silence.',
    ],
    background: 'hands-planting.mp4',
    isVideo: true,
  },
  {
    id: 'systems',
    lines: [
      'They spoke a different language.',
      'Not of aesthetics \u2014 but of systems.',
      'Not of gardens \u2014 but of ecosystems.',
      '',
      'They said:',
      'This land is not empty.',
      'It is waiting.',
      '',
      'They did not promise beauty.',
      'They promised something far more difficult:',
      'Truth. Measured. Observed. Proven.',
    ],
    background: 'forest-dense-vegetation.jpeg',
    isVideo: false,
    accent: 'text-canopy-light',
  },
  {
    id: 'form',
    lines: [
      'And so Morpeace began to take form.',
      'Not as a place. But as a living process.',
      '',
      'Nine pathways emerged \u2014',
      'not drawn, but discovered.',
      'A prayer\u2026 becoming land.',
    ],
    background: 'golden-hour-leaves.mp4',
    isVideo: true,
    accent: 'text-canopy-light/90',
  },
  {
    id: 'invited',
    lines: [
      'The forest was not planted. It was invited.',
      'The soil was not fed. It was restored.',
      'The birds were not called. They returned.',
      '',
      'And everything\u2026 was watched.',
      'Every tree mapped.',
      'Every change recorded.',
      'Every season understood.',
      '',
      'Because here, even wonder',
      'is not left to chance. It is studied.',
    ],
    background: 'drone-shot.mp4',
    isVideo: true,
  },
  {
    id: 'remembered',
    lines: [
      'Years from now, they will say:',
      'This forest grew.',
      '',
      'But I will know the truth.',
      'It did not grow. It remembered.',
      '',
      'Just like he did.',
      'Just like I did.',
    ],
    background: 'peacock-plumage.jpeg',
    isVideo: false,
    accent: 'text-canopy-light',
  },
  {
    id: 'you',
    lines: [
      'And in a way\u2026',
      'you have always been on your way here.',
      'Because something within you\u2026 remembered.',
    ],
    background: 'roots-growing.mp4',
    isVideo: true,
  },
  {
    id: 'still',
    lines: [
      'Walk gently. Touch carefully.',
      'Pause long enough.',
      '',
      'Because if you are still\u2026',
      'you might feel it too.',
      'That same response.',
    ],
    background: 'mimosa-shy-plant.mp4',
    isVideo: true,
  },
  {
    id: 'finale',
    lines: ['Morpeace is not being built.', 'It is becoming.'],
    background: 'peacock-plumage.jpeg',
    isVideo: false,
    finale: true,
  },
]

// ─── Villa ───

export const villa = {
  label: 'The Living Wada',
  headline: 'Not just a structure. A philosophy in stone, water, and wind.',
  values: [
    { name: 'Transparency', text: 'Glass walls that let light flow freely. Inside and outside speak to one another.' },
    { name: 'Honesty', text: 'Exposed brick and bare cement. What you see is what I am.' },
    { name: 'Togetherness', text: 'The central courtyard \u2014 the chowk \u2014 where life gathers.' },
    { name: 'Joy', text: 'A swimming pool where laughter splashes freely.' },
    { name: 'Depth', text: 'The lake that carries mist at dawn, gold at dusk, stars at night.' },
    { name: 'Aspiration', text: 'A golden spiral tower rising from the courtyard. Each step invites awareness.' },
  ],
  cta: { text: 'Stay within the forest', href: 'https://www.stayvista.com/villa/morpeace-a-rustic-haven-near-satara-villa-with-private-pool-cKBT' },
}

// ─── Visionaries ───

export const visionaries = {
  headline: 'Visionaries of Morpeace',
  intro: [
    'Morpeace is not shaped by one vision.',
    'It is held\u2026 by many hands.',
    '',
    'Some came to build.',
    'Some came to care.',
    'Some came to understand.',
    '',
    'All of them stayed\u2026',
    'because something here began to change them.',
  ],
  members: [
    {
      id: 'pawar',
      name: 'Pawar Family',
      role: 'Caretakers',
      quote: '\u0907\u0925\u0947 \u0906\u0932\u094B \u0924\u0947\u0935\u094D\u0939\u093E \u0935\u093E\u091F\u0932\u0902 \u2014\n\u0906\u092A\u0923 \u091C\u092E\u0940\u0928 \u0938\u093E\u0902\u092D\u093E\u0933\u0924\u094B\u092F.\n\n\u092A\u0923 \u0906\u0924\u093E \u092A\u091F\u0932\u0902\u2026\n\u0939\u0940 \u091C\u092E\u0940\u0928\u091A \u0906\u092E\u094D\u0939\u093E\u0932\u093E \u0938\u093E\u0902\u092D\u093E\u0933\u0924\u0947.\n\n\u0930\u094B\u091C \u0938\u0915\u093E\u0933\u0940 \u0927\u094D\u092F\u093E\u0928\u0917\u0941\u0939\u0947\u0924 \u0927\u094D\u092F\u093E\u0928 \u0915\u0930\u0924\u094B\u2026\n\u0924\u0947\u0935\u094D\u0939\u093E \u0905\u091C\u0942\u0928\u091A \u091C\u093E\u0923\u0935\u0924\u0902 \u2014\n\u0907\u0925\u0932\u0902 \u0938\u0917\u0933\u0902\u091A \u091C\u093F\u0935\u0902\u0924 \u0906\u0939\u0947\u2026\n\u0906\u0923\u093F \u0906\u092E\u094D\u0939\u093E\u0932\u093E \u0926\u093F\u0936\u093E \u0926\u093E\u0916\u0935\u0924\u0947 \u0906\u0939\u0947.',
      lang: 'mr' as const,
      initials: 'P',
    },
    {
      id: 'dhumal',
      name: 'Dhumal Family',
      role: 'Caretakers',
      quote: '\u0906\u0927\u0940 \u0930\u094B\u091C\u091A\u0902 \u0915\u093E\u092E \u0939\u094B\u0924\u0902\u2026\n\u0924\u0947\u091A \u0924\u0947\u2026 \u0938\u093E\u0902\u0917\u093F\u0924\u0932\u0947\u0932\u0902 \u0915\u0930\u093E\u092F\u091A\u0902.\n\n\u0906\u0924\u093E\u2026\n\u0938\u0915\u093E\u0933\u0940 \u0909\u0920\u0932\u094D\u092F\u093E\u0935\u0930 \u092C\u0918\u093E\u0935\u0902\u0938\u0902 \u0935\u093E\u091F\u0924\u0902 \u2014\n\u0915\u093E\u092F \u092C\u0926\u0932 \u091D\u093E\u0932\u093E\u092F.\n\n\u0930\u094B\u091C \u091C\u093E\u0923\u0935\u0924\u0902\u2026\n\u091C\u092E\u0940\u0928 \u0915\u093E\u0939\u0940\u0924\u0930\u0940 \u0938\u093E\u0902\u0917\u0924\u0947\u2026\n\u0928\u0935\u0902 \u0936\u093F\u0915\u0935\u0924\u0947\u2026\n\u0906\u0923\u093F \u0938\u094D\u0935\u0924\u0903\u091A \u092A\u094D\u0930\u092F\u094B\u0917 \u0915\u0930\u093E\u092F\u0932\u093E \u0932\u093E\u0935\u0924\u0947.',
      lang: 'mr' as const,
      initials: 'D',
    },
    {
      id: 'salunkhe',
      name: 'Salunkhe Mama',
      role: '',
      quote: '\u0907\u0925\u0947 \u0916\u0942\u092A \u0917\u094B\u0937\u094D\u091F\u0940 \u0915\u0930\u0942\u0928 \u092A\u093E\u0939\u093F\u0932\u094D\u092F\u093E\u2026\n\u0907\u0928\u094D\u0938\u093F\u0928\u0930\u0947\u091F\u0930 \u092C\u0938\u0935\u0932\u0902, \u092C\u093E\u092F\u094B\u091A\u093E\u0930 \u0915\u0947\u0932\u0902,\n\u0936\u0947\u0921\u0928\u0947\u091F \u0917\u094D\u0930\u0940\u0928\u0939\u093E\u0909\u0938 \u0909\u092D\u093E\u0930\u0932\u0902\u2026\n\u0915\u093E\u092F\u092E\u0938\u094D\u0935\u0930\u0942\u092A\u0940 \u092C\u0947\u0921\u094D\u0938 \u092A\u0923 \u0924\u092F\u093E\u0930 \u0915\u0947\u0932\u0947.\n\n\u0928\u0947\u0939\u092E\u0940 \u0915\u093E\u0939\u0940\u0924\u0930\u0940 \u092C\u0926\u0932 \u0915\u0930\u0924 \u0930\u093E\u0939\u0924\u094B\u2026\n\n\u092E\u0917 \u091C\u092E\u0940\u0928\u091A \u0938\u093E\u0902\u0917\u0924\u0947 \u2014\n\u0915\u093E\u092F \u092C\u0930\u094B\u092C\u0930 \u0906\u0939\u0947\u2026\n\u0906\u0923\u093F \u092A\u0941\u0922\u0947 \u0915\u093E\u092F \u0915\u0930\u093E\u092F\u091A\u0902 \u0906\u0939\u0947.',
      lang: 'mr' as const,
      initials: 'S',
    },
    {
      id: 'architect',
      name: 'Pratik Devi',
      role: 'Architect',
      quote: 'At first, we thought we were designing something.\n\nBut slowly\u2026 it felt like the place already knew what it wanted to be.\n\nWe were just\u2026 helping it take shape.',
      lang: 'en' as const,
      initials: 'PD',
    },
    {
      id: 'contractor',
      name: 'Narendra Pansare',
      role: 'Contractor',
      quote: 'We\u2019re used to drawings being final \u2014\nyou just execute and move on.\n\nHere, it was different.\n\nSome things only made sense as we were building\u2026\nlike they were evolving in front of us.\n\nWe just had to be patient with it.',
      lang: 'en' as const,
      initials: 'NP',
    },
    {
      id: 'tgc',
      name: 'The Green Concept',
      role: 'Ecology & Technology',
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
  primaryCta: {
    text: 'Stay within the forest',
    href: 'https://www.stayvista.com/villa/morpeace-a-rustic-haven-near-satara-villa-with-private-pool-cKBT',
  },
  secondaryCta: {
    text: 'Write to us',
    href: 'mailto:rstalwalkar@yahoo.com?subject=Morpeace',
  },
  location: '17.6105\u00B0N, 73.9895\u00B0E',
  locationLabel: 'Near Satara, Maharashtra',
  exploreLinks: [
    { text: 'The Forest', href: '/the-forest' },
    { text: 'The Experience', href: '/the-experience' },
    { text: 'The Wada', href: '/the-wada' },
    { text: 'Visionaries', href: '/visionaries' },
  ],
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

// ─── Team (legacy, now using visionaries) ───

export const team = {
  intro: 'Morpeace is not an idea. It is held by people.',
  members: visionaries.members.map(m => ({
    id: m.id,
    name: m.name,
    role: m.role,
    description: m.quote.split('\n')[0],
    initials: m.initials,
  })),
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
