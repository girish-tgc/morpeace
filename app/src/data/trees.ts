export interface GPSCoordinate {
  lat: number;
  lng: number;
}

export interface TreeMeasurement {
  gbh_cm: number;
  height_m: number;
  crown_diameter_m: number;
}

export interface CarbonData {
  biomass_kg: number;
  annual_co2_kg: number;
  lifetime_co2_kg: number;
}

export interface AyurvedicUse {
  part: string;
  use: string;
}

export interface TreeStoryChapter {
  id: 'i_am' | 'at_morpeace' | 'ancient' | 'gifts' | 'teaching';
  title: string;
  content: string;
}

export type TreeCategory = 'sacred' | 'fruiting' | 'native' | 'flowering' | 'timber';

export interface Tree {
  id: number;
  tag: string;
  coordinates: GPSCoordinate;
  species: string;
  scientificName: string;
  marathiName: string;
  measurement: TreeMeasurement;
  carbon: CarbonData;
  story: TreeStoryChapter[] | null;
  storyTitle: string | null;
  teaching: string | null;
  accentColor: string;
  notes: string;
  nearbyTreeIds: number[];
  category: TreeCategory[];
}

// Carbon calculation using Chave et al. 2014 pantropical equation
function calculateCarbon(gbh_cm: number, height_m: number, estimatedAge: number = 15): CarbonData {
  const diameter_cm = gbh_cm / Math.PI;
  const woodDensity = 0.58; // average tropical broadleaf
  const agb = 0.0673 * Math.pow(woodDensity * diameter_cm * diameter_cm * height_m, 0.976);
  const bgb = agb * 0.26;
  const totalBiomass = agb + bgb;
  const carbon_kg = totalBiomass * 0.47;
  const lifetime_co2 = carbon_kg * 3.67;
  const annual_co2 = lifetime_co2 / Math.max(estimatedAge, 1);
  return { biomass_kg: Math.round(totalBiomass), annual_co2_kg: Math.round(annual_co2), lifetime_co2_kg: Math.round(lifetime_co2) };
}

// Haversine distance in meters
function haversine(a: GPSCoordinate, b: GPSCoordinate): number {
  const R = 6371e3;
  const toRad = (d: number) => d * Math.PI / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLon = toRad(b.lng - a.lng);
  const sinLat = Math.sin(dLat / 2);
  const sinLon = Math.sin(dLon / 2);
  const h = sinLat * sinLat + Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * sinLon * sinLon;
  return R * 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
}

// --- TREE STORIES (excerpted from source files) ---

const touchMeNotStory: TreeStoryChapter[] = [
  {
    id: 'i_am',
    title: 'I Am the Touch-Me-Not',
    content: `I am the Touch-Me-Not —
small, quiet, and easily overlooked.

Children know me by my secret:
touch my leaves,
and I fold into myself —
a shy greeting,
a soft boundary.`
  },
  {
    id: 'at_morpeace',
    title: 'My Story at Morpeace',
    content: `Long ago, a child planted me beside his ancestral home.
His fingers pressed my tiny roots into warm soil,
not knowing he was planting a memory.

Then the machines came.
The great trees fell first —
the tamarind that five people could not encircle,
the pond that once held lilies and sky.

But I remained —
a small survivor in the cracks of concrete.

When he returned —
the child now grown —
his eyes searched the barren ground
and found me trembling in the ruins.
He knelt and touched my leaves.

I folded gently,
and in that small gesture
I carried a message:

Life remembers how to return.

He did not leave me behind.
Carefully, he lifted me from that broken earth
and carried me to new soil —
to the land that would become Morpeace.`
  },
  {
    id: 'ancient',
    title: 'My Ancient Story',
    content: `Around me, a forest began to rise —
saplings placed with intention,
water guided into patient paths,
ten acres breathing back to life.

And I watched with a small, hidden pride.
For this forest — this dream of healing —
began with a whisper I carried.
A tiny leaf folding in the ruins
became the first light beneath these trees.`
  },
  {
    id: 'gifts',
    title: 'My Gifts',
    content: `The dream that grew here was simple:

To let the soil return to its own breath.
To see life unfold in rhythm and grace.
Where roots speak to roots,
and every being finds its place.

Morpeace is not being built —
it is becoming:
leaf by leaf,
breath by breath,
season by season.`
  },
  {
    id: 'teaching',
    title: 'My Teaching',
    content: `Sensitivity is not weakness.
It is awareness.
And awareness is the beginning of care.

Touch me, and I fold.
Wait a moment, and I open again.
This is resilience —
not hardness,
but the courage to reopen.

Even the smallest life
can awaken a dream —
and from that dream,
a forest can emerge.`
  }
];

