import React from "react";
import HomePage from "@/components/home";
import OnboardingSteps from "@/components/about";
import WhyRmax from "@/components/why";
import IndustriesSection from "@/components/service";
import PricingSection from "@/components/pricing";
import MobileAppSection from "@/components/manage";
import FAQSection from "@/components/question";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
    <HomePage />
    <OnboardingSteps />
    <WhyRmax />
    <IndustriesSection />
    <PricingSection />
    <MobileAppSection />
    <FAQSection />
    <Footer />
    </> 
  );
}
