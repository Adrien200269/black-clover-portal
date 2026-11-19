"use client";

import { useState } from "react";
import { squads } from "@/data/squads";
import { characters } from "@/data/characters";
import { Character, SquadId, Kingdom } from "@/types";
import { soundManager } from "@/lib/soundEffects";
import CharacterModal from "./CharacterModal";
import { Shield, Search, Star, Sparkles, Filter, ChevronRight } from "lucide-react";

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
    <section id="squads" className="py-20 relative bg-[#07070c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/40 border border-rose-800/40 text-xs font-mono text-rose-400">
            <Shield className="w-3.5 h-3.5 text-rose-500" />
            <span>CLOVER KINGDOM KNIGHT DIRECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-serif uppercase">
            Squads & Magic Knights
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-sm sm:text-base">
            From the unruly misfits of the Black Bulls to the regal elites of the Golden Dawn,
            explore the warriors defending the continent.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="p-4 sm:p-6 rounded-2xl bg-[#0c0c14] border border-zinc-800 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input
                type="text"
                placeholder="Search knight, magic attribute, or spell..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-700/80 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-rose-500 transition-all"
              />
            </div>

            {/* Kingdom Filter Badges */}
            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
              <span className="text-xs font-mono text-zinc-400 mr-2 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Kingdom:
              </span>
              {(["all", "Clover", "Heart", "Spade", "Diamond"] as const).map((k) => (
                <button
                  key={k}
                  onClick={() => {
                    soundManager.playHover();
                    setSelectedKingdom(k);
                  }}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    selectedKingdom === k
                      ? "bg-rose-600 text-white shadow-md shadow-rose-950/60"
                      : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
                  }`}
                >
                  {k === "all" ? "All Realms" : k}
                </button>
              ))}
            </div>
          </div>

          {/* Squad Horizontal Scroll / Filter Bar */}
          <div className="pt-2 border-t border-zinc-800/80 overflow-x-auto pb-2 flex items-center gap-2">
            <button
              onClick={() => {
                soundManager.playHover();
                setSelectedSquad("all");
              }}
              className={`shrink-0 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedSquad === "all"
                  ? "bg-white text-black shadow-lg"
                  : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
              }`}
            >
              All 9 Squads
            </button>
            {squads.map((squad) => (
              <button
                key={squad.id}
                onClick={() => {
                  soundManager.playGrimoireOpen();
                  setSelectedSquad(squad.id);
                }}
                className={`shrink-0 px-3 py-1.5 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                  selectedSquad === squad.id
                    ? "bg-rose-950 text-rose-300 border border-rose-500 shadow-md shadow-rose-950"
                    : "bg-zinc-900/60 text-zinc-400 hover:text-white border border-zinc-800/80"
                }`}
              >
                <span>{squad.insignia}</span>
                <span>{squad.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Squad Detailed Spotlight Banner */}
        {currentSquadInfo && (
          <div className="p-6 rounded-2xl bg-gradient-to-r from-zinc-950 via-[#100f18] to-zinc-950 border border-rose-900/30 relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-3xl p-2 rounded-xl bg-black border border-zinc-800">
                    {currentSquadInfo.insignia}
                  </span>
                  <div>
                    <h3 className="text-2xl font-black text-white font-serif flex items-center gap-2">
                      {currentSquadInfo.name}
                      <span className="text-xs px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 font-mono font-normal">
                        {currentSquadInfo.japaneseName}
                      </span>
                    </h3>
                    <p className="text-xs text-rose-400 italic">
                      "{currentSquadInfo.motto}"
                    </p>
                  </div>
                </div>
                <p className="text-sm text-zinc-300 max-w-2xl leading-relaxed">
                  {currentSquadInfo.description}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-4 bg-black/60 p-4 rounded-xl border border-zinc-800 font-mono">
                <div>
                  <span className="text-[10px] text-zinc-500 uppercase block">Captain</span>
                  <span className="text-sm font-bold text-zinc-200">{currentSquadInfo.captain}</span>
                </div>
                <div className="h-8 w-px bg-zinc-800" />
                <div className="flex items-center gap-1.5 text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span className="text-lg font-bold">{currentSquadInfo.stars}</span>
                  <span className="text-[10px] text-zinc-500">Stars</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Characters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCharacters.map((character) => (
            <div
              key={character.id}
              onClick={() => {
                soundManager.playGrimoireOpen();
                setActiveCharacter(character);
              }}
              className="group relative bg-[#0d0d16] border border-zinc-800/80 hover:border-rose-600/70 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-950/40 cursor-pointer flex flex-col"
            >
              {/* Image & Badges */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-950">
                <img
                  src={character.image}
                  alt={character.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d16] via-transparent to-transparent" />

                <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-black/80 border border-zinc-700 text-zinc-300 font-mono">
                    {character.kingdom}
                  </span>
                  {character.grimoire.leaves > 0 && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-rose-950/90 border border-rose-600 text-rose-300 font-mono">
                      {character.grimoire.leaves}-Leaf ☘️
                    </span>
                  )}
                </div>

                <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between">
                  <span className="text-xs px-2 py-0.5 rounded bg-zinc-900/90 border border-zinc-700 text-rose-400 font-medium">
                    {character.magicAttribute}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-rose-400 transition-colors font-serif">
                    {character.name}
                  </h3>
                  {character.alias && (
                    <p className="text-xs text-zinc-400 italic line-clamp-1">
                      {character.alias}
                    </p>
                  )}
                </div>

                {/* Stat Preview */}
                <div className="space-y-1.5 pt-2 border-t border-zinc-800/80 text-[11px] font-mono text-zinc-400">
                  <div className="flex justify-between">
                    <span>Power / Strength</span>
                    <span className="text-zinc-200 font-bold">{character.stats.physicalStrength}%</span>
                  </div>
                  <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-rose-500 rounded-full"
                      style={{ width: `${character.stats.physicalStrength}%` }}
                    />
                  </div>
                </div>

                {/* Inspect Button Prompt */}
                <div className="pt-2 flex items-center justify-between text-xs text-rose-400 group-hover:text-rose-300 font-semibold font-mono">
                  <span>Inspect Spellbook</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCharacters.length === 0 && (
          <div className="p-12 text-center rounded-2xl bg-zinc-900/30 border border-zinc-800">
            <p className="text-zinc-400 text-sm">
              No Magic Knights found matching the query "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedSquad("all");
                setSelectedKingdom("all");
              }}
              className="mt-3 px-4 py-1.5 rounded-lg bg-zinc-800 text-xs text-zinc-200 hover:bg-zinc-700"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      <CharacterModal
        character={activeCharacter}
        onClose={() => setActiveCharacter(null)}
      />
    </section>
  );
}
