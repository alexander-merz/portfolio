import { Component, Input } from '@angular/core'

@Component({
  selector: 'cv-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent {
  @Input() public fullName: string
  @Input() public position: string
  @Input() public employer: string
  @Input() public imageSrc: string

  public getMarkdownSrcPath(): string {
    return `quotes/${this.getFormattedFullName()}`
  }

  private getFormattedFullName(): string {
    return this.fullName?.toLowerCase().replace(' ', '-')
  }
}
