import { Injectable } from '@angular/core';
import { Planet } from '../model/Planet';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  
  favouritePlanetsList: Planet[];
}
