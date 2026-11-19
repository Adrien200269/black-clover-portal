"use client";

import { soundManager } from "@/lib/soundEffects";
import { Shield, Sparkles, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-rose-950/40 bg-[#040407] text-zinc-400 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Arcane Inscription */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="flex items-center justify-center gap-2 text-rose-500 text-xl">
            <span>☘️</span>
            <span>✦</span>
            <span>☘️</span>
          </div>
          <p className="text-xs sm:text-sm font-serif italic text-zinc-300 leading-relaxed">
            "In the first three leaves reside faith, hope, and love. <br />
            Within the fourth leaf lies good fortune. <br />
            And in the fifth leaf... resides a demon."
          </p>
        </div>

        {/* Middle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-6 border-t border-zinc-900 text-xs">
          <div className="space-y-3 md:col-span-1">
            <span className="text-base font-bold text-white font-serif uppercase tracking-wider block">
              Black Clover Grimoire
            </span>
            <p className="text-zinc-500 leading-relaxed">
              The premier interactive encyclopedia, squad directory, and grimoire archives
              for the Black Clover anime and manga realm.
            </p>
          </div>

          <div className="space-y-2">
            <span className="font-bold text-zinc-200 uppercase font-mono tracking-wider block">
              Sovereign Realms
            </span>
            <ul className="space-y-1.5 text-zinc-400">
              <li><a href="#kingdoms" className="hover:text-rose-400">Clover Kingdom</a></li>
              <li><a href="#kingdoms" className="hover:text-rose-400">Heart Kingdom</a></li>
              <li><a href="#kingdoms" className="hover:text-rose-400">Spade Kingdom</a></li>
              <li><a href="#kingdoms" className="hover:text-rose-400">Diamond Kingdom</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <span className="font-bold text-zinc-200 uppercase font-mono tracking-wider block">
              Magic Knights
            </span>
            <ul className="space-y-1.5 text-zinc-400">
              <li><a href="#squads" className="hover:text-rose-400">Black Bulls Roster</a></li>
              <li><a href="#squads" className="hover:text-rose-400">Golden Dawn Roster</a></li>
              <li><a href="#squads" className="hover:text-rose-400">Wizard King Julius</a></li>
              <li><a href="#quiz" className="hover:text-rose-400">Grimoire Sorting Quiz</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <span className="font-bold text-zinc-200 uppercase font-mono tracking-wider block">
              Arcane Lore
            </span>
            <ul className="space-y-1.5 text-zinc-400">
              <li><a href="#spells" className="hover:text-rose-400">Anti-Magic & Devils</a></li>
              <li><a href="#spells" className="hover:text-rose-400">Mana Zone & True Magic</a></li>
              <li><a href="#episodes" className="hover:text-rose-400">Elf Reincarnation Arc</a></li>
              <li><a href="#episodes" className="hover:text-rose-400">Spade Kingdom Raid</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <p>
            Tribute to Yūki Tabata's masterpiece <em>Black Clover</em>. Built for fellow Magic Knights.
          </p>
          <p className="flex items-center gap-1">
            "Never give up is our magic." <span>⚔️</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
