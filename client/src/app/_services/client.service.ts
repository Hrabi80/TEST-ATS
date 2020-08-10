import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private _url = environment.api_url ;
  constructor(
      private _http: HttpClient,) { }
  addContact(data){
    const headers = new HttpHeaders()
    .set('Authorization', 'my-auth-token')
    .set('Content-Type', 'application/json');
    return this._http.post(this._url + '/contact',data , {
      headers: headers
    });
  }
  getAllContact(){
    return this._http.get(this._url+ '/api/contact');
  }
}
