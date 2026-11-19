"use client";

import { useEffect } from "react";

interface SlashOverlayProps {
  active: boolean;
  onFinish: () => void;
}

export default function AntiMagicSlashOverlay({ active, onFinish }: SlashOverlayProps) {
  useEffect(() => {
    if (active) {
      const timer = setTimeout(() => {
        onFinish();
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [active, onFinish]);

  if (!active) return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden flex items-center justify-center animate-fadeIn">
      {/* Red screen flash vignette */}
      <div className="absolute inset-0 bg-red-950/60 mix-blend-color-burn" />
      <div className="absolute inset-0 bg-black/40" />

      {/* Primary Diagonal Slash Line */}
      <div className="absolute w-[200%] h-3 sm:h-5 bg-gradient-to-r from-transparent via-red-500 to-transparent rotate-[-35deg] shadow-[0_0_60px_20px_rgba(255,0,50,1)]" />

      {/* Secondary Counter Slash Cross */}
      <div className="absolute w-[200%] h-2 sm:h-3.5 bg-gradient-to-r from-transparent via-black to-transparent rotate-[35deg] shadow-[0_0_40px_12px_rgba(220,38,38,0.9)]" />

      {/* Center Impact Kanji & Demon Blade Brand */}
      <div className="relative z-10 text-center space-y-1 transform scale-110 sm:scale-125 transition-transform duration-300">
        <div className="font-clover text-4xl sm:text-7xl font-black text-rose-500 drop-shadow-[0_0_35px_rgba(255,0,50,1)] tracking-widest uppercase">
          反魔法 // DISPEL!
        </div>
        <div className="font-gothic text-xl sm:text-3xl text-white font-bold tracking-widest drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">
          断魔の剣・ブラックディバイダー
        </div>
        <p className="font-shonen text-xs sm:text-sm text-amber-300 tracking-[0.3em] uppercase">
          Demon-Slayer Sword: Black Divider
        </p>
      </div>
    </div>
  );
}
