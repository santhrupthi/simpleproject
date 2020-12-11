import { Component, Input, OnInit,Output,EventEmitter,OnChanges } from '@angular/core';
import { from } from 'rxjs';
import { Iproduct } from '../models/product.interface'

@Component({
  selector: 'app-childComponemt',
  templateUrl: './childComponemt.component.html',
  
})
export class ChildComponemtComponent implements OnInit { 
  
@Input() prentProduct :Iproduct;
@Input() canshowimg : boolean;
@Output() toParentDelete = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  
  deletetheItems(){
    console.log(this.prentProduct.productName);
    this.toParentDelete.emit(this.prentProduct.productName);
  }
}
