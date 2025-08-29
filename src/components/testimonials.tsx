import { Star, Quote } from "lucide-react";
import Reveal from "@/components/reveal";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Aisyah",
    role: "Founder, NusaPay",
    quote:
      "NextSite bantu kami rilis website yang rapi dan cepat. Trust meningkat dan lead masuk lebih konsisten.",
  },
  {
    name: "Dimas",
    role: "PM, Sagara Studio",
    quote:
      "Eksekusi solid. Desain clean, performa kencang, dan SEO rapih. Onboarding klien jauh lebih mudah.",
  },
  {
    name: "Kevin",
    role: "CTO, FoodiFY",
    quote:
      "Integrasi payment dan WhatsApp berjalan mulus. Tim responsif dan hasilnya sesuai ekspektasi.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-gradient-to-b from-white to-fuchsia-50">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <Reveal as="div" className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs font-medium text-gray-700 shadow-sm">
            <Star className="h-4 w-4 text-amber-500" />
            Dipercaya klien bisnis & startup
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Apa kata klien kami
          </h2>
          <p className="mt-3 text-gray-600">
            Hasil nyata dari bisnis yang go‑online bersama NextSite.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, idx) => (
            <Reveal
              key={t.name}
              as="figure"
              delay={idx * 90}
              className="group"
            >
              <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 transition-transform duration-200 group-hover:-translate-y-1">
                <div className="relative rounded-2xl border bg-white p-6 shadow-sm transition-shadow group-hover:shadow-md md:p-7">
                  <Quote className="absolute right-5 top-5 h-5 w-5 text-violet-600/30" />
                  <blockquote className="text-gray-800">“{t.quote}”</blockquote>
                  <figcaption className="mt-5 border-t pt-4">
                    <div className="font-semibold text-gray-900">{t.name}</div>
                    <div className="text-sm text-gray-600">{t.role}</div>
                  </figcaption>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}