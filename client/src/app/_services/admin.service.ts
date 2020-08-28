import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private _url = environment.api_url;
  constructor(private _http: HttpClient) { }


  getAllService(){
    return this._http.get(this._url+'/service');
  }

  getService(id){
    return this._http.get(this._url+'/api/service/'+id);
  }

  addService(data){
    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');
      return this._http.post(this._url+'/api/service',data, {headers: headers})
  }

  deleteService(id){
    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');
    return this._http.delete(this._url+'/api/service/'+id,{headers: headers});
  }
  updateService(id,data){
    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');
    return this._http.put(this._url+'/api/service/'+id,data,{headers:headers})
  }

   // UPLOAD  PRODUCT 

   addProduct(data): Observable<any> {
    return this._http.post(this._url+'/Product', data, {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      catchError(this.errorMgmt)
    )
  }

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}

