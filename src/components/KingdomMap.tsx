"use client";

import { useState } from "react";
import { kingdoms } from "@/data/kingdoms";
import { Kingdom, KingdomInfo } from "@/types";
import { soundManager } from "@/lib/soundEffects";
import { Compass, Crown, Sparkles, MapPin, ShieldAlert, BookOpen, Flame, Globe } from "lucide-react";

export default function KingdomMap() {
  const [activeKingdomId, setActiveKingdomId] = useState<Kingdom>("Clover");

  const currentKingdom = kingdoms.find((k) => k.id === activeKingdomId) || kingdoms[0];

  const handleSelectKingdom = (id: Kingdom) => {
    soundManager.playHover();
    setActiveKingdomId(id);
  };

  const getKingdomKanji = (id: Kingdom) => {
    switch (id) {
      case "Clover":
        return "クローバー王国";
      case "Heart":
        return "ハート王国";
      case "Spade":
        return "スペード王国";
      case "Diamond":
        return "ダイヤモンド王国";
      default:
        return "王国";
    }
  };

  return (
    <section id="kingdoms" className="py-24 relative bg-[#040407] bg-grimoire-pattern">
      {/* Decorative Kanji Watermark */}
      <div className="absolute top-12 left-10 pointer-events-none select-none text-[80px] sm:text-[140px] font-black text-white/[0.02] tracking-widest font-gothic">
        四大王国
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/50 text-xs font-royal text-cyan-400">
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span>CONTINENTAL CARTOGRAPHY & LORE // 大陸四大勢力</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-clover uppercase drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]">
            The Four Kingdoms
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-sm sm:text-base font-sans">
            Journey across the four sovereign realms that define the balance of magic,
            mana control methods, and continental warfare.
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
                className={`p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer relative overflow-hidden group ${
                  isSelected
                    ? "bg-[#0c0c18] border-rose-500 shadow-[0_0_30px_rgba(225,29,72,0.35)] scale-[1.02]"
                    : "bg-[#07070f] border-zinc-800 hover:border-zinc-700 hover:bg-[#0a0a14]"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl p-2.5 rounded-xl bg-black/70 border border-zinc-800 shadow-inner">
                    {k.crest}
                  </span>
                  <span className="text-[10px] font-mono text-amber-400/90 uppercase tracking-widest font-bold">
                    {getKingdomKanji(k.id)}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors font-clover">
                  {k.name}
                </h3>
                <p className="text-xs text-zinc-400 mt-1 line-clamp-1 font-sans">
                  {k.ruler}
                </p>

                {isSelected && (
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-rose-600 via-amber-400 to-rose-600"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Kingdom Detailed Dossier */}
        <div className="p-6 sm:p-10 rounded-3xl bg-[#080812] border border-rose-950/60 shadow-[0_15px_45px_rgba(0,0,0,0.8)] space-y-8 relative overflow-hidden">
          {/* Grimoire Corner Brackets */}
          <div className="corner-bracket-tl" />
          <div className="corner-bracket-br" />

          {/* Top Info Banner */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            <div className="lg:col-span-8 space-y-5">
              <div className="flex items-center gap-3.5">
                <span className="text-5xl">{currentKingdom.crest}</span>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-3xl sm:text-4xl font-black text-white font-clover tracking-tight">
                      {currentKingdom.name}
                    </h3>
                    <span className="text-xs px-2.5 py-0.5 rounded-md bg-black/60 border border-zinc-700 text-amber-300 font-royal font-bold">
                      {getKingdomKanji(currentKingdom.id)}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-zinc-400 mt-1">
                    Sovereign Capital: <span className="text-zinc-200 font-bold">{currentKingdom.capital}</span>
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-sans">
                {currentKingdom.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-black/50 border border-zinc-800 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase font-royal">
                    <Crown className="w-4 h-4 text-amber-400" />
                    <span>Sovereign Rulers & Leaders</span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed font-sans font-medium">
                    {currentKingdom.ruler}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-black/50 border border-zinc-800 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase font-royal">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span>Guardian Elemental Spirit</span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed font-sans font-medium">
                    {currentKingdom.spirit || "None natively bound"}
                  </p>
                </div>
              </div>
            </div>

            {/* Magic & Military Trait Box */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-black/70 border border-zinc-800/90 space-y-5">
              <div className="space-y-2">
                <span className="text-xs font-royal text-rose-400 font-bold uppercase tracking-wider block">
                  ✦ Magical Characteristics
                </span>
                <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                  {currentKingdom.magicCharacteristics}
                </p>
              </div>

              <div className="h-px bg-zinc-800/90" />

              <div className="space-y-2">
                <span className="text-xs font-royal text-emerald-400 font-bold uppercase tracking-wider block">
                  ✦ Military Doctrine & Knights
                </span>
                <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                  {currentKingdom.militaryTraits}
                </p>
              </div>
            </div>
          </div>

          {/* Key Strategic Locations */}
          <div className="space-y-4 pt-4 border-t border-zinc-800/80 relative z-10">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-amber-400 font-royal">
              <MapPin className="w-4 h-4 text-rose-500" />
              <span>Key Strategic Landmarks & Lore Sites // 歴史的拠点</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {currentKingdom.keyLocations.map((loc, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#06060c] border border-zinc-800/80 hover:border-amber-500/50 transition-all duration-300 space-y-2 flex flex-col justify-between group"
                >
                  <div className="space-y-1.5">
                    <h4 className="text-sm font-bold text-white font-clover group-hover:text-amber-300 transition-colors">
                      {loc.name}
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                      {loc.description}
                    </p>
                  </div>
                  <div className="pt-2.5 border-t border-zinc-800/60">
                    <span className="text-[10px] text-zinc-500 uppercase font-mono block">
                      Historical Significance:
                    </span>
                    <p className="text-[11px] text-rose-300/90 font-medium font-sans">
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
