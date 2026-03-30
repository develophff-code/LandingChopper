(() => {
  const qs = (s, p = document) => p.querySelector(s);
  const qsa = (s, p = document) => [...p.querySelectorAll(s)];

  const nav = qs('#menu');
  const menuBtn = qs('#menu-btn');
  const revealItems = qsa('.reveal');
  const form = qs('#lead-form');
  const formResult = qs('#form-result');
  const emptyState = qs('#form-empty');
  const yearNode = qs('#year');

  if (yearNode) yearNode.textContent = String(new Date().getFullYear());

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

  if (!form) return;

  const submitBtn = qs('.submit-btn', form);
  const defaultLabel = qs('.label-default', submitBtn);
  const loadingLabel = qs('.label-loading', submitBtn);

  const fields = {
    nombre: qs('#nombre', form),
    email: qs('#email', form),
    sector: qs('#sector', form),
    mensaje: qs('#mensaje', form)
  };

  const errorMap = {
    nombre: qs('#error-nombre', form),
    email: qs('#error-email', form),
    sector: qs('#error-sector', form),
    mensaje: qs('#error-mensaje', form)
  };

  const validators = {
    nombre: (value) => (value.trim().length >= 3 ? '' : 'Ingresá al menos 3 caracteres.'),
    email: (value) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Ingresá un correo válido.'),
    sector: (value) => (value ? '' : 'Seleccioná un sector.'),
    mensaje: (value) => (value.trim().length >= 16 ? '' : 'Contanos un poco más (mínimo 16 caracteres).')
  };

  const setError = (key, message) => {
    const field = fields[key];
    const error = errorMap[key];
    if (!field || !error) return;
    error.textContent = message;
    field.setAttribute('aria-invalid', message ? 'true' : 'false');
  };

  const validateField = (key) => {
    const field = fields[key];
    if (!field) return true;
    const msg = validators[key](field.value);
    setError(key, msg);
    return !msg;
  };

  Object.keys(fields).forEach((key) => {
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

    const isValid = Object.keys(fields).every(validateField);
    if (!isValid) {
      if (formResult) {
        formResult.style.color = '#b32222';
        formResult.textContent = 'Revisá los campos marcados para continuar.';
      }
      return;
    }

    setLoading(true);

    const data = new FormData(form);
    const nombre = String(data.get('nombre') || '').trim();
    const email = String(data.get('email') || '').trim();
    const sector = String(data.get('sector') || '').trim();
    const mensaje = String(data.get('mensaje') || '').trim();
    const canal = String(data.get('canal') || 'whatsapp').trim();

    const body = [
      'Hola Chopper, quiero avanzar con una propuesta.',
      `Nombre: ${nombre}`,
      `Correo: ${email}`,
      `Sector: ${sector}`,
      `Necesidad: ${mensaje}`
    ].join('\n');

    await new Promise((resolve) => setTimeout(resolve, 820));

    if (formResult) {
      formResult.style.color = '#1b5a2f';
      formResult.textContent = 'Perfecto. Te abrimos el canal que seleccionaste.';
    }

    if (canal === 'email') {
      const subject = encodeURIComponent('Consulta comercial - Chopper Desarrollos Digitales');
      window.location.href = `mailto:hola@chopperdigital.com?subject=${subject}&body=${encodeURIComponent(body)}`;
    } else {
      const phone = '5492645859829';
      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(body)}`, '_blank', 'noopener,noreferrer');
    }

    form.reset();
    Object.keys(fields).forEach((key) => setError(key, ''));
    if (emptyState) emptyState.style.display = 'block';
    setLoading(false);
  });
})();