const tamarindStory: TreeStoryChapter[] = [
  {
    id: 'i_am',
    title: 'I Am the Tamarind',
    content: `I am the Tamarind —
the tree that remembers beginnings.

Long before Morpeace had a name,
before land was purchased
or dreams were spoken aloud,
I stood in a courtyard of childhood.

My trunk was wide enough
that five people could not encircle it.
My pods ripened in the heat of summer,
sour and sweet,
a taste that stitched itself
into memory.`
  },
  {
    id: 'at_morpeace',
    title: 'My Story at Morpeace',
    content: `When the time came for walls to rise
and concrete to claim the ground,
I was promised safety.
Words were spoken gently:
the trees will remain.

But machines do not understand promises.

I fell quickly.
My roots were torn from soil
that had held me for decades.

When he returned
and saw the emptiness where I once stood,
something shifted inside him.
Grief has a way of planting seeds
that joy alone cannot.

That vow became Morpeace.`
  },
  {
    id: 'ancient',
    title: 'My Ancient Story',
    content: `Every sapling planted there
carried a trace of my memory.
Every root pressing into new soil
answered the question my absence left behind:

What if we could grow back what was taken?

I do not stand at Morpeace in my old form.
My original trunk lives now
only in memory and story.
But I am present in another way.

I live in the intention
that shaped that land.`
  },
  {
    id: 'gifts',
    title: 'My Gifts',
    content: `My pods have fed generations.
Sour and sweet, they flavor rice,
chutneys, and cooling summer drinks.
My bark carries medicine.
My leaves season soups.
In Ayurveda, I cool fever
and settle the stomach.
Trees give without invoice.`
  },
  {
    id: 'teaching',
    title: 'My Teaching',
    content: `Loss can be a doorway to creation.

What is cut down
can awaken a deeper planting.
What disappears
can call forth something larger.

Sit beneath any tree at Morpeace
and you sit partly in my shade.
Taste any fruit there
and you taste a continuation
of the vow made in my absence.

I am the Tamarind.
I fell,
and from that falling
a forest was born.`
  }
];

const peepalStory: TreeStoryChapter[] = [
  {
    id: 'i_am',
    title: 'I Am the Peepal',
    content: `I am the Peepal — the tree of breath and blessings.
Some call me Pippala,
others Ashvattha,
and in many homes simply the sacred tree.

My leaves are shaped like hearts,
and when the breeze moves through them,
I do not whisper —
I sing.`
  },
  {
    id: 'at_morpeace',
    title: 'My Story at Morpeace',
    content: `I did not arrive here by accident.
A small sapling once took root at Morpeace,
fragile and easily overlooked.
Hands protected me,
water was brought in careful vessels,
and a circle of open earth was left around my young trunk
so I could breathe and grow.

Every Thursday,
Kaka comes and sits beneath me.
He brings no ceremony,
only presence.
Meditation is not taught here —
it simply happens.`
  },
  {
    id: 'ancient',
    title: 'My Ancient Story',
    content: `People have always sat beneath my kind for clarity.
Sanyasis rested at our trunks,
and householders tied threads for wishes.

In old stories,
even the wise looked upward toward my crown.
It is said the Bodhi,
under which the Buddha awakened,
was my cousin —
another Peepal from the ancient banks of the Neranjana.`
  },
  {
    id: 'gifts',
    title: 'My Gifts',
    content: `Ayurveda used my tender leaves and bark
to cool the stomach and calm bleeding.
In village remedies,
my latex was mixed with honey
for small wounds and mouth ulcers.

People sometimes speak of my breath.
They say I release more oxygen at night,
and so elders asked pregnant women
to rest near me in summer.`
  },
  {
    id: 'teaching',
    title: 'My Teaching',
    content: `Peace is not the absence of movement.
It is the rhythm beneath it.

Look at my leaves —
they flutter and tremble,
yet the branch that holds them is steady.
Learn from that.

Here at Morpeace,
I continue my old work —
offering shade, breath,
and a quiet place
where stillness is always welcome.`
  }
];

