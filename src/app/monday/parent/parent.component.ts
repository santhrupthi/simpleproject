import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {Iproduct} from '../../models/product.interface';
import { CommomnService } from '../../servieses/commomn.service';
import { HttprequestService } from '../../servieses/httprequest.service';
import {NotifyService} from '../../servieses/notify.service'

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
 
})
export class ParentComponent implements OnInit {
  private CommomnService: CommomnService;
  
  constructor(private HttprequestService :HttprequestService,private NotifyService :NotifyService) { this.CommomnService = new CommomnService() }

  products =[];
  ngOnInit() {
    //this.products = this.CommomnService.getProduct();
   // console.log( 'product comming',this.products);
    this.load();
  }
  successfullDlt(productName:string){
    this.load();
    
  }
  load(){    
    this.HttprequestService.getResponse()
    .subscribe((data:Iproduct[])=>{
      this.products = data;
      
      console.log('http call',data);
    },(error :any)=>{
      console.error("An error occured", error);
    }
    )
  }
  showimg :boolean = true;
  changedStatus(){
    this.load();
  }
  showhideImg(){
    
    this.showimg = !this.showimg; 
  }
  deleting(val){
    console.log('from child', val);
  }
}
