import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASEURL } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharitiesService {

  constructor(private _http:HttpClient) { }

  getCharities() :Observable<any> {
    return this._http.get<any>(`${BASEURL}/charities`)

  }
}

