import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Starfield from "@/components/Starfield";

export const metadata: Metadata = {
  title: "NebulaMart — NFT Marketplace",
  description: "A futuristic NFT marketplace built with Next.js + Tailwind + TypeScript",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Starfield />
        <Navbar />
        <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>
      </body>
    </html>
  );
}
