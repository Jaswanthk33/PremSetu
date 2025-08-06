import HeroSection from "@/components/HeroSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyParentsLoveSection from "@/components/WhyParentsLoveSection";
import DemoGallerySection from "@/components/DemoGallerySection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import PrivacyTrustSection from "@/components/PrivacyTrustSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import { useExitIntent } from "@/hooks/useExitIntent";

const Index = () => {
  const { showExitIntent, hideExitIntent } = useExitIntent();

  return (
    <div className="min-h-screen">
      <HeroSection />
      {/* <BeforeAfterSection /> */}
      <HowItWorksSection />
      <WhyParentsLoveSection />
      <DemoGallerySection />
      <PricingSection />
      <FAQSection />
      <PrivacyTrustSection />
      <FinalCTASection />
      <Footer />
      
      {/* Exit Intent Popup */}
      {showExitIntent && <ExitIntentPopup onClose={hideExitIntent} />}
    </div>
  );
};

export default Index;
