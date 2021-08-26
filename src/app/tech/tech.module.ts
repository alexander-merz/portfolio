import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TechStackComponent } from './components/tech-stack/tech-stack.component'
import { SharedModule } from '../shared/shared.module'
import { MaterialModule } from '../material/material.module'
import { TechComponent } from './components/tech/tech.component'
import { ToolBoardComponent } from './components/tool-board/tool-board.component'

@NgModule({
  declarations: [TechStackComponent, TechComponent, ToolBoardComponent],
  imports: [CommonModule, SharedModule, MaterialModule],
  exports: [TechStackComponent, ToolBoardComponent]
})
export class TechModule {}
