import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { CarListComponent } from './app/car-list/car-list.component';
import { CarListItemComponent } from './app/car-list-item/car-list-item.component';
import { ModifyListItemComponent } from './app/modify-list-item/modify-list-item.component';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './app/services/in-memory-data.service';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: '/cars', pathMatch: 'full' },
  { path: 'cars', component: CarListComponent },
  { path: 'cars/:id', component: CarListItemComponent },
  { path: 'modify', component: ModifyListItemComponent },
  { path: 'modify/:id', component: ModifyListItemComponent},
  { path: '**', component: PageNotFoundComponent }
];

bootstrapApplication(App, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    importProvidersFrom(
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1000 })
    )
  ],
}).catch((err) => console.error(err));
