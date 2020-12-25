import { Component, OnInit } from '@angular/core';
import { PlanetsService } from 'src/app/services/planets.service';
import { Planet } from '../../model/Planet';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.css']
})
export class PlanetsListComponent implements OnInit {

  constructor(private planetService: PlanetsService, private shared: SharedService) { }

  planetsLists : Planet[];
  showHideModal = false;
  planetName: string;
 

  ngOnInit(): void {
    this.getAllPlanetsList();
  }

  getAllPlanetsList(){
    this.planetService.getAllPlanets().subscribe((res: any) => {
      if(res){
        this.planetsLists = res;
      }
    }, (err) => {
       console.error(err)
    })
  }

  addToFavourites(item: Planet){
     this.planetsLists.map((planet) => {
       if(planet.id === item.id){
         planet.isFavourite = !planet.isFavourite;
       }
     })
     this.shared.favouritePlanetsList = this.planetsLists.filter((item) => item.isFavourite); 
  }
  
  openPopUp(){
    this.showHideModal = !this.showHideModal;
  }

  closeModal(){
    this.planetName = ''
    this.showHideModal = !this.showHideModal;
  }

  addNewPlanet(){
    const planetObj = {
      id: this.planetName.toLowerCase(),
      isFavourite: false,
      name: this.planetName
    }
    let temp = this.planetsLists
    temp.push(planetObj)
    this.showHideModal = !this.showHideModal;
    this.planetsLists = temp
  }
  
}
