import { Injectable } from '@angular/core';
import{ Iproduct } from '../models/product.interface';

// @Injectable({
//   providedIn: 'root'
// })
export class CommomnService {

constructor() { }
 private originalpro:Iproduct[] = [ 
   //{
//   name:'discover',
//   pColor:'red',
//   price:100,
//   count_product:100,
//   discription:"the product is best in india , very secure one .",
//   isActive:false,
//   imagePath: "https://via.placeholder.com/150?text=CD100SS",

// }, {
//   name:'Activa',
//   pColor:'green',
//   price:1000,
//   count_product:100,
//   discription:"",
//   isActive:true,
//   imagePath:"assets/photos/img.jpg"

// },
// {
//   name:'discover',
//   pColor:'red',
//   price:100,
//   count_product:100,
//   discription:"the product is best in india , very secure one .",
//   isActive:false,
//   imagePath: "https://via.placeholder.com/150?text=CD100SS",

// }, {
//   name:'Activa',
//   pColor:'green',
//   price:1000,
//   count_product:100,
//   discription:"",
//   isActive:true,
//   imagePath:"assets/photos/img.jpg"

// }
];

getProduct():Iproduct[]{
  return this.originalpro;
}
  

}
