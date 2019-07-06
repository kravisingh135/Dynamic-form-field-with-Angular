import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keySplit'
})
export class KeySplitPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.split('_').join(' ');
  }

}
