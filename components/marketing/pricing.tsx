'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X } from "lucide-react"
import { cn } from '@/lib/utils'

// Feature check or X icon component
const FeatureItem = ({ included, children }: { included: boolean, children: React.ReactNode }) => (
  <li className="flex items-start space-x-3 py-2">
    {included ? (
      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
    ) : (
      <X className="h-5 w-5 text-muted-foreground/50 shrink-0 mt-0.5" />
    )}
    <span className={cn(
      "text-sm",
      included ? "text-foreground" : "text-muted-foreground/70 line-through"
    )}>
      {children}
    </span>
  </li>
)

export default function PricingSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-blue-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="pricing-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
              x="50%"
              y="0"
            >
              <path d="M.5 40V.5H40" fill="none" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            strokeWidth="0"
            fill="url(#pricing-grid)"
            opacity="0.3"
          />
        </svg>
        {/* Gradient overlay */}
    
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Des tarifs simples et transparents
          </h2>
          <p className="text-xl text-muted-foreground">
            Choisissez le forfait qui correspond aux besoins de votre entreprise.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Starter Plan */}
          <Card className="flex flex-col border border-border bg-card rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6 border-b border-border bg-card/50">
              <h3 className="text-lg font-semibold text-foreground">Essentiel</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold tracking-tight text-foreground">29€</span>
                <span className="ml-1 text-xl font-semibold text-muted-foreground">/mois</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                Par utilisateur, facturé annuellement
              </p>
            </div>
            <div className="flex-1 p-6 flex flex-col">
              <p className="text-sm text-muted-foreground mb-6">
                Perfect pour les petites équipes et les startups.
              </p>
              <ul className="space-y-3 flex-1">
                <FeatureItem included={true}>Messagerie d&apos;équipe illimitée</FeatureItem>
                <FeatureItem included={true}>Jusqu&apos;à 5 canaux de communication</FeatureItem>
                <FeatureItem included={true}>Stockage de 10 Go par utilisateur</FeatureItem>
                <FeatureItem included={true}>Intégrations basiques (jusqu&apos;à 5)</FeatureItem>
                <FeatureItem included={true}>Support par email</FeatureItem>
                <FeatureItem included={false}>Communication unifiée multicanale</FeatureItem>
                <FeatureItem included={false}>Analytiques avancées</FeatureItem>
                <FeatureItem included={false}>Personnalisation de marque</FeatureItem>
                <FeatureItem included={false}>Support 24/7</FeatureItem>
              </ul>
              <Button className="mt-8 w-full text-blue-500" variant="outline">
                Commencer l&apos;essai gratuit
              </Button>
            </div>
          </Card>

          {/* Pro Plan - Highlighted */}
          <Card className="flex flex-col border-2 border-primary bg-card rounded-xl overflow-hidden shadow-lg shadow-primary/10 relative lg:-mt-4 lg:-mb-4 lg:scale-105 z-10">
            <div className="absolute top-0 left-0 right-0 px-4 transform -translate-y-1/2">
              <Badge className="bg-primary hover:bg-primary/90 text-primary-foreground py-1 mt-10 px-3 mx-auto block w-fit">
                Le plus populaire
              </Badge>
            </div>
            <div className="p-8 border-b border-border bg-card/50">
              <h3 className="text-lg font-semibold text-foreground">Business</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-5xl font-bold tracking-tight text-foreground">59€</span>
                <span className="ml-1 text-xl font-semibold text-muted-foreground">/mois</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                Par utilisateur, facturé annuellement
              </p>
            </div>
            <div className="flex-1 p-8 flex flex-col">
              <p className="text-sm text-muted-foreground mb-6">
                Idéal pour les entreprises en croissance avec des besoins de communication avancés.
              </p>
              <ul className="space-y-3 flex-1">
                <FeatureItem included={true}>Messagerie d&apos;équipe illimitée</FeatureItem>
                <FeatureItem included={true}>Canaux de communication illimités</FeatureItem>
                <FeatureItem included={true}>Stockage de 50 Go par utilisateur</FeatureItem>
                <FeatureItem included={true}>Intégrations avancées (jusqu&apos;à 20)</FeatureItem>
                <FeatureItem included={true}>Communication unifiée multicanale</FeatureItem>
                <FeatureItem included={true}>Analytiques avancées</FeatureItem>
                <FeatureItem included={true}>Personnalisation de marque</FeatureItem>
                <FeatureItem included={true}>Support prioritaire par email et téléphone</FeatureItem>
                <FeatureItem included={false}>API et développement personnalisé</FeatureItem>
              </ul>
              <Button className="mt-8 w-full" variant="default">
                Commencer l&apos;essai gratuit
              </Button>
            </div>
          </Card>

          {/* Enterprise Plan */}
          <Card className="flex flex-col border border-border bg-card rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6 border-b border-border bg-card/50">
              <h3 className="text-lg font-semibold text-foreground">Entreprise</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold tracking-tight text-foreground">Sur mesure</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                Contactez-nous pour un devis personnalisé
              </p>
            </div>
            <div className="flex-1 p-6 flex flex-col">
              <p className="text-sm text-muted-foreground mb-6">
                Solution complète pour les grandes entreprises avec des besoins spécifiques.
              </p>
              <ul className="space-y-3 flex-1">
                <FeatureItem included={true}>Tout ce qui est inclus dans Business</FeatureItem>
                <FeatureItem included={true}>Stockage illimité</FeatureItem>
                <FeatureItem included={true}>Intégrations illimitées</FeatureItem>
                <FeatureItem included={true}>API et développement personnalisé</FeatureItem>
                <FeatureItem included={true}>Support 24/7 dédié</FeatureItem>
                <FeatureItem included={true}>Audit de sécurité annuel</FeatureItem>
                <FeatureItem included={true}>SLA avec garantie de temps de fonctionnement</FeatureItem>
                <FeatureItem included={true}>Formation et onboarding personnalisés</FeatureItem>
                <FeatureItem included={true}>Gestionnaire de compte dédié</FeatureItem>
              </ul>
              <Button className="mt-8 w-full text-blue-500" variant="outline">
                Contacter nos équipes
              </Button>
            </div>
          </Card>
        </div>

        {/* FAQ section */}
        <div className="mt-32 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-foreground mb-8 text-center">
            Questions fréquentes
          </h3>
          <div className="space-y-6">
            <div className="border-b border-border pb-6">
              <h4 className="text-base font-medium text-foreground mb-2">
                Puis-je changer de forfait à tout moment ?
              </h4>
              <p className="text-sm text-muted-foreground">
                Oui, vous pouvez passer à un forfait supérieur à tout moment. La différence sera calculée au prorata. Pour passer à un forfait inférieur, le changement prendra effet à la fin de votre cycle de facturation.
              </p>
            </div>
            <div className="border-b border-border pb-6">
              <h4 className="text-base font-medium text-foreground mb-2">
                Comment fonctionne l&apos;essai gratuit ?
              </h4>
              <p className="text-sm text-muted-foreground">
                Notre essai gratuit vous donne accès à toutes les fonctionnalités du forfait Business pendant 14 jours, sans engagement. Aucune carte de crédit n&apos;est requise pour commencer.
              </p>
            </div>
            <div className="border-b border-border pb-6">
              <h4 className="text-base font-medium text-foreground mb-2">
                Quelles méthodes de paiement acceptez-vous ?
              </h4>
              <p className="text-sm text-muted-foreground">
                Nous acceptons les principales cartes de crédit (Visa, Mastercard, American Express) ainsi que les virements bancaires pour les forfaits annuels et Entreprise.
              </p>
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Vous avez des questions supplémentaires ?
          </p>
          <Button variant="link" className="text-white">
            Contactez notre équipe commerciale
          </Button>
        </div>
      </div>
    </section>
  )
} 