import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/model/Planet';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-planets-favourites-list',
  templateUrl: './planets-favourites-list.component.html',
  styleUrls: ['./planets-favourites-list.component.css']
})
export class PlanetsFavouritesListComponent implements OnInit {
  favouritesList: Planet[]

  constructor(private shared: SharedService) { }

  ngOnInit(): void {
    this.favouritesList = this.shared.favouritePlanetsList;
  }

}
