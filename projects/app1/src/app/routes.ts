// projects/shell/src/app/app.routes.ts

import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { AppComponent } from './app.component';
import { App2Component } from 'projects/app2/src/app/app2.component';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
    {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
    },
    {
      path: 'app2',
      loadComponent: () => 
        loadRemoteModule({
          type: 'module',
          remoteEntry: 'http://localhost:4201/remoteEntry.js',
          exposedModule: './Component'
        })
        .then(m => m.App2Component)
    },
    
    
];

