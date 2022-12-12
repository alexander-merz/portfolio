const language = navigator.language.includes("de") ? "de" : "en"
const translations = await import(`./i18n.${language}.json`).then((m) => m.default)
const localizationTargets = document.querySelectorAll("[data-translate]")

for (const target of localizationTargets) {
  const key = target.getAttribute("data-translate") || target.textContent
  target.textContent = translations[key.toUpperCase()]
}
