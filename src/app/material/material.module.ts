import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatChipsModule } from '@angular/material/chips'
import { MatDividerModule } from '@angular/material/divider'
import { MatTooltipModule } from '@angular/material/tooltip'

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatChipsModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatTooltipModule
  ],
  exports: [
    MatButtonModule,
    MatChipsModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatTooltipModule
  ]
})
export class MaterialModule {}
