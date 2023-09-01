import { importProvidersFrom } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, withRouterConfig } from '@angular/router';
import { APP_ROUTES } from './app/app.routing';


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(APP_ROUTES, withRouterConfig({ onSameUrlNavigation: 'reload' })),
    importProvidersFrom(BrowserModule),
  ]
}).catch(err => console.error(err));
