import { Routes } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { ModifyListItemComponent } from './modify-list-item/modify-list-item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const appRoutes: Routes = [
  { path: '', component: CarListComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'modify', component: ModifyListItemComponent },
  { path: 'modify/:id', component: ModifyListItemComponent },
  { path: '**', component: PageNotFoundComponent }
];