const banyanStory: TreeStoryChapter[] = [
  {
    id: 'i_am',
    title: 'I Am the Banyan',
    content: `I am the Banyan —
the tree that refuses to end.

Across this land, my kind is called immortal.
Not because we never fall,
but because we know how to continue.
Each root I send downward becomes a new trunk,
and each trunk remembers the first.`
  },
  {
    id: 'at_morpeace',
    title: 'My Story at Morpeace',
    content: `My beginning at Morpeace was quiet.

I slipped into life from the cracks of an old cow shed,
a seed dropped by a passing bird.
Between stone and brick I found a thin seam of soil
and tasted the earth.

When the shed was to be demolished,
hands paused around me.
They saw that I had chosen this land
and that the land had chosen me back.

So I was lifted carefully —
roots wrapped in damp cloth —
and carried to the entrance of Morpeace.`
  },
  {
    id: 'ancient',
    title: 'My Ancient Story',
    content: `When the universe dissolved into endless waters —
during the great Pralaya —
all forms vanished into silence.
And upon a single floating banyan leaf
rested the divine child Krishna,
cradling creation within his breath.

From that image,
my lineage became a symbol of eternal shelter.`
  },
  {
    id: 'gifts',
    title: 'My Gifts',
    content: `Birds have already begun their cities in me.
Parakeets chatter.
Mynas rehearse their gossip.
Squirrels trace quick highways along my limbs.
Even in youth, I am becoming a small universe.

My aerial roots become medicine.
My milky sap soothes skin.
My shade cools twenty degrees below the sun.`
  },
  {
    id: 'teaching',
    title: 'My Teaching',
    content: `To shelter life is a sacred act.

To offer space for rest,
for breath,
for wonder —
this is how immortality expresses itself.

I am the Banyan.
I grow by remembering.
And in that remembrance,
I become timeless.`
  }
];

const jamunStory: TreeStoryChapter[] = [
  {
    id: 'i_am',
    title: 'I Am the Jamun',
    content: `I am the Jamun —
the purple fruit of monsoon laughter.
Some call me Jambhul,
a name that tastes of rain and childhood.

My roots remember the forests
near the Kaas plateau —
that high land where mist walks slowly
and wildflowers paint the earth in brief miracles.`
  },
  {
    id: 'at_morpeace',
    title: 'My Story at Morpeace',
    content: `I am not the large, astringent Jamun
that stains tongues dark and sharp.
I am smaller, rounder, and sweet.

When I was brought to Morpeace,
I carried that mountain memory in my sap.
This soil welcomed me
as if it already knew my story.
Now I grow here,
a small ambassador of Kaas,
offering fruit that tastes of distant hills.`
  },
  {
    id: 'ancient',
    title: 'My Ancient Story',
    content: `Jamun trees are generous historians.
We record seasons in sweetness.
Each year my fruit changes slightly —
a dialogue between sun, rain, and earth.
Those who taste me closely
can read the weather in my flesh.

Birds adore me.
They arrive before my fruit is fully ripe,
testing, arguing, celebrating.`
  },
  {
    id: 'gifts',
    title: 'My Gifts',
    content: `Ayurveda has long known my quiet strength.
My seeds steady the body.
My fruit cools the heat of summer.
My bark carries medicine
that tastes of forests and time.`
  },
  {
    id: 'teaching',
    title: 'My Teaching',
    content: `Small sweetness is enough.

Not all gifts must be grand.
A handful of fruit shared beneath a tree
can anchor a memory for a lifetime.

Here at Morpeace,
I bring a whisper of Kaas —
a reminder that distant forests
can live inside a single bite.`
  }
];

