/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http'; // Import provideHttpClient
import routeConfig from './app/routes'; // Adjust path as necessary
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routeConfig), // Add routing configuration
    ...appConfig.providers,     // Use existing providers from appConfig
    provideHttpClient(withFetch())         // Provide HttpClient here
  ]
}).catch(err => console.error(err));
