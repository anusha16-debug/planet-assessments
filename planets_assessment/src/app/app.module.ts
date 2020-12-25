import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { PlanetsListComponent } from './components/planets-list/planets-list.component';
import { PlanetsFavouritesListComponent } from './components/planets-favourites-list/planets-favourites-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlanetsListComponent,
    PlanetsFavouritesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
