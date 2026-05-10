import React from 'react';
import logo from '../logo_chopper_digital.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center w-full">
        <div className="space-y-lg z-10">
          <h1 className="font-display-xl text-display-xl leading-tight">
            Gestión Digital para Negocios Reales con <span className="neon-accent">I</span>nteligenci<span className="neon-accent">A</span>.
          </h1>
          <p className="font-headline-md text-headline-md text-on-surface-variant">
            Chopper Digital unifica tus operaciones, automatiza tu administración y potenc<span className="neon-accent">I</span><span className="neon-accent">A</span> tu crecimiento.
          </p>
          <div className="flex flex-wrap gap-md pt-lg">
            <button className="bg-secondary text-on-secondary-fixed font-bold px-xl py-md rounded-xl btn-pulse text-lg hover:scale-105 transition-transform">
              Solicitar Acceso
            </button>
            <button className="border border-secondary/50 text-secondary font-bold px-xl py-md rounded-xl hover:bg-secondary/10 transition-all">
              Explorar Planes
            </button>
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          <div className="absolute w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full"></div>
          <img 
            alt="Chopper Digital AI Mascot" 
            className="relative z-10 w-full max-w-[500px] drop-shadow-[0_0_50px_rgba(0,242,255,0.4)] animate-bounce" 
            src={logo}
            style={{ animationDuration: '4s' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
