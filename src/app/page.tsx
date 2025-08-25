import Hero from "@/components/hero";
import Trustbar from "@/components/trustbar";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Trustbar />
      <Features />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
