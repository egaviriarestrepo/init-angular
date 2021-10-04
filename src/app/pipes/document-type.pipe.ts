import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'documentType'
})
export class DocumentTypePipe implements PipeTransform {

  transform(value: any, args?: any): string {
    switch (value) {
      case 'N':
        return 'Nit';
        break;
      case 'C':
        return 'CC';
        break;
      case 'E':
        return 'CE';
        break;
        case 'P':
      return 'Pasaporte';
      break;

      default:
        return value;
        break;
    }
  }

}
