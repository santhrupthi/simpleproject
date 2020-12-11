import { Injectable } from '@angular/core';
import { CanActivate ,Route,ActivatedRouteSnapshot,RouterStateSnapshot,UrlTree, Routes } from '@angular/router'; 
import { from } from 'rxjs';
import {Observable} from 'rxjs';
import { AuthService  } from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class IsUserLoginService  implements CanActivate{

constructor(private AuthService :AuthService ) { }
canActivate(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    console.log("this from auth",this.AuthService.isUserLogin());
  let check = this.AuthService.isUserLogin();
  if(check  === true){
    return  this.AuthService.isUserLogin();
  }else{
    // this.router.navigate("'[/relogin]'")

  }
  }
}
