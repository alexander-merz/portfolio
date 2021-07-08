import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core'
import { Subscription } from 'rxjs'
import {
  Language,
  LanguageService
} from 'src/app/core/services/language.service'
import { Theme, ThemeService } from 'src/app/core/services/theme.service'

@Component({
  selector: 'cv-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements AfterViewInit {
  @Input() public set name(name: string) {
    this.path = `projects/${name}`
  }

  @Input() public title: string
  @Input() public img: string

  @ViewChild('preview') public preview: ElementRef<HTMLImageElement>

  public path: string

  private readonly subscriptions = new Subscription()

  public constructor(
    private themeService: ThemeService,
    private elementRef: ElementRef
  ) {}

  public ngAfterViewInit(): void {
    this.subscriptions.add(
      this.themeService.theme.subscribe(this.adjustProjectPreview.bind(this))
    )
  }

  public isOdd(): boolean {
    return this.elementRef.nativeElement.classList.contains('odd')
  }

  public isEven(): boolean {
    return this.elementRef.nativeElement.classList.contains('even')
  }

  public getProjectDescriptionAnimationString(): string {
    const animationName = this.isEven() ? 'fadeInRight' : 'fadeInLeft'
    return animationName + ' 1s forwards ease-out'
  }

  public getProjectImageAnimationString(): string {
    const animationName = this.isEven() ? 'fadeInLeft' : 'fadeInRight'
    return animationName + ' 1s forwards ease-out'
  }

  private adjustProjectPreview(theme: Theme) {
    if (theme === Theme.light) {
      this.preview.nativeElement.classList.add('light-themed')
      this.preview.nativeElement.classList.remove('dark-themed')
    } else {
      this.preview.nativeElement.classList.add('dark-themed')
      this.preview.nativeElement.classList.remove('light-themed')
    }
  }
}