const rudrakshStory: TreeStoryChapter[] = [
  {
    id: 'i_am',
    title: 'I Am the Rudraksha',
    content: `I am the Rudraksha —
a tree born from a tear.

The elders tell that when Shiva opened his eyes
after a long meditation upon the suffering of the world,
a tear fell to the earth.
Where it touched soil,
a Rudraksha tree rose.`
  },
  {
    id: 'at_morpeace',
    title: 'My Story at Morpeace',
    content: `Here at Morpeace,
I am still young.
My trunk is slender,
my leaves glossy with newness.
Yet the story in my sap
is ancient.

Rudraksha trees grow slowly.
We do not hurry.
Our work is not spectacle
but presence.`
  },
  {
    id: 'ancient',
    title: 'My Ancient Story',
    content: `Each bead I will one day bear
will carry the geometry of meditation —
lines and faces etched by time.

That is why my seeds are worn as beads —
small worlds carved by nature,
circling wrists and necks
as reminders of stillness.`
  },
  {
    id: 'gifts',
    title: 'My Gifts',
    content: `To sit near me
is to feel the world soften at its edges.
Breath lengthens.
Thoughts loosen.
Silence becomes companionable.

Birds already visit my branches,
curious about the quiet I hold.`
  },
  {
    id: 'teaching',
    title: 'My Teaching',
    content: `Stillness is a form of compassion.

When the mind grows quiet,
the heart remembers its shape.

Here at Morpeace,
I grow as a small axis of calm —
a living reminder
that forests are not only habitats
but sanctuaries.`
  }
];

const krushnavadStory: TreeStoryChapter[] = [
  {
    id: 'i_am',
    title: 'I Am Krushnavad',
    content: `I am Krushnavad —
the tree of folded palms.

Some call me the Krishna Fig,
others smile and call me makhan-katori —
the butter bowl.
Look closely at my leaves:
each one curls gently into a cup,
as if shaped by small divine hands.`
  },
  {
    id: 'at_morpeace',
    title: 'My Story at Morpeace',
    content: `I am still young here at Morpeace —
a fresh sapling,
my roots only beginning to explore this soil.

Rain gathers in my cups,
and birds lean down to sip.
Insects drink there too.
Even as a sapling,
I am already learning to host life.`
  },
  {
    id: 'ancient',
    title: 'My Ancient Story',
    content: `The elders say I remember
the childhood of Krishna himself.
When he stole butter from his mother's home,
he needed a secret place to hide it.
So I offered my leaves as bowls —
tiny green vessels of mischief and love.

Every new leaf I grow
is folded in that same offering.`
  },
  {
    id: 'gifts',
    title: 'My Gifts',
    content: `Children notice me quickly.
They kneel to examine my small leaves,
touching them with careful fingers.

I will grow slowly.
My trunk will thicken.
My crown will widen.
But growth is not a race.
It is a promise unfolding.`
  },
  {
    id: 'teaching',
    title: 'My Teaching',
    content: `Every great tree begins
as a small act of faith.

Someone planted me here
believing in a future they may not fully see.
That belief is my nourishment
as much as water and light.

Beginnings are sacred too.`
  }
];

