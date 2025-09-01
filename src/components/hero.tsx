import { Rocket, Shield, Sparkles } from "lucide-react";
import Image from "next/image";
import Reveal from "@/components/reveal";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Subtle neutral ambient gradients */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[120vw] -translate-x-1/2 rounded-full bg-gradient-to-r from-gray-300/10 via-gray-200/10 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-0 h-56 w-72 rounded-full bg-gradient-to-tr from-gray-300/10 to-transparent blur-3xl" />

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-20 md:grid-cols-2 md:py-28">
        {/* Copy */}
        <Reveal as="div" className="flex flex-col justify-center">
          <Reveal
            as="div"
            delay={50}
            className="mb-4 inline-flex items-center gap-2 rounded-full border bg-white/80 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur"
          >
            <Sparkles className="h-4 w-4 text-gray-700" />
            NextSite — Jasa Pembuatan Website
          </Reveal>

          <Reveal
            as="h1"
            delay={120}
            className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl"
          >
            Website profesional untuk bisnismu
          </Reveal>
          <Reveal as="p" delay={180} className="mt-4 text-gray-600">
            Kami membuat landing page, company profile, e‑commerce, dan aplikasi web custom.
            Cepat, modern, dan SEO‑friendly agar brand kamu tampil meyakinkan dan konversi meningkat.
          </Reveal>

          <Reveal as="div" delay={240} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#cta" className="btn-primary inline-flex items-center gap-2 px-5 py-2.5">
              <Rocket className="h-4 w-4" /> Konsultasi Gratis
            </a>
            <a href="#features" className="btn-outline inline-flex items-center gap-2 px-5 py-2.5">
              Lihat Layanan
            </a>
          </Reveal>

          <Reveal as="div" delay={300} className="mt-8 flex items-center gap-3 text-xs text-gray-500">
            <Shield className="h-4 w-4 text-gray-700" />
            Garansi kepuasan & support 30 hari.
          </Reveal>
        </Reveal>

        {/* Visual with photo */}
        <Reveal as="div" delay={120} className="relative">
          {/* Gradient ring frame */}
          <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-tr from-gray-300/20 to-transparent blur-2xl" />
          <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl border border-black/5 bg-white shadow-glow md:max-w-lg animate-float-y">
            <Image
              src="/assets/logo.jpg"
              alt="Contoh website NextSite"
              fill
              sizes="(min-width: 1024px) 512px, (min-width: 768px) 50vw, 90vw"
              className="object-cover"
              priority
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
