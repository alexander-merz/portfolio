const preferredLanguage = getPreferredLanguage()
const initialTranslations = await import(`./i18n.${preferredLanguage}.json`).then((m) => m.default)
const localizationTargets = document.querySelectorAll("[data-translate]")
const translationMap = { [preferredLanguage]: initialTranslations }
const toggle = document.querySelector("#language-toggle")

function getPreferredLanguage() {
  return localStorage.getItem("language-preference") ?? navigator.language.slice(0, 2)
}

function toggleLanguage(language) {
  return language.slice(0, 2).toLowerCase() === "en" ? "de" : "en"
}

function translate(language) {
  toggle.textContent = toggleLanguage(getPreferredLanguage()).toUpperCase()

  for (const target of localizationTargets) {
    let key

    if (target.getAttribute("data-translate")) {
      key = target.getAttribute("data-translate")
      target.textContent = translationMap[language][key.toUpperCase()]
    } else if (target.getAttribute("data-translate-tooltip") && target.getAttribute("data-tooltip")) {
      key = target.getAttribute("data-translate-tooltip")
      target.setAttribute("data-tooltip", translationMap[language][key.toUpperCase()])
    }
  }
}

async function switchLanguage(language) {
  if (!Object.keys(translationMap).includes(language)) {
    const translations = await import(`./i18n.${language}.json`).then((m) => m.default)
    translationMap[language] = translations
  }

  translate(language)
}

toggle.addEventListener("click", () => {
  localStorage.setItem("language-preference", toggleLanguage(getPreferredLanguage()))
  switchLanguage(getPreferredLanguage())
})

window.addEventListener("languagechange", () => switchLanguage(getPreferredLanguage()))

translate(getPreferredLanguage())
