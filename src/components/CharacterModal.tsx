"use client";

import { Character } from "@/types";
import { soundManager } from "@/lib/soundEffects";
import { X, Shield, Zap, Sparkles, BookOpen, Quote, Gauge } from "lucide-react";

interface CharacterModalProps {
  character: Character | null;
  onClose: () => void;
}

export default function CharacterModal({ character, onClose }: CharacterModalProps) {
  if (!character) return null;

  const statItems = [
    { label: "Physical Strength", val: character.stats.physicalStrength, color: "bg-red-500" },
    { label: "Magic Capacity", val: character.stats.magicCapacity, color: "bg-purple-500" },
    { label: "Magic Control", val: character.stats.magicControl, color: "bg-cyan-500" },
    { label: "Combat Speed", val: character.stats.speed, color: "bg-emerald-500" },
    { label: "Tenacity / Grit", val: character.stats.tenacity, color: "bg-amber-500" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a0a10] border border-zinc-700 rounded-2xl shadow-2xl shadow-rose-950/60 p-6 sm:p-8 space-y-6">
        {/* Close Button */}
        <button
          onClick={() => {
            soundManager.playHover();
            onClose();
          }}
          className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Grid: Avatar & Core Info */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div className="md:col-span-4 relative group">
            <div className="relative aspect-square w-full rounded-xl overflow-hidden border-2 border-rose-600/40 shadow-xl shadow-rose-950/40">
              <img
                src={character.image}
                alt={character.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="text-xs px-2.5 py-1 rounded bg-black/70 border border-zinc-700 text-zinc-300 font-mono">
                  {character.kingdom} Kingdom
                </span>
                <span className="text-xs px-2.5 py-1 rounded bg-rose-900/60 border border-rose-500/50 text-rose-300 font-bold font-mono">
                  {character.grimoire.leaves > 0 ? `${character.grimoire.leaves}-Leaf` : "Special"}
                </span>
              </div>
            </div>
          </div>

          <div className="md:col-span-8 space-y-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                {character.squadRank && (
                  <span className="text-xs px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-zinc-300 font-mono">
                    {character.squadRank}
                  </span>
                )}
                <span className="text-xs px-2 py-0.5 rounded bg-rose-950/60 border border-rose-800 text-rose-400 font-bold">
                  {character.magicAttribute}
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight font-serif">
                {character.name}
              </h2>
              {character.alias && (
                <p className="text-sm font-medium text-rose-400/90 italic mt-0.5">
                  "{character.alias}"
                </p>
              )}
            </div>

            <p className="text-sm text-zinc-300 leading-relaxed">
              {character.bio}
            </p>

            {/* Grimoire Lore Box */}
            <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider font-mono">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Grimoire Manifestation ({character.grimoire.leaves}-Leaf)</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {character.grimoire.description}
              </p>
              {character.grimoire.origin && (
                <p className="text-[11px] text-zinc-500 italic">
                  Origin: {character.grimoire.origin}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Combat Stats Bars */}
        <div className="p-5 rounded-xl bg-zinc-950/60 border border-zinc-800/80 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 font-mono">
            <Gauge className="w-4 h-4 text-rose-500" />
            <span>Combat Attribute Parameters</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
            {statItems.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-zinc-400">{stat.label}</span>
                  <span className="font-bold text-zinc-200">{stat.val} / 100</span>
                </div>
                <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                  <div
                    className={`h-full ${stat.color} transition-all duration-500`}
                    style={{ width: `${stat.val}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Signature Spells Compendium */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400 font-mono">
            <Zap className="w-4 h-4" />
            <span>Signature Spells & Combat Arts</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {character.signatureSpells.map((spell, i) => (
              <div
                key={i}
                className="p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-rose-900/60 transition-all space-y-1"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-zinc-100">{spell.name}</h4>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-zinc-400 font-mono">
                    {spell.type}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {spell.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Iconic Quotes Box */}
        {character.quotes.length > 0 && (
          <div className="p-4 rounded-xl bg-gradient-to-r from-rose-950/30 to-purple-950/30 border border-rose-900/40 flex items-start gap-3">
            <Quote className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="text-sm italic font-medium text-zinc-200">
                "{character.quotes[0]}"
              </p>
              <span className="text-xs text-zinc-500 font-mono">— {character.name}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
