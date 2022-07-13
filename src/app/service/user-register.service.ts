import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASEURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {

  constructor(private _http:HttpClient) { }



  registeredProps(userData:any):Observable<any> {
    return this._http.post(`${BASEURL}/register`, userData);
  }

}