import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesSection />
      <SocialProofSection />
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Index;
