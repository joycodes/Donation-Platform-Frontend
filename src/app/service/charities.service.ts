import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharitiesService {

  constructor(private _http:HttpClient) { }

  getCharities() :Observable<any> {
    return this._http.get<any>("https://donationappke.herokuapp.com/api/charities")

  }
}

