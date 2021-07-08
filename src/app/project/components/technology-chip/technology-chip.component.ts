import { Component, Input, OnInit } from '@angular/core'
import { ColorService } from 'src/app/shared/services/color.service'
import { TechnologyColorService } from '../../services/technology-color.service'

@Component({
  selector: 'cv-technology-chip',
  templateUrl: './technology-chip.component.html',
  styleUrls: ['./technology-chip.component.scss'],
  providers: [TechnologyColorService, ColorService]
})
export class TechnologyChipComponent implements OnInit {
  @Input() public name!: string

  public style: any = {
    opacity: 0.9
  }

  public constructor(
    private technologyColorService: TechnologyColorService,
    private colorService: ColorService
  ) {}

  public async ngOnInit(): Promise<void> {
    const bgColor = await this.technologyColorService.getBgColorByName(
      this.name.toLowerCase()
    )
    const color = this.colorService.getColorByBgColor(bgColor)
    this.setStyle({ 'background-color': bgColor, color })
  }

  private setStyle(newStyle: any): void {
    this.style = {
      ...this.style,
      ...newStyle
    }
  }
}
