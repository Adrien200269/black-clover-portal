"use client";

import { soundManager } from "@/lib/soundEffects";
import { Sparkles, Shield, Compass, Flame, ChevronRight, BookOpen, Zap } from "lucide-react";

interface HeroSectionProps {
  onStartQuiz: () => void;
}

export default function HeroSection({ onStartQuiz }: HeroSectionProps) {
  const cloverLeaves = [
    {
      leaf: 1,
      kanji: "誠実",
      title: "Faith",
      desc: "The unyielding conviction to rise when crushed.",
      color: "border-emerald-600/60 text-emerald-300 bg-emerald-950/30 shadow-emerald-950/40",
      rune: "☘",
    },
    {
      leaf: 2,
      kanji: "希望",
      title: "Hope",
      desc: "The piercing light dispelling despair's abyss.",
      color: "border-cyan-600/60 text-cyan-300 bg-cyan-950/30 shadow-cyan-950/40",
      rune: "☘",
    },
    {
      leaf: 3,
      kanji: "愛",
      title: "Love",
      desc: "The sacred bond forged between comrades in arms.",
      color: "border-blue-600/60 text-blue-300 bg-blue-950/30 shadow-blue-950/40",
      rune: "☘",
    },
    {
      leaf: 4,
      kanji: "幸運",
      title: "Good Fortune",
      desc: "The blessing of the chosen prodigy & the 1st Wizard King.",
      color: "border-amber-500/70 text-amber-200 bg-amber-950/40 shadow-amber-900/50 glow-clover-gold",
      rune: "🍀",
      highlight: true,
    },
    {
      leaf: 5,
      kanji: "悪魔",
      title: "Demon",
      desc: "Where light ceases... forbidden Anti-Magic stirs.",
      color: "border-rose-600/90 text-rose-300 bg-rose-950/50 shadow-rose-950/60 glow-anti-magic",
      rune: "☘️",
      demon: true,
    },
  ];

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-36 overflow-hidden bg-gradient-to-b from-[#030306] via-[#08070e] to-[#040407]">
      {/* Background Magic Circle (魔方陣) SVG */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] sm:w-[950px] sm:h-[950px] pointer-events-none opacity-15">
        <svg
          viewBox="0 0 500 500"
          className="w-full h-full text-rose-500 animate-spin-slow"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        >
          {/* Outer circle & runes */}
          <circle cx="250" cy="250" r="230" strokeDasharray="6 4" />
          <circle cx="250" cy="250" r="215" strokeWidth="0.8" />
          <circle cx="250" cy="250" r="190" strokeWidth="1.5" />
          {/* Inner Stars / Pentagram / Hexagram */}
          <polygon
            points="250,60 415,355 85,355"
            stroke="currentColor"
            strokeWidth="1"
          />
          <polygon
            points="250,440 85,145 415,145"
            stroke="currentColor"
            strokeWidth="1"
          />
          {/* Inner concentric ring */}
          <circle cx="250" cy="250" r="130" strokeDasharray="10 6" />
          <circle cx="250" cy="250" r="70" strokeWidth="1.5" />
          {/* Center Clover */}
          <circle cx="250" cy="250" r="15" fill="currentColor" fillOpacity="0.2" />
        </svg>
      </div>

      {/* Reverse inner magic ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] pointer-events-none opacity-20">
        <svg
          viewBox="0 0 300 300"
          className="w-full h-full text-amber-500 animate-spin-reverse-slow"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <circle cx="150" cy="150" r="135" strokeDasharray="4 8" />
          <polygon points="150,20 270,220 30,220" />
          <polygon points="150,280 30,80 270,80" />
          <circle cx="150" cy="150" r="45" />
        </svg>
      </div>

      {/* Japanese Watermark Background Text */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 pointer-events-none select-none text-[80px] sm:text-[140px] md:text-[200px] font-black text-white/[0.025] whitespace-nowrap tracking-widest font-gothic">
        限界を超えろ
      </div>

      {/* Glowing Mana Radiance Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[400px] bg-gradient-to-r from-rose-600/20 via-red-900/15 to-amber-500/15 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-24 left-10 w-72 h-72 bg-red-600/10 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute top-36 right-10 w-80 h-80 bg-amber-500/10 blur-[110px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-7">
          {/* Anime Battle Cry Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-rose-950/80 via-black to-amber-950/60 border border-rose-500/50 text-xs text-rose-300 shadow-xl shadow-rose-950/50 animate-pulse-mana">
            <Flame className="w-4 h-4 text-rose-400" />
            <span className="font-shonen text-sm sm:text-base tracking-widest text-amber-300">
              「まだだ、まだ終わってねぇ！」
            </span>
            <span className="text-zinc-400 hidden sm:inline font-sans text-xs">
              — "My magic is never giving up!"
            </span>
          </div>

          {/* Epic Main Title */}
          <div className="space-y-3">
            <h1 className="font-clover text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase drop-shadow-[0_5px_15px_rgba(0,0,0,0.9)] leading-tight">
              Surpass Your Limits
            </h1>
            <div className="flex items-center justify-center gap-3">
              <span className="hidden md:inline-block h-[1px] w-16 bg-gradient-to-r from-transparent to-rose-500" />
              <span className="font-gothic text-2xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-red-400 to-amber-300 drop-shadow-[0_0_30px_rgba(239,68,68,0.5)]">
                Right Here, Right Now.
              </span>
              <span className="hidden md:inline-block h-[1px] w-16 bg-gradient-to-l from-transparent to-amber-500" />
            </div>
            <p className="font-royal text-xs sm:text-sm tracking-[0.3em] text-amber-400/80 uppercase">
              黒の暴牛 // 限界を超えろ・魔法帝への道
            </p>
          </div>

          {/* Subtitle Lore */}
          <p className="font-sans text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Welcome to the Clover Kingdom fan archive. Step into the realm of Magic Knights, 
            master forbidden Arcane stages, explore the continental kingdoms, and discover 
            which legendary grimoire chooses your destiny.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => {
                soundManager.playUnlockCeremony();
                onStartQuiz();
              }}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-rose-700 via-red-600 to-amber-600 hover:from-rose-600 hover:to-amber-500 text-white font-bold text-base shadow-[0_0_35px_rgba(225,29,72,0.6)] border border-amber-300/40 flex items-center gap-3 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 cursor-pointer group"
            >
              <Sparkles className="w-5 h-5 text-amber-300 animate-spin-slow group-hover:rotate-45 transition-transform" />
              <span className="font-shonen text-lg tracking-wider">Awaken Your Grimoire</span>
              <span className="text-xs bg-black/40 px-2 py-0.5 rounded text-amber-200 font-mono">
                魔導書授与式
              </span>
              <ChevronRight className="w-4 h-4 text-white/80 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#squads"
              onClick={() => soundManager.playGrimoireOpen()}
              className="px-6 py-4 rounded-xl bg-zinc-900/90 hover:bg-zinc-800/90 border border-zinc-700 hover:border-amber-500/60 text-zinc-200 font-semibold text-sm sm:text-base flex items-center gap-2.5 transition-all cursor-pointer shadow-lg group"
            >
              <Shield className="w-5 h-5 text-rose-500 group-hover:scale-110 transition-transform" />
              <span className="font-royal">Explore 9 Squads</span>
              <span className="text-[10px] text-zinc-500 font-mono">騎士団</span>
            </a>

            <a
              href="#kingdoms"
              onClick={() => soundManager.playHover()}
              className="px-6 py-4 rounded-xl bg-zinc-950/70 hover:bg-zinc-900 border border-zinc-800 hover:border-cyan-500/60 text-zinc-300 font-medium text-sm sm:text-base flex items-center gap-2.5 transition-all cursor-pointer shadow-lg group"
            >
              <Compass className="w-5 h-5 text-cyan-400 group-hover:rotate-45 transition-transform" />
              <span className="font-royal">Four Kingdoms Map</span>
            </a>
          </div>

          {/* The Legend of the Clover Leaves Banner */}
          <div className="pt-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-[1px] w-12 bg-zinc-700" />
              <p className="text-xs uppercase tracking-[0.25em] text-amber-400/90 font-royal font-bold">
                The Legend of the Clover Leaves // クローバーの葉の伝説
              </p>
              <span className="h-[1px] w-12 bg-zinc-700" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 text-left">
              {cloverLeaves.map((item) => (
                <div
                  key={item.leaf}
                  className={`relative p-4 rounded-2xl border backdrop-blur-md transition-all duration-300 hover:scale-105 overflow-hidden ${item.color}`}
                >
                  {/* Subtle corner bracket */}
                  <span className="absolute top-1.5 left-2 text-[10px] opacity-40 font-mono">✦</span>

                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-shonen text-white tracking-wider">
                        LEAF {item.leaf}
                      </span>
                      <span className="text-xs font-royal opacity-70">
                        {item.kanji}
                      </span>
                    </div>
                    <span className="text-lg">{item.rune}</span>
                  </div>

                  <h3 className="font-clover text-base font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-300/90 leading-relaxed font-sans">
                    {item.desc}
                  </p>

                  {item.demon && (
                    <div className="mt-2.5 pt-2 border-t border-rose-800/50 flex items-center gap-1 text-[10px] text-rose-300 font-mono">
                      <Zap className="w-3 h-3 text-rose-400" />
                      <span>ANTI-MAGIC RESIDES</span>
                    </div>
                  )}

                  {item.highlight && (
                    <div className="mt-2.5 pt-2 border-t border-amber-600/40 flex items-center gap-1 text-[10px] text-amber-300 font-mono">
                      <Sparkles className="w-3 h-3 text-amber-300" />
                      <span>WIZARD KING'S BLESSING</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
