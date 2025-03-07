'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, XCircle } from "lucide-react"
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export default function CompareTool() {
  return (
    <section className="py-12 bg-background sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl xl:text-5xl">
            Transformez Votre Communication d'Entreprise
          </h2>
          <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-muted-foreground">
            La différence entre une communication fragmentée et unifiée
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-12 lg:grid-cols-2">
          {/* Without Bettrcom Card */}
          <Card className="p-8 border-2 border-destructive/50 bg-destructive/5 rounded-xl relative overflow-hidden">
            <h3 className="mb-6 text-2xl font-bold text-destructive">
              Sans Bettrcom
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <XCircle className="w-6 h-6 mr-2 text-destructive shrink-0" />
                <span className="font-medium text-destructive/80">
                  "Communication lente et désorganisée" - Clients mécontents
                </span>
              </li>
              <li className="flex items-start">
                <XCircle className="w-6 h-6 mr-2 text-destructive shrink-0" />
                <span className="font-medium text-destructive/80">
                  Informations perdues entre les plateformes
                </span>
              </li>
              <li className="flex items-start">
                <XCircle className="w-6 h-6 mr-2 text-destructive shrink-0" />
                <span className="font-medium text-destructive/80">
                  Absence de suivi centralisé
                </span>
              </li>
              <li className="flex items-start">
                <XCircle className="w-6 h-6 mr-2 text-destructive shrink-0" />
                <span className="font-medium text-destructive/80">
                  Équipes désynchronisées et inefficaces
                </span>
              </li>
              <li className="flex items-start">
                <XCircle className="w-6 h-6 mr-2 text-destructive shrink-0" />
                <span className="font-medium text-destructive/80">
                  Difficultés à maintenir une image de marque cohérente
                </span>
              </li>
            </ul>
            <div className="mt-8">
              <Button variant="destructive">
                Comprendre les Défis
              </Button>
            </div>
          </Card>

          {/* With Bettrcom Card */}
          <motion.div 
            className="relative"
            initial={{ y: 40, opacity: 0.8 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Card className={cn(
              "p-8 transition-transform duration-200 border-2 border-primary/50",
              "bg-gradient-to-br from-primary/5 to-card shadow-lg rounded-xl",
              "hover:-translate-y-1 hover:shadow-primary/20 hover:shadow-xl"
            )}>
              {/* Glow effect */}
              <div className="absolute inset-0 -z-10 bg-primary/5 rounded-2xl blur-xl"></div>
              <div className="absolute inset-0 -z-10 bg-primary/10 rounded-2xl blur-md"></div>
              
              <h3 className="mb-6 text-2xl font-bold text-primary">
                Avec Bettrcom
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 mr-2 text-primary shrink-0" />
                  <span className="font-medium text-primary/80">
                    "Communication fluide et efficace" - Clients satisfaits
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 mr-2 text-primary shrink-0" />
                  <span className="font-medium text-primary/80">
                    Plateforme unique et centralisée
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 mr-2 text-primary shrink-0" />
                  <span className="font-medium text-primary/80">
                    Analyses détaillées et suivi en temps réel
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 mr-2 text-primary shrink-0" />
                  <span className="font-medium text-primary/80">
                    Collaboration harmonieuse entre équipes
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 mr-2 text-primary shrink-0" />
                  <span className="font-medium text-primary/80">
                    Image de marque cohérente sur tous les canaux
                  </span>
                </li>
              </ul>
              <div className="mt-8">
                <Button>
                  Découvrir la Solution
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 