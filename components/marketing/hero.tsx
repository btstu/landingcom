'use client'
import React from 'react';
import { Button } from "@/components/ui/button";

interface HeroProps {
  scrollToPricing: () => void;
}

export default function Hero({ scrollToPricing }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-100 to-white py-12 sm:py-16 lg:py-20 xl:py-24">
      {/* Grid overlay */}
      <div className="absolute inset-x-0 top-0 h-96 rotate-180 text-gray-500/20 opacity-60 [mask-image:linear-gradient(to_bottom,transparent,white)]">
        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="32" height="32" patternUnits="userSpaceOnUse" x="50%" y="100%" patternTransform="translate(0 -1)">
              <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)"></rect>
        </svg>
      </div>
      
      {/* Content container with consistent margins */}
      <div className="relative mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        <div className="mx-auto max-w-xl text-center lg:max-w-4xl">
          <h1 className="text-5xl font-bold leading-none tracking-tight text-foreground sm:text-6xl xl:text-7xl">
            Ameliorez votre communication Interne <br />
            <span className="text-3xl sm:text-4xl xl:text-5xl">&amp; plus encore</span>
          </h1>
          <h2 className="mt-6 text-lg font-normal leading-7 text-muted-foreground sm:text-xl lg:mx-auto lg:max-w-3xl xl:text-2xl xl:leading-9">
          Votre solution sécurisée et polyvalente pour la communication et le partage de fichiers en entreprise.
          </h2>
        </div>
        
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center lg:mt-10">
          <Button 
            size="lg" 
            className="h-12 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={scrollToPricing}
          >
            Commencez dès maintenant
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="h-12 rounded-xl border-border text-foreground hover:bg-accent hover:text-accent-foreground"
            asChild
          >
            <a href="#showcase">Voir les exemples</a>
          </Button>
        </div>
        
        <div className="mx-auto mt-8 max-w-xs md:flex md:max-w-lg md:flex-col md:items-center md:justify-center md:space-y-4 lg:mt-12">
          <div className="flex shrink-0 justify-center -space-x-3 overflow-hidden">
            {[
              { name: "Ana", src: "https://feather.so/images/landing/avatars/ana.png" },
              { name: "Anthony", src: "https://feather.so/images/landing/avatars/anthony.png" },
              { name: "Ayush", src: "https://feather.so/images/landing/avatars/ayush.png" },
              { name: "Damon", src: "https://feather.so/images/landing/avatars/damon.png" },
              { name: "Roberto", src: "https://feather.so/images/landing/avatars/roberto.png" },
              { name: "Alex MacCaw", src: "https://feather.so/images/landing/avatars/alex.png", primary: true },
              { name: "Tibo", src: "https://feather.so/images/landing/avatars/tibo.png", primary: true },
              { name: "Corey Haines", src: "https://feather.so/images/landing/avatars/corey.png", primary: true },
              { name: "Vensy", src: "https://feather.so/images/landing/avatars/vensy.png" },
              { name: "Tom", src: "https://feather.so/images/landing/avatars/tom.png", primary: true }
            ].map((avatar, index) => (
              <img 
                key={index}
                alt={avatar.name} 
                src={avatar.src} 
                className={`inline-block h-10 w-10 rounded-full ring-2 ${avatar.primary ? 'ring-primary/20' : 'ring-gray-100'}`}
              />
            ))}
          </div>
          
          <p className="mt-4 text-center text-base text-foreground md:mt-0 md:ml-4">
            <span className="block">
              Rejoignez <span className="font-semibold">25+ companie et Start-ups</span>
            </span>
            <span className="block">et optimiser la communication interne de votre entreprise des aujourd'hui</span>
          </p>
        </div>
        
        <div className="mx-auto mt-6 max-w-5xl lg:mt-8">
          <img 
            alt="Hero mockup" 
            src="https://i.ibb.co/DfVR10jS/heroimg.png" 
            className="w-full object-cover"
          />
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-lg font-semibold text-muted-foreground">Trusted by</p>
          
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 lg:mt-10 lg:gap-x-16 lg:gap-y-8">
            {/* Company logos */}
            <img alt="Tweet Hunter" src="https://feather.so/images/landing/logos/tweet-hunter.svg" className="h-6 w-auto object-contain lg:h-8" />
            <img alt="Testimonial" src="https://feather.so/images/landing/logos/testimonial.svg" className="h-8 w-auto object-contain lg:h-10" />
            <img alt="Xumm" src="https://feather.so/images/landing/logos/xumm.svg" className="h-6 w-auto object-contain" />
            <img alt="Green Got" src="https://feather.so/images/landing/logos/green-got.png" className="h-8 w-auto object-contain lg:h-10" />
            <img alt="GrowthX" src="https://feather.so/images/landing/logos/growthx.png" className="h-6 w-auto object-contain lg:h-7" />
            
            <div className="flex items-center space-x-2">
              <div className="h-7 w-7">
                <img alt="Reflect" src="https://feather.so/images/landing/logos/reflect.png" className="h-full w-full object-cover" />
              </div>
              <span className="cursor-default text-2xl font-semibold tracking-wide">Reflect</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="h-7 w-7">
                <img alt="SwipeWell" src="https://feather.so/images/landing/logos/swipewell.png" className="h-full w-full object-cover" />
              </div>
              <div className="cursor-default text-2xl font-semibold tracking-wide">
                <span>Swipe</span>
                <span className="text-[rgb(2,132,199)]">Well</span>
              </div>
            </div>
            
            <img alt="Beyonk" src="https://feather.so/images/landing/logos/beyonk.svg" className="h-4 w-auto object-contain lg:h-5" />
            <img alt="Taplio" src="https://feather.so/images/landing/logos/taplio.svg" className="h-6 w-auto object-contain lg:h-8" />
            
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8">
                <img alt="Dash MY" src="https://feather.so/images/landing/logos/dash.png" className="h-full w-full object-cover" />
              </div>
              <span className="cursor-default text-2xl font-semibold">Dash MY</span>
            </div>
            
            <img alt="Lal10" src="https://feather.so/images/landing/logos/lal10.png" className="h-12 w-auto object-contain" />
            <img alt="Indie Worldwide" src="https://feather.so/images/landing/logos/indie-worldwide.png" className="h-6 w-auto object-contain lg:h-10" />
            
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8">
                <img alt="BotGhost" src="https://feather.so/images/landing/logos/botghost.png" className="h-full w-full object-cover" />
              </div>
              <span className="cursor-default text-2xl font-semibold tracking-tighter">BotGhost</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}