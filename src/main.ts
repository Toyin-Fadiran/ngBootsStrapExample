/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http'; // Import provideHttpClient
import routeConfig from './app/routes'; // Adjust path as necessary
import { appConfig } from './app/app.config';
import { AllcabsComponent } from './app/allcabs/allcabs.component';

bootstrapApplication(AllcabsComponent, {
  providers: [
    //provideHttpClient(),
    //provideRouter(routeConfig), // Add routing configuration
    ...appConfig.providers,     // Use existing providers from appConfig
         // Provide HttpClient here
  ]
}).catch(err => console.error(err));
