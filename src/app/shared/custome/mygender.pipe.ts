import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mygender'
})
export class MygenderPipe implements PipeTransform {

  transform(value: string,gender:string){
    if(gender.toLocaleLowerCase()=="male") {
      return "Mrs. " + value;
    } else {
      return "Miss. " + value;
    }
    }
  }
  


