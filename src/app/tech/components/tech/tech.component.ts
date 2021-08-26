import { Component, Input } from '@angular/core'

@Component({
  selector: 'cv-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss']
})
export class TechComponent {
  @Input() public name: string
  @Input() public img: string
  @Input() public height: number
  @Input() public order: number

  public getOrder(): string {
    return `--order: ${this.order}`
  }
}
