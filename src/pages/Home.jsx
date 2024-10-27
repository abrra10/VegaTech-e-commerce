import React, { useRef } from "react";
import FeaturedProducts from "../components/FeaturedProducts";
import Hero from "../components/Hero";
import Companies from "../components/Companies";
import ContactSection from "../components/Contact";
import WhyUs from "../components/WhyUs";

export default function Home() {
  // Create a ref for the target section
  const targetSectionRef = useRef(null);

  // Handler for smooth scrolling to the target section
  const handleScroll = () => {
    targetSectionRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Hero onScrollToPromotions={handleScroll} />
      <WhyUs />
      <FeaturedProducts type="Nouveautés" />
      <Companies />
      <FeaturedProducts type="Promotions" ref={targetSectionRef} />
      <ContactSection />
    </div>
  );
}
