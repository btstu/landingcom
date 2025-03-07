import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card border-t border-border relative overflow-hidden">
      {/* Decorative glow elements */}
      <div className="absolute top-10 right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1 space-y-6">
            <Link href="/" className="inline-block">
              <Image 
                src="/bettrcomLogo.svg" 
                alt="Bettrcom Logo" 
                width={150} 
                height={40} 
                className="mb-4"
              />
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Transformez votre communication d'entreprise avec notre plateforme unifiée, 
              sécurisée et centralisée pour une collaboration efficace.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-medium text-foreground text-lg">Liens Rapides</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition text-sm">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition text-sm">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-muted-foreground hover:text-primary transition text-sm">
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-muted-foreground hover:text-primary transition text-sm">
                  Tarifs
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-muted-foreground hover:text-primary transition text-sm">
                  Témoignages
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Produits */}
          <div className="space-y-4">
            <h3 className="font-medium text-foreground text-lg">Nos Produits</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products/messaging" className="text-muted-foreground hover:text-primary transition text-sm">
                  Messagerie Unifiée
                </Link>
              </li>
              <li>
                <Link href="/products/collaboration" className="text-muted-foreground hover:text-primary transition text-sm">
                  Outils de Collaboration
                </Link>
              </li>
              <li>
                <Link href="/products/security" className="text-muted-foreground hover:text-primary transition text-sm">
                  Sécurité des Données
                </Link>
              </li>
              <li>
                <Link href="/products/analytics" className="text-muted-foreground hover:text-primary transition text-sm">
                  Analytiques et Reporting
                </Link>
              </li>
              <li>
                <Link href="/products/integration" className="text-muted-foreground hover:text-primary transition text-sm">
                  Intégrations
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-medium text-foreground text-lg">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <svg className="h-5 w-5 text-primary mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-muted-foreground text-sm">
                  123 Rue de la Communication<br/>75008 Paris, France
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contact@bettrcom.com" className="text-muted-foreground hover:text-primary transition text-sm">
                  contact@bettrcom.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+33123456789" className="text-muted-foreground hover:text-primary transition text-sm">
                  +33 1 23 45 67 89
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom section with copyright and policies */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {currentYear} Bettrcom. Tous droits réservés.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
              <Link href="/privacy" className="text-xs text-muted-foreground hover:text-primary transition">
                Politique de Confidentialité
              </Link>
              <Link href="/terms" className="text-xs text-muted-foreground hover:text-primary transition">
                Conditions d'Utilisation
              </Link>
              <Link href="/cookies" className="text-xs text-muted-foreground hover:text-primary transition">
                Politique de Cookies
              </Link>
              <Link href="/legal" className="text-xs text-muted-foreground hover:text-primary transition">
                Mentions Légales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 