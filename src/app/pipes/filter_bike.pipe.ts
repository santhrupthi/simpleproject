import { Pipe, PipeTransform } from '@angular/core';
import {  Iproduct } from '../models/product.interface'
@Pipe({
  name: 'filter_bike',
  
})
export class Filter_bikePipe implements PipeTransform {

  transform(bikes: Iproduct[], searchText: string): any {
  
    console.log("Inside PIPE", bikes);
    if (searchText) {
      return bikes.filter((x) =>      
        x.productName.toLowerCase().includes(searchText.toLowerCase())
      );
    } else {
      return bikes;
    }
  }

}
