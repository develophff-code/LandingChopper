import logo from '../logo_chopper_digital.png';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 px-4 sm:px-6 md:px-margin-desktop max-w-[1440px] mx-auto overflow-hidden lg:overflow-visible"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center w-full">
        {/* Left Column: Copy & Actions */}
        <div className="space-y-6 z-10 text-center lg:text-left">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-xs sm:text-sm font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
            <span>Soluciones Cloud para Negocios Reales</span>
          </div>

          <h1 className="font-display-xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-on-surface">
            Gestión Digital para Negocios Reales con{' '}
            <span className="text-secondary drop-shadow-[0_0_15px_rgba(79,218,212,0.5)]">
              InteligenciA
            </span>
            .
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-on-surface-variant leading-relaxed max-w-[640px] w-full mx-auto lg:mx-0">
            Chopper Digital unifica tus operaciones, automatiza tu administración y potenc<span className="neon-accent font-bold">I</span><span className="neon-accent font-bold">A</span> tu crecimiento con tecnología intuitiva.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 justify-center lg:justify-start">
            <a
              href="#contacto"
              className="bg-secondary text-on-secondary-fixed font-bold px-8 py-3.5 rounded-xl btn-pulse text-base hover:scale-105 hover:brightness-110 transition-all text-center shadow-[0_0_25px_rgba(79,218,212,0.4)]"
            >
              Solicitar Acceso Gratuito
            </a>
            <a
              href="#planes"
              className="border border-secondary/40 text-secondary font-bold px-8 py-3.5 rounded-xl hover:bg-secondary/10 transition-all text-base text-center"
            >
              Explorar Planes
            </a>
          </div>

          {/* Micro trust indicators */}
          <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-on-surface-variant/80 font-medium">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Sin instalación compleja
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Acceso desde móvil y PC
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Soporte directo por WhatsApp
            </span>
          </div>
        </div>

        {/* Right Column: Mascot Visual */}
        <div className="relative flex justify-center items-center py-4 lg:py-0">
          {/* Radial blur bounded safely so it never causes horizontal scroll */}
          <div className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] bg-secondary/15 blur-[60px] sm:blur-[90px] rounded-full pointer-events-none"></div>
          
          <img
            alt="Chopper Digital AI Mascot"
            className="relative z-10 w-full max-w-[240px] sm:max-w-[340px] lg:max-w-[440px] drop-shadow-[0_0_40px_rgba(79,218,212,0.4)] transition-transform duration-500 hover:scale-105 select-none"
            src={logo}
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
