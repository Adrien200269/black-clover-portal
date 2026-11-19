"use client";

import { useState } from "react";
import { kingdoms } from "@/data/kingdoms";
import { Kingdom, KingdomInfo } from "@/types";
import { soundManager } from "@/lib/soundEffects";
import { Compass, Crown, Sparkles, MapPin, ShieldAlert, BookOpen } from "lucide-react";

export default function KingdomMap() {
  const [activeKingdomId, setActiveKingdomId] = useState<Kingdom>("Clover");

  const currentKingdom = kingdoms.find((k) => k.id === activeKingdomId) || kingdoms[0];

  const handleSelectKingdom = (id: Kingdom) => {
    soundManager.playHover();
    setActiveKingdomId(id);
  };

  return (
    <section id="kingdoms" className="py-20 relative bg-[#050509]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-xs font-mono text-cyan-400">
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span>CONTINENTAL CARTOGRAPHY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-serif uppercase">
            The Four Kingdoms
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-sm sm:text-base">
            Journey across the four sovereign realms that define the magical balance of power.
          </p>
        </div>

        {/* Visual Map Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {kingdoms.map((k) => {
            const isSelected = activeKingdomId === k.id;
            return (
              <button
                key={k.id}
                onClick={() => handleSelectKingdom(k.id)}
                className={`p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer relative overflow-hidden group ${
                  isSelected
                    ? "bg-zinc-900/90 border-rose-500/80 shadow-xl shadow-rose-950/50 scale-[1.02]"
                    : "bg-[#090910] border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/50"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl p-2 rounded-xl bg-black/60 border border-zinc-800">
                    {k.crest}
                  </span>
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                    Realm
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-rose-400 transition-colors font-serif">
                  {k.name}
                </h3>
                <p className="text-xs text-zinc-400 mt-1 line-clamp-1">
                  {k.ruler}
                </p>
                {isSelected && (
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1"
                    style={{ backgroundColor: k.bannerColor }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Kingdom Detailed Dossier */}
        <div className="p-6 sm:p-10 rounded-3xl bg-[#0a0a14] border border-zinc-800/90 space-y-8 relative overflow-hidden">
          {/* Top Info Banner */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{currentKingdom.crest}</span>
                <div>
                  <h3 className="text-3xl font-black text-white font-serif tracking-tight">
                    {currentKingdom.name}
                  </h3>
                  <p className="text-xs font-mono text-zinc-400">
                    Capital: <span className="text-zinc-200">{currentKingdom.capital}</span>
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {currentKingdom.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase font-mono">
                    <Crown className="w-3.5 h-3.5" />
                    <span>Sovereignty & Ruler</span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed font-medium">
                    {currentKingdom.ruler}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase font-mono">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Guardian Spirit / Pacts</span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed font-medium">
                    {currentKingdom.spirit || "None natively bound"}
                  </p>
                </div>
              </div>
            </div>

            {/* Magic & Military Trait Box */}
            <div className="lg:col-span-4 p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800 space-y-4">
              <div className="space-y-1.5">
                <span className="text-xs font-mono text-rose-400 font-bold uppercase tracking-wider block">
                  Magic Characteristic
                </span>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {currentKingdom.magicCharacteristics}
                </p>
              </div>

              <div className="h-px bg-zinc-800" />

              <div className="space-y-1.5">
                <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider block">
                  Military Formation
                </span>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {currentKingdom.militaryTraits}
                </p>
              </div>
            </div>
          </div>

          {/* Key Strategic Locations */}
          <div className="space-y-4 pt-4 border-t border-zinc-800/80">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-zinc-300 font-mono">
              <MapPin className="w-4 h-4 text-rose-500" />
              <span>Key Strategic Landmarks & Lore Sites</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {currentKingdom.keyLocations.map((loc, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/70 hover:border-zinc-700 transition-all space-y-2 flex flex-col justify-between"
                >
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white font-serif">{loc.name}</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {loc.description}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-zinc-800/60">
                    <span className="text-[10px] text-zinc-500 uppercase font-mono block">
                      Historical Significance
                    </span>
                    <p className="text-[11px] text-rose-300/90 font-medium">
                      {loc.significance}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
