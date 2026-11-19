export type Kingdom = "Clover" | "Heart" | "Spade" | "Diamond";

export type SquadId =
  | "black-bulls"
  | "golden-dawn"
  | "silver-eagles"
  | "crimson-lion-kings"
  | "blue-rose"
  | "green-mantis"
  | "coral-peacocks"
  | "aqua-deer"
  | "purple-orcas";

export interface Squad {
  id: SquadId;
  name: string;
  japaneseName: string;
  captain: string;
  captainImage: string;
  insignia: string;
  color: string;
  accentColor: string;
  motto: string;
  description: string;
  notableMembers: string[];
  reputation: string;
  stars: number;
}

export interface Character {
  id: string;
  name: string;
  alias?: string;
  squadId?: SquadId;
  squadRank?: string;
  kingdom: Kingdom;
  magicAttribute: string;
  grimoire: {
    leaves: number;
    description: string;
    origin?: string;
  };
  role: string;
  stats: {
    physicalStrength: number; // 1-100
    magicCapacity: number;     // 1-100
    magicControl: number;      // 1-100
    speed: number;             // 1-100
    tenacity: number;          // 1-100
  };
  quotes: string[];
  signatureSpells: {
    name: string;
    type: string;
    description: string;
  }[];
  bio: string;
  image: string;
  themeColor: string;
}

export interface KingdomInfo {
  id: Kingdom;
  name: string;
  ruler: string;
  spirit?: string;
  capital: string;
  magicCharacteristics: string;
  militaryTraits: string;
  description: string;
  crest: string;
  keyLocations: {
    name: string;
    description: string;
    significance: string;
  }[];
  bannerColor: string;
}

export interface MagicAttribute {
  id: string;
  name: string;
  category: "Four Major Elements" | "Irregular / Derivative" | "Forbidden / Demonic" | "Arcane Stage";
  description: string;
  users: string[];
  rarity: "Common" | "Uncommon" | "Rare" | "Legendary" | "Mythical";
  strengths: string[];
  weaknesses: string[];
  notableSpells: string[];
  color: string;
}

export interface AnimeArc {
  id: string;
  title: string;
  episodesRange: string;
  startEp: number;
  endEp: number;
  mangaChapters: string;
  summary: string;
  antagonists: string[];
  keyBattles: string[];
  status: "Completed" | "Current";
  thumbnail: string;
  highlightEpisode: number;
}

export interface QuizQuestion {
  id: number;
  question: string;
  scenario: string;
  options: {
    text: string;
    squadBias: SquadId;
    grimoireBonus: "3-leaf" | "4-leaf" | "5-leaf";
    flavorQuote: string;
  }[];
}

export interface QuizResult {
  squad: Squad;
  grimoireLeaf: 3 | 4 | 5;
  magicAttribute: string;
  characterMatch: string;
  title: string;
  evaluation: string;
}
