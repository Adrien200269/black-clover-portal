"use client";

import { soundManager } from "@/lib/soundEffects";
import { Sparkles, Shield, Compass, BookOpen, Flame, ChevronRight } from "lucide-react";

interface HeroSectionProps {
  onStartQuiz: () => void;
}

export default function HeroSection({ onStartQuiz }: HeroSectionProps) {
  const cloverLeaves = [
    { leaf: 1, title: "Faith", desc: "The unshakeable conviction to stand when broken.", color: "border-emerald-600/50 text-emerald-400 bg-emerald-950/20" },
    { leaf: 2, title: "Hope", desc: "The light piercing through the darkest depths.", color: "border-cyan-600/50 text-cyan-400 bg-cyan-950/20" },
    { leaf: 3, title: "Love", desc: "The eternal bond binding comrades and kin.", color: "border-blue-600/50 text-blue-400 bg-blue-950/20" },
    { leaf: 4, title: "Good Fortune", desc: "The legendary blessing of the Chosen Prodigy.", color: "border-amber-500/60 text-amber-300 bg-amber-950/30" },
    { leaf: 5, title: "Demon", desc: "Where light ends, forbidden Anti-Magic stirs.", color: "border-rose-600/80 text-rose-400 bg-rose-950/40 shadow-rose-900/40" },
  ];

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden bg-gradient-to-b from-black via-[#08080f] to-[#050508]">
      {/* Background Arcane Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-r from-rose-600/15 via-purple-700/10 to-amber-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-12 left-10 w-72 h-72 bg-red-600/10 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-emerald-600/10 blur-[110px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Arcane Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/50 border border-rose-500/40 text-xs text-rose-300 shadow-lg shadow-rose-950/40 animate-pulse-subtle">
            <Flame className="w-3.5 h-3.5 text-rose-400" />
            <span className="font-semibold tracking-wide">
              "MY MAGIC IS NEVER GIVING UP!" — ASTA
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white font-serif uppercase">
            Surpass Your Limits <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-red-400 to-amber-400 drop-shadow-[0_0_25px_rgba(239,68,68,0.4)]">
              Right Here, Right Now.
            </span>
          </h1>

          {/* Subtitle Lore */}
          <p className="text-base sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Enter the mythical realm of the Clover Kingdom. Unveil the secrets of the 
            nine Magic Knight squads, master forbidden arcane attributes, and discover 
            which legendary grimoire chooses your soul.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => {
                soundManager.playUnlockCeremony();
                onStartQuiz();
              }}
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 hover:from-rose-500 hover:to-red-500 text-white font-bold text-base shadow-xl shadow-rose-950/80 border border-rose-400/40 flex items-center gap-2.5 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Sparkles className="w-5 h-5 text-amber-300" />
              <span>Awaken Your Grimoire (Quiz)</span>
              <ChevronRight className="w-4 h-4 text-white/80" />
            </button>

            <a
              href="#squads"
              onClick={() => soundManager.playGrimoireOpen()}
              className="px-6 py-3.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700 hover:border-zinc-500 text-zinc-200 font-semibold text-base flex items-center gap-2 transition-all cursor-pointer"
            >
              <Shield className="w-5 h-5 text-rose-400" />
              <span>Explore 9 Squads</span>
            </a>

            <a
              href="#kingdoms"
              onClick={() => soundManager.playHover()}
              className="px-6 py-3.5 rounded-xl bg-zinc-900/60 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-600 text-zinc-300 font-medium text-base flex items-center gap-2 transition-all cursor-pointer"
            >
              <Compass className="w-5 h-5 text-cyan-400" />
              <span>Kingdoms Map</span>
            </a>
          </div>

          {/* Clover Leaves Legend Banner */}
          <div className="pt-10">
            <p className="text-xs uppercase tracking-widest text-zinc-500 font-mono mb-4">
              The Legend of the Clover Leaves
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-left">
              {cloverLeaves.map((item) => (
                <div
                  key={item.leaf}
                  className={`p-3.5 rounded-xl border backdrop-blur-sm transition-all hover:scale-102 ${item.color}`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold uppercase tracking-wider font-mono">
                      Leaf {item.leaf}
                    </span>
                    <span className="text-base">☘️</span>
                  </div>
                  <h4 className="font-bold text-sm text-zinc-100">{item.title}</h4>
                  <p className="text-xs text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="pt-8 border-t border-zinc-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/60">
              <span className="block text-2xl sm:text-3xl font-extrabold text-white font-mono">9</span>
              <span className="text-xs text-zinc-400 uppercase tracking-wider">Magic Knight Squads</span>
            </div>
            <div className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/60">
              <span className="block text-2xl sm:text-3xl font-extrabold text-white font-mono">4</span>
              <span className="text-xs text-zinc-400 uppercase tracking-wider">Ancient Kingdoms</span>
            </div>
            <div className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/60">
              <span className="block text-2xl sm:text-3xl font-extrabold text-white font-mono">170+</span>
              <span className="text-xs text-zinc-400 uppercase tracking-wider">Anime Episodes</span>
            </div>
            <div className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/60">
              <span className="block text-2xl sm:text-3xl font-extrabold text-white font-mono">100+</span>
              <span className="text-xs text-zinc-400 uppercase tracking-wider">Arcane Spells</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
