import "./globals.css";
import { CursorFollower } from "./components/CursorFollower";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { PageTransition } from "./components/PageTransition";
import { ChatBot } from "./components/ChatBot";

export const metadata = {
  title: "Venture Management Real Estate",
  description: "Find your home in Harare. Trusted real estate brokerage serving local and diaspora buyers across Borrowdale, Highlands, Avondale and beyond.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {/* Ambient background orbs */}
        <div className="ambient-orb ambient-orb-1" />
        <div className="ambient-orb ambient-orb-2" />
        <div className="ambient-orb ambient-orb-3" />
        <CursorFollower />
        <FloatingWhatsApp />
        <ChatBot />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
      </body>
    </html>
  );
}
