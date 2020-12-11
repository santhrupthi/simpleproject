import { Injectable } from '@angular/core';
import { Resolve,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { Iproduct } from '../models/product.interface';
import { from, Observable } from "rxjs";
import {HttprequestService} from './httprequest.service'
@Injectable({
  providedIn: 'root'
})
export class ResolveService implements Resolve<Iproduct> {

constructor(private HttprequestService:HttprequestService) { }
resolve(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
  ):Iproduct | Observable<Iproduct>|Promise<Iproduct>{
let id = +route.paramMap.get('id');
  return this.HttprequestService.getProductDtl(id);
  }
  }

