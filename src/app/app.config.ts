import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http'; // IMPORTANTE
import { authInterceptor } from './interceptors/auth.interceptor'; // IMPORTANTE

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    // Qui abilitiamo le chiamate HTTP e colleghiamo il nostro interceptor
    provideHttpClient(
      withInterceptors([authInterceptor])
    )
  ]
};
