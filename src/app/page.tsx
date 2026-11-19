"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SquadCharacterExplorer from "@/components/SquadCharacterExplorer";
import KingdomMap from "@/components/KingdomMap";
import GrimoireCompendium from "@/components/GrimoireCompendium";
import EpisodeArcGuide from "@/components/EpisodeArcGuide";
import SquadQuiz from "@/components/SquadQuiz";
import Footer from "@/components/Footer";
import AntiMagicSlashOverlay from "@/components/AntiMagicSlashOverlay";

export default function Home() {
  const [slashActive, setSlashActive] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const triggerSlash = () => {
    setSlashActive(true);
  };

  const scrollToQuiz = () => {
    const quizElem = document.getElementById("quiz");
    if (quizElem) {
      quizElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-[#050508] text-zinc-100 relative selection:bg-rose-600 selection:text-white">
      {/* Interactive Anti-Magic Slash Effect */}
      <AntiMagicSlashOverlay
        active={slashActive}
        onFinish={() => setSlashActive(false)}
      />

      {/* Persistent Navigation */}
      <Navbar
        onSlashTrigger={triggerSlash}
        activeSection={activeSection}
      />

      {/* Hero Section */}
      <HeroSection onStartQuiz={scrollToQuiz} />

      {/* 9 Squads & Knights Explorer */}
      <SquadCharacterExplorer />

      {/* Four Kingdoms Interactive Map & Lore */}
      <KingdomMap />

      {/* Grimoire & Magic Attributes Compendium */}
      <GrimoireCompendium />

      {/* Anime Arcs & Episode Watch Tracker */}
      <EpisodeArcGuide />

      {/* "Which Grimoire & Squad Choose You?" Interactive Quiz */}
      <SquadQuiz />

      {/* Footer */}
      <Footer />
    </main>
  );
}
