import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { MissingTranslationHandler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MissingTranslationService } from './shared/services/missing-translation.service';
import { provideToastr } from 'ngx-toastr';

export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
  return new TranslateHttpLoader(http, './assets/locale/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideAnimations(), 
    provideToastr(),
    provideHttpClient(), 
    importProvidersFrom(TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient],
        },
        missingTranslationHandler: { provide: MissingTranslationHandler, useClass: MissingTranslationService },
    })), 
    provideAnimationsAsync()
  ]
};