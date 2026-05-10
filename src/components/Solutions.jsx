import React from 'react';

const Solutions = () => {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto space-y-32" id="soluciones">
      {/* Health */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center min-h-[70vh]">
        <div className="space-y-md">
          <div className="flex items-center gap-sm">
            <span className="material-symbols-outlined text-secondary text-4xl neon-glow">calendar_month</span>
            <h3 className="font-headline-lg text-headline-lg">Chopper Health</h3>
          </div>
          <h4 className="font-headline-md text-headline-md text-secondary-fixed">Tu Consultorio en Piloto Automático.</h4>
          <p className="text-on-surface-variant body-lg">
            Agenda inteligente, historias clínicas digitales y seguimiento de pacientes unificado en una interfaz elegante y eficiente.
          </p>
          <button className="mt-lg border-2 border-secondary text-secondary font-bold px-xl py-md rounded-xl hover:bg-secondary/10 transition-all btn-pulse">
            Solicitar Demo de Turnos
          </button>
        </div>
        <div className="glass-panel p-md rounded-xl border-secondary/30">
          <img 
            className="rounded-lg w-full h-[400px] object-cover opacity-80" 
            alt="A sophisticated digital healthcare interface shown on a sleek tablet." 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkmKpbI-CRtZA1x_I3c7rFWG7JEvjcOXpb4ouIJIZk7KSH5lMHPv8-HAAZaJZvXflp9Zwwt72X0-Ppyg2ZSSaGuqgEClmUeskswN70lL5UDEeGLKwYLtuLW8WIJiwj-dDmDz6iGBPqkFIF7Ac1nWoux0JqxdK5St8z-oie7EcB_o92jAApBljMKj1swWTU4ccYPgU0vpT14KFnf6JwFUQGeqx9WnvzrSH2qpStO06_Gsq8BojZ2xglUzlV1vVejJRu3SVDpK2_a8-J"
          />
        </div>
      </div>

      {/* POS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center min-h-[70vh]">
        <div className="order-2 lg:order-1 glass-panel p-md rounded-xl border-secondary/30">
          <img 
            className="rounded-lg w-full h-[400px] object-cover opacity-80" 
            alt="A modern retail point-of-sale system in a high-end boutique." 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkuoBW6A6kvw1SQ3x-3IXfTTrBU4MaGKM7sD5sHjtnYnWL0YGfTzD2hSOfvKGN3LBvpRkdxzqh6eGqzJfPVy1BY9jY4t3CqJq9qlTNo7BSyDZINytcH0zivzojyel04b83QQiTqyJLSbZ3XB263VEFnggoV1HZPE0Mhe5MJQ0pAqxmgMv-XOiQ_UL2P1c-6e5bd7pzJR0Aaejs1pQRFG25kFB8GGZhKjRDyVjZyXPMn39lQlN0O4yD6NUnbBXibY3LbYJYMZ8_o581"
          />
        </div>
        <div className="order-1 lg:order-2 space-y-md">
          <div className="flex items-center gap-sm">
            <span className="material-symbols-outlined text-secondary text-4xl neon-glow">barcode_scanner</span>
            <h3 className="font-headline-lg text-headline-lg">Chopper POS</h3>
          </div>
          <h4 className="font-headline-md text-headline-md text-secondary-fixed">Vende Más, Controla Mejor.</h4>
          <p className="text-on-surface-variant body-lg">
            Punto de venta optimizado para velocidad y precisión. Gestión de inventario en tiempo real con alertas de stock inteligentes.
          </p>
          <button className="mt-lg border-2 border-secondary text-secondary font-bold px-xl py-md rounded-xl hover:bg-secondary/10 transition-all btn-pulse">
            Mejorar Mi Punto de Venta
          </button>
        </div>
      </div>

      {/* Fiado */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center min-h-[70vh]">
        <div className="space-y-md">
          <div className="flex items-center gap-sm">
            <span className="material-symbols-outlined text-secondary text-4xl neon-glow">account_balance_wallet</span>
            <h3 className="font-headline-lg text-headline-lg">Chopper Fiado</h3>
          </div>
          <h4 className="font-headline-md text-headline-md text-secondary-fixed">El Cierre de Cuentas, Automatizado.</h4>
          <p className="text-on-surface-variant body-lg">
            Digitaliza la libreta de confianza. Seguimiento automático de deudas, pagos parciales y notificaciones de cobranza elegantes.
          </p>
          <button className="mt-lg border-2 border-secondary text-secondary font-bold px-xl py-md rounded-xl hover:bg-secondary/10 transition-all btn-pulse">
            Digitalizar Mi Libreta
          </button>
        </div>
        <div className="glass-panel p-md rounded-xl border-secondary/30">
          <img 
            className="rounded-lg w-full h-[400px] object-cover opacity-80" 
            alt="A digital ledger application on a smartphone screen." 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdPyGdt9EeN0p0L60DvCmevWqkWL5AJVx2LCR_O0jqVGuDEgQkOmYQWhT2wZpQJYqACubbpG60QCAX_bI2OFmSye3edr9vlHtaGmy1iNwYTdK_cvOTJFFVaR7RS7Ypw9cN47nxNg5sGsZQz3OfVsVeSCGdlFXwWanJe468scRpJmGmHaMDnHcjhrVvi-sgNXiUXkez4rJYy6nX7OGxsa4GezVsBs5um1xCSM33-bjnM5aA29tbvhtvDt26qngQnH9LtstWLzzI4qlU"
          />
        </div>
      </div>

      {/* Ledger */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center min-h-[70vh]">
        <div className="order-2 lg:order-1 glass-panel p-md rounded-xl border-secondary/30">
          <img 
            className="rounded-lg w-full h-[400px] object-cover opacity-80" 
            alt="An advanced AI data processing pipeline visualized in a digital space." 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC10itD3y79GTjP9B0X2afjflKo9FE7TJJkl4QQASCA282P6RblJT8meBtw3TNOJZeZNwud974izT7JWzV6ZxuEPfFtRVBahOM6mNHwZvhP5v2LWTpbVMAeO6uZo4LuwvDopmEWrxoTxL_-2_63ngvq4rE3SgDb7QaHdSIuzrjTZUy7HQQ_wKL1BurSrkowvvWpuEB4NCoxQ8xTA4xMAo4wdmmiJDPTH9fVyLeNudIlCo0s8qEy_Pwyal1EhmiN5vC6_PSBkXxBS7VR"
          />
        </div>
        <div className="order-1 lg:order-2 space-y-md">
          <div className="flex items-center gap-sm">
            <span className="material-symbols-outlined text-secondary text-4xl neon-glow">robot_2</span>
            <h3 className="font-headline-lg text-headline-lg">Chopper Ledger</h3>
          </div>
          <h4 className="font-headline-md text-headline-md text-secondary-fixed">Automatización para Contadores.</h4>
          <p className="text-on-surface-variant body-lg">
            Procesamiento masivo de facturas mediante IA OCR. Integración directa con sistemas contables para eliminar la carga manual.
          </p>
          <button className="mt-lg border-2 border-secondary text-secondary font-bold px-xl py-md rounded-xl hover:bg-secondary/10 transition-all btn-pulse">
            Optimizar Mi Estudio
          </button>
        </div>
      </div>

      {/* Estates */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center min-h-[70vh]">
        <div className="space-y-md">
          <div className="flex items-center gap-sm">
            <span className="material-symbols-outlined text-secondary text-4xl neon-glow">real_estate_agent</span>
            <h3 className="font-headline-lg text-headline-lg">Chopper Estates</h3>
          </div>
          <h4 className="font-headline-md text-headline-md text-secondary-fixed">Gestión de Oferta Inmobiliaria.</h4>
          <p className="text-on-surface-variant body-lg">
            Mapa interactivo de propiedades, tours virtuales integrados y CRM especializado para el sector inmobiliario moderno.
          </p>
          <button className="mt-lg border-2 border-secondary text-secondary font-bold px-xl py-md rounded-xl hover:bg-secondary/10 transition-all btn-pulse">
            Ver Demo Inmobiliaria
          </button>
        </div>
        <div className="glass-panel p-md rounded-xl border-secondary/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent"></div>
          <img 
            className="rounded-lg w-full h-[400px] object-cover opacity-80" 
            alt="A futuristic interactive map interface displaying a glowing 3D metropolitan skyline." 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCh0LI_w2zRtNjIgzajjQS6oYwelnjHQtiQr4U9vTKvfW-Z9bEJzmRlgvkIZKB5gej5qyevMX_a_DduxYUVc54NcD5LHs_xvp_VaqRpPn_Dx3nRqPDDG5GFo9IYONrvw3xjIvYS51c7h9TgVg3SIDmIYgHxpXqgTn_F7E_afWn8wstKe6qYnku0ofQ3nNcGatE-rPUJsZz_BVLIAeNEiGbNfLMgZorgWvBTBqyZ9y32E9eCGD3z2TqMtDdtj03GdHdITJDVOBUtQ1KK"
          />
        </div>
      </div>
    </section>
  );
};

export default Solutions;
