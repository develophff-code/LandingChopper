import logo from '../logo_chopper_digital.png';

const Footer = () => {
  return (
    <footer className="bg-surface-container-lowest border-t border-secondary/20 w-full pt-16 pb-12 mt-20">
      <div className="px-4 sm:px-6 md:px-margin-desktop max-w-[1440px] mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#hero" className="flex items-center gap-3">
              <img
                src={logo}
                alt="Chopper Digital"
                className="w-10 h-10 object-contain drop-shadow-[0_0_12px_rgba(79,218,212,0.5)]"
              />
              <span className="font-headline-md font-bold text-2xl text-on-surface tracking-tight">
                Chopper <span className="neon-accent">Digital</span>
              </span>
            </a>
            <p className="text-sm text-on-surface-variant max-w-[380px] leading-relaxed">
              Software modular y plataformas con Inteligencia Artificial diseñadas para unificar operaciones, automatizar tareas y acelerar el crecimiento de negocios reales.
            </p>
            <div className="inline-flex items-center gap-2 text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Todos los servicios operativos (100% Cloud)</span>
            </div>
          </div>

          {/* Col 1: Soluciones */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-secondary uppercase tracking-wider">
              Soluciones
            </h4>
            <ul className="space-y-2 text-sm text-on-surface-variant">
              <li>
                <a href="#soluciones" className="hover:text-primary transition-colors">
                  Chopper Health
                </a>
              </li>
              <li>
                <a href="#soluciones" className="hover:text-primary transition-colors">
                  Chopper POS
                </a>
              </li>
              <li>
                <a href="#soluciones" className="hover:text-primary transition-colors">
                  Chopper Fiado
                </a>
              </li>
              <li>
                <a href="#soluciones" className="hover:text-primary transition-colors">
                  Chopper Ledger
                </a>
              </li>
              <li>
                <a href="#soluciones" className="hover:text-primary transition-colors">
                  Chopper Estates
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: Navegación */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-secondary uppercase tracking-wider">
              Enlaces
            </h4>
            <ul className="space-y-2 text-sm text-on-surface-variant">
              <li>
                <a href="#hero" className="hover:text-primary transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#ventajas" className="hover:text-primary transition-colors">
                  ¿Por qué Chopper?
                </a>
              </li>
              <li>
                <a href="#planes" className="hover:text-primary transition-colors">
                  Planes & Precios
                </a>
              </li>
              <li>
                <a href="#testimonios" className="hover:text-primary transition-colors">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-primary transition-colors">
                  Contacto Comercial
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contacto Directo */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-secondary uppercase tracking-wider">
              Contacto
            </h4>
            <p className="text-sm text-on-surface-variant">
              Atención directa y soporte especializado para clientes.
            </p>
            <div className="space-y-1.5 text-sm">
              <a
                href="https://wa.me/5492645854167"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:underline flex items-center gap-1.5 font-medium"
              >
                <span>💬 WhatsApp: +54 9 264 585-4167</span>
              </a>
              <a
                href="mailto:info@chopperdigital.online"
                className="text-on-surface-variant hover:text-primary block truncate"
              >
                ✉ info@chopperdigital.online
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary/15 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-on-surface-variant">
          <div>
            © 2026 Chopper Digital. Desarrollos con Inteligenc<span className="text-secondary font-bold">IA</span>. Todos los derechos reservados.
          </div>
          <div className="flex gap-6">
            <a href="#hero" className="hover:text-secondary transition-colors">
              Políticas de Privacidad
            </a>
            <a href="#hero" className="hover:text-secondary transition-colors">
              Términos de Servicio
            </a>
            <a href="#contacto" className="hover:text-secondary transition-colors">
              Soporte
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
