import { Rocket } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section id="cta" className="bg-gradient-to-b from-white to-fuchsia-50">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center md:py-24">
        <div className="mx-auto max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs font-medium text-gray-700 shadow-sm">
            <Rocket className="h-4 w-4 text-violet-600" />
            Siap tingkatkan kehadiran online?
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Konsultasi gratis untuk proyek websitemu
          </h2>
          <p className="mt-3 text-gray-600">
            Ceritakan kebutuhanmu. Kami bantu pilih teknologi terbaik dan paket layanan yang pas.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://wa.me/6281234567890?text=Halo%20NextSite,%20saya%20butuh%20jasa%20pembuatan%20website"
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
          </div>
        </div>
      </div>
    </section>
  );
}