const kailaspatiStory: TreeStoryChapter[] = [
  {
    id: 'i_am',
    title: 'I Am the Kailaspati',
    content: `I am the Kailaspati —
the tree that carries a mountain in its flowers.

My blossoms rise directly from my trunk,
as if the earth itself
were offering garlands to the sky.`
  },
  {
    id: 'at_morpeace',
    title: 'My Story at Morpeace',
    content: `I arrived here as a gift —
a sapling placed in loving hands
by a friend of Kaka.
There was no ceremony of grandeur,
only the simple generosity
of one heart offering another
a living presence.

Gifts made of wood and leaf
carry a different weight.
They grow.
They remember the moment of giving.`
  },
  {
    id: 'ancient',
    title: 'My Ancient Story',
    content: `Within each flower
rests a shape that recalls a lingam,
the ancient symbol of Shiva.
Petals curve like a serpent's hood.
Fragrance gathers in warm air,
turning space into quiet reverence.

People named me Kailaspati —
the tree of Kailasa,
Shiva's celestial abode.`
  },
  {
    id: 'gifts',
    title: 'My Gifts',
    content: `My blossoms open generously,
drawing bees, butterflies, and wonder.
Children stare at my flowers,
trying to understand
how devotion can take living shape.

My fruits grow round and heavy,
like silent planets resting against my trunk.`
  },
  {
    id: 'teaching',
    title: 'My Teaching',
    content: `A true gift continues to give.

What is offered with sincerity
does not end at the moment of exchange.
It unfolds season after season,
touching lives unseen.

I bloom from my own body
like gratitude made visible.`
  }
];

const singaporeCherryStory: TreeStoryChapter[] = [
  {
    id: 'i_am',
    title: 'I Am the Singapore Cherry',
    content: `I am the Singapore Cherry —
a gift carried on wings.

No human hand placed me here.
No careful pit was dug.
I arrived the old way —
the way forests have always arrived.

A bird tasted my fruit somewhere far away.
It flew across open sky
and rested here.
And in that quiet moment,
it planted me.`
  },
  {
    id: 'at_morpeace',
    title: 'My Story at Morpeace',
    content: `My seed fell lightly to the ground,
hidden in droppings and dust.
Rain found it. Sun warmed it.
The earth accepted it
without ceremony.

I rose unnoticed at first.
But Singapore cherries grow quickly.
We are impatient with emptiness.
We rush toward light
as if eager to repay the birds.`
  },
  {
    id: 'ancient',
    title: 'My Ancient Story',
    content: `I am not native to this land,
yet I have learned its rhythms.
I bloom often.
I fruit generously.
I feed whoever arrives.

Birds still plant my children.
Each flight becomes a promise.
Through them, I travel
without walking.`
  },
  {
    id: 'gifts',
    title: 'My Gifts',
    content: `Soon my branches filled with small red fruit,
bright as laughter.
Bulbuls came first.
Then mynas, sunbirds, and sparrows.

Children discovered me next.
Sticky fingers reached upward.
My fruit is simple joy —
no grandeur,
just abundance.`
  },
  {
    id: 'teaching',
    title: 'My Teaching',
    content: `Generosity invites company.

The more freely I give,
the more life gathers around me.
Shade thickens.
Voices multiply.
Silence becomes music.

Not all forests are planned.
Some arrive as gifts —
carried by birds,
accepted by earth.`
  }
];

const ajanStory: TreeStoryChapter[] = [
  {
    id: 'i_am',
    title: 'I Am the Ajan',
    content: `I am the Ajan —
a tree born from a pilgrim's staff.

Here at Morpeace I am only a young sapling,
my trunk slender,
my leaves still tasting their first seasons.
But the story that flows through me
began centuries ago in Alandi.`
  },
  {
    id: 'at_morpeace',
    title: 'My Story at Morpeace',
    content: `When I was planted here at Morpeace,
I felt the echo of that ancient staff —
a quiet bridge stretching from Alandi
to this soil.
Though I am young,
I carry that lineage like a whisper in my sap.`
  },
  {
    id: 'ancient',
    title: 'My Ancient Story',
    content: `When the young saint Dnyaneshwar prepared to enter his sanjeevan samadhi,
he carried a simple wooden stick.
Before descending into silence,
he pressed that staff into the earth.

From that gesture,
the elders say,
an Ajan tree rose.

Under that original Ajan in Alandi,
devotees sat and read the Dnyaneshwari.
Pilgrims rested in its shade.`
  },
  {
    id: 'gifts',
    title: 'My Gifts',
    content: `My flowers will one day open white and fragrant.
My fruits will darken with ripeness.
My bark will thicken with years.

Some say my very name remembers ignorance —
the darkness that clouds the mind.
And they say I stand as its opposite:
a reminder that ignorance can be transformed
into seeing.`
  },
  {
    id: 'teaching',
    title: 'My Teaching',
    content: `Wisdom grows where remembrance is planted.

Sacred places are not only inherited.
They can be created
through intention and care.

Even a sapling
can carry centuries of light.`
  }
];

