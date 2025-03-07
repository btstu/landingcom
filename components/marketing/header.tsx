'use client'    
import React from 'react';

export default function Header() {
  // Function to handle smooth scroll to elements with matching ID
  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Update URL to include the hash without page reload
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  return (
    <header className="sticky inset-x-0 top-0 z-20 w-full">
      {/* Adjusted gradient background - full width */}
      <div className="absolute inset-0 opacity-50 blur bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-500"></div>
      
      <div className="relative bg-white/90 py-4 backdrop-blur-lg">
        {/* Container for content alignment */}
        <div className="mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
          <div className="relative flex items-center justify-between">
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button 
                type="button" 
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white p-2 text-gray-700 transition-all duration-200 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  strokeWidth="2" 
                  stroke="currentColor" 
                  fill="none" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="h-5 w-5"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <line x1="4" y1="6" x2="20" y2="6"></line>
                  <line x1="4" y1="12" x2="20" y2="12"></line>
                  <line x1="4" y1="18" x2="20" y2="18"></line>
                </svg>
              </button>
            </div>
            
            {/* Logo */}
            <div className="relative z-10 shrink-0">
              <a href="/" title="Bettrcom" className="flex">
                <img 
                  alt="Bettrcom Logo" 
                  src="/bettrcomLogo.svg" 
                  className="block h-8 w-auto"
                />
              </a>
            </div>  
            
            {/* Desktop navigation */}
            <div className="hidden lg:absolute lg:inset-0 lg:flex lg:items-center lg:justify-center lg:gap-2">
              <div className="relative">
                <button 
                  type="button" 
                  className="group inline-flex items-center rounded-lg border border-transparent px-2 py-1 text-base font-medium text-gray-900 transition-all duration-200 bg-white hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-300"
                >
                  Products
                  <svg 
                    className="ml-2 transition-all rotate-180" 
                    width="8" 
                    height="6" 
                    viewBox="0 0 8 6" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0.94 5.66681L4 2.61347L7.06 5.66681L8 4.72681L4 0.726807L0 4.72681L0.94 5.66681Z" fill="#101828"></path>
                  </svg>
                </button>
              </div>
              
              <a 
                href="#pricing" 
                onClick={(e) => handleHashClick(e, 'pricing')}
                className="inline-flex items-center rounded-lg border border-transparent px-2 py-1 text-base transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-300 font-medium text-gray-700"
              >
                Pricing
              </a>
              
              <a 
                href="#showcase" 
                onClick={(e) => handleHashClick(e, 'showcase')}
                className="inline-flex items-center rounded-lg border border-transparent px-2 py-1 text-base transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-300 font-medium text-gray-700"
              >
                Showcase
              </a>
              
              <a href="" className="inline-flex items-center rounded-lg border border-transparent px-2 py-1 text-base transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-300 font-medium text-gray-700">Blog</a>
              <a href="" className="inline-flex items-center rounded-lg border border-transparent px-2 py-1 text-base transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-300 font-medium text-gray-700">Help Docs</a>
              <a href="" className="inline-flex items-center rounded-lg border border-transparent px-2 py-1 text-base transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-300 font-medium text-gray-700">Changelog</a>
            </div>
            
            {/* CTA buttons */}
            <div className="relative z-10 flex items-center gap-x-3">
              <div className="hidden sm:block">
                <a href="/login" className="inline-flex h-10 items-center justify-center rounded-xl border border-gray-300 px-4 py-2 text-base font-semibold text-gray-900 transition-all duration-200 hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2">Login</a>
              </div>
              <a 
                href="#pricing" 
                onClick={(e) => handleHashClick(e, 'pricing')}
                className="inline-flex h-10 items-center justify-center gap-1.5 rounded-xl border border-transparent bg-blue-500 px-4 py-2 text-base font-semibold text-white transition-all duration-200 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}