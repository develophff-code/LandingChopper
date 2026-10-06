const testimonials = [
  {
    quote:
      'La transición a Chopper Health fue inmediata. Mis pacientes aman la simplicidad de agendar sus propios turnos por WhatsApp y el ausentismo se redujo a la mitad.',
    name: 'Dr. Ricardo Gómez',
    role: 'Director Médico',
    company: 'Centro Cardiológico San Juan',
    initials: 'RG',
    stars: 5,
    tag: 'Chopper Health',
  },
  {
    quote:
      'El sistema de POS y control de inventario de Chopper nos permitió abrir tres sucursales nuevas este año. Veo las ventas y cierres de caja en vivo desde mi celular.',
    name: 'Elena Martínez',
    role: 'Gerente Comercial',
    company: 'Moda Urbana & Boutique',
    initials: 'EM',
    stars: 5,
    tag: 'Chopper POS',
  },
  {
    quote:
      'Automatizamos el 80% de nuestra carga de facturas con Ledger. La extracción por IA es asombrosamente precisa y liberó a todo el equipo contable de tareas tediosas.',
    name: 'Juan Pérez',
    role: 'Socio Fundador',
    company: 'Pérez & Asociados Consultora',
    initials: 'JP',
    stars: 5,
    tag: 'Chopper Ledger',
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-surface-container-low/40 relative scroll-mt-24" id="testimonios">
      <div className="px-4 sm:px-6 md:px-margin-desktop max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-widest text-secondary font-bold px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20">
            Casos de Éxito
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-on-surface mt-4 tracking-tight">
            Lo Que Dicen Quienes Usan Chopper
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mt-4 shadow-[0_0_10px_rgba(79,218,212,0.6)]"></div>
          <p className="text-sm sm:text-base text-on-surface-variant mt-4">
            Profesionales y empresarios que transformaron su operación diaria con nuestra tecnología.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="glass-card p-6 sm:p-8 rounded-2xl border-secondary/20 flex flex-col justify-between hover:border-secondary/50 transition-all duration-300"
            >
              <div>
                {/* Tag & Stars */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-semibold text-secondary bg-secondary/10 px-2.5 py-0.5 rounded-full border border-secondary/20">
                    {t.tag}
                  </span>
                  <div className="flex text-amber-400 text-sm">
                    {Array.from({ length: t.stars }).map((_, sIdx) => (
                      <span key={sIdx}>★</span>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <p className="text-on-surface-variant text-sm sm:text-base italic leading-relaxed mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-secondary/15">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-secondary/30 to-secondary flex items-center justify-center font-bold text-on-secondary-fixed text-sm border-2 border-secondary shadow-[0_0_12px_rgba(79,218,212,0.4)] flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <h5 className="font-bold text-on-surface text-sm sm:text-base leading-snug">
                    {t.name}
                  </h5>
                  <p className="text-xs text-secondary font-medium">
                    {t.role} • <span className="text-on-surface-variant">{t.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
