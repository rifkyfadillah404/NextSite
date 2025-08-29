import { CheckCircle2 } from "lucide-react";
import Reveal from "@/components/reveal";

const tiers = [
  {
    name: "Basic",
    price: "Rp1,5jt",
    desc: "Landing page profesional untuk validasi bisnis/produk.",
    features: ["Desain kustom 1 halaman", "Responsif & cepat", "Formulir kontak/WhatsApp", "Optimasi SEO dasar"],
    cta: { label: "Konsultasi via WhatsApp", href: "https://wa.me/6281234567890?text=Halo%20NextSite,%20saya%20minat%20paket%20Basic" },
    highlight: false,
  },
  {
    name: "Business",
    price: "Rp4,5jt",
    desc: "Company profile lengkap dengan beberapa halaman & integrasi.",
    features: ["Desain multi-halaman (hingga 6)", "Integrasi CMS/Blog opsional", "Optimasi SEO + Analytics", "Integrasi WA/Email/CRM"],
    cta: { label: "Diskusi Paket Business", href: "https://wa.me/6281234567890?text=Halo%20NextSite,%20saya%20minat%20paket%20Business" },
    highlight: true,
  },
  {
    name: "Pro",
    price: "Rp9jt+",
    desc: "Custom web/e‑commerce dengan fitur sesuai kebutuhan.",
    features: ["Arsitektur kustom", "Integrasi payment gateway", "Komponen & dashboard khusus", "Maintenance & support prioritas"],
    cta: { label: "Jadwalkan Konsultasi", href: "mailto:hello@nextsite.id?subject=Konsultasi%20Paket%20Pro%20NextSite" },
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <Reveal as="div" className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Paket fleksibel untuk kebutuhanmu
          </h2>
          <p className="mt-3 text-gray-600">
            Transparan, bisa dikustom, dan fokus hasil. Harga dapat disesuaikan dengan scope proyek.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiers.map((tier, idx) => (
            <Reveal
              key={tier.name}
              as="div"
              delay={idx * 100}
              className="group"
            >
              <div
                className={`relative rounded-2xl p-[1px] transition-transform duration-200 group-hover:-translate-y-1 ${
                  tier.highlight
                    ? "bg-gradient-to-br from-violet-500/30 via-fuchsia-500/25 to-transparent"
                    : "bg-gradient-to-br from-gray-200/40 to-transparent"
                }`}
              >
                <div
                  className={`rounded-2xl border bg-white p-6 shadow-sm transition-shadow ${
                    tier.highlight ? "shadow-glow" : "group-hover:shadow-md"
                  }`}
                >
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">{tier.name}</h3>
                    <div className="text-2xl font-bold text-gray-900">{tier.price}</div>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{tier.desc}</p>
 
                  <ul className="mt-6 space-y-2 text-sm text-gray-700">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600" /> {f}
                      </li>
                    ))}
                  </ul>
 
                  <a
                    href={tier.cta.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`mt-6 inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm ${
                      tier.highlight ? "btn-primary" : "btn-outline"
                    }`}
                  >
                    {tier.cta.label}
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}