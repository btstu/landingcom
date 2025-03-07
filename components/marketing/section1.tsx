'use client'
import React from 'react';
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Section1() {
  return (
    <section className="bg-background py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[75rem] space-y-14 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Nos Solutions vous permettent de</p>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">Communiquer en toute securite</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg font-normal text-muted-foreground lg:text-xl lg:leading-8">dans votre companie - c&apos;est simple et rapide a mettre en place.</p>
        </div>
        
        <div className="mx-auto my-4 h-px max-w-6xl bg-gradient-to-r from-transparent via-border to-transparent sm:mt-16 lg:mt-20 xl:mt-20"></div>
        
        <div className="relative">
          {/* Blue glow effect around the table */}
          <div className="absolute -inset-4 rounded-3xl bg-blue-500/20 blur-xl"></div>
          
          <div className="relative z-10 rounded-2xl border border-border bg-card p-1.5 shadow-lg">
            <div className="rounded-xl border border-border bg-muted p-1.5">
              <div className="divide-y divide-border rounded-lg border border-border bg-card md:flex md:divide-y-0 md:divide-x">
                
                {/* Card 1: Messagerie encryptée */}
                <div className="w-full space-y-4 p-5">
                  <div className="flex h-full flex-col space-y-2 divide-y divide-border">
                    <h3 className="text-lg font-semibold text-foreground sm:text-xl">Messagerie encryptée a l&apos;interne</h3>
                    <div className="flex h-full flex-col">
                      <h4 className="mt-2 text-base font-normal text-muted-foreground">Communication sécurisée entre les membres de vos équipes. Chiffré de bout en bout pour une confidentialité totale.</h4>
                      <div className="flex h-full flex-col justify-between">
                        <ul className="my-6 space-y-3 text-base font-normal text-muted-foreground">
                          {[
                            "Chiffrement de bout en bout",
                            "Canaux privés et publics",
                            "Partage de fichiers sécurisé",
                            "Historique des conversations",
                            "Notifications personnalisables"
                          ].map((feature, index) => (
                            <li key={index} className="flex items-center gap-3">
                              <Image 
                                src="/rocket.svg" 
                                alt="" 
                                width={16} 
                                height={16} 
                                className="h-4 w-4"
                              />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button 
                          variant="outline" 
                          className="w-full rounded-xl border-border text-foreground hover:border-border/80 hover:text-foreground/90"
                          asChild
                        >
                          <a href="/pricing">Commencer maintenant</a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Card 2: Partage de fichiers */}
                <div className="w-full space-y-4 p-5">
                  <div className="flex h-full flex-col space-y-2 divide-y divide-border">
                    <h3 className="text-lg font-semibold text-foreground sm:text-xl">Partage de fichiers sécurisé</h3>
                    <div className="flex h-full flex-col">
                      <h4 className="mt-2 text-base font-normal text-muted-foreground">Échangez des documents confidentiels en toute sécurité. Contrôlez qui peut accéder à vos fichiers et pendant combien de temps.</h4>
                      <div className="flex h-full flex-col justify-between">
                        <ul className="my-6 space-y-3 text-base font-normal text-muted-foreground">
                          {[
                            "Stockage crypté",
                            "Contrôle des accès",
                            "Liens à expiration",
                            "Historique des versions",
                            "Intégration avec votre système"
                          ].map((feature, index) => (
                            <li key={index} className="flex items-center gap-3">
                              <Image 
                                src="/rocket.svg" 
                                alt="" 
                                width={16} 
                                height={16} 
                                className="h-4 w-4"
                              />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button 
                          variant="outline" 
                          className="w-full rounded-xl border-border text-foreground hover:border-border/80 hover:text-foreground/90"
                          asChild
                        >
                          <a href="/partage-fichiers">Explorer les options</a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Card 3: Gestion des équipes */}
                <div className="w-full space-y-4 p-5">
                  <div className="flex h-full flex-col space-y-2 divide-y divide-border">
                    <h3 className="text-lg font-semibold text-foreground sm:text-xl">Gestion des équipes</h3>
                    <div className="flex h-full flex-col">
                      <h4 className="mt-2 text-base font-normal text-muted-foreground">Organisez votre structure d&apos;entreprise avec des groupes, des rôles et des permissions personnalisés pour chaque membre.</h4>
                      <div className="flex h-full flex-col justify-between">
                        <ul className="my-6 space-y-3 text-base font-normal text-muted-foreground">
                          {[
                            "Gestion des rôles",
                            "Permissions granulaires",
                            "Groupes et départements",
                            "Intégration LDAP/SSO",
                            "Rapports d&apos;activité"
                          ].map((feature, index) => (
                            <li key={index} className="flex items-center gap-3">
                              <Image 
                                src="/rocket.svg" 
                                alt="" 
                                width={16} 
                                height={16} 
                                className="h-4 w-4"
                              />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button 
                          variant="outline" 
                          className="w-full rounded-xl border-border text-foreground hover:border-border/80 hover:text-foreground/90"
                          asChild
                        >
                          <a href="/gestion-equipes">Découvrir les fonctionnalités</a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          
          {/* Background gradient effect */}
          <div className="absolute -inset-[0.1rem] z-0">
            <div className="mx-auto h-full w-full opacity-10 blur-lg filter bg-container-gradient"></div>
          </div>
        </div>
      </div>
    </section>
  );
}