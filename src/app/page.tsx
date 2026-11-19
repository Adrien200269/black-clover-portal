"use client";

import { useState, useEffect } from "react";
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

  // Scroll spy to highlight active section in Navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["squads", "kingdoms", "spells", "episodes", "quiz"];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection("hero");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#040407] text-zinc-100 relative selection:bg-rose-600 selection:text-white font-sans overflow-x-hidden">
      {/* Interactive Anti-Magic Demon-Slayer Slash Effect */}
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

      {/* "Which Grimoire & Squad Choose You?" Interactive Ceremony Quiz */}
      <SquadQuiz />

      {/* Footer */}
      <Footer />
    </main>
  );
}
