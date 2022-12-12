const markdowns = document.querySelectorAll("wc-markdown")

if (navigator.language.includes("de")) {
  for (const markdown of Array.from(markdowns)) {
    const [name] = markdown.src.split(".")
    markdown.src = `${name}.de.md`
  }
}
