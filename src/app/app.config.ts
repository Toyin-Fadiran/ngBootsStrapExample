import { ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration() // Keep client hydration here
  ]
//  apiUrl: 'http://localhost:8080/api', // Add your API URL
 // production: false, // Example production flag
  // Add more config properties as needed
};
