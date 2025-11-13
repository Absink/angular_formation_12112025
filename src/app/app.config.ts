import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';
import localeFr from '@angular/common/locales/fr'
import { registerLocaleData } from '@angular/common'

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

registerLocaleData(localeFr, 'fr-FR')

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    {provide: LOCALE_ID, useValue: 'fr-FR' }
  ]
};
