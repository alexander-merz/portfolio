import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SharedModule } from '../shared/shared.module'
import { ProjectComponent } from './components/project/project.component'
import { MarkdownModule } from 'ngx-markdown'
import { ProjectListComponent } from './components/project-list/project-list.component'
import { TechnologyChipComponent } from './components/technology-chip/technology-chip.component'

@NgModule({
  imports: [CommonModule, SharedModule, MarkdownModule],
  declarations: [
    ProjectComponent,
    ProjectListComponent,
    TechnologyChipComponent
  ],
  exports: [ProjectComponent, ProjectListComponent]
})
export class ProjectModule {}
