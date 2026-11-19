"use client";

import { useState } from "react";
import { quizQuestions } from "@/data/quizData";
import { squads } from "@/data/squads";
import { characters } from "@/data/characters";
import { Squad, SquadId } from "@/types";
import { soundManager } from "@/lib/soundEffects";
import confetti from "canvas-confetti";
import { Sparkles, RefreshCw, Award, Shield, Check, Flame, Share2, BookOpen, Star } from "lucide-react";

export default function SquadQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isFinished, setIsFinished] = useState(false);
  const [result, setResult] = useState<{
    squad: Squad;
    grimoireLeaf: 3 | 4 | 5;
    characterMatch: string;
    magicType: string;
    title: string;
    evaluation: string;
  } | null>(null);

  const handleSelectOption = (optionIndex: number) => {
    soundManager.playHover();
    const nextAnswers = [...answers, optionIndex];
    setAnswers(nextAnswers);

    if (currentStep < quizQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateResult(nextAnswers);
    }
  };

  const calculateResult = (userAnswers: number[]) => {
    const squadScores: Record<SquadId, number> = {
      "black-bulls": 0,
      "golden-dawn": 0,
      "silver-eagles": 0,
      "crimson-lion-kings": 0,
      "blue-rose": 0,
      "green-mantis": 0,
      "coral-peacocks": 0,
      "aqua-deer": 0,
      "purple-orcas": 0,
    };

    let bonus5Leaf = 0;
    let bonus4Leaf = 0;

    userAnswers.forEach((ansIndex, qIndex) => {
      const q = quizQuestions[qIndex];
      const selected = q.options[ansIndex];
      if (selected) {
        squadScores[selected.squadBias] = (squadScores[selected.squadBias] || 0) + 1;
        if (selected.grimoireBonus === "5-leaf") bonus5Leaf++;
        if (selected.grimoireBonus === "4-leaf") bonus4Leaf++;
      }
    });

    // Determine top squad
    let topSquadId: SquadId = "black-bulls";
    let maxScore = -1;
    for (const [id, score] of Object.entries(squadScores)) {
      if (score > maxScore) {
        maxScore = score;
        topSquadId = id as SquadId;
      }
    }

    const squad = squads.find((s) => s.id === topSquadId) || squads[0];

    // Determine Grimoire Leaf
    let grimoireLeaf: 3 | 4 | 5 = 3;
    if (bonus5Leaf >= 2) {
      grimoireLeaf = 5;
    } else if (bonus4Leaf >= 2) {
      grimoireLeaf = 4;
    }

    // Determine character match & magic type
    let characterMatch = "Asta";
    let magicType = "Anti-Magic / Demonic Void";
    let title = "The Unyielding Limit Breaker (反魔法の戦士)";
    let evaluation = "You spit in the face of destiny and forge your own legacy through relentless grit, iron will, and unbreakable bonds.";

    if (topSquadId === "golden-dawn") {
      characterMatch = "Yuno Grinberryall";
      magicType = "Wind & Celestial Star Magic (風魔法・星魔法)";
      title = "The Chosen Sovereign Prodigy (選ばれし天才)";
      evaluation = "Blessed with celestial mana control and majestic pride, you effortlessly surpass the expectations of royals and gods.";
    } else if (topSquadId === "silver-eagles") {
      characterMatch = "Nozel Silva";
      magicType = "Liquid Mercury Manipulation (水銀魔法)";
      title = "The Regal Vanguard of Honor (王族の誇り)";
      evaluation = "You value aristocratic discipline, lethal tactical composure, and safeguarding your comrades with razor-sharp nobility.";
    } else if (topSquadId === "crimson-lion-kings") {
      characterMatch = "Mereoleona Vermillion";
      magicType = "Wildfire Incarnate (紅蓮の業火)";
      title = "The Undefeated Savage Lioness (無敗の豪炎)";
      evaluation = "Your passion incinerates all doubts. You settle conflicts with overwhelming spirit, burning instincts, and fiery fists.";
    } else if (topSquadId === "blue-rose") {
      characterMatch = "Charlotte Roselei";
      magicType = "Briar & Thorns (荊魔法)";
      title = "The Unshakable Shield of Grace (青き薔薇の淑女)";
      evaluation = "Steadfast, uncompromising, and fiercely loyal to the comrades who bleed beside you.";
    }

    setResult({
      squad,
      grimoireLeaf,
      characterMatch,
      magicType,
      title,
      evaluation,
    });
    setIsFinished(true);

    // Audio & Confetti burst
    soundManager.playUnlockCeremony();
    try {
      confetti({
        particleCount: 120,
        spread: 90,
        origin: { y: 0.6 },
        colors: ["#e11d48", "#f59e0b", "#10b981", "#06b6d4", "#8b5cf6"],
      });
    } catch {
      // ignore
    }
  };

  const resetQuiz = () => {
    soundManager.playHover();
    setCurrentStep(0);
    setAnswers([]);
    setIsFinished(false);
    setResult(null);
  };

  const currentQ = quizQuestions[currentStep];

  return (
    <section id="quiz" className="py-24 relative bg-gradient-to-b from-[#040408] via-[#090712] to-black bg-grimoire-pattern">
      {/* Decorative Kanji Watermark */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 pointer-events-none select-none text-[80px] sm:text-[140px] font-black text-white/[0.025] tracking-widest font-gothic whitespace-nowrap">
        魔導書授与式
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950/60 border border-rose-600/50 text-xs font-royal text-rose-300 shadow-lg shadow-rose-950/50">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
            <span>THE GRIMOIRE ACCEPTANCE CEREMONY // 魔導書授与の儀</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-clover uppercase drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]">
            Which Grimoire & Squad Choose You?
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-sm sm:text-base font-sans">
            Answer 5 high-stakes battle scenarios to determine which grimoire awakens to your soul,
            your Magic Knight squad assignment, and your kindred spirit warrior.
          </p>
        </div>

        {/* Quiz Body */}
        {!isFinished ? (
          <div className="p-6 sm:p-10 rounded-3xl bg-[#080812] border border-rose-950/70 shadow-[0_20px_50px_rgba(0,0,0,0.9)] space-y-7 relative overflow-hidden">
            {/* Grimoire Corner Brackets */}
            <div className="corner-bracket-tl" />
            <div className="corner-bracket-br" />

            {/* Step Progress Bar */}
            <div className="space-y-2 relative z-10">
              <div className="flex justify-between text-xs font-royal text-zinc-400">
                <span className="font-bold">Trial 0{currentStep + 1} of 0{quizQuestions.length}</span>
                <span className="text-amber-400 font-mono font-bold">
                  {Math.round(((currentStep + 1) / quizQuestions.length) * 100)}% Resonating
                </span>
              </div>
              <div className="w-full h-2.5 bg-black/80 border border-zinc-800 rounded-full overflow-hidden p-0.5">
                <div
                  className="h-full bg-gradient-to-r from-rose-600 via-amber-500 to-rose-500 rounded-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / quizQuestions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Prompt */}
            <div className="space-y-2 pt-2 relative z-10">
              <span className="text-xs text-amber-400 font-royal font-bold block uppercase tracking-wider">
                Combat Scenario: "{currentQ.scenario}"
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-clover leading-snug">
                {currentQ.question}
              </h3>
            </div>

            {/* Options List */}
            <div className="space-y-3 pt-2 relative z-10">
              {currentQ.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  className="w-full p-4 sm:p-5 rounded-2xl bg-black/50 hover:bg-[#120a16] border border-zinc-800/90 hover:border-amber-500/60 text-left transition-all duration-200 group flex items-start gap-4 cursor-pointer"
                >
                  <span className="w-7 h-7 rounded-xl bg-zinc-900 border border-zinc-700 group-hover:bg-gradient-to-r group-hover:from-rose-600 group-hover:to-amber-500 text-xs font-mono font-bold text-zinc-300 group-hover:text-white flex items-center justify-center shrink-0 mt-0.5 transition-all shadow-sm">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <div className="space-y-1">
                    <p className="text-sm sm:text-base text-zinc-200 group-hover:text-white font-medium leading-relaxed font-sans">
                      {option.text}
                    </p>
                    <span className="text-xs text-zinc-400 italic font-gothic block group-hover:text-amber-300/90 transition-colors">
                      "{option.flavorQuote}"
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* Result Card Ceremony */
          result && (
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#140a16] via-[#090812] to-black border-2 border-rose-500/70 shadow-[0_0_60px_rgba(225,29,72,0.4)] space-y-8 animate-fadeIn text-center relative overflow-hidden">
              {/* Grimoire Corner Brackets */}
              <div className="corner-bracket-crimson-tl" />
              <div className="corner-bracket-crimson-br" />

              <div className="space-y-3 relative z-10">
                <span className="text-xs font-royal uppercase tracking-[0.25em] text-amber-400 font-bold block">
                  ★ THE TOWER MASTER HAS BESTOWED YOUR GRIMOIRE ★
                </span>
                <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-clover uppercase tracking-tight drop-shadow-[0_2px_20px_rgba(225,29,72,0.6)]">
                  Welcome to the {result.squad.name}!
                </h3>
                <p className="text-base font-gothic text-amber-300 italic">
                  "{result.squad.motto}"
                </p>
              </div>

              {/* Ceremony Badge Display */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto pt-2 relative z-10">
                <div className="p-5 rounded-2xl bg-black/60 border border-rose-900/60 space-y-1.5 shadow-xl">
                  <span className="text-[10px] uppercase font-royal text-zinc-400 font-bold block">
                    Awakened Grimoire
                  </span>
                  <span className="text-2xl font-black text-white font-clover flex items-center justify-center gap-1.5">
                    {result.grimoireLeaf}-Leaf {result.grimoireLeaf === 5 ? "☘️" : result.grimoireLeaf === 4 ? "🍀" : "☘"}
                  </span>
                  <span className="text-xs text-rose-400 font-mono font-bold block">
                    {result.grimoireLeaf === 5
                      ? "悪魔 // Demon Resides"
                      : result.grimoireLeaf === 4
                      ? "幸運 // Chosen Good Fortune"
                      : "誠実・希望・愛 // Faith, Hope, Love"}
                  </span>
                </div>

                <div className="p-5 rounded-2xl bg-black/60 border border-amber-900/60 space-y-1.5 shadow-xl">
                  <span className="text-[10px] uppercase font-royal text-zinc-400 font-bold block">
                    Kindred Knight Soul
                  </span>
                  <span className="text-xl font-black text-white font-clover">
                    {result.characterMatch}
                  </span>
                  <span className="text-xs text-amber-300 font-royal font-bold block">
                    {result.title}
                  </span>
                </div>

                <div className="p-5 rounded-2xl bg-black/60 border border-cyan-900/60 space-y-1.5 shadow-xl">
                  <span className="text-[10px] uppercase font-royal text-zinc-400 font-bold block">
                    Magic Affinity
                  </span>
                  <span className="text-base font-bold text-white font-clover">
                    {result.magicType}
                  </span>
                  <span className="text-xs text-cyan-400 font-mono font-bold block">
                    Stage 0 / Arcane Affinity
                  </span>
                </div>
              </div>

              {/* Description evaluation */}
              <div className="max-w-2xl mx-auto p-5 rounded-2xl bg-black/50 border border-zinc-800 text-sm sm:text-base text-zinc-300 leading-relaxed font-sans relative z-10">
                {result.evaluation}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-3 relative z-10">
                <button
                  onClick={resetQuiz}
                  className="px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-zinc-500 text-white font-royal font-bold text-sm flex items-center gap-2 cursor-pointer transition-all"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Retake the Trial // 再挑戦</span>
                </button>

                <a
                  href="#squads"
                  onClick={() => soundManager.playHover()}
                  className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-rose-700 to-red-600 hover:from-rose-600 hover:to-red-500 text-white font-royal font-bold text-sm flex items-center gap-2 shadow-lg shadow-rose-950/80 border border-rose-400/40 cursor-pointer transition-all"
                >
                  <Shield className="w-4 h-4" />
                  <span>Inspect {result.squad.name} Roster</span>
                </a>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
