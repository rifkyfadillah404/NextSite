import { Rocket } from "lucide-react";
import Reveal from "@/components/reveal";

export default function CTA() {
  return (
    <section id="cta" className="bg-gradient-to-b from-white to-fuchsia-50">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center md:py-24">
        <div className="mx-auto max-w-2xl">
          <Reveal as="div" className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs font-medium text-gray-700 shadow-sm">
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
              className="inline-flex items-center justify-center gap-2 rounded-md bg-violet-600 px-5 py-2.5 text-white shadow-sm hover:bg-violet-700"
            >
              <Rocket className="h-4 w-4" /> Chat WhatsApp
            </a>
            <a
              href="mailto:hello@nextsite.id?subject=Konsultasi%20Pembuatan%20Website%20NextSite"
              className="inline-flex items-center justify-center gap-2 rounded-md border px-5 py-2.5 text-gray-900 hover:bg-gray-50"
            >
              Kirim Email
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}