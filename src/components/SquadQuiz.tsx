"use client";

import { useState } from "react";
import { quizQuestions } from "@/data/quizData";
import { squads } from "@/data/squads";
import { characters } from "@/data/characters";
import { Squad, SquadId } from "@/types";
import { soundManager } from "@/lib/soundEffects";
import confetti from "canvas-confetti";
import { Sparkles, RefreshCw, Award, Shield, Check, Flame, Share2 } from "lucide-react";

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
      // Calculate results
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
    let magicType = "Anti-Magic / Dark";
    let title = "The Unyielding Limit Breaker";
    let evaluation = "You reject destiny and forge your own path through raw grit and unbreakable bonds.";

    if (topSquadId === "golden-dawn") {
      characterMatch = "Yuno Grinberryall";
      magicType = "Wind & Celestial Star Magic";
      title = "The Chosen Sovereign Prodigy";
      evaluation = "Blessed with exceptional mana control and quiet pride, you glide gracefully through adversity.";
    } else if (topSquadId === "silver-eagles") {
      characterMatch = "Nozel Silva";
      magicType = "Liquid Mercury Manipulation";
      title = "The Regal Vanguard of Honor";
      evaluation = "You value discipline, tactical composure, and safeguarding your allies with noble elegance.";
    } else if (topSquadId === "crimson-lion-kings") {
      characterMatch = "Mereoleona Vermillion";
      magicType = "Wildfire Incarnate";
      title = "The Undefeated Savage Lion";
      evaluation = "Your passion burns through all doubts. You settle conflicts with fierce courage and fiery punches.";
    } else if (topSquadId === "blue-rose") {
      characterMatch = "Charlotte Roselei";
      magicType = "Briar & Thorns";
      title = "The Unshakable Shield of Grace";
      evaluation = "Steadfast, disciplined, and fiercely loyal to your companions in battle.";
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
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#ff1a40", "#fbbf24", "#10b981", "#38bdf8"],
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
    <section id="quiz" className="py-20 relative bg-gradient-to-b from-[#07070e] to-black">
      {/* Background Arcane Glow */}
      <div className="absolute inset-0 bg-radial from-rose-950/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/50 border border-rose-600/40 text-xs font-mono text-rose-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>THE GRIMOIRE ACCEPTANCE CEREMONY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-serif uppercase">
            Which Grimoire & Squad Choose You?
          </h2>
          <p className="text-zinc-400 max-w-lg mx-auto text-sm sm:text-base">
            Answer 5 battle scenarios to determine your Magic Knight squad affiliation,
            grimoire leaf rank, and kindred spirit warrior.
          </p>
        </div>

        {/* Quiz Body */}
        {!isFinished ? (
          <div className="p-6 sm:p-10 rounded-3xl bg-[#0c0c16] border border-rose-950/60 shadow-2xl space-y-6">
            {/* Step Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono text-zinc-400">
                <span>Trial {currentStep + 1} of {quizQuestions.length}</span>
                <span className="text-rose-400 font-bold">
                  {Math.round(((currentStep + 1) / quizQuestions.length) * 100)}% Complete
                </span>
              </div>
              <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-rose-600 to-amber-500 rounded-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / quizQuestions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Prompt */}
            <div className="space-y-2 pt-2">
              <span className="text-xs text-rose-400/90 italic font-medium block">
                Scenario: "{currentQ.scenario}"
              </span>
              <h3 className="text-lg sm:text-2xl font-bold text-white font-serif leading-snug">
                {currentQ.question}
              </h3>
            </div>

            {/* Options List */}
            <div className="space-y-3 pt-2">
              {currentQ.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  className="w-full p-4 sm:p-5 rounded-2xl bg-zinc-900/60 hover:bg-rose-950/30 border border-zinc-800 hover:border-rose-500/60 text-left transition-all duration-200 group flex items-start gap-4 cursor-pointer"
                >
                  <span className="w-6 h-6 rounded-full bg-zinc-800 group-hover:bg-rose-600 text-xs font-mono font-bold text-zinc-300 group-hover:text-white flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <div className="space-y-1">
                    <p className="text-sm sm:text-base text-zinc-200 group-hover:text-white font-medium leading-relaxed">
                      {option.text}
                    </p>
                    <span className="text-xs text-zinc-500 italic block">
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
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#110e1a] via-[#0c0c16] to-black border-2 border-rose-500/60 shadow-2xl shadow-rose-950/80 space-y-8 animate-fadeIn text-center relative overflow-hidden">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold block">
                  ★ THE TOWER MASTER HAS SPOKEN ★
                </span>
                <h3 className="text-3xl sm:text-5xl font-black text-white font-serif uppercase tracking-tight">
                  Welcome to the {result.squad.name}!
                </h3>
                <p className="text-sm text-rose-400 italic">
                  "{result.squad.motto}"
                </p>
              </div>

              {/* Ceremony Badge Display */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto pt-2">
                <div className="p-4 rounded-2xl bg-black/60 border border-zinc-800 space-y-1">
                  <span className="text-[10px] uppercase font-mono text-zinc-500 block">Assigned Grimoire</span>
                  <span className="text-xl font-black text-white font-serif flex items-center justify-center gap-1">
                    {result.grimoireLeaf}-Leaf ☘️
                  </span>
                  <span className="text-[11px] text-rose-400 font-mono">
                    {result.grimoireLeaf === 5 ? "Demon Resides" : result.grimoireLeaf === 4 ? "Good Fortune" : "Faith, Hope, Love"}
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-black/60 border border-zinc-800 space-y-1">
                  <span className="text-[10px] uppercase font-mono text-zinc-500 block">Kindred Archetype</span>
                  <span className="text-lg font-black text-white font-serif">
                    {result.characterMatch}
                  </span>
                  <span className="text-[11px] text-amber-400 font-mono">
                    {result.title}
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-black/60 border border-zinc-800 space-y-1">
                  <span className="text-[10px] uppercase font-mono text-zinc-500 block">Magic Attribute</span>
                  <span className="text-base font-bold text-white">
                    {result.magicType}
                  </span>
                  <span className="text-[11px] text-cyan-400 font-mono">
                    High Affinity
                  </span>
                </div>
              </div>

              {/* Description evaluation */}
              <div className="max-w-xl mx-auto p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 text-sm text-zinc-300 leading-relaxed">
                {result.evaluation}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <button
                  onClick={resetQuiz}
                  className="px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-sm flex items-center gap-2 cursor-pointer transition-all"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Retake the Trial</span>
                </button>

                <a
                  href="#squads"
                  onClick={() => soundManager.playHover()}
                  className="px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm flex items-center gap-2 shadow-lg shadow-rose-950/60 cursor-pointer transition-all"
                >
                  <Shield className="w-4 h-4" />
                  <span>View Your Squad Roster</span>
                </a>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
