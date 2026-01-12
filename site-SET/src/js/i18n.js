async function loadLanguage(lang) {
  const response = await fetch(`./src/i18n/${lang}.json`);
  const translations = await response.json();

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[key]) {
      el.textContent = translations[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (translations[key]) {
      el.placeholder = translations[key];
    }
  });

  localStorage.setItem("lang", lang);
}

const savedLang = localStorage.getItem("lang") || "pt";
loadLanguage(savedLang);

function toggleLanguage() {
    const current = localStorage.getItem("lang") || "pt";
    const next = current === "pt" ? "en" : "pt";

    loadLanguage(next);

    // idioma ALTERNATIVO
    const label = document.querySelector(".lang-label");
    if (label) label.textContent = current.toUpperCase();
}


document.addEventListener("DOMContentLoaded", () => {
    const lang = localStorage.getItem("lang") || "pt";
    const label = document.querySelector(".lang-label");

    if (!label) return;

    label.textContent = lang === "pt" ? "EN" : "PT";
});


