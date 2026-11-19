"use client";

import { useState } from "react";
import { magicAttributes } from "@/data/spells";
import { soundManager } from "@/lib/soundEffects";
import { BookOpen, Sparkles, CheckCircle2, AlertTriangle, Zap, Flame, ShieldAlert } from "lucide-react";

export default function GrimoireCompendium() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    { label: "All", kanji: "全属性" },
    { label: "Four Major Elements", kanji: "四大元素" },
    { label: "Irregular / Derivative", kanji: "特殊派生" },
    { label: "Forbidden / Demonic", kanji: "禁術・悪魔" },
    { label: "Arcane Stage", kanji: "冥域" },
  ];

  const filteredAttributes =
    selectedCategory === "All"
      ? magicAttributes
      : magicAttributes.filter((m) => m.category === selectedCategory);

  return (
    <section id="spells" className="py-24 relative bg-[#040408] bg-grimoire-pattern">
      {/* Decorative Kanji Watermark */}
      <div className="absolute top-12 right-12 pointer-events-none select-none text-[80px] sm:text-[140px] font-black text-white/[0.02] tracking-widest font-gothic">
        魔導書大閲覧
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/50 border border-purple-800/50 text-xs font-royal text-purple-300">
            <BookOpen className="w-3.5 h-3.5 text-purple-400" />
            <span>ARCANE ARCHIVES & MAGIC ATTRIBUTES // 魔導書と魔法属性</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-clover uppercase drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]">
            Grimoire & Magic Attributes
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base font-sans">
            From the basic elemental foundation of nature to the mythical <span className="text-purple-400 font-bold">Arcane Stages (冥域)</span> capable of defying natural laws and slaughtering underworld devils.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => {
                soundManager.playHover();
                setSelectedCategory(cat.label);
              }}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                selectedCategory === cat.label
                  ? "bg-gradient-to-r from-rose-700 via-red-600 to-amber-600 text-white shadow-[0_0_20px_rgba(225,29,72,0.5)] border border-amber-300/40 font-bold"
                  : "bg-[#090912] text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700 font-royal"
              }`}
            >
              <span className="font-royal">{cat.label}</span>
              <span className="text-[10px] opacity-75 font-mono bg-black/40 px-1.5 py-0.5 rounded">
                {cat.kanji}
              </span>
            </button>
          ))}
        </div>

        {/* Magic Attributes Grid (Grimoire Spell Tome Pages) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAttributes.map((attr) => (
            <div
              key={attr.id}
              className="p-6 rounded-2xl bg-[#080812] border border-zinc-800/80 hover:border-zinc-600 transition-all duration-300 flex flex-col justify-between space-y-5 hover:shadow-[0_10px_35px_rgba(0,0,0,0.8)] group relative overflow-hidden"
              style={{
                borderLeftWidth: "4px",
                borderLeftColor: attr.color,
              }}
            >
              {/* Corner Bracket */}
              <div className="corner-bracket-tl" />

              {/* Header */}
              <div className="space-y-3.5 relative z-10">
                <div className="flex items-center justify-between">
                  <span
                    className="text-[10px] font-bold px-2.5 py-0.5 rounded-full font-mono uppercase tracking-wider shadow-sm"
                    style={{
                      backgroundColor: `${attr.color}20`,
                      color: attr.color,
                      border: `1px solid ${attr.color}60`,
                    }}
                  >
                    ★ {attr.rarity}
                  </span>
                  <span className="text-xs text-amber-400/80 font-royal font-bold">
                    {attr.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors font-clover">
                    {attr.name}
                  </h3>
                  <p className="text-xs text-zinc-300 mt-1.5 leading-relaxed font-sans">
                    {attr.description}
                  </p>
                </div>
              </div>

              {/* Notable Users */}
              <div className="space-y-2 relative z-10">
                <span className="text-[10px] font-royal uppercase tracking-wider text-zinc-400 block font-bold">
                  Prominent Casters & Knights:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {attr.users.map((u, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 rounded-lg bg-black/60 border border-zinc-800 text-zinc-200 font-royal font-semibold"
                    >
                      {u}
                    </span>
                  ))}
                </div>
              </div>

              {/* Strengths & Weaknesses Breakdown */}
              <div className="space-y-2.5 pt-3 border-t border-zinc-800/80 text-xs relative z-10 font-sans">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-emerald-400 font-mono text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>TACTICAL COMBAT ADVANTAGES:</span>
                  </div>
                  <ul className="text-zinc-300 text-[11px] space-y-0.5 pl-5 list-disc marker:text-emerald-500">
                    {attr.strengths.slice(0, 2).map((s, idx) => (
                      <li key={idx}>{s}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-1 pt-1">
                  <div className="flex items-center gap-1.5 font-bold text-rose-400 font-mono text-[11px]">
                    <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                    <span>COUNTERMEASURES & LIMITS:</span>
                  </div>
                  <ul className="text-zinc-300 text-[11px] space-y-0.5 pl-5 list-disc marker:text-rose-500">
                    {attr.weaknesses.slice(0, 2).map((w, idx) => (
                      <li key={idx}>{w}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Notable Spells List */}
              <div className="pt-3 border-t border-zinc-800/80 relative z-10">
                <span className="text-[10px] font-royal uppercase tracking-wider text-amber-400/90 block mb-2 font-bold">
                  Grimoire Spell Inscriptions:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {attr.notableSpells.map((sp, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] px-2.5 py-1 rounded-md bg-black/50 border border-zinc-800 text-zinc-300 font-mono"
                    >
                      ✦ {sp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
