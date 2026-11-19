"use client";

import { soundManager } from "@/lib/soundEffects";
import { Shield, Sparkles, Flame, Sword, BookOpen, Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-red-950/80 bg-[#020205] text-zinc-400 py-16 relative overflow-hidden bg-grimoire-pattern">
      {/* Top ornamental Anti-Magic line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-red-600 to-transparent shadow-[0_0_15px_rgba(239,68,68,0.8)] mb-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        {/* Top Arcane Inscription */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-3 text-2xl">
            <span className="text-red-900">☘</span>
            <span className="text-red-700">🍀</span>
            <span className="text-red-500 text-4xl drop-shadow-[0_0_15px_rgba(239,68,68,1)] animate-pulse">☘️</span>
            <span className="text-red-700">🍀</span>
            <span className="text-red-900">☘</span>
          </div>

          <p className="text-base sm:text-lg font-gothic italic text-red-200/95 leading-relaxed">
            "In the first three leaves reside faith, hope, and love. <br />
            Within the fourth leaf lies good fortune. <br />
            And in the fifth leaf... resides a demon."
          </p>
          <span className="text-[11px] font-royal uppercase tracking-[0.25em] text-red-400/90 block font-bold">
            五つ葉の魔導書 // The Legend of the Five-Leaf Grimoire & Liebe
          </span>
        </div>

        {/* Middle Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-8 border-t border-red-950 text-xs">
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <span className="text-lg font-black text-white font-clover uppercase tracking-wider block drop-shadow-[0_2px_10px_rgba(239,68,68,0.4)]">
                Black Clover
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-950 border border-red-700 text-red-300">
                反魔法
              </span>
            </div>
            <p className="text-zinc-500 leading-relaxed font-sans">
              The premier interactive encyclopedia, 27 Magic Knights roster, and anti-magic spell archives for the Black Clover anime & manga universe.
            </p>
          </div>

          <div className="space-y-2.5">
            <span className="font-bold text-zinc-200 uppercase font-royal tracking-wider block">
              Sovereign Realms (四大王国)
            </span>
            <ul className="space-y-2 text-zinc-400 font-sans">
              <li><a href="#kingdoms" className="hover:text-red-400 transition-colors">☘️ Clover Kingdom (Royal Capital)</a></li>
              <li><a href="#kingdoms" className="hover:text-red-400 transition-colors">💖 Heart Kingdom (Queen Loropechika)</a></li>
              <li><a href="#kingdoms" className="hover:text-red-400 transition-colors">♠️ Spade Kingdom (Dark Triad)</a></li>
              <li><a href="#kingdoms" className="hover:text-red-400 transition-colors">♦️ Diamond Kingdom (Magitech Realm)</a></li>
            </ul>
          </div>

          <div className="space-y-2.5">
            <span className="font-bold text-zinc-200 uppercase font-royal tracking-wider block">
              Magic Knights (魔法騎士団)
            </span>
            <ul className="space-y-2 text-zinc-400 font-sans">
              <li><a href="#squads" className="hover:text-red-400 transition-colors">🐂 Black Bulls (Asta, Liebe, Yami)</a></li>
              <li><a href="#squads" className="hover:text-red-400 transition-colors">☀️ Golden Dawn (Yuno, William)</a></li>
              <li><a href="#squads" className="hover:text-red-400 transition-colors">🦅 Silver Eagles (Nozel Silva)</a></li>
              <li><a href="#quiz" className="hover:text-red-400 transition-colors">✨ Grimoire Sorting Ceremony Trial</a></li>
            </ul>
          </div>

          <div className="space-y-2.5">
            <span className="font-bold text-zinc-200 uppercase font-royal tracking-wider block">
              Arcane Lore & Systems
            </span>
            <ul className="space-y-2 text-zinc-400 font-sans">
              <li><a href="#spells" className="hover:text-red-400 transition-colors">⚔️ Anti-Magic & Devil Union</a></li>
              <li><a href="#spells" className="hover:text-red-400 transition-colors">🔮 Arcane Stage Magic (冥域)</a></li>
              <li><a href="#episodes" className="hover:text-red-400 transition-colors">📺 Anime Episodes & Film Guide</a></li>
              <li><a href="#episodes" className="hover:text-red-400 transition-colors">⭐ Magic Knight Merit Stars</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & battle motto */}
        <div className="pt-8 border-t border-red-950/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-royal text-zinc-500">
          <p>© Yuki Tabata / Shueisha, TV Tokyo, Black Clover Project. Fan-made interactive compendium.</p>
          <div className="flex items-center gap-2 text-red-400 font-bold">
            <Flame className="w-3.5 h-3.5 text-red-500 animate-pulse" />
            <span className="font-shonen text-sm tracking-wider">諦めないのがオレの魔法だ！ // NEVER GIVE UP!</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
