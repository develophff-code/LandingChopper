import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl border-b border-secondary/30 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop h-20 max-w-[1440px] mx-auto">
        <div className="text-headline-md font-headline-md font-bold text-on-surface tracking-tight">
          Chopper Digital
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-lg items-center">
          <a className="text-secondary font-bold border-b-2 border-secondary pb-1 hover:text-primary transition-all duration-300" href="#hero">
            Inicio
          </a>
          <a className="text-on-surface-variant font-label-sm hover:text-primary transition-all duration-300" href="#soluciones">
            Soluciones
          </a>
          <a className="text-on-surface-variant font-label-sm hover:text-primary transition-all duration-300" href="#testimonios">
            Testimonios
          </a>
          <a className="text-on-surface-variant font-label-sm hover:text-primary transition-all duration-300" href="#contacto">
            Contacto
          </a>
          <button className="ml-lg bg-secondary text-on-secondary-fixed font-bold px-lg py-sm rounded-xl btn-pulse transition-all hover:brightness-125">
            Empezar Gratis
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="material-symbols-outlined text-secondary text-[32px] cursor-pointer">
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-surface-container-highest border-b border-secondary/30 shadow-lg flex flex-col p-lg">
          <a onClick={() => setIsMenuOpen(false)} className="text-secondary font-bold py-md border-b border-secondary/10 hover:text-primary transition-all" href="#hero">
            Inicio
          </a>
          <a onClick={() => setIsMenuOpen(false)} className="text-on-surface-variant font-bold py-md border-b border-secondary/10 hover:text-primary transition-all" href="#soluciones">
            Soluciones
          </a>
          <a onClick={() => setIsMenuOpen(false)} className="text-on-surface-variant font-bold py-md border-b border-secondary/10 hover:text-primary transition-all" href="#testimonios">
            Testimonios
          </a>
          <a onClick={() => setIsMenuOpen(false)} className="text-on-surface-variant font-bold py-md border-b border-secondary/10 hover:text-primary transition-all" href="#contacto">
            Contacto
          </a>
          <button className="mt-lg w-full bg-secondary text-on-secondary-fixed font-bold px-lg py-md rounded-xl transition-all hover:brightness-125">
            Empezar Gratis
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
