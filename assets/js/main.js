// i18n module
(() => {
  const STORAGE_KEY = "app-language";
  const DEFAULT_LANGUAGE = "en";
  const SUPPORTED_LANGUAGES = ["en", "de"];
  const SWIPE_THRESHOLD = 20;
  const languageButtons = Array.from(document.querySelectorAll(".header__lang-btn[data-lang]"));
  const languageSwitch = document.querySelector(".header__lang-switch");

  const translations = {
    en: {
      nav: { features: "Features", gallery: "Gallery", about: "About", contact: "Contact", bookNow: "Book Now" },
      header: { toggleNav: "Toggle navigation", closeNav: "Close navigation", languageSwitch: "Language switch" },
      hero: { title: "Art on Skin", subtitle: "Professional tattoos from experienced artists", bookSession: "Book a Session", viewWork: "View Our Work" },
      features: {
        title: "Our Services",
        subtitle: "Wide range of services to bring your ideas to life",
        cards: {
          traditional: { title: "Traditional Tattoos", description: "Classic and traditional tattoo styles", price: "from EUR80" },
          realism: { title: "Realism", description: "Realistic portraits and images", price: "from EUR120" },
          graphics: { title: "Graphics", description: "Graphic and geometric designs", price: "from EUR60" },
          color: { title: "Color Tattoos", description: "Vibrant color tattoos of any complexity", price: "from EUR100" },
          coverups: { title: "Cover-ups", description: "Cover-up of old tattoos", price: "from EUR90" },
          custom: { title: "Custom Designs", description: "Individual design development", price: "from EUR40" },
        },
      },
      gallery: { title: "Gallery", subtitle: "Our best work and happy clients" },
      about: {
        title: "About Our Studio",
        text1: "INK STUDIO is a team of professional tattoo artists with many years of experience. We specialize in various tattoo styles and guarantee safety, sterility and high quality work.",
        text2: "Our studio is equipped with modern equipment, we use only quality pigments and disposable consumables. Each artist has a portfolio and is ready to bring your idea to life or create a unique design.",
        stats: { experience: "years experience", artists: "artists", clients: "clients", sterile: "sterile" },
      },
      process: {
        title: "Our Process",
        subtitle: "How we work with you",
        steps: {
          consultation: { title: "Consultation", text: "We discuss your idea, style preferences, and placement" },
          design: { title: "Design", text: "Our artist creates a custom design based on your vision" },
          approval: { title: "Approval", text: "Review and approve the final design before the session" },
          tattooing: { title: "Tattooing", text: "Professional execution in a sterile environment" },
          aftercare: { title: "Aftercare", text: "Detailed instructions for proper healing and care" },
        },
      },
      artists: {
        title: "Our Artists",
        subtitle: "Meet our talented team",
        members: {
          alex: { style: "Realism & Portraits", years: "12 years" },
          maria: { style: "Traditional & Neo-Traditional", years: "8 years" },
          tom: { style: "Blackwork & Graphics", years: "10 years" },
          sarah: { style: "Color & Watercolor", years: "7 years" },
        },
      },
      reviews: {
        title: "Client Reviews",
        subtitle: "What our clients say about us",
      },
      faq: {
        title: "FAQ",
        subtitle: "Frequently asked questions",
        items: {
          hurt: { question: "Does it hurt?", answer: "Pain levels vary depending on placement and individual tolerance. Most clients describe it as manageable discomfort rather than severe pain." },
          healing: { question: "How long does healing take?", answer: "Typically 2-4 weeks for surface healing. Complete healing can take 2-3 months. We provide detailed aftercare instructions." },
          design: { question: "Can I bring my own design?", answer: "Absolutely! We can work with your design or create something custom. Our artists will help refine it for the best tattoo result." },
          age: { question: "What is the minimum age?", answer: "You must be 18 years or older. Valid ID is required for all clients." },
          prepare: { question: "How do I prepare for my session?", answer: "Get a good night's sleep, eat a proper meal, stay hydrated, and avoid alcohol 24 hours before. Wear comfortable clothing." },
        },
      },
      contact: {
        title: "Contact",
        subtitle: "Get in touch for booking or consultation",
        info: {
          addressLabel: "Address",
          phoneLabel: "Phone",
          emailLabel: "Email",
          hoursLabel: "Opening Hours",
          hoursValue: "Mon-Sun: 10:00 - 22:00",
        },
        socialLinks: "Social links",
        instagram: "Instagram",
        facebook: "Facebook",
      },
      booking: {
        title: "Book a Session",
        nameLabel: "Your Name",
        namePlaceholder: "Your Name",
        phoneLabel: "Phone",
        phonePlaceholder: "Phone",
        emailLabel: "Email",
        emailPlaceholder: "Email",
        serviceLabel: "Select Service",
        servicePlaceholder: "Select Service",
        descriptionLabel: "Description of desired tattoo",
        descriptionPlaceholder: "Description of desired tattoo",
        submit: "Send Request",
        services: {
          traditional: "Traditional Tattoos",
          realism: "Realism",
          graphics: "Graphics",
          color: "Color Tattoos",
          coverups: "Cover-ups",
          custom: "Custom Designs",
        },
      },
      validation: {
        nameRequired: "Please enter your name.",
        nameShort: "Name must contain at least 2 characters.",
        nameLong: "Name cannot exceed 60 characters.",
        phoneRequired: "Please enter your phone number.",
        phoneShort: "Phone number looks too short.",
        phoneLong: "Phone number looks too long.",
        emailRequired: "Please enter your email.",
        emailInvalid: "Please enter a valid email address.",
        emailLong: "Email cannot exceed 120 characters.",
        serviceRequired: "Please select a service.",
        descriptionRequired: "Please describe your tattoo idea.",
        descriptionShort: "Description must contain at least 10 characters.",
        descriptionLong: "Description cannot exceed 1000 characters.",
        summary: "Please fix the highlighted fields and try again.",
        success: "Request sent. We will contact you soon.",
        sending: "Sending...",
        serverError: "Something went wrong. Please try again later.",
      },
      footer: { copyright: "© 2026 INK STUDIO. All rights reserved." },
    },
    de: {
      nav: { features: "Leistungen", gallery: "Galerie", about: "Über uns", contact: "Kontakt", bookNow: "Jetzt buchen" },
      header: { toggleNav: "Navigation umschalten", closeNav: "Navigation schließen", languageSwitch: "Sprachumschalter" },
      hero: { title: "Kunst auf der Haut", subtitle: "Professionelle Tattoos von erfahrenen Künstlern", bookSession: "Termin buchen", viewWork: "Unsere Arbeiten" },
      features: {
        title: "Unsere Leistungen",
        subtitle: "Breites Angebot, um Ihre Ideen zum Leben zu erwecken",
        cards: {
          traditional: { title: "Traditionelle Tattoos", description: "Klassische und traditionelle Tattoo-Stile", price: "ab 80 EUR" },
          realism: { title: "Realismus", description: "Realistische Porträts und Motive", price: "ab 120 EUR" },
          graphics: { title: "Grafik", description: "Grafische und geometrische Designs", price: "ab 60 EUR" },
          color: { title: "Farbige Tattoos", description: "Lebendige Farbtattoos jeder Komplexität", price: "ab 100 EUR" },
          coverups: { title: "Cover-ups", description: "Abdeckung alter Tattoos", price: "ab 90 EUR" },
          custom: { title: "Individuelle Designs", description: "Individuelle Designentwicklung", price: "ab 40 EUR" },
        },
      },
      gallery: { title: "Galerie", subtitle: "Unsere besten Arbeiten und zufriedene Kunden" },
      about: {
        title: "Über unser Studio",
        text1: "INK STUDIO ist ein Team professioneller Tätowierer mit langjähriger Erfahrung. Wir sind auf verschiedene Tattoo-Stile spezialisiert und garantieren Sicherheit, Sterilität und hohe Qualität.",
        text2: "Unser Studio ist mit moderner Technik ausgestattet, wir verwenden nur hochwertige Pigmente und Einwegmaterialien. Jeder Artist hat ein Portfolio und setzt Ihre Idee um oder erstellt ein einzigartiges Design.",
        stats: { experience: "Jahre Erfahrung", artists: "Artists", clients: "Kunden", sterile: "steril" },
      },
      process: {
        title: "Unser Ablauf",
        subtitle: "So arbeiten wir mit Ihnen",
        steps: {
          consultation: { title: "Beratung", text: "Wir besprechen Ihre Idee, Stilwünsche und Platzierung" },
          design: { title: "Design", text: "Unser Artist erstellt ein individuelles Design nach Ihrer Vision" },
          approval: { title: "Freigabe", text: "Sie prüfen und bestätigen das finale Design vor dem Termin" },
          tattooing: { title: "Tätowieren", text: "Professionelle Umsetzung in steriler Umgebung" },
          aftercare: { title: "Nachsorge", text: "Detaillierte Hinweise für optimale Heilung und Pflege" },
        },
      },
      artists: {
        title: "Unsere Artists",
        subtitle: "Lernen Sie unser talentiertes Team kennen",
        members: {
          alex: { style: "Realismus & Porträts", years: "12 Jahre" },
          maria: { style: "Traditional & Neo-Traditional", years: "8 Jahre" },
          tom: { style: "Blackwork & Grafik", years: "10 Jahre" },
          sarah: { style: "Farbe & Aquarell", years: "7 Jahre" },
        },
      },
      reviews: {
        title: "Kundenbewertungen",
        subtitle: "Was unsere Kunden über uns sagen",
      },
      faq: {
        title: "FAQ",
        subtitle: "Häufig gestellte Fragen",
        items: {
          hurt: { question: "Tut es weh?", answer: "Das Schmerzempfinden hängt von Stelle und individueller Toleranz ab. Die meisten beschreiben es als gut aushaltbaren Schmerz." },
          healing: { question: "Wie lange dauert die Heilung?", answer: "Oberflächlich meist 2-4 Wochen. Vollständige Heilung kann 2-3 Monate dauern. Wir geben detaillierte Pflegehinweise." },
          design: { question: "Kann ich mein eigenes Design mitbringen?", answer: "Ja, natürlich! Wir arbeiten mit Ihrem Motiv oder erstellen ein individuelles Design. Unsere Artists optimieren es für das beste Tattoo-Ergebnis." },
          age: { question: "Was ist das Mindestalter?", answer: "Sie müssen mindestens 18 Jahre alt sein. Ein gültiger Ausweis ist erforderlich." },
          prepare: { question: "Wie bereite ich mich auf meinen Termin vor?", answer: "Schlafen Sie gut, essen Sie vorher, trinken Sie ausreichend und vermeiden Sie Alkohol 24 Stunden vor dem Termin. Tragen Sie bequeme Kleidung." },
        },
      },
      contact: {
        title: "Kontakt",
        subtitle: "Kontaktieren Sie uns für Buchung oder Beratung",
        info: {
          addressLabel: "Adresse",
          phoneLabel: "Telefon",
          emailLabel: "E-Mail",
          hoursLabel: "Öffnungszeiten",
          hoursValue: "Mo-So: 10:00 - 22:00",
        },
        socialLinks: "Social-Links",
        instagram: "Instagram",
        facebook: "Facebook",
      },
      booking: {
        title: "Sitzung buchen",
        nameLabel: "Ihr Name",
        namePlaceholder: "Ihr Name",
        phoneLabel: "Telefon",
        phonePlaceholder: "Telefon",
        emailLabel: "E-Mail",
        emailPlaceholder: "E-Mail",
        serviceLabel: "Service auswählen",
        servicePlaceholder: "Service auswählen",
        descriptionLabel: "Beschreibung des gewünschten Tattoos",
        descriptionPlaceholder: "Beschreibung des gewünschten Tattoos",
        submit: "Anfrage senden",
        services: {
          traditional: "Traditionelle Tattoos",
          realism: "Realismus",
          graphics: "Grafik",
          color: "Farbige Tattoos",
          coverups: "Cover-ups",
          custom: "Individuelle Designs",
        },
      },
      validation: {
        nameRequired: "Bitte geben Sie Ihren Namen ein.",
        nameShort: "Der Name muss mindestens 2 Zeichen enthalten.",
        nameLong: "Der Name darf maximal 60 Zeichen enthalten.",
        phoneRequired: "Bitte geben Sie Ihre Telefonnummer ein.",
        phoneShort: "Die Telefonnummer ist zu kurz.",
        phoneLong: "Die Telefonnummer ist zu lang.",
        emailRequired: "Bitte geben Sie Ihre E-Mail ein.",
        emailInvalid: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
        emailLong: "Die E-Mail darf maximal 120 Zeichen enthalten.",
        serviceRequired: "Bitte wählen Sie einen Service aus.",
        descriptionRequired: "Bitte beschreiben Sie Ihre Tattoo-Idee.",
        descriptionShort: "Die Beschreibung muss mindestens 10 Zeichen enthalten.",
        descriptionLong: "Die Beschreibung darf maximal 1000 Zeichen enthalten.",
        summary: "Bitte korrigieren Sie die markierten Felder und versuchen Sie es erneut.",
        success: "Anfrage gesendet. Wir melden uns bald bei Ihnen.",
        sending: "Wird gesendet...",
        serverError: "Etwas ist schiefgelaufen. Bitte versuchen Sie es später erneut.",
      },
      footer: { copyright: "© 2026 INK STUDIO. Alle Rechte vorbehalten." },
    },
  };

  const getTranslationByPath = (language, path) => {
    return path.split(".").reduce((accumulator, part) => {
      if (!accumulator || typeof accumulator !== "object") return undefined;
      return accumulator[part];
    }, translations[language]);
  };

  const applyLanguageToPage = (language) => {
    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.dataset.i18n;
      const value = getTranslationByPath(language, key);
      if (typeof value === "string") node.textContent = value;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
      const key = node.dataset.i18nPlaceholder;
      const value = getTranslationByPath(language, key);
      if (typeof value === "string") node.setAttribute("placeholder", value);
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((node) => {
      const key = node.dataset.i18nAriaLabel;
      const value = getTranslationByPath(language, key);
      if (typeof value === "string") node.setAttribute("aria-label", value);
    });

    languageButtons.forEach((button) => {
      const isActive = button.dataset.lang === language;
      button.classList.toggle("header__lang-btn--active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    if (languageSwitch) {
      languageSwitch.setAttribute("data-active-lang", language);
    }
  };

  const getInitialLanguage = () => {
    const storedLanguage = localStorage.getItem(STORAGE_KEY);
    if (storedLanguage && SUPPORTED_LANGUAGES.includes(storedLanguage)) return storedLanguage;

    const browserLanguage = (navigator.language || DEFAULT_LANGUAGE).slice(0, 2).toLowerCase();
    if (SUPPORTED_LANGUAGES.includes(browserLanguage)) return browserLanguage;

    return DEFAULT_LANGUAGE;
  };

  let currentLanguage = getInitialLanguage();
  applyLanguageToPage(currentLanguage);

  const setLanguage = (nextLanguage) => {
    if (!nextLanguage || nextLanguage === currentLanguage || !SUPPORTED_LANGUAGES.includes(nextLanguage)) return;

    currentLanguage = nextLanguage;
    localStorage.setItem(STORAGE_KEY, currentLanguage);
    applyLanguageToPage(currentLanguage);
    document.dispatchEvent(new CustomEvent("app:languagechange", { detail: { language: currentLanguage } }));
  };

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.lang);
    });
  });

  if (languageSwitch) {
    let pointerStartX = null;

    languageSwitch.addEventListener("click", (event) => {
      if (event.target instanceof HTMLElement && event.target.closest(".header__lang-btn")) return;

      const bounds = languageSwitch.getBoundingClientRect();
      const nextLanguage = event.clientX - bounds.left < bounds.width / 2 ? "en" : "de";
      setLanguage(nextLanguage);
    });

    languageSwitch.addEventListener("pointerdown", (event) => {
      pointerStartX = event.clientX;
    });

    languageSwitch.addEventListener("pointerup", (event) => {
      if (pointerStartX === null) return;

      const deltaX = event.clientX - pointerStartX;
      pointerStartX = null;

      if (Math.abs(deltaX) < SWIPE_THRESHOLD) return;
      setLanguage(deltaX > 0 ? "de" : "en");
    });

    languageSwitch.addEventListener("pointercancel", () => {
      pointerStartX = null;
    });
  }

  window.AppI18n = {
    getLanguage: () => currentLanguage,
    t: (path) => getTranslationByPath(currentLanguage, path) || path,
  };
})();

