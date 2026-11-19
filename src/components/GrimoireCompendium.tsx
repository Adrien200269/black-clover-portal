"use client";

import { useState } from "react";
import { magicAttributes } from "@/data/spells";
import { soundManager } from "@/lib/soundEffects";
import { BookOpen, Sparkles, CheckCircle2, AlertTriangle, Zap, ShieldAlert } from "lucide-react";

export default function GrimoireCompendium() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Four Major Elements",
    "Irregular / Derivative",
    "Forbidden / Demonic",
    "Arcane Stage",
  ];

  const filteredAttributes =
    selectedCategory === "All"
      ? magicAttributes
      : magicAttributes.filter((m) => m.category === selectedCategory);

  return (
    <section id="spells" className="py-20 relative bg-[#07070d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-800/40 text-xs font-mono text-purple-400">
            <BookOpen className="w-3.5 h-3.5 text-purple-400" />
            <span>ARCANE ARCHIVES & ATTRIBUTE SYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-serif uppercase">
            Grimoire & Magic Attributes
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-sm sm:text-base">
            From the basic elemental foundation of mana to the mythical Arcane Stages capable
            of defying the natural order and slaying underworld devils.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                soundManager.playHover();
                setSelectedCategory(cat);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-rose-600 text-white shadow-lg shadow-rose-950/60"
                  : "bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Magic Attributes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAttributes.map((attr) => (
            <div
              key={attr.id}
              className="p-6 rounded-2xl bg-[#0b0b14] border border-zinc-800 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between space-y-5 hover:shadow-xl group"
            >
              {/* Header */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span
                    className="text-[10px] font-bold px-2.5 py-0.5 rounded-full font-mono uppercase"
                    style={{
                      backgroundColor: `${attr.color}20`,
                      color: attr.color,
                      border: `1px solid ${attr.color}50`,
                    }}
                  >
                    {attr.rarity}
                  </span>
                  <span className="text-xs text-zinc-500 font-mono">
                    {attr.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-rose-400 transition-colors font-serif">
                    {attr.name}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    {attr.description}
                  </p>
                </div>
              </div>

              {/* Notable Users */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">
                  Prominent Casters
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {attr.users.map((u, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium"
                    >
                      {u}
                    </span>
                  ))}
                </div>
              </div>

              {/* Strengths & Weaknesses Breakdown */}
              <div className="space-y-2 pt-3 border-t border-zinc-800/80 text-xs">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-emerald-400 font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Tactical Advantages</span>
                  </div>
                  <ul className="text-zinc-400 text-[11px] space-y-0.5 pl-5 list-disc marker:text-emerald-500">
                    {attr.strengths.slice(0, 2).map((s, idx) => (
                      <li key={idx}>{s}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-1 pt-1">
                  <div className="flex items-center gap-1.5 font-bold text-rose-400 font-mono">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Countermeasures</span>
                  </div>
                  <ul className="text-zinc-400 text-[11px] space-y-0.5 pl-5 list-disc marker:text-rose-500">
                    {attr.weaknesses.slice(0, 2).map((w, idx) => (
                      <li key={idx}>{w}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Notable Spells List */}
              <div className="pt-3 border-t border-zinc-800/80">
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-1.5">
                  Legendary Spell Records
                </span>
                <div className="flex flex-wrap gap-1">
                  {attr.notableSpells.map((sp, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] px-2 py-0.5 rounded bg-zinc-900/60 border border-zinc-800 text-zinc-300"
                    >
                      {sp}
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
