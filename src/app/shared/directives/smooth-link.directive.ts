import { Directive, HostListener } from '@angular/core'

@Directive({ selector: '[cvSmoothLink]' })
export class SmoothLinkDirective {
  @HostListener('click', ['$event'])
  public onClick(event: KeyboardEvent): void {
    event.stopPropagation()
    const target = event.target as HTMLElement

    if (target.hasAttribute('href')) {
      return this.scrollToSection(target.getAttribute('href') as string)
    }

    if (target.parentElement?.hasAttribute('href')) {
      this.scrollToSection(target.parentElement?.getAttribute('href') as string)
    }
  }

  public scrollToSection(href: string): void {
    const element = document.querySelector(href)
    if (element) {
      const top = element.getBoundingClientRect().top - 60
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }
}
