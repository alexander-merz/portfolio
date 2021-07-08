import { Injectable, OnDestroy } from '@angular/core'
import { BehaviorSubject, Subscription } from 'rxjs'

export enum Theme {
  light = 'light',
  dark = 'dark'
}

@Injectable({ providedIn: 'root' })
export class ThemeService implements OnDestroy {
  public readonly theme: BehaviorSubject<Theme>
  private subscriptions = new Subscription()

  public constructor() {
    this.theme = new BehaviorSubject<Theme>(this.getDefaultTheme())
    this.subscriptions.add(this.theme.subscribe(this.setBodyClass))
    this.subscriptions.add(this.theme.subscribe(this.saveTheme))
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }

  public getCurrentTheme(): Theme {
    return this.theme.value
  }

  public toggleTheme(): void {
    this.theme.next(this.switchTheme())
  }

  public isLight(): boolean {
    return this.theme.value === Theme.light
  }

  public isDark(): boolean {
    return this.theme.value === Theme.dark
  }

  private setBodyClass(theme: Theme): void {
    switch (theme) {
      case Theme.light: {
        document.body.classList.remove(Theme.dark)
        document.body.classList.add(Theme.light)
        break
      }
      case Theme.dark: {
        document.body.classList.remove(Theme.light)
        document.body.classList.add(Theme.dark)
      }
    }
  }

  private switchTheme(): Theme {
    switch (this.theme.value) {
      case Theme.light:
        return Theme.dark
      case Theme.dark:
        return Theme.light
    }
  }

  private getDefaultTheme(): Theme {
    return this.hasSavedTheme() ? this.getSavedTheme() : Theme.light
  }

  private hasSavedTheme(): boolean {
    return Boolean(localStorage.getItem('theme'))
  }

  private getSavedTheme(): Theme {
    return localStorage.getItem('theme') as Theme
  }

  private saveTheme(theme: Theme): void {
    localStorage.setItem('theme', theme)
  }
}
