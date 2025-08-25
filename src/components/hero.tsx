import { Rocket, Shield, Sparkles } from "lucide-react";
import Image from "next/image";
 
export default function Hero() {
 return (
   <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-fuchsia-50 to-white">
     <div className="mx-auto grid max-w-6xl gap-8 px-4 py-20 md:grid-cols-2 md:py-28">
       {/* Copy */}
       <div className="flex flex-col justify-center">
         <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs font-medium text-gray-700 shadow-sm">
           <Sparkles className="h-4 w-4 text-violet-600" />
           NextSite — Jasa Pembuatan Website
         </div>
 
         <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
           Website profesional untuk bisnismu
         </h1>
         <p className="mt-4 text-gray-600">
           Kami membuat landing page, company profile, e‑commerce, dan aplikasi web custom.
           Cepat, modern, dan SEO‑friendly agar brand kamu tampil meyakinkan dan konversi meningkat.
         </p>
 
         <div className="mt-8 flex flex-wrap items-center gap-3">
           <a
             href="#cta"
             className="inline-flex items-center gap-2 rounded-md bg-violet-600 px-4 py-2 text-white shadow-sm hover:bg-violet-700"
           >
             <Rocket className="h-4 w-4" /> Konsultasi Gratis
           </a>
           <a
             href="#features"
             className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-gray-900 hover:bg-gray-50"
           >
             Lihat Layanan
           </a>
         </div>
 
         <div className="mt-8 flex items-center gap-3 text-xs text-gray-500">
           <Shield className="h-4 w-4 text-green-600" />
           Garansi kepuasan & support 30 hari.
         </div>
       </div>
 
       {/* Visual with photo */}
       <div className="relative">
         <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl border bg-white shadow-lg md:max-w-lg">
           <Image
             src="/assets/logo.jpg"
             alt="Contoh website NextSite"
             fill
             sizes="(min-width: 1024px) 512px, (min-width: 768px) 50vw, 90vw"
             className="object-cover"
             priority
           />
         </div>
       </div>
     </div>
   </section>
 );
}
