export interface TrailChapter {
  id: string
  title: string
  location: string
  lesson: string
  excerpt: string
  fullText: string
  speakerQuote: string
  accentColor: string
}

export const trailChapters: TrailChapter[] = [
  {
    id: 'prologue',
    title: 'The Tulsi at the Gate',
    location: 'The Gate',
    lesson: 'Gratitude',
    excerpt: 'The five cousins stood excitedly at the gate of Morpeace. Right there, welcoming them, was a tall Tulsi Vrindawan...',
    fullText: `The five cousins — Neil, Malhaar, Mukta, Aarohi, and Nihira — stood excitedly at the gate of Morpeace. Right there, welcoming them, was a tall Tulsi Vrindawan, its green leaves glowing in the sunlight.

Sharad Aba placed his hands together. "This Tulsi is not just a plant, children. It is our guardian. It blesses our home, keeps the air pure, and reminds us to begin everything with respect and gratitude."

The children bowed to the Tulsi, and with that blessing, their adventure began.`,
    speakerQuote: 'This Tulsi is not just a plant, children. It is our guardian.',
    accentColor: '#6b8f3c',
  },
  {
    id: 'ch1',
    title: 'The Peacock of Biodiversity',
    location: 'The Orchard',
    lesson: 'Biodiversity',
    excerpt: 'A magnificent peacock appeared, its feathers spread like a rainbow carpet...',
    fullText: `As they walked into the orchard, a magnificent peacock appeared, its feathers spread like a rainbow carpet.

Neil asked, "Why do we need so many different creatures? Wouldn't just trees and fruits be enough?"

The peacock replied, "Every being has a role. Bees carry pollen, frogs eat insects, worms soften the soil, and trees call the rain. Together, they keep the world alive."

Aarohi frowned. "But I don't like some animals\u2026 like snakes. They're scary. Can't the forest be happy without them?"

The peacock smiled gently. "Even snakes are protectors. Without them, rats would multiply and eat all the grain. Then people would go hungry. Every creature, even the ones you fear, helps keep balance."

Mukta whispered, "So even the scary ones are guardians?"

"Yes," said the peacock, "biodiversity means respecting all roles. Without snakes, no grain. Without bees, no mangoes. Without worms, no yams. Every flavour on your plate comes from diversity."

Malhaar laughed, "So it's like cricket \u2014 you need batsmen, bowlers, and even wicket-keepers. Everyone matters!"

The peacock bowed. "Exactly. More friends, more flavour, more life." And with a graceful turn, it vanished into the forest.`,
    speakerQuote: 'Every being has a role. Bees carry pollen, frogs eat insects, worms soften the soil, and trees call the rain.',
    accentColor: '#d94f6b',
  },
  {
    id: 'ch2',
    title: 'The Hammock of Listening',
    location: 'The Shady Grove',
    lesson: 'Stillness',
    excerpt: 'In a shady grove, the children found a hammock tied between two tall trees...',
    fullText: `In a shady grove, the children found a hammock tied between two tall trees. They piled in, squealing with laughter until it rocked like a boat.

"Shhh," said Mukta. "Listen."

The hammock whispered, "I am here to slow you down. In stillness, you notice secrets rushing eyes miss. The forest hums, the wind sings, even your own hearts beat their music."

Quietly, the children heard ants crunching in the leaves, a woodpecker tapping, and the sigh of the breeze.

"It's like the whole forest is breathing with us," said Nihira. And for a while, they swayed gently, held in the arms of nature.`,
    speakerQuote: 'I am here to slow you down. In stillness, you notice secrets rushing eyes miss.',
    accentColor: '#8b5e3c',
  },
  {
    id: 'ch3',
    title: 'The Lake of Cycles',
    location: 'The Great Lake',
    lesson: 'Rhythm',
    excerpt: 'The trail opened to the great lake. In summer it shimmered with water; in winter it lay dry...',
    fullText: `The trail opened to the great lake. In summer it shimmered with water; in winter it lay dry, like a resting giant.

"Why do you keep changing?" Malhaar asked.

The lake rippled, "Because life has seasons. I fill, I empty. Flowers bloom, then fade. People laugh, then rest. Nothing is forever, and that is the beauty."

The children dipped their toes. Mukta spotted a frog, Aarohi saw a kingfisher dive, Neil tossed a pebble.

"So even endings are beginnings," whispered Nihira.

The lake smiled, "Yes. Trust the rhythm."`,
    speakerQuote: 'Because life has seasons. I fill, I empty. Nothing is forever, and that is the beauty.',
    accentColor: '#4a7c59',
  },
  {
    id: 'ch4',
    title: 'The Cave of the Inner Star',
    location: 'The Meditation Cave',
    lesson: 'Inner Light',
    excerpt: 'Sharad Aba led them down a narrow path to a cool stone cave. A shaft of light shone on a golden star...',
    fullText: `Sharad Aba led them down a narrow path to a cool stone cave. Inside, silence wrapped them like a blanket. A shaft of light shone on a golden star glowing in the dark.

Neil whispered, "Is it real?"

Sharad Aba said, "This is the Kutastha Star, the inner light. The same star shines in each of you, between your eyes. The sages call it the doorway to peace. The golden halo is wisdom, the blue field is infinity, and the silver star is your soul. It is what Krishna, Buddha, and Christ all spoke of \u2014 the eternal light within."

The star itself twinkled: "I guide you when you sit still. Outer light shows you the world; inner light shows you yourself. When fear or anger clouds your heart, close your eyes. Find me. I will remind you that you are light."

The children sat cross-legged. Colours swirled behind their closed eyes \u2014 blue, gold, silver. For a moment, they felt galaxies alive inside their small hearts.

Mukta whispered, "It's like carrying a lantern that never goes out." Sharad Aba nodded, "Yes. Even in the darkest night, this star shines within you."

They stepped out quietly, carrying the cave's peace with them.`,
    speakerQuote: 'This is the Kutastha Star, the inner light. The same star shines in each of you.',
    accentColor: '#d4a017',
  },
  {
    id: 'ch5',
    title: 'The Forest of Breathing',
    location: 'The Deep Forest',
    lesson: 'Breath',
    excerpt: 'Ganesh Dada guided them into the deep forest. At the Parijataka tree, he said, "This tree once grew only in heaven..."',
    fullText: `The next morning, Ganesh Dada guided them into the deep forest. At the Parijataka tree, he said, "This tree once grew only in heaven. Lord Krishna brought it down for his beloved Satyabhama. Its flowers fall so everyone may share their beauty."

Along the way, mosquitoes buzzed around. Ganesh Dada plucked a fat aloe vera leaf, split it open, and rubbed its cool gel on their arms. "See? The forest protects those who respect it."

They reached an open clearing where the breeze circled them. "This is Shinrin Yoku \u2014 forest bathing," Ganesh Dada said. "Walk slowly, breathe deeply, let the forest wash your heart."

The cousins closed their eyes. They felt the trees breathing with them.

Before leaving, they found a swing made from old tyres hanging from a strong branch. One by one they soared, shrieking with joy, feeling as if they could touch the sky.`,
    speakerQuote: 'Walk slowly, breathe deeply, let the forest wash your heart.',
    accentColor: '#2d5016',
  },
  {
    id: 'ch6',
    title: 'The Island of Stars',
    location: 'The Stargazing Island',
    lesson: 'Wonder',
    excerpt: 'That night, Sharad Aba led them to a quiet island. Waiting there was Raju Dada, beside a tall telescope...',
    fullText: `That night, Sharad Aba led them to a quiet island away from the house. Waiting there was Raju Dada, beside a tall telescope.

"Tonight," he said, "the universe itself will be your teacher."

The children took turns peering through. Neil gasped at Saturn's rings, Mukta admired the moon's craters, Aarohi saw Jupiter's moons, Nihira squealed at a star cluster, and Malhaar spotted a shooting star, making a secret wish.

The night sky whispered, "You learn from trees and rivers by day. At night, I remind you that you belong to the cosmos. Each star is a friend sending light across eternity."

The children lay on mats, hearts stretched as wide as the heavens.`,
    speakerQuote: 'You learn from trees and rivers by day. At night, I remind you that you belong to the cosmos.',
    accentColor: '#7b4d8e',
  },
  {
    id: 'ch7',
    title: 'The Tower of Many Eyes',
    location: 'The Tall Tower',
    lesson: 'Vision',
    excerpt: 'From the top of the tower, Morpeace unfolded like a storybook: the hammock grove, the shining lake...',
    fullText: `The next morning, they climbed the tall tower. From the top, Morpeace unfolded like a storybook: the hammock grove, the shining lake, the starry island, the forest trails, the Tulsi Vrindawan glowing at the gate, even the tyre swing swaying in the distance.

The Tower said, "I am the eye of Morpeace. From here, you see everything as one \u2014 water to soil, forest to sky, people to place. Many parts, one family."

Aarohi cried, "It's like flying!" Nihira laughed, "It's like painting the whole world at once!"`,
    speakerQuote: 'From here, you see everything as one \u2014 water to soil, forest to sky, people to place.',
    accentColor: '#8a8577',
  },
  {
    id: 'ch8',
    title: 'The Kitchen of Roots',
    location: 'The Kitchen & Fields',
    lesson: 'Flavour',
    excerpt: 'Kishori Aaji welcomed the cousins with warm eyes. "Children, your dinner begins in the soil..."',
    fullText: `That evening, Kishori Aaji welcomed the cousins with warm eyes. "Children," she said, "your dinner begins in the soil. Come \u2014 pick what you'll eat tonight."

With baskets in hand, they followed Tara Maoshi and Sangeeta Maoshi through the fields. Neil picked glossy brinjals, Malhaar twisted raw bananas, Mukta dug for yams, Aarohi plucked beans, and Nihira gathered raw mangoes. Together, they unearthed the glowing Ramkand, the root Lord Rama ate in exile.

Back in the kitchen, Aaji guided them as the pots bubbled. The air filled with smoky Wang bharit, earthy Raan bhaji, nutty Peanut Mahadhya, sattvic raw banana curry, and sweet Ukadiche modak.

As they ate, Kishori Aaji said, "When you pick and cook together, food becomes more than flavour. It becomes your story \u2014 filled with memory, health, and joy."

Neil licked his fingers. "It's like eating our own adventure!"`,
    speakerQuote: 'When you pick and cook together, food becomes more than flavour. It becomes your story.',
    accentColor: '#d4942a',
  },
  {
    id: 'ch9',
    title: 'The Pool of Friendship',
    location: 'The Swimming Pool',
    lesson: 'Joy',
    excerpt: 'The cousins tumbled into the swimming pool, splashing and racing each other...',
    fullText: `The next day, the cousins tumbled into the swimming pool, splashing and racing each other. Malhaar sprayed Neil, Mukta raced Aarohi underwater, Nihira floated like a little starfish.

The Pool said, "I am here for laughter. Forests give calm, food gives strength, stars give wonder \u2014 but water gives play. In joy, friendships grow deep, like rivers carving valleys."

Their giggles echoed across Morpeace.`,
    speakerQuote: 'I am here for laughter. In joy, friendships grow deep, like rivers carving valleys.',
    accentColor: '#4a7c59',
  },
  {
    id: 'ch10',
    title: 'The Flower of Memory',
    location: 'The Forest Path',
    lesson: 'Memory',
    excerpt: 'Nihira spotted a touch-me-not plant. She brushed its leaves, and they folded shyly...',
    fullText: `On their way back, Nihira spotted a touch-me-not plant. She brushed its leaves, and they folded shyly.

The flower whispered, "I may be small, but I carry big memories. Even the tiniest plant can hold the story of a whole forest."

The children realized that Morpeace was not just alive with life \u2014 but with memory and meaning.`,
    speakerQuote: 'I may be small, but I carry big memories. Even the tiniest plant can hold the story of a whole forest.',
    accentColor: '#a8c256',
  },
  {
    id: 'epilogue',
    title: 'The Promise of Morpeace',
    location: 'The Gathering Circle',
    lesson: 'Unity',
    excerpt: 'At sunset, Sharad Aba gathered them together. "You have met the teachers of this land..."',
    fullText: `At sunset, Sharad Aba gathered them together. "You have met the teachers of this land \u2014 the Peacock, the Hammock, the Lake, the Star, the Forest, the Island, the Tower, the Kitchen, the Pool, and the Flower.

Each gave you a gift: variety, stillness, rhythm, inner light, breath, wonder, vision, flavour, joy, and memory. Together, they are Morpeace."

The cousins nodded, eyes shining. "Sharad Aba, Morpeace is not just a farm," said Neil. "It's a storybook!" shouted Malhaar. "And we are its heroes!" added Mukta, Aarohi, and Nihira.

And so their laughter and learning became part of Morpeace itself \u2014 a place where every corner tells a story, and every child becomes a storyteller.`,
    speakerQuote: 'Each gave you a gift: variety, stillness, rhythm, inner light, breath, wonder, vision, flavour, joy, and memory.',
    accentColor: '#d4a017',
  },
]

export const trailClosingLesson = 'If you walk slowly, listen deeply, and taste lovingly, the whole land will whisper its secrets to you.'
