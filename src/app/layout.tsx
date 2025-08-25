import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "NextSite — Jasa Pembuatan Website",
  description: "Layanan pembuatan website profesional: landing page, company profile, e‑commerce, dan custom app.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </head>
      <body className="font-sans bg-white text-gray-900 min-h-dvh">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
