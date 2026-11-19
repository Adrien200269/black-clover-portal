import { QuizQuestion, SquadId } from "@/types";

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "You stand before the Grimoire Tower as floating tomes swirl into the sky. Which aura calls out to your soul?",
    scenario: "The Tower Master chants ancient incantations as mystical light fills the stone hall.",
    options: [
      {
        text: "A pitch-black, battered tome radiating ominous anti-mana sparks that pulls in the light around it.",
        squadBias: "black-bulls",
        grimoireBonus: "5-leaf",
        flavorQuote: "In the fifth leaf... resides a demon.",
      },
      {
        text: "A radiant, shimmering golden grimoire bathed in gentle green gusts, humming with supreme luck and natural affinity.",
        squadBias: "golden-dawn",
        grimoireBonus: "4-leaf",
        flavorQuote: "Within the fourth leaf... lies good fortune.",
      },
      {
        text: "A sharp, pristine platinum grimoire adorned with royal heraldry, vibrating with flawless elemental precision.",
        squadBias: "silver-eagles",
        grimoireBonus: "3-leaf",
        flavorQuote: "Within the three leaves reside faith, hope, and love.",
      },
      {
        text: "A roaring grimoire wrapped in crackling crimson embers that scorches the stone pedestal beneath it.",
        squadBias: "crimson-lion-kings",
        grimoireBonus: "3-leaf",
        flavorQuote: "Ignite your spirit until there is nothing left to burn!",
      },
    ],
  },
  {
    id: 2,
    question: "During the Magic Knights Entrance Exam, an arrogant noble mocks you and unleashes a lethal spell. How do you respond?",
    scenario: "The entire arena goes silent as the attack hurtles toward you.",
    options: [
      {
        text: "Charge head-first without hesitation, smash their spell to splinters with raw grit, and shout that status means nothing!",
        squadBias: "black-bulls",
        grimoireBonus: "5-leaf",
        flavorQuote: "Even if I was born with zero magic, my muscles and spirit will crush your pride!",
      },
      {
        text: "Effortlessly deflect the attack with a single gust or counter-barrier, showing immense class and quiet superiority.",
        squadBias: "golden-dawn",
        grimoireBonus: "4-leaf",
        flavorQuote: "True talent doesn't need to yell.",
      },
      {
        text: "Stand completely still as your defensive mercury or water barrier intercepts it effortlessly, piercing them with a cold glare.",
        squadBias: "silver-eagles",
        grimoireBonus: "3-leaf",
        flavorQuote: "Insolence against the royal code shall not be tolerated.",
      },
      {
        text: "Counter with an even hotter inferno, telling them their hatred is weak and challenging them to fight like a true warrior!",
        squadBias: "crimson-lion-kings",
        grimoireBonus: "3-leaf",
        flavorQuote: "Strength is judged by the fire in your heart, not the blood in your veins!",
      },
    ],
  },
  {
    id: 3,
    question: "Your squad is surrounded deep behind enemy lines and your teammates are injured. What is your command?",
    scenario: "Reinforcements are hours away and the enemy commander demands immediate surrender.",
    options: [
      {
        text: "Tell everyone to hold on tight, unleash forbidden power, and surpass your physical limits right here, right now!",
        squadBias: "black-bulls",
        grimoireBonus: "5-leaf",
        flavorQuote: "We are the Black Bulls. Giving up is not in our dictionary!",
      },
      {
        text: "Deploy a massive high-altitude aerial formation to shield the wounded while bombarding the enemy from a safe distance.",
        squadBias: "golden-dawn",
        grimoireBonus: "4-leaf",
        flavorQuote: "The Golden Dawn protects with flawless strategy and divine grace.",
      },
      {
        text: "Create a layered labyrinth of thorn or water wards, immobilizing the invaders while extracting your squad methodically.",
        squadBias: "blue-rose",
        grimoireBonus: "3-leaf",
        flavorQuote: "Discipline and composure will unravel any chaotic siege.",
      },
      {
        text: "Dive straight into the thickest ranks of the enemy like a wild beast, slicing through every defense until no one dares approach!",
        squadBias: "green-mantis",
        grimoireBonus: "3-leaf",
        flavorQuote: "I'll sever everything in my path—slice, slice, slice!",
      },
    ],
  },
  {
    id: 4,
    question: "What core motive pushes you forward when everyone tells you it is impossible?",
    scenario: "You sit under the stars after hours of exhausting training.",
    options: [
      {
        text: "To protect the family and outcasts who took me in, and prove that a nobody can reach the peak.",
        squadBias: "black-bulls",
        grimoireBonus: "5-leaf",
        flavorQuote: "My family is my magic.",
      },
      {
        text: "To fulfill a sacred childhood promise to a rival and reach the summit through unmatched excellence.",
        squadBias: "golden-dawn",
        grimoireBonus: "4-leaf",
        flavorQuote: "I promised someone I would never lose.",
      },
      {
        text: "To uphold family honor and atone for the past by proving my loyalty to the kingdom's defense.",
        squadBias: "silver-eagles",
        grimoireBonus: "3-leaf",
        flavorQuote: "Nobility is defined by the weight of responsibility.",
      },
      {
        text: "To unleash boundless creative chaos and turn the battlefield into a canvas of endless imagination!",
        squadBias: "aqua-deer",
        grimoireBonus: "4-leaf",
        flavorQuote: "Magic is pure freedom and artistic passion!",
      },
    ],
  },
  {
    id: 5,
    question: "Which mystical magic attribute best resonates with your personality?",
    scenario: "Close your eyes and feel the ambient mana flowing through your veins.",
    options: [
      {
        text: "Anti-Magic / Dark Magic: Heavy, abyssal, defies the natural laws of the realm and cuts through fate.",
        squadBias: "black-bulls",
        grimoireBonus: "5-leaf",
        flavorQuote: "When the lights fade, darkness carves the way.",
      },
      {
        text: "Wind / Celestial Star Magic: Elegant, untouchable, piercing through the sky like a constellation.",
        squadBias: "golden-dawn",
        grimoireBonus: "4-leaf",
        flavorQuote: "The winds carry the will of the heavens.",
      },
      {
        text: "Dream / Space Magic: Reality-bending, mysterious, folding dimensions and weaving illusions.",
        squadBias: "coral-peacocks",
        grimoireBonus: "4-leaf",
        flavorQuote: "Step inside my dream, where reality ceases to exist.",
      },
      {
        text: "Infernal Fire / Lightning Magic: Explosive, relentless, striking with the thunderous roar of a predator.",
        squadBias: "crimson-lion-kings",
        grimoireBonus: "3-leaf",
        flavorQuote: "Burn through all hesitations!",
      },
    ],
  },
];
