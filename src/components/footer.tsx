import Link from "next/link";
import { Github, Linkedin, Mail, Twitter, Rocket } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand + Social */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Rocket className="h-6 w-6 text-violet-600" />
              <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-lg font-semibold text-transparent">
                NextSite
              </span>
            </Link>
            <p className="mt-3 max-w-md text-sm text-gray-600">
              Jasa pembuatan website profesional: landing page, company profile, e‑commerce, hingga aplikasi web kustom.
              Cepat, modern, dan SEO‑friendly agar brand Anda tampil meyakinkan dan konversi meningkat.
            </p>

            <div className="mt-4 flex items-center gap-3">
              <a
                href="mailto:hello@nextsite.id"
                className="inline-flex items-center justify-center rounded-md border px-2.5 py-1.5 text-sm text-gray-700 hover:bg-gray-50"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md border px-2.5 py-1.5 text-sm text-gray-700 hover:bg-gray-50"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md border px-2.5 py-1.5 text-sm text-gray-700 hover:bg-gray-50"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md border px-2.5 py-1.5 text-sm text-gray-700 hover:bg-gray-50"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <div className="text-sm font-semibold text-gray-900">Product</div>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#features" className="hover:text-gray-900">Features</a></li>
              <li><a href="#pricing" className="hover:text-gray-900">Pricing</a></li>
              <li><a href="#testimonials" className="hover:text-gray-900">Testimonials</a></li>
              <li><a href="#cta" className="hover:text-gray-900">Get Started</a></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-gray-900">Company</div>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">About</a></li>
              <li><a href="#" className="hover:text-gray-900">Blog</a></li>
              <li><a href="#" className="hover:text-gray-900">Contact</a></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-gray-900">Resources</div>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Docs</a></li>
              <li><a href="#" className="hover:text-gray-900">Guides</a></li>
              <li><a href="#" className="hover:text-gray-900">Support</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="sm:col-span-2 md:col-span-2 lg:col-span-1">
            <div className="text-sm font-semibold text-gray-900">Stay up to date</div>
            <p className="mt-3 text-sm text-gray-600">Get tips and updates in your inbox.</p>
            <form className="mt-3 flex gap-2">
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full rounded-md border px-3 py-2 text-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-violet-500"
              />
              <button
                type="button"
                className="btn-primary inline-flex items-center justify-center px-3 py-2 text-sm"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} NextSite. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
