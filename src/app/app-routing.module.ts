import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetsFavouritesListComponent } from './components/planets-favourites-list/planets-favourites-list.component';
import { PlanetsListComponent } from './components/planets-list/planets-list.component';

const routes: Routes = [
  {
    path: '', component: PlanetsListComponent,
  },
  {
    path: 'favourites',  component: PlanetsFavouritesListComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
