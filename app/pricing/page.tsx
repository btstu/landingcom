import React from 'react';
import PricingSection from '../../components/marketing/pricing';
import Header from '../../components/marketing/header';
import Footer from '../../components/marketing/footer';

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-10 pb-20">
        <PricingSection />
      </div>
      <Footer />
    </main>
  );
} 