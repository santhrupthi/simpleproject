import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emptyNull'
})
export class EmptyNullPipe implements PipeTransform {

  transform(value: any ,defaultValue:string): any {
    if (value) {
      return value +'it is comming';
    } else {
     
      if (defaultValue) {
        return defaultValue;
      } else {
        return "Not comming";
      }
    }
  }

}
