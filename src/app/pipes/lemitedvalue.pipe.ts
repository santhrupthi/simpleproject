import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lemitedvalue'
})
export class LemitedvaluePipe implements PipeTransform {

  transform(value: any): any {
    if(value){
      return value.toString().substr(0, 5);
    }else{
      return 'no mention name';
    }
   
  }

}
