import { APP_INITIALIZER, Injector, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MarkdownModule } from 'ngx-markdown'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CoreModule } from './core/core.module'
import { SharedModule } from './shared/shared.module'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import {
  TranslateLoader,
  TranslateModule,
  TranslateService
} from '@ngx-translate/core'
import { LOCATION_INITIALIZED } from '@angular/common'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { ProjectModule } from './project/project.module'
import { QuoteModule } from './quote/quote.module'
import { TimelineModule } from './timeline/timeline.module'

export const createTranslateLoader = (http: HttpClient) =>
  new TranslateHttpLoader(http, './assets/i18n/', '.json')

export const appInitializerFactory =
  (translate: TranslateService, injector: Injector) => () =>
    new Promise<any>((resolve: any) => {
      const locationInitialized = injector.get(
        LOCATION_INITIALIZED,
        Promise.resolve(null)
      )
      locationInitialized.then(() => {
        const langToSet = 'en'
        translate.setDefaultLang('en')
        translate.use('en').subscribe(
          () => {
            console.log(`Successfully initialized '${langToSet}' language.'`)
          },
          (err) => {
            console.error(
              `Problem with '${langToSet}' language initialization.'`
            )
          },
          () => {
            resolve(null)
          }
        )
      })
    })

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    ProjectModule,
    TimelineModule,
    QuoteModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [TranslateService, Injector],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