// Burger menu module
(() => {
  const MOBILE_BREAKPOINT = 779;
  const BODY_LOCK_CLASS = "body--menu-open";
  const burgerBtn = document.querySelector(".header__burger-btn");
  const navRight = document.querySelector("#header-menu");
  const closeBtn = document.querySelector(".header__menu-close-btn");
  let lastIsMobile = window.innerWidth <= MOBILE_BREAKPOINT;

  if (!burgerBtn || !navRight) return;

  const closeMenu = () => {
    navRight.classList.remove("header__menu--open");
    burgerBtn.setAttribute("aria-expanded", "false");
    document.body.classList.remove(BODY_LOCK_CLASS);
  };

  const toggleMenu = () => {
    const isOpen = navRight.classList.toggle("header__menu--open");
    burgerBtn.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle(BODY_LOCK_CLASS, isOpen);
  };

  burgerBtn.addEventListener("click", toggleMenu);
  if (closeBtn) closeBtn.addEventListener("click", closeMenu);

  navRight.addEventListener("click", (event) => {
    if (event.target === navRight) closeMenu();
  });

  navRight.querySelectorAll("a, button").forEach((element) => {
    element.addEventListener("click", () => {
      if (element.closest(".header__lang-switch")) return;
      if (window.innerWidth <= MOBILE_BREAKPOINT) closeMenu();
    });
  });

  window.addEventListener("resize", () => {
    const isMobile = window.innerWidth <= MOBILE_BREAKPOINT;

    if (isMobile !== lastIsMobile) {
      navRight.classList.add("header__menu--no-transition");
      closeMenu();

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          navRight.classList.remove("header__menu--no-transition");
        });
      });
    } else if (!isMobile) {
      closeMenu();
    }

    lastIsMobile = isMobile;
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
})();

