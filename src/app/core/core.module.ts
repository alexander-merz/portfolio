import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ProjectModule } from '../project/project.module'
import { SharedModule } from '../shared/shared.module'
import { HeaderComponent } from './components/header/header.component'
import { ThemeService } from './services/theme.service'
import { LayoutModule } from '@angular/cdk/layout'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { HeroComponent } from './components/hero/hero.component'

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProjectModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [HeaderComponent, HeroComponent],
  providers: [ThemeService],
  exports: [HeaderComponent, HeroComponent]
})
export class CoreModule {}
