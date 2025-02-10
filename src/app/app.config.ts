import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter, RouterOutlet } from '@angular/router';
import routeConfig from './routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(), // Keep client hydration here,
    provideHttpClient(),// here,
    provideRouter(routeConfig), // Add routing configuration
  ]
//  apiUrl: 'http://localhost:8080/api', // Add your API URL
 // production: false, // Example production flag
  // Add more config properties as needed
};




