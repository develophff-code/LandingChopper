import { useState } from 'react';

const plans = [
  {
    name: 'Starter',
    badge: 'Para Comenzar',
    description: 'Ideal para profesionales independientes, consultorios o pequeños comercios.',
    priceMonthly: '$19',
    priceAnnual: '$15',
    period: '/mes',
    featured: false,
    features: [
      '1 Módulo a elección (Health, POS o Fiado)',
      'Hasta 2 usuarios simultáneos',
      'Acceso móvil y web 100% responsivo',
      'Copias de seguridad diarias en la nube',
      'Soporte técnico por correo y WhatsApp',
    ],
    ctaText: 'Elegir Starter',
    waMessage: 'Hola, me interesa contratar el Plan Starter de Chopper Digital.',
  },
  {
    name: 'Pro Negocio',
    badge: '★ Más Elegido',
    description: 'Para comercios, clínicas y empresas que buscan automatización y control total.',
    priceMonthly: '$49',
    priceAnnual: '$39',
    period: '/mes',
    featured: true,
    features: [
      'Hasta 3 módulos combinados integrados',
      'Usuarios y empleados ilimitados',
      'Automatizaciones con IA y OCR de facturas',
      'Recordatorios y notificaciones automáticas',
      'Reportes de rendimiento en tiempo real',
      'Migración de datos de bienvenida sin costo',
      'Soporte prioritario 24/7 por WhatsApp',
    ],
    ctaText: 'Prueba Gratis de 14 Días',
    waMessage: 'Hola, me gustaría solicitar la prueba gratuita de 14 días del Plan Pro Negocio.',
  },
  {
    name: 'Enterprise',
    badge: 'A Medida',
    description: 'Para inmobiliarias, cadenas de locales o empresas con requerimientos específicos.',
    priceMonthly: 'A Medida',
    priceAnnual: 'A Medida',
    period: '',
    featured: false,
    features: [
      'Ecosistema completo Chopper Digital',
      'Integraciones API y desarrollos personalizados',
      'Servidor exclusivo y SLA de 99.9% garantizado',
      'Capacitación presencial/virtual para tu equipo',
      'Gerente de cuenta y asesor técnico dedicado',
      'Auditorías de seguridad e historial extendido',
    ],
    ctaText: 'Contactar a Ventas',
    waMessage: 'Hola, quisiera cotizar una solución Enterprise a medida con Chopper Digital.',
  },
];

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="planes" className="py-20 px-4 sm:px-6 md:px-margin-desktop max-w-[1440px] mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <span className="text-xs uppercase tracking-widest text-secondary font-bold px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20">
          Inversión Transparente
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-on-surface mt-4 tracking-tight">
          Planes Escalables para Cada Etapa de tu Negocio
        </h2>
        <p className="text-base sm:text-lg text-on-surface-variant mt-4 leading-relaxed">
          Sin costos ocultos ni contratos de permanencia obligatorios. Cambia de plan o cancela cuando quieras.
        </p>

        {/* Billing Switch */}
        <div className="mt-8 inline-flex items-center gap-3 bg-surface-container-high/80 p-1.5 rounded-full border border-secondary/20">
          <button
            type="button"
            onClick={() => setIsAnnual(false)}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              !isAnnual
                ? 'bg-secondary text-on-secondary-fixed shadow-[0_0_15px_rgba(79,218,212,0.4)]'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Pago Mensual
          </button>
          <button
            type="button"
            onClick={() => setIsAnnual(true)}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
              isAnnual
                ? 'bg-secondary text-on-secondary-fixed shadow-[0_0_15px_rgba(79,218,212,0.4)]'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <span>Pago Anual</span>
            <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
              -20% OFF
            </span>
          </button>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`rounded-2xl transition-all duration-300 flex flex-col justify-between relative ${
              plan.featured
                ? 'bg-gradient-to-b from-secondary/15 via-surface-container-high/90 to-surface-container/90 border-2 border-secondary shadow-[0_0_35px_rgba(79,218,212,0.25)] lg:-translate-y-3'
                : 'glass-card border-secondary/20 hover:border-secondary/40'
            } p-6 sm:p-8`}
          >
            {plan.featured && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-secondary text-on-secondary-fixed text-xs font-extrabold uppercase tracking-wider py-1 px-4 rounded-full shadow-[0_0_15px_rgba(79,218,212,0.6)]">
                Recomendado
              </div>
            )}

            <div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs uppercase tracking-wider text-secondary font-bold">
                    {plan.badge}
                  </span>
                  <h3 className="text-2xl font-bold text-on-surface mt-1">
                    {plan.name}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-on-surface-variant mb-6 min-h-[40px]">
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-6 pb-6 border-b border-secondary/15 flex items-baseline gap-1">
                <span className="text-4xl sm:text-5xl font-extrabold text-on-surface tracking-tight">
                  {isAnnual ? plan.priceAnnual : plan.priceMonthly}
                </span>
                {plan.period && (
                  <span className="text-sm text-on-surface-variant font-medium">
                    {plan.period}
                  </span>
                )}
                {isAnnual && plan.priceAnnual !== 'A Medida' && (
                  <span className="text-[11px] text-secondary ml-2 font-medium block">
                    (facturado anualmente)
                  </span>
                )}
              </div>

              {/* Feature List */}
              <ul className="space-y-3 mb-8 text-sm">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-on-surface">
                    <span className="text-secondary font-bold text-base leading-none mt-0.5">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action CTA */}
            <div>
              <a
                href={`https://wa.me/5492645854167?text=${encodeURIComponent(
                  plan.waMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full block text-center py-3.5 px-6 rounded-xl font-bold text-sm sm:text-base transition-all ${
                  plan.featured
                    ? 'bg-secondary text-on-secondary-fixed hover:brightness-125 shadow-[0_0_20px_rgba(79,218,212,0.4)] btn-pulse'
                    : 'border border-secondary/40 text-secondary hover:bg-secondary/10'
                }`}
              >
                {plan.ctaText}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Custom plan footer banner */}
      <div className="mt-12 glass-panel p-6 sm:p-8 rounded-2xl border-secondary/20 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div>
          <h4 className="text-lg font-bold text-on-surface">
            ¿Tienes un requerimiento especial o varias sucursales?
          </h4>
          <p className="text-sm text-on-surface-variant mt-1">
            Personalizamos una propuesta que se adapte exactamente a la estructura operativa de tu empresa.
          </p>
        </div>
        <a
          href="https://wa.me/5492645854167?text=Hola,%20quiero%20conversar%20sobre%20un%20plan%20personalizado%20para%20mi%20negocio."
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap bg-secondary/15 border border-secondary/40 text-secondary hover:bg-secondary hover:text-on-secondary-fixed font-bold text-sm px-6 py-3 rounded-xl transition-all"
        >
          Consultar por Plan Personalizado
        </a>
      </div>
    </section>
  );
};

export default Pricing;
