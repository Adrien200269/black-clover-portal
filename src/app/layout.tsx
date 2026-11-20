import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BLACK CLOVER // Magic Knight Grimoire & Four Kingdoms Compendium",
  description: "Surpass your limits! Enter the Black Clover universe: 9 Magic Knight squads, Four Kingdoms lore, grimoire spell compendium, and Grimoire Acceptance Ceremony quiz.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cinzel+Decorative:wght@700;900&family=Cinzel:wght@600;700;800;900&family=Grenze+Gotisch:wght@600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#040407] text-zinc-100 font-sans selection:bg-rose-600 selection:text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
