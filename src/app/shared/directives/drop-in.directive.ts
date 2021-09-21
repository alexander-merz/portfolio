import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core'

@Directive({ selector: '[cvDropIn]' })
export class DropInDirective implements OnInit, OnDestroy {
  @Input() public set cvDropIn(animationString: string) {
    this.animationString = animationString
  }

  private element: HTMLElement
  private intersectionObserver: IntersectionObserver
  private animationString: string

  public constructor(el: ElementRef<any>) {
    this.element = el.nativeElement
  }

  public ngOnInit() {
    if (window.innerWidth > 768) {
      this.element.style.opacity = '0'

      this.intersectionObserver = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          this.applyAnimation()
          this.intersectionObserver.unobserve(this.element)
        }
      })

      this.intersectionObserver.observe(this.element)
    }
  }

  public ngOnDestroy(): void {
    this.intersectionObserver.unobserve(this.element)
  }

  private applyAnimation() {
    const order = this.element.style.getPropertyValue('--order')
    this.element.style.animation = this.animationString
    this.element.style.animationDelay = `calc(${order} * 200ms)`
  }
}
