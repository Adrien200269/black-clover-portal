"use client";

import { useState, useEffect } from "react";
import { animeArcs } from "@/data/episodes";
import { AnimeArc } from "@/types";
import { soundManager } from "@/lib/soundEffects";
import { Tv, CheckCircle, Play, Swords, Film, X, BookOpen } from "lucide-react";

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

  return (
    <section id="episodes" className="py-20 relative bg-[#050508]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-800/40 text-xs font-mono text-emerald-400">
            <Tv className="w-3.5 h-3.5 text-emerald-400" />
            <span>CHRONICLES & BROADCAST TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-serif uppercase">
            Story Arcs & Episodes
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-sm sm:text-base">
            Follow the journey from Asta's first anti-magic strike in Hage to the monumental
            assault on the Spade Kingdom's underworld gate.
          </p>
        </div>

        {/* Watch Progress & Trailer Banner */}
        <div className="p-6 rounded-2xl bg-[#0c0c16] border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 w-full md:w-auto">
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-white font-mono uppercase tracking-wider">
                Anime Completion Progress:
              </span>
              <span className="text-sm font-extrabold text-rose-400 font-mono">
                {watchedArcs.length} / {animeArcs.length} Arcs Completed ({progressPercent}%)
              </span>
            </div>
            <div className="w-full sm:w-96 h-2.5 bg-zinc-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-rose-600 to-amber-500 rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          <button
            onClick={() => {
              soundManager.playManaBurst();
              setTrailerModalOpen(true);
            }}
            className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-lg shadow-rose-950/60 transition-all cursor-pointer shrink-0"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Watch Official Trailer Showcase</span>
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
                    ? "bg-[#090910] border-emerald-900/50 opacity-90"
                    : "bg-[#0a0a14] border-zinc-800 hover:border-zinc-700"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Left: Thumbnail & Badges */}
                  <div className="lg:col-span-4 space-y-3">
                    <div className="relative aspect-video rounded-xl overflow-hidden border border-zinc-800">
                      <img
                        src={arc.thumbnail}
                        alt={arc.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-xs font-mono">
                        <span className="px-2 py-0.5 rounded bg-black/80 text-rose-400 font-bold">
                          {arc.episodesRange}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-zinc-900/90 text-zinc-300">
                          Arc {index + 1}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => toggleWatchStatus(arc.id)}
                      className={`w-full py-2 rounded-xl text-xs font-bold font-mono flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        isWatched
                          ? "bg-emerald-950/60 border border-emerald-500/50 text-emerald-300"
                          : "bg-zinc-900 border border-zinc-700 text-zinc-400 hover:text-white hover:bg-zinc-800"
                      }`}
                    >
                      <CheckCircle className={`w-4 h-4 ${isWatched ? "text-emerald-400" : ""}`} />
                      <span>{isWatched ? "Completed Arc" : "Mark as Watched"}</span>
                    </button>
                  </div>

                  {/* Right: Summary & Key Clashes */}
                  <div className="lg:col-span-8 space-y-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 font-mono">
                          {arc.mangaChapters}
                        </span>
                        {arc.highlightEpisode > 0 && (
                          <span className="text-xs px-2 py-0.5 rounded bg-rose-950/60 text-rose-400 border border-rose-900 font-mono">
                            Peak Ep: #{arc.highlightEpisode}
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-white font-serif">
                        {arc.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      {arc.summary}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      {/* Key Antagonists */}
                      <div className="p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/80 space-y-1">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-rose-400 block font-bold">
                          Primary Antagonists
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {arc.antagonists.map((a, i) => (
                            <span
                              key={i}
                              className="text-xs px-2 py-0.5 rounded bg-black/60 border border-zinc-800 text-zinc-300"
                            >
                              {a}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Iconic Battles */}
                      <div className="p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/80 space-y-1">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 block font-bold">
                          Legendary Clashes
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {arc.keyBattles.map((b, i) => (
                            <span
                              key={i}
                              className="text-xs px-2 py-0.5 rounded bg-black/60 border border-zinc-800 text-zinc-300 flex items-center gap-1"
                            >
                              <Swords className="w-3 h-3 text-amber-500" />
                              {b}
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
            <div className="p-4 border-b border-zinc-800 flex items-center justify-between">
              <span className="text-sm font-bold text-white font-mono flex items-center gap-2">
                <Film className="w-4 h-4 text-rose-500" /> Black Clover: Sword of the Wizard King & Series Trailer
              </span>
              <button
                onClick={() => setTrailerModalOpen(false)}
                className="p-1 rounded-lg text-zinc-400 hover:text-white"
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
