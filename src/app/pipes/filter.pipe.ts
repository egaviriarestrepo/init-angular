import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], value: string) {

    return value ? list.filter(item => item.gender === value) : list;
  }

}
