"use client";

import { soundManager } from "@/lib/soundEffects";
import { Sparkles, Shield, Compass, Flame, ChevronRight, BookOpen, Zap, Sword } from "lucide-react";

interface HeroSectionProps {
  onStartQuiz: () => void;
}

export default function HeroSection({ onStartQuiz }: HeroSectionProps) {
  const astaSwords = [
    {
      name: "Demon-Slayer Sword",
      kanji: "断魔の剣",
      trait: "Giant Cleaver & Black Divider",
      desc: "Massive bludgeoning greatsword that dispels and deflects all magical projectiles.",
    },
    {
      name: "Demon-Dweller Sword",
      kanji: "宿魔の剣",
      trait: "Anti-Magic Wave Projection",
      desc: "Absorbs ambient magic or fires cutting crescent waves of pure Anti-Magic.",
    },
    {
      name: "Demon-Destroyer Sword",
      kanji: "滅魔の剣",
      trait: "Causality Break / Curse Dispel",
      desc: "Severs the cause-and-effect relationship of forbidden spells and ancient curses.",
    },
    {
      name: "Demon-Slasher Katana",
      kanji: "斬魔の刀",
      trait: "Selective Bisection",
      desc: "Yami's katana that cuts only what Asta chooses, leaving comrades untouched.",
    },
  ];

  const cloverLeaves = [
    {
      leaf: 1,
      kanji: "誠実",
      title: "Faith",
      desc: "The unyielding conviction to stand when shattered.",
      color: "border-red-900/60 text-zinc-300 bg-black/60",
      rune: "☘",
    },
    {
      leaf: 2,
      kanji: "希望",
      title: "Hope",
      desc: "The piercing light cutting through the darkest abyss.",
      color: "border-red-900/60 text-zinc-300 bg-black/60",
      rune: "☘",
    },
    {
      leaf: 3,
      kanji: "愛",
      title: "Love",
      desc: "The sacred bond forged between comrades in arms.",
      color: "border-red-900/60 text-zinc-300 bg-black/60",
      rune: "☘",
    },
    {
      leaf: 4,
      kanji: "幸運",
      title: "Good Fortune",
      desc: "The legendary blessing of the Chosen Prodigy.",
      color: "border-red-700/80 text-zinc-200 bg-red-950/20",
      rune: "🍀",
    },
    {
      leaf: 5,
      kanji: "悪魔",
      title: "Demon // Liebe",
      desc: "Where light ceases... forbidden Anti-Magic awakens.",
      color: "border-red-600 text-red-300 bg-red-950/60 shadow-[0_0_25px_rgba(239,68,68,0.5)] glow-anti-magic",
      rune: "☘️",
      demon: true,
    },
  ];

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-36 overflow-hidden bg-gradient-to-b from-[#020205] via-[#09050b] to-[#030306]">
      {/* Background Rotating Anti-Magic Demon Sigil (反魔法の陣) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] sm:w-[950px] sm:h-[950px] pointer-events-none opacity-20">
        <svg
          viewBox="0 0 500 500"
          className="w-full h-full text-red-600 animate-spin-slow"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          {/* Outer circle & demonic runes */}
          <circle cx="250" cy="250" r="235" strokeDasharray="8 6" />
          <circle cx="250" cy="250" r="218" strokeWidth="1" />
          <circle cx="250" cy="250" r="190" strokeWidth="2" />
          {/* Inner Stars / Pentagram */}
          <polygon
            points="250,55 415,355 85,355"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <polygon
            points="250,445 85,145 415,145"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          {/* Inner concentric ring */}
          <circle cx="250" cy="250" r="130" strokeDasharray="12 6" />
          <circle cx="250" cy="250" r="70" strokeWidth="2" />
          {/* Center Demon Eye */}
          <circle cx="250" cy="250" r="20" fill="currentColor" fillOpacity="0.4" />
        </svg>
      </div>

      {/* Reverse inner demonic ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] pointer-events-none opacity-25">
        <svg
          viewBox="0 0 300 300"
          className="w-full h-full text-red-500 animate-spin-reverse-slow"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        >
          <circle cx="150" cy="150" r="135" strokeDasharray="6 8" />
          <polygon points="150,20 270,220 30,220" />
          <polygon points="150,280 30,80 270,80" />
          <circle cx="150" cy="150" r="45" />
        </svg>
      </div>

      {/* Japanese Watermark Background Text */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 pointer-events-none select-none text-[80px] sm:text-[140px] md:text-[200px] font-black text-red-600/[0.04] whitespace-nowrap tracking-widest font-gothic">
        諦めないのがオレの魔法だ
      </div>

      {/* Glowing Demonic Crimson Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-r from-red-600/25 via-rose-900/20 to-red-950/30 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute top-24 left-10 w-72 h-72 bg-red-600/15 blur-[110px] pointer-events-none rounded-full" />
      <div className="absolute top-36 right-10 w-80 h-80 bg-red-700/15 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-7">
          {/* Asta Battle Cry Badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-gradient-to-r from-black via-red-950/80 to-black border border-red-600/70 text-xs text-red-300 shadow-[0_0_25px_rgba(239,68,68,0.5)] animate-pulse-anti-magic">
            <Flame className="w-4 h-4 text-red-500 animate-pulse" />
            <span className="font-shonen text-sm sm:text-base tracking-widest text-red-400">
              「諦めないのがオレの魔法だ！」
            </span>
            <span className="text-zinc-400 hidden sm:inline font-sans text-xs">
              — "My magic is never giving up!"
            </span>
          </div>

          {/* Epic Main Title */}
          <div className="space-y-3">
            <h1 className="font-clover text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase drop-shadow-[0_5px_20px_rgba(0,0,0,0.9)] leading-tight">
              Surpass Your Limits
            </h1>
            <div className="flex items-center justify-center gap-3">
              <span className="hidden md:inline-block h-[1.5px] w-20 bg-gradient-to-r from-transparent to-red-600" />
              <span className="font-gothic text-2xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-red-400 drop-shadow-[0_0_35px_rgba(239,68,68,0.7)]">
                Right Here, Right Now.
              </span>
              <span className="hidden md:inline-block h-[1.5px] w-20 bg-gradient-to-l from-transparent to-red-600" />
            </div>
            <p className="font-royal text-xs sm:text-sm tracking-[0.3em] text-red-400 uppercase">
              黒の暴牛 // 反魔法の悪魔・リーベとの絆
            </p>
          </div>

          {/* Subtitle Lore */}
          <p className="font-sans text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Born without a single drop of magic in a world where power is everything. 
            Wielding the rusted swords of the five-leaf grimoire, Asta rejects fate 
            to carve a path toward the Wizard King throne with pure unyielding grit.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
            <button
              onClick={() => {
                soundManager.playUnlockCeremony();
                onStartQuiz();
              }}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-red-700 via-rose-600 to-red-800 hover:from-red-600 hover:to-rose-500 text-white font-bold text-base shadow-[0_0_40px_rgba(239,68,68,0.7)] border border-red-400/60 flex items-center gap-3 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 cursor-pointer group"
            >
              <Zap className="w-5 h-5 text-red-200 animate-pulse group-hover:rotate-45 transition-transform" />
              <span className="font-shonen text-lg tracking-wider">Awaken Your Grimoire</span>
              <span className="text-xs bg-black/60 px-2 py-0.5 rounded text-red-200 font-mono">
                魔導書授与式
              </span>
              <ChevronRight className="w-4 h-4 text-white/80 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#squads"
              onClick={() => soundManager.playGrimoireOpen()}
              className="px-6 py-4 rounded-xl bg-black/80 hover:bg-red-950/40 border border-red-900/80 hover:border-red-500 text-zinc-200 font-semibold text-sm sm:text-base flex items-center gap-2.5 transition-all cursor-pointer shadow-lg group"
            >
              <Shield className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
              <span className="font-royal">Explore 9 Squads</span>
              <span className="text-[10px] text-zinc-400 font-mono">騎士団</span>
            </a>

            <a
              href="#kingdoms"
              onClick={() => soundManager.playHover()}
              className="px-6 py-4 rounded-xl bg-black/60 hover:bg-red-950/30 border border-zinc-800 hover:border-red-700 text-zinc-300 font-medium text-sm sm:text-base flex items-center gap-2.5 transition-all cursor-pointer shadow-lg group"
            >
              <Compass className="w-5 h-5 text-red-400 group-hover:rotate-45 transition-transform" />
              <span className="font-royal">Four Kingdoms Map</span>
            </a>
          </div>

          {/* Asta's Four Demon Swords Arsenal Banner */}
          <div className="pt-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-[1px] w-12 bg-red-900/60" />
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-red-400 font-royal font-bold">
                <Sword className="w-3.5 h-3.5 text-red-500" />
                <span>Asta's Anti-Magic Arsenal // 四大魔剣</span>
              </div>
              <span className="h-[1px] w-12 bg-red-900/60" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-left">
              {astaSwords.map((sw, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-black/60 border border-red-900/60 hover:border-red-500/80 transition-all duration-300 space-y-1.5 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-royal font-bold text-xs text-white group-hover:text-red-400 transition-colors">
                      {sw.name}
                    </span>
                    <span className="text-[10px] text-red-400 font-mono">
                      {sw.kanji}
                    </span>
                  </div>
                  <span className="text-[11px] text-red-300 font-mono block">
                    ✦ {sw.trait}
                  </span>
                  <p className="text-[11px] text-zinc-400 leading-relaxed font-sans">
                    {sw.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* The Legend of the Clover Leaves Banner */}
          <div className="pt-10">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="h-[1px] w-12 bg-red-900/60" />
              <p className="text-xs uppercase tracking-[0.25em] text-red-400 font-royal font-bold">
                The Legend of the Clover Leaves // クローバーの葉の伝説
              </p>
              <span className="h-[1px] w-12 bg-red-900/60" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 text-left">
              {cloverLeaves.map((item) => (
                <div
                  key={item.leaf}
                  className={`relative p-4 rounded-2xl border backdrop-blur-md transition-all duration-300 hover:scale-105 overflow-hidden ${item.color}`}
                >
                  {/* Demon corner bracket */}
                  <span className="absolute top-1.5 left-2 text-[10px] opacity-40 font-mono text-red-500">✦</span>

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
                  <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                    {item.desc}
                  </p>

                  {item.demon && (
                    <div className="mt-2.5 pt-2 border-t border-red-700/60 flex items-center gap-1 text-[10px] text-red-300 font-mono font-bold">
                      <Zap className="w-3 h-3 text-red-400 animate-pulse" />
                      <span>ANTI-MAGIC RESIDES</span>
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
