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
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [active, onFinish]);

  if (!active) return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden flex items-center justify-center">
      {/* Red screen flash */}
      <div className="absolute inset-0 bg-red-950/40 animate-ping opacity-60" />

      {/* Diagonal Slash Line */}
      <div className="absolute w-[180%] h-2.5 sm:h-4 bg-gradient-to-r from-transparent via-red-500 to-transparent rotate-[-35deg] shadow-[0_0_50px_15px_rgba(255,0,50,0.9)] animate-pulse" />

      {/* Secondary Slash Cross */}
      <div className="absolute w-[180%] h-1 sm:h-2 bg-gradient-to-r from-transparent via-black to-transparent rotate-[35deg] shadow-[0_0_30px_10px_rgba(220,38,38,0.8)]" />

      {/* Center Impact Kanji / Text */}
      <div className="relative z-10 text-center font-black text-rose-500 font-serif text-3xl sm:text-6xl drop-shadow-[0_0_25px_rgba(255,0,50,1)] tracking-widest scale-125 transition-transform duration-300">
        反魔法 // DISPEL!
      </div>
    </div>
  );
}
