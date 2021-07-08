import { Injectable } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { BehaviorSubject, Subscription } from 'rxjs'

export enum Language {
  de = 'de',
  en = 'en'
}

@Injectable({ providedIn: 'root' })
export class LanguageService {
  public readonly language: BehaviorSubject<Language>
  private subscriptions = new Subscription()

  public constructor(private translateService: TranslateService) {
    this.language = new BehaviorSubject<Language>(this.getDefaultLanguage())
    this.subscriptions.add(this.language.subscribe(this.useLanguage.bind(this)))
    this.subscriptions.add(this.language.subscribe(this.saveLanguage))
  }

  public getCurrentLanguage(): Language {
    return this.language.value
  }

  public toggleLanguage(): void {
    this.language.next(this.switchLanguage())
  }

  public async useLanguage(language: Language): Promise<boolean> {
    try {
      await this.translateService.use(language.toLowerCase()).toPromise()
      return true
    } catch (error) {
      return false
    }
  }

  private switchLanguage(): Language {
    switch (this.language.value) {
      case Language.de:
        return Language.en
      case Language.en:
        return Language.de
    }
  }

  private getDefaultLanguage(): Language {
    return this.hasSavedLanguage() ? this.getSavedLanguage() : Language.de
  }

  private hasSavedLanguage(): boolean {
    return Boolean(localStorage.getItem('language'))
  }

  private getSavedLanguage(): Language {
    return localStorage.getItem('language') as Language
  }

  private saveLanguage(language: Language): void {
    localStorage.setItem('language', language)
  }
}
