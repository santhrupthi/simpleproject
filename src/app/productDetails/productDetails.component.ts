import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Iproduct } from '../models/product.interface';
import{ HttprequestService } from '../servieses/httprequest.service';
@Component({
  selector: 'app-productDetails',
  templateUrl: './productDetails.component.html',
  styleUrls: ['./productDetails.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private activateRoute :ActivatedRoute,private HttprequestService:HttprequestService) { }
  productId: number;
  currentProduct;
  ngOnInit() {    
    // console.log(this.activateRoute.snapshot);
    // this.productId = this.activateRoute.snapshot.params["id"];
    // this.HttprequestService.getProductDtl(this.productId).subscribe((data:Iproduct) =>{
    //   this.currentProduct = data;
    //   console.log('this is current data',this.currentProduct)
    // },(error)=>{

    // })
    console.log("Inside COmponent", this.activateRoute);
    this.currentProduct = this.activateRoute.snapshot.data["product"];

  }

}
