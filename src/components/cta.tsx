import { Rocket } from "lucide-react";
import Reveal from "@/components/reveal";

export default function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-gradient-to-b from-white to-fuchsia-50">
      {/* Ambient mesh gradients */}
      <div className="pointer-events-none absolute -top-10 left-1/2 h-48 w-[90vw] -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -bottom-12 right-0 h-52 w-72 rounded-full bg-gradient-to-tr from-fuchsia-400/15 to-violet-500/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 py-16 text-center md:py-24">
        <div className="mx-auto max-w-2xl">
          <Reveal
            as="div"
            className="inline-flex items-center gap-2 rounded-full border bg-white/80 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur"
          >
            <Rocket className="h-4 w-4 text-violet-600" />
            Siap tingkatkan kehadiran online?
          </Reveal>
          <Reveal as="h2" delay={120} className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Konsultasi gratis untuk proyek websitemu
          </Reveal>
          <Reveal as="p" delay={200} className="mt-3 text-gray-600">
            Ceritakan kebutuhanmu. Kami bantu pilih teknologi terbaik dan paket layanan yang pas.
          </Reveal>

          <Reveal as="div" delay={280} className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://wa.me/6285780520587?text=Halo%20NextSite,%20saya%20butuh%20jasa%20pembuatan%20website"
              target="_blank"
              rel="noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2 px-5 py-2.5"
            >
              <Rocket className="h-4 w-4" /> Chat WhatsApp
            </a>
            <a
              href="mailto:hello@nextsite.id?subject=Konsultasi%20Pembuatan%20Website%20NextSite"
              className="btn-outline inline-flex items-center justify-center gap-2 px-5 py-2.5"
            >
              Kirim Email
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}