import { useState, useEffect } from 'react';
import logo from '../logo_chopper_digital.png';

const NAV_LINKS = [
  { name: 'Inicio', href: '#hero' },
  { name: 'Soluciones', href: '#soluciones' },
  { name: 'Ventajas', href: '#ventajas' },
  { name: 'Planes', href: '#planes' },
  { name: 'Testimonios', href: '#testimonios' },
  { name: 'Preguntas', href: '#faq' },
  { name: 'Contacto', href: '#contacto' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll for subtle shadow and glass depth
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-surface/90 backdrop-blur-xl border-b border-secondary/30 shadow-[0_8px_30px_rgba(0,0,0,0.4)]'
          : 'bg-surface/75 backdrop-blur-md border-b border-secondary/20 shadow-[0_4px_20px_rgba(0,0,0,0.2)]'
      }`}
    >
      <div className="flex justify-between items-center w-full px-4 sm:px-6 md:px-margin-desktop h-20 max-w-[1440px] mx-auto">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={closeMenu}
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-secondary/50 rounded-lg p-1"
        >
          <img
            src={logo}
            alt="Chopper Digital"
            className="w-9 h-9 object-contain drop-shadow-[0_0_12px_rgba(79,218,212,0.6)] group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <span className="font-headline-md font-bold text-xl sm:text-2xl text-on-surface tracking-tight leading-none group-hover:text-primary transition-colors">
              Chopper <span className="neon-accent">Digital</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-secondary font-semibold">
              Desarrollos con <span className="neon-accent">IA</span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-on-surface-variant hover:text-secondary transition-colors duration-200 relative py-1 hover:drop-shadow-[0_0_8px_rgba(79,218,212,0.4)]"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contacto"
            className="bg-secondary text-on-secondary-fixed font-bold text-sm px-5 py-2.5 rounded-xl btn-pulse transition-all hover:brightness-125 hover:scale-105 shadow-[0_0_20px_rgba(79,218,212,0.3)] ml-2"
          >
            Empezar Gratis
          </a>
        </nav>

        {/* Medium Screen CTA (tablet) */}
        <div className="hidden md:flex lg:hidden items-center gap-3">
          <a
            href="#contacto"
            className="bg-secondary text-on-secondary-fixed font-bold text-xs px-4 py-2 rounded-xl transition-all hover:brightness-125"
          >
            Empezar Gratis
          </a>
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
            aria-expanded={isMenuOpen}
            className="p-2.5 rounded-xl text-secondary hover:text-primary bg-secondary/10 border border-secondary/30 transition-all focus:outline-none focus:ring-2 focus:ring-secondary/50"
          >
            <div className="w-6 h-5 flex flex-col justify-between items-center">
              <span
                className={`h-0.5 w-6 bg-current rounded-full transition-all duration-300 origin-left ${
                  isMenuOpen ? 'rotate-45 translate-x-1 -translate-y-0.5' : ''
                }`}
              />
              <span
                className={`h-0.5 w-6 bg-current rounded-full transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0 scale-0' : ''
                }`}
              />
              <span
                className={`h-0.5 w-6 bg-current rounded-full transition-all duration-300 origin-left ${
                  isMenuOpen ? '-rotate-45 translate-x-1 translate-y-0.5' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="#contacto"
            className="text-xs font-bold bg-secondary/15 text-secondary border border-secondary/30 px-3 py-1.5 rounded-lg active:scale-95 transition-all"
          >
            Demo
          </a>
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
            className="p-2.5 rounded-xl text-secondary hover:text-primary bg-surface-container-high/60 border border-secondary/30 transition-all focus:outline-none focus:ring-2 focus:ring-secondary/50 active:scale-95"
          >
            <div className="w-5 h-4 flex flex-col justify-between items-center">
              <span
                className={`h-0.5 w-5 bg-current rounded-full transition-all duration-300 origin-left ${
                  isMenuOpen ? 'rotate-45 translate-x-0.5 -translate-y-0.5' : ''
                }`}
              />
              <span
                className={`h-0.5 w-5 bg-current rounded-full transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0 scale-0' : ''
                }`}
              />
              <span
                className={`h-0.5 w-5 bg-current rounded-full transition-all duration-300 origin-left ${
                  isMenuOpen ? '-rotate-45 translate-x-0.5 translate-y-0.5' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Backdrop Overlay */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 top-20 bg-black/60 backdrop-blur-md z-40 transition-opacity animate-fadeIn"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer Menu */}
      <div
        className={`lg:hidden fixed top-20 left-0 right-0 z-50 bg-surface-container-high/95 backdrop-blur-2xl border-b border-secondary/30 shadow-2xl transition-all duration-300 ease-in-out transform ${
          isMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto max-h-[calc(100vh-5rem)] overflow-y-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-5 py-6 flex flex-col gap-1 max-w-[500px] mx-auto">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="text-on-surface hover:text-secondary font-medium text-base py-3 px-4 rounded-xl border border-transparent hover:border-secondary/20 hover:bg-secondary/10 transition-all flex items-center justify-between group"
            >
              <span>{link.name}</span>
              <span className="text-secondary/50 group-hover:text-secondary group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          ))}

          <div className="pt-4 mt-2 border-t border-secondary/20 flex flex-col gap-3">
            <a
              href="#contacto"
              onClick={closeMenu}
              className="w-full text-center bg-secondary text-on-secondary-fixed font-bold py-3.5 px-6 rounded-xl shadow-[0_0_20px_rgba(79,218,212,0.3)] hover:brightness-125 transition-all text-sm uppercase tracking-wider"
            >
              Empezar Gratis / Pedir Demo
            </a>
            <a
              href="https://wa.me/5492645854167?text=Hola%20Chopper%20Digital,%20quiero%20conocer%20mas%20sobre%20sus%20soluciones."
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="w-full text-center border border-secondary/40 text-secondary font-semibold py-3 px-6 rounded-xl hover:bg-secondary/10 transition-all text-sm flex items-center justify-center gap-2"
            >
              <span>💬 Hablar por WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
