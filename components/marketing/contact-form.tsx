'use client'

import React from 'react';
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-section to-card py-12 sm:py-16 lg:py-20">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-30">
        <div className="h-full w-full bg-[linear-gradient(to_right,transparent_0%,transparent_40%,#f8fafc_40%,#f8fafc_60%,transparent_60%,transparent_100%)]"></div>
        <div className="h-full w-full bg-[linear-gradient(to_bottom,transparent_0%,transparent_40%,#f8fafc_40%,#f8fafc_60%,transparent_60%,transparent_100%)]"></div>
        
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px)] bg-[size:24px_100%]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:100%_24px]"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-md text-center sm:max-w-xl">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Prêt à révolutionner votre communication interne ?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Remplissez le formulaire ci-dessous et un de nos experts vous contactera pour discuter de vos besoins spécifiques.
          </p>
        </div>
        
        <div className="mx-auto mt-10 max-w-md rounded-3xl bg-card p-8 shadow-xl ring-1 ring-gray-200 sm:max-w-lg sm:p-10">
          <form action="#" method="POST" className="space-y-6">
            {/* Name fields */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="first_name" className="block text-sm font-medium text-muted-foreground">
                  Prénom
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    autoComplete="given-name"
                    placeholder="Jean"
                    className="block w-full rounded-xl border-gray-300 bg-white/5 py-3 text-foreground shadow-sm focus:border-primary focus:ring-primary"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last_name" className="block text-sm font-medium text-muted-foreground">
                  Nom
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    autoComplete="family-name"
                    placeholder="Dupont"
                    className="block w-full rounded-xl border-gray-300 bg-white/5 py-3 text-foreground shadow-sm focus:border-primary focus:ring-primary"
                  />
                </div>
              </div>
            </div>
            
            {/* Email and phone */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">
                Email
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  placeholder="vous@exemple.com"
                  className="block w-full rounded-xl border-gray-300 bg-white/5 py-3 text-foreground shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground">
                Téléphone
              </label>
              <div className="mt-1">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  placeholder="+33 XXXXXXXXX"
                  className="block w-full rounded-xl border-gray-300 bg-white/5 py-3 text-foreground shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>
            </div>
            
            {/* Company name */}
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-muted-foreground">
                Entreprise
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="organization"
                  placeholder="Nom de votre entreprise"
                  className="block w-full rounded-xl border-gray-300 bg-white/5 py-3 text-foreground shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>
            </div>
            
            {/* Message textarea */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-muted-foreground">
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Décrivez vos besoins en communication..."
                  className="block w-full rounded-xl border-gray-300 bg-white/5 py-3 text-foreground shadow-sm focus:border-primary focus:ring-primary"
                ></textarea>
              </div>
            </div>
            
            {/* Privacy checkbox */}
            <div className="flex items-start">
              <div className="flex h-5 items-center">
                <input
                  id="privacy"
                  name="privacy"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
              </div>
              <div className="ml-3">
                <label htmlFor="privacy" className="text-sm text-muted-foreground">
                  J&apos;accepte que Bettrcom me contacte au sujet de mes besoins en communication.
                </label>
              </div>
            </div>
            
            {/* Submit button */}
            <Button className="w-full py-6 text-base font-medium transform transition-transform duration-200 hover:scale-105">
              Envoyer ma demande
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
} 