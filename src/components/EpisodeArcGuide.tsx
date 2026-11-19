"use client";

import { useState, useEffect } from "react";
import { animeArcs } from "@/data/episodes";
import { AnimeArc } from "@/types";
import { soundManager } from "@/lib/soundEffects";
import { Tv, CheckCircle, Play, Swords, Film, X, BookOpen, Star, Sparkles, Flame } from "lucide-react";

export default function EpisodeArcGuide() {
  const [watchedArcs, setWatchedArcs] = useState<string[]>([]);
  const [trailerModalOpen, setTrailerModalOpen] = useState(false);

  // Load watched arcs from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("bc_watched_arcs");
      if (saved) {
        setWatchedArcs(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const toggleWatchStatus = (id: string) => {
    soundManager.playHover();
    setWatchedArcs((prev) => {
      const updated = prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id];
      try {
        localStorage.setItem("bc_watched_arcs", JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const progressPercent = Math.round((watchedArcs.length / animeArcs.length) * 100);
  const totalStarsEarned = watchedArcs.length * 15;

  return (
    <section id="episodes" className="py-24 relative bg-[#040407] bg-grimoire-pattern">
      {/* Decorative Kanji Watermark */}
      <div className="absolute top-12 left-12 pointer-events-none select-none text-[80px] sm:text-[140px] font-black text-white/[0.02] tracking-widest font-gothic">
        年代記と戦史
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/50 border border-emerald-800/50 text-xs font-royal text-emerald-400">
            <Tv className="w-3.5 h-3.5 text-emerald-400" />
            <span>ANIME CHRONICLES & BROADCAST TIMELINE // ブラッククローバー年代記</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-clover uppercase drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]">
            Story Arcs & Episodes
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base font-sans">
            Follow the journey from Asta's first anti-magic strike in Hage Village to the monumental assault on the Spade Kingdom's Underworld Gate and Tree of Qliphoth.
          </p>
        </div>

        {/* Watch Progress & Trailer Showcase Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#090914] border border-rose-950/60 shadow-[0_10px_35px_rgba(0,0,0,0.7)] flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-3 w-full md:w-auto">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-bold text-white font-royal uppercase tracking-wider">
                Magic Knight Progression:
              </span>
              <span className="text-sm font-extrabold text-amber-300 font-mono flex items-center gap-1.5">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>{totalStarsEarned} Merit Stars</span>
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-rose-950/70 border border-rose-600/50 text-rose-300 font-mono">
                {watchedArcs.length} / {animeArcs.length} Arcs ({progressPercent}%)
              </span>
            </div>

            <div className="w-full sm:w-[420px] h-3 bg-black/80 border border-zinc-800 rounded-full overflow-hidden p-0.5">
              <div
                className="h-full bg-gradient-to-r from-rose-600 via-red-500 to-amber-400 rounded-full transition-all duration-500 shadow-sm"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          <button
            onClick={() => {
              soundManager.playManaBurst();
              setTrailerModalOpen(true);
            }}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-rose-700 to-red-600 hover:from-rose-600 hover:to-red-500 text-white text-xs sm:text-sm font-bold flex items-center gap-2.5 shadow-lg shadow-rose-950/80 border border-rose-400/40 transition-all cursor-pointer shrink-0 font-royal"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Watch Movie / Trailer Showcase</span>
          </button>
        </div>

        {/* Timeline Grid */}
        <div className="space-y-6">
          {animeArcs.map((arc, index) => {
            const isWatched = watchedArcs.includes(arc.id);

            return (
              <div
                key={arc.id}
                className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 relative overflow-hidden ${
                  isWatched
                    ? "bg-[#06060c] border-emerald-800/40 opacity-90 shadow-lg"
                    : "bg-[#090912] border-zinc-800/90 hover:border-zinc-700 shadow-2xl"
                }`}
              >
                {/* Corner bracket */}
                <div className="corner-bracket-tl" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start relative z-10">
                  {/* Left: Thumbnail & Badges */}
                  <div className="lg:col-span-4 space-y-3.5">
                    <div className="relative aspect-video rounded-2xl overflow-hidden border border-zinc-800/90 shadow-inner group">
                      <img
                        src={arc.thumbnail}
                        alt={arc.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                      <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-xs font-mono">
                        <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-sm text-rose-400 font-bold border border-rose-900/60 font-shonen tracking-wider text-sm">
                          {arc.episodesRange}
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-zinc-900/90 text-amber-300 font-royal font-bold border border-zinc-700">
                          Arc 0{index + 1}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => toggleWatchStatus(arc.id)}
                      className={`w-full py-2.5 rounded-xl text-xs font-bold font-royal flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        isWatched
                          ? "bg-emerald-950/70 border border-emerald-500/60 text-emerald-300 shadow-md"
                          : "bg-black/60 border border-zinc-700/80 text-zinc-300 hover:text-white hover:bg-zinc-800"
                      }`}
                    >
                      <CheckCircle className={`w-4 h-4 ${isWatched ? "text-emerald-400" : ""}`} />
                      <span>{isWatched ? "✓ Arc Completed (+15 Stars)" : "Mark Arc as Watched"}</span>
                    </button>
                  </div>

                  {/* Right: Summary & Key Clashes */}
                  <div className="lg:col-span-8 space-y-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-xs px-2.5 py-0.5 rounded-md bg-black/60 border border-zinc-800 text-zinc-400 font-mono">
                          {arc.mangaChapters}
                        </span>
                        {arc.highlightEpisode > 0 && (
                          <span className="text-xs px-2.5 py-0.5 rounded-md bg-rose-950/70 text-rose-400 border border-rose-800/80 font-mono font-bold flex items-center gap-1">
                            <Flame className="w-3 h-3 text-rose-500" />
                            <span>Peak Episode: #{arc.highlightEpisode}</span>
                          </span>
                        )}
                        <span className="text-xs px-2.5 py-0.5 rounded-md bg-amber-950/40 text-amber-300 border border-amber-800/40 font-royal">
                          Official Canon Arc
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white font-clover">
                        {arc.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                      {arc.summary}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      {/* Key Antagonists */}
                      <div className="p-4 rounded-xl bg-black/50 border border-zinc-800 space-y-1.5">
                        <span className="text-[10px] font-royal uppercase tracking-wider text-rose-400 block font-bold">
                          Primary Antagonists & Threats:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {arc.antagonists.map((a, i) => (
                            <span
                              key={i}
                              className="text-xs px-2.5 py-0.5 rounded-md bg-[#0e0e18] border border-zinc-800 text-zinc-300 font-royal"
                            >
                              {a}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Iconic Battles */}
                      <div className="p-4 rounded-xl bg-black/50 border border-zinc-800 space-y-1.5">
                        <span className="text-[10px] font-royal uppercase tracking-wider text-amber-400 block font-bold">
                          Legendary Clashes & Awakened Spells:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {arc.keyBattles.map((b, i) => (
                            <span
                              key={i}
                              className="text-xs px-2.5 py-0.5 rounded-md bg-[#0e0e18] border border-zinc-800 text-zinc-300 flex items-center gap-1.5 font-sans"
                            >
                              <Swords className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                              <span>{b}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Trailer Video Modal */}
      {trailerModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-[#090912] border border-rose-900/60 rounded-2xl overflow-hidden shadow-2xl">
            <div className="p-4 border-b border-zinc-800 flex items-center justify-between">
              <span className="text-sm font-bold text-white font-royal flex items-center gap-2">
                <Film className="w-4 h-4 text-rose-500" /> Black Clover: Sword of the Wizard King & Series Showcase
              </span>
              <button
                onClick={() => setTrailerModalOpen(false)}
                className="p-1 rounded-lg text-zinc-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-video w-full bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/5m0G8sX_v_8?autoplay=1"
                title="Black Clover Official Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
