import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Planet } from '../model/Planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  apiUrl = `https://assignment-machstatz.herokuapp.com/planet`;
 
  
  constructor(private _http: HttpClient) { }

  getAllPlanets(): Observable<any>{
    return this._http.get(this.apiUrl);
  }

  

}
