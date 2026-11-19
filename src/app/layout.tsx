import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GRIMOIRE // Black Clover Fan Hub & Magic Knight Compendium",
  description: "Explore the Black Clover universe: characters, 9 Magic Knight squads, Four Kingdoms lore, spell compendium, and interactive squad sorting quiz.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-[#050508] text-zinc-100 selection:bg-rose-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
