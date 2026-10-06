import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    solution: 'Chopper POS',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const openWhatsAppDirect = () => {
    const text = `Hola Chopper Digital! Mi nombre es ${formData.name || 'un interesado'}. Me interesa saber más sobre ${formData.solution}. ${formData.message ? `Mensaje: ${formData.message}` : ''}`;
    window.open(`https://wa.me/5492645854167?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="py-20 px-4 sm:px-6 md:px-margin-desktop max-w-[1440px] mx-auto scroll-mt-24" id="contacto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* Left Information Column */}
        <div className="space-y-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-secondary font-bold px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20">
              Contáctanos
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-on-surface mt-4 tracking-tight leading-tight">
              ¿Listo para potenc<span className="neon-accent">I</span><span className="neon-accent">A</span>r tu negocio?
            </h2>
            <p className="text-base sm:text-lg text-on-surface-variant mt-4 leading-relaxed">
              Conversa con uno de nuestros especialistas y recibe una demostración personalizada sin compromiso. Te asesoramos sobre el módulo ideal para tu actividad.
            </p>
          </div>

          <div className="space-y-4">
            {/* WhatsApp Card */}
            <a
              href="https://wa.me/5492645854167?text=Hola,%20quiero%20saber%20mas%20sobre%20los%20servicios%20de%20Chopper%20Digital."
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 sm:p-5 rounded-2xl flex items-center gap-4 group border-secondary/20 hover:border-secondary transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-emerald-500/15 flex items-center justify-center border border-emerald-500/30 group-hover:bg-emerald-500/25 transition-all flex-shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="text-emerald-400" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-on-surface group-hover:text-primary transition-colors flex items-center gap-2">
                  WhatsApp Oficial <span className="text-xs text-emerald-400 font-normal">● En línea</span>
                </h4>
                <p className="text-secondary font-bold text-sm sm:text-base group-hover:underline">
                  +54 9 264 585-4167
                </p>
                <p className="text-xs text-on-surface-variant truncate">
                  Respuesta habitual en menos de 15 minutos
                </p>
              </div>
              <span className="text-secondary group-hover:translate-x-1 transition-transform">→</span>
            </a>

            {/* Email Card */}
            <a
              href="mailto:info@chopperdigital.online"
              className="glass-card p-4 sm:p-5 rounded-2xl flex items-center gap-4 group border-secondary/20 hover:border-secondary transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center border border-secondary/30 group-hover:bg-secondary/20 transition-all flex-shrink-0">
                <span className="material-symbols-outlined text-secondary text-2xl">mail</span>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-on-surface group-hover:text-primary transition-colors">
                  Correo Electrónico
                </h4>
                <p className="text-secondary font-medium text-sm sm:text-base truncate">
                  info@chopperdigital.online
                </p>
                <p className="text-xs text-on-surface-variant">
                  Consultas comerciales y convenios
                </p>
              </div>
              <span className="text-secondary group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="glass-panel p-6 sm:p-8 lg:p-10 rounded-2xl border-secondary/30 relative">
          {submitted ? (
            <div className="py-8 text-center space-y-5 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto text-3xl">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-on-surface">
                ¡Solicitud Recibida con Éxito!
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base max-w-[480px] mx-auto">
                Gracias, <span className="text-secondary font-semibold">{formData.name}</span>. Nos pondremos en contacto contigo a la brevedad para asesorarte sobre <span className="text-secondary font-semibold">{formData.solution}</span>.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  type="button"
                  onClick={openWhatsAppDirect}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm flex items-center justify-center gap-2"
                >
                  Continuar por WhatsApp Ahora
                </button>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="border border-secondary/30 text-on-surface-variant hover:text-on-surface text-sm py-3 px-6 rounded-xl transition-all"
                >
                  Enviar otro mensaje
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h3 className="text-xl font-bold text-on-surface pb-2 border-b border-secondary/15">
                Envíanos tu consulta
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs text-secondary uppercase tracking-wider font-semibold">
                    Nombre Completo *
                  </label>
                  <input
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-surface-container/60 border border-secondary/20 focus:border-secondary focus:ring-1 focus:ring-secondary rounded-xl text-white placeholder-on-surface-variant/40 px-4 py-3 text-sm transition-all"
                    placeholder="Ej. Martín Rossi"
                    type="text"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-secondary uppercase tracking-wider font-semibold">
                    WhatsApp o Teléfono *
                  </label>
                  <input
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-surface-container/60 border border-secondary/20 focus:border-secondary focus:ring-1 focus:ring-secondary rounded-xl text-white placeholder-on-surface-variant/40 px-4 py-3 text-sm transition-all"
                    placeholder="Ej. +54 9 11 2345-6789"
                    type="tel"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs text-secondary uppercase tracking-wider font-semibold">
                    Correo Electrónico *
                  </label>
                  <input
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-surface-container/60 border border-secondary/20 focus:border-secondary focus:ring-1 focus:ring-secondary rounded-xl text-white placeholder-on-surface-variant/40 px-4 py-3 text-sm transition-all"
                    placeholder="martin@empresa.com"
                    type="email"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-secondary uppercase tracking-wider font-semibold">
                    Módulo de Interés
                  </label>
                  <select
                    name="solution"
                    value={formData.solution}
                    onChange={handleChange}
                    className="w-full bg-surface-container/90 border border-secondary/20 focus:border-secondary focus:ring-1 focus:ring-secondary rounded-xl text-white px-4 py-3 text-sm transition-all"
                  >
                    <option value="Chopper POS">Chopper POS (Punto de Venta)</option>
                    <option value="Chopper Health">Chopper Health (Consultorios)</option>
                    <option value="Chopper Fiado">Chopper Fiado (Cuentas Corrientes)</option>
                    <option value="Chopper Ledger">Chopper Ledger (Contable con IA)</option>
                    <option value="Chopper Estates">Chopper Estates (Inmobiliaria)</option>
                    <option value="Ecosistema Completo">Ecosistema Completo / Varios</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-secondary uppercase tracking-wider font-semibold">
                  Cuéntanos sobre tu negocio o duda
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-surface-container/60 border border-secondary/20 focus:border-secondary focus:ring-1 focus:ring-secondary rounded-xl text-white placeholder-on-surface-variant/40 px-4 py-3 text-sm transition-all"
                  placeholder="Cantidad de usuarios, sucursales o funciones que buscas automatizar..."
                  rows="3"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-secondary text-on-secondary-fixed font-bold py-3.5 px-6 rounded-xl hover:brightness-125 transition-all btn-pulse shadow-[0_0_20px_rgba(79,218,212,0.4)] text-sm sm:text-base uppercase tracking-wider"
              >
                Solicitar Demostración Gratuita
              </button>

              <p className="text-[11px] text-center text-on-surface-variant/70">
                🔒 Respetamos tu privacidad. Tus datos nunca serán compartidos con terceros.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
