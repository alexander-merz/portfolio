enableInternationalization()

async function enableInternationalization() {
  const preferredLanguage = getPreferredLanguage()
  const initialTranslations = await import(`./i18n.${preferredLanguage}.json`).then((m) => m.default)
  const translationMap = { [preferredLanguage]: initialTranslations }

  const localizationTargets = document.querySelectorAll('[data-translate]')
  const languageToggle = document.querySelector('#language-toggle')
  const markdowns = document.querySelectorAll('wc-markdown')

  function getPreferredLanguage() {
    return localStorage.getItem('language-preference') ?? navigator.language.slice(0, 2)
  }

  function toggleLanguage(language) {
    return language.slice(0, 2).toLowerCase() === 'en' ? 'de' : 'en'
  }

  function translate(language) {
    languageToggle.textContent = toggleLanguage(getPreferredLanguage()).toUpperCase()

    for (const target of localizationTargets) {
      let key

      if (target.getAttribute('data-translate')) {
        key = target.getAttribute('data-translate')
        target.textContent = translationMap[language][key.toUpperCase()]
      } else if (target.getAttribute('data-translate-tooltip') && target.getAttribute('data-tooltip')) {
        key = target.getAttribute('data-translate-tooltip')
        target.setAttribute('data-tooltip', translationMap[language][key.toUpperCase()])
      }
    }

    for (const markdown of markdowns) {
      const [name] = markdown.src.split('.')
      markdown.src = `${name}.${language}.md`
    }
  }

  async function switchLanguage(language) {
    if (!Object.keys(translationMap).includes(language)) {
      const translations = await import(`./i18n.${language}.json`).then((m) => m.default)
      translationMap[language] = translations
    }

    translate(language)
  }

  languageToggle.addEventListener('click', () => {
    localStorage.setItem('language-preference', toggleLanguage(getPreferredLanguage()))
    switchLanguage(getPreferredLanguage())
  })

  window.addEventListener('languagechange', () => switchLanguage(getPreferredLanguage()))

  translate(getPreferredLanguage())
}
