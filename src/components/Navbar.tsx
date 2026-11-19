"use client";

import { useState } from "react";
import { soundManager } from "@/lib/soundEffects";
import { Volume2, VolumeX, Sparkles, Sword, Menu, X } from "lucide-react";

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
    { label: "Squads & Knights", href: "#squads" },
    { label: "Kingdoms Map", href: "#kingdoms" },
    { label: "Grimoire & Spells", href: "#spells" },
    { label: "Episode Arcs", href: "#episodes" },
    { label: "Grimoire Quiz", href: "#quiz", highlight: true },
  ];

  const handleNavClick = () => {
    soundManager.playHover();
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050508]/85 backdrop-blur-md border-b border-rose-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          onClick={() => soundManager.playGrimoireOpen()}
          className="flex items-center gap-3 group"
        >
          <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-rose-600 via-red-900 to-black border border-rose-500/50 flex items-center justify-center text-xl shadow-lg shadow-rose-950/60 group-hover:scale-105 transition-all">
            <span className="text-white drop-shadow-[0_0_8px_rgba(255,50,50,0.8)]">
              ☘️
            </span>
            <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-black border border-rose-500 rounded-full flex items-center justify-center text-[9px] text-rose-400 font-bold">
              5
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-wider text-white uppercase flex items-center gap-1.5 font-serif">
              Black Clover
              <span className="text-xs px-1.5 py-0.5 rounded bg-rose-600/30 text-rose-400 border border-rose-500/30 font-sans tracking-normal">
                Grimoire
              </span>
            </span>
            <span className="text-[10px] text-zinc-400 tracking-widest font-mono uppercase">
              Magic Knight Compendium
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                link.highlight
                  ? "bg-gradient-to-r from-rose-600 to-red-700 text-white shadow-lg shadow-rose-900/40 hover:from-rose-500 hover:to-red-600 flex items-center gap-1.5 border border-rose-400/30"
                  : activeSection === link.href.substring(1)
                  ? "text-rose-400 bg-rose-950/30 border border-rose-800/40"
                  : "text-zinc-300 hover:text-white hover:bg-zinc-800/40"
              }`}
            >
              {link.highlight && <Sparkles className="w-3.5 h-3.5 text-amber-300" />}
              {link.label}
            </a>
          ))}
        </div>

        {/* Interactive Controls */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Anti-Magic Slash Trigger Button */}
          <button
            onClick={() => {
              soundManager.playAntiMagicSlash();
              onSlashTrigger();
            }}
            title="Unleash Anti-Magic Demon-Slayer Slash!"
            className="px-3 py-1.5 rounded-lg bg-black/60 border border-red-500/40 text-xs font-semibold text-rose-300 hover:text-rose-100 hover:border-red-400 hover:bg-rose-950/40 flex items-center gap-1.5 shadow-sm transition-all active:scale-95 cursor-pointer"
          >
            <Sword className="w-3.5 h-3.5 text-rose-500" />
            <span>Anti-Magic Slash</span>
          </button>

          {/* Sound FX Toggle */}
          <button
            onClick={toggleMute}
            title={isMuted ? "Unmute arcane sound effects" : "Mute sound effects"}
            className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 transition-all cursor-pointer"
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-zinc-500" />
            ) : (
              <Volume2 className="w-4 h-4 text-rose-400" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-300"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#07070c] border-b border-rose-950/60 px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="block px-3 py-2 rounded-lg text-base font-medium text-zinc-200 hover:bg-rose-950/40 hover:text-rose-300 transition-all"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-zinc-800 flex items-center justify-between">
            <button
              onClick={() => {
                soundManager.playAntiMagicSlash();
                onSlashTrigger();
                setMobileMenuOpen(false);
              }}
              className="px-3 py-1.5 rounded-lg bg-rose-950/60 border border-red-500/50 text-xs font-semibold text-rose-200 flex items-center gap-2"
            >
              <Sword className="w-4 h-4 text-rose-400" />
              <span>Anti-Magic Slash</span>
            </button>
            <button
              onClick={toggleMute}
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-300"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-rose-400" />}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
