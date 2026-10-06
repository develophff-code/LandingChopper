import { useState } from 'react';

const faqs = [
  {
    q: '¿Qué es Chopper Digital y en qué se diferencia de otros sistemas?',
    a: 'Chopper Digital es una suite modular de gestión para negocios reales. A diferencia de softwares tradicionales complejos y costosos, Chopper funciona 100% en la nube, es muy simple de usar y aprovecha Inteligencia Artificial para automatizar tareas pesadas como extracción de datos de facturas (OCR) y avisos automáticos por WhatsApp.',
  },
  {
    q: '¿Necesito instalar software en mi computadora o comprar servidores?',
    a: 'No. Chopper Digital funciona en cualquier navegador web moderno desde tu teléfono celular, tablet, notebook o PC de escritorio. Solo necesitas conexión a internet y tu usuario para comenzar a trabajar.',
  },
  {
    q: '¿Puedo empezar con un solo módulo y luego sumar más?',
    a: '¡Sí, totalmente! Puedes empezar contratando únicamente Chopper Health (para consultorios), Chopper POS (para comercio) o Chopper Fiado (cuentas corrientes). A medida que tu negocio crezca, puedes activar nuevos módulos que se integrarán de forma instantánea sin duplicar datos.',
  },
  {
    q: '¿Cómo funciona la Inteligencia Artificial en los módulos?',
    a: 'En Chopper Ledger, la IA lee automáticamente fotos y PDFs de tickets y facturas (OCR), detectando proveedor, CUIT, importes e impuestos sin carga manual. En Chopper Health, asiste en la organización de la agenda inteligente, reduciendo cancelaciones mediante recordatorios interactivos por WhatsApp.',
  },
  {
    q: '¿Mis datos e historiales de clientes/pacientes están seguros?',
    a: 'Absolutamente. Toda la información viaja encriptada bajo protocolos SSL/TLS de grado bancario. Realizamos copias de seguridad automáticas diarias en centros de datos con certificación internacional, garantizando que nunca pierdas tu historial.',
  },
  {
    q: '¿Tienen período de prueba o demostración en vivo?',
    a: 'Sí, ofrecemos una demostración guiada sin costo de 15 minutos adaptada a tu rubro para que veas la plataforma funcionando con ejemplos reales. También dispones de 14 días de prueba gratuita en nuestros planes.',
  },
  {
    q: '¿Cómo nos ayudan si tenemos dudas durante el uso?',
    a: 'Contamos con soporte directo en español vía WhatsApp y correo electrónico. Además, durante tu puesta en marcha te asistimos para cargar tu lista de precios o clientes de Excel sin cargo adicional.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 md:px-margin-desktop max-w-[1000px] mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <span className="text-xs uppercase tracking-widest text-secondary font-bold px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20">
          Respuestas Claras
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-on-surface mt-4 tracking-tight">
          Preguntas Frecuentes
        </h2>
        <p className="text-sm sm:text-base text-on-surface-variant mt-4">
          Todo lo que necesitas saber antes de dar el salto digital con Chopper.
        </p>
      </div>

      {/* Accordion */}
      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`glass-card rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen ? 'border-secondary/50 bg-surface-container/60' : 'border-secondary/20 hover:border-secondary/35'
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full py-5 px-6 text-left flex justify-between items-center gap-4 focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="font-bold text-base sm:text-lg text-on-surface">
                  {faq.q}
                </span>
                <span
                  className={`w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary text-lg flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-secondary text-on-secondary-fixed' : ''
                  }`}
                >
                  ▼
                </span>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-on-surface-variant leading-relaxed border-t border-secondary/10">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Direct Contact Prompt */}
      <div className="text-center mt-12">
        <p className="text-sm text-on-surface-variant">
          ¿Tienes otra pregunta que no está aquí?{' '}
          <a
            href="https://wa.me/5492645854167?text=Hola,%20tengo%20una%20consulta%20sobre%20Chopper%20Digital."
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary font-bold hover:underline"
          >
            Pregúntanos por WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
};

export default FAQ;
