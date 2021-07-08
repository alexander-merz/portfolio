import { Injectable } from '@angular/core'

import colors from 'src/assets/json/technology-colors.json'

@Injectable()
export class TechnologyColorService {
  public async getBgColorByName(name: string): Promise<string> {
    return (colors as any)[name]
  }
}
