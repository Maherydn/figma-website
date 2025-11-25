import AboutSection from "./_components/aboutSection/AboutSection";
import BestPractices from "./_components/bestPractices/BestPractices";
import ComponentSection from "./_components/componentSection/ComponentSection";
import FeaturesSection from "./_components/featuresSection/FeaturesSection";
import HeroSection from "./_components/heroSection/HeroSection";
import PartenerSection from "./_components/partenerSection/PartenerSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PartenerSection />
      <AboutSection />
      <FeaturesSection />
      <BestPractices />
      <ComponentSection />
    </>
  );
}
