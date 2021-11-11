import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _url = environment.api_url ;
  constructor(private _http: HttpClient) { }

  getAllProductPagination(page:number, limit:number) {
    return new Promise(resolve => {
      this._http.get(this._url + '/product/' + page + '/' + limit).subscribe((res: any) => {
        resolve({ status: true, data: res });
      }, (err) => {
        resolve({ status: false, error: err });
      });
    });
  }

  getProductById(id:any){
    return this._http.get(this._url+'/product'+id);
  }
  

  

}

 
