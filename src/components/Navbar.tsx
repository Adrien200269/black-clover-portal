"use client";

import { useState } from "react";
import { soundManager } from "@/lib/soundEffects";
import { Volume2, VolumeX, Sparkles, Sword, Menu, X, Flame } from "lucide-react";

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#040407]/90 backdrop-blur-md border-b border-rose-950/60 shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
      {/* Top ornamental mana line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-rose-600 to-amber-500/80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo - Black Clover */}
        <a
          href="#"
          onClick={() => soundManager.playGrimoireOpen()}
          className="flex items-center gap-3.5 group cursor-pointer"
        >
          <div className="relative w-11 h-11 rounded-lg bg-gradient-to-br from-[#120509] via-black to-[#1a050b] border-2 border-rose-600/70 flex items-center justify-center text-2xl shadow-[0_0_20px_rgba(225,29,72,0.5)] group-hover:border-amber-400 group-hover:scale-105 transition-all duration-300">
            <span className="text-white drop-shadow-[0_0_10px_rgba(239,68,68,1)]">
              ☘️
            </span>
            {/* 5-leaf demonic marker */}
            <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 bg-black border border-rose-500 rounded-full flex items-center justify-center text-[10px] text-rose-400 font-bold font-mono shadow-sm">
              5
            </div>
            {/* Corner runes */}
            <span className="absolute -top-1 -left-1 text-[8px] text-amber-500 font-mono">✦</span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-clover text-xl sm:text-2xl font-black tracking-wider text-white uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                Black Clover
              </span>
              <span className="hidden sm:inline-block font-shonen text-xs px-2 py-0.5 rounded bg-rose-950/80 text-rose-400 border border-rose-600/50 tracking-wider">
                魔導書
              </span>
            </div>
            <span className="text-[10px] sm:text-xs text-amber-400/90 font-royal tracking-[0.25em] uppercase">
              Magic Knight Compendium
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
                  ? "bg-gradient-to-r from-rose-700 via-red-600 to-amber-600 text-white shadow-lg shadow-rose-950/80 hover:from-rose-600 hover:to-amber-500 border border-amber-400/40 font-bold flex-row gap-1.5 py-2.5 px-4"
                  : activeSection === link.href.substring(1)
                  ? "text-rose-400 bg-rose-950/40 border border-rose-700/50"
                  : "text-zinc-300 hover:text-white hover:bg-zinc-900/60 border border-transparent hover:border-zinc-800"
              }`}
            >
              {link.highlight ? (
                <>
                  <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin-slow" />
                  <span className="font-shonen text-sm uppercase tracking-wider">{link.label}</span>
                  <span className="text-[9px] bg-black/40 px-1 rounded text-amber-200 font-mono">
                    {link.kanji}
                  </span>
                </>
              ) : (
                <>
                  <span className="font-medium group-hover:text-amber-300 transition-colors">
                    {link.label}
                  </span>
                  <span className="text-[9px] text-zinc-500 font-royal tracking-widest group-hover:text-rose-400/80 transition-colors">
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
            className="px-3 py-2 rounded-xl bg-gradient-to-r from-black via-rose-950/50 to-black border border-rose-500/60 text-xs font-bold text-rose-300 hover:text-rose-100 hover:border-rose-400 hover:shadow-[0_0_20px_rgba(225,29,72,0.6)] flex items-center gap-1.5 transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <Sword className="w-4 h-4 text-rose-500 animate-pulse" />
            <span className="font-shonen text-sm sm:text-base tracking-wider text-rose-400">
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
                ? "bg-zinc-950/80 border-zinc-800 text-zinc-500 hover:text-zinc-300"
                : "bg-rose-950/30 border-rose-600/40 text-amber-400 hover:border-rose-500 shadow-sm"
            }`}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {/* Mobile menu hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:text-white cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#07070e] border-b border-rose-900/60 px-4 py-5 space-y-3 animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className={`px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between ${
                  link.highlight
                    ? "bg-gradient-to-r from-rose-700 to-amber-600 text-white font-bold"
                    : "text-zinc-300 hover:text-white hover:bg-zinc-900/80 border border-zinc-800/60"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="font-royal">{link.label}</span>
                </div>
                <span className="text-xs font-mono text-zinc-400">{link.kanji}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
