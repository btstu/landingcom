'use client'

import React, { useRef, useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from 'framer-motion';
import ContactForm from './contact-form';
import Footer from './footer';

export default function Compare() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  
  // This ensures hydration mismatch is avoided
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // This tracks the scroll progress within the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  } as const);

  // Control the position of the second card (this is the key animation)
  const y2 = useTransform(scrollYProgress, [0.1, 0.6], [200, 0]);
  
  return (
    <>
      <div 
        ref={containerRef} 
        className="relative bg-background py-2 min-h-[100vh]"
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Votre Communication d&apos;Entreprise Transformée
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez comment Bettrcom révolutionne la communication interne et externe de votre entreprise.
            </p>
          </div>
          
          {/* Cards container with proper z-index stacking */}
          <div className="relative">
            {/* First card - fixed position with lower z-index */}
            <div className="sticky top-[30vh] z-10">
              <div className="bg-card border border-border rounded-2xl p-8 shadow-lg h-[300px] flex flex-col justify-center">
                <div className="text-center">
                  <div className="inline-block bg-destructive/10 text-destructive px-4 py-2 rounded-full mb-4 border-2 border-red-500">
                    Avant Bettrcom
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-6">
                    Votre Communication est Fragmentée
                  </h3>
                  <p className="text-lg text-muted-foreground mb-8">
                    Vous êtes coincé sur des plateformes disparates, où votre marque se perd, vos équipes sont désynchronisées et vous manquez de contrôle. 
                    <strong className="text-foreground"> Nous croyons que votre entreprise mérite mieux.</strong>
                  </p>
                  <Button variant="destructive" className="mx-auto">
                    Comprendre les Défis
                  </Button>
                </div>
              </div>
            </div>

            {/* Second card - scrolls over with higher z-index */}
            {isClient && (
              <motion.div 
                style={{ y: y2 }}
                className="relative z-20 mt-[5vh] bg-card rounded-2xl p-8 h-[300px] flex flex-col justify-center shadow-[0_0_30px_10px_rgba(59,130,246,0.3)] border border-blue-500/20"
              >
                {/* Extra glow elements */}
                <div className="absolute inset-0 -z-10 bg-blue-500/5 rounded-2xl blur-xl"></div>
                <div className="absolute inset-0 -z-10 bg-blue-500/10 rounded-2xl blur-md"></div>
                
                <div className="text-center">
                  <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full mb-4 border-2 border-blue-500">
                    Avec Bettrcom
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-6">
                    🤝Votre Communication est Unifiée
                  </h3>
                  <p className="text-lg text-muted-foreground mb-8">
                    Profitez d&apos;une plateforme sécurisée et centralisée où votre communication devient fluide, votre collaboration efficace et votre entreprise plus performante. 
                    <strong className="text-foreground"> Avec Bettrcom, vous transformez votre communication.</strong>
                  </p>
                  <Button variant="default" className="mx-auto">
                    Découvrir la Solution
                  </Button>
                </div>
              </motion.div>
            )}
          </div>
          
          {/* Contact Form Component */}
          <ContactForm />
        </div>
  
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-indigo-100/50 opacity-50 blur-2xl -z-10"></div>
      </div>
      
      {/* Footer Component */}
      <Footer />
    </>
  );
}