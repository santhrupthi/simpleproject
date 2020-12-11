import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
   if(value){
      return value.toString().substr(0,16);
   }else{
     return 'discription is not available';
   }
  }

}
