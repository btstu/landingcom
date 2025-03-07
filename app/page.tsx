"use client";   

import React, { useRef } from 'react'
import Header from "@/components/marketing/header";
import Hero from "@/components/marketing/hero";
import Section1 from "@/components/marketing/section1";
import Compare from "@/components/marketing/compare";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ContactForm from "@/components/marketing/contact-form";
import Footer from "@/components/marketing/footer";
import PricingSection from "@/components/marketing/pricing";

export default function Home() {
  // Create refs for all sections
  const heroRef = useRef<HTMLDivElement>(null);
  const section1Ref = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const compareRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);

  // Scroll functions for each section
  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToHero = () => scrollToSection(heroRef);
  const scrollToSection1 = () => scrollToSection(section1Ref);
  const scrollToPricing = () => scrollToSection(pricingRef);
  const scrollToCompare = () => scrollToSection(compareRef);
  const scrollToContact = () => scrollToSection(contactRef);
  const scrollToShowcase = () => scrollToSection(showcaseRef);

  useScrollAnimation();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header remains full width */}
      <Header />
      
      {/* Hero section with animation */}
      <div ref={heroRef} id="hero" className="stagger-children animate-fade-in-up">
        <Hero scrollToPricing={scrollToPricing} />
      </div>
      
      {/* Section 1 with animation */}
      <div ref={section1Ref} id="features" className="stagger-children">
        <Section1 />
      </div>

      {/* Pricing section */}
      <div ref={pricingRef} id="pricing" className="stagger-children">  
        <PricingSection />
      </div>

      {/* Compare section with dynamic scroll animation */}
      <div ref={compareRef} id="compare" className="stagger-children">
        <Compare />
      </div>

      {/* Showcase section */}
      <div ref={showcaseRef} id="showcase" className="stagger-children">
        {/* Your showcase content will go here */}
      </div>

      {/* Contact form */}
      <div ref={contactRef} id="contact" className="stagger-children animate-fade-in-up">
        <ContactForm />
      </div>

      {/* Footer */}
      <div className="stagger-children">
        <Footer />
      </div>
    </div>
  );
}
