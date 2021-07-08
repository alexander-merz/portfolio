import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import {
  Language,
  LanguageService
} from 'src/app/core/services/language.service'

@Component({
  selector: 'cv-locale-markdown',
  templateUrl: './locale-markdown.component.html',
  styleUrls: ['./locale-markdown.component.scss']
})
export class LocaleMarkdownComponent implements OnInit, OnDestroy {
  @Input() public path: string
  public src: string

  private readonly basePath = 'assets/markdown'
  private readonly subscriptions = new Subscription()

  public constructor(private languageService: LanguageService) {}

  public ngOnInit(): void {
    this.subscriptions.add(
      this.languageService.language.subscribe(this.buildSrc.bind(this))
    )
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }

  private buildSrc(language: Language) {
    this.src = `${this.basePath}/${this.path}.${language}.md`
  }
}
