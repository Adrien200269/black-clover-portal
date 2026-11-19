"use client";

import { Character } from "@/types";
import { soundManager } from "@/lib/soundEffects";
import { X, Shield, Zap, Sparkles, BookOpen, Quote, Gauge, Flame } from "lucide-react";

interface CharacterModalProps {
  character: Character | null;
  onClose: () => void;
}

export default function CharacterModal({ character, onClose }: CharacterModalProps) {
  if (!character) return null;

  const statItems = [
    { label: "Physical Strength", val: character.stats.physicalStrength, color: "from-red-600 to-rose-500", text: "text-red-400" },
    { label: "Mana Capacity", val: character.stats.magicCapacity, color: "from-red-700 to-rose-600", text: "text-red-300" },
    { label: "Magic Control", val: character.stats.magicControl, color: "from-rose-600 to-red-500", text: "text-rose-400" },
    { label: "Combat Speed", val: character.stats.speed, color: "from-red-500 to-rose-400", text: "text-red-400" },
    { label: "Tenacity / Grit", val: character.stats.tenacity, color: "from-red-600 to-amber-500", text: "text-red-400" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto animate-fadeIn">
      {/* Modal Container Styled as an Opened Ancient Grimoire */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#07050a] border-2 border-red-600/80 rounded-2xl shadow-[0_0_60px_rgba(239,68,68,0.4)] p-6 sm:p-8 space-y-6">
        {/* Red Demon Corner Brackets */}
        <div className="corner-bracket-crimson-tl" />
        <div className="corner-bracket-crimson-br" />

        {/* Close Button */}
        <button
          onClick={() => {
            soundManager.playHover();
            onClose();
          }}
          className="absolute top-5 right-5 p-2 rounded-full bg-black border border-red-900 text-zinc-400 hover:text-white hover:border-red-500 transition-all cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Grid: Avatar & Core Information */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div className="md:col-span-5 relative group">
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden border-2 border-red-600/80 shadow-[0_0_30px_rgba(239,68,68,0.5)]">
              <img
                src={character.image}
                alt={character.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="text-xs px-2.5 py-1 rounded-lg bg-black/85 backdrop-blur-sm border border-red-950 text-zinc-300 font-royal">
                  {character.kingdom} Realm
                </span>
                <span
                  className={`text-xs px-2.5 py-1 rounded-lg font-mono font-bold flex items-center gap-1 ${
                    character.grimoire.leaves === 5
                      ? "bg-red-950/90 text-red-300 border border-red-500/80 glow-anti-magic"
                      : character.grimoire.leaves === 4
                      ? "bg-red-950/80 text-amber-300 border border-red-700"
                      : "bg-black text-zinc-200 border border-zinc-700"
                  }`}
                >
                  <span>{character.grimoire.leaves === 5 ? "☘️" : character.grimoire.leaves === 4 ? "🍀" : "☘"}</span>
                  <span>{character.grimoire.leaves > 0 ? `${character.grimoire.leaves}-Leaf Grimoire` : "Ancient Relic"}</span>
                </span>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 space-y-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                {character.squadRank && (
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-black border border-red-900 text-zinc-300 font-royal font-bold">
                    {character.squadRank}
                  </span>
                )}
                <span
                  className="text-xs px-3 py-0.5 rounded-full font-mono font-bold uppercase tracking-wider"
                  style={{
                    backgroundColor: `${character.themeColor}30`,
                    color: character.themeColor,
                    border: `1px solid ${character.themeColor}80`,
                  }}
                >
                  {character.magicAttribute}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-clover">
                {character.name}
              </h2>
              {character.alias && (
                <p className="text-sm font-gothic text-red-400 italic mt-0.5">
                  "{character.alias}"
                </p>
              )}
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
              {character.bio}
            </p>

            {/* Grimoire Lore Box */}
            <div className="p-4 rounded-xl bg-black/60 border border-red-950 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-red-400 uppercase tracking-wider font-royal">
                <BookOpen className="w-3.5 h-3.5 text-red-400" />
                <span>Grimoire Inscription ({character.grimoire.leaves}-Leaf)</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                {character.grimoire.description}
              </p>
              {character.grimoire.origin && (
                <p className="text-[11px] text-zinc-500 font-mono italic">
                  Ancient Origin: {character.grimoire.origin}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Combat Attribute Parameters */}
        <div className="p-5 rounded-xl bg-black/70 border border-red-950 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-400 font-royal">
              <Gauge className="w-4 h-4 text-red-500" />
              <span>Combat Attribute Parameters // 戦闘パラメータ</span>
            </div>
            <span className="text-[10px] text-zinc-500 font-mono">STAGE EVALUATION</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
            {statItems.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-zinc-400">{stat.label}</span>
                  <span className={`font-bold ${stat.text}`}>{stat.val} / 100</span>
                </div>
                <div className="w-full h-2 rounded-full bg-black overflow-hidden border border-red-950">
                  <div
                    className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-500`}
                    style={{ width: `${stat.val}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Signature Spells Compendium */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-400 font-royal">
            <Zap className="w-4 h-4" />
            <span>Signature Spells & Combat Arts // 必殺魔法・戦闘技術</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {character.signatureSpells.map((spell, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-black/60 border border-red-950 hover:border-red-600/80 transition-all space-y-1.5 group"
              >
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-sm font-bold text-white font-clover group-hover:text-red-400 transition-colors">
                    {spell.name}
                  </h4>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-black border border-red-950 text-red-300 font-mono shrink-0">
                    {spell.type}
                  </span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                  {spell.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Iconic Battle Quotes */}
        {character.quotes.length > 0 && (
          <div className="p-4 rounded-xl bg-gradient-to-r from-red-950/60 via-black to-red-950/40 border border-red-900/60 flex items-start gap-3">
            <Quote className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="text-sm italic font-gothic text-red-300">
                "{character.quotes[0]}"
              </p>
              <span className="text-xs text-zinc-500 font-royal">— {character.name}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
