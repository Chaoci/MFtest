import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App2Component } from './app/app2.component';

bootstrapApplication(App2Component, appConfig)
  .catch((err) => console.error(err));
