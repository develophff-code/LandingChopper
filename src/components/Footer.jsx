import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/30 full-width py-xl mt-24">
      <div className="flex flex-col md:flex-row justify-between items-center gap-lg px-margin-mobile md:px-margin-desktop w-full max-w-[1440px] mx-auto">
        <div className="text-headline-md font-headline-md font-bold text-on-surface">
          Chopper Digital
        </div>
        <div className="flex gap-lg">
          <a className="text-on-surface-variant font-label-sm hover:text-secondary-fixed transition-colors duration-200" href="#">
            Privacidad
          </a>
          <a className="text-on-surface-variant font-label-sm hover:text-secondary-fixed transition-colors duration-200" href="#">
            Términos
          </a>
          <a className="text-on-surface-variant font-label-sm hover:text-secondary-fixed transition-colors duration-200" href="#">
            Soporte
          </a>
        </div>
        <div className="text-on-surface-variant font-label-sm text-center md:text-right">
          © 2026 Chopper Digital. Desarrollos con InteligenciA. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
