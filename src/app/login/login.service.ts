import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse,HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  endpoint: string = "https://thoughtnet1.pupilpod.in/mobile/app/AnonymousCalls/";
  constructor(private http: HttpClient) { }
  userLogin(): Observable<any> {
    return this.http.get(this.endpoint);
  }
}
