import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "./home/sections/HeroSection";
import StatsSection from "./home/sections/StatsSection";
import WhyChooseSection from "./home/sections/WhyChooseSection";
import ServicesSection from "./home/sections/ServicesSection";
import ClientsSection from "./home/sections/ClientsSection";
import CtaSection from "./home/sections/CtaSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <WhyChooseSection />
      <ServicesSection />
      <ClientsSection />
      <CtaSection />
      <Footer />
    </div>
  );
}