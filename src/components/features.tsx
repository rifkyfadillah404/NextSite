import { BarChart3, Globe, Settings, Shield, Sparkles, Users } from "lucide-react";
import Reveal from "@/components/reveal";

const features = [
  {
    title: "Desain Kustom",
    desc: "UI/UX profesional sesuai brand: clean, modern, dan fokus ke konversi.",
    Icon: Sparkles,
  },
  {
    title: "Responsif & Cepat",
    desc: "Skor performa tinggi, mobile-first, dan best practices Next.js + Tailwind.",
    Icon: Globe,
  },
  {
    title: "SEO & Analytics",
    desc: "Optimasi meta, schema, dan integrasi GA/GTM untuk insight yang akurat.",
    Icon: BarChart3,
  },
  {
    title: "Integrasi & Otomasi",
    desc: "Hubungkan ke CRM, WhatsApp, payment gateway, Headless CMS, hingga Zapier.",
    Icon: Settings,
  },
  {
    title: "Keamanan & Standar",
    desc: "Praktik keamanan yang baik, validasi input, dan update rutin.",
    Icon: Shield,
  },
  {
    title: "Maintenance & Support",
    desc: "Monitoring, backup, perbaikan bug, dan peningkatan berkelanjutan.",
    Icon: Users,
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <Reveal as="div" className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Layanan yang kami tawarkan
          </h2>
          <p className="mt-3 text-gray-600">
            Solusi lengkap pembuatan website: dari desain, development, hingga maintenance.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, desc, Icon }, idx) => (
            <Reveal
              key={title}
              as="div"
              delay={idx * 80}
              className="group"
            >
              <div className="relative rounded-2xl p-[1px] bg-gray-200/40 transition-transform duration-200 group-hover:-translate-y-1">
                <div className="rounded-2xl border bg-white p-6 shadow-sm transition-shadow group-hover:shadow-md">
                  <div className="flex items-center gap-3">
                    <Icon className="h-6 w-6 text-gray-700" />
                    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}