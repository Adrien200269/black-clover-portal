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
    <section id="kingdoms" className="py-24 relative bg-[#030306] bg-grimoire-pattern">
      {/* Decorative Kanji Watermark */}
      <div className="absolute top-12 left-10 pointer-events-none select-none text-[80px] sm:text-[140px] font-black text-red-600/[0.03] tracking-widest font-gothic">
        四大王国
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/70 border border-red-800/70 text-xs font-royal text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.3)]">
            <Compass className="w-3.5 h-3.5 text-red-500" />
            <span>CONTINENTAL CARTOGRAPHY & LORE // 大陸四大勢力</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-clover uppercase drop-shadow-[0_2px_15px_rgba(239,68,68,0.4)]">
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
                    ? "bg-[#10070c] border-red-500 shadow-[0_0_30px_rgba(239,68,68,0.45)] scale-[1.02]"
                    : "bg-[#07050a] border-red-950/70 hover:border-red-900 hover:bg-[#0c070f]"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl p-2.5 rounded-xl bg-black border border-red-950 shadow-inner">
                    {k.crest}
                  </span>
                  <span className="text-[10px] font-mono text-red-400 uppercase tracking-widest font-bold">
                    {getKingdomKanji(k.id)}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-red-400 transition-colors font-clover">
                  {k.name}
                </h3>
                <p className="text-xs text-zinc-400 mt-1 line-clamp-1 font-sans">
                  {k.ruler}
                </p>

                {isSelected && (
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-600 via-rose-500 to-red-600" />
                )}
              </button>
            );
          })}
        </div>

        {/* Kingdom Detailed Dossier */}
        <div className="p-6 sm:p-10 rounded-3xl bg-[#07050a] border border-red-950/80 shadow-[0_15px_45px_rgba(0,0,0,0.9)] space-y-8 relative overflow-hidden">
          {/* Red Demon Corner Brackets */}
          <div className="corner-bracket-crimson-tl" />
          <div className="corner-bracket-crimson-br" />

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
                    <span className="text-xs px-2.5 py-0.5 rounded-md bg-black border border-red-900 text-red-300 font-royal font-bold">
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
                <div className="p-4 rounded-xl bg-black/70 border border-red-950 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-red-400 uppercase font-royal">
                    <Crown className="w-4 h-4 text-red-400" />
                    <span>Sovereign Rulers & Leaders</span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed font-sans font-medium">
                    {currentKingdom.ruler}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-black/70 border border-red-950 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-red-400 uppercase font-royal">
                    <Sparkles className="w-4 h-4 text-red-400" />
                    <span>Guardian Elemental Spirit</span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed font-sans font-medium">
                    {currentKingdom.spirit || "None natively bound"}
                  </p>
                </div>
              </div>
            </div>

            {/* Magic & Military Trait Box */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-black/80 border border-red-950 space-y-5">
              <div className="space-y-2">
                <span className="text-xs font-royal text-red-400 font-bold uppercase tracking-wider block">
                  ✦ Magical Characteristics
                </span>
                <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                  {currentKingdom.magicCharacteristics}
                </p>
              </div>

              <div className="h-px bg-red-950" />

              <div className="space-y-2">
                <span className="text-xs font-royal text-red-300 font-bold uppercase tracking-wider block">
                  ✦ Military Doctrine & Knights
                </span>
                <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                  {currentKingdom.militaryTraits}
                </p>
              </div>
            </div>
          </div>

          {/* Key Strategic Locations */}
          <div className="space-y-4 pt-4 border-t border-red-950 relative z-10">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-red-400 font-royal">
              <MapPin className="w-4 h-4 text-red-500" />
              <span>Key Strategic Landmarks & Lore Sites // 歴史的拠点</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {currentKingdom.keyLocations.map((loc, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-black/60 border border-red-950/80 hover:border-red-600/70 transition-all duration-300 space-y-2 flex flex-col justify-between group"
                >
                  <div className="space-y-1.5">
                    <h4 className="text-sm font-bold text-white font-clover group-hover:text-red-400 transition-colors">
                      {loc.name}
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                      {loc.description}
                    </p>
                  </div>
                  <div className="pt-2.5 border-t border-red-950/80">
                    <span className="text-[10px] text-zinc-500 uppercase font-mono block">
                      Historical Significance:
                    </span>
                    <p className="text-[11px] text-red-300 font-medium font-sans">
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