// Booking form module — validation + Fetch API submission
(() => {
  const form = document.querySelector("#booking-form");
  if (!form) return;

  const summary = document.querySelector("#booking-summary");
  const success = document.querySelector("#booking-success");
  const submitBtn = form.querySelector("[type='submit']");
  const i18n = window.AppI18n;
  const translate = (key) => (i18n ? i18n.t(key) : key);

  const restUrl = (typeof artonskinData !== "undefined" && artonskinData.restUrl)
    ? artonskinData.restUrl
    : null;
  const nonce = (typeof artonskinData !== "undefined" && artonskinData.nonce)
    ? artonskinData.nonce
    : null;

  const fields = [
    form.querySelector("#name"),
    form.querySelector("#phone"),
    form.querySelector("#email"),
    form.querySelector("#service"),
    form.querySelector("#description"),
  ].filter(Boolean);

  const messages = {
    name: { valueMissing: "validation.nameRequired", tooShort: "validation.nameShort", tooLong: "validation.nameLong" },
    phone: { valueMissing: "validation.phoneRequired", tooShort: "validation.phoneShort", tooLong: "validation.phoneLong" },
    email: { valueMissing: "validation.emailRequired", typeMismatch: "validation.emailInvalid", tooLong: "validation.emailLong" },
    service: { valueMissing: "validation.serviceRequired" },
    description: { valueMissing: "validation.descriptionRequired", tooShort: "validation.descriptionShort", tooLong: "validation.descriptionLong" },
  };

  const getErrorNode = (field) => form.querySelector(`#${field.id}-error`);

  const getFieldMessage = (field) => {
    const fieldMessages = messages[field.id] || {};
    const validity = field.validity;

    if (validity.valueMissing) return translate(fieldMessages.valueMissing);
    if (validity.typeMismatch) return translate(fieldMessages.typeMismatch);
    if (validity.tooShort) return translate(fieldMessages.tooShort);
    if (validity.tooLong) return translate(fieldMessages.tooLong);
    if (validity.patternMismatch) return "Invalid format.";

    return "";
  };

  const showFieldError = (field, message) => {
    const errorNode = getErrorNode(field);
    field.setAttribute("aria-invalid", "true");
    if (errorNode) errorNode.textContent = message;
  };

  const clearFieldError = (field) => {
    const errorNode = getErrorNode(field);
    field.removeAttribute("aria-invalid");
    if (errorNode) errorNode.textContent = "";
  };

  const validateField = (field) => {
    const value = typeof field.value === "string" ? field.value.trim() : field.value;
    if (typeof field.value === "string" && value !== field.value) field.value = value;

    if (field.checkValidity()) {
      clearFieldError(field);
      return true;
    }

    showFieldError(field, getFieldMessage(field));
    return false;
  };

  const clearGlobalMessages = () => {
    if (summary) {
      summary.textContent = "";
      summary.classList.remove("booking-form__summary--error");
    }
    if (success) success.textContent = "";
  };

  const revalidateInvalidFieldsAfterLanguageChange = () => {
    const invalidFields = fields.filter((field) => field.getAttribute("aria-invalid") === "true");
    invalidFields.forEach((field) => showFieldError(field, getFieldMessage(field)));
    if (summary && invalidFields.length > 0) {
      summary.textContent = translate("validation.summary");
      summary.classList.add("booking-form__summary--error");
    }
  };

  fields.forEach((field) => {
    field.addEventListener("blur", () => {
      clearGlobalMessages();
      validateField(field);
    });

    field.addEventListener("input", () => {
      if (field.getAttribute("aria-invalid") === "true") validateField(field);
    });
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    clearGlobalMessages();

    const invalidFields = fields.filter((field) => !validateField(field));
    if (invalidFields.length > 0) {
      if (summary) {
        summary.textContent = translate("validation.summary");
        summary.classList.add("booking-form__summary--error");
      }
      invalidFields[0].focus();
      return;
    }

    if (!restUrl) {
      form.reset();
      fields.forEach(clearFieldError);
      if (success) success.textContent = translate("validation.success");
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = translate("validation.sending");
    }

    try {
      const response = await fetch(restUrl + "artonskin/v1/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-WP-Nonce": nonce,
        },
        body: JSON.stringify({
          name: form.querySelector("#name").value,
          phone: form.querySelector("#phone").value,
          email: form.querySelector("#email").value,
          service: form.querySelector("#service").value,
          description: form.querySelector("#description").value,
        }),
      });

      if (!response.ok) throw new Error("Server error");

      form.reset();
      fields.forEach(clearFieldError);
      if (success) success.textContent = translate("validation.success");
    } catch {
      if (summary) {
        summary.textContent = translate("validation.serverError");
        summary.classList.add("booking-form__summary--error");
      }
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = translate("booking.submit");
      }
    }
  });

  document.addEventListener("app:languagechange", revalidateInvalidFieldsAfterLanguageChange);
})();

