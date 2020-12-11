import { Component, OnInit ,ElementRef, ViewChild } from "@angular/core";
import { from } from 'rxjs';
import {  Iproduct } from './models/product.interface';


@Component({
    selector:'test-app',
    // template:'<h1> {{hold_data}}</h1>',
    templateUrl:'./test.component.html',
    
    styleUrls:['./test.component.scss']

    
})
export class TestComponent implements OnInit{  
    @ViewChild('header') headerElement : ElementRef;
ngOnInit(){
console.log('oninit testing');
}
    header_val;
    searchText: string = "";
    showPic :boolean = true;  
     hold_data : string = 'welcom to angular';
    products:Iproduct[]= [
    ]
    actualBikes: Iproduct[] = [...this.products];

    showfunction(){
        this.showPic = !this.showPic;
    }
    getColor(pro:Iproduct){
        const is1000 = pro.price ===1000;
        if(is1000){
            return {green :is1000, bold :is1000}
        }else{
            return {green :false, bold :is1000}
        }
      
    }
    getStyle(pro:Iproduct){
        const is100 = pro.price ===100;
        
            if(is100){
               return{background:"blue"};
            }else{
                return {background:"blue"}
            }
    }
    mouseEnterEvent() {}
    changeName(){
        this.products[0].productName = 'pulser'
    }
    filerFunction(){
        
    if (this.searchText) {
        this.products = this.actualBikes.filter((x) =>
          x.productName.toLowerCase().includes(this.searchText.toLowerCase())
        );
      } else {
        this.products = this.actualBikes;
      }
    }
    fromchildDelete(name:string){
        this.products.splice(
            this.products.findIndex((item) => item.productName === name),
            1
          );
    }
    getdata(){
        
        console.log('this is template reference',this.headerElement.nativeElement );
    }
}
