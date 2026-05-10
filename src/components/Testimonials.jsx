import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-24 bg-surface-container-low/30" id="testimonios">
      <div className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto text-center mb-xl">
        <h2 className="font-headline-lg text-headline-lg mb-md">Lo Que Dicen Nuestros Choppers</h2>
        <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-lg px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
        <div className="glass-card p-xl rounded-xl">
          <p className="text-on-surface-variant body-md italic mb-lg">
            "La transición a Chopper Health fue inmediata. Mis pacientes aman la simplicidad de agendar sus propios turnos."
          </p>
          <div className="flex items-center gap-md">
            <div className="w-12 h-12 rounded-full bg-secondary-container"></div>
            <div>
              <h5 className="font-bold">Dr. Ricardo Gómez</h5>
              <p className="text-label-sm text-secondary">Cardiólogo</p>
            </div>
          </div>
        </div>
        <div className="glass-card p-xl rounded-xl">
          <p className="text-on-surface-variant body-md italic mb-lg">
            "El sistema de POS de Chopper Digital nos permitió abrir tres sucursales nuevas este año. El control es absoluto."
          </p>
          <div className="flex items-center gap-md">
            <div className="w-12 h-12 rounded-full bg-secondary-container"></div>
            <div>
              <h5 className="font-bold">Elena Martínez</h5>
              <p className="text-label-sm text-secondary">Retail Manager</p>
            </div>
          </div>
        </div>
        <div className="glass-card p-xl rounded-xl">
          <p className="text-on-surface-variant body-md italic mb-lg">
            "Automatizamos el 80% de nuestra carga de facturas con Ledger. La IA realmente cambió nuestro estudio contable."
          </p>
          <div className="flex items-center gap-md">
            <div className="w-12 h-12 rounded-full bg-secondary-container"></div>
            <div>
              <h5 className="font-bold">Juan Pérez</h5>
              <p className="text-label-sm text-secondary">CPA Associate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
