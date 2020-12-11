import { Injectable } from '@angular/core';
import{ Iproduct } from '../models/product.interface';
import { HttpClient,HttpErrorResponse } from "@angular/common/http";
import { Observable ,throwError} from 'rxjs';
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HttprequestService {
private readonly _baseUrl:string = "http://testapi.techriff.in/api";
constructor( private  http : HttpClient) {
 
 }

getResponse():Observable<Iproduct[]>{
  return this.http.get<Iproduct[]>(`${this._baseUrl}/open/products`).pipe(catchError(this.handleError));
}
deleteProduct(id:number): Observable<Iproduct>{
  return this.http.delete<Iproduct>(
    `${this._baseUrl}/open/products/${id}`,
    
  );
}
getProductDtl(id:number) : Observable<Iproduct>{
  return this.http.get<Iproduct>(`${this._baseUrl}/open/products/${id}`)
}
changeStatus(id: number, status: string): Observable<Iproduct> {
  if (status === "activate") {
    console.log('resolve error',status);
    return this.http
      .post<Iproduct>(`${this._baseUrl}/open/products/${id}/reactivate`, null)
      .pipe(catchError(this.handleError));
  } else {
    return this.http
      .post<Iproduct>(`${this._baseUrl}/open/products/${id}/deactivate`, null)
      .pipe(catchError(this.handleError));
  }
}

  private handleError(errorResponse: HttpErrorResponse) {
    //This can be a client side error.

    if (errorResponse.error instanceof ErrorEvent) {
      console.error("Client Side error !", errorResponse.error);
    } else {
      console.error("Server Side error !", errorResponse.error);
    }

    //Server side error.
    //400
    //500

    return throwError("Sorry An error occured!");
  }
}
 