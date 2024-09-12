import Companies from "@/sections/companies";
import FaqSection from "@/sections/faq";
import HeroSection from "@/sections/hero";
import ServicesSection from "@/sections/services";

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      <HeroSection />
      <Companies />
      <ServicesSection />
      <FaqSection />
    </main>
  );
}
