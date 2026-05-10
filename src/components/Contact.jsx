import React from 'react';

const Contact = () => {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto" id="contacto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">
        <div className="space-y-xl">
          <h2 className="font-headline-lg text-headline-lg">
            ¿Listo para potenc<span className="neon-accent">I</span><span className="neon-accent">A</span>r tu negocio?
          </h2>
          <div className="space-y-lg">
            <div className="flex items-center gap-lg">
              <a href="https://wa.me/5492645854167?text=Hola%20quiero%20saber%20mas%20de%20sus%20servicios." target="_blank" rel="noopener noreferrer" className="flex items-center gap-lg group cursor-pointer w-full">
                <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center border border-secondary/30 group-hover:bg-secondary/20 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="text-secondary" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold group-hover:text-primary transition-colors">WhatsApp</h4>
                  <p className="text-secondary font-bold text-lg group-hover:text-primary transition-colors">Iniciar Chat</p>
                </div>
              </a>
            </div>
            <div className="flex items-center gap-lg">
              <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center border border-secondary/30">
                <span className="material-symbols-outlined text-secondary text-3xl">mail</span>
              </div>
              <div>
                <h4 className="font-bold">Email</h4>
                <p className="text-on-surface-variant">info@chopperdigital.online</p>
              </div>
            </div>
          </div>
        </div>
        <div className="glass-panel p-xl rounded-xl">
          <form className="space-y-lg">
            <div className="space-y-sm">
              <label className="text-label-sm text-secondary uppercase tracking-widest">Nombre Completo</label>
              <input 
                className="w-full bg-transparent border-0 border-b-2 border-secondary/30 focus:border-secondary focus:ring-0 text-white placeholder-on-surface-variant/50 py-md" 
                placeholder="Juan Pérez" 
                type="text" 
              />
            </div>
            <div className="space-y-sm">
              <label className="text-label-sm text-secondary uppercase tracking-widest">Email de Contacto</label>
              <input 
                className="w-full bg-transparent border-0 border-b-2 border-secondary/30 focus:border-secondary focus:ring-0 text-white placeholder-on-surface-variant/50 py-md" 
                placeholder="juan@negocio.com" 
                type="email" 
              />
            </div>
            <div className="space-y-sm">
              <label className="text-label-sm text-secondary uppercase tracking-widest">Mensaje</label>
              <textarea 
                className="w-full bg-transparent border-0 border-b-2 border-secondary/30 focus:border-secondary focus:ring-0 text-white placeholder-on-surface-variant/50 py-md" 
                placeholder="Cuéntanos sobre tu negocio..." 
                rows="4"
              ></textarea>
            </div>
            <button className="w-full bg-secondary text-on-secondary-fixed font-bold py-md rounded-xl hover:brightness-125 transition-all btn-pulse">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
