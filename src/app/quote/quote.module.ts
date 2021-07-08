import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { QuoteComponent } from './components/quote/quote.component'
import { QuoteListComponent } from './components/quote-list/quote-list.component'
import { SharedModule } from '../shared/shared.module'
import { MarkdownModule } from 'ngx-markdown'

@NgModule({
  declarations: [QuoteComponent, QuoteListComponent],
  imports: [CommonModule, SharedModule, MarkdownModule],
  exports: [QuoteListComponent]
})
export class QuoteModule {}
