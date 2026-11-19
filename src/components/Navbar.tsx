"use client";

import { useState } from "react";
import { soundManager } from "@/lib/soundEffects";
import { Volume2, VolumeX, Sparkles, Sword, Menu, X, Flame, Zap } from "lucide-react";

interface NavbarProps {
  onSlashTrigger: () => void;
  activeSection: string;
}

export default function Navbar({ onSlashTrigger, activeSection }: NavbarProps) {
  const [isMuted, setIsMuted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMute = () => {
    soundManager.isMuted = !isMuted;
    setIsMuted(!isMuted);
    if (isMuted) {
      soundManager.playManaBurst();
    }
  };

  const navLinks = [
    { label: "Squads & Knights", kanji: "騎士団", href: "#squads" },
    { label: "Kingdoms Map", kanji: "四大王国", href: "#kingdoms" },
    { label: "Grimoire & Spells", kanji: "魔導書", href: "#spells" },
    { label: "Anime Arcs", kanji: "年代記", href: "#episodes" },
    { label: "Grimoire Quiz", kanji: "授与式", href: "#quiz", highlight: true },
  ];

  const handleNavClick = () => {
    soundManager.playHover();
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030306]/95 backdrop-blur-md border-b border-red-900/60 shadow-[0_4px_35px_rgba(0,0,0,0.9)]">
      {/* Top Anti-Magic Crimson Energy Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-red-600 to-transparent shadow-[0_0_12px_rgba(239,68,68,0.9)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo - Black Clover Asta Theme */}
        <a
          href="#"
          onClick={() => soundManager.playGrimoireOpen()}
          className="flex items-center gap-3.5 group cursor-pointer"
        >
          {/* 5-Leaf Demonic Grimoire Seal */}
          <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-[#1c060b] via-black to-[#250810] border-2 border-red-600/80 flex items-center justify-center text-2xl shadow-[0_0_25px_rgba(239,68,68,0.6)] group-hover:border-red-400 group-hover:scale-105 transition-all duration-300">
            <span className="text-white drop-shadow-[0_0_12px_rgba(239,68,68,1)]">
              ☘️
            </span>
            {/* 5-leaf demonic marker */}
            <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 bg-black border border-red-500 rounded-full flex items-center justify-center text-[10px] text-red-400 font-bold font-mono shadow-md">
              5
            </div>
            {/* Red demon rune accent */}
            <span className="absolute -top-1 -left-1 text-[8px] text-red-500 font-mono">✦</span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-clover text-xl sm:text-2xl font-black tracking-wider text-white uppercase drop-shadow-[0_2px_12px_rgba(239,68,68,0.4)]">
                Black Clover
              </span>
              <span className="hidden sm:inline-block font-shonen text-xs px-2 py-0.5 rounded bg-red-950/90 text-red-400 border border-red-600/60 tracking-wider">
                反魔法 // DEMON
              </span>
            </div>
            <span className="text-[10px] sm:text-xs text-red-400 font-royal tracking-[0.25em] uppercase">
              Anti-Magic Compendium
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-1.5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 flex flex-col items-center group cursor-pointer ${
                link.highlight
                  ? "bg-gradient-to-r from-red-700 via-rose-600 to-red-800 text-white shadow-lg shadow-red-950/80 hover:from-red-600 hover:to-rose-500 border border-red-400/50 font-bold flex-row gap-1.5 py-2.5 px-4 glow-anti-magic-subtle"
                  : activeSection === link.href.substring(1)
                  ? "text-red-400 bg-red-950/40 border border-red-700/60"
                  : "text-zinc-300 hover:text-white hover:bg-red-950/20 border border-transparent hover:border-red-900/40"
              }`}
            >
              {link.highlight ? (
                <>
                  <Zap className="w-3.5 h-3.5 text-red-200 animate-pulse" />
                  <span className="font-shonen text-sm uppercase tracking-wider">{link.label}</span>
                  <span className="text-[9px] bg-black/50 px-1 rounded text-red-200 font-mono">
                    {link.kanji}
                  </span>
                </>
              ) : (
                <>
                  <span className="font-medium group-hover:text-red-400 transition-colors">
                    {link.label}
                  </span>
                  <span className="text-[9px] text-zinc-500 font-royal tracking-widest group-hover:text-red-400/80 transition-colors">
                    {link.kanji}
                  </span>
                </>
              )}
            </a>
          ))}
        </div>

        {/* Interactive Controls (Anti-Magic Slash & Audio) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Anti-Magic Slash Trigger Button */}
          <button
            onClick={() => {
              soundManager.playAntiMagicSlash();
              onSlashTrigger();
            }}
            title="Unleash Asta's Demon-Slayer Anti-Magic Slash!"
            className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-black via-red-950/70 to-black border border-red-500/80 text-xs font-bold text-red-300 hover:text-white hover:border-red-400 hover:shadow-[0_0_25px_rgba(239,68,68,0.8)] flex items-center gap-1.5 transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <Sword className="w-4 h-4 text-red-500 animate-pulse" />
            <span className="font-shonen text-sm sm:text-base tracking-wider text-red-400">
              DISPEL
            </span>
            <span className="hidden sm:inline text-[10px] text-zinc-400 font-mono">
              [反魔法]
            </span>
          </button>

          {/* Sound FX Mute/Unmute */}
          <button
            onClick={toggleMute}
            title={isMuted ? "Enable Arcane SFX" : "Mute SFX"}
            className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
              isMuted
                ? "bg-black/80 border-zinc-800 text-zinc-500 hover:text-zinc-300"
                : "bg-red-950/40 border-red-600/50 text-red-400 hover:border-red-400 shadow-[0_0_15px_rgba(239,68,68,0.3)]"
            }`}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {/* Mobile menu hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-black border border-red-900/60 text-zinc-300 hover:text-white cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#060408] border-b border-red-900/60 px-4 py-5 space-y-3 animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className={`px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between ${
                  link.highlight
                    ? "bg-gradient-to-r from-red-700 to-rose-700 text-white font-bold"
                    : "text-zinc-300 hover:text-white hover:bg-red-950/40 border border-zinc-800/60"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="font-royal">{link.label}</span>
                </div>
                <span className="text-xs font-mono text-red-400">{link.kanji}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
