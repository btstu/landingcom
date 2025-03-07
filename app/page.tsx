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
  const pricingRef = useRef<HTMLDivElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);

  // Scroll function for pricing section
  const scrollToPricing = () => {
    if (pricingRef.current) {
      pricingRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useScrollAnimation();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header remains full width */}
      <Header />
      
      {/* Hero section with animation */}
      <div id="hero" className="stagger-children animate-fade-in-up">
        <Hero scrollToPricing={scrollToPricing} />
      </div>
      
      {/* Section 1 with animation */}
      <div id="features" className="stagger-children">
        <Section1 />
      </div>

      {/* Pricing section */}
      <div ref={pricingRef} id="pricing" className="stagger-children">  
        <PricingSection />
      </div>

      {/* Compare section with dynamic scroll animation */}
      <div id="compare" className="stagger-children">
        <Compare />
      </div>

      {/* Showcase section */}
      <div ref={showcaseRef} id="showcase" className="stagger-children">
        {/* Your showcase content will go here */}
      </div>

      {/* Contact form */}
      <div id="contact" className="stagger-children animate-fade-in-up">
        <ContactForm />
      </div>

      {/* Footer */}
      <div className="stagger-children">
        <Footer />
      </div>
    </div>
  );
}
