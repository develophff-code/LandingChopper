const stats = [
  { value: '+500', label: 'Negocios Activos', desc: 'Comercios, clínicas y estudios' },
  { value: '99.9%', label: 'Disponibilidad Cloud', desc: 'Acceso seguro sin caídas' },
  { value: '-45%', label: 'Tiempo Administrativo', desc: 'Automatización inteligente' },
  { value: '100%', label: 'Soporte en Español', desc: 'Atención personalizada directa' },
];

const Stats = () => {
  return (
    <section className="py-8 px-4 sm:px-6 md:px-margin-desktop max-w-[1440px] mx-auto">
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border-secondary/20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-secondary drop-shadow-[0_0_12px_rgba(79,218,212,0.4)]">
              {stat.value}
            </span>
            <span className="font-bold text-sm sm:text-base text-on-surface mt-1">
              {stat.label}
            </span>
            <span className="text-xs text-on-surface-variant mt-0.5 hidden sm:block">
              {stat.desc}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
