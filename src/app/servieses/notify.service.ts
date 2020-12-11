import { Injectable } from '@angular/core';
import { Notyf } from "notyf";
@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  notyf = new Notyf();
constructor() { }
showSuccess(message:string){
  this.notyf.success(message);
}

}
