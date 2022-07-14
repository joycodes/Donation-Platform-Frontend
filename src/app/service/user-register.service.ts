import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {

  constructor(private _http:HttpClient) { }



  registeredProps(userData:any):Observable<any> {
    return this._http.post("https://donationappke.herokuapp.com/api/register", userData);
  }

}