// --- ALL TREES (parsed from CSV + enriched) ---

const rawTrees: Omit<Tree, 'carbon' | 'nearbyTreeIds'>[] = [
  {
    id: 1, tag: 'EG1259',
    coordinates: { lat: 17.610364, lng: 73.989234 },
    species: 'Mimosa pudica', scientificName: 'Mimosa pudica', marathiName: 'लाजाळू',
    measurement: { gbh_cm: 100, height_m: 10, crown_diameter_m: 0 },
    story: touchMeNotStory, storyTitle: 'The Survivor', teaching: 'Sensitivity is not weakness. It is awareness.',
    accentColor: '#a8c256', notes: 'Lajalu mimosa pudica',
    category: ['native']
  },
  {
    id: 2, tag: 'EG1262',
    coordinates: { lat: 17.610579, lng: 73.989596 },
    species: 'Kailaspati', scientificName: 'Couroupita guianensis', marathiName: 'कैलासपती',
    measurement: { gbh_cm: 10, height_m: 9, crown_diameter_m: 0 },
    story: kailaspatiStory, storyTitle: 'The Gift That Bloomed', teaching: 'A true gift continues to give.',
    accentColor: '#d4a017', notes: 'Kailashpati',
    category: ['sacred', 'flowering']
  },
  {
    id: 3, tag: 'EG1252',
    coordinates: { lat: 17.610444, lng: 73.989861 },
    species: 'Bakul', scientificName: 'Mimusops elengi', marathiName: 'बकुळ',
    measurement: { gbh_cm: 24, height_m: 10, crown_diameter_m: 0 },
    story: null, storyTitle: null, teaching: null,
    accentColor: '#8b5e3c', notes: 'Bakul',
    category: ['native', 'flowering']
  },
  {
    id: 4, tag: 'EG1250',
    coordinates: { lat: 17.610189, lng: 73.990122 },
    species: 'Banyan', scientificName: 'Ficus benghalensis', marathiName: 'वड',
    measurement: { gbh_cm: 10, height_m: 2, crown_diameter_m: 0 },
    story: banyanStory, storyTitle: 'The Immortal One', teaching: 'To shelter life is a sacred act.',
    accentColor: '#2d5016', notes: 'Krushna vad',
    category: ['sacred', 'native']
  },
  {
    id: 5, tag: 'EG1258',
    coordinates: { lat: 17.610292, lng: 73.990167 },
    species: 'Bel', scientificName: 'Aegle marmelos', marathiName: 'बेल',
    measurement: { gbh_cm: 24, height_m: 17, crown_diameter_m: 0 },
    story: null, storyTitle: null, teaching: null,
    accentColor: '#6b8f3c', notes: 'Bengal quince',
    category: ['sacred', 'fruiting']
  },
  {
    id: 6, tag: 'EG1254',
    coordinates: { lat: 17.610947, lng: 73.990178 },
    species: 'Hirvi Shevri', scientificName: 'Ceiba pentandra', marathiName: 'हिरवी शेवरी',
    measurement: { gbh_cm: 23, height_m: 15, crown_diameter_m: 0 },
    story: null, storyTitle: null, teaching: null,
    accentColor: '#4a7c59', notes: 'Hirvi shevri ciba',
    category: ['native', 'timber']
  },
  {
    id: 7, tag: 'EG1257',
    coordinates: { lat: 17.610935, lng: 73.989785 },
    species: 'Singapore Cherry', scientificName: 'Muntingia calabura', marathiName: 'सिंगापूर चेरी',
    measurement: { gbh_cm: 44, height_m: 25, crown_diameter_m: 0 },
    story: singaporeCherryStory, storyTitle: 'Planted by Birds', teaching: 'Generosity invites company.',
    accentColor: '#c41e3a', notes: 'Singapuri cheri',
    category: ['fruiting']
  },
  {
    id: 8, tag: 'EG1264',
    coordinates: { lat: 17.610899, lng: 73.989692 },
    species: 'Banyan', scientificName: 'Ficus benghalensis', marathiName: 'वड',
    measurement: { gbh_cm: 25, height_m: 15, crown_diameter_m: 0 },
    story: null, storyTitle: null, teaching: null,
    accentColor: '#2d5016', notes: 'Second banyan',
    category: ['sacred', 'native']
  },
  {
    id: 9, tag: 'EG1272',
    coordinates: { lat: 17.610922, lng: 73.988974 },
    species: 'Peepal', scientificName: 'Ficus religiosa', marathiName: 'पिंपळ',
    measurement: { gbh_cm: 10, height_m: 15, crown_diameter_m: 0 },
    story: peepalStory, storyTitle: 'The Tree of Breath', teaching: 'Peace is not the absence of movement. It is the rhythm beneath it.',
    accentColor: '#5a7247', notes: 'Sacred fig',
    category: ['sacred', 'native']
  },
  {
    id: 10, tag: 'EG1602',
    coordinates: { lat: 17.611012, lng: 73.988755 },
    species: 'Audumbar', scientificName: 'Ficus racemosa', marathiName: 'उंबर / औदुंबर',
    measurement: { gbh_cm: 230, height_m: 35, crown_diameter_m: 0 },
    story: null, storyTitle: 'The Quiet Monarch', teaching: null,
    accentColor: '#3d2b1f', notes: 'The largest tree — 230cm girth, 35m tall',
    category: ['sacred', 'native', 'fruiting']
  },
  {
    id: 11, tag: 'EG0140',
    coordinates: { lat: 17.611138, lng: 73.988530 },
    species: 'Tamarind', scientificName: 'Tamarindus indica', marathiName: 'चिंच',
    measurement: { gbh_cm: 120, height_m: 30, crown_diameter_m: 0 },
    story: tamarindStory, storyTitle: 'The Tree That Began Morpeace', teaching: 'Loss can be a doorway to creation.',
    accentColor: '#8b5e3c', notes: 'The beloved tamarind',
    category: ['native', 'fruiting']
  },
  {
    id: 12, tag: 'EG1604',
    coordinates: { lat: 17.610801, lng: 73.988598 },
    species: 'Kanchan', scientificName: 'Bauhinia purpurea', marathiName: 'कांचन',
    measurement: { gbh_cm: 24, height_m: 20, crown_diameter_m: 0 },
    story: null, storyTitle: null, teaching: null,
    accentColor: '#7b4d8e', notes: "Camel's foot tree",
    category: ['native', 'flowering']
  },
  {
    id: 13, tag: 'EG0522',
    coordinates: { lat: 17.610764, lng: 73.988863 },
    species: 'Rudraksh', scientificName: 'Elaeocarpus ganitrus', marathiName: 'रुद्राक्ष',
    measurement: { gbh_cm: 10, height_m: 4, crown_diameter_m: 0 },
    story: rudrakshStory, storyTitle: 'The Tear That Became a Tree', teaching: 'Stillness is a form of compassion.',
    accentColor: '#4a7c59', notes: 'Rudraksh',
    category: ['sacred']
  },
  {
    id: 14, tag: 'EG1601',
    coordinates: { lat: 17.610740, lng: 73.988979 },
    species: 'Kadamb', scientificName: 'Neolamarckia cadamba', marathiName: 'कदंब',
    measurement: { gbh_cm: 10, height_m: 5, crown_diameter_m: 0 },
    story: null, storyTitle: null, teaching: null,
    accentColor: '#d4942a', notes: 'Kadamb',
    category: ['sacred', 'native', 'flowering']
  },
  {
    id: 15, tag: 'EG1261',
    coordinates: { lat: 17.610500, lng: 73.988907 },
    species: 'Jamun', scientificName: 'Syzygium cumini', marathiName: 'जांभूळ',
    measurement: { gbh_cm: 15, height_m: 8, crown_diameter_m: 0 },
    story: jamunStory, storyTitle: 'The Sweet One from Kaas', teaching: 'Small sweetness is enough.',
    accentColor: '#7b4d8e', notes: 'Indian black-berry',
    category: ['native', 'fruiting']
  },
  {
    id: 16, tag: 'EG1301',
    coordinates: { lat: 17.610532, lng: 73.988503 },
    species: 'Black Bamboo', scientificName: 'Phyllostachys nigra', marathiName: 'काळा बांबू',
    measurement: { gbh_cm: 10, height_m: 20, crown_diameter_m: 0 },
    story: null, storyTitle: null, teaching: null,
    accentColor: '#3d2b1f', notes: 'Black bamboo',
    category: ['native', 'timber']
  },
  {
    id: 17, tag: 'EG1121',
    coordinates: { lat: 17.610628, lng: 73.989542 },
    species: 'Ajan', scientificName: 'Terminalia elliptica', marathiName: 'अजन',
    measurement: { gbh_cm: 10, height_m: 2, crown_diameter_m: 0 },
    story: ajanStory, storyTitle: "Born from a Pilgrim's Staff", teaching: 'Wisdom grows where remembrance is planted.',
    accentColor: '#8a8577', notes: 'Ajan vruksha',
    category: ['native', 'timber']
  },
  {
    id: 18, tag: 'EG1250b',
    coordinates: { lat: 17.610189, lng: 73.990122 },
    species: 'Krushnavad', scientificName: 'Ficus krishnae', marathiName: 'कृष्णवड',
    measurement: { gbh_cm: 10, height_m: 2, crown_diameter_m: 0 },
    story: krushnavadStory, storyTitle: 'The Butter Bowl', teaching: 'Every great tree begins as a small act of faith.',
    accentColor: '#6b8f3c', notes: 'Krishna Fig - makhan katori',
    category: ['sacred', 'native']
  }
];

