'use client'

import React from 'react';
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  return (
    <section className="relative bg-background py-12 sm:py-16 lg:py-20">
      {/* Title and text */}
      <div className="mx-auto max-w-[75rem] px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Prêt à révolutionner votre communication ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground lg:text-xl lg:leading-8">
            Remplissez le formulaire ci-dessous et un de nos experts vous contactera pour discuter de vos besoins spécifiques.
          </p>
        </div>
        
        <div className="mx-auto my-8 h-px max-w-6xl bg-gradient-to-r from-transparent via-border to-transparent"></div>
        
        {/* Form container with glow effects */}
        <div className="relative mx-auto max-w-3xl">
          {/* Blue glow effect around the form */}
          <div className="absolute -inset-4 rounded-3xl bg-blue-500/20 blur-xl"></div>
          
          {/* Card with multiple border effects */}
          <div className="relative z-10 rounded-2xl border border-border bg-card p-1.5 shadow-lg">
            <div className="rounded-xl border border-border bg-muted p-1.5">
              <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
                {/* Form content */}
                <form action="#" method="POST" className="space-y-6">
                  {/* Name fields */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="first_name" className="block text-sm font-medium text-foreground">
                        Prénom
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="first_name"
                          id="first_name"
                          autoComplete="given-name"
                          placeholder="Jean"
                          className="block w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-foreground shadow-sm focus:border-primary focus:ring-primary"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="last_name" className="block text-sm font-medium text-foreground">
                        Nom
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="last_name"
                          id="last_name"
                          autoComplete="family-name"
                          placeholder="Dupont"
                          className="block w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-foreground shadow-sm focus:border-primary focus:ring-primary"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Email and phone */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground">
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        placeholder="vous@exemple.com"
                        className="block w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-foreground shadow-sm focus:border-primary focus:ring-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground">
                      Téléphone
                    </label>
                    <div className="mt-1">
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        placeholder="+33 XXXXXXXXX"
                        className="block w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-foreground shadow-sm focus:border-primary focus:ring-primary"
                      />
                    </div>
                  </div>
                  
                  {/* Company name */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground">
                      Entreprise
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="company"
                        id="company"
                        autoComplete="organization"
                        placeholder="Nom de votre entreprise"
                        className="block w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-foreground shadow-sm focus:border-primary focus:ring-primary"
                      />
                    </div>
                  </div>
                  
                  {/* Message textarea */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground">
                      Message
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Décrivez vos besoins en communication..."
                        className="block w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-foreground shadow-sm focus:border-primary focus:ring-primary"
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
                        className="h-4 w-4 rounded border-border bg-background text-primary focus:ring-primary"
                      />
                    </div>
                    <div className="ml-3">
                      <label htmlFor="privacy" className="text-sm text-muted-foreground">
                        J&apos;accepte que Bettrcom me contacte au sujet de mes besoins en communication.
                      </label>
                    </div>
                  </div>
                  
                  {/* Submit button with gradient and shadow effect */}
                  <div className="pt-2">
                    <Button className="w-full py-6 text-base font-medium transform transition-all duration-200 hover:scale-105 hover:shadow-md hover:shadow-primary/20">
                      Envoyer ma demande
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 