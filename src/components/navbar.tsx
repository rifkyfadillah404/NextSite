"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Rocket, Menu, X, Phone } from "lucide-react";

const NAV_ITEMS = [
  { href: "#features", label: "Layanan" },
  { href: "#testimonials", label: "Testimoni" },
  { href: "#pricing", label: "Harga" },
  { href: "#cta", label: "Konsultasi" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 glass-dark ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Brand */}
        <Link href="/" className="group flex items-center gap-2">
          <Rocket className="h-6 w-6 text-white" />
          <div className="flex flex-col leading-tight">
            <span className="bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-base font-extrabold text-transparent">
              NextSite
            </span>
            <span className="text-[10px] tracking-wide text-gray-400 group-hover:text-gray-200">
              Web Agency
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-2 md:flex lg:gap-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative rounded-md px-3 py-1.5 text-sm text-gray-200 transition hover:text-white after:absolute after:left-3 after:right-3 after:-bottom-[2px] after:h-[2px] after:origin-left after:scale-x-0 after:rounded-full after:bg-gradient-to-r after:from-violet-500 after:to-fuchsia-500 after:transition-transform after:duration-200 hover:after:scale-x-100"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center md:flex">
          <a
            href="https://wa.me/6285780520587?text=Halo%20NextSite,%20saya%20ingin%20konsultasi%20pembuatan%20website"
            target="_blank"
            rel="noreferrer"
            className="btn-primary inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm"
          >
            <Phone className="h-4 w-4" /> Chat WhatsApp
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="inline-flex items-center justify-center rounded-md border border-white/10 text-gray-200 hover:bg-white/5 px-2.5 py-1.5 md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile panel */}
      {open && (
        <div className="border-t border-white/10 bg-black/70 md:hidden">
          <div className="mx-auto max-w-7xl space-y-1.5 px-4 py-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-sm text-gray-200 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me/6285780520587?text=Halo%20NextSite,%20saya%20ingin%20konsultasi%20pembuatan%20website"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 block w-full rounded-lg px-3 py-2 text-center text-sm font-medium"
            >
              Chat WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