// Build complete tree objects with carbon data and nearby trees
export const trees: Tree[] = rawTrees.map(t => ({
  ...t,
  carbon: calculateCarbon(t.measurement.gbh_cm, t.measurement.height_m),
  nearbyTreeIds: [] as number[],
}));

// Compute nearby trees (within 80m)
trees.forEach(t => {
  t.nearbyTreeIds = trees
    .filter(other => other.id !== t.id && haversine(t.coordinates, other.coordinates) < 80)
    .sort((a, b) => haversine(t.coordinates, a.coordinates) - haversine(t.coordinates, b.coordinates))
    .slice(0, 3)
    .map(other => other.id);
});

// Trees that have stories
export const storyTrees = trees.filter(t => t.story !== null);

// Dashboard stats
export const dashboardStats = {
  totalTrees: trees.length,
  totalSpecies: new Set(trees.map(t => t.scientificName)).size,
  totalAreaAcres: 10,
  lakeAreaSqft: 35000,
  mangoVarieties: 40,
  yearsGrowing: new Date().getFullYear() - 2009,
  totalAnnualCO2kg: trees.reduce((sum, t) => sum + t.carbon.annual_co2_kg, 0),
  totalLifetimeCO2kg: trees.reduce((sum, t) => sum + t.carbon.lifetime_co2_kg, 0),
  shannonWienerIndex: (() => {
    const counts: Record<string, number> = {};
    trees.forEach(t => { counts[t.scientificName] = (counts[t.scientificName] || 0) + 1; });
    const total = trees.length;
    return -Object.values(counts).reduce((sum, count) => {
      const p = count / total;
      return sum + p * Math.log(p);
    }, 0);
  })(),
  largestTree: trees.find(t => t.tag === 'EG1602')!,
  sentinelNote: '18 sentinel trees measured. Hundreds more growing.',
};
