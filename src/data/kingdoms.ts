import { KingdomInfo } from "@/types";

export const kingdoms: KingdomInfo[] = [
  {
    id: "Clover",
    name: "Clover Kingdom",
    ruler: "King Kira Clover XIII (Monarch) & Julius Novachrono (Wizard King)",
    spirit: "Sylph (Wind Spirit, partnered with Yuno) & Salamander (Fire Spirit, partnered with Fuegoleon)",
    capital: "Royal Capital (Noble Realm)",
    magicCharacteristics: "Extremely diverse elemental and irregular attributes. Grimoires bear 3-leaf clovers, with legendary 4-leaf clovers signifying fortune, and corrupted 5-leaf clovers harboring demons.",
    militaryTraits: "Nine Magic Knight Squads competing in star rankings, led by squad captains under the Wizard King's direct command.",
    description: "A prosperous yet socially divided kingdom structured into three distinct social tiers: the lavish Noble Realm, the industrious Common Realm, and the neglected Forsaken Realm. Despite aristocratic bias, the meritocratic Magic Knights allow anyone with grit to rise.",
    crest: "🍀",
    bannerColor: "#10b981",
    keyLocations: [
      {
        name: "Royal Capital",
        description: "The magnificent heart of Clover, home to royal palaces, squad headquarters, and the grand arena for the Magic Knights Entrance Exam.",
        significance: "Site of the Royal Capital Invasion and final clash against the Reincarnated Elves.",
      },
      {
        name: "Hage Village (Forsaken Realm)",
        description: "A rural church village situated in the shadow of the giant demon skull where the First Wizard King defeated the colossal ancient demon.",
        significance: "Childhood home of Asta and Yuno, and location of the Grimoire Tower where Asta received the 5-leaf grimoire.",
      },
      {
        name: "Grand Magic Zone: Yultim Volcano",
        description: "An infernal, mana-saturated mountain with boiling lava trails and crushing ambient heat used by Mereoleona for extreme training.",
        significance: "Where Magic Knights learn the fundamental body enhancement technique: Mana Skin.",
      },
      {
        name: "Shadow Palace",
        description: "A mythical extradimensional space between the living world and underworld that only manifests when all ten magic stones are placed into the Sephirot monument.",
        significance: "Battlefield of the ancient Elves, Zagred the Word Soul Devil, and the First Wizard King Lemiel.",
      },
    ],
  },
  {
    id: "Heart",
    name: "Heart Kingdom",
    ruler: "Queen Loropechika (Princess of Heart)",
    spirit: "Undine (The Great Water Spirit)",
    capital: "Polota (The Heart Palace)",
    magicCharacteristics: "Specializes in pure natural elemental magic (Water, Lightning, Earth, Wind, Plant). Masters of 'Mana Method'—using runic arrays of natural mana—and devastating 'True Magic'.",
    militaryTraits: "Guarded by the Spirit Guardians, Tier-Zero combatants who command vast environmental arrays.",
    description: "A lush, vibrant, peaceful paradise blessed with overflowing natural mana and cascading waterfalls. Its queens possess generational omniscience through their eternal bond with Undine, safeguarding the entire perimeter with a tranquil natural barrier.",
    crest: "💖",
    bannerColor: "#06b6d4",
    keyLocations: [
      {
        name: "Palace of the Heart Queen",
        description: "A colossal, water-draped sanctuary where Queen Loropechika sits upon the throne, receiving real-time sensory data across the whole realm.",
        significance: "Heart of the kingdom's barrier network and alliance negotiations with the Clover Kingdom.",
      },
      {
        name: "Natural Mana Training Grounds",
        description: "Vast rainforests and cascading rapids where the Spirit Guardians train chosen Clover knights in runes and True Magic.",
        significance: "Where Asta, Noelle, Luck, and the Black Bulls achieved Tier-Zero strength before the Spade raid.",
      },
      {
        name: "Elysia (Secluded Elf Haven)",
        description: "A hidden mystical haven inhabited by the descendants of Licht and Tetia, rich in divine natural mana.",
        significance: "Where the surviving Dryad teaches Ultimate Magic to the Clover Knights.",
      },
    ],
  },
  {
    id: "Spade",
    name: "Spade Kingdom",
    ruler: "Formerly the Grinberryall Royal Family; Usurped by The Dark Triad (Dante, Zenon, Vanica Zogratis)",
    spirit: "Demon Pacts (Lucifero, Beelzebub, Megicula)",
    capital: "The Royal Spade Citadel",
    magicCharacteristics: "Frigid, oppressive, and heavily occult. Utilizes forbidden devil-enhancement, ancient curses, and human-mana extraction devices.",
    militaryTraits: "Ruthless military hierarchy powered by Devil Believers and high-percentage Devil Hosts capable of crushing entire platoons.",
    description: "An expansive, snow-blanketed empire in the northern continent. Originally a peaceful realm governed by the benevolent Grinberryall house, a brutal coup by the Zogratis siblings plunged it into a military dystopia hellbent on opening the Tree of Qliphoth.",
    crest: "♠️",
    bannerColor: "#e11d48",
    keyLocations: [
      {
        name: "Spade Royal Castle & Qliphoth Ritual Chamber",
        description: "A menacing fortress housing the ancient underworld portal channel designed to sacrifice Yami and William to unleash upper-tier devils.",
        significance: "Ground zero of the epic Spade Kingdom Raid and the awakening of Lucifero.",
      },
      {
        name: "Frozen Tundra & Border Outposts",
        description: "Miles of permafrost where mobile fortress crawlers drain the mana of captured citizens to fuel warmth and heavy siege artillery.",
        significance: "Asta's triumphant return where he eradicated a mobile spade base single-handedly.",
      },
      {
        name: "Underworld Seal Gate",
        description: "The subterranean boundary separating the human realm from the seven levels of hell inhabited by supreme devils.",
        significance: "The gate from which Lilith, Naamah, and Lucifero emerged.",
      },
    ],
  },
  {
    id: "Diamond",
    name: "Diamond Kingdom",
    ruler: "The Diamond King (Manipulated by Scholar Morris)",
    spirit: "None native (Engineered artificially through mage surgery)",
    capital: "Diamond Core Citadel",
    magicCharacteristics: "Mineral, metal, and earth manipulation. Pioneered artificial mage enhancement, grafting multiple grimoire pages and magic stones directly into children's bodies.",
    militaryTraits: "Led by the Eight Shining Generals, combat-hardened commanders augmented through lethal genetic and alchemical experimentation.",
    description: "A desolate, mountainous realm plagued by severe shortages of farmland and natural resources. Driven by desperation, the kingdom adopted cutthroat militarism, forcing orphaned children into gladiatorial death matches to produce remorseless super-soldiers like Mars and Ladros.",
    crest: "♦️",
    bannerColor: "#eab308",
    keyLocations: [
      {
        name: "Laboratory of Scholar Morris",
        description: "A sinister subterranean facility filled with magical surgical tables and alchemical vats where child prodigies were systematically dissected.",
        significance: "Birthplace of Mars's dual Mineral/Fire magic synthesis and Morris's dark schemes.",
      },
      {
        name: "The Neutral Border Dungeons",
        description: "Ancient labyrinthine ruins filled with magical traps, treasures, and lost grimoires situated along the Clover-Diamond border.",
        significance: "First clash between Asta and Mars, where Asta acquired the Demon-Dweller Sword and Yuno found Sylph.",
      },
      {
        name: "Diamond Ore Mines",
        description: "Gigantic cavernous excavation pits worked by laborers to extract enchanted gems and minerals for royal artillery.",
        significance: "Primary economic engine of the Diamond Kingdom's war machine.",
      },
    ],
  },
];
