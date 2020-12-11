import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import {IUserToken} from '../models/user_token.interface'
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly _token: string = "userData";
  private readonly _baseUrl:string = "http://testapi.techriff.in/api";
constructor( private http : HttpClient ,private IUserToken :IUserToken) { }
isUserLogin():boolean{
  return false;
}


getLoggedInUserData(): IUserToken {
  //Get it from the local storage.
  if (window.localStorage.getItem(this._token)) {
    return JSON.parse(window.localStorage.getItem(this._token)) as IUserToken;
  }
  return null;
}

UserLogin(data):Observable<any>{
  return this.http.post<any>(`${this._baseUrl}/Token`,data)
}
getUserToken(email: string, password: string): Observable<IUserToken> {
  let body = `userName=${email}&password=${password}&grant_type=password`;
  return this.http
    .post<IUserToken>(`http://testapi.techriff.in/Token`, body)
    .pipe(
    map((data:any)=>({
      userName:data.userName,
      access_token:data.access_token
    } as IUserToken))
      
    );
}
doLogin(userData: IUserToken) {
  window.localStorage.setItem(this._token, JSON.stringify(userData));
}
doLogout() {
  window.localStorage.clear();
}


}
