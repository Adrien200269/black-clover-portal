"use client";

import { useState } from "react";
import { squads } from "@/data/squads";
import { characters } from "@/data/characters";
import { Character, SquadId, Kingdom } from "@/types";
import { soundManager } from "@/lib/soundEffects";
import CharacterModal from "./CharacterModal";
import { Shield, Search, Star, Sparkles, Filter, ChevronRight, Zap, Award, Flame, User } from "lucide-react";

export default function SquadCharacterExplorer() {
  const [selectedSquad, setSelectedSquad] = useState<SquadId | "all">("all");
  const [selectedKingdom, setSelectedKingdom] = useState<Kingdom | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCharacter, setActiveCharacter] = useState<Character | null>(null);

  // Filter logic
  const filteredCharacters = characters.filter((c) => {
    const matchesSquad = selectedSquad === "all" || c.squadId === selectedSquad;
    const matchesKingdom = selectedKingdom === "all" || c.kingdom === selectedKingdom;
    const matchesSearch =
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.magicAttribute.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (c.alias && c.alias.toLowerCase().includes(searchQuery.toLowerCase())) ||
      c.signatureSpells.some((s) => s.name.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesSquad && matchesKingdom && matchesSearch;
  });

  const currentSquadInfo = squads.find((s) => s.id === selectedSquad);

  return (
    <section id="squads" className="py-24 relative bg-[#030306] bg-grimoire-pattern">
      {/* Decorative Kanji Watermark */}
      <div className="absolute top-10 right-8 pointer-events-none select-none text-[80px] sm:text-[140px] font-black text-red-600/[0.03] tracking-widest font-gothic">
        魔法騎士団
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/70 border border-red-800/70 text-xs font-royal text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.3)]">
            <Shield className="w-3.5 h-3.5 text-red-500" />
            <span>CLOVER KINGDOM KNIGHT DIRECTORY // 魔法騎士団名簿</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-clover uppercase drop-shadow-[0_2px_15px_rgba(239,68,68,0.4)]">
            Squads & Magic Knights
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base font-sans">
            From Asta and the wild outcasts of the <span className="text-red-500 font-bold">Black Bulls</span> to the royal captains across the continent, explore all <strong className="text-white font-bold">{characters.length}</strong> legendary warriors.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="p-5 sm:p-7 rounded-2xl bg-[#07050a] border border-red-950/70 shadow-[0_10px_35px_rgba(0,0,0,0.8)] space-y-5">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input
                type="text"
                placeholder="Search knight, magic attribute, or spell..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/70 border border-red-950 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-sans"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-500 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Kingdom Filter Badges */}
            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
              <span className="text-xs font-royal text-red-400 mr-2 flex items-center gap-1 font-bold">
                <Filter className="w-3.5 h-3.5 text-red-500" /> Realm:
              </span>
              {(["all", "Clover", "Heart", "Spade", "Diamond"] as const).map((k) => (
                <button
                  key={k}
                  onClick={() => {
                    soundManager.playHover();
                    setSelectedKingdom(k);
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedKingdom === k
                      ? "bg-gradient-to-r from-red-700 to-rose-700 text-white shadow-lg shadow-red-950/80 border border-red-400/50 font-shonen tracking-wider"
                      : "bg-black/60 text-zinc-400 hover:text-white border border-red-950 hover:border-red-900 font-royal"
                  }`}
                >
                  {k === "all" ? "All Realms" : `${k} Realm`}
                </button>
              ))}
            </div>
          </div>

          {/* Squad Horizontal Scroll / Filter Bar */}
          <div className="pt-3 border-t border-red-950/60 overflow-x-auto pb-2 flex items-center gap-2.5">
            <button
              onClick={() => {
                soundManager.playHover();
                setSelectedSquad("all");
              }}
              className={`shrink-0 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedSquad === "all"
                  ? "bg-gradient-to-r from-red-600 to-rose-700 text-white shadow-[0_0_20px_rgba(239,68,68,0.6)] font-shonen text-sm tracking-wider border border-red-400/50"
                  : "bg-black/70 text-zinc-400 hover:text-white border border-red-950 font-royal"
              }`}
            >
              All 9 Squads ({characters.length})
            </button>

            {squads.map((squad) => {
              const isSelected = selectedSquad === squad.id;
              const squadCount = characters.filter((c) => c.squadId === squad.id).length;

              return (
                <button
                  key={squad.id}
                  onClick={() => {
                    soundManager.playHover();
                    setSelectedSquad(squad.id);
                  }}
                  className={`shrink-0 px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                    isSelected
                      ? "bg-red-950/70 border-red-500 text-white shadow-[0_0_15px_rgba(239,68,68,0.4)] border"
                      : "bg-black/60 text-zinc-400 hover:text-white border border-red-950/70 hover:border-red-900/80"
                  }`}
                >
                  <span className="text-base">{squad.insignia}</span>
                  <div className="flex flex-col text-left">
                    <span className="font-royal font-bold text-xs leading-tight">
                      {squad.name}
                    </span>
                    <span className="text-[9px] text-zinc-500 font-mono">
                      {squad.japaneseName}
                    </span>
                  </div>
                  <span className="text-[10px] px-1.5 py-0.5 rounded font-mono font-bold bg-red-950/80 text-red-400 border border-red-900/60">
                    {squadCount}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Squad Showcase Banner */}
        {currentSquadInfo && (
          <div className="p-6 sm:p-8 rounded-2xl border border-red-900/70 bg-gradient-to-r from-[#12060a] via-black to-[#0e0508] relative overflow-hidden backdrop-blur-md shadow-[0_10px_40px_rgba(239,68,68,0.2)]">
            <div className="absolute right-4 bottom-2 text-[100px] sm:text-[140px] opacity-10 pointer-events-none select-none text-red-500">
              {currentSquadInfo.insignia}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
              <div className="md:col-span-8 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl p-2.5 rounded-xl bg-black border border-red-900/80 shadow-md">
                    {currentSquadInfo.insignia}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-clover text-2xl sm:text-3xl font-black text-white">
                        {currentSquadInfo.name}
                      </h3>
                      <span className="text-xs px-2 py-0.5 rounded bg-red-950/80 border border-red-800 text-red-300 font-royal">
                        {currentSquadInfo.japaneseName}
                      </span>
                    </div>
                    <p className="font-gothic text-base sm:text-lg text-red-300 italic">
                      "{currentSquadInfo.motto}"
                    </p>
                  </div>
                </div>

                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed max-w-2xl font-sans">
                  {currentSquadInfo.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono pt-1">
                  <div className="flex items-center gap-1.5 text-zinc-400">
                    <Award className="w-3.5 h-3.5 text-red-400" />
                    <span>Captain:</span>
                    <strong className="text-white font-royal">{currentSquadInfo.captain}</strong>
                  </div>
                  <div className="flex items-center gap-1.5 text-zinc-400">
                    <Star className="w-3.5 h-3.5 text-red-400 fill-red-400" />
                    <span>Merit Stars:</span>
                    <strong className="text-red-300">{currentSquadInfo.stars} Stars</strong>
                  </div>
                </div>
              </div>

              <div className="md:col-span-4 bg-black/80 p-4 rounded-xl border border-red-950 space-y-2">
                <span className="text-xs font-royal uppercase tracking-wider text-red-400 block font-bold">
                  Squad Lore & Record
                </span>
                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  {currentSquadInfo.reputation}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Character Count & Results Info */}
        <div className="flex items-center justify-between text-xs text-zinc-400 font-royal border-b border-red-950/70 pb-3">
          <span>
            Displaying <strong className="text-red-400 font-shonen text-base">{filteredCharacters.length}</strong> Warriors of the Realm
          </span>
          {selectedSquad !== "all" && (
            <button
              onClick={() => setSelectedSquad("all")}
              className="text-red-400 hover:text-red-300 underline cursor-pointer"
            >
              Clear Squad Filter
            </button>
          )}
        </div>

        {/* Characters Grid (Grimoire Plate Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCharacters.map((char) => {
            const squad = squads.find((s) => s.id === char.squadId);
            const isAsta = char.id === "asta" || char.id === "liebe";

            return (
              <div
                key={char.id}
                onClick={() => {
                  soundManager.playGrimoireOpen();
                  setActiveCharacter(char);
                }}
                className={`group relative rounded-2xl bg-[#07050a] border transition-all duration-300 hover:-translate-y-1.5 cursor-pointer overflow-hidden flex flex-col justify-between ${
                  isAsta
                    ? "border-red-600 shadow-[0_0_25px_rgba(239,68,68,0.45)] hover:border-red-400"
                    : "border-red-950/70 hover:border-red-600/80 shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
                }`}
              >
                {/* Red Demon Corner Brackets */}
                <div className="corner-bracket-crimson-tl" />
                <div className="corner-bracket-crimson-br" />

                {/* Top Banner: Squad & Grimoire Leaves */}
                <div className="p-4 pb-2 flex items-center justify-between border-b border-red-950/60 bg-black/60">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm">{squad?.insignia || "⚔️"}</span>
                    <span className="font-royal text-xs font-bold text-zinc-300 truncate max-w-[120px]">
                      {squad?.name || `${char.kingdom} Realm`}
                    </span>
                  </div>

                  <span
                    className={`text-[10px] px-2 py-0.5 rounded font-mono font-bold flex items-center gap-1 ${
                      char.grimoire.leaves === 5
                        ? "bg-red-950/90 text-red-300 border border-red-600 animate-pulse glow-anti-magic-subtle"
                        : char.grimoire.leaves === 4
                        ? "bg-red-950/60 text-amber-300 border border-red-800"
                        : "bg-black border border-zinc-800 text-zinc-300"
                    }`}
                  >
                    <span>{char.grimoire.leaves === 5 ? "☘️" : char.grimoire.leaves === 4 ? "🍀" : "☘"}</span>
                    <span>{char.grimoire.leaves > 0 ? `${char.grimoire.leaves}-Leaf` : "Special"}</span>
                  </span>
                </div>

                {/* Character Portrait & Overlay */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/90">
                  <img
                    src={char.image}
                    alt={char.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07050a] via-black/20 to-transparent" />

                  {/* Magic Knight Rank Badge */}
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between">
                    <span className="text-[10px] px-2.5 py-0.5 rounded-md bg-black/85 backdrop-blur-sm border border-zinc-700/80 text-zinc-300 font-royal">
                      {char.squadRank}
                    </span>
                    <span
                      className="text-[10px] px-2.5 py-0.5 rounded-md font-mono font-bold uppercase tracking-wider shadow-sm"
                      style={{
                        backgroundColor: `${char.themeColor}30`,
                        color: char.themeColor,
                        border: `1px solid ${char.themeColor}70`,
                      }}
                    >
                      {char.magicAttribute.split(" ")[0]}
                    </span>
                  </div>
                </div>

                {/* Character Information */}
                <div className="p-4 space-y-3">
                  <div>
                    <h4 className="font-clover text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                      {char.name}
                    </h4>
                    {char.alias && (
                      <p className="text-[11px] text-zinc-400 font-sans italic truncate">
                        "{char.alias}"
                      </p>
                    )}
                  </div>

                  {/* Signature quote preview */}
                  <p className="text-xs text-zinc-300 italic font-gothic line-clamp-2 border-l-2 border-red-600 pl-2">
                    "{char.quotes[0]}"
                  </p>

                  {/* Combat Stats mini crystals */}
                  <div className="space-y-1 pt-1 border-t border-red-950/60">
                    <div className="flex justify-between text-[10px] font-mono text-zinc-400">
                      <span>Combat Power</span>
                      <span className="text-red-400 font-bold">
                        {Math.round(
                          (char.stats.physicalStrength +
                            char.stats.magicCapacity +
                            char.stats.magicControl +
                            char.stats.speed +
                            char.stats.tenacity) /
                            5
                        )}
                        /100
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-black rounded-full overflow-hidden flex border border-red-950">
                      <div
                        className="h-full bg-gradient-to-r from-red-600 via-rose-500 to-red-400 rounded-full transition-all duration-500"
                        style={{
                          width: `${Math.round(
                            (char.stats.physicalStrength +
                              char.stats.magicCapacity +
                              char.stats.magicControl +
                              char.stats.speed +
                              char.stats.tenacity) /
                              5
                          )}%`,
                        }}
                      />
                    </div>
                  </div>

                  {/* Open Grimoire Profile Button */}
                  <div className="pt-2 flex items-center justify-between text-xs text-red-400 group-hover:text-red-300 font-royal font-bold">
                    <span>Inspect Grimoire & Spells</span>
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Character Profile Modal */}
      <CharacterModal
        character={activeCharacter}
        onClose={() => setActiveCharacter(null)}
      />
    </section>
  );
}
