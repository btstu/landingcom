'use client'

import React from 'react'
import { Button } from "@/components/ui/button"

export default function Compare() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-background to-section">
      {/* Heading */}
      <div className="relative z-10 max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl text-foreground">
          Transformez Votre Communication d&apos;Entreprise
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Passez du chaos de multiples outils à une plateforme unifiée et sécurisée.
        </p>
      </div>
      
      {/* Cards Container - Side by Side */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Card */}
          <div className="rounded-xl shadow-xl overflow-hidden bg-gradient-to-br from-red-500/20 to-red-700/20 border border-red-500/40 p-8">
            <h3 className="text-xl font-bold text-foreground md:text-2xl mb-6">Avant Bettrcom</h3>
            <div className="space-y-6">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-foreground">Outils fragmentés</h4>
                    <p className="mt-1 text-sm text-muted-foreground">Multiples applications pour chat, emails, partage de fichiers et visioconférence.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-foreground">Risques de sécurité</h4>
                    <p className="mt-1 text-sm text-muted-foreground">Informations sensibles dispersées sur différentes plateformes non sécurisées.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-foreground">Perte de temps</h4>
                    <p className="mt-1 text-sm text-muted-foreground">Temps perdu à jongler entre différentes plateformes et à rechercher des informations.</p>
                  </div>
                </li>
              </ul>
              <div className="mt-6">
                <Button variant="destructive">
                  Compliqué et risqué
                </Button>
              </div>
            </div>
          </div>
          
          {/* Second Card */}
          <div className="rounded-xl shadow-xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-blue-700/20 border border-blue-500/40 p-8">
            <h3 className="text-xl font-bold text-foreground md:text-2xl mb-6">Avec Bettrcom</h3>
            <div className="space-y-6">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-foreground">Plateforme unifiée</h4>
                    <p className="mt-1 text-sm text-muted-foreground">Toutes vos communications et partages de fichiers en un seul endroit sécurisé.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-foreground">Sécurité de niveau entreprise</h4>
                    <p className="mt-1 text-sm text-muted-foreground">Chiffrement de bout en bout, conformité RGPD et contrôles d&apos;accès granulaires.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-foreground">Productivité accrue</h4>
                    <p className="mt-1 text-sm text-muted-foreground">Réduction de 40% du temps passé à chercher des informations et à changer d&apos;outils.</p>
                  </div>
                </li>
              </ul>
              <div className="mt-6">
                <Button>
                  Simple et sécurisé
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 