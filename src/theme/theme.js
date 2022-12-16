const meta = document.querySelector("meta[name='theme-color']")
const toggle = document.querySelector('#theme-toggle')

function getColorPreference() {
  if (localStorage.getItem('theme-preference')) {
    return localStorage.getItem('theme-preference')
  } else {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
}

function setPreference() {
  localStorage.setItem('theme-preference', theme)
  reflectPreference()
}

function reflectPreference() {
  meta.content = theme === 'light' ? '#f1f3f5' : '#212529'
  document.firstElementChild.setAttribute('data-theme', theme)
  toggle.setAttribute('aria-live', theme)
  toggle.textContent = theme === 'light' ? '🌕' : '☀️'
}

let theme = getColorPreference()

reflectPreference()

window.addEventListener('load', () => {
  reflectPreference()

  document.querySelector('#theme-toggle').addEventListener('click', (e) => {
    theme = theme === 'light' ? 'dark' : 'light'
    setPreference()
  })
})

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({ matches: isDark }) => {
  theme = isDark ? 'dark' : 'light'
  setPreference()
})
