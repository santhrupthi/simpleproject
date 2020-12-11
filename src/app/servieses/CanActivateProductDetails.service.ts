import { Injectable } from '@angular/core';
import { CanActivate,UrlTree,Router,ActivatedRouteSnapshot ,RouterStateSnapshot} from '@angular/router';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CanActivateProductDetailsService implements CanActivate{

constructor(private router : Router) { }
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  console.log("Inside Guard!"); 
  //its in ID string to convert into number  we wring + 
  let id = +route.params["id"];


  if (!isNaN(id) && id > 0) {
    return false;
  }
  this.router.navigate(["/notfound"]);
}

}
