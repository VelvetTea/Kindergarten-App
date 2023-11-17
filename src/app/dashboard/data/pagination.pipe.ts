import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {

  transform(value: number) : any {
    let res = [];
    for (let i = 0; i < value; i++) {
        res.push(i + 1);
      }
      return res;
  }

}