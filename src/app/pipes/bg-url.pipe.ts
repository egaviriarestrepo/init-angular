import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bgUrl'
})
export class BgUrlPipe implements PipeTransform {

  transform(value: string): string {
    return `url(assets/img/icons/${value})`;
  }

}
