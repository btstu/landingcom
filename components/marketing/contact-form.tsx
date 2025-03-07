'use client'

import React from 'react';
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  return (
    <div className="mt-32 mb-16 relative pt-8">
      {/* Grid pattern background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-blue-200 [mask-image:radial-gradient(top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="contact-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
              x="50%"
              y="100%"
            >
              <path d="M.5 40V.5H40" fill="none" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            strokeWidth="0"
            fill="url(#contact-grid)"
            opacity="0.3" // Increased opacity from 0.1 to 0.3
          />
        </svg>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20"></div>
      </div>
      
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Prêt à Elever Votre Communication?
          </h2>
          <p className="text-xl text-muted-foreground">
            Laissez-nous vos coordonnées et nous vous contacterons pour discuter de vos besoins spécifiques.
          </p>
        </div>
        
        <div className="bg-card shadow-lg rounded-2xl p-8 border border-border relative overflow-hidden">
          {/* Decorative glow element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-xl -mr-10 -mt-10"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-xl -ml-10 -mb-10"></div>
          
          <form className="relative z-10 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-foreground">
                  Nom Complet <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="Jean Dupont"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-foreground">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="jean.dupont@entreprise.com"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="company" className="block text-sm font-medium text-foreground">
                Entreprise
              </label>
              <input
                type="text"
                id="company"
                className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                placeholder="Nom de votre entreprise"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-foreground">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                placeholder="Parlez-nous de vos besoins en communication..."
                required
              ></textarea>
            </div>
            
            <div className="flex items-center">
              <input 
                id="consent" 
                type="checkbox" 
                className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-border rounded"
                required 
              />
              <label htmlFor="consent" className="ml-2 block text-sm text-muted-foreground">
                J'accepte que Bettrcom me contacte au sujet de mes besoins en communication.
              </label>
            </div>
            
            <div className="pt-2">
              <Button className="w-full py-6 text-base font-medium transform transition-transform duration-200 hover:scale-105">
                Envoyer Ma Demande
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground text-center mt-4">
              Vos données personnelles sont protégées conformément à notre politique de confidentialité.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
} 