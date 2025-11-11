import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

import { App } from './app/app';
import { CarListComponent } from './app/car-list/car-list.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './app/services/in-memory-data.service';

const routes: Routes = [
  { path: '', redirectTo: '/cars', pathMatch: 'full' },

  { path: 'cars', component: CarListComponent },

  {
    path: 'cars/:id',
    loadComponent: () =>
      import('./app/car-list-item/car-list-item.component')
        .then(m => m.CarListItemComponent)
  },

  {
    path: 'modify',
    loadComponent: () =>
      import('./app/modify-list-item/modify-list-item.component')
        .then(m => m.ModifyListItemComponent)
  },
  {
    path: 'modify/:id',
    loadComponent: () =>
      import('./app/modify-list-item/modify-list-item.component')
        .then(m => m.ModifyListItemComponent)
  },

  {
    path: '**',
    loadComponent: () =>
      import('./app/page-not-found/page-not-found.component')
        .then(m => m.PageNotFoundComponent)
  }
];

bootstrapApplication(App, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    importProvidersFrom(
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1000 })
    )
  ]
}).catch(err => console.error(err));
