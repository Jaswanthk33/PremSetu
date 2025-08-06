import HeroSection from "@/components/HeroSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyParentsLoveSection from "@/components/WhyParentsLoveSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import PrivacyTrustSection from "@/components/PrivacyTrustSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BeforeAfterSection />
      <HowItWorksSection />
      <WhyParentsLoveSection />
      <PricingSection />
      <FAQSection />
      <PrivacyTrustSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
