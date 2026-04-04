(() => {
  const qs = (s, p = document) => p.querySelector(s);
  const qsa = (s, p = document) => [...p.querySelectorAll(s)];

  // --- CONFIGURACIÓN DE N8N ---
  // IMPORTANTE: Reemplaza con tu URL de webhook de n8n
  const N8N_WEBHOOK_URL = "https://n8n.chopperdigital.online/webhook/contacto";

  const nav = qs('#menu');
  const menuBtn = qs('#menu-btn');
  const revealItems = qsa('.reveal');
  const form = qs('#lead-form');
  const formResult = qs('#form-result');
  const emptyState = qs('#form-empty');
  const yearNode = qs('#year');

  if (yearNode) yearNode.textContent = String(new Date().getFullYear());

  // Lógica de Menú Móvil (Original)
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open', !expanded);
    });

    qsa('a', nav).forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Scroll Suave (Original)
  qsa('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const id = anchor.getAttribute('href');
      if (!id || id === '#') return;
      const target = qs(id);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Animaciones Reveal (Original)
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -40px 0px' }
    );
    revealItems.forEach((el) => io.observe(el));
  } else {
    revealItems.forEach((el) => el.classList.add('is-visible'));
  }

  // --- LÓGICA DE FORMULARIO MEJORADA ---
  if (!form) return;

  const submitBtn = qs('.submit-btn', form);
  const defaultLabel = qs('.label-default', submitBtn);
  const loadingLabel = qs('.label-loading', submitBtn);

  const fields = {
    nombre: qs('#nombre', form),
    email: qs('#email', form),
    sector: qs('#sector', form),
    mensaje: qs('#mensaje', form),
    honeypot: qs('input[name="honeypot"]', form)
  };

  const errorMap = {
    nombre: qs('#error-nombre', form),
    email: qs('#error-email', form),
    sector: qs('#error-sector', form),
    mensaje: qs('#error-mensaje', form)
  };

  const validators = {
    nombre: (value) => (value.trim().length >= 3 ? '' : 'Ingresá tu nombre completo.'),
    email: (value) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Ingresá un correo válido.'),
    sector: (value) => (value ? '' : 'Seleccioná un sector.'),
    mensaje: (value) => (value.trim().length >= 10 ? '' : 'Contanos un poco más sobre tu necesidad.')
  };

  const setError = (key, message) => {
    const field = fields[key];
    const error = errorMap[key];
    if (!field || !error) return;
    error.textContent = message;
    field.setAttribute('aria-invalid', message ? 'true' : 'false');
  };

  const validateField = (key) => {
    if (key === 'honeypot') return true;
    const field = fields[key];
    if (!field) return true;
    const msg = validators[key](field.value);
    setError(key, msg);
    return !msg;
  };

  // Listeners para validación en tiempo real
  Object.keys(fields).forEach((key) => {
    if (key === 'honeypot') return;
    fields[key].addEventListener('blur', () => validateField(key));
    fields[key].addEventListener('input', () => {
      if (errorMap[key]?.textContent) validateField(key);
      if (emptyState) emptyState.style.display = 'none';
    });
  });

  const setLoading = (isLoading) => {
    if (!submitBtn) return;
    submitBtn.classList.toggle('loading', isLoading);
    submitBtn.disabled = isLoading;
    submitBtn.setAttribute('aria-busy', String(isLoading));
    if (defaultLabel) defaultLabel.setAttribute('aria-hidden', String(isLoading));
    if (loadingLabel) loadingLabel.setAttribute('aria-hidden', String(!isLoading));
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    // 1. Antispam Honeypot
    if (fields.honeypot.value.trim() !== "") {
      console.warn("Spam detectado.");
      formResult.textContent = '¡Gracias! Tu consulta ha sido procesada.';
      formResult.className = 'form-result active success';
      form.reset();
      return;
    }

    // 2. Validación
    const isValid = ['nombre', 'email', 'sector', 'mensaje'].every(validateField);
    if (!isValid) {
      if (formResult) {
        formResult.textContent = 'Revisá los campos marcados para continuar.';
        formResult.className = 'form-result active error';
      }
      return;
    }

    setLoading(true);
    formResult.classList.remove('active');

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    delete data.honeypot; // No enviamos la trampa a n8n

    try {
      // 3. Envío a n8n
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          metadata: {
            source: window.location.hostname,
            timestamp: new Date().toLocaleString('es-AR')
          }
        })
      });

      if (!response.ok) throw new Error("Error en el servidor");

      // 4. Éxito y Redirección
      if (formResult) {
        formResult.textContent = '¡Excelente! Recibimos tu consulta con éxito.';
        formResult.className = 'form-result active success';
      }

      // Si es WhatsApp, abrimos el canal después de un breve delay
      if (data.canal === 'whatsapp') {
        const body = `Hola Chopper! Soy ${data.nombre}. Quiero avanzar con una propuesta para el sector ${data.sector}. Necesidad: ${data.mensaje}`;
        const phone = '5492645859829';
        setTimeout(() => {
          window.open(`https://wa.me/${phone}?text=${encodeURIComponent(body)}`, '_blank', 'noopener,noreferrer');
        }, 1200);
      }

      form.reset();
      Object.keys(errorMap).forEach(key => setError(key, ''));
      if (emptyState) emptyState.style.display = 'block';

    } catch (error) {
      if (formResult) {
        formResult.textContent = 'Hubo un problema al enviar. Por favor, intentá por WhatsApp directamente.';
        formResult.className = 'form-result active error';
      }
    } finally {
      setLoading(false);
    }
  });
})();
