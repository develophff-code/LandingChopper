const features = [
  {
    icon: 'smart_toy',
    title: 'Inteligencia Artificial Práctica',
    desc: 'Automatizaciones reales: lectura OCR de comprobantes, sugerencias inteligentes de reposición y agendamiento autónomo.',
  },
  {
    icon: 'cloud_sync',
    title: '100% en la Nube & Multi-Dispositivo',
    desc: 'Gestiona tu negocio desde el celular, tablet o laptop. Sin instalaciones pesadas ni servidores en tu local.',
  },
  {
    icon: 'bolt',
    title: 'Puesta en Marcha en 24hs',
    desc: 'Migramos tus planillas de Excel, listas de precios y datos de clientes para que arranques sin interrupciones.',
  },
  {
    icon: 'lock',
    title: 'Seguridad y Respaldos Diarios',
    desc: 'Cifrado de datos y copias de seguridad automáticas para que tu información comercial y médica esté siempre protegida.',
  },
  {
    icon: 'support_agent',
    title: 'Soporte Directo por WhatsApp',
    desc: 'Nada de tickets interminables. Habla con personas reales que te asisten en minutos ante cualquier duda.',
  },
  {
    icon: 'extension',
    title: 'Ecosistema Escalable',
    desc: 'Empieza con un solo módulo (como Turnos o Punto de Venta) y activa nuevas funciones cuando tu operación lo requiera.',
  },
];

const Features = () => {
  return (
    <section id="ventajas" className="py-20 px-4 sm:px-6 md:px-margin-desktop max-w-[1440px] mx-auto scroll-mt-24">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-widest text-secondary font-bold px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20">
          ¿Por Qué Chopper Digital?
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-on-surface mt-4 tracking-tight">
          Tecnología Avanzada con la Simplicidad que Necesitas
        </h2>
        <p className="text-base sm:text-lg text-on-surface-variant mt-4 leading-relaxed">
          Diseñado para que dueños de negocios, profesionales y administradores ahorren horas de trabajo repetitivo todos los días.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="glass-card p-6 sm:p-8 rounded-2xl border-secondary/20 flex flex-col justify-between hover:border-secondary/50 group"
          >
            <div>
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center border border-secondary/30 mb-6 group-hover:bg-secondary/20 transition-all shadow-[0_0_15px_rgba(79,218,212,0.2)]">
                <span className="material-symbols-outlined text-secondary text-3xl neon-glow">
                  {item.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-3 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                {item.desc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-secondary/10 flex items-center text-xs font-semibold text-secondary gap-1 group-hover:translate-x-1 transition-transform">
              <span>Saber más</span>
              <span>→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
