const initialTranslations = await import(`./i18n.${navigator.language}.json`).then((m) => m.default)
const localizationTargets = document.querySelectorAll("[data-translate]")

const translationMap = { [navigator.language]: initialTranslations }

function translate() {
  for (const target of localizationTargets) {
    const key = target.getAttribute("data-translate") || target.textContent
    target.textContent = translationMap[navigator.language][key.toUpperCase()]
  }
}

window.addEventListener("languagechange", async () => {
  if (!Object.keys(translationMap).includes(navigator.language)) {
    const translations = await import(`./i18n.${navigator.language}.json`).then((m) => m.default)
    translationMap[navigator.language] = translations
  }

  translate()
})

translate()
