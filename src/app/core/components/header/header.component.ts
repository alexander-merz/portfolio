import { Component } from '@angular/core'
import { LanguageService } from '../../services/language.service'
import { ThemeService } from '../../services/theme.service'

@Component({
  selector: 'cv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public constructor(public readonly themeService: ThemeService) {}
}
