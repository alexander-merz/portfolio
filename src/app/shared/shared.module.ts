import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TranslateModule } from '@ngx-translate/core'
import { MaterialModule } from '../material/material.module'
import { MarkdownModule } from 'ngx-markdown'
import { DividerComponent } from './components/divider/divider.component'
import { SmoothLinkDirective } from './directives/smooth-link.directive'
import { DropInDirective } from './directives/drop-in.directive'
import { LocaleMarkdownComponent } from './components/locale-markdown/locale-markdown.component'

@NgModule({
  declarations: [
    DividerComponent,
    SmoothLinkDirective,
    DropInDirective,
    LocaleMarkdownComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MarkdownModule.forChild(),
    TranslateModule.forChild()
  ],
  exports: [
    MaterialModule,
    TranslateModule,
    DividerComponent,
    SmoothLinkDirective,
    DropInDirective,
    LocaleMarkdownComponent
  ]
})
export class SharedModule {}