// Testimonials module — async fetch with skeleton loader and error handling
(() => {
  const list     = document.querySelector("#reviews-list");
  const skeleton = document.querySelector("#reviews-skeleton");
  const errorEl  = document.querySelector("#reviews-error");

  if (!list || !skeleton) return;

  const STAR_SVG = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" fill="#FB2C36"/></svg>`;

  function buildStars(rating) {
    const count = Math.min(Math.max(parseInt(rating, 10) || 5, 1), 5);
    return STAR_SVG.repeat(count);
  }

  function stripTags(html) {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  }

  function renderCards(items) {
    const fragment = document.createDocumentFragment();

    items.forEach((item) => {
      const author = item.author_name || item.title.rendered;
      const text   = stripTags(item.content.rendered);
      const rating = item.rating || "5";
      const pos    = item.position || "";

      const card = document.createElement("blockquote");
      card.className = "review-card";
      card.innerHTML = `
        <div class="review-stars" aria-label="Rating: ${rating} out of 5">${buildStars(rating)}</div>
        <p>"${text}"</p>
        <cite>${author}${pos ? ` &mdash; ${pos}` : ""}</cite>
      `;
      fragment.appendChild(card);
    });

    skeleton.hidden = true;
    list.appendChild(fragment);
  }

  function showError(msg) {
    skeleton.hidden = true;
    if (errorEl) {
      errorEl.textContent = msg;
      errorEl.hidden = false;
    }
  }

  async function loadTestimonials() {
    const base = (typeof artonskinData !== "undefined" && artonskinData.restUrl)
      ? artonskinData.restUrl
      : "/site/wp-json/";

    const url = base.replace(/\/?$/, "/") + "wp/v2/testimonials?_fields=id,title,content,rating,author_name,position&per_page=10";

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      if (!Array.isArray(data) || data.length === 0) throw new Error("empty");
      renderCards(data);
    } catch {
      showError("Could not load reviews. Please try again later.");
    }
  }

  loadTestimonials();
})();
