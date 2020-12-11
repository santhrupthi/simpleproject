import { Component, Input, OnInit ,Output,EventEmitter ,DoCheck} from '@angular/core';
import { from } from 'rxjs';
import{ Iproduct } from '../../models/product.interface';
import { CommomnService} from '../../servieses/commomn.service';
import{ HttprequestService } from '../../servieses/httprequest.service';
import {NotifyService} from '../../servieses/notify.service';
import {Router, Routes ,ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
 
  constructor(private HttprequestService :HttprequestService ,private NotifyService:NotifyService ,private router :Router) { }
 
  count :number = 0;
 
  ngOnInit() {
  }   
  ngDoCheck(){
    this.count ++;
    console.log('ngdocheck comming' ,this.count);
  }
  @Input() parentProduct:Iproduct;
  @Input() canshow:boolean;
  @Output() DelectItems = new EventEmitter<string>();
  @Output() deletProduct = new EventEmitter<any>();
  @Output() changeStatussnd = new EventEmitter<any>();

  deleteProduct(id:number){
    this.HttprequestService.deleteProduct(id).subscribe(
      (data: Iproduct)=>{
        console.log('status changing',data);
        this.NotifyService.showSuccess('Succesfully Deleted');
        this.deletProduct.emit(data);
      },(error:any)=>{
        console.error('errpr throuing');        
      }
    )
  }
  changeStatus(id: number, status: string) {
    this.HttprequestService.changeStatus(id, status).subscribe(
      (data: Iproduct) => {
        console.log("Status Changed ", data);
        this.changeStatussnd.emit(data);
        
      },
      (error) => {}
    );
  }
  detailsProduct(id:number){
  this.router.navigate(['/product',id])
  }

